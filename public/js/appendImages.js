// append images from folder /img

var folder = "/public/img/";

$.ajax({
  method: "GET",
  url: folder,
  success: function(data) {
    
    var arrayImgs = []
    
    $(data)
      .find("a")
      .attr("href", async function(i, val) {
        if (val.match(/\.(jpe?g|png|gif)$/)) {
          
          var valueToAppend = '<img src="'+val+'"/>';

          arrayImgs.push(`(${i})`)
          
          if (i <= 12) {
            
            await $("#column1").append(valueToAppend);
            
          } else {
            
            await $("#column2").append(valueToAppend);         
          }
        }
      });
    
    console.log(`Images Loaded (${arrayImgs.length}) : ${arrayImgs.join(' | ')}`)
    
  },
error: function(xhr, textStatus, errorThrown){
  alert(`There was an Error, I'm sorry! :(\nPlease report this: ${errorThrown.message}`)
  throw new Error(errorThrown)
    }
});
