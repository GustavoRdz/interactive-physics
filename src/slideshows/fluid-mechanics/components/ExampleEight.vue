<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem The manometer measures {{ tirePressure }} kPa on the tires of a car. The area of each wheel that is in contact with the ground is {{ tireContactArea }} cm<sup>2</sup>. What is the mass of the car?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Gauge measurement (Pa)
        input.center.data(:class="checkedGauge" v-model.number='enterGauge')
        <span class="error" v-if="errorGauge">[e: {{ errorGauge.toPrecision(2) }}%]</span>
      p.inline.data Surface area (m<sup>2</sup>)
        input.center.data(:class="checkedArea" v-model.number='enterArea')
        <span class="error" v-if="errorArea">[e: {{ errorArea.toPrecision(2) }}%]</span>
      p.inline.data Force (N)
        input.center.data(:class="checkedWeight" v-model.number='enterWeight')
        <span class="error" v-if="errorWeight">[e: {{ errorWeight.toPrecision(2) }}%]</span>
      p.inline.data Car mass (kg)
        input.center.data(:class="checkedMass" v-model.number='enterMass')
        <span class="error" v-if="errorMass">[e: {{ errorMass.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterGauge: '',
      errorGauge: 0,
      enterArea: '',
      errorArea: 0,
      enterWeight: '',
      errorWeight: 0,
      enterMass: '',
      errorMass: 0,
      g: 9.81
    }
  },
  computed: {
    tirePressure: function () {
      console.clear()
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
      return 4 * this.tirePressure * 1e3 * this.tireContactArea * 1e-4
    },
    mass: function () {
      return this.force / this.g
    },
    checkedGauge: function () {
      this.errorGauge = this.errorRelative('Tire pressure => ', this.tirePressure * 1000, parseFloat(this.enterGauge))
      return this.errorGauge < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedArea: function () {
      this.errorArea = this.errorRelative('Tire contact area => ', 4 * this.tireContactArea * 1e-4, parseFloat(this.enterArea))
      return this.errorArea < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedWeight: function () {
      this.errorWeight = this.errorRelative('Car weight => ', this.force, parseFloat(this.enterWeight))
      return this.errorWeight < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMass: function () {
      this.errorMass = this.errorRelative('Car mass => ', this.mass, parseFloat(this.enterMass))
      return this.errorMass < 1e-1 ? 'correct' : 'not-correct'
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
