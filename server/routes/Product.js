const router = require("express").Router();
const Product = require("../models/Product")

//Post Request
router.post("/products", async (req, res) => {
    try{
        let product = new Product();
        product.title = req.body.title;
        product.description = req.body.description;
        product.photo = req.body.photo;
        product.price = req.body.price;
        product.stockQuantity = req.body.stockQuantity;

        await product.save();

        res.json({
            status: true,
            message: "Successfully Saved"
        });

    }catch (err){
         console.log(err);
    }

});


module.exports = router;