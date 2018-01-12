function ease(t) { 
	return t<.5 ? 2*t*t : -1+(4-2*t)*t;
}

var moved = false;
var orgs = []; var yOrgs = [];
var times = 0; 
var draw;

var click = true;

function posAnimator (frames, eList, starts, targs, rev, speed = 1)
{
	var pos = 0;
	var num = eList.length;
	
	var id = setInterval(func, 5);
  	function func ()
	{
  		if (pos >= frames)
		{
  			clearInterval(id);
  		}
  		else
		{
  			pos += speed;
  			var e = ease(pos/frames);
			var op = rev ? 1 - e : e;
  				for (var i = 0; i < num; i++)
  				{
					var j = i % starts.length;
					var k = i % targs.length;
					var xPos = starts[j][0] + ((targs[k][0]-starts[j][0])*e);
  					var yPos = starts[j][1] + ((targs[k][1]-starts[j][1])*e);
					eList[i].style.left = xPos + "px";
  					eList[i].style.top = yPos + "px";
					eList[i].style.opacity = op;
				}
  		}
    }
}

function fadeAnimator (fr, objects, rev, speed = 1)
  {
	var pos = 0;
	var num = objects.length;
	
	for (object of objects){
		object.style.display = "block";
		object.style.visibility = "visible"; 
	}
	
	var id = setInterval(func, 5);
  	function func ()
	  {
  		if (pos >= fr)
		  {
			if (rev){
	  			for (object of objects)
	  			  {
	  				object.style.display = "none";
	  				object.style.visibility = "hidden";  
	  			  }
			  }
	  		clearInterval(id);
  		  }
  		else
		  {
  			pos += speed;
  			var e = ease(pos/fr);
			var op = rev ? 1 - e : e;
  				for (var i = 0; i < num; i++)
  				  {
					objects[i].style.opacity = op;
				  }
  		  }
      }
  }


var divs = []; var sTargs = []; var origins = []; 
var name_dict =  {
	b: ["impala","synth","param","sentient"],
	a: ["media","exm","saco","ma","grow","morph"],
	c: ["sentient","dfab","hoop","span"],
};

function addLink(xCen,yCen,dir,i){
	var link = document.createElement('a');
	link.href = "projects/" + name_dict[dir][i] + ".html";
	link.classList.add('sub');
	var thumb = "thumbs/" + name_dict[dir][i] + "_thumb.jpg";
	if (name_dict[dir][i] == "sentient") link.href = "#"; 
	link.style.backgroundImage = "url(" + thumb + ")";
	link.style.backgroundSize = "cover";
	link.style.left = xCen + "px";
	link.style.top = yCen + "px";
	document.body.appendChild(link);
	divs.push(link);
}

function desktopSpring (dir, num, cen)
{
	if (times % 2 == 0)
	  {
		var old = document.getElementsByClassName('sub');
		while(old[0]) old[0].remove(); 
		divs = []; sTargs = []; origins = [];
		  
		var dist = 250;
		var elm = document.getElementById(dir);
		var xCen = cen[0] - 50;
		var yCen = cen[1] - 50;
		var j = 0;
		var circ = num * 2;
		var ost = (num/2)%2 == 0 ? 0.5 : 1;
		
		for (var i = 0; i < num; i++)
		  {
			addLink(xCen,yCen,dir,i);
			var e = i % 2 == 0 ? 1 : -1;
			if (i % 2 == 0) j++;
			var xT = xCen + e*dist*Math.cos((j-(num/2.0 - ost))*(2*Math.PI)/circ);
			var yT = yCen + dist*Math.sin((j-(num/2.0 - ost))*(2*Math.PI)/circ);
			sTargs.push([xT, yT]);
			origins.push([xCen, yCen]);
		  }
	   }
 
	if (times % 2 == 0){
		posAnimator(100, divs, origins, sTargs, false, 0.75);
		   toggleTags(dir, true, sTargs, cen, false);
	}
	else {
		posAnimator(100, divs, sTargs, origins, true, 0.75);
		curves = [];
		toggleTags(dir, false, sTargs, cen, false);
	}
	times++;
}

