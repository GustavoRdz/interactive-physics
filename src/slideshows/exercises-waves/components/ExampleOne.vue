<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Un automóvil que se mueve a {{ speedF }} m/s haciendo sonar el claxon (<b><em>f</em></b> = {{ frequencyF }} Hz) sigue a otro automóvil que se mueve a {{ speedR }} m/s en la misma dirección. ¿Cuál es la frecuencia aparente del claxon que escucha el conductor perseguido? Tome la rapidez del sonido como 340 m/s.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Rapidez fuente (m/s)
        input.center.data(:class="checkedSpeedF" v-model.number='enterSpeedF')
      p.inline.data Rapidez receptor (m/s)
        input.center.data(:class="checkedSpeedR" v-model.number='enterSpeedR')
      p.inline.data Rapidez sonido (m/s)
        input.center.data(:class="checkedSpeed" v-model.number='enterSpeed')
      p.inline.data Frecuencia fuente (Hz)
        input.center.data(:class="checkedFrequencyF" v-model.number='enterFrequencyF')
      p.inline.data Frecuencia Receptor (Hz) <span v-if="errorFr">[e: {{ errorFr.toPrecision(3) }}%]</span>
        input.center.data(:class="checkedFrequencyR" v-model.number='enterFrequencyR')
</template>

<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterSpeedF: '',
      enterSpeedR: '',
      enterSpeed: '',
      enterFrequencyF: '',
      enterFrequencyR: '',
      errorFr: 100,
      speed: 340
    }
  },
  computed: {
    frequencyF: function () {
      let max = 2000
      let min = 500
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    speedF: function () {
      let max = 60
      let min = 15
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    speedR: function () {
      let max = 60
      let min = 15
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    frequencyR: function () {
      return Math.round(10 * ((this.speed - this.speedR) / (this.speed - this.speedF)) * this.frequencyF) / 10
    },
    checkedSpeedF: function () {
      let check
      console.log('Rapidez del fuente:  => ' + this.speedF + ' : ' + parseFloat(this.enterSpeedF))
      console.log('error  ' + 100 * Math.abs(this.speedF - parseFloat(this.enterSpeedF)) / this.speedF + ' %')
      check = this.speedF === parseFloat(this.enterSpeedF) ? 'correct' : 'not-correct'
      // check = Math.abs(this.frequencyF - parseFloat(this.enterFrequencyF)) / this.frequencyF < 1e-3 ? 'correct' : 'not-correct'
      return check
    },
    checkedSpeedR: function () {
      let check
      console.log('Rapidez del receptor:  => ' + this.speedR + ' : ' + parseFloat(this.enterSpeedR))
      console.log('error  ' + 100 * Math.abs(this.speedR - parseFloat(this.enterSpeedR)) / this.speedR + ' %')
      check = this.speedR === parseFloat(this.enterSpeedR) ? 'correct' : 'not-correct'
      // check = Math.abs(this.frequencyF - parseFloat(this.enterFrequencyF)) / this.frequencyF < 1e-3 ? 'correct' : 'not-correct'
      return check
    },
    checkedSpeed: function () {
      let check
      console.log('Rapidez del sonido:  => ' + this.speed + ' : ' + parseFloat(this.enterSpeed))
      console.log('error  ' + 100 * Math.abs(this.speed - parseFloat(this.enterSpeed)) / this.speed + ' %')
      check = this.speed === parseFloat(this.enterSpeed) ? 'correct' : 'not-correct'
      // check = Math.abs(this.frequencyF - parseFloat(this.enterFrequencyF)) / this.frequencyF < 1e-3 ? 'correct' : 'not-correct'
      return check
    },
    checkedFrequencyF: function () {
      let check
      console.log('Frecuencia fuente:  => ' + this.frequencyF + ' : ' + parseFloat(this.enterFrequencyF))
      console.log('error  ' + 100 * Math.abs(this.frequencyF - parseFloat(this.enterFrequencyF)) / this.frequencyF + ' %')
      check = this.frequencyF === parseFloat(this.enterFrequencyF) ? 'correct' : 'not-correct'
      // check = Math.abs(this.frequencyF - parseFloat(this.enterFrequencyF)) / this.frequencyF < 1e-3 ? 'correct' : 'not-correct'
      return check
    },
    checkedFrequencyR: function () {
      let check
      console.log('Frecuencia receptor:  => ' + this.frequencyR + ' : ' + parseFloat(this.enterFrequencyR))
      console.log('error  ' + 100 * Math.abs(this.frequencyR - parseFloat(this.enterFrequencyR)) / this.frequencyR + ' %')
      this.errorFr = 100 * Math.abs(this.frequencyR - parseFloat(this.enterFrequencyR)) / this.frequencyR
      check = this.errorFr < 1e-1 ? 'correct' : 'not-correct'
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
  width: 100%;
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
      width: 100%;
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
