// =================== Object Classes ===================

class backgroundObject {
	constructor() {
		this.y = 350;
		this.x = canvas.width/2;
		this.vel = 0.20;
		this.acc = 0.04;
	}

}

class Tree extends backgroundObject {
	constructor( type ) {
		super(backgroundObject);
		if (type == "left") { this.x = canvas.width/2 - 20 }
		else                { this.x = canvas.width/2 + 20 }

		this.width = 50;
		this.ratio = 2;
	}

	updatePosition() {

		this.y += this.vel;
		this.width += this.vel;

		if (this.x < canvas.width/2) { this.x -= this.vel*6;  }
		else                         { this.x += this.vel*6;  }

		this.vel += this.acc;
	}

	draw() {
		ctx.drawImage(treeSrc, this.x-this.width/2, this.y, this.width, this.width*this.ratio)
	}
}

class Rock extends backgroundObject {
	constructor() {
		super(backgroundObject);
		this.y = 450
		this.width = 10;
		this.ratio = 1;

		this.type = Math.floor(Math.random()*3)
	}

	updatePosition() {

		this.y += this.vel;
		this.width += this.vel/3;

		if (this.type == 0) { this.x -= this.vel}
		if (this.type == 2) { this.x += this.vel}

		this.vel += this.acc*1.1;
	}

	draw() {
		ctx.drawImage(rockSrc, this.x-this.width/2, this.y, this.width, this.width*this.ratio)
	}
}

class Grass extends backgroundObject {
	constructor() {
		super(backgroundObject);
		this.y = 450

		this.width = 10;
		this.ratio = 1;

		this.type = Math.floor(Math.random()*3)
	}

	updatePosition() {

		this.y += this.vel;
		this.width += this.vel/3;

		if (this.type == 0) { this.x -= this.vel;}
		if (this.type == 2) { this.x += this.vel;}

		this.vel += this.acc;
	}

	draw() {
		ctx.drawImage(grassSrc, this.x-this.width/2, this.y, this.width, this.width*this.ratio)
	}
}

class Foliage {
	constructor() {
		this.objectList = []
	}

	addTree() {
		this.objectList.push(new Tree("left"))
		this.objectList.push(new Tree("right"))
	}

	addGrass() {
		this.objectList.push(new Grass())
	}

	addRock() {
		this.objectList.push(new Rock())
	}

	draw() {
		for (var i = this.objectList.length - 1; i >= 0; i--) {
		    this.objectList[i].updatePosition();
		}

		for (var i = this.objectList.length - 1; i >= 0; i--) {

		    if (this.objectList[i].y > canvas.height) {
		        this.objectList.splice(i, 1);
		    } else {
		    	this.objectList[i].draw();
		    }
		}
	}

}

class Text {

	constructor() {
		this.textList = introText;

		this.currentSentance = 0;
		this.sentanceInterval = 300;
		this.currentInterval = 0;
		this.transitionInterval = 100;


		this.widthOfText = 0;
		this.heightOfText = 0;
		this.wordsPerSentance = 24;

		this.calculateNewSentances(this.textList[0])
	}

	calculateNewSentances(text) {
		this.sentances = []
		var textSplit = text.split(" ")

		var currentSentance = ""
		var currentWordCount = 0;
		var maxWordSize = 0;
		for (var i = 0; i < textSplit.length; i++) {
			currentWordCount += textSplit[i].length;

			if (currentWordCount > this.wordsPerSentance) {
				this.sentances.push(currentSentance);
				currentSentance = textSplit[i];
				currentWordCount = textSplit[i].length;
			} else {
				if (currentSentance.length != 0) {
					currentSentance += " ";
				}
				currentSentance += textSplit[i];
			}

			if (maxWordSize < currentWordCount) { maxWordSize = currentWordCount; }
		}
		if (currentSentance.length > 0) { this.sentances.push(currentSentance); }

		this.widthOfText = maxWordSize * 42;
		this.heightOfText = 95 * this.sentances.length;
	}

	displayASentance(colour) {
		ctx.font = "80px serif";
		ctx.beginPath();
		ctx.fillStyle = "rgba(0, 0, 0, " + colour/2 + ")";
		ctx.rect(canvas.width/2-this.widthOfText/2, canvas.height/2-this.heightOfText/1.5, this.widthOfText, this.heightOfText);
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = "rgba(255, 255, 255, " + colour + ")";

		if (this.sentances.length == 1) {
			ctx.fillText(this.sentances[0], canvas.width/2, canvas.height/2);
		}
		if (this.sentances.length == 2) {
			ctx.fillText(this.sentances[0], canvas.width/2, canvas.height/2 - 50);
			ctx.fillText(this.sentances[1], canvas.width/2, canvas.height/2 + 30);
		}
		if (this.sentances.length == 3) {
			ctx.fillText(this.sentances[0], canvas.width/2, canvas.height/2 - 100);
			ctx.fillText(this.sentances[1], canvas.width/2, canvas.height/2 - 20);
			ctx.fillText(this.sentances[2], canvas.width/2, canvas.height/2 + 60);
		}
	}

	display() {
		if (this.sentances.length == 0) { return "Done" }

		var transitionColour = 1;

		if (this.currentInterval < this.transitionInterval) {
			transitionColour = this.currentInterval / this.transitionInterval;
		}
		if (this.currentInterval > this.sentanceInterval) {
			transitionColour = 1 - (this.currentInterval-this.sentanceInterval) / this.transitionInterval;
		}

		this.displayASentance(transitionColour);

		this.currentInterval += 1;
		if (this.currentInterval > (this.sentanceInterval + this.transitionInterval)) {

			this.currentSentance += 1;
			this.currentInterval = 0;
			this.calculateNewSentances(this.textList[this.currentSentance])
		}
	}


}
// =================== Helpers ===================

const gradient = ctx.createLinearGradient(canvas.width/2, 0, canvas.width/2, 350);

gradient.addColorStop(0, "#371585");
gradient.addColorStop(1, "#beb2db");

function drawSkyline() {
	ctx.beginPath();
	ctx.fillStyle = "#371585"
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(canvas.width/2, 800, 900, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
	ctx.fillStyle = "#1e1826"
	ctx.rect(0, 400, canvas.width, canvas.height);
	ctx.fill();

	ctx.drawImage(mountR, 250, 0)
	ctx.drawImage(mountR, 0, -25)
	ctx.drawImage(mountR, 500, 0)

	ctx.drawImage(mountL, canvas.width/2 + 250, 0)
	ctx.drawImage(mountL, canvas.width/2, 25)
	ctx.drawImage(mountL, canvas.width/2+500, 0)
}


function drawGround() {
	ctx.beginPath();
	ctx.fillStyle = "#fffafa";
    ctx.moveTo(canvas.width/2, 400);
    ctx.lineTo(-200, canvas.height);
    ctx.lineTo(canvas.width+200, canvas.height);
    ctx.fill();
}

// =================== Runner ===================


Scenes.snow = function(currentIteration) {

	return new Promise(function (resolve, reject) {

		const background = new Foliage;
		const text = new Text;

		background.addTree();

		var intervalId = setInterval(function() {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			if (Math.random() < 0.1) { background.addTree(); }

			else {
				if (Math.random() < 0.01) {
					if (Math.random() < 0.5) { background.addGrass(); }
					else                     { background.addRock(); }
				}
			}

			drawSkyline();
			drawGround();

			background.draw();
			isDone = text.display();

			if (isDone == "Done") {
				clearInterval(intervalId);
				resolve();
			}
		}, 25);
  	});

}

