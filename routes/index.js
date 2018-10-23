var express = require('express');
var router = express.Router();

/* GET home page. */

let posts = [
  // {"3825430854-TENHERO-107-10/04/2018 12:20:26 CH-38-WIN-6-2-29-267-40-1-100-36-29-343"},
  {
      id: "3825430854",
      TenHero: "Kien ngo",
      Number: "107",
      date: "10/04/2018",
      startAt: "12:20:26",
       
  },
  {
      id: "84350854",
      TenHero: "Anh Hai Pro",
      Number: "107",
      date: "10/04/2018",
      startAt: "12:20:26"
  },
  {
      id: "3825089234",
      TenHero: "Pudge",
      Number: "107",
      date: "10/04/2018",
      startAt: "12:20:26"
  }
  ];
  
  
router.get('/', function(req, res, next) {
  res.render('index', {data: {posts: posts}});
  console.log(data);
});

module.exports = router;
