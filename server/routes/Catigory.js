const router = require("express").Router();
const Category = require("../models/Category");

//Post Request
router.post("/catigory", async (req, res) => {
  try {
    let category = new Category();
    category.title = req.body.title;

    await category.save();

    res.json({
      status: true,
      message: "Category Created Successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//GET request
router.get("/catigory", async (req, res) => {
  try {
    let categories = await Category.find();
   
    res.json({
      status: true,
      categories: categories,
    });
  } catch (err) {
    status: false,
    console.log(err);
  }
});

module.exports = router;
