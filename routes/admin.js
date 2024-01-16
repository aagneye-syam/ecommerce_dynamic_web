var express = require("express");
var router = express.Router();
var productHelpers = require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function (req, res, next) {
  let products = [
    {
      name: "Levis Jeans",
      category: "Jeans",
      description: "Levis 501 jeans ",
      image:
        "https://bestmediainfo.com/uploads/2023/03/1678162677.Levis-501R-featuring-Deepika-Padukone.jpg",
    },
    {
      name: "Jacket",
      category: "Jacket",
      description: "LEVIS 501 Jeans Collection",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPIv53II1zhL5InjgNuTxHhjC9hurd0Ca1lZGz-1zIbU8_mjRznTr-0BPkTatNFF6IKYw&usqp=CAU",
    },
    {
      name: "Blue Pants",
      category: "Pants",
      description: "Crafted SS23 Collection ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyhi4e2_7ixiiEao8M9HXoBrQv9KDCjGQsg&usqp=CAU",
    },
    {
      name: "Dark blue Tone",
      category: "Jeans",
      description: "Off 68% for the fall",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF97JOLjcmTIDOJM3aUnihD2ww_Mg6CsBXdjOtadiw3djw8xElC6rALs78CWx2rRX-AaA&usqp=CAU",
    }
  ]

  res.render('admin/view-products', { products, admin: true });
});

router.get('/add-product',function(req,res){
  res.render('admin/add-product')
});

router.post('/add-product',(req,res)=>{
  //console.log(req.body);
  //console.log(req.files.Image);
  productHelpers.addProduct(req.body,(id)=>{
    let image=rq.files.Image
    image.mv('../public/product-images/'+id+'.jpg',(err,done)=>{
          if(!err){
            res.render('admin/add-product');
          }
    })
    
  });

});

module.exports = router;
