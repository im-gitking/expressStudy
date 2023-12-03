const Appointment = require('../models/appointments');

exports.getLogics = (req, res, next) => {
    Appointment.findAll()
        .then(appoinments => {
            res.json(appoinments);
            // console.log(appoinment);
        })
        .catch(err => {
            console.log(err);
        })
};

exports.postLogics = (req, res, next) => {
    const formSubmit = req.body;
    console.log(formSubmit);
    const data = {
        userName: formSubmit.uname,
        phoneNumber: formSubmit.pnum,
        email: formSubmit.email
    };
    Appointment.create(data)
        .then(appoinment => {
            console.log(appoinment.id);
            res.json({ id: appoinment.id, ...data });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.deleteUser = (req, res, next) => {
    const id = req.params.id;
    // console.log(id);
    Appointment.findByPk(id)
    .then(appoinment => {
        return appoinment.destroy();
    })
    .catch(err => {
        console.log(err);
    })
    res.json({id: id, msg: 'success'});
}

exports.editUser = (req, res, next) => {
    const id = req.params.id;
    Appointment.findByPk(id)
    .then(appoinment => {
        // console.log(appoinment.userName);
        res.json(appoinment);
    })
    .catch(err => {
        console.log(err);
    })
}