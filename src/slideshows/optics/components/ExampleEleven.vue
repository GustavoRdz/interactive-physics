<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 0px 0px 0px 0px;").problem Unpolarized light passes through two ideal Polaroid sheets. The axis of the first is vertical, and the axis of the second is at {{ angle }}º to the vertical. What fraction of the incident light is transmitted?
    p(v-if = 'language' style="margin: 0px 0px 0px 0px;").problem La luz no polarizada pasa a través de dos láminas Polaroid ideales. El eje del primero es vertical, y el eje del segundo forma {{ angle }}º con la vertical. ¿Qué fracción de la luz incidente se transmite?
    .center
      p(v-if = '!language' style="margin: 30px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 30px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
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
  props: {
    language: Boolean
  },
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
      console.clear()
      let max = 80
      let min = 10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    fraction: function () {
      return Math.pow(Math.cos(this.angle * Math.PI / 180), 2)
    },
    checkedAngle: function () {
      this.errorAngle = this.errorRelative('θ => ', this.angle, parseFloat(this.enterAngle))
      return this.errorAngle < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFraction: function () {
      this.errorFraction = this.errorRelative('fraction => ', this.fraction * 100, parseFloat(this.enterFraction))
      return this.errorFraction < 1e-1 ? 'correct' : 'not-correct'
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
