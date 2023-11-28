class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }
//if u declared a constructor, u must use this point, so that will know, you were defining an object.

/*
"start" method
should be declared
should receive 1 argument (printTimeCallback)
should increment by 1 the currentTime property on every 1 second interval
should invoke the passed argument (printTimeCallback) every 1 second
should increment the currentTime property to 3 after 3 seconds
*/


  start(printTimeCallback) {
    // ... your code goes here
  
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = setInterval(() => {
      this.currentTime += 1; // Increment currentTime by 1
      if (typeof printTimeCallback === 'function') {
        printTimeCallback(); // Call printTimeCallback if it's a function
      }
    }, 1000); // Set interval to 1 second, setInterval() will start repeating something here.
  }


  /*

  */ 


  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60);

  }

  /*
  */

  getSeconds() {

    // ... your code goes here
   /* if(!this.currentTime){
      return 0;
    }else{
      return this.currentTime;
    }
    setTimeout(() => {
      clearInterval(this.intervalId);
    }, 60000);
    */
    return this.currentTime % 60;

  }

  /*
"computeTwoDigitNumber" method
should be declared
should receive 1 argument (value)
should return a string
should always return a string of length 2
should return '00' when the value is 0
should return '15' when the value is 15
Should return '03' when the value is 3
  */

  computeTwoDigitNumber(value) {
    if(value < 10){
      return '0' + value.toString();
    }else{
      return value.toString();
    }
    // ... your code goes here
  }

/*
"stop" method
should be declared
should not receive any arguments
should call the clearInterval
should stop a previously started chronometer
*/

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

/*
"reset" method
should be declared
should not receive any arguments
should reset the value of the "currentTime" property to 0
should return valid format with minutes and seconds "mm:ss"

*/


  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60);
    const seconds = this.currentTime % 60;

    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return formattedMinutes + ':' + formattedSeconds;
  }
}
