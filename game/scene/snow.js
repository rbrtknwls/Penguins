function updateObject(obj) {
	obj.x += 10;
	obj.y += 10;
}


class Tree {
	constructor() {
		if (Math.random() < 0.5) { this.x = canvas.width/2 - 20 }
		else                     { this.x = canvas.width/2 + 20 }

		this.y = 0;

		this.width = 50;
		this.ratio = 2;

		this.vel = 1;
		this.acc = 0.7;
	}

	updatePosition() {

		this.y += this.vel;
		this.width += this.vel;

		if (this.x < canvas.width/2) { this.x -= this.vel*4  }
		else                         { this.x += this.vel*3    }

		this.vel += this.acc
	}

	drawTree() {
		ctx.drawImage(treeSrc, this.x, this.y, this.width, this.width*this.ratio)
	}

}

class Foliage {
	constructor() {
		this.treeList = []
	}

	addTree() {
		this.treeList.push(new Tree())
	}

	drawTree() {
		for (var i = this.treeList.length - 1; i >= 0; i--) {
		    this.treeList[i].updatePosition();
		}

		for (var i = this.treeList.length - 1; i >= 0; i--) {

		    if (this.treeList[i].y > canvas.height) {
		        this.treeList.splice(i, 1);
		    } else {
		    	this.treeList[i].drawTree();
		    }
		}
	}

}


Scenes.snow = function(currentIteration) {
	return new Promise(function (resolve, reject) {

		const background = new Foliage;
		background.addTree();

		var intervalId = setInterval(function() {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			if (Math.random() * 2 < 1) { background.addTree(); }


			background.drawTree();

		}, 50);
  	});

}

