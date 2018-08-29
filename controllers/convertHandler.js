/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;

    const num = input.slice(0 , input.indexOf(/[a-zA-Z]/.exec(input)));  
    
    if(!num)
    {
      result = 1;
      return result; 
    } 
    
    if(/[^0-9\.\/]/g.test(num) || /\/.*\//g.test(num)){   
    result = "invalid input number";
    return result; 
    }
    
    let fractionIndex = num.indexOf('/'); 
    if (fractionIndex != -1)
    { 
      result = num.slice(0,fractionIndex) / num.slice(fractionIndex+1 , num.length);
      return result;
    }
    
    result = num;
    return result; 
  };
  
  this.getUnit = function(input) {
    var result;
    
    let unit = input.slice(input.indexOf(/[a-zA-Z]/.exec(input)) , input.length); 
    const originalUnit = unit; 
    unit = unit.toUpperCase();
    switch(unit)
        {
      case 'L': result = originalUnit; return result;
      case "KM": result = originalUnit ;return result; 
      case 'MI': result = originalUnit; return result;
      case "GAL": result = originalUnit; return result;  
      case "LBS": result = originalUnit; return result;
      case "KG": result = originalUnit; return result;
      default: result = "Unknown Unit Input"; return result;      
        } 
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    initUnit = initUnit.toUpperCase(); 
    switch(initUnit)
        {
      case 'L': result = 'gal'; return result;
      case "KM": result = "mi"; return result; 
      case 'MI': result = "km"; return result;
      case "GAL": result = "l"; return result;  
      case "LBS": result = "kg"; return result;
      case "KG": result = "lbs"; return result;
      default: result = "Unknown Unit Input"; return result;      
      } 
  };

  this.spellOutUnit = function(unit) {
    var result;
    
     unit = unit.toUpperCase(); 
     switch(unit)
        {
      case 'L': result = 'litres'; return result;
      case "KM": result = "kilometers"; return result; 
      case 'MI': result = "miles"; return result;
      case "GAL": result = "gallons"; return result;  
      case "LBS": result = "pounds"; return result;
      case "KG": result = "kilograms"; return result;
      default: result = "Unknown Unit Input"; return result;      
        } 
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    initUnit = initUnit.toUpperCase();
    
    switch(initUnit)
        {
      case 'L': result = result = initNum / galToL; return result;
      case "KM": result = result = initNum / miToKm; return result; 
      case 'MI': result = result = initNum * miToKm; return result;
      case "GAL": result = result =  initNum * galToL; return result;  
      case "LBS": result = result = initNum * lbsToKg; return result;
      case "KG": result =  result = initNum / lbsToKg ; return result;
      default: result = "Unknown Unit Input"; return result;      
        } 
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;  
    result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum.toFixed(5) + " " + this.spellOutUnit(returnUnit);  
    return result;
  };
  
}

module.exports = ConvertHandler;
