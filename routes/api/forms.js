const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const Validator = require("validator");
const validateSubmitFormInput = require("../../validation/forms");
const Response = require("../../models/forms");
const User = require("../../models/User");

// @route POST api/forms/submit
// @desc Submit Form Data
// @access Only for Logged in users
router.post("/submit", (req, res) => {
  
  //Token Validation
  var headers = req.headers;
  if (headers.authorization && headers.authorization.split(' ')[0] === 'Bearer') {
    var token = headers.authorization.split(' ')[1];
    try {
      var decoded = jwt.verify(token, keys.secretOrKey);
      if(Validator.isEmpty(decoded.id)) {
        return res.status(401).json({Error: "Unauthorized" });
      }

      // Input validation
      const { errors, isValid } = validateSubmitFormInput(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }

      // Input Regeneration
      const totalResponse = [];
      req.body.responses.forEach(response => {
        totalResponse.push({
          identifier: response.identifier,
          headline: (response.headline)? response.headline : "",
          description: (response.description)? response.description : "",
          answer: (response.answer)? response.answer : "",
        });
      });

      // Finding valid user 
      User.findById(decoded.id).then(userData => {

        // Create a new reposne
        const newResponse = new Response({
          totalResponse: totalResponse,
          submittedBy: userData._id,
          submittedByName: userData.name,
          date: Date.now(),
        });

        // Save the response
        newResponse.save()
        .then(data => res.status(200).json({success: "Data Successfully added" }))
        .catch(err => res.status(500).json({error: err.toString() }));

      }).catch(err => res.status(400).json({error: err.toString() }));
    } catch(err) {
      console.log(err);
      return res.status(401).json({Error: "Not a Valid Token" });
    }
  } else {
    return res.status(401).json({Error: "Token Not Found" });
  }
});

// @route GET api/forms/get
// @desc Get Form Response Data
// @access for anyone
router.get("/get", (req, res) => {
  try {
    // Find all the responses
    Response.find()
      .then(data => res.status(200).json({data: data }))
      .catch(err => res.status(500).json({error: "Internal Server Error" }))
  } catch(err) {
    return res.status(500).json({Error: "Internal Server Error" });
  }
});

module.exports = router;