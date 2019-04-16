<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem The manometer measures {{ tirePressure }} kPa on the tires of a car. The area of each wheel that is in contact with the ground is {{ tireContactArea }} cm<sup>2</sup>. What is the mass of the car?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Gauge measurement (Pa)
        input.center.data(:class="checkedGaugeMeasurement" v-model.number='gaugeMeasurement')
      p.inline.data Surface area (m<sup>2</sup>)
        input.center.data(:class="checkedSurfaceArea" v-model.number='surfaceArea')
      p.inline.data Force (N)
        input.center.data(:class="checkedCarWeight" v-model.number='carWeight')
      p.inline.data Car mass (kg)
        input.center.data(:class="checkedCarMass" v-model.number='carMass')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      gaugeMeasurement: '',
      surfaceArea: '',
      carWeight: '',
      carMass: ''
    }
  },
  computed: {
    tirePressure: function () {
      let max = 180
      let min = 250
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    tireContactArea: function () {
      let max = 100
      let min = 150
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    force: function () {
      // pressure of the small column of air
      console.log('Weight final: ' + Math.round(this.tirePressure * this.tireContactArea * 4 / 10000) / 1)
      return Math.round(this.tirePressure * 1000 * this.tireContactArea * 4 / 10) / 1000
    },
    mass: function () {
      return Math.round(1000 * this.force / 9.81) / 1000
    },
    checkedGaugeMeasurement: function () {
      let check
      console.log('Pressure: ' + this.tirePressure * 1000 + ' : ' + parseFloat(this.gaugeMeasurement))
      check = this.tirePressure * 1000 === parseFloat(this.gaugeMeasurement) ? 'correct' : 'not-correct'
      return check
    },
    checkedSurfaceArea: function () {
      let check
      console.log('Area: ' + 4 * this.tireContactArea / 10000 + ' : ' + parseFloat(this.surfaceArea))
      check = 4 * this.tireContactArea / 10000 === parseFloat(this.surfaceArea) ? 'correct' : 'not-correct'
      return check
    },
    checkedCarWeight: function () {
      let check
      console.log('Weight final: ' + this.force + ' : ' + parseFloat(this.carWeight))
      check = this.force === parseFloat(this.carWeight) ? 'correct' : 'not-correct'
      return check
    },
    checkedCarMass: function () {
      let check
      console.log('Mass: ' + this.mass + ' : ' + parseFloat(this.carMass))
      check = this.mass === parseFloat(this.carMass) ? 'correct' : 'not-correct'
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
