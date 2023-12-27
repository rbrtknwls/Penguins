const dayGradient = ctx.createLinearGradient(canvas.width/2, 0, canvas.width/2, 350);

dayGradient.addColorStop(0, "#a1eded");
dayGradient.addColorStop(0.3, "#d4c0ed");

const grassGradient = ctx.createLinearGradient(0, 0, canvas.width*2/5, canvas.height/2);

grassGradient.addColorStop(0, "#136d15");
grassGradient.addColorStop(0.2, "#138510");
grassGradient.addColorStop(0.3, "#268b07");
grassGradient.addColorStop(0.6, "#117c13");
grassGradient.addColorStop(0.9, "#41980a");
grassGradient.addColorStop(1, "#136d15");

const darkGrass = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

darkGrass.addColorStop(0.7, "#136d15");
darkGrass.addColorStop(0.9, "#128215");

// =================== Object Classes ===================

class MeAndYouWalking {

	constructor( type ) {
        this.currentUs = 0;
        this.MeImgs =  [Tigger4, Tigger6, Tigger4, Tigger5]
        this.YouImgs = [Roo4,    Roo5,    Roo4,    Roo6]
        this.maxImgs = 4;
    }

    drawBackground() {



    	ctx.beginPath();
    	ctx.fillStyle = dayGradient;
		ctx.rect(0, 0, canvas.width, canvas.height);
		ctx.fill();

		ctx.drawImage(cloud, 200, 0, 100, 100);
		ctx.drawImage(cloud, 500, 100, 150, 100);
		ctx.drawImage(cloud, 800, 25, 200, 100);
		ctx.drawImage(cloud, 1500, -100, 300, 300);

    	ctx.beginPath();
    	ctx.fillStyle = grassGradient;
		ctx.rect(0, 225, canvas.width, canvas.height);
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = "#A9A9A9";
		ctx.moveTo(canvas.width/2-100, 225);
		ctx.lineTo(400, 800);
		ctx.lineTo(1600, 800);
		ctx.lineTo(canvas.width/2+100, 225);
		ctx.closePath();

		ctx.stroke();
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = "#00008B";
		ctx.moveTo(canvas.width/2-400, 250);
		ctx.lineTo(0, canvas.height);
		ctx.lineTo(-400, canvas.height);
		ctx.lineTo(-400, 400);
		ctx.closePath();

		ctx.stroke();
		ctx.fill();

		ctx.beginPath();
    	ctx.fillStyle = "#000000";
		ctx.rect(25, 175, 50, 100);
		ctx.rect(120, 150, 75, 120);
		ctx.rect(300, 125, 200, 120);
		ctx.rect(650, 150, 75, 120);
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = "#454a45";
		ctx.moveTo(1500, 100);
		ctx.lineTo(2000, 100);
		ctx.lineTo(2200, 900);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = darkGrass;
		ctx.moveTo(canvas.width/2+200, 250);
		ctx.lineTo(1500, 100);
		ctx.lineTo(2200, 500);
		ctx.lineTo(2000, 900);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = "#fffafa";
		ctx.moveTo(1800, 120);
		ctx.lineTo(1840, 110);
		ctx.lineTo(1940, 160);
		ctx.lineTo(1890, 170);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = "#fffafa";
		ctx.lineTo(2000, 200);
		ctx.lineTo(1970, 210);
		ctx.lineTo(2100, 290);
		ctx.closePath();
		ctx.fill();

		ctx.drawImage(grassSrc, 650, 400,20,20);
		ctx.drawImage(grassSrc, 630, 380,20,20);
		ctx.drawImage(grassSrc, 570, 410,20,20);
		ctx.drawImage(grassSrc, 550, 400,20,20);
		ctx.drawImage(grassSrc, 630, 450,30,30);
		ctx.drawImage(grassSrc, 450, 460,30,30);
		ctx.drawImage(grassSrc, 470, 430,30,30);

		ctx.drawImage(grassSrc, 1270, 370,20,20);
		ctx.drawImage(grassSrc, 1350, 400,20,20);
		ctx.drawImage(grassSrc, 1350, 450,30,30);
		ctx.drawImage(grassSrc, 1450, 460,30,30);
		

		ctx.drawImage(grassSrc, 500, 500);
		ctx.drawImage(grassSrc, 450, 480);
		ctx.drawImage(grassSrc, 450, 560, 80, 80);


		ctx.drawImage(treeNoSnow, 770, 100, 100, 200);
		ctx.drawImage(treeNoSnow, 700, 100);
		ctx.drawImage(treeNoSnow, 600, 100, 175, 350);
		ctx.drawImage(treeNoSnow, 450, 100, 200, 400);
		ctx.drawImage(treeNoSnow, 270, 100, 300, 600);

		ctx.drawImage(treeNoSnow, 1150, 100, 100, 200);
		ctx.drawImage(treeNoSnow, 1200, 100);
		ctx.drawImage(treeNoSnow, 1275, 100, 175, 350);
		ctx.drawImage(treeNoSnow, 1350, 100, 200, 400);
		ctx.drawImage(treeNoSnow, 1470, 100, 250, 500);
		ctx.drawImage(grassSrc, 1500, 500, 160, 160);

    }

    draw () {
    	while (true) {
    		if (this.currentUs >= this.maxImgs) { this.currentUs = 0; }
    		ctx.clearRect(0, 0, canvas.width, canvas.height);

    		this.drawBackground()
    		ctx.drawImage(this.YouImgs[this.currentUs], canvas.width/2 - 250, canvas.height/2-200)
    		ctx.drawImage(this.MeImgs[this.currentUs], canvas.width/2, canvas.height/2-200)

    		this.currentUs += 1;
    		return;
    	}
    }

}

class walkingText {
	constructor() {
		this.textArr = walkText;
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


Scenes.walk = function(currentIteration) {

	return new Promise(function (resolve, reject) {
		const text = new walkingText;
		const usWalking = new MeAndYouWalking;

		var intervalId1 = setInterval(function() {
			usWalking.draw();
			isDone = text.updateText();
			
			if (isDone == "Done") {
				clearInterval(intervalId1);
				resolve();
			}

		}, 1000);

  	});

}

