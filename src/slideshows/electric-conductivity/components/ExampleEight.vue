<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem An uncharged capacitor and a resistor are connected in series to a battery as shown in Active Figure 28.16, where &epsilon; = 12.0 V, C = 5.00 &mu;F, and R = 8.00 &times; 10<sup>5</sup> &Omega;. The switch is thrown to position a. Find the time constant of the circuit, the maximum charge on the capacitor, the maximum current in the circuit, and the charge and current as functions of time.
    .center 
      img(src='../assets/fig28-16A.png' width="300px")
    
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Silicon silver mass (fg)
    //-     input.center.data(:class="checkedSilverMass" v-model.number='enterSilverMass')
    //-   p.inline.data Silicon silver frequency (PHz)
    //-     input.center.data(:class="checkedSilverFreq" v-model.number='enterSilverFreq')
    //-   p.inline.data Frequency with virus (PHz)
    //-     input.center.data(:class="checkedVirusFreq" v-model.number='enterVirusFreq')
    //-   p.inline.data Virus mass (fgr)
    //-     input.center.data(:class="checkedVirusMassF" v-model.number='enterVirusMassF')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterSilverMass: '',
      enterSilverFreq: '',
      enterVirusFreq: '',
      enterVirusMass: '',
      enterVirusMassF: ''
    }
  },
  computed: {
    silverMass: function () {
      let max = 25
      let min = 18
      return (0.01 * Math.round((Math.floor(Math.random() * (max - min + 1)) + min)))
    },
    sFrequency: function () {
      let max = 23
      let min = 17
      return (Math.round(10 * (Math.floor(Math.random() * (max - min + 1)) + min)) / 100)
    },
    vFrequency: function () {
      let max = 23
      let min = 1.4 * this.sFrequency / 1e14
      return (0.01 * Math.round((Math.floor(Math.random() * (max - min + 1)) + min)))
    },
    virusMass: function () {
      let mass = (this.silverMass * (Math.pow(this.sFrequency / this.vFrequency, 2)))
      return (Math.pow(10, -15) * Math.round(1000 * mass) / 1000)
    },
    virusMassF: function () {
      console.log('La masa F:' + (this.silverMass * (Math.pow(this.sFrequency / this.vFrequency, 2) - 1)))
      return Math.round(1000 * (this.silverMass * (Math.pow(this.sFrequency / this.vFrequency, 2) - 1))) / 1000
    },
    checkedSilverMass: function () {
      let check
      console.log('Silicon Silver mass : ' + this.silverMass + ' : ' + parseFloat(this.enterSilverMass))
      check = this.silverMass === parseFloat(this.enterSilverMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedSilverFreq: function () {
      let check
      console.log('Silicon silver frequency: ' + this.sFrequency + ' : ' + parseFloat(this.enterSilverFreq))
      check = this.sFrequency === parseFloat(this.enterSilverFreq) ? 'correct' : 'not-correct'
      return check
    },
    checkedVirusFreq: function () {
      let check
      console.log('virus and silicon frequency : ' + this.vFrequency + ' : ' + parseFloat(this.enterVirusFreq))
      check = this.vFrequency === parseFloat(this.enterVirusFreq) ? 'correct' : 'not-correct'
      return check
    },
    checkedVirusMass: function () {
      let check
      console.log('Virus mass: ' + this.virusMass + ' : ' + parseFloat(this.enterVirusMass))
      check = this.virusMass === parseFloat(this.enterVirusMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedVirusMassF: function () {
      let check
      console.log('Virus femto mass: ' + this.virusMassF + ' : ' + parseFloat(this.enterVirusMassF))
      check = this.virusMassF === parseFloat(this.enterVirusMassF) ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
    message: function (name) {
      return
    }
  },
  mixins: [eagle.slide]
}
</script>

<style lang='scss' scoped>
.eg-slide {
  .eg-slide-content {
    // FIGURE AND CAPTIONS
    .figure {
      p {
        font-size: 0.7em;
        margin-top: 2em;
        margin-bottom: 0;
        color: #555;
      }
      width: 80%;
      margin-left: 10%;
    }
  }
}

.data {
  display: inline-block;
  width: 100px;
  height: 30px;
  margin: 5px 3px 5px 3px;
  font-size: 20px;
}

.problem {
  margin: 15px 20px 15px 20px;
  font-size: 30px;
  color: blue;
  width: 100%;
}

.solution {
  margin: 15px 5px 5px 5px;
  font-size: 20px;
  color: red;
  width: 100%;
}

.not-correct {
  background: #fa4408;
}
.correct {
  background: #80c080;
}
</style>
