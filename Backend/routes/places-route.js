const express = require("express");

const { check } = require("express-validator")

const router = express.Router();

const placeController = require("../controllers/place-contollers")



router.get("/:pid", placeController.getPlaceById)

router.get("/user/:uid", placeController.getPlacesByuser)

router.post(
    "/",
    [check("title").not().isEmpty(),
    check("address").not().isEmpty(),
    check("description").isLength({ min: 5 })
    ],
    placeController.createplace)


router.patch("/:pid", placeController.updateplace)

router.delete("/:pid", placeController.deletePlaceById)

module.exports = router;