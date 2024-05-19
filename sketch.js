var blots = [];
var total_energy = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
    
}

function draw() {
    let energy_rate = 1;
    //How blots will evolve?
    total_energy += energy_rate
    
    // generating new blots
    let virtual_energy_level = Math.random() * 10;
    if(total_energy > virtual_energy_level){
        let x = Math.random() * width;
        let y = Math.random() * height;
        let factor = 2;
        size = factor * virtual_energy_level;
        blots.push(new Blot(x, y, size));
        total_energy -= virtual_energy_level;
    }

    // evolving existing blots
    for (let i = 0; i < blots.length; i++) {
        let blot = blots[i];
        
        // degradation rate
        blot.size -= 0.1;
        
        if(blot.size <= 0){
            delete blots[i];
        }else{
            blot.size += 1;
        }
    }

    // drawing blots
    for (let blot of blots) {
        ellipse(blot.x, blot.y, blot.size, blot.size);
    }
}