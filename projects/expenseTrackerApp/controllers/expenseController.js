const sequelize = require('../util/database');
const AWS = require('aws-sdk');

function uploadToS3(data, filename) {
    const BUCKET_NAME = 'expensetracker000';
    const IAM_USER_KEY = process.env.IAM_USER_KEY;
    const IAM_USER_SECRET = process.env.IAM_USER_SECRET;

    const s3Bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET
    });

    const params = {
        Bucket: BUCKET_NAME,
        Key: filename,
        Body: data,
        ACL: 'public-read'
    };

    return new Promise((resolve, reject) => {
        s3Bucket.upload(params, (err, s3Response) => {
            if (err) {
                console.log('Something went wrong', err);
                reject(err);
            }
            else {
                console.log('sccess', s3Response);
                resolve(s3Response.Location);
            }
        })
    })
}

exports.postExpense = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const data = req.body;
        const expense = await req.user.createExpense(data, { transaction: t });

        req.user.totalExpense += data.expenseamount;
        await req.user.save({ transaction: t });

        await t.commit();
        res.json(expense);
    }
    catch (err) {
        await t.rollback();
        console.log(err);
    }
};

exports.getExpense = (req, res, next) => {
    req.user.getExpenses()
        .then(expenses => {
            // console.log(req.user.totalExpense);
            return res.json(expenses);
        })
        .catch(err => console.log(err));
};

exports.deleteExpense = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const expenseId = req.params.id;
        const expense = await Expenses.findByPk(expenseId, { transaction: t });

        await expense.destroy({ transaction: t });

        req.user.totalExpense -= expense.expenseamount;
        await req.user.save({ transaction: t });

        await t.commit();
        res.json('SUCCESS');
    }
    catch (err) {
        await t.rollback();
        console.log(err);
    }
};

// donaload user's expense in txt file
exports.downloadExpense = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const UserExpenses = await req.user.getExpenses({ transaction: t });
        const stringifiedExpenses = JSON.stringify(UserExpenses);
        
        // filename will be Data & Time (different for each upload)
        // files is going in a folder --> named Expense-userId, for "Expense-${userId}/..."
        const userId = req.user.id;
        
        const filename = `Expense-${userId}/${new Date()}.txt`;
        const fileURL = await uploadToS3(stringifiedExpenses, filename);
        console.log('Testing..', fileURL);
        
        const saveFileURLinDB = await req.user.createDownload({
            url: fileURL
        }, { transaction: t });

        await t.commit();
        res.status(200).json({ fileURL, success: true });
    }
    catch (err) {
        res.status(200).json({ fileURL: '', success: false });
        await t.rollback();
        console.log(err);
    }

};