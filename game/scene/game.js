// =================== Object Classes ===================



class MeAndYouGaming {

	constructor( type ) {
        this.currentUs = 0;
        this.maxUs = 10;

        this.gradx = canvas.width/2-10;
        this.grady = 300;

        this.innerRadius = 200;
        this.outerRadius = 1500;

        this.gradientList = []

        for (var idx = 0; idx < this.maxUs; idx++){
        	var grad = ctx.createRadialGradient(this.gradx, this.grady, this.innerRadius, this.gradx, this.grady, this.outerRadius);
        	grad.addColorStop(0, "rgba("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+",0.25)");
        	grad.addColorStop(0.2, "#48484a");
        	grad.addColorStop(0.4, "#282829");
        	this.gradientList.push(grad);
        }
    }

    drawBackground() {

    	this.currentUs = (this.currentUs + 1)%10

		ctx.drawImage(computer, canvas.width/2-300, 100, 600, 600);

		ctx.beginPath();
	    ctx.fillStyle = this.gradientList[this.currentUs];
	    ctx.arc(this.gradx, this.grady, this.outerRadius, 0, 2 * Math.PI);
	    ctx.fill();

    	ctx.drawImage(tiggerBack, canvas.width/2-450,250, 900, 900)

    }

    draw () {

		if (this.currentUs >= this.maxImgs) { this.currentUs = 0; }
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		this.drawBackground()
		this.currentUs += 1;

    }

}


class gamingText {
	constructor() {
		this.textArr = skateText;
		this.currentText = 0;

		this.currentInterval = 0;
		this.updateInterval = 3;

		this.currentLine = 0
		this.textToDisplay = [];
		this.textStartX = 80;
		this.textStartY = 680;
	}

	updateText() {

		ctx.beginPath();
    	ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
		ctx.rect(50, canvas.height/2+100, canvas.width-100, canvas.height/2-150);
		ctx.fill();

		ctx.font = "60px serif";
		ctx.textAlign = "left";

		ctx.beginPath();
    	ctx.fillStyle = "#fffafa";
		for (var idx = 0; idx < this.textToDisplay.length; idx++) {
			ctx.fillText(this.textToDisplay[idx], this.textStartX, this.textStartY+idx*65)
		}

		if (this.currentInterval > this.updateInterval) {
			if (this.currentText >= this.textArr.length) {
					return "Done";
				}

			if (this.currentLine >= this.textArr[this.currentText].split("|").length) {
				this.textToDisplay = [];
				this.currentLine = 0;
				this.currentText += 1;
			} else {
				
				this.textToDisplay.push(this.textArr[this.currentText].split("|")[this.currentLine])
				this.currentLine += 1;
				this.currentInterval = 0;
			}
		}
		this.currentInterval += 1;



	}
}


// =================== Runner ===================


Scenes.game = function(currentIteration) {

	return new Promise(function (resolve, reject) {
		const us = new MeAndYouGaming;
		const text = new gamingText;

		var intervalId1 = setInterval(function() {
			us.draw();
			isDone = text.updateText();
			
			if (isDone == "Done") {
				clearInterval(intervalId1);
				resolve();
			}
		}, 1000);


  	});

}

