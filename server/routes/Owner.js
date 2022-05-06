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
    res.status(500).json({
        success: false,
        message: err.message
    });
  }
});

//get all request
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

//get single owner
router.get("/owner/:id", async (req, res) => {
    try {
      let owner = await Owner.findOne({ _id: req.params.id });
  
      res.json({
        status: true,
        owner: owner,
      });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
  });
  

module.exports = router;
