var res;
var offset = 0;
var width
var height

function windowResized() {
	width = window.innerWidth-20;
	height = window.innerHeight-20;
	resizeCanvas(width,height)
	if (width<height) {
		res = width;
	} else {
		res = height;
	}
};

function keyPressed() {
	if (key=='q'||key=='Q') {
		offset++;
	}
	if (key=='a'||key=='A') {
		offset--;
	}
	if (key=='w'||key=='W') {
		offset = offset + 60;
	}
	if (key=='s'||key=='S') {
		offset = offset - 60;
	}
	if (key=='e'||key=='E') {
		offset = offset + 3600;
	}
	if (key=='d'||key=='D') {
		offset = offset - 3600;
	}
	if (key==' ') {
		offset = 0
	}
}

function setup() {
	width = window.innerWidth-20
	height = window.innerHeight-20
	createCanvas(width, height);
	if (width < height) {
		res = width;
	} else {
		res = height;
	}
};

function draw() {
	clear()
	background(0)
	noFill()
	colorMode(HSB, TWO_PI, 1, 1)
	strokeCap(SQUARE)
	var d = new Date()
	var s = d.getSeconds() + + d.getMilliseconds()/1000 + offset
	var m = d.getMinutes()
	var h = d.getHours()
	while(s>59) {
		s = s-60
		m++
	}
	while(s<0) {
		s = s+60
		m--
	}
	while(m>59) {
		m = m-60
		h++
	}
	while(m<0) {
		m = m+60
		h--
	}
	while(h>23) {
		h = h-24
	}
	while(h<0) {
		h = h+24
	}
	var sA = map(s,0,60,0,TWO_PI)
	var mA = map(m,0,60,0,TWO_PI) + (sA/60)
	var hA = map(h%12,0,12,0,TWO_PI) + (mA/12)
	

	stroke(sA,1,1)
	strokeWeight(res*0.01)
	arc(width/2,height/2,res*0.85,res*0.85,-HALF_PI,sA-HALF_PI)

	stroke(mA,1,1)
	strokeWeight(res*0.02)
	arc(width/2,height/2,res*0.8,res*0.8,-HALF_PI,mA-HALF_PI)


	stroke(hA,1,1)
	strokeWeight(res*0.03)
	arc(width/2,height/2,res*0.725,res*0.725,-HALF_PI,hA-HALF_PI)

        textSize(res*0.27)
	var hStr = h.toString()
	var mStr = m.toString()
	var sStr = floor(s).toString()
	if (hStr.length == 1) {
		hStr = '0'+hStr
	}
	if (mStr.length == 1) {
		mStr = '0'+mStr
	}
	if (sStr.length == 1) {
		sStr = '0'+sStr
	}
	noStroke()
	fill(0,0,1)
    text(hStr,width/2-res*0.22,height/2+res*0.08)
    textSize(res*0.1)
    text(mStr,width/2+res*0.08,height/2-res*0.03)
    text(sStr,width/2+res*0.08,height/2+res*0.07)
}
