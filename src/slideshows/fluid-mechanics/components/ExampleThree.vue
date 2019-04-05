<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Estimate the force excerted on your eardrum due to the water when you are swimming at the bottom of a pool that is {{ deep }} m deep. <span style="font-size: 20px; color: green;">Eardrum estimate area is 1 cm<sup>2</sup></span>
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Pool deep (m)
        input.center.data(:class="checkedPoolDeep" v-model.number='poolDeep')
      p.inline.data Atm pressure (Pa)
        input.center.data(:class="checkedAtmPressure" v-model.number='atmPressure')
      p.inline.data Fluid density (kg/m<sup>2</sup>)
        input.center.data(:class="checkedFluidDensity" v-model.number='fluidDensity')
      p.inline.data Water pressure (Pa)
        input.center.data(:class="checkedWaterPressure" v-model.number='waterPressure')
      p.inline.data Surface area (m<sup>2</sup>)
        input.center.data(:class="checkedArea" v-model='surfaceArea')
      p.inline.data Water Force (N)
        input.center.data(:class="checkedWaterForce" v-model='waterForce')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      poolDeep: '',
      atmPressure: '',
      fluidDensity: '',
      waterPressure: '',
      surfaceArea: '',
      waterForce: ''
    }
  },
  computed: {
    deep: function () {
      let max = 1000
      let min = 300
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    pressure: function () {
      return 1000 * 9.810 * this.deep
    },
    force: function () {
      return Math.round(1000 * this.pressure * 0.0001) / 1000
    },
    checkedPoolDeep: function () {
      let check
      // console.log('deep => ' + this.deep + ' : ' + parseFloat(this.poolDeep))
      check = this.deep === parseFloat(this.poolDeep) ? 'correct' : 'not-correct'
      return check
    },
    checkedAtmPressure: function () {
      let check
      // console.log('atmPressure => ' + 101300 + ' : ' + parseFloat(this.atmPressure))
      check = parseFloat(this.atmPressure) === 101300 ? 'correct' : 'not-correct'
      return check
    },
    checkedFluidDensity: function () {
      let check
      // console.log('fluidDensity => ' + 1000 + ' : ' + parseFloat(this.fluidDensity))
      check = parseFloat(this.fluidDensity) === 1000 ? 'correct' : 'not-correct'
      return check
    },
    checkedWaterPressure: function () {
      let check
      // console.log('pressure => ' + this.pressure + ' : ' + parseFloat(this.waterPressure))
      check = this.pressure === parseFloat(this.waterPressure) ? 'correct' : 'not-correct'
      return check
    },
    checkedArea: function () {
      let check
      // console.log('surfaceArea => ' + 0.0001 + ' : ' + parseFloat(this.surfaceArea))
      check = parseFloat(this.surfaceArea) === 0.0001 ? 'correct' : 'not-correct'
      return check
    },
    checkedWaterForce: function () {
      let check
      // console.log('force => ' + this.force + ' : ' + parseFloat(this.waterForce))
      check = this.force === parseFloat(this.waterForce) ? 'correct' : 'not-correct'
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
