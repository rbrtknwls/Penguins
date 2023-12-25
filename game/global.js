Scenes = {};

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// ================= SCENE #1 ==================

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

// ================= SCENE #2 ==================

const Roo1 = document.createElement("img");
const Roo2 = document.createElement("img");
const Roo3 = document.createElement("img");

Roo1.src = "source/pixel_art/roo1.png"
Roo2.src = "source/pixel_art/roo2.png"
Roo3.src = "source/pixel_art/roo3.png"

const Tigger1 = document.createElement("img");
const Tigger2 = document.createElement("img");
const Tigger3 = document.createElement("img");

Tigger1.src = "source/pixel_art/tigger1.png"
Tigger2.src = "source/pixel_art/tigger2.png"
Tigger3.src = "source/pixel_art/tigger3.png"