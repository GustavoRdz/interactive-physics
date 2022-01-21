<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem An &alpha; particle is moving to the {{ particleDirection }} at an speeed of {{ Math.abs(alphaLabSpeed) }}c measured from the laboratory; from the particle emerges an electron that travels in the opposite direction at {{ Math.abs(electronAlphaSpeed) }}c measured from the &alpha; particle. What is the velocity of the electron measured by the person in the laboratory?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Velocity of the particle from lab (in c)
        input.center.data(:class="checkedLabAlpha" v-model.number='enterLabAlpha')
        <span class="error" v-if="errorLabAlpha">[e: {{ errorLabAlpha.toPrecision(3) }}%]</span>
      p.inline.data Velocity of the electron from lab (in c)
        input.center.data(:class="checkedLabE" v-model.number='enterLabE')
        <span class="error" v-if="errorLabE">[e: {{ errorLabE.toPrecision(3) }}%]</span>
      p.inline.data Velocity of the particle from the electron (in c)
        input.center.data(:class="checkedElectronAlpha" v-model.number='enterElectronAlpha')
        <span class="error" v-if="errorElectronAlpha">[e: {{ errorElectronAlpha.toPrecision(3) }}%]</span>
      p.inline.data Velocity of the electron from the particle (in c)
        input.center.data(:class="checkedAlphaElectron" v-model='enterAlphaElectron')
        <span class="error" v-if="errorAlphaElectron">[e: {{ errorAlphaElectron.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterLabAlpha: '',
      errorLabAlpha: 0,
      enterLabE: '',
      errorLabE: 0,
      enterElectronAlpha: '',
      errorElectronAlpha: 0,
      enterAlphaElectron: '',
      errorAlphaElectron: 0,
      direction: ''
    }
  },
  computed: {
    particleDirection: function () {
      console.clear()
      let valor = (Math.round(Math.random()) - 0.5) * 2
      this.direction = valor
      console.log('Direction: ', this.direction)
      return valor === 1 ? 'rigth' : 'left'
    },
    alphaLabSpeed: function () {
      let max = 100
      let min = 50
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100) * this.direction
    },
    electronAlphaSpeed: function () {
      let max = 50
      let min = 20
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100) * (-this.direction)
    },
    alphaElectron: function () {
      return this.electronAlphaSpeed
    },
    electronLabSpeed: function () {
      return parseFloat((this.alphaLabSpeed + this.electronAlphaSpeed).toPrecision(3))
    },
    electronAlpha: function () {
      return -this.electronAlphaSpeed
    },
    checkedLabAlpha: function () {
      let check
      let elem = this.alphaLabSpeed
      console.log('alphaLAbSpeed => ' + elem + ' : ' + parseFloat(this.enterLabAlpha))
      this.errorLabAlpha = 100 * Math.abs((elem - parseFloat(this.enterLabAlpha)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorLabAlpha + ' %')
      check = this.errorLabAlpha < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedLabE: function () {
      let check
      let elem = this.electronLabSpeed
      console.log('electronLabSpeed => ' + elem + ' : ' + parseFloat(this.enterLabE))
      this.errorLabE = 100 * Math.abs((elem - parseFloat(this.enterLabE)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorLabE + ' %')
      check = this.errorLabE < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedElectronAlpha: function () {
      let check
      let elem = this.electronAlpha
      console.log('ElectronAlpha => ' + elem + ' : ' + parseFloat(this.enterElectronAlpha))
      this.errorElectronAlpha = 100 * Math.abs((elem - parseFloat(this.enterElectronAlpha)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorElectronAlpha + ' %')
      check = this.errorElectronAlpha < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedAlphaElectron: function () {
      let check
      let elem = this.alphaElectron
      console.log('AlphaElectron => ' + elem + ' : ' + parseFloat(this.enterAlphaElectron))
      this.errorAlphaElectron = 100 * Math.abs((elem - parseFloat(this.enterAlphaElectron)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorAlphaElectron + ' %')
      check = this.errorAlphaElectron < 1e-1 ? 'correct' : 'not-correct'
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
      width: 100%;
      margin-left: 0%;
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
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
.error {
  font-size: 14px;
}
</style>
