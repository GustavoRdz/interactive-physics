<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A {{ glassVolume }}- cm<sup>3</sup> glass filled to the brim with mercury at {{ initialTemperature }}&#x00B0;C. How much mercury overflows when the temperature of the system is raised to {{ finalTemperature }}&#x00B0;C? The coefficient of linear expansion os the glass is 0.4 x 10 <sup>-5</sup> K<sup>-1</sup>
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data <em>&#x03B2;</em><sub>Hg</sub> (K<sup>-1</sup>)
        input.center.data(:class="checkedBetaHg" v-model.number='enterBetaHg')
        <span class="error" v-if="errorBetaHg">[e: {{ errorBetaHg.toPrecision(2) }}%]</span>
      p.inline.data <em>&#x03B2;</em><sub>Glass</sub> (K<sup>-1</sup>)
        input.center.data(:class="checkedBetaGlass" v-model.number='enterBetaGlass')
        <span class="error" v-if="errorBetaGlass">[e: {{ errorBetaGlass.toPrecision(2) }}%]</span>
      p.inline.data &#x394;T (&#x00B0;C)
        input.center.data(:class="checkedDT" v-model.number='enterDT')
        <span class="error" v-if="errorDT">[e: {{ errorDT.toPrecision(2) }}%]</span>
      p.inline.data &#x394;V<sub>Hg</sub> (cm<sup>3</sup>)
        input.center.data(:class="checkedDVHg" v-model.number='enterDVHg')
        <span class="error" v-if="errorDVHg">[e: {{ errorDVHg.toPrecision(2) }}%]</span>
      p.inline.data  &#x394;V<sub>Glass</sub> (cm<sup>3</sup>)
        input.center.data(:class="checkedDVGlass" v-model.number='enterDVGlass')
        <span class="error" v-if="errorDVGlass">[e: {{ errorDVGlass.toPrecision(2) }}%]</span>
      p.inline.data  &#x394;V<sub>overflow</sub> (cm<sup>3</sup>)
        input.center.data(:class="checkedOverflow" v-model.number='enterOverflow')
        <span class="error" v-if="errorOverflow">[e: {{ errorOverflow.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterBetaHg: '',
      errorBetaHg: 0,
      enterBetaGlass: '',
      errorBetaGlass: 0,
      enterDT: '',
      errorDT: 0,
      enterDVHg: '',
      errorDVHg: 0,
      enterDVGlass: '',
      errorDVGlass: 0,
      enterOverflow: '',
      errorOverflow: 0,
      hgBeta: 18e-5,
      glassAlpha: 0.4e-5
    }
  },
  computed: {
    glassVolume: function () {
      console.clear()
      let max = 250
      let min = 150
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    initialTemperature: function () {
      let max = 35
      let min = 15
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    finalTemperature: function () {
      let max = 120
      let min = 90
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    DT: function () {
      return this.finalTemperature - this.initialTemperature
    },
    glassBeta: function () {
      return 3 * this.glassAlpha
    },
    DVHg: function () {
      return this.hgBeta * this.glassVolume * this.DT
    },
    DVGlass: function () {
      return this.glassBeta * this.glassVolume * this.DT
    },
    overflow: function () {
      return this.DVHg - this.DVGlass
    },
    checkedBetaHg: function () {
      this.errorBetaHg = this.errorRelative('β Hg => ', this.hgBeta, parseFloat(this.enterBetaHg))
      return this.errorBetaHg < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedBetaGlass: function () {
      this.errorBetaGlass = this.errorRelative('β glass => ', this.glassBeta, parseFloat(this.enterBetaGlass))
      return this.errorBetaGlass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDT: function () {
      this.errorDT = this.errorRelative('ΔT => ', this.DT, parseFloat(this.enterDT))
      return this.errorDT < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDVHg: function () {
      this.errorDVHg = this.errorRelative('ΔV Hg => ', this.DVHg, parseFloat(this.enterDVHg))
      return this.errorDVHg < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDVGlass: function () {
      this.errorDVGlass = this.errorRelative('ΔV glass => ', this.DVGlass, parseFloat(this.enterDVGlass))
      return this.errorDVGlass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedOverflow: function () {
      this.errorOverflow = this.errorRelative('Volume overflow => ', this.overflow, parseFloat(this.enterOverflow))
      return this.errorOverflow < 1e-1 ? 'correct' : 'not-correct'
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
