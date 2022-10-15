const Role  = require("../../model/Role")

exports.getRoles = (req,res,next) => {

    Role.find().then((roles) => {
        res.render('admin/roles/index', {roles})
    });

}

exports.createRole = (req,res,next) => {

    res.render('admin/roles/create')
}

exports.storeRole = (req,res,next) => {
    Role.create({
        name: req.body.name,
        status: req.body.status == "1" ?  true : false 
    })

    res.redirect('/admin/roles')
}

exports.editRole = (req,res,next) => {

    Role.findOne({_id: req.params.id}).then((role) => {
        res.render('admin/roles/edit', { role })
    })

}

exports.updateRole = (req,res,next) => {

    Role.updateOne({_id: req.params.id} , {$set: {
        name: req.body.name,
        status: req.body.status == "1" ?  true : false 
    }}).then((role) => {
        res.redirect('/admin/roles')
    })
}

exports.deleteRole = (req,res,next) => {
    console.log(req.params.id);

    Role.deleteOne({_id: req.params.id}).then((role) =>{
        res.redirect('/admin/roles')
    });
}