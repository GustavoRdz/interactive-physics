<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 50px 0px 0px 0px;").problem A viewing screen is separated from a double slit by {{ L }} m. The distance between the two slits is {{ d }} &mu;m. Monochromatic light is directed toward the double slit and forms an interference pattern on the screen. The {{ order }} {{ kindLegend }} fringe is {{ y }} cm from the center line on the screen. <br><br>a) Determine the wavelength of the light <br>b) Calculate the distance between adjacent bright fringes.
    p(v-if = 'language' style="margin: 50px 0px 0px 0px;").problem Una pantalla de visualización está separada de una doble rendija por {{ L }} m. La distancia entre las dos rendijas es de {{ d }} &mu;m. La luz monocromática se dirige hacia la doble rendija y forma un patrón de interferencia en la pantalla. La franja {{ kindLeyenda }} de {{ orden }} orden está a {{ y }} cm de la línea central de la pantalla. <br><br>a) Determinar la longitud de onda de la luz <br>b) Calcular la distancia entre franjas brillantes adyacentes.
    .center
      p(v-if = '!language' style="margin: 30px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 30px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data L (m)
        input.center.data(:class="checkedL" v-model.number='enterL')
        <span class="error" v-if="errorL">[e: {{ errorL.toPrecision(2) }}%]</span>
      p.inline.data d (m)
        input.center.data(:class="checkedD" v-model.number='enterD')
        <span class="error" v-if="errorD">[e: {{ errorD.toPrecision(2) }}%]</span>
      p.inline.data Order: m
        input.center.data(:class="checkedM" v-model.number='enterM')
        <span class="error" v-if="errorM">[e: {{ errorM.toPrecision(2) }}%]</span>
      p.inline.data {{ order  }} fringe position (m)
        input.center.data(:class="checkedY" v-model.number='enterY')
        <span class="error" v-if="errorY">[e: {{ errorY.toPrecision(2) }}%]</span>
      p.inline.data &lambda; (m)
        input.center.data(:class="checkedLambda" v-model.number='enterLambda')
        <span class="error" v-if="errorLambda">[e: {{ errorLambda.toPrecision(2) }}%]</span>
      p.inline.data adjacent fringes distance (m)
        input.center.data(:class="checkedDy" v-model.number='enterDy')
        <span class="error" v-if="errorDy">[e: {{ errorDy.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterL: '',
      errorL: 0,
      enterD: '',
      errorD: 0,
      enterM: '',
      errorM: 0,
      enterY: '',
      errorY: 0,
      enterLambda: '',
      errorLambda: 0,
      enterDy: '',
      errorDy: 0,
      orderList: ['first', 'second', 'third', 'fourth', 'fifth'],
      kindList: ['bright', 'dark'],
      orderLista: ['primer', 'segundo', 'tercero', 'cuarto', 'quinto'],
      kindLista: ['brillante', 'oscura']
    }
  },
  computed: {
    L: function () {
      console.clear()
      let max = 20
      let min = 10
      return Math.round(10 * Math.random() * (max - min + 1) + min) / 100
    },
    d: function () {
      let max = 100
      let min = 10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    y: function () {
      let max = 20
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    m: function () {
      let max = 5
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    order: function () {
      return this.orderList[this.m - 1]
    },
    orden: function () {
      return this.orderLista[this.m - 1]
    },
    kind: function () {
      return Math.floor(2 * Math.random())
    },
    kindLegend: function () {
      return this.kindList[this.kind]
    },
    kindLeyenda: function () {
      return this.kindLista[this.kind]
    },
    lambda: function () {
      // console.log(parseFloat((this.y * this.d / ((this.m + this.kind * 0.5) * this.L)).toPrecision(3)))
      // console.log(parseFloat((this.y * this.d / ((this.m + 0.5) * this.L)).toPrecision(3)))
      // console.log(parseFloat((this.y * this.d / ((this.m) * this.L)).toPrecision(3)))
      return 1e-2 * this.y * 1e-6 * this.d / ((this.m + this.kind * 0.5) * this.L)
    },
    dy: function () {
      return this.L * this.lambda / (this.d * 1e-6)
    },
    checkedL: function () {
      this.errorL = this.errorRelative('L => ', this.L, parseFloat(this.enterL))
      return this.errorL < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedD: function () {
      this.errorD = this.errorRelative('d => ', this.d * 1e-6, parseFloat(this.enterD))
      return this.errorD < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedM: function () {
      this.errorM = this.errorRelative('m => ', this.m, parseFloat(this.enterM))
      return this.errorM < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedY: function () {
      this.errorY = this.errorRelative('y => ', this.y * 1e-2, parseFloat(this.enterY))
      return this.errorY < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedLambda: function () {
      this.errorLambda = this.errorRelative('λ => ', this.lambda, parseFloat(this.enterLambda))
      return this.errorLambda < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDy: function () {
      this.errorDy = this.errorRelative('Dy => ', this.dy, parseFloat(this.enterDy))
      return this.errorDy < 1e-1 ? 'correct' : 'not-correct'
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
