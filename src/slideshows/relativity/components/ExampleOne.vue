<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem An &alpha; particle is moving to the {{ particleDirection }} at an speeed of {{ Math.abs(alphaLabSpeed) }}c measured from the laboratory; from the particle emerges an electron that travels in the opposite direction at {{ Math.abs(electronAlphaSpeed) }}c measured from the &alpha; particle. What is the velocity of the electron measured by the person in the laboratory?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Velocity of the particle from lab (in c)
        input.center.data(:class="checkedLabAlpha" v-model.number='enterLabAlpha')
      p.inline.data Velocity of the electron from lab (in c)
        input.center.data(:class="checkedLabE" v-model.number='enterLabE')
      p.inline.data Velocity of the particle from the electron (in c)
        input.center.data(:class="checkedElectronAlpha" v-model.number='enterElectronAlpha')
      p.inline.data Velocity of the electron from the particle (in c)
        input.center.data(:class="checkedAlphaElectron" v-model='enterAlphaElectron')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterLabAlpha: '',
      enterLabE: '',
      enterElectronAlpha: '',
      enterAlphaElectron: '',
      direction: ''
    }
  },
  computed: {
    particleDirection: function () {
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
      return parseFloat((this.alphaLabSpeed - this.electronAlphaSpeed).toPrecision(3))
    },
    electronAlpha: function () {
      return -this.electronAlphaSpeed
    },
    checkedLabAlpha: function () {
      let check
      console.log('alphaLAbSpeed => ' + this.alphaLabSpeed + ' : ' + parseFloat(this.enterLabAlpha))
      check = this.alphaLabSpeed === parseFloat(this.enterLabAlpha) ? 'correct' : 'not-correct'
      return check
    },
    checkedLabE: function () {
      let check
      console.log('electronLabSpeed => ' + this.electronLabSpeed + ' : ' + parseFloat(this.enterLabE))
      check = this.electronLabSpeed === parseFloat(this.enterLabE) ? 'correct' : 'not-correct'
      return check
    },
    checkedElectronAlpha: function () {
      let check
      console.log('ElectronAlpha => ' + this.electronAlpha + ' : ' + parseFloat(this.enterElectronAlpha))
      check = this.electronAlpha === parseFloat(this.enterElectronAlpha) ? 'correct' : 'not-correct'
      return check
    },
    checkedAlphaElectron: function () {
      let check
      console.log('AlphaElectron => ' + this.alphaElectron + ' : ' + parseFloat(this.enterAlphaElectron))
      check = this.alphaElectron === parseFloat(this.enterAlphaElectron) ? 'correct' : 'not-correct'
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
