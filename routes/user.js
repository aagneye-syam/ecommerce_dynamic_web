var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"Levis Jeans",
      category:"Jeans",
      descrption:"Levis 501 jeans ",
      image:"https://bestmediainfo.com/uploads/2023/03/1678162677.Levis-501R-featuring-Deepika-Padukone.jpg",
    },
    {
      name:"Jacket",
      category:"Jacket",
      descrption:"LEVIS 501 Jeans Collection",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPIv53II1zhL5InjgNuTxHhjC9hurd0Ca1lZGz-1zIbU8_mjRznTr-0BPkTatNFF6IKYw&usqp=CAU"
    },
    {
      name:"Blue Pants",
      category:"Pants",
      descrption:"Crafted SS23 Collection ",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyhi4e2_7ixiiEao8M9HXoBrQv9KDCjGQsg&usqp=CAU",
    },
    {
      name:"Dark blue Tone",
      category:"Jeans",
      descrption:"Off 68% for the fall",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF97JOLjcmTIDOJM3aUnihD2ww_Mg6CsBXdjOtadiw3djw8xElC6rALs78CWx2rRX-AaA&usqp=CAU",
    }
  ]
  res.render('index', {products, user:true});
});

module.exports = router;
