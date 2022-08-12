<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem From a beach, a group of people observe that a sportsman kept skiing during {{ t1.toFixed(3) }}min at a speed of {{ speed.toFixed(3) }}c. How long does the pilot of the boat think he was helping you the skier?
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Desde una playa, un grupo de personas observa que un deportista estuvo esquiando durante {{ t1.toFixed(3) }}min a una velocidad de {{ speed.toFixed(3) }}c. ¿Cuánto tiempo cree el piloto del bote que estuvo ayudándole al esquiador?
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data v (in c)
        input.center.data(:class="checkedV" v-model.number='enterV')
        <span class="error" v-if="errorV">[e: {{ errorV.toPrecision(2) }}%]</span>
      p.inline.data T<sub>1</sub> (min)
        input.center.data(:class="checkedT1" v-model.number='enterT1')
        <span class="error" v-if="errorT1">[e: {{ errorT1.toPrecision(2) }}%]</span>
      p.inline.data T<sub>2</sub> (min)
        input.center.data(:class="checkedT2" v-model.number='enterT2')
        <span class="error" v-if="errorT2">[e: {{ errorT2.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterT1: '',
      errorT1: 0,
      enterT2: '',
      errorT2: 0,
      enterV: '',
      errorV: 0
    }
  },
  computed: {
    t1: function () {
      console.clear()
      let max = 30
      let min = 10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    speed: function () {
      let max = 80
      let min = 50
      return Math.round(Math.random() * (max - min + 1) + min) / 100
    },
    t2: function () {
      return this.t1 * Math.sqrt(1 - this.speed * this.speed)
    },
    checkedT1: function () {
      this.errorT1 = this.errorRelative('time 1 => ', this.t1, parseFloat(this.enterT1))
      return this.errorT1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedV: function () {
      this.errorV = this.errorRelative('speed => ', this.speed, parseFloat(this.enterV))
      return this.errorV < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedT2: function () {
      this.errorT2 = this.errorRelative('time 2 => ', this.t2, parseFloat(this.enterT2))
      return this.errorT2 < 1e-1 ? 'correct' : 'not-correct'
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
