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
        product.category = req.body.categoryId;
        product.owner = req.body.ownerId;

        console.log(product);
        
        await product.save();

        res.json({
            status: true,
            message: "Successfully Saved"
        });

    }catch (err){
         console.log(err);
    }

});

//get all request
router.get("/products", async (req, res) => {
    try {
      let products = await Product.find();
  
      res.json({
        status: true,
        products: products,
      });
    } catch (err) {
      status: false, console.log(err);
    }
  });


module.exports = router;