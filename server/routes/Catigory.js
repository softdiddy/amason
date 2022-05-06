const router = require("express").Router();
const Category = require("../models/Category");

//Post Request
router.post("/catigory", async (req, res) => {
  try {
    let category = new Category();
    category.type = req.body.type;

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
    status: false, console.log(err);
  }
});

//Get Single Catigory
router.get("/catigory/:id", async (req, res) => {
  try {
    let category = await Category.findOne({ _id: req.params.id });

    res.json({
      status: true,
      category: category,
    });
  } catch (err) {
    status: false, console.log(err);
  }
});

//update a categoty
router.put("/catigory/:id", async (req, res) => {
  try {
    let category = await Category.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          type: req.body.type,
        }
      },
      { upsert: true }
    );

    res.json({
      success: true,
      updatedCategory: category,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
