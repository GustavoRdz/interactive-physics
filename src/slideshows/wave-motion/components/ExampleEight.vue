<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem An airplane is flying at Mach {{ M }} at an altitude of {{ h }} m, where the speed of sound is {{ speed }} m/s How long after the plane passes directly overhead will you hear the sonic boom?
    .center
      img(src='../assets/shockProblem.png' height="250px")

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data M
        input.center.data(:class="checkedM" v-model.number='enterM')
        <span class="error" v-if="errorM">[e: {{ errorM.toPrecision(2) }}%]</span>
      p.inline.data h (m)
        input.center.data(:class="checkedH" v-model.number='enterH')
        <span  class="error" v-if="errorH">[e: {{ errorH.toPrecision(2) }}%]</span>
      p.inline.data α (º)
        input.center.data(:class="checkedAlpha" v-model.number='enterAlpha')
        <span  class="error" v-if="errorAlpha">[e: {{ errorAlpha.toPrecision(2) }}%]</span>
      p.inline.data d (m)
        input.center.data(:class="checkedD" v-model.number='enterD')
        <span class="error"  v-if="errorD">[e: {{ errorD.toPrecision(2) }}%]</span>
      p.inline.data t (s) 
        input.center.data(:class="checkedT" v-model.number='enterT')
        <span class="error" v-if="errorT">[e: {{ errorT.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterM: '',
      errorM: 0,
      enterH: '',
      errorH: 0,
      enterAlpha: '',
      errorAlpha: 0,
      enterD: '',
      errorD: 0,
      enterT: '',
      errorT: 0
    }
  },
  computed: {
    M: function () {
      let max = 20
      let min = 11
      return Math.round((Math.floor(Math.random() * (max - min + 1)) + min)) / 10
    },
    h: function () {
      let max = 12000
      let min = 5000
      return Math.round((Math.random() * (max - min + 1) + min))
    },
    speed: function () {
      let max = 350
      let min = 335
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    alpha: function () {
      return Math.asin(1 / this.M)
    },
    d: function () {
      return this.h / Math.tan(this.alpha)
    },
    t: function () {
      return this.d / (this.M * this.speed)
    },
    checkedM: function () {
      let check
      console.log('Mach => ' + this.M + ' : ' + parseFloat(this.enterM))
      this.errorM = 100 * Math.abs(this.M - parseFloat(this.enterM)) / this.M
      console.log('error  ' + this.errorM + ' %')
      check = this.errorM < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedH: function () {
      let check
      console.log('Altura => ' + this.h + ' : ' + parseFloat(this.enterH))
      this.errorH = 100 * Math.abs(this.h - parseFloat(this.enterH)) / this.h
      console.log('error  ' + this.errorH + ' %')
      check = this.errorH < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedAlpha: function () {
      let check
      console.log('Angle => ' + 180 * this.alpha / Math.PI + ' : ' + parseFloat(this.enterAlpha))
      this.errorAlpha = 100 * Math.abs(180 * this.alpha / Math.PI - parseFloat(this.enterAlpha)) / (180 * this.alpha / Math.PI)
      console.log('error  ' + this.errorAlpha + ' %')
      check = this.errorAlpha < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedD: function () {
      let check
      console.log('Distance => ' + this.d + ' : ' + parseFloat(this.enterD))
      this.errorD = 100 * Math.abs(this.d - parseFloat(this.enterD)) / this.d
      console.log('error  ' + this.errorD + ' %')
      check = this.errorD < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedT: function () {
      let check
      console.log('time => ' + this.t + ' : ' + parseFloat(this.enterT))
      this.errorT = 100 * Math.abs(this.t - parseFloat(this.enterT)) / this.t
      console.log('error  ' + this.errorT + ' %')
      check = this.errorT < 1e-2 ? 'correct' : 'not-correct'
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
  font-size: 12px;
}
</style>
