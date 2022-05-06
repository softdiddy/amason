const router = require("express").Router();
const Owner = require("../models/Owner");

//Post Request
router.post("/owner", async (req, res) => {
  try {
    let owner = new Owner();
    owner.name = req.body.name;
    owner.about = req.body.about;
    owner.photo = req.body.photo;

    await owner.save();

    res.json({
      status: true,
      message: "Owner Created Successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//GET request
router.get("/owner", async (req, res) => {
  try {
    let owners = await Owner.find();
   
    res.json({
      status: true,
      owners: owners,
    });
  } catch (err) {
    status: false,
    console.log(err);
  }
});

module.exports = router;
