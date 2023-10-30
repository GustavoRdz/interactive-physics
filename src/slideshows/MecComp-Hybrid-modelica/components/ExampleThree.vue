<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A {{ glassVolume }}- cm<sup>3</sup> glass filled to the brim with mercury at {{ initialTemperature }}&#x00B0;C. How much mercury overflows when the temperature of the system is raised to {{ finalTemperature }}&#x00B0;C? The coefficient of linear expansion os the glass is 0.4 x 10 <sup>-5</sup> K<sup>-1</sup>
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data <em>&#x03B2;</em><sub>Hg</sub> (K<sup>-1</sup>)
        input.center.data(:class="checkedBetaHg" v-model.number='userBetaHg')
      p.inline.data <em>&#x03B2;</em><sub>Glass</sub> (K<sup>-1</sup>)
        input.center.data(:class="checkedUserBetaGlass" v-model.number='userBetaGlass')
      p.inline.data &#x394;T (&#x00B0;C)
        input.center.data(:class="checkedUserDT" v-model.number='userDT')
      p.inline.data &#x394;V<sub>Hg</sub> (cm<sup>3</sup>)
        input.center.data(:class="checkedUserDVHg" v-model.number='userDVHg')
      p.inline.data  &#x394;V<sub>Glass</sub> (cm<sup>3</sup>)
        input.center.data(:class="checkedUserDVGlass" v-model.number='userDVGlass')
      p.inline.data  &#x394;V<sub>overflow</sub> (cm<sup>3</sup>)
        input.center.data(:class="checkedUserOverflow" v-model.number='userOverflow')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      userBetaHg: '',
      userBetaGlass: '',
      userDT: '',
      userDVHg: '',
      userDVGlass: '',
      userOverflow: '',
      hgBeta: 18e-5,
      glassAlpha: 0.4e-5
    }
  },
  computed: {
    glassVolume: function () {
      let max = 250
      let min = 150
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    initialTemperature: function () {
      let max = 35
      let min = 15
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    finalTemperature: function () {
      let max = 120
      let min = 90
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    DT: function () {
      return this.finalTemperature - this.initialTemperature
    },
    glassBeta: function () {
      return 3 * this.glassAlpha
    },
    DVHg: function () {
      return Math.round(1000 * this.hgBeta * this.glassVolume * this.DT) / 1000
    },
    DVGlass: function () {
      return Math.round(1000 * this.glassBeta * this.glassVolume * this.DT) / 1000
    },
    overflow: function () {
      return Math.round(1000 * (this.DVHg - this.DVGlass)) / 1000
    },
    checkedUserT1Celsius: function () {
      let check
      console.log(this.T1Celsius + ' : ' + parseFloat(this.userT1Celsius))
      check = parseFloat(this.T1Celsius) === parseFloat(this.userT1Celsius) ? 'correct' : 'not-correct'
      return check
    },
    checkedBetaHg: function () {
      let check
      console.log(this.hgBeta + ' : ' + parseFloat(this.userBetaHg))
      check = parseFloat(this.hgBeta) === parseFloat(this.userBetaHg) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserBetaGlass: function () {
      let check
      console.log(this.glassBeta + ' : ' + parseFloat(this.userBetaGlass))
      check = parseFloat(this.glassBeta) === parseFloat(this.userBetaGlass) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserDT: function () {
      let check
      console.log(this.DT + ' : ' + parseFloat(this.userDT))
      check = parseFloat(this.DT) === parseFloat(this.userDT) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserDVHg: function () {
      let check
      console.log(this.DVHg + ' : ' + parseFloat(this.userDVHg))
      check = parseFloat(this.DVHg) === parseFloat(this.userDVHg) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserDVGlass: function () {
      let check
      console.log(this.DVGlass + ' : ' + parseFloat(this.userDVGlass))
      check = parseFloat(this.DVGlass) === parseFloat(this.userDVGlass) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserOverflow: function () {
      let check
      console.log(this.overflow + ' : ' + parseFloat(this.userOverflow))
      check = parseFloat(this.overflow) === parseFloat(this.userOverflow) ? 'correct' : 'not-correct'
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
