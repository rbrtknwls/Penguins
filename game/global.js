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



const introText = ["Hiya Roo, Happy Holidays!", 
	               "I thought since the year is almost over...", 
	               "We could look back at some of my favourite memories...", 
	               "(I apologise ahead of time for my pixel art skills)"]