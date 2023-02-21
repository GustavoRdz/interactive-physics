<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem In the circuit, the battery has an emf of 12.0 V, the inductance is 2.81 mH, and the capacitance is 9.00 pF. The switch has been set to position a for a long time so that the capacitor is charged. The switch is then thrown to position b, removing the battery from the circuit and connecting the capacitor directly across the inductor.<br>(A) Find the frequency of oscillation of the circuit.<br>(B) What are the maximum values of charge on the capacitor and current in the circuit?

    .center
      //- img(src="../assets/fig32-14.png")
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Displacement (m)
    //-     input.center.data(:class="checkedDispl" v-model.number='enterDispl')
    //-   p.inline.data  Velocity (m/s)
    //-     input.center.data(:class="checkedVel" v-model.number='enterVel')
    //-   p.inline.data Acceleration (m/s<sup>2</sup>)
    //-     input.center.data(:class="checkedAcc" v-model.number='enterAcc')
    //-   p.inline.data Amplitud (m)
    //-     input.center.data(:class="checkedAmpl" v-model.number='enterAmpl')
    //-   p.inline.data How farther? (m)
    //-     input.center.data(:class="checkedFarther" v-model.number='enterFarther')
</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterDispl: '',
      enterVel: '',
      enterAcc: '',
      enterAmpl: '',
      enterFarther: ''
    }
  },
  computed: {
    displacement: function () {
      let max = 2000
      let min = 500
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    velocity: function () {
      let max = 3000
      let min = 2000
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    acceleration: function () {
      let max = 10000
      let min = 5000
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    angular: function () {
      return Math.round(1000 * Math.sqrt(this.acceleration / this.displacement)) / 1000
    },
    amplitude: function () {
      return Math.round(1000 * Math.sqrt(Math.pow(this.displacement, 2) + Math.pow(this.velocity / this.angular, 2))) / 1000
    },
    farther: function () {
      return Math.round(1000 * (this.amplitude - this.displacement)) / 1000
    },
    checkedDispl: function () {
      let check
      console.log('Displacement : ' + this.displacement + ' : ' + parseFloat(this.enterDispl))
      check = this.displacement === parseFloat(this.enterDispl) ? 'correct' : 'not-correct'
      return check
    },
    checkedVel: function () {
      let check
      console.log('Velocity : ' + this.velocity + ' : ' + parseFloat(this.enterVel))
      check = this.velocity === parseFloat(this.enterVel) ? 'correct' : 'not-correct'
      return check
    },
    checkedAcc: function () {
      let check
      console.log('Acceleration : ' + this.acceleration + ' : ' + parseFloat(this.enterAcc))
      check = this.acceleration === parseFloat(this.enterAcc) ? 'correct' : 'not-correct'
      return check
    },
    checkedAmpl: function () {
      let check
      console.log('Amplitude : ' + this.amplitude + ' : ' + parseFloat(this.enterAmpl))
      check = this.amplitude === parseFloat(this.enterAmpl) ? 'correct' : 'not-correct'
      return check
    },
    checkedFarther: function () {
      let check
      console.log('How farther :' + this.farther + ' : ' + parseFloat(this.enterFarther))
      check = this.farther === parseFloat(this.enterFarther) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserDisplacedVolume: function () {
      let check
      console.log(this.displacedVolume + ' : ' + parseFloat(this.userDisplacedVolume))
      check = parseFloat(this.displacedVolume) === parseFloat(this.userDisplacedVolume) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserBubbleVolume: function () {
      let check
      console.log(this.bubbleVolume + ' : ' + parseFloat(this.userBubbleVolume))
      check = parseFloat(this.bubbleVolume) === parseFloat(this.userBubbleVolume) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserCheat: function () {
      let check
      let cheat = this.cheat ? 'false' : 'true'
      console.log(this.cheat + ' : ' + this.userCheat)
      console.log(cheat)
      console.log(this.userCheat)
      console.log('Bouyant: ' + this.bouyant + ' : ' + this.realGoldBouyant)
      check = cheat === this.userCheat ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
    message: function (name) {
      return {
        'baby bunnies': 'Yeeeeah my favorite too !',
        'fluffy puppies': 'Wow so original.',
        'funny kitties': 'Good for you ' + this.volume + '.',
        'Theming': 'Ok ' + this.volume + ', whatever.',
        'Slide reuse': 'Seriously ' + this.volume + ' you <em>want</em> to see this.',
        'Interactivity': 'Well that\'s this slide, ' + this.volume +
                         '. <br /> A bit too late to unsee it, heh ?'
      }[name]
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
