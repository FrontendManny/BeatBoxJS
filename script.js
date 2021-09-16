let beats = {
  65: {
    beat: new Beat('./assets/Piano Chord 331.mp3'),
    button: new Button('#00fffe', 65),
  },
  83: {
    beat: new Beat('./assets/Piano Chord 209.mp3'),
    button: new Button('#00fffe', 83),
  },
  68: {
    beat: new Beat('./assets/Piano Chord 208.mp3'),
    button: new Button('#00fffe', 68),
  },
  70: {
    beat: new Beat('./assets/Drum Sticks Hit 3.mp3'),
    button: new Button('#FF00FF', 70),
  },
  71: {
    beat: new Beat('./assets/Drum Snare Roll.mp3'),
    button: new Button('#FF00FF', 71),
  },
  72: {
    beat: new Beat('./assets/PREL Musical 57.mp3'),
    button: new Button('#FF00FF', 72),
  },
  74: {
    beat: new Beat('./assets/Cymbal Suspended 2.mp3'),
    button: new Button('#FF00FF', 74),
  },
  75: {
    beat: new Beat('./assets/Musical Compos 33.mp3'),
    button: new Button('#FFFFFF', 75),
  },
  76: {
    beat: new Beat('./assets/Musical Orches 4.mp3'),
    button: new Button('#FFFFFF', 76),
  },
};

triggerBeat = (event) => {
  for (let beat in beats) {
    if (event.keyCode == beat) {
      beats[beat].beat.play();
      console.log(beats[beat].button.select());
    }
  }
};

document.addEventListener('keydown', triggerBeat);

document.addEventListener('keyup', () => {
  for (let beat in beats) {
    beats[beat].button.deselect();
  }
});
