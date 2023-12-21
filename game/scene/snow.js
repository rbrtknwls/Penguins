// =================== Object Classes ===================

class backgroundObject {
	constructor() {
		if (Math.random() < 0.5) { this.x = canvas.width/2 - 20 }
		else                     { this.x = canvas.width/2 + 20 }

		this.y = 0;

		this.vel = 1;
		this.acc = 0.7;
	}

}

class Tree extends backgroundObject {
	constructor() {
		super(backgroundObject);
		this.width = 50;
		this.ratio = 2;
	}

	updatePosition() {

		this.y += this.vel;
		this.width += this.vel;

		if (this.x < canvas.width/2) { this.x -= this.vel*3;  }
		else                         { this.x += this.vel*3;  }

		this.vel += this.acc;
	}

	draw() {
		ctx.drawImage(treeSrc, this.x-this.width/2, this.y, this.width, this.width*this.ratio)
	}
}

class Rock extends backgroundObject {
	constructor() {
		super(backgroundObject);
		this.y = 50
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
		this.y = 50

		this.width = 10;
		this.ratio = 1;

		this.type = Math.floor(Math.random()*3)
	}

	updatePosition() {

		this.y += this.vel;
		this.width += this.vel/3;

		if (this.type == 0) { this.x -= this.vel;}
		if (this.type == 2) { this.x += this.vel;}

		this.vel += this.acc*1.1;
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
		this.objectList.push(new Tree())
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
// =================== Helpers ===================

function drawGround() {

	ctx.fillStyle = "#fffafa";
	ctx.beginPath();
    ctx.moveTo(canvas.width/2, 50);
    ctx.lineTo(-200, canvas.height);
    ctx.lineTo(canvas.width+200, canvas.height);
    ctx.fill();
}

// =================== Runner ===================


Scenes.snow = function(currentIteration) {
	return new Promise(function (resolve, reject) {

		const background = new Foliage;
		background.addTree();

		var intervalId = setInterval(function() {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			if (Math.random() < 0.5) { background.addTree(); }
			else {
				if (Math.random() < 0.1) {
					if (Math.random() < 0.5) { background.addGrass(); }
					else                     { background.addRock(); }
				}
			}

			drawGround();
			background.draw();

		}, 50);
  	});

}

