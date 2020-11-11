<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Calculate the binding energy of the following isotope <sup>33</sup><sub>16</sub>S
    //- p.problem (a) the energy (in electron volts),
    //- p.problem (b) the wavelength, and
    //- p.problem (c) the frequency of the emitted photon.

    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data a) E  (eV)
    //-     input.center.data(:class="checkedE" v-model.number='enterE')
    //-   p.inline.data E (J)
    //-     input.center.data(:class="checkedEj" v-model.number='enterEj')
    //-   p.inline.data b) λ (m)
    //-     input.center.data(:class="checkedL" v-model.number='enterL')
    //-   p.inline.data c) f (Hz)
    //-     input.center.data(:class="checkedF" v-model='enterF')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterE: '',
      enterEj: '',
      enterL: '',
      enterF: '',
      e: 1.6e-19,
      h: 6.626e-34,
      c: 3e8
    }
  },
  computed: {
    levelDown: function () {
      let max = 5
      let min = 1
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    levelUp: function () {
      let max = 10
      let min = this.levelDown + 1
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    energyEv: function () {
      return Math.round(1000 * -13.606 * (1 / Math.pow(this.levelUp, 2) - 1 / Math.pow(this.levelDown, 2))) / 1000
    },
    energyJ: function () {
      return parseFloat((this.energyEv * this.e).toPrecision(4))
    },
    lambda: function () {
      return parseFloat((this.h * this.c / this.energyJ).toPrecision(4))
    },
    frequency: function () {
      return parseFloat((this.energyJ / this.h).toPrecision(4))
    },
    checkedE: function () {
      let check
      console.log('E (eV) => ' + this.energyEv + ' : ' + parseFloat(this.enterE))
      check = this.energyEv === parseFloat(this.enterE) ? 'correct' : 'not-correct'
      return check
    },
    checkedEj: function () {
      let check
      console.log('E (J) => ' + this.energyJ + ' : ' + parseFloat(this.enterEj))
      check = this.energyJ === parseFloat(this.enterEj) ? 'correct' : 'not-correct'
      return check
    },
    checkedL: function () {
      let check
      console.log('λ => ' + this.lambda + ' : ' + parseFloat(this.enterL))
      check = this.lambda === parseFloat(this.enterL) ? 'correct' : 'not-correct'
      return check
    },
    checkedF: function () {
      let check
      console.log('Frequency => ' + this.frequency + ' : ' + this.enterF)
      check = this.frequency === parseFloat(this.enterF) ? 'correct' : 'not-correct'
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
