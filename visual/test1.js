var mic;
var fft;
var w;

//var volhistory = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);

	mic = new p5.AudioIn();
	mic.start();

	fft = new p5.FFT(.8, 64);
	fft.setInput(mic);

	w = width/20;
}

function draw() {
	background(240, 90, 60);

	var spectrum = fft.analyze();
	console.log(spectrum.length);

	var micvol = mic.getLevel();

	for ( var i = 0; i < spectrum.length; i++) {
		var amp = spectrum[i];
		//var y = map(amp, 0, width, height, 1);
		stroke(250);
    var y = map(amp, 0, width, height, 1);
		line(y, i * w, w, width - y);
	}


	//volhistory.push(ampvol);

	//ellipse(200, 300, 200, micvol * 1800);

	//ellipse(400, 500, micvol * 200, micvol * 2000);
	//console.log(vol);
}

function touchStarted() {
	getAudioContext().resume();
}
