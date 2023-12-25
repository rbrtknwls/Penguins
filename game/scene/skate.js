// =================== Object Classes ===================
const nightGradient = ctx.createLinearGradient(canvas.width/2, 0, canvas.width/2, 350);

nightGradient.addColorStop(0, "#131862");
nightGradient.addColorStop(1, "#bea9de");

class MeAndYouSkating {

	constructor( type ) {
        this.currentUs = 0;
        this.MeImgs =  [Tigger1, Tigger2, Tigger1, Tigger3]
        this.YouImgs = [Roo1,    Roo2,    Roo1,    Roo3]
        this.maxImgs = 4;

        this.starX = []
        this.starY = []
        for (var idx = 0; idx < 10; idx++){
			var x = Math.random()*canvas.width;
			var y = Math.random()*200;

			this.starX.push(x);
			this.starY.push(y)
		}
    }

    drawBackground() {

    	ctx.beginPath();
    	ctx.fillStyle = gradient;
		ctx.rect(0, 0, canvas.width, canvas.height);
		ctx.fill();

		var xarr = [100, 300,]
		for (var idx = 0; idx < 10; idx++){
			var x = this.starX[idx];
			var y = this.starY[idx];

			ctx.beginPath();
			ctx.strokeStyle = "#FFFFFF";
		    ctx.moveTo(x - 4, y - 4);
		    ctx.lineTo(x + 4, y + 4);

		    ctx.moveTo(x + 4, y - 4);
		    ctx.lineTo(x - 4, y + 4);
		    ctx.stroke();
		}

		ctx.beginPath();
    	ctx.fillStyle = "#000000";
		ctx.rect(25, 175, 50, 100);
		ctx.rect(100, 125, 50, 100);
		ctx.rect(200, 100, 50, 125);
		ctx.rect(300, 125, 75, 100);
		ctx.rect(500, 175, 200, 50);
		ctx.rect(600, 75, 200, 150);
		ctx.rect(900, 50, 150, 200);
		ctx.rect(1150, 115, 200, 150);
		ctx.rect(1500, 125, 75, 150);
		ctx.rect(1700, 200, 75, 150);
		ctx.rect(1800, 210, 30, 150);
		ctx.rect(1900, 210, 30, 150);
		ctx.rect(200, 200, 75, 150);
		ctx.fill();

    	ctx.beginPath();
    	ctx.fillStyle = "#808080";
		ctx.rect(0, 225, canvas.width, canvas.height);
		ctx.fill();

    	ctx.beginPath();
    	ctx.fillStyle =  "#739BD0";
		ctx.ellipse(canvas.width/2, canvas.height/2-100, 400, 150, 0, 0, 2 * Math.PI);
		ctx.fill();


    }

    draw () {
    	while (true) {
    		if (this.currentUs >= this.maxImgs) { this.currentUs = 0; }
    		ctx.clearRect(0, 0, canvas.width, canvas.height);

    		this.drawBackground()
    		ctx.drawImage(this.YouImgs[this.currentUs], canvas.width/2 - 250, canvas.height/2-300)
    		ctx.drawImage(this.MeImgs[this.currentUs], canvas.width/2, canvas.height/2-300)

    		this.currentUs += 1;
    		return;
    	}
    }

}


class skatingText {
	constructor() {
		this.textArr = []
		this.currentText = 0;

		this.updateInterval = 4;
		this.amountOfText = [];
	}

	updateText() {
		ctx.beginPath();
    	ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
		ctx.rect(50, canvas.height/2+100, canvas.width-100, canvas.height/2-150);
		ctx.fill();
	}
}


// =================== Runner ===================


Scenes.skate = function(currentIteration) {

	return new Promise(function (resolve, reject) {
		const us = new MeAndYouSkating;
		const text = new skatingText;

		var intervalId1 = setInterval(function() {
			us.draw();
			text.updateText();
		}, 1000);


  	});

}

