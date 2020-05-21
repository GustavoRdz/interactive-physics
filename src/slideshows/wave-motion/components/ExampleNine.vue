<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A certain transverse wave is described by 
      .center.problem y(x, t) = (6.50mm)cos2&pi;(x/28cm - t/0.036s)
    p.problem Determine the wave’s (a) amplitude; (b) wavelength; (c) frequency; (d) speed of propagation; (e) direction of propagation.
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Displacement (in A)
    //-     input.center.data(:class="checkedDispl" v-model.number='enterDispl')
    //-   p.inline.data velocity ( in v<sub>max</sub>)
    //-     input.center.data(:class="checkedVelocity" v-model.number='enterVelocity')
    //-   p.inline.data Times in a period (times)
    //-     input.center.data(:class="checkedTimes" v-model.number='enterTimes')
    //-   p.inline.data Time between occurences (in T)
    //-     input.center.data(:class="checkedOccurences" v-model.number='enterOccurences')
    //-   p.inline.data Kinetic energy at A/2 (%)
    //-     input.center.data(:class="checkedKinetic" v-model.number='enterKinetic')
    //-   p.inline.data Potential energy at A/2 (%)
    //-     input.center.data(:class="checkedPotential" v-model.number='enterPotential')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterDispl: '',
      enterVelocity: '',
      enterTimes: '',
      enterOccurences: '',
      enterKinetic: '',
      enterPotential: ''
    }
  },
  computed: {
    checkedDispl: function () {
      let check
      console.log('Displacement : ' + Math.round(1000 * Math.sqrt(2) / 2) / 1000 + ' : ' + parseFloat(this.enterDispl))
      check = Math.round(1000 * Math.sqrt(2) / 2) / 1000 === parseFloat(this.enterDispl) ? 'correct' : 'not-correct'
      return check
    },
    checkedVelocity: function () {
      let check
      console.log('Velocty : ' + Math.round(1000 * Math.sqrt(2) / 2) / 1000 + ' : ' + parseFloat(this.enterVelocity))
      check = Math.round(1000 * Math.sqrt(2) / 2) / 1000 === parseFloat(this.enterVelocity) ? 'correct' : 'not-correct'
      return check
    },
    checkedTimes: function () {
      let check
      console.log('Times : ' + 4 + ' : ' + parseFloat(this.enterTimes))
      check = parseFloat(this.enterTimes) === 4 ? 'correct' : 'not-correct'
      return check
    },
    checkedOccurences: function () {
      let check
      console.log('Time between occurences: ' + 0.25 + ' : ' + parseFloat(this.enterOccurences))
      check = parseFloat(this.enterOccurences) === 0.25 ? 'correct' : 'not-correct'
      return check
    },
    checkedKinetic: function () {
      let check
      console.log('Kinetic energy at A/2 : ' + 75 + parseFloat(this.enterKinetic))
      check = parseFloat(this.enterKinetic) === 75 ? 'correct' : 'not-correct'
      return check
    },
    checkedPotential: function () {
      let check
      console.log('Potential energy at A/2 : ' + 25 + ' : ' + parseFloat(this.enterPotential))
      check = parseFloat(this.enterPotential) === 25 ? 'correct' : 'not-correct'
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
