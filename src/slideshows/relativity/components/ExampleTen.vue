<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem What speed must a proton have to increase {{ factor.toFixed(2) }} times its mass in rest?
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem ¿Qué velocidad debe tener un protón para aumentar {{ factor.toFixed(2) }} veces su masa en reposo?
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data v (in c)
        input.center.data(:class="checkedV" v-model.number='enterV')
        <span class="error" v-if="errorV">[e: {{ errorV.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterV: '',
      errorV: 0
    }
  },
  computed: {
    factor: function () {
      console.clear()
      let max = 1000
      let min = 100
      return Math.round(Math.random() * (max - min + 1) + min) / 100
    },
    speed: function () {
      return Math.sqrt(1 - 1 / Math.pow(this.factor, 2))
    },
    checkedV: function () {
      this.errorV = this.errorRelative('speed => ', this.speed, parseFloat(this.enterV))
      return this.errorV < 1e-1 ? 'correct' : 'not-correct'
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
