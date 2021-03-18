<template lang="pug">
  eg-transition(:enter='enter', :leave='leave')
    .eg-slide-content
      p.problem Un diapasón con una frecuencia de {{ frequencyF }} Hz se aleja de un observador y al mismo tiempo se acerca a una pared plana con una rapidez de {{ speedF }} m/s. ¿Cuál es la frecuencia percibida a) de las ondas sonoras no reflejadas que van directamente al observador, b) la de las ondas sonoras que van al observador después de reflejarse y c) la de las ondas sonoras para alguien que se mueve con el diapasón? Suponga que la rapidez del sonido en el aire es de 340 m/s.
      .center
        p.solution Please do calculations and introduce your results
        p.inline.data Rapidez fuente (m/s)
          input.center.data(:class="checkedSpeedF" v-model.number='enterSpeedF')
        p.inline.data Rapidez receptor (m/s)
          input.center.data(:class="checkedSpeedR" v-model.number='enterSpeedR')
        p.inline.data Frecuencia fuente (Hz)
          input.center.data(:class="checkedFrequencyF" v-model.number='enterFrequencyF')
        p.inline.data a) Frecuencia receptor (Hz)<br> <span v-if="errorRA">[e: {{ errorRA.toPrecision(3) }}%]</span>
          input.center.data(:class="checkedFrequencyRA" v-model='enterFrequencyRA')
        p.inline.data Frecuencia pared (Hz)<br> <span v-if="errorP">[e: {{ errorP.toPrecision(3) }}%]</span>
          input.center.data(:class="checkedFrequencyP" v-model='enterFrequencyP')
        p.inline.data b) Frecuencia receptor (Hz) <br> <span v-if="errorRB">[e: {{ errorRB.toPrecision(3) }}%]</span>
          input.center.data(:class="checkedFrequencyRB" v-model='enterFrequencyRB')
        p.inline.data c) Frecuencia diapasón (Hz) <br> <span v-if="errorD">[e: {{ errorD.toPrecision(3) }}%]</span>
          input.center.data(:class="checkedFrequencyD" v-model='enterFrequencyD')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterSpeedF: '',
      enterSpeedR: '',
      enterFrequencyF: '',
      enterFrequencyRA: '',
      enterFrequencyP: '',
      enterFrequencyRB: '',
      enterFrequencyD: '',
      speed: 340,
      speedR: 0,
      errorRA: 100,
      errorP: 100,
      errorRB: 100,
      errorD: 100
    }
  },
  computed: {
    frequencyF: function () {
      let max = 1000
      let min = 100
      return Math.round((Math.random() * (max - min + 1) + min))
    },
    speedF: function () {
      let max = 30
      let min = 10
      return Math.round((Math.random() * (max - min + 1) + min))
    },
    frequencyRA: function () {
      return Math.round(100 * (this.speed / (this.speed + this.speedF)) * this.frequencyF) / 100
    },
    frequencyP: function () {
      return Math.round(100 * (this.speed / (this.speed - this.speedF)) * this.frequencyF) / 100
    },
    frequencyRB: function () {
      return Math.round(100 * (this.speed / (this.speed - this.speedF)) * this.frequencyF) / 100
    },
    frequencyD: function () {
      return Math.round(100 * ((this.speed + this.speedF) / this.speed) * this.frequencyP) / 100
    },
    checkedSpeedF: function () {
      let check
      console.log('Rapidez fuente => ' + this.speedF + ' : ' + parseFloat(this.enterSpeedF))
      console.log('error  ' + 100 * Math.abs(this.speedF - parseFloat(this.enterSpeedF)) / this.speedF + ' %')
      check = this.speedF === parseFloat(this.enterSpeedF) ? 'correct' : 'not-correct'
      return check
    },
    checkedSpeedR: function () {
      let check
      console.log('Rapidez receptor => ' + this.speedR + ' : ' + parseFloat(this.enterSpeedR))
      console.log('error  ' + 100 * Math.abs(this.speedR - parseFloat(this.enterSpeedR)) / this.speedR + ' %')
      check = this.speedR === parseFloat(this.enterSpeedR) ? 'correct' : 'not-correct'
      return check
    },
    checkedFrequencyF: function () {
      let check
      console.log('Frecuencia fuente => ' + this.frequencyF + ' : ' + parseFloat(this.enterFrequencyF))
      console.log('error  ' + 100 * Math.abs(this.frequencyF - parseFloat(this.enterFrequencyF)) / this.frequencyF + ' %')
      check = this.frequencyF === parseFloat(this.enterFrequencyF) ? 'correct' : 'not-correct'
      return check
    },
    checkedFrequencyRA: function () {
      let check
      console.log('Frecuencia no reflejada => ' + this.frequencyRA + ' : ' + parseFloat(this.enterFrequencyRA))
      console.log('error  ' + 100 * Math.abs(this.frequencyRA - parseFloat(this.enterFrequencyRA)) / this.frequencyRA + ' %')
      this.errorRA = 100 * Math.abs(this.frequencyRA - parseFloat(this.enterFrequencyRA)) / this.frequencyRA
      check = this.errorRA < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedFrequencyP: function () {
      let check
      console.log('Frecuencia Pared => ' + this.frequencyP + ' : ' + parseFloat(this.enterFrequencyP))
      console.log('error  ' + 100 * Math.abs(this.frequencyP - parseFloat(this.enterFrequencyP)) / this.frequencyP + ' %')
      this.errorP = 100 * Math.abs(this.frequencyP - parseFloat(this.enterFrequencyP)) / this.frequencyP
      check = this.errorP < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedFrequencyRB: function () {
      let check
      console.log('Frecuencia reflejada => ' + this.frequencyRB + ' : ' + parseFloat(this.enterFrequencyRB))
      console.log('error  ' + 100 * Math.abs(this.frequencyRB - parseFloat(this.enterFrequencyRB)) / this.frequencyRB + ' %')
      this.errorRB = 100 * Math.abs(this.frequencyRB - parseFloat(this.enterFrequencyRB)) / this.frequencyRB
      check = this.errorRB < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedFrequencyD: function () {
      let check
      console.log('Frecuencia en diapasón => ' + this.frequencyD + ' : ' + parseFloat(this.enterFrequencyD))
      console.log('error  ' + 100 * Math.abs(this.frequencyD - parseFloat(this.enterFrequencyD)) / this.frequencyD + ' %')
      this.errorD = 100 * Math.abs(this.frequencyD - parseFloat(this.enterFrequencyD)) / this.frequencyD
      check = this.errorD < 1e-1 ? 'correct' : 'not-correct'
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
    width: 100%;
    max-width: 100%;
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
  margin: 0;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 25px;
  color: blue;
  width: 100%;
}

.solution {
  margin: 5px 5px 5px 5px;
  font-size: 20px;
  color: red;
}

.not-correct {
  background: #fa4408;
}
.correct {
  background: #80c080;
}
</style>
