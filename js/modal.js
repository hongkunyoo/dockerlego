
// Get the modal
var modal = document.getElementById('myModal');
console.log(modal);
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
console.log(img);
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
	console.log('hello');
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
