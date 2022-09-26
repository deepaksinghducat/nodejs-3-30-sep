exports.getUsers = (req,res,next) => {
    res.render('admin/users/index')
}

exports.createUser = (req,res,next) => {

    res.render('admin/users/create')
}

exports.storeUser = (req,res,next) => {

    res.redirect('admin/users')
}

exports.editUser = (req,res,next) => {

    res.render('admin/user/edit')
}

exports.updateUser = (req,res,next) => {

    res.redirect('admin/users')
}

exports.deleteUser = (req,res,next) => {

    res.redirect('admin/users')
}