<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem In a car lift used in a service station, compressed air is exerts a force on a small piston that has circular cross section and radius of {{ radiusA }} cm. This pressure is transmitted by a liquid to a piston that has a radius of {{ radiusB }} cm. What force must the compressed air exert to lift a car weigthing {{ weigth }} N? What air pressure produces this force?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Small radius (m)
        input.center.data(:class="checkedSmallRadius" v-model.number='enterSmallRadius')
        <span class="error" v-if="errorSmallRadius">[e: {{ errorSmallRadius.toPrecision(2) }}%]</span>
      p.inline.data Big Radius (m)
        input.center.data(:class="checkedBigRadius" v-model.number='enterBigRadius')
        <span class="error" v-if="errorBigRadius">[e: {{ errorBigRadius.toPrecision(2) }}%]</span>
      p.inline.data Small area (m<sup>2</sup>)
        input.center.data(:class="checkedSmallArea" v-model.number='enterSmallArea')
        <span class="error" v-if="errorSmallArea">[e: {{ errorSmallArea.toPrecision(2) }}%]</span>
      p.inline.data Big area (m<sup>2</sup>)
        input.center.data(:class="checkedBigArea" v-model='enterBigArea')
        <span class="error" v-if="errorBigArea">[e: {{ errorBigArea.toPrecision(2) }}%]</span>
      p.inline.data Car weigth (N)
        input.center.data(:class="checkedCarWeigth" v-model='enterCarWeigth')
        <span class="error" v-if="errorCarWeigth">[e: {{ errorCarWeigth.toPrecision(2) }}%]</span>
      p.inline.data Air force (N)
        input.center.data(:class="checkedAirForce" v-model='enterAirForce')
        <span class="error" v-if="errorAirForce">[e: {{ errorAirForce.toPrecision(2) }}%]</span>
      p.inline.data Air pressure (Pa)
        input.center.data(:class="checkedAirPressure" v-model='enterAirPressure')
        <span class="error" v-if="errorAirPressure">[e: {{ errorAirPressure.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterSmallRadius: '',
      errorSmallRadius: 0,
      enterBigRadius: '',
      errorBigRadius: 0,
      enterSmallArea: '',
      errorSmallArea: 0,
      enterBigArea: '',
      errorBigArea: 0,
      enterCarWeigth: '',
      errorCarWeigth: 0,
      enterAirForce: '',
      errorAirForce: 0,
      enterAirPressure: '',
      errorAirPressure: 0,
      correct: false
    }
  },
  computed: {
    radiusA: function () {
      console.clear()
      let max = 7
      let min = 2
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    radiusB: function () {
      let max = 20
      let min = 10
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    areaA: function () {
      return Math.PI * Math.pow(this.radiusA / 100, 2)
    },
    areaB: function () {
      return Math.PI * Math.pow(this.radiusB / 100, 2)
    },
    weigth: function () {
      let max = 20000
      let min = 10000
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    force: function () {
      return this.weigth * this.areaA / this.areaB
    },
    pressure: function () {
      return this.force / this.areaA
    },
    checkedSmallRadius: function () {
      this.errorSmallRadius = this.errorRelative('Small radius => ', this.radiusA / 100, parseFloat(this.enterSmallRadius))
      return this.errorSmallRadius < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedBigRadius: function () {
      this.errorBigRadius = this.errorRelative('Big radius => ', this.radiusB / 100, parseFloat(this.enterBigRadius))
      return this.errorBigRadius < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSmallArea: function () {
      this.errorSmallArea = this.errorRelative('Small area => ', this.areaA, parseFloat(this.enterSmallArea))
      return this.errorSmallArea < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedBigArea: function () {
      this.errorBigArea = this.errorRelative('Big Area => ', this.areaB, parseFloat(this.enterBigArea))
      return this.errorBigArea < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedCarWeigth: function () {
      this.errorCarWeigth = this.errorRelative('Car weigth => ', this.weigth, parseFloat(this.enterCarWeigth))
      return this.errorCarWeigth < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAirForce: function () {
      this.errorAirForce = this.errorRelative('Force => ', this.force, parseFloat(this.enterAirForce))
      return this.errorAirForce < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAirPressure: function () {
      this.errorAirPressure = this.errorRelative('Air pressure => ', this.pressure, parseFloat(this.enterAirPressure))
      return this.errorAirPressure < 1e-1 ? 'correct' : 'not-correct'
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
