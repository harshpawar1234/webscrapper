const puppeteer = require("puppeteer");
const axios = require('axios');
const { getResults } = require("../helper/helper");
const scrape = async(req,res) => {
  const s = req.params.user.trim();
  try {
    if (!s) {
      res.status(400).send({ status: "failure" });
    }
 
  const result=await getResults(`https://twitter.com/search?q=${s}&src=typeahead_click&f=top`);
  return res.status(200).send({

      result,
    status:"success" 
  })
  }catch (err) {
    console.log(err);
    return res.status(400).json({ status: err })
  }
}
module.exports =scrape;