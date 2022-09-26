exports.getRoles = (req,res,next) => {
    res.render('admin/roles/index')
}

exports.createRole = (req,res,next) => {

    res.render('admin/roles/create')
}

exports.storeRole = (req,res,next) => {

    res.redirect('admin/roles')
}

exports.editRole = (req,res,next) => {

    res.render('admin/roles/edit')
}

exports.updateRole = (req,res,next) => {

    res.redirect('admin/roles')
}

exports.deleteRole = (req,res,next) => {

    res.redirect('admin/roles')
}