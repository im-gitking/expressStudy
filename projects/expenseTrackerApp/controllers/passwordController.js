const brevo = require('@getbrevo/brevo');

exports.forgotpassoword = (req, res, next) => {
    console.log(1245);
    const client = brevo.ApiClient.instance;
    
    const apiKey = client.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    const tranEmailApi = new brevo.TransactionalEmailsApi();

    const sender = {
        email: 'avipal577@gmail.com'
    }

    const reciver = [
        {
            email: 'vast6r@gmail.com',
        }
    ]

    tranEmailApi.sendTransacEmail({
        sender,
        to: reciver, 
        subject: 'Test Mail',
        textContent: 'Im testing Brevo SMTP Service for Expense Tracker'
    })
    .then(console.log)
    .catch(console.log);
};