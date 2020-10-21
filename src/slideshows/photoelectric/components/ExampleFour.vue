<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem The threshold frequency for a certain material is {{ thresholdF.toExponential() }} cycles/s.<br> a) Determine the maximum kinetic energy for photoelectrons when light, whose frequency is {{ frequency.toExponential() }} cycles/s, strikes that material.<br> b) Calculate the stopping potential and<br>c) finally find the maximum velocity of the photoelectrons.
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data f<sub>Th</sub> (Hz)
    //-     input.center.data(:class="checkedFocus" v-model.number='enterFocus')
    //-   p.inline.data  φ (J)
    //-     input.center.data(:class="checkedPi" v-model.number='enterPi')
    //-   p.inline.data f<sub>photon</sub> (Hz)
    //-     input.center.data(:class="checkedQi" v-model.number='enterQi')
    //-   p.inline.data E<sub>photon</sub> (J)
    //-     input.center.data(:class="checkedMi" v-model='enterMi')
    //-   p.inline.data K<sub>max</sub>
    //-     input.center.data(:class="checkedRVi" v-model='enterRVi')
    //-   p.inline.data V<sub>0</sub> (volts)
    //-     input.center.data(:class="checkedUIi" v-model='enterUIi')
    //-   p.inline.data  v<sub>max</sub> (m/s)
    //-     input.center.data(:class="checkedPii" v-model.number='enterPii')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterFocus: '',
      enterPi: '',
      enterPii: '',
      enterPiii: '',
      enterQi: '',
      enterQii: '',
      enterQiii: '',
      enterMi: '',
      enterMii: '',
      enterMiii: '',
      enterRVi: '',
      enterRVii: '',
      enterRViii: '',
      enterUIi: '',
      enterUIii: '',
      enterUIiii: ''
    }
  },
  computed: {
    thresholdF: function () {
      let max = 200
      let min = 100
      return 1e15 * Math.round(Math.floor(Math.random() * (max - min + 1) + min)) / 100
    },
    frequency: function () {
      let max = 250
      let min = this.thresholdF / 1e15 + 10
      return 1e15 * Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    qii: function () {
      return Math.round(1000 * 2 * this.focus) / 1000
    },
    qiii: function () {
      return 'infinite'
    },
    Mi: function () {
      return Math.round(-1000 * this.qi / (4 * this.focus)) / 1000
    },
    Mii: function () {
      return Math.round(-1000 * this.qii / (2 * this.focus)) / 1000
    },
    Miii: function () {
      return ['infinite', '-infinite']
    },
    rVi: function () {
      return 'real'
    },
    rVii: function () {
      return 'real'
    },
    rViii: function () {
      return 'none'
    },
    uIi: function () {
      return 'inverted'
    },
    uIii: function () {
      return 'inverted'
    },
    uIiii: function () {
      return 'none'
    },
    checkedFocus: function () {
      let check
      console.log('Focus => ' + this.focus + ' : ' + parseFloat(this.enterFocus))
      check = this.focus === parseFloat(this.enterFocus) ? 'correct' : 'not-correct'
      return check
    },
    checkedPi: function () {
      let check
      console.log('Pi => ' + 4 * this.focus + ' : ' + parseFloat(this.enterPi))
      check = 4 * this.focus === parseFloat(this.enterPi) ? 'correct' : 'not-correct'
      return check
    },
    checkedPii: function () {
      let check
      console.log('Pii => ' + 2 * this.focus + ' : ' + parseFloat(this.enterPii))
      check = 2 * this.focus === parseFloat(this.enterPii) ? 'correct' : 'not-correct'
      return check
    },
    checkedPiii: function () {
      let check
      console.log('Piii => ' + this.focus + ' : ' + parseFloat(this.enterPiii))
      check = this.focus === parseFloat(this.enterPiii) ? 'correct' : 'not-correct'
      return check
    },
    checkedQi: function () {
      let check
      console.log('Qi => ' + this.qi + ' : ' + parseFloat(this.enterQi))
      check = this.qi === parseFloat(this.enterQi) ? 'correct' : 'not-correct'
      return check
    },
    checkedQii: function () {
      let check
      console.log('Qii => ' + this.qii + ' : ' + parseFloat(this.enterQii))
      check = this.qii === parseFloat(this.enterQii) ? 'correct' : 'not-correct'
      return check
    },
    checkedQiii: function () {
      let check
      console.log('Qiii => ' + this.qiii + ' : ' + this.enterQiii)
      check = this.qiii === this.enterQiii ? 'correct' : 'not-correct'
      return check
    },
    checkedMi: function () {
      let check
      console.log('Mi: ' + this.Mi + ' : ' + parseFloat(this.Mi))
      check = this.Mi === parseFloat(this.enterMi) ? 'correct' : 'not-correct'
      return check
    },
    checkedMii: function () {
      let check
      console.log('Mii: ' + this.Mii + ' : ' + parseFloat(this.Mii))
      check = this.Mii === parseFloat(this.enterMii) ? 'correct' : 'not-correct'
      return check
    },
    checkedMiii: function () {
      let check
      console.log('Miii: ' + this.Miii[0] + ' : ' + this.enterMiii)
      console.log('Miii: ' + this.Miii[1] + ' : ' + this.enterMiii)
      check = (this.Miii[0] === this.enterMiii || this.Miii[1] === this.enterMiii) ? 'correct' : 'not-correct'
      return check
    },
    checkedRVi: function () {
      let check
      console.log('Real o vitual i=> ' + this.rVi + ' : ' + this.enterRVi.toString().toLowerCase())
      check = this.rVi === this.enterRVi.toString().toLowerCase() ? 'correct' : 'not-correct'
      return check
    },
    checkedRVii: function () {
      let check
      console.log('Real o vitual ii=> ' + this.rVii + ' : ' + this.enterRVii.toString().toLowerCase())
      check = this.rVii === this.enterRVii.toString().toLowerCase() ? 'correct' : 'not-correct'
      return check
    },
    checkedRViii: function () {
      let check
      console.log('Real o vitual iii=> ' + this.rViii + ' : ' + this.enterRViii.toString().toLowerCase())
      check = this.rViii === this.enterRViii.toString().toLowerCase() ? 'correct' : 'not-correct'
      return check
    },
    checkedUIi: function () {
      let check
      console.log('Upright or inverted i=> ' + this.uIi + ' : ' + this.enterUIi.toString().toLowerCase())
      check = this.uIi === this.enterUIi.toString().toLowerCase() ? 'correct' : 'not-correct'
      return check
    },
    checkedUIii: function () {
      let check
      console.log('Upright or inverted ii=> ' + this.uIii + ' : ' + this.enterUIii.toString().toLowerCase())
      check = this.uIii === this.enterUIii.toString().toLowerCase() ? 'correct' : 'not-correct'
      return check
    },
    checkedUIiii: function () {
      let check
      console.log('Upright or inverted iii=> ' + this.uIiii + ' : ' + this.enterUIiii.toString().toLowerCase())
      check = this.uIiii === this.enterUIiii.toString().toLowerCase() ? 'correct' : 'not-correct'
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
  width: 95%;
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
