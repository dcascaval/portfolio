function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

window.onload = function(e){ 
	var captions = document.querySelectorAll('.caption');
	for (caption of captions){
    	caption.onclick = function(){
			var sibling = this.nextElementSibling;
			var vis = sibling.style.display;
			if (vis != "none")
			{
				sibling.style.display = "none";
				this.innerHTML = setCharAt(this.innerHTML,1,"+");
			}
			else{
				sibling.style.display = "block";
				this.innerHTML = setCharAt(this.innerHTML,1,"-");
			}
		};
	}
}