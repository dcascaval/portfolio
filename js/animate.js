function getOffset(el) {
	el = el.getBoundingClientRect();
	return {
	  left: el.left + window.scrollX,
	  top: el.top + window.scrollY,
	  width: el.width,
	  height: el.height
	}
  }	

//USE CSS TRANSFORMS 

function ease(t) { 
	return t<.5 ? 2*t*t : -1+(4-2*t)*t;
}

var moved = false;
var orgs = []; var yOrgs = [];
var times = 0; 
var draw;
var animTime = 1000;
var click = true;

var starttime
 


function posAnimator (frames, eList, starts, targs, rev, speed = 1)
{
	var num = eList.length;

	function moveit(timestamp, eList, starts, targs, num, rev, duration){
		var runtime = timestamp - starttime;
		var e  = ease(Math.min(runtime / duration, 1));
		var op = rev ? 1 - e : e;
		for (var i = 0; i < num; i++)
		{
			var j = i % starts.length;
			var k = i % targs.length;
			eList[i]
			var xPos = starts[j][0] + ((targs[k][0]-starts[j][0])*e);
			var yPos = starts[j][1] + ((targs[k][1]-starts[j][1])*e);
			eList[i].style.left = xPos + "px";
			eList[i].style.top = yPos + "px";
			eList[i].style.opacity = op;
		}
		if (runtime < duration){
			requestAnimationFrame(function(timestamp){ 
				moveit(timestamp, eList, starts, targs, num, rev, duration)
			});
		}
	}
	 
	requestAnimationFrame(function(timestamp){
		starttime = timestamp || new Date().getTime() //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date
		moveit(timestamp, eList, starts, targs, num, rev, animTime) // 400px over 1 second
	})
}

function fadeAnimator (fr, objects, rev, speed = 1)
  {
	for (object of objects){
		object.style.display = "block";
		object.style.visibility = "visible"; 
	}
	
	function moveit(timestamp, objects, rev, duration){
		var runtime = timestamp - starttime;
		var e  = ease(Math.min(runtime / duration, 1.0));
		var op = rev ? 1 - e : e;
		for (object of objects) object.style.opacity = op;
		if (runtime < duration){
			requestAnimationFrame(function(timestamp){ 
				moveit(timestamp, objects, rev, duration)
			});
		}
		else{
		  if (rev)
			{
			for (object of objects)
			  {
			  object.style.display = "none";
			  object.style.visibility = "hidden";  
			  }
			}
		}
	}
	 
	requestAnimationFrame(function(timestamp){
		starttime = timestamp || new Date().getTime() //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date
		moveit(timestamp, objects, rev, animTime) // 400px over 1 second
	})



  }


var divs = []; var sTargs = []; var origins = []; 
var name_dict =  {
	b: ["impala","synth","param","sentient"],
	a: ["media","exm","saco","ma","grow","morph"],
	c: ["sentient2","dfab","hoop","span"],
};

function addLink(xCen,yCen,dir,i){
	var link = document.createElement('a');
	link.href = "projects/" + name_dict[dir][i] + ".html";
	link.classList.add('sub');
	var thumb = "thumbs/" + name_dict[dir][i] + "_thumb.jpg";
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
			var yT = yCen + (2*i*off)+pic_w;
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
	var drop = document.getElementsByClassName('drophide')[0];

	function moveit(timestamp, navlinks, label, drop, rev, duration){
		var runtime = timestamp - starttime;
		var e  = ease(Math.min(runtime / duration, 1.0));
		var colDelta = 210;
		var invG = Math.round(230 - (colDelta*e));
		var revG = Math.round(230 - colDelta + (colDelta*e));
		var invCol = "#" + RGBToHex(invG, invG, invG);
		var revCol = "#" + RGBToHex(revG, revG, revG);
		
		if (!rev){
			label.style.color = revCol;
			for (nvlk of navlinks){
				nvlk.style.color = revCol;
			}
			drop.style.color = revCol;
			document.body.style.backgroundColor = invCol;
		}
		else{
			label.style.color = invCol;
			for (nvlk of navlinks){
				nvlk.style.color = invCol;
			}	
			drop.style.color = invCol;		
			document.body.style.backgroundColor = revCol;	
		}
		if (runtime < duration){
			requestAnimationFrame(function(timestamp){ 
				moveit(timestamp, navlinks, label, drop, rev, duration)
			});
		}
	}
	 
	requestAnimationFrame(function(timestamp){
		starttime = timestamp || new Date().getTime();
		moveit(timestamp, navlinks, label, drop, mv, animTime*1.2)
	})


}


