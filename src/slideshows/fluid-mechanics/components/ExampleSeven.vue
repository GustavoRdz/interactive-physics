<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A child tries to drink water through a straw that is {{ strawHeight }} cm long, but notes that the water only rises {{ rise }} cm. How much did he reduce the pressure in his mouth with respect to that of the atmosphere?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Water rise (m)
        input.center.data(:class="checkedRise" v-model.number='enterRise')
        <span class="error" v-if="errorRise">[e: {{ errorRise.toPrecision(2) }}%]</span>
      p.inline.data Atm pressure (Pa)
        input.center.data(:class="checkedAtmPressure" v-model.number='enterAtmPressure')
        <span class="error" v-if="errorAtmPressure">[e: {{ errorAtmPressure.toPrecision(2) }}%]</span>
      p.inline.data Density (kg/m<sup>2</sup>)
        input.center.data(:class="checkedDensity" v-model.number='enterDensity')
        <span class="error" v-if="errorDensity">[e: {{ errorDensity.toPrecision(2) }}%]</span>
      p.inline.data P. before(Pa)
        input.center.data(:class="checkedPrssBefore" v-model.number='enterPrssBefore')
        <span class="error" v-if="errorPrssBefore">[e: {{ errorPrssBefore.toPrecision(2) }}%]</span>
      p.inline.data P. after (Pa)
        input.center.data(:class="checkedPrssAfter" v-model='enterPrssAfter')
        <span class="error" v-if="errorPrssAfter">[e: {{ errorPrssAfter.toPrecision(2) }}%]</span>
      p.inline.data P. difference (Pa)
        input.center.data(:class="checkedPrssDifference" v-model='enterPrssDifference')
        <span class="error" v-if="errorPrssDifference">[e: {{ errorPrssDifference.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterRise: '',
      errorRise: 0,
      enterAtmPressure: '',
      errorAtmPressure: 0,
      enterDensity: '',
      errorDensity: 0,
      enterPrssBefore: '',
      errorPrssBefore: 0,
      enterPrssAfter: '',
      errorPrssAfter: 0,
      enterPrssDifference: '',
      errorPrssDifference: 0,
      rho: 1.2,
      g: 9.81,
      atm: 101300
    }
  },
  computed: {
    strawHeight: function () {
      console.clear()
      let max = 110
      let min = 90
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    rise: function () {
      let max = 90
      let min = 50
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    initialPressure: function () {
      // pressure of the column of air
      return this.rho * this.g * this.strawHeight / 100
    },
    finalPressure: function () {
      // pressure of the small column of air
      return this.rho * this.g * (this.strawHeight - this.rise) / 100
    },
    pressureDecrease: function () {
      return this.finalPressure - this.initialPressure
    },
    checkedRise: function () {
      this.errorRise = this.errorRelative('Water rise => ', this.rise / 100, parseFloat(this.enterRise))
      return this.errorRise < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAtmPressure: function () {
      this.errorAtmPressure = this.errorRelative('Atmospheric pressure => ', this.atm, parseFloat(this.enterAtmPressure))
      return this.errorAtmPressure < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDensity: function () {
      this.errorDensity = this.errorRelative('Fluid density => ', this.rho, parseFloat(this.enterDensity))
      return this.errorDensity < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPrssBefore: function () {
      this.errorPrssBefore = this.errorRelative('Pressure before => ', this.initialPressure, parseFloat(this.enterPrssBefore))
      return this.errorPrssBefore < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPrssAfter: function () {
      this.errorPrssAfter = this.errorRelative('Final pressure => ', this.finalPressure, parseFloat(this.enterPrssAfter))
      return this.errorPrssAfter < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPrssDifference: function () {
      this.errorPrssDifference = this.errorRelative('Presssure difference => ', this.pressureDecrease, parseFloat(this.enterPrssDifference))
      return this.errorPrssDifference < 1e-1 ? 'correct' : 'not-correct'
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
