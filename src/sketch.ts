// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    
    randomSeed: 0,
    nb : 100,
    Download_Image: () => save(),
}
gui.add(params, "randomSeed",0, 200, 1)
gui.add(params, "nb",0, 500, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    randomSeed(params.randomSeed);
    background('black');
    fill(255,255,255,50)
    noStroke();
    translate(width/2, height/2)
    for(let i=0; i< params.nb;i++){
        let angle = random(TWO_PI);
        let radius = randomGaussian(0, 200);
        
        ellipse(radius * cos(angle), radius * sin(angle), 25);

    }



}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}