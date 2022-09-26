exports.home = (req,res,next) => {
    res.render('shop/index')
}

exports.viewProduct = (req,res,next) => {
    res.render('shop/product-details')
}