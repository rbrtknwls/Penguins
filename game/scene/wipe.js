Scenes.start = function(currentIteration) {
	return new Promise(function (resolve, reject) {
		ctx.beginPath();
		ctx.fillStyle = "#edf0f7";
		ctx.rect(0, 0, canvas.width, canvas.height);
		ctx.fill();
		ctx.closePath();

		var intervalId = setInterval(function(){
			if ( currentIteration <= 0 ) {

				clearInterval(intervalId);

				resolve();

			} else {

				ctx.clearRect(0, 0, canvas.width, canvas.height);

				ctx.beginPath();
				ctx.fillStyle = "#edf0f7";
				ctx.rect(0, 0, canvas.width, canvas.height);
				ctx.fill();
				ctx.closePath();


				ctx.beginPath();
				ctx.font = "200px Arial"
				ctx.textAlign = "center";
				ctx.fillStyle = "#000000";
				ctx.fillText(currentIteration-- +"..." , canvas.width/2, canvas.height/2);
				ctx.fill();
				ctx.closePath();
			}
		}, 100);
  	});

}

