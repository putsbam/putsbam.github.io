// click counter

try {
  
function clicked() {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.countapi.xyz/hit/putsbam.glitch.me/clickcounter"
  );
  xhr.responseType = "json";
  xhr.onload = function() {
    alert(
      `By now, we have ${this.response.value} smiles! Thank you so much! <3`
    );
  };
  xhr.send();
}
} catch(e){
  
  alert(`There was an Error, I'm sorry! :(\nPlease report this: ${e.message}`)
  throw new Error(e)
}

