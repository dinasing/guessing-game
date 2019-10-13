class GuessingGame {
    constructor() {
        this.result = 0;
        this.start = 0;
        this.end = 0;
        this.middle;
      }
    
      setRange(min, max) {
          this.start = min;
          this.end = max;
      }
    
      guess() {
        this.middle= Math.ceil((this.start + this.end) / 2);
        this.result = this.middle;
        return this.result;
      }
    
      lower() {
        this.end= this.middle;
      }
    
      greater() {
        this.start = this.middle;
      }
  }

module.exports = GuessingGame;
