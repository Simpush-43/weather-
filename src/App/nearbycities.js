const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.get("/places", async (req, res) => {
  try {
    // latitude and longitude from user location
    const {lat,lon} = req.query
    if(!lat || !lon){
      return res.status(400).json({error:"Latitude and longitude are required"})
    }
    const userName= 'pushkar11'
    const url = `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${lat}&lng=${lon}&radius=300&style=full&maxRows=8&username=${userName}&featureClass=P&orderby=population`;
    const Response = await axios.get(url);
    if (Response.data.geonames.length > 0) {
      const cities = Response.data.geonames.slice(0,4).map(place=>place.name);
      res.json({nearby_city:cities})
    }else{
      res.json({error:'no nearby city found'})
    }
  } catch (err) {
    res.status(500).json({ error: "Error fetching places" });
  }
});

app.listen(5000, () => {
  console.log(`server is runnimg on port 5000`);
});