function mobileSpring (dir, num, cen, off){
	console.log(times);
	if (times % 2 == 0)
	  {
		var pic = document.getElementsByClassName('pic')[0];
		var pic_w = getOffset(pic).width;
		var old = document.getElementsByClassName('sub');
		while(old[0]) old[0].remove(); 
		divs = []; sTargs = []; origins = [];
		  
		var elm = document.getElementById(dir);
		var xCen = cen[0] - 50;
		var yCen = cen[1] - 50;
		for (var i = 0; i < num; i++)
		  {
			addLink(xCen,yCen,dir,i);
			var xT = xCen;
			var yT = yCen + (i*off)+pic_w;
			sTargs.push([xT, yT]);
			origins.push([xCen, yCen]);
		  }
	   }
 
	if (times % 2 == 0){
		posAnimator(100, divs, origins, sTargs, false, 0.75);
		toggleTags(dir, true, sTargs, cen, true);
	}
	else {
		posAnimator(100, divs, sTargs, origins, true, 0.75);
		toggleTags(dir, false, sTargs, cen, true);
	}
	times++;
}


function toggleTags (dir, on, locations, cen, mobile){
	var tags = document.getElementsByClassName(getID(dir));
	var sub = document.getElementsByClassName('sub');
	var yOff = mobile ? 0 : (getOffset(sub[0]).height)/(2*tags.length);
	var xWid = (getOffset(sub[0]).width);
	var xCen = cen[0] - 50;
	var yCen = cen[1] - 100;
	var w = window.innerWidth;
	var vec = mobile ? 1.0 : 1.2;
	var mOff = mobile ? 20 : 0;
    
	if (on){
		var j = 0;
		for (var i = 0; i < tags.length; i++)
		{
			var xVec = locations[i][0] - xCen;
			var yVec = locations[i][1] - yCen;
			
			if (xVec < 0 && !mobile) {
				tags[i].style.textAlign = "right";
				tags[i].style.right = w - locations[i][0] + (120-xWid) + "px";
			}
			else{
				tags[i].style.left = (xCen + (xVec * 1) + 120) + "px";
			}
			
			tags[i].style.top = (yCen + (yVec * vec) + (yOff*j) + mOff) + "px";
			tags[i].style.zIndex = 3;
			if (i%2 == 1) j++;
		}
		fadeAnimator(30,tags,false);	
	}
	
	else{
		fadeAnimator(30,tags,true);
	}
}

function getTextWidth(text, font) {
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = 	document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}

function getID(dir){
	if (dir == 'a'){
		return "arc";
	}
	else if (dir == 'b'){
		return "code";
	}
	else if (dir == 'c'){
		return "fab";
	}
}


function RGBToHex (r, g, b) {
	return ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
}

function linkFade(moved){
	var iLogs = []; var oLogs = [];
	var log = document.getElementById('logo');
	var iLog = document.getElementById('logo_i');
	iLog.style.maxWidth = getOffset(log).width + "px";
	iLog.style.left = (getOffset(log).left) + "px";
	iLog.style.top = getOffset(log).top + "px";
	iLogs.push(iLog); oLogs.push(log);
	fadeAnimator(100,iLogs,moved);
	fadeAnimator(100,oLogs,!moved);
}

var mobileDict = {
	'a': false,
	'b': false,
	'c': false,
};


