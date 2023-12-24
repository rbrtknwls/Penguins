Scenes = {};

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const treeSrc = document.createElement("img");
treeSrc.src = "source/pixel_art/tree.png"
const rockSrc = document.createElement("img");
rockSrc.src = "source/pixel_art/rock.png"
const grassSrc = document.createElement("img");
grassSrc.src = "source/pixel_art/grass.png"

const mountR = document.createElement("img");
mountR.src = "source/pixel_art/rightmountain.png"
const mountL = document.createElement("img");
mountL.src = "source/pixel_art/leftmountain.png"



const introText = ["Hiya Roo, Happy Holidays!!", 
	               "It's crazy to think that it has almost been a year since I met you...", 
	               "In that short span of time, I have made so many happy memories with you...", 
	               "(I apologise ahead of time for my pixel art skills)"]