<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem The two mirrors meet at a right angle. The beam of light in the vertical plane indicated by the dashed lines strikes mirror at an angle {{ angle }}º and d = {{ d }}cm. (a) Determine the distance the reflected light beam travels before striking mirror 2. (b) In what direction does the light beam travel after being reflected from mirror 2?
    .center
      img(src='../assets/example1.png' width="200px")

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Incident angle 1 (degrees)
        input.center.data(:class="checkedAngle1" v-model='enterAngle1')
        <span class="error" v-if="errorAngle1">[e: {{ errorAngle1.toPrecision(2) }}%]</span>
      p.inline.data Incident angle 2 (degrees)
        input.center.data(:class="checkedAngle2" v-model='enterAngle2')
        <span class="error" v-if="errorAngle2">[e: {{ errorAngle2.toPrecision(2) }}%]</span>
      p.inline.data Distance(in m)
        input.center.data(:class="checkedDistance" v-model.number='enterDistance')
        <span class="error" v-if="errorDistance">[e: {{ errorDistance.toPrecision(2) }}%]</span>
      p.inline.data Out direction vs incident ray (º)
        input.center.data(:class="checkedOutAngle" v-model.number='enterOutAngle')
        <span class="error" v-if="errorOutAngle">[e: {{ errorOutAngle.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterAngle1: '',
      errorAngle1: 0,
      enterAngle2: '',
      errorAngle2: 0,
      enterDistance: '',
      errorDistance: 0,
      enterOutAngle: '',
      errorOutAngle: 0
    }
  },
  computed: {
    angle: function () {
      console.clear()
      let max = 70
      let min = 20
      return (Math.round(10 * Math.random() * (max - min + 1) + min) / 10)
    },
    d: function () {
      let max = 50
      let min = 10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    angle2: function () {
      return 90 - this.angle
    },
    distance: function () {
      return 0.01 * this.d / Math.cos(this.angle2 * Math.PI / 180)
    },
    angleOut: function () {
      return 180
    },
    checkedAngle1: function () {
      this.errorAngle1 = this.errorRelative('angle 1 => ', this.angle, parseFloat(this.enterAngle1))
      return this.errorAngle1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAngle2: function () {
      this.errorAngle2 = this.errorRelative('Angle 2 => ', this.angle2, parseFloat(this.enterAngle2))
      return this.errorAngle2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDistance: function () {
      this.errorDistance = this.errorRelative('distance => ', this.distance, parseFloat(this.enterDistance))
      return this.errorDistance < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedOutAngle: function () {
      this.errorOutAngle = this.errorRelative('Out Angle => ', this.angleOut, parseFloat(this.enterOutAngle))
      return this.errorOutAngle < 1e-1 ? 'correct' : 'not-correct'
    }
  },
  methods: {
    message: function (name) {
      return
    },
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
