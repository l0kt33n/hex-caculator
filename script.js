function convertColor() {
    var color = document.getElementById("color").value;
    var alpha = parseFloat(document.getElementById("alpha").value);
  
    // Validate input
    if (!isValidHexColor(color) || isNaN(alpha) || alpha < 0 || alpha > 100) {
      document.getElementById("result").innerHTML = "Invalid input!";
      return;
    }
  
    // Convert alpha to decimal value
    var alphaDecimal = alpha / 100;
  
    // Add alpha to the color
    var convertedColor = "#" + color + convertDecimalToHex(alphaDecimal);
  
    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = convertedColor;
    resultElement.classList.add("result-highlight");
  
    // Enable copy to clipboard button
    var copyButton = document.getElementById("copyButton");
    copyButton.disabled = false;
    copyButton.innerText = "Copy to Clipboard";
    copyButton.addEventListener("click", function() {
      copyToClipboard(convertedColor);
      copyButton.innerText = "Copied!";
    });
  }
  

// Function to check if the input color is a valid 6-digit hex value
function isValidHexColor(color) {
    var regex = /^#?([0-9A-F]{6})$/i;
    return regex.test(color);
}

// Function to convert decimal value to 2-digit hex value with capital letters
function convertDecimalToHex(decimal) {
    var hex = Math.round(decimal * 255).toString(16).toUpperCase();
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}


// Function to copy the converted color to the clipboard
function copyToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = 0;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

// Add an event listener to input fields to trigger conversion on "Enter" key press
document.getElementById("color").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      convertColor();
    }
  });
  
  document.getElementById("alpha").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      convertColor();
    }
  });
  