<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A child tries to drink water through a straw that is {{ strawHeight }} cm long, but notes that the water only rises {{ rise }} cm. How much did he reduce the pressure in his mouth with respect to that of the atmosphere?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data water rise (m)
        input.center.data(:class="checkedWaterRise" v-model.number='waterRise')
      p.inline.data Atm pressure (Pa)
        input.center.data(:class="checkedAtmPressure" v-model.number='atmPressure')
      p.inline.data Fluid density (kg/m<sup>2</sup>)
        input.center.data(:class="checkedFluidDensity" v-model.number='fluidDensity')
      p.inline.data Pressure before(Pa)
        input.center.data(:class="checkedPressureBefore" v-model.number='pressureBefore')
      p.inline.data Pressure after (Pa)
        input.center.data(:class="checkedPressureAfter" v-model='pressureAfter')
      p.inline.data Pressure diference (Pa)
        input.center.data(:class="checkedPressureDifference" v-model='pressureDifference')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      waterRise: '',
      atmPressure: '',
      fluidDensity: '',
      waterPressure: '',
      pressureBefore: '',
      pressureAfter: '',
      pressureDifference: ''
    }
  },
  computed: {
    strawHeight: function () {
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
      return Math.round(1000 * 1.2 * 9.81 * this.strawHeight / 100) / 1000
    },
    finalPressure: function () {
      // pressure of the small column of air
      return Math.round(1.2 * 9.81 * (1 - this.rise / 100) * 1000) / 1000
    },
    pressureDecrease: function () {
      return Math.round(1000 * (this.finalPressure - this.initialPressure)) / 1000
    },
    checkedWaterRise: function () {
      let check
      console.log('rise : ' + this.rise / 100 + ' : ' + parseFloat(this.waterRise))
      check = this.rise / 100 === parseFloat(this.waterRise) ? 'correct' : 'not-correct'
      return check
    },
    checkedAtmPressure: function () {
      let check
      console.log('atmPressure : ' + 101300 + ' : ' + parseFloat(this.atmPressure))
      check = parseFloat(this.atmPressure) === 101300 ? 'correct' : 'not-correct'
      return check
    },
    checkedFluidDensity: function () {
      let check
      console.log('fluidDensity : ' + 1.2 + ' : ' + parseFloat(this.fluidDensity))
      check = parseFloat(this.fluidDensity) === 1.2 ? 'correct' : 'not-correct'
      return check
    },
    checkedPressureBefore: function () {
      let check
      console.log('initialPressure : ' + this.initialPressure + ' : ' + parseFloat(this.pressureBefore))
      check = this.initialPressure === parseFloat(this.pressureBefore) ? 'correct' : 'not-correct'
      return check
    },
    checkedPressureAfter: function () {
      let check
      console.log('finalPressure : ' + this.finalPressure + ' : ' + parseFloat(this.pressureAfter))
      check = this.finalPressure === parseFloat(this.pressureAfter) ? 'correct' : 'not-correct'
      return check
    },
    checkedPressureDifference: function () {
      let check
      console.log('pressureDecrease : ' + this.pressureDecrease + ' : ' + parseFloat(this.pressureDifference))
      check = this.pressureDecrease === parseFloat(this.pressureDifference) ? 'correct' : 'not-correct'
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
