export class TimerComponent {

  constructor(){
    console.log('Hello Timer components!')
    this.d = new Date();
    this.timer()
  }

  timer(){
      let myClock = document.getElementById("montre")
      if (myClock) {
        myClock.innerHTML = this.getTime(this.d)
        myClock.style.fontSize = '10rem';
        myClock.style.margin = '0rem';
        myClock.style.textShadow = '0px 0px 50px rgba(0, 0, 0, 0.21)';
      }

      setInterval( _=>{
            this.d = new Date();
            document.getElementById("montre").innerHTML = this.getTime(this.d)
      }, 100);
  }

  getTime(time){
        return    `
        <time datetime="${(time.getFullYear() < 10)?'0'+time.getFullYear():time.getFullYear()}-${(time.getMonth() < 10)?'0'+time.getMonth():time.getMonth()}-${(time.getDate() < 10)?'0'+time.getDate():time.getDate()} ${(time.getHours() < 10)?'0'+time.getHours():time.getHours()}:${(time.getMinutes() < 10)?'0'+time.getMinutes():time.getMinutes()}:${(time.getSeconds() < 10)?'0'+time.getSeconds():time.getSeconds()}">
        ${time.toLocaleTimeString()}</time >
        `;
  }
}
