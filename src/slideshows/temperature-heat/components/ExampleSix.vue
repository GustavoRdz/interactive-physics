<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  p.problem A sphere of steel that is at a temperature of {{ coldTemperature }}&#x00B0;C has a diameter of {{ sphereDiameter }} cm, while the diameter of a hole that was made in an aluminum plate is {{ holeDiameter }} cm. At what common temperature will the sphere just pass the hole? What is the diameter of the sphere at that temperature?

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data T<sub>f</sub> (&#x00B0;C)
        input.center.data(:class="checkedTemperature" v-model.number='enterTemperature')
        <span class="error" v-if="errorTemperature">[e: {{ errorTemperature.toPrecision(2) }}%]</span>
      p.inline.data <em>&#x03C6;</em><sub>sphere</sub> (cm)
        input.center.data(:class="checkedDiameter" v-model.number='enterDiameter')
        <span class="error" v-if="errorDiameter">[e: {{ errorDiameter.toPrecision(4) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'

export default {
  data: function () {
    return {
      alphaSteel: 1.1e-5,
      alphaAluminium: 2.4e-5,
      enterTemperature: '',
      errorTemperature: 0,
      enterDiameter: '',
      errorDiameter: 0
    }
  },
  computed: {
    coldTemperature: function () {
      console.clear()
      let max = 30
      let min = 20
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    sphereDiameter: function () {
      let max = 1000
      let min = 900
      return Math.round(Math.random() * (max - min + 1) + min) / 1000
    },
    holeDiameter: function () {
      let max = 1000 * this.sphereDiameter - 1
      let min = max * 0.998
      return Math.round(Math.random() * (max - min + 1) + min) / 1000
    },
    hotTemperature: function () {
      let numerator = this.holeDiameter - this.sphereDiameter
      let denominator = this.alphaSteel * this.sphereDiameter - this.alphaAluminium * this.holeDiameter
      return this.coldTemperature + numerator / denominator
    },
    sphereHotDiameter: function () {
      return this.sphereDiameter * (1 + this.alphaSteel * (this.hotTemperature - this.coldTemperature))
    },
    checkedTemperature: function () {
      this.errorTemperature = this.errorRelative('Final temp=> ', this.hotTemperature, parseFloat(this.enterTemperature))
      return this.errorTemperature < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDiameter: function () {
      this.errorDiameter = this.errorRelative('diameter=> ', this.sphereDiameter, parseFloat(this.enterDiameter))
      return this.errorDiameter < 1e-1 ? 'correct' : 'not-correct'
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
