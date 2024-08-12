<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem 
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem La distancia entre dos puntos es {{ distancia }}. Si la coordenanda de uno de los puntos es ({{ coordenada }}), hallar la coordenada del otro punto.  

    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data i) coordenada
        input.center.data(:class="checkedI" v-model.number='enterI')
        <span class="error" v-if="errorI">[e: {{ errorI.toPrecision(3) }}%]</span>
      p.inline.data ii) coordenada
        input.center.data(:class="checkedII" v-model.number='enterII')
        <span class="error" v-if="errorII">[e: {{ errorII.toPrecision(3) }}%]</span>
      
</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterI: '',
      errorI: 0,
      enterII: '',
      errorII: 0
    }
  },
  computed: {
    distancia: function () {
      console.clear()
      let max = 10
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    coordenada: function () {
      let max = 10
      let min = -10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    di: function () {
      return this.distancia + this.coordenada
    },
    dii: function () {
      return this.coordenada - this.distancia
    },
    checkedI: function () {
      this.errorI = this.errorRelative('I => ', this.di, parseFloat(this.enterI))
      return this.errorI < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedII: function () {
      this.errorII = this.errorRelative('II => ', this.dii, parseFloat(this.enterII))
      return this.errorII < 1e-1 ? 'correct' : 'not-correct'
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
