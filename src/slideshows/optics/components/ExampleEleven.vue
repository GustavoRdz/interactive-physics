<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Unpolarized light passes through two ideal Polaroid sheets. The axis of the first is vertical, and the axis of the second is at {{ angle }}º to the vertical. What fraction of the incident light is transmitted?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Angle (in c) 
        input.center.data(:class="checkedAngle" v-model.number='enterAngle')
        <span class="error" v-if="errorAngle">[e: {{ errorAngle.toPrecision(3) }}%]</span>
      p.inline.data Fraction (%) 
        input.center.data(:class="checkedFraction" v-model.number='enterFraction')
        <span class="error" v-if="errorFraction">[e: {{ errorFraction.toPrecision(3) }}%]</span>
</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterAngle: '',
      errorAngle: 0,
      enterFraction: '',
      errorFraction: 0
    }
  },
  computed: {
    angle: function () {
      let max = 80
      let min = 10
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min)
    },
    fraction: function () {
      return Math.pow(Math.cos(this.angle * Math.PI / 180), 2)
    },
    checkedAngle: function () {
      let check
      console.log('Angle => ' + this.angle + ' : ' + parseFloat(this.enterAngle))
      this.errorAngle = 100 * Math.abs(this.angle - parseFloat(this.enterAngle)) / (this.angle)
      console.log('error  ' + this.errorAngle + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      check = this.errorAngle < 1e-3 ? 'correct' : 'not-correct'
      return check
    },
    checkedFraction: function () {
      let check
      console.log('Fraction => ' + this.fraction * 100 + ' : ' + parseFloat(this.enterFraction))
      this.errorFraction = 100 * Math.abs(this.fraction * 100 - parseFloat(this.enterFraction)) / (this.fraction * 100)
      console.log('error  ' + this.errorFraction + ' %')
      // check = this.t2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
      check = this.errorFraction < 1e-1 ? 'correct' : 'not-correct'
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
  margin: 0;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
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
.error {
  font-size: 14px;
}
</style>
