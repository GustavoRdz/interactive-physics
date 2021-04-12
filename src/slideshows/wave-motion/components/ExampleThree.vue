<template lang="pug">
  eg-transition(:enter='enter', :leave='leave')
    .eg-slide-content
      p.problem A uniform string has a mass of {{ stringMass }} kg and a length of {{ length }} m. The string passes over a pulley and supports a {{ blockMass }}-kg object. Find the speed of a pulse traveling along this string.
      .center
        img(src='../assets/problem2.png' height="200px")
        p.solution Please do calculations and introduce your results
        p.inline.data String mass (kg)
          input.center.data(:class="checkedStringMass" v-model.number='enterStringMass')
          <span class="error" v-if="errorStringMass">[e: {{ errorStringMass.toPrecision(3) }}%]</span>
        p.inline.data Length (m)
          input.center.data(:class="checkedLength" v-model.number='enterLength')
          <span class="error" v-if="errorLength">[e: {{ errorLength.toPrecision(3) }}%]</span>
        p.inline.data Block mass (Kg)
          input.center.data(:class="checkedBlockMass" v-model.number='enterBlockMass')
          <span class="error" v-if="errorBlockMass">[e: {{ errorBlockMass.toPrecision(3) }}%]</span>
        p.inline.data linear density (kg/m)
          input.center.data(:class="checkedDensity" v-model='enterDensity')
          <span class="error" v-if="errorDensity">[e: {{ errorDensity.toPrecision(3) }}%]</span>
        p.inline.data String tension (N/m)
          input.center.data(:class="checkedTension" v-model='enterTension')
          <span class="error" v-if="errorTension">[e: {{ errorTension.toPrecision(3) }}%]</span>
        p.inline.data Speed (m/s)
          input.center.data(:class="checkedSpeed" v-model='enterSpeed')
          <span class="error" v-if="errorSpeed">[e: {{ errorSpeed.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterStringMass: '',
      errorStringMass: 0,
      enterLength: '',
      errorLength: 0,
      enterBlockMass: '',
      errorBlockMass: 0,
      enterDensity: '',
      errorDensity: 0,
      enterTension: '',
      errorTension: 0,
      enterSpeed: '',
      errorSpeed: 0
    }
  },
  computed: {
    stringMass: function () {
      console.clear()
      let max = 5
      let min = 1
      return Math.floor(10 * (Math.random() * (max - min + 1) + min)) / 100
    },
    length: function () {
      let max = 2
      let min = 1
      return Math.floor(100 * (Math.random() * (max - min + 1) + min)) / 100
    },
    blockMass: function () {
      let max = 10
      let min = 2
      return Math.floor(100 * Math.random() * (max - min + 1) + min) / 100
    },
    density: function () {
      return this.stringMass / this.length
    },
    tension: function () {
      return this.blockMass * 9.81
    },
    speed: function () {
      return Math.sqrt(this.tension / this.density)
    },
    checkedStringMass: function () {
      this.errorStringMass = this.errorRelative('m string => ', this.stringMass, parseFloat(this.enterStringMass))
      return this.errorStringMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedLength: function () {
      this.errorLength = this.errorRelative('Length => ', this.length, parseFloat(this.enterLength))
      return this.errorLength < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedBlockMass: function () {
      this.errorBlockMass = this.errorRelative('m block => ', this.blockMass, parseFloat(this.enterBlockMass))
      return this.errorBlockMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDensity: function () {
      this.errorDensity = this.errorRelative('μ => ', this.density, parseFloat(this.enterDensity))
      return this.errorDensity < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTension: function () {
      this.errorTension = this.errorRelative('Tension => ', this.tension, parseFloat(this.enterTension))
      return this.errorTension < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSpeed: function () {
      this.errorSpeed = this.errorRelative('v => ', this.speed, parseFloat(this.enterSpeed))
      return this.errorSpeed < 1e-1 ? 'correct' : 'not-correct'
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
