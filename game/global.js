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

const skateText = ["Roo,|There’s no memory I could ever cherish as much as skating with you.",
	               "That memory starts with a text asking if I wanted to skate with you.|Despite having absolutely zero experience skating, I accepted immediately.|(I didn’t even have a pair of skates!)",
	               "Why? Well Roo…|For weeks I was cherishing our text conversation talking about everything.|I loved the idea of getting to talk to you more in person.|Plus… maybe holding your hand could be cool and stuff.",
	               "I went to sports check and bought a pair of skates which I didn’t sharpen…|Before I knew it, I met up with you in front of a map Nathan Phillips Square.|I stubbled when greeting you because, well you are wayyy too pretty.",
	               "I remember eagerly lacing up with you and having you help me onto the ice.|It was really wobbly, and I could feel my ankles buckle with each step…|But watching you dance over the ice made it all worth it.",
	               "Even though I was skating slow, you kept up with me and never rushed me.|Even though I was flailing, you were there to lend a hand if I needed it.|Even though I was doing something totally foreign I never felt comfier.",
	               "You know Roo,|I kind of knew I fell for you right then.",
	               "I became so immersed in talking to you about one of your worlds,|I wouldnt want to be anywhere else.",
	               "After we got off the ice, we sat on the bench and talked some more.|We stared off into the distance and pointed at a building.|Imagining a world were people lived in the lights, connected by the wires.",
	               "Man… how are you so cool.",
	               "After being jump scared by a baby...|We got some poutine and headed to the office.|Overlooking the city, we talked about colour printers and CMYK printing.|You just have an ability to make any conversation so interesting.",
	               "On the train back I really wanted to be suave…|So, after picking out your favourite type of chocolate I offered it to you.|As payment of course for teaching me how to skate!"]