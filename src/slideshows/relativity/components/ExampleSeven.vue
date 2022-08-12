<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem An observer passes a certain place with a velocity, along the horizontal axis, of {{ speed.toFixed(3) }}c, and note that the boom of a crane is {{ l1.toFixed(3) }}m long and forms an angle of {{ T1.toFixed(3) }}° with respect to to the earth. According to the crane operator: a) How long is the boom of the crane? b) at what angle it raised?
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Un observador pasa por cierto lugar con una velocidad de {{ speed.toFixed(3) }}c a lo largo del eje horizontal, y nota que el brazo de una grúa tiene {{ l1.toFixed(3) }}m de largo y forma un ángulo de {{ T1.toFixed(3) }}° con respecto a la tierra. Según el operador de la grúa: a) ¿Qué longitud tiene la pluma de la grúa? b) ¿en qué ángulo se elevó?
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data L<sub>1</sub> (m)
        input.center.data(:class="checkedL1" v-model.number='enterL1')
        <span class="error" v-if="errorL1">[e: {{ errorL1.toPrecision(3) }}%]</span>
      p.inline.data &#x03B8;<sub>1</sub> (degrees)
        input.center.data(:class="checkedT1" v-model.number='enterT1')
        <span class="error" v-if="errorT1">[e: {{ errorT1.toPrecision(3) }}%]</span>
      p.inline.data L<sub>1x</sub> (m)
        input.center.data(:class="checkedL1x" v-model.number='enterL1x')
        <span class="error" v-if="errorL1x">[e: {{ errorL1x.toPrecision(3) }}%]</span>
      p.inline.data L<sub>1y</sub> (m)
        input.center.data(:class="checkedL1y" v-model.number='enterL1y')
        <span class="error" v-if="errorL1y">[e: {{ errorL1y.toPrecision(3) }}%]</span>
      <br>
      p.inline.data v (in c)
        input.center.data(:class="checkedV" v-model.number='enterV')
        <span class="error" v-if="errorV">[e: {{ errorV.toPrecision(3) }}%]</span>
      p.inline.data L<sub>2x</sub> (m)
        input.center.data(:class="checkedL2x" v-model.number='enterL2x')
        <span class="error" v-if="errorL2x">[e: {{ errorL2x.toPrecision(3) }}%]</span>
      p.inline.data L<sub>2y</sub> (m)
        input.center.data(:class="checkedL2y" v-model.number='enterL2y')
        <span class="error" v-if="errorL2y">[e: {{ errorL2y.toPrecision(3) }}%]</span>
      p.inline.data L<sub>2</sub> (m)
        input.center.data(:class="checkedL2" v-model.number='enterL2')
        <span class="error" v-if="errorL2">[e: {{ errorL2.toPrecision(3) }}%]</span>
      p.inline.data &#x03B8;<sub>2</sub> (degrees)
        input.center.data(:class="checkedT2" v-model.number='enterT2')
        <span class="error" v-if="errorT2">[e: {{ errorT2.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterL1: '',
      errorL1: 0,
      enterL1x: '',
      errorL1x: 0,
      enterL1y: '',
      errorL1y: 0,
      enterT1: '',
      errorT1: 0,
      enterL2: '',
      errorL2: 0,
      enterL2x: '',
      errorL2x: 0,
      enterL2y: '',
      errorL2y: 0,
      enterT2: '',
      errorT2: 0,
      enterV: '',
      errorV: 0,
      direction: '',
      side: ''
    }
  },
  computed: {
    l1: function () {
      console.clear()
      let max = 20
      let min = 10
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 1
    },
    speed: function () {
      let max = 80
      let min = 50
      this.direction = (Math.round(Math.random()) - 0.5) * 2
      this.side = this.direction === 1 ? 'rigth' : 'left'
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100)
    },
    T1: function () {
      let max = 80
      let min = 30
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min)
    },
    l1x: function () {
      return Math.round(1000 * (this.l1 * Math.cos(this.T1 * Math.PI / 180))) / 1000
    },
    l1y: function () {
      return Math.round(1000 * this.l1 * Math.sin(this.T1 * Math.PI / 180)) / 1000
    },
    l2x: function () {
      return Math.round(1000 * (this.l1x / Math.sqrt(1 - this.speed * this.speed))) / 1000
    },
    l2y: function () {
      return this.l1y
    },
    l2: function () {
      return Math.round(1000 * Math.sqrt(this.l2x * this.l2x + this.l2y * this.l2y)) / 1000
    },
    T2: function () {
      return Math.round(1000 * 180 * Math.atan2(this.l2y, this.l2x) / Math.PI) / 1000
    },
    checkedL1: function () {
      this.errorL1 = this.errorRelative('length 1 => ', this.l1, parseFloat(this.enterL1))
      return this.errorL1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedT1: function () {
      this.errorT1 = this.errorRelative('theta 1 => ', this.T1, parseFloat(this.enterT1))
      return this.errorT1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedL1x: function () {
      this.errorL1x = this.errorRelative('length 1x => ', this.l1x, parseFloat(this.enterL1x))
      return this.errorL1x < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedL1y: function () {
      this.errorL1y = this.errorRelative('length 1y => ', this.l1y, parseFloat(this.enterL1y))
      return this.errorL1y < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedV: function () {
      this.errorV = this.errorRelative('speed => ', this.speed, parseFloat(this.enterV))
      return this.errorV < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedL2x: function () {
      this.errorL2x = this.errorRelative('length 2x => ', this.l2x, parseFloat(this.enterL2x))
      return this.errorL2x < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedL2y: function () {
      this.errorL2y = this.errorRelative('length 2y => ', this.l2y, parseFloat(this.enterL2y))
      return this.errorL2y < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedL2: function () {
      this.errorL2 = this.errorRelative('length 2 => ', this.l2, parseFloat(this.enterL2))
      return this.errorL2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedT2: function () {
      this.errorT2 = this.errorRelative('Theta 2 => ', this.T2, parseFloat(this.enterT2))
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
      width: 100%;
      margin-left: 0%;
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
