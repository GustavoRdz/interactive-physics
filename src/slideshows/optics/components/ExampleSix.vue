<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem A {{ h1 }}-cm-tall object is {{ p1 }} cm to the left of a converging lens of focal length {{ f1 }} cm. <br>A second converging lens, this one having a focal length of {{ f2 }} cm, is located {{ distance }} cm to the right of the first lens along the same optic axis. <br>Find the location, height and magnification of the final image.
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Un objeto de {{ h1 }} cm de altura está {{ p1 }} cm a la izquierda de una lente convergente de {{ f1 }} cm de distancia focal. <br>Una segunda lente convergente, esta de {{ f2 }} cm de distancia focal, está situada {{ distance }} cm a la derecha de la primera lente a lo largo del mismo eje óptico. <br>Encuentre la ubicación, la altura y la ampliación de la imagen final.
    .center
      p(v-if = '!language' style="margin: 30px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 30px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data h<sub>1</sub> (cm)
        input.center.data(:class="checkedH1" v-model.number='enterH1')
        <span class="error" v-if="errorH1">[e: {{ errorH1.toPrecision(2) }}%]</span>
      p.inline.data p<sub>1</sub> (cm)
        input.center.data(:class="checkedP1" v-model.number='enterP1')
        <span class="error" v-if="errorP1">[e: {{ errorP1.toPrecision(2) }}%]</span>
      p.inline.data q<sub>1</sub> (cm)
        input.center.data(:class="checkedQ1" v-model.number='enterQ1')
        <span class="error" v-if="errorQ1">[e: {{ errorQ1.toPrecision(2) }}%]</span>
      p.inline.data M<sub>1</sub>
        input.center.data(:class="checkedM1" v-model.number='enterM1')
        <span class="error" v-if="errorM1">[e: {{ errorM1.toPrecision(2) }}%]</span>
      p.inline.data h'<sub>1</sub> (cm)
        input.center.data(:class="checkedH11" v-model.number='enterH11')
        <span class="error" v-if="errorH11">[e: {{ errorH11.toPrecision(2) }}%]</span>
      p.inline.data distance between lenses (cm)
        input.center.data(:class="checkedDistance" v-model.number='enterDistance')
        <span class="error" v-if="errorDistance">[e: {{ errorDistance.toPrecision(2) }}%]</span>
      .center
      p.inline.data h<sub>2</sub> (cm)
        input.center.data(:class="checkedH2" v-model.number='enterH2')
        <span class="error" v-if="errorH2">[e: {{ errorH2.toPrecision(2) }}%]</span>
      p.inline.data p<sub>2</sub> (cm)
        input.center.data(:class="checkedP2" v-model.number='enterP2')
        <span class="error" v-if="errorP2">[e: {{ errorP2.toPrecision(2) }}%]</span>
      p.inline.data q<sub>2</sub> (cm)
        input.center.data(:class="checkedQ2" v-model.number='enterQ2')
        <span class="error" v-if="errorQ2">[e: {{ errorQ2.toPrecision(2) }}%]</span>
      p.inline.data M<sub>2</sub>
        input.center.data(:class="checkedM2" v-model.number='enterM2')
        <span class="error" v-if="errorM2">[e: {{ errorM2.toPrecision(2) }}%]</span>
      p.inline.data h<sub>2</sub> (cm)
        input.center.data(:class="checkedH21" v-model.number='enterH21')
        <span class="error" v-if="errorH21">[e: {{ errorH21.toPrecision(2) }}%]</span>
      p.inline.data M<sub>T</sub>
        input.center.data(:class="checkedMt" v-model.number='enterMt')
        <span class="error" v-if="errorMt">[e: {{ errorMt.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterH1: '',
      errorH1: 0,
      enterH11: '',
      errorH11: 0,
      enterH2: '',
      errroH21: 0,
      enterH21: '',
      errorH21: 0,
      enterP1: '',
      errorP1: 0,
      enterP2: '',
      errorP2: 0,
      enterQ1: '',
      errorQ1: 0,
      enterQ2: '',
      errorQ2: 0,
      enterM1: '',
      errorM1: 0,
      enterM2: '',
      errorM2: 0,
      enterDistance: '',
      errorDistance: 0,
      enterMt: '',
      errorMt: 0
    }
  },
  computed: {
    h1: function () {
      console.clear()
      let max = 30
      let min = 10
      return Math.round(Math.random() * (max - min + 1) + min) / 10
    },
    p1: function () {
      let max = 3 * this.f1
      let min = 3 * this.f1 / 2
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    f1: function () {
      let max = 50
      let min = 30
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    f2: function () {
      let max = 2 * this.f1
      let min = 3 * this.f1 / 2
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    distance: function () {
      let max = 3 * this.f1
      let min = 2 * this.f1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    q1: function () {
      return this.p1 * this.f1 / (this.p1 - this.f1)
    },
    m1: function () {
      return -this.q1 / this.p1
    },
    h11: function () {
      return this.m1 * this.h1
    },
    p2: function () {
      return this.distance - this.q1
    },
    q2: function () {
      return this.p2 * this.f2 / (this.p2 - this.f2)
    },
    m2: function () {
      return -this.q2 / this.p2
    },
    h21: function () {
      return this.m2 * this.h11
    },
    mt: function () {
      return this.m1 * this.m2
    },
    checkedH1: function () {
      this.errorH1 = this.errorRelative('h1 => ', this.h1, parseFloat(this.enterH1))
      return this.errorH1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedP1: function () {
      this.errorP1 = this.errorRelative('p1 => ', this.p1, parseFloat(this.enterP1))
      return this.errorP1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedQ1: function () {
      this.errorQ1 = this.errorRelative('q1 => ', this.q1, parseFloat(this.enterQ1))
      return this.errorQ1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedM1: function () {
      this.errorM1 = this.errorRelative('m1 => ', this.m1, parseFloat(this.enterM1))
      return this.errorM1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedH11: function () {
      this.errorH11 = this.errorRelative('h11 => ', this.h11, parseFloat(this.enterH11))
      return this.errorH11 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDistance: function () {
      this.errorDistance = this.errorRelative('Distance => ', this.distance, parseFloat(this.enterDistance))
      return this.errorDistance < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedH2: function () {
      this.errorH2 = this.errorRelative('h11 => ', this.h11, parseFloat(this.enterH2))
      return this.errorH2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedP2: function () {
      this.errorP2 = this.errorRelative('P2 => ', this.p2, parseFloat(this.enterP2))
      return this.errorP2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedQ2: function () {
      this.errorQ2 = this.errorRelative('q2 => ', this.q2, parseFloat(this.enterQ2))
      return this.errorQ2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedM2: function () {
      this.errorM2 = this.errorRelative('M2 => ', this.m2, parseFloat(this.enterM2))
      return this.errorM2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedH21: function () {
      this.errorH21 = this.errorRelative('H2 => ', this.h21, parseFloat(this.enterH21))
      return this.errorH21 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMt: function () {
      this.errorMt = this.errorRelative('Mt => ', this.mt, parseFloat(this.enterMt))
      return this.errorMt < 1e-1 ? 'correct' : 'not-correct'
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
