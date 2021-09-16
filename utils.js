class Beat {
  constructor(audioSrc) {
    this.audio = new Audio(audioSrc);
  }

  play = () => {
    this.audio.currentTime = 0;
    this.audio.play();
  };
}

class Button {
  constructor(color, keyCode) {
    this.color = color;
    this.keyCode = keyCode;
    this.element = document.getElementById(keyCode);
    this.setButtonColorInHTML();
  }

  setButtonColorInHTML = () => {
    this.element.style.borderColor = this.color;
    this.element.style.color = '#FFFFFF';
  };

  select = () => {
    let theColor = this.color;
    this.element.style.backgroundColor = this.color;
    this.element.style.boxShadow = `0px 0px 25px 0px ${theColor}`;
  };

  deselect = () => {
    this.element.style.boxShadow = '';
    this.element.style.backgroundColor = '';
     this.element.style.color = ''
  };
}
