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

// ================= SCENE #3 ==================

const Roo4 = document.createElement("img");
const Roo5 = document.createElement("img");
const Roo6 = document.createElement("img");

Roo4.src = "source/pixel_art/roo4.png"
Roo5.src = "source/pixel_art/roo5.png"
Roo6.src = "source/pixel_art/roo6.png"

const Tigger4 = document.createElement("img");
const Tigger5 = document.createElement("img");
const Tigger6 = document.createElement("img");

Tigger4.src = "source/pixel_art/tigger4.png"
Tigger5.src = "source/pixel_art/tigger5.png"
Tigger6.src = "source/pixel_art/tigger6.png"

const cloud = document.createElement("img");
cloud.src = "source/pixel_art/cloud.png"

const treeNoSnow = document.createElement("img");
treeNoSnow.src = "source/pixel_art/no_snow.png"

const walkText = ["Before I had to leave to DC for work, we had this walk planned together!|It was something I was looking really forward to,|as we were not able to meet up for quite a while due to university.",
				  "Before our walk though I had some planning to do…",
				  "Although I went to cooking class I am by no means a chef,|however I really wanted to impress you by making you some food.|I spent a couple hours trying to make some perfect Nutella pancakes!|(What would I do without online recipes)",
				  "We met up downtown and I vividly remember going the wrong direction…|Over and over again…|Even though the path I was trying to go to, went through the entire city…",
				  "Its really easy to lose focus of other things when we talk.|I remember smiling ear to ear, listening to you talk about your art exhibit or|your animal crossing island.",
				  "You’re always such a joy to talk too!",
				  "After making it to the path, I remember just feeling really good.|Maybe it had something to do with finally touching grass (thank you CS).|Or maybe it had to do with the smart, pretty girl walking next to me.",
				  "We walked for quite a while before getting to this rock embankment,|which overlooked a small river. I remember sitting down next to you,|offering you my red Cornell hotel management jacket to sit on.|(Shout outs to my alma mater)",
				  "I presented you with the Nutella pancakes that I made, and even though|they were mashed up and a bit destroyed you were very kind by saying|that you liked them.",
				  "And then you offered me a box of the most beautiful looking macaroons.|Like I’m not kidding you could easily be a pastry chef.",
				  "It was one of the sweetest things someone had done for me,|and it really means a lot Roo.|It made me feel really appreciated and really happy.|(They also made my stomach really happy too)",
				  "Near the end we were walking through the graveyard and I think you|were talking about an ice cream shop with your uncle. For some reason|I immediately felt pretty sad, as I knew that the next day I had to leave.",
				  "You picked up on it and I made some excuse,|I didn’t really think that I could have a day like this before then,|being able to walk around with someone not worrying about anything|just able to talk about what I want to talk about.",
				  "It made me really happy to know that there was someone like me,|who could understand my quirks and silly jokes and who I could be|around and not feel tired.",
				  "It really made me appreciate you even more, you know.|I’ve met a lot of people, but none of them could be you Roo.|The world is a better place because you are in it!"]

// ================= SCENE #4 ==================

const computer = document.createElement("img");
const tiggerBack = document.createElement("img");

computer.src = "source/pixel_art/computer.png"
tiggerBack.src = "source/pixel_art/tiggerBack.png"