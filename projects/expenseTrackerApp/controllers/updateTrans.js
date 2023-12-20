exports.updateTrans = async (req, res, next) => {
    try {
        const order_id = req.body.order_id;
        const order = await req.user.getOrders({where: { orderId: order_id }});
        // await req.user.getOrders({ orderId: order.id, paymentId: 'PENDING', status: 'PENDING' });
        order[0].paymentId = req.body.payment_id;
        order[0].status = 'SUCCESS';
        const updateOrder = await order[0].save();
        res.status(201).json(updateOrder);
    }
    catch (err) {
        console.log(err);
    }
}