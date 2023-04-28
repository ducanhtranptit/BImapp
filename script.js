
function decimalToBinary() {
    var decimal = document.getElementById("decimal").value;
    var binary = parseInt(decimal, 10).toString(2);
    document.getElementById("binary").innerHTML = binary;
  }
  

  function binaryToDecimal() {
    var binary = document.getElementById("binary2").value;
    var decimal = parseInt(binary, 2).toString(10);
    document.getElementById("decimal2").innerHTML = decimal;
  }
  
 
  function binaryEncode() {
    var string = document.getElementById("string").value;
    var encoded = "";
    for (var i = 0; i < string.length; i++) {
      var binary = string[i].charCodeAt(0).toString(2);
      encoded += binary.padStart(8, "0") + " ";
    }
    document.getElementById("encoded").innerHTML = encoded;
  }