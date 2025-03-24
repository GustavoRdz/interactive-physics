<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem 
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Calcular la razón dada por r=<span style="text-decoration: overline;">P2P</span> / <span style="text-decoration: overline;">PP1</span> en la que el punto P({{P}}) divide al segmento formado por los puntos P1({{P1}}) y P2({{P2}})

    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data P (?)
        input.center.data(:class="checkedP" v-model.number='enterP')
        <span class="error" v-if="errorP">[e: {{ errorP.toPrecision(3) }}%]</span>
      p.inline.data P1 (?)
        input.center.data(:class="checkedP1" v-model.number='enterP1')
        <span class="error" v-if="errorP1">[e: {{ errorP1.toPrecision(3) }}%]</span>
      p.inline.data P2 (?)
        input.center.data(:class="checkedP2" v-model.number='enterP2')
        <span class="error" v-if="errorP2">[e: {{ errorP2.toPrecision(3) }}%]</span>
      p.inline.data r (?)
        input.center.data(:class="checkedR" v-model.number='enterR')
        <span class="error" v-if="errorR">[e: {{ errorR.toPrecision(3) }}%]</span>
      
</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterP: '',
      errorP: 0,
      enterP1: '',
      errorP1: 0,
      enterP2: '',
      errorP2: 0,
      enterR: '',
      errorR: 0
    }
  },
  computed: {
    P: function () {
      console.clear()
      let max = 7
      let min = -7
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    P1: function () {
      let max = 15
      let min = 7
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    P2: function () {
      let max = -7
      let min = -15
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    R: function () {
      return (this.P2 - this.P) / (this.P - this.P1)
    },
    checkedP: function () {
      this.errorP = this.errorRelative('P => ', this.P, parseFloat(this.enterP))
      return this.errorP < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedP1: function () {
      this.errorP1 = this.errorRelative('P1 => ', this.P1, parseFloat(this.enterP1))
      return this.errorP1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedP2: function () {
      this.errorP2 = this.errorRelative('P2 => ', this.P2, parseFloat(this.enterP2))
      return this.errorP2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedR: function () {
      this.errorR = this.errorRelative('r => ', this.R, parseFloat(this.enterR))
      return this.errorR < 1e-1 ? 'correct' : 'not-correct'
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
