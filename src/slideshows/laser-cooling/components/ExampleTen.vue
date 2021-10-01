<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  p.problem A hot copper pot of mass {{ copperMass}} kg (including its copper lid) is at a temperature of {{ copperTemp }}&#x00B0;C. You pour {{ waterMass }} kg of cool water at {{ waterTemp }}&#x00B0;C into the pot, then quickly replace the lid so no steam can scape. Find the final temperature of the pot and its contents, ans determine the phase of the water (liquid, gas or a mixture). Assume that no heat is lost to the surroundings.

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Pot mass (kg)
        input.center.data(:class="checkedPotMass" v-model.number='enterPotMass')
        <span class="error" v-if="errorPotMass">[e: {{ errorPotMass.toPrecision(2) }}%]</span>
      p.inline.data Water mass (kg)
        input.center.data(:class="checkedWaterMass" v-model.number='enterWaterMass')
        <span class="error" v-if="errorWaterMass">[e: {{ errorWaterMass.toPrecision(2) }}%]</span>
      p.inline.data Pot temp. (&#x00B0;C)
        input.center.data(:class="checkedPotTemp" v-model.number='enterPotTemp')
        <span class="error" v-if="errorPotTemp">[e: {{ errorPotTemp.toPrecision(2) }}%]</span>
      p.inline.data Water temp. (&#x00B0;C)
        input.center.data(:class="checkedWaterTemp" v-model.number='enterWaterTemp')
        <span class="error" v-if="errorWaterTemp">[e: {{ errorWaterTemp.toPrecision(2) }}%]</span>
      p.inline.data Equilibrium temp. (&#x00B0;C)
        input.center.data(:class="checkedEqTemp" v-model.number='enterEqTemp')
        <span class="error" v-if="errorEqTemp">[e: {{ errorEqTemp.toPrecision(2) }}%]</span>
      p.inline.data final steam mass (kg)
        input.center.data(:class="checkedSteam" v-model.number='enterSteam')
        <span class="error" v-if="errorSteam">[e: {{ errorSteam.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'

export default {
  data: function () {
    return {
      enterPotMass: '',
      errorPotMass: 0,
      enterWaterMass: '',
      errorWaterMass: 0,
      enterPotTemp: '',
      errorPotTemp: 0,
      enterWaterTemp: '',
      errorWaterTemp: 0,
      enterEqTemp: '',
      errorEqTemp: 0,
      enterSteam: '',
      errorSteam: 0,
      lV: 2256000,
      cC: 390,
      cW: 4190,
      phase: 'mixture'
    }
  },
  computed: {
    copperMass: function () {
      console.clear()
      let max = 250
      let min = 200
      return Math.floor(Math.random() * (max - min + 1) + min) / 100
    },
    copperTemp: function () {
      let max = 200
      let min = 150
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    waterMass: function () {
      let max = 100
      let min = 50
      return Math.floor(Math.random() * (max - min + 1) + min) / 1000
    },
    waterTemp: function () {
      let max = 25
      let min = 20
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    finalTemp: function () {
      return 100
    },
    steamMass: function () {
      return (-this.copperMass * this.cC * (this.finalTemp - this.copperTemp) - this.waterMass * this.cW * (this.finalTemp - this.waterTemp)) / this.lV
    },
    checkedPotMass: function () {
      this.errorPotMass = this.errorRelative('Copper mass => ', this.copperMass, parseFloat(this.enterPotMass))
      return this.errorPotMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedWaterMass: function () {
      this.errorWaterMass = this.errorRelative('Water mass => ', this.waterMass, parseFloat(this.enterWaterMass))
      return this.errorWaterMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPotTemp: function () {
      this.errorPotTemp = this.errorRelative('Copper temp => ', this.copperTemp, parseFloat(this.enterPotTemp))
      return this.errorPotTemp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedWaterTemp: function () {
      this.errorWaterTemp = this.errorRelative('Water temp => ', this.waterTemp, parseFloat(this.enterWaterTemp))
      return this.errorWaterTemp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedEqTemp: function () {
      this.errorEqTemp = this.errorRelative('Final temp => ', this.finalTemp, parseFloat(this.enterEqTemp))
      return this.errorEqTemp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSteam: function () {
      this.errorSteam = this.errorRelative('Steam mass => ', this.steamMass, parseFloat(this.enterSteam))
      return this.errorSteam < 1e-1 ? 'correct' : 'not-correct'
    }
  },
  methods: {
    errorRelative: function (comment, A, x) {
      let relativeError
      relativeError = 100 * Math.abs((A - x) / (A + Number.MIN_VALUE))
      console.log(comment + A + ' : ' + x + ' ==> ' + 'error  ' + relativeError + ' %')
      return relativeError
    }
  },
  watch: {
  },
  mixins: [eagle.slide]
}

</script>

<style lang='scss' scoped>
.eg-slide {
  .eg-slide-content {
    width: 100%;
    max-width: 100%;
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
  font-size: 22px;
  color: blue;
  width: 100%;
}
.mate {
  font-family: 'New Times Roman';
  font-style: italic;
  font-size: 30px;
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
