const express = require("express");
const router = express.Router();
const { editBrewer, getBrewerByUserID } = require("../db/queries/brewers");
const path = require('path')
const multer  = require('multer')
const upload = multer({
  dest: 'images',
 });


/* GET brewers listing. */
router.get("/", function (req, res, next) {
  getBrewerByUserID(req.body).then((data) => {
    res.send(data);
  });
});


// ---- Edit Brewery/ Add Brewer
router.post("/edit", upload.single('logo'),function (req, res) {
  const imgdata = req.file
  const data = req.body
  console.log('data:', data)
  console.log('imgdata:', imgdata)
  console.log('req.session.user_id:', req.session.user_id)
  const newBrewer = {
    user_id: req.session.user_id,
    brewery: data.brewery,
    street_number: data.street_number,
    street: data.street,
    city: data.city,
    state_prov: data.state_prov,
    post_zip: data.post_zip,
    website: data.website,
    phone: data.phone,
    filename: imgdata.filename,
    mimetype: imgdata.mimetype,
    filepath: imgdata.path,
    size: imgdata.size
  };
  console.log('newBrewer:', newBrewer)
  editBrewer(newBrewer).then((e) => {
    req.session.brewer_id = e[0].id;
    res.send(200)
  });
});



router.post("/logout", (req, res) => {
  req.session = null;
  res.json();
});

module.exports = router;
