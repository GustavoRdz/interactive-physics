<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem On a horizontal, frictionless table, an open-topped {{ weight }}-kg box is attached to an ideal horizontal spring having force constant {{ elastic }} N/m. Inside the box is a {{ stone }}-kg stone. The system is oscillating with an amplitude of {{ amplitude }} cm. When the box has reached its maximum speed, the stone is suddenly plucked vertically out of the box without touching the box. Find (a) the period and (b) the amplitude of the resulting motion of the box. (c) Without doing any calculations, is the new period greater or smaller than the original period?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Box mass (kg)
        input.center.data(:class="checkedWeight" v-model.number='enterWeight')
      p.inline.data Elastic constant (N/m)
        input.center.data(:class="checkedElastic" v-model.number='enterElastic')
      p.inline.data Stone mass (Kg)
        input.center.data(:class="checkedStone" v-model.number='enterStone')
      p.inline.data Amplitude (m)
        input.center.data(:class="checkedAmplitude" v-model.number='enterAmplitude')
      p.inline.data Only box period (s)
        input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
      p.inline.data Only box amplitude (m)
        input.center.data(:class="checkedAmplitude2" v-model.number='enterAmplitude2')
      p.inline.data greater or smaller?
        input.center.data(:class="checkedGreat" v-model.number='enterGreat')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterWeight: '',
      enterElastic: '',
      enterStone: '',
      enterAmplitude: '',
      enterPeriod: '',
      enterAmplitude2: '',
      enterGreat: ''
    }
  },
  computed: {
    weight: function () {
      let max = 10000
      let min = 5000
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    elastic: function () {
      let max = 700000
      let min = 300000
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    stone: function () {
      let max = 5000
      let min = 1000
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    amplitude: function () {
      let max = 10000
      let min = 5000
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    angular1: function () {
      return Math.round(Math.sqrt(this.elastic / (this.weight + this.stone)))
    },
    angular2: function () {
      return Math.round(Math.sqrt(this.elastic / (this.weight)))
    },
    period: function () {
      return Math.round(2000 * Math.PI / this.angular2) / 1000
    },
    maxVel: function () {
      return Math.round(1000 * this.angular1 * this.amplitude / 100) / 1000
    },
    amplitude2: function () {
      return Math.round(1000 * this.maxVel / this.angular2) / 1000
    },
    inmmersedRatio: function () {
      return (100 * this.rhoObject / this.rhoFluid).toPrecision(3)
    },
    checkedWeight: function () {
      let check
      console.log('Weight : ' + this.weight + ' : ' + parseFloat(this.enterWeight))
      check = this.weight === parseFloat(this.enterWeight) ? 'correct' : 'not-correct'
      return check
    },
    checkedElastic: function () {
      let check
      console.log('Elastic constant : ' + this.elastic + ' : ' + parseFloat(this.enterElastic))
      check = this.elastic === parseFloat(this.enterElastic) ? 'correct' : 'not-correct'
      return check
    },
    checkedStone: function () {
      let check
      console.log('Stone mass : ' + this.stone + ' : ' + parseFloat(this.enterStone))
      check = this.stone === parseFloat(this.enterStone) ? 'correct' : 'not-correct'
      return check
    },
    checkedAmplitude: function () {
      let check
      console.log('Amplitude : ' + this.amplitude / 100 + ' : ' + parseFloat(this.enterAmplitude))
      check = this.amplitude / 100 === parseFloat(this.enterAmplitude) ? 'correct' : 'not-correct'
      return check
    },
    checkedPeriod: function () {
      let check
      console.log('Period : ' + this.period + ' : ' + parseFloat(this.enterPeriod))
      check = this.period === parseFloat(this.enterPeriod) ? 'correct' : 'not-correct'
      return check
    },
    checkedAmplitude2: function () {
      let check
      console.log('Only box amplitude : ' + this.amplitude2 + ' : ' + parseFloat(this.enterAmplitude2))
      check = this.amplitude2 === parseFloat(this.enterAmplitude2) ? 'correct' : 'not-correct'
      return check
    },
    checkedGreat: function () {
      let check
      console.log('Grat or smaller : great' + ' : ' + this.enterGreat)
      check = (this.enterGreat).toLowerCase() === 'great' ? 'correct' : 'not-correct'
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
