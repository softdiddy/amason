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

  //get single product
  router.get("/products/:id", async (req, res) => {
    try {
      let product = await Product.findOne({ _id: req.params.id });
  
      res.json({
        status: true,
        product: product,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  });
  

  //update product
  router.put("/products/:id", async (req, res) => {
    try {
      let product = await Product.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            title: req.body.title,
            description: req.body.description,
            photo: req.body.photo,
            price: req.body.price,
            stockQuantity: req.body.stockQuantity,
            category: req.body.category,
            ownerId: req.body.ownerId
          },
        },
        { upsert: true }
      );
  
      res.json({
        success: true,
        updatedProduct: product,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  });
  

  //delete Product
  router.delete("/products/:id", async (req, res) => {
    try {
      let deleteproducts = await Product.findOneAndDelete({ _id: req.params.id });

      if (deleteproducts){
        res.json({
            status: true,
            menubar: "Product has been deleted"
        });
      }


    } catch (err) {

      res.status(500).json({
        success: false,
        message: err.message,
      });

    }
  });
  


module.exports = router;