function mainMove(dir) {
	if (!click) return;
	click = false;
	var w = window.innerWidth;
	var h = window.innerHeight;
	
	var elems = document.getElementsByClassName("animate");
	var nums = elems.length;
	var elm = document.getElementById(dir);
	var targ = getOffset(elems[1]).left;
	
	var targX = targ + (getOffset(elems[1]).width/2);
	var targY = getOffset(elems[1]).top + (getOffset(elems[1]).height/2);

	var cens = [targX,targY];
	var pos = 0; var max = 100;
	
	var starts = [];
	for (var i = 0; i < nums; i++) {
		starts.push(getOffset(elems[i]).left);
		orgs.push(getOffset(elems[i]).left);
		elems[i].style.zIndex = 1;
	}
	elm.style.zIndex = 2;
	
	var label = elm.getElementsByTagName('p')[0];
	var navlinks = document.querySelectorAll('.nav-link');
	var iLen = document.getElementsByClassName(getID(dir)).length;
	linkFade(moved);
	
	colShift(pos, max, label, navlinks, moved);
	
	if (w > h){
		desktopSpring(dir, iLen, cens);
		desktopMove(pos, max, nums, elems, starts, targ, orgs, elm)
	}
	else{
		var yStarts = [];
		for (var i = 0; i < nums; i++) {
			yStarts.push(getOffset(elems[i]).top);
			yOrgs.push(getOffset(elems[i]).top);
		}
		var off = 100;
		var yTarg = getOffset(elems[0]).top;
		var targYM = yTarg + (getOffset(elems[0]).height/2);
		var censM = [targX, targYM];
	
		mobileSpring(dir, iLen, censM, off);
		mobileMove(pos, max, nums, elems, yStarts, yTarg, yOrgs, elm, off);
	}
}

function colShift(pos, max, label, navlinks, mv)
{
	var id = setInterval(func, 5);
	
	function func (){
		if (pos >= max){
			clearInterval(id);
		}
		else{
			pos += 0.75;
			var colDelta = 210;
			var e = ease(pos/max);
			var invG = Math.round(230 - (colDelta*e));
			var revG = Math.round(230 - colDelta + (colDelta*e));
			var invCol = "#" + RGBToHex(invG, invG, invG);
			var revCol = "#" + RGBToHex(revG, revG, revG);
			
			if (!mv){
				label.style.color = revCol;
				for (nvlk of navlinks){
				    nvlk.style.color = revCol;
				}
				document.body.style.backgroundColor = invCol;
			}
			else{
				label.style.color = invCol;
				for (nvlk of navlinks){
				    nvlk.style.color = invCol;
				}			
				document.body.style.backgroundColor = revCol;	
			}
		}
	}
}


function desktopMove(pos, max, nums, elems, starts, targ, orgs, elm)
{
	var id = setInterval(func, 5);
	
	function func (){
		if (pos >= max){
			clearInterval(id);
			moved = !moved;
			click = true;
		}
		else{
			pos += 0.75;
			var e = ease(pos/max);
			if (!moved){
				for (var i = 0; i < nums; i++)
				{
					var elem = elems[i];
					var yPos = starts[i] + ((targ-starts[i])*e)
					elem.style.left = yPos + "px";
					elem.style.opacity = 1 - e;
				}
				
			}
			else{
				for (var i = 0; i < nums; i++)
				{
					var elem = elems[i];
					var yPos = starts[i] + ((orgs[i]-starts[i])*e)
					elem.style.left = yPos + "px";
					elem.style.opacity = e;
				}
				
			}
			elm.style.opacity = 1.0;
		}
	}
}

function mobileMove(pos, max, nums, elems, starts, targ, orgs, elm)
{
	var id = setInterval(func, 5);
	
	function func (){
		if (pos >= max){
			clearInterval(id);
			moved = !moved;
			click = true;
		}
		else{
			pos += 0.75;
			var e = ease(pos/max);
			if (!moved){
				for (var i = 0; i < nums; i++)
				{
					var yPos = starts[i] + ((targ-starts[i])*e)
					elems[i].style.top = yPos + "px";
					elems[i].style.opacity = 1 - e;
				}
			
			}
			else{
				for (var i = 0; i < nums; i++)
				{
					var yPos = starts[i] + ((orgs[i]-starts[i])*e)
					elems[i].style.top = yPos + "px";
					elems[i].style.opacity = e;
				}
			
			}
			elm.style.opacity = 1.0;
		}
  	}
}