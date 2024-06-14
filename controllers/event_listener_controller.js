import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("Hello from the Event Listener controller!");
  }

  disable() {
    this.element.innerText = "Trop fort!";
    this.element.setAttribute("disabled", "");
    this.audio.play();
    this.launchConfetti();
    this.showText();
  }

  get audio() {
    if (!this._audio) {
      this._audio = new Audio('claps-29454.mp3');
    }
    return this._audio;
  }

  launchConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  showText() {
    const textElement = document.createElement('div');
    textElement.innerText = "Bonne fête papa ! 🎉";
    textElement.classList.add('big-text');

    document.body.appendChild(textElement);

  }
}
