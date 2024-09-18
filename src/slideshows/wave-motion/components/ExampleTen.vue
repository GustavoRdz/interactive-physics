<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Un avión está volando a Mach {{ M }} a una altitud de {{ h }} m, donde la velocidad del sonido es {{ speed }} m/s. ¿Cuánto tiempo después de que el avión pase directamente por encima oirás el estampido sónico?
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
      console.clear()
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
      this.errorM = this.errorRelative('Mach => ', this.M, parseFloat(this.enterM))
      return this.errorM < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedH: function () {
      this.errorH = this.errorRelative('High => ', this.h, parseFloat(this.enterH))
      return this.errorH < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAlpha: function () {
      this.errorAlpha = this.errorRelative('Angle => ', 180 * this.alpha / Math.PI, parseFloat(this.enterAlpha))
      return this.errorAlpha < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedD: function () {
      this.errorD = this.errorRelative('Distance => ', this.d, parseFloat(this.enterD))
      return this.errorD < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedT: function () {
      this.errorT = this.errorRelative('time => ', this.t, parseFloat(this.enterT))
      return this.errorT < 1e-1 ? 'correct' : 'not-correct'
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
