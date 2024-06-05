let osc;
let notes_vector;
let intensity_vector;

let target = 432;

let third = 1.2599;
let fifth = 1.5;
let t = 0;

function setup() {
    let cnv = createCanvas(100, 100);
    background(0);

    notes_vector = math.matrix([1 / 2, third / 2, fifth / 2, 1, third, fifth, 2]);
    intensity_vector = math.matrix([1, 1 / third, 1 / fifth, 1 / 2, 1 / (2 * third), 1 / (2 * fifth), 1 / 4]);
    osc = [
        new p5.Oscillator('sine'),
        new p5.Oscillator('sine'),
        new p5.Oscillator('sine'),
        new p5.Oscillator('sine'),
        new p5.Oscillator('sine'),
        new p5.Oscillator('sine'),
        new p5.Oscillator('sine')
    ];

    for (let i = 0; i < osc.length; i++) {
        osc[i].start();
        osc[i].freq(0);
        osc[i].amp(0);
    }
}

function draw() {
    t = millis();
    getAudioContext().resume();

    let half_life_seconds = 30;

    let fundamental_freq = target * (1 - Math.exp(-t / (half_life_seconds * 1000)));
    let fundamental_vol = (1 - Math.exp(-t / (half_life_seconds * 1000)));

    for (let i = 0; i < osc.length; i++) {
        osc[i].freq(fundamental_freq * notes_vector._data[i]);
        osc[i].amp(intensity_vector._data[i] * fundamental_vol);
    }
}