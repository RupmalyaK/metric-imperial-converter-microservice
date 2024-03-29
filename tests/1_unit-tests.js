/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      let input = "3.2L";
      assert.equal(convertHandler.getNum(input) , 3.2);
      done();
    });
    
    test('Fractional Input', function(done) {
      let input = "3/2L";
      assert.equal(convertHandler.getNum(input) , 1.5);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      let input = "3/3.2L";
      assert.equal(convertHandler.getNum(input) , 0.9375);
      done();
    });
    
    test('invalid input (double fraction)', function(done) {
      let input = "3/2/2L";
      assert.equal(convertHandler.getNum(input) , "invalid input number");
      done();
    });
    
     test('No Numerical Input', function(done) {
      let input = "L";
      assert.equal(convertHandler.getNum(input) , 1); 
      done();
    }); 
    
  });
  
 suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','gal','l','mi','km','lbs','kg'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele) , ele);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      let input = "FAL";
      assert.equal(convertHandler.getUnit(input) , "Unknown Unit Input");
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
     var input = ['gal','l','mi','km','lbs','kg'];
     let expect = ["gallons" , "litres" , "miles" , "kilometers" , "pounds" , "kilograms"];   
      input.forEach((ele , i )=> {
      assert.equal(convertHandler.spellOutUnit(ele) , expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
   test('L to Gal', function(done) {
       const input = [5 , 'L'];
       const expected = 1.32086;
       assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
       done();
    });
    
    test('Mi to Km', function(done) {
       const input = [5 , "mi"];
       const expected = 8.04672;
       assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
       done();
    });
    
    test('Km to Mi', function(done) {
      const input = [5 , "km"];
       const expected = 3.10686;
       assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
       done();
    });
    
    test('Lbs to Kg', function(done) {
       const input = [5 , "lbs"];
       const expected = 2.26796;
       assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
       done();
    });
    
    test('Kg to Lbs', function(done) {
       const input = [5 , "kg"];
       const expected = 11.0231;
       assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
       done();
    });
  });
  
  suite("Function convertHandler.getSring(initNum, initUnit, returnNum, returnUnit)" , () => {
  test("toString" , (done) => {
  let input = [5 , "kg" , 11.02312 , "lbs"];
  assert.equal(convertHandler.getString(input[0] , input[1] , input[2] , input[3]) , "5 kilograms converts to 11.02312 pounds");  
  done();  
  });
  });
});