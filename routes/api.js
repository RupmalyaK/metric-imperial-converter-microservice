/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
     
      var initUnit = convertHandler.getUnit(input);
      if(initUnit === "Unknown Unit Input" && initNum === "invalid input number") 
      { 
        res.status(422).send("invalid number and unit");
        return;
      } //CONTINUE FROM HERE
      
      if(initUnit === "Unknown Unit Input") {
        res.status(422).send("invalid unit");
        return;   
      }
    
      if(initNum === "invalid input number"){
        res.status(422).send("invalid number");
        return; 
         }
    
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      res.status(200).json({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        "string":toString
      });
    });
    
};
