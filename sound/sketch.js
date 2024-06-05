let osc;
let notes_vector;
let intensity_vector;

let target = 432 / 2;

let third = 1.2599;
let fifth = 1.5;
let t = 0;

function setup() {
    let cnv = createCanvas(100, 100);
    background(0);

    //notes_vector = math.matrix([1 / 2, third / 2, fifth / 2, 1, third, fifth, 2]);

    notes_vector = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    intensity_vector = [1, 1 / (2 * 2), 1 / (3 * 3), 1, 1 / (5 * 5), 1 / (6 * 6), 1 / (7 * 7), 1, 1 / (9 * 9)];
    osc = [];

    for (let i = 0; i < notes_vector.length; i++) {
        osc[i] = new p5.Oscillator();
        osc[i].start();
        osc[i].freq(0);
        osc[i].amp(0);
    }
}

function draw() {
    t = millis();
    getAudioContext().resume();

    let half_life_seconds = 30;
    let curve_t = t / 1000;
    let curve_f = 4 * (Math.sin(curve_t) / (Math.PI) + Math.sin(3 * curve_t) / (3 * Math.PI) + Math.sin(5 * curve_t) / (5 * Math.PI) + Math.sin(7 * curve_t) / (7 * Math.PI));
    let fundamental_freq = 55 + (55 * fifth - 55) * (curve_f + 1) / 2;//target * (1 - Math.exp(-t / (half_life_seconds * 1000)));
    console.log(fundamental_freq);
    let fundamental_vol = (1 - Math.exp(-t / (half_life_seconds * 1000)));

    for (let i = 0; i < osc.length; i++) {
        osc[i].freq(fundamental_freq * notes_vector[i]);
        osc[i].amp(intensity_vector[i]);
    }
}