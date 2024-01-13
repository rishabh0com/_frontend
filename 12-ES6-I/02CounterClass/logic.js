class Counter {
  constructor() {
    this.count = 0;
    this.timer = null;
  }
  //start method for counter
  start() {
    if (this.timer == null) {
      this.timer = setInterval(() => {
        this.count++;
        this.render();
      }, 1000);
    }
  }
  //stop method for counter
  stop() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  //increment method for timer
  increment() {
    this.stop();
    this.count++;
    this.render();
    btn.textContent = "Start";
  }
  //decrement method for timer
  decrement() {
    this.stop();
    this.count--;
    this.render();
    btn.textContent = "Start";
  }
  //display count menthod for counter
  render() {
    let displaydiv = document.getElementById("count");
    displaydiv.textContent = this.count;
  }
}
//create new object with class :
let counter1 = new Counter();
//add eventlistner on startStop button
let btn = document.getElementById("startStop");
btn.addEventListener("click", () => {
  if (btn.textContent == "Start") {
    counter1.start();
    btn.textContent = "Stop";
  } else {
    counter1.stop();
    btn.textContent = "Start";
  }
});
// onclick function for increment button
let inc = () => {
  counter1.increment();
};
//onclick function for decrement button
function dec() {
  counter1.decrement();
}
