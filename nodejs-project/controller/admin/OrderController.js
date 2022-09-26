exports.getOrders = (req,res,next) => {
    res.render('admin/orders/index')
}

exports.viewOrder = (req,res,next) => {

    res.render('admin/orders/view')
}