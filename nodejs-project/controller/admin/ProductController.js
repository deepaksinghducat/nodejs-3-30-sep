exports.getProducts = (req,res,next) => {
    res.render('admin/products/index')
}

exports.createProduct = (req,res,next) => {

    res.render('admin/products/create')
}

exports.storeProduct = (req,res,next) => {

    res.redirect('admin/products')
}

exports.editProduct = (req,res,next) => {

    res.render('admin/products/edit')
}

exports.updateProduct = (req,res,next) => {

    res.redirect('admin/products')
}

exports.deleteProduct = (req,res,next) => {

    res.redirect('admin/products')
}