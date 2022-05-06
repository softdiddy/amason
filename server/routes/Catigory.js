const router = require("express").Router();
const Category = require("../models/Category")

//Post Request
router.post("/catigory", async (req, res) => {
    try{
        let category = new Category();
        category.title = req.body.title;
       
        await category.save();

        res.json({
            status: true,
            message: "Category Created Successfully"
        });

    }catch (err){
         console.log(err);
    }

});


module.exports = router;