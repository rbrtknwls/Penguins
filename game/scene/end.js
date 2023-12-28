Scenes.end = function(currentIteration) {
	return new Promise(function (resolve, reject) {


		ctx.clearRect(0, 0, canvas.width, canvas.height)

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

		ctx.beginPath();
		ctx.fillStyle = "rgba(10,10,10,0.5)";
		ctx.rect(50, 50, canvas.width-100, canvas.height-100);
		ctx.fill();
		ctx.closePath();

		


		ctx.beginPath();
		ctx.font = "80px Arial"
		ctx.textAlign = "left";
		ctx.fillStyle = "#fffafa";
		ctx.fillText("You’re the real gift Megan!" , 100, 150);
		ctx.fillText("I hope you know how much you are appreciated," , 100, 250);
		ctx.fillText("and how much joy you bring to everyone!" , 100, 350);

		ctx.fillText("No matter what I’m always on your side!" , 100, 550);
		ctx.fillText("Thank you so much for everything," , 100, 800);
		ctx.fillText("Robbie" , 100, 900);
		ctx.fill();
		ctx.closePath();

	});

}

