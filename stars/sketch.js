var blots = [];
var total_energy = 0;
var energy_rate =0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
    background(0);
    //How blots will evolve?
    total_energy += 2;

    let creationState = Math.random() > 0.3;

    if(creationState){
        let x = random(width);
        let y = random(height);
        let size = random(10, 50);
        let factor1 = random(0.1, 2);
        let blot = new Blot(x, y, size, factor1);
        blots.push(blot);
    }else{
        for(var i = 0; i < blots.length; i++){
            let blot = blots[i];
            blot.size -= blot.factor1 * 2;
            blot.size += blot.factor1 * blot.availableMass;
            blot.availableMass -= 0.05;
            blot.size -= 0.1 * blot.size;
            if(blot.size < 0){
                blots.splice(i, 1);
            }
        }
    }

    
    // drawing blots
    for (let blot of blots) {
        if(blot != undefined){
            ellipse(blot.x, blot.y, blot.size, blot.size);
        }
    }
}