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
      message: err.message,
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
    status: false, console.log(err);
  }
});

//get single owner
router.get("/owner/:id", async (req, res) => {
  try {
    let owner = await Owner.findOne({ _id: req.params.id });

    res.json({
      status: true,
      owners: owners,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//Update owner
router.put("/owner/:id", async (req, res) => {
  try {
    let owner = await Owner.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          about: req.body.about,
          photo: req.body.photo,
        },
      },
      { upsert: true }
    );

    res.json({
      success: true,
      updatedOwner: owner,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//delete owner
router.delete("/owner/:id", async (req, res) => {
    try {
      let deleteowner = await Owner.findOneAndDelete({ _id: req.params.id });

      if (deleteowner){
        res.json({
            status: true,
            menubar: "Owner has been deleted"
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