function desktopMove(pos, max, nums, elems, starts, targ, orgs, elm)
{
	function moveit(timestamp, elems, starts, targ, orgs, elm, duration){
		var runtime = timestamp - starttime;
		var e  = ease(Math.min(runtime / duration, 1.0));
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
		if (runtime < duration){
			requestAnimationFrame(function(timestamp){ 
				moveit(timestamp, elems, starts, targ, orgs, elm, duration)
			});
		}
		else{
			moved = !moved;
			click = true;
		}
	}
	 
	requestAnimationFrame(function(timestamp){
		starttime = timestamp || new Date().getTime() //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date
		moveit(timestamp, elems, starts, targ, orgs, elm, animTime) // 400px over 1 second
	})
}

function mobileMove(pos, max, nums, elems, starts, targ, orgs, elm)
{
	function moveit(timestamp, elems, starts, targ, orgs, elm, duration){
		var runtime = timestamp - starttime;
		var e  = ease(Math.min(runtime / duration, 1.0));
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
		if (runtime < duration){
			requestAnimationFrame(function(timestamp){ 
				moveit(timestamp, elems, starts, targ, orgs, elm, duration)
			});
		}
		else{
			moved = !moved;
			click = true;
		}
	}
	 
	requestAnimationFrame(function(timestamp){
		starttime = timestamp || new Date().getTime();
		moveit(timestamp, elems, starts, targ, orgs, elm, animTime)
	})

}

var dropped = false;
var dropdowns = 0;

function menuDrop(){
	console.log("called");
	var button = document.getElementsByClassName('drophide')[0];
	var cX = getOffset(button).left + (getOffset(button).width/2);
	var cY = getOffset(button).top + (getOffset(button).height/2);
	var sX = getOffset(button).left; 
	var sY = getOffset(button).top;

	var links = document.getElementsByClassName('nav-link');

	var newLinks = [];
	if (dropdowns == 0){
		for (var i = 0; i < links.length; i++){
			var link = document.createElement('a');
			link.classList.add('droppedElem');
			link.style.left = (sX - 25) + "px"; 
			link.style.top = sY + "px";
			link.innerHTML = links[i].innerHTML;
			link.href = links[i].href;
			link.style.fontSize = "14px";
			document.body.appendChild(link);
			newLinks.push(link);
		}
	}
	else{
		newLinks = document.getElementsByClassName('droppedElem');
		for (link of newLinks) link.style.zIndex = 1;
	}

	var linkX = (getOffset(links[0]).width)
	var linkY = (getOffset(links[0]).height + 30);

	var linkTargs = []; var st = [];
	for (var i = 0; i < links.length; i++){
		var targ = []; var s = [sX - 25,sY];
		targ.push(sX - 25);
		targ.push(cY + 25 + (i*linkY));
		linkTargs.push(targ);
		st.push(s);
	}

	if (!dropped) {
		posAnimator(20,newLinks,st,linkTargs,false);
		button.innerHTML = " - ";
	}
	else {
		posAnimator(20,newLinks,linkTargs,st,true);
		for (link of newLinks) link.style.zIndex = -1;
		button.innerHTML = " + ";
	}
	dropped = !dropped;
	dropdowns++;
}
