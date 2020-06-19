var show = document.querySelector("span");

show.addEventListener("click", function(){
	let read = document.querySelector(".trial");

	if(read.style.display === "none"){
	     read.style.display = "block"
	}else{
		read.style.display = "none"
	}
});