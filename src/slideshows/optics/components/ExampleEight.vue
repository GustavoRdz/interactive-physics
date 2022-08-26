<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 0px 0px 0px 0px;").problem Two slits spaced {{ d }} &mu;m apart are placed {{ l }} cm from a screen and illuminated by coherent light with a wavelength of {{ lambda }} nm. The intensity at the center of the central maximum is <span>I<sub>0</sub></span><br> <br>(a) What is the distance on the screen from the center of the central maximum to the first minimum? <br><br>(b) What is the distance on the screen from the center of the central maximum to the point where the intensity has fallen to {{ factor }}% of I<sub>0</sub>?
    p(v-if = 'language' style="margin: 0px 0px 0px 0px;").problem Dos rendijas separadas {{ d }} &mu;m se colocan a {{ l }} cm de una pantalla y se iluminan con luz coherente con una longitud de onda de {{ lambda }} nm. La intensidad en el centro del máximo central es I<sub>0</sub> <br><br>(a) ¿Cuál es la distancia en la pantalla desde el centro del máximo central hasta el primer mínimo? <br><br>(b) ¿Cuál es la distancia en la pantalla desde el centro del máximo central hasta el punto donde la intensidad ha caído al {{ factor }}% de <span>I<sub>0</sub></span>?
    .center
      p(v-if = '!language' style="margin: 30px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 30px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data d (m)
        input.center.data(:class="checkedD" v-model.number='enterD')
        <span class="error" v-if="errorD">[e: {{ errorD.toPrecision(3) }}%]</span>
      p.inline.data L (m) 
        input.center.data(:class="checkedL" v-model.number='enterL')
        <span class="error" v-if="errorL">[e: {{ errorL.toPrecision(3) }}%]</span>
      p.inline.data &lambda; (m) 
        input.center.data(:class="checkedLambda" v-model.number='enterLambda')
        <span class="error" v-if="errorLambda">[e: {{ errorLambda.toPrecision(3) }}%]</span>
      p.inline.data a) y (m) 
        input.center.data(:class="checkedYa" v-model.number='enterYa')
        <span class="error" v-if="errorA">[e: {{ errorA.toPrecision(3) }}%]</span>
      p.inline.data b) y (m)
        input.center.data(:class="checkedYb" v-model.number='enterYb')
        <span class="error" v-if="errorB">[e: {{ errorB.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterD: '',
      errorD: 0,
      enterL: '',
      errorL: 0,
      enterLambda: '',
      errorLambda: 0,
      enterYa: '',
      errorA: 0,
      enterYb: '',
      errorB: 0

    }
  },
  computed: {
    d: function () {
      console.clear()
      let max = 300
      let min = 100
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    l: function () {
      let max = 150
      let min = 50
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    lambda: function () {
      let max = 700
      let min = 400
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    factor: function () {
      let max = 85
      let min = 15
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    ya: function () {
      return this.l * 1e-2 * 0.5 * this.lambda * 1e-9 / (this.d * 1e-6)
    },
    yb: function () {
      return this.lambda * 1e-9 * this.l * 1e-2 * Math.acos(Math.sqrt(this.factor / 100)) / (Math.PI * this.d * 1e-6)
    },
    checkedD: function () {
      this.errorD = this.errorRelative('d => ', this.d * 1e-6, parseFloat(this.enterD))
      return this.errorD < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedL: function () {
      this.errorL = this.errorRelative('L => ', this.l * 1e-2, parseFloat(this.enterL))
      return this.errorL < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedLambda: function () {
      this.errorLambda = this.errorRelative('λ => ', this.lambda * 1e-9, parseFloat(this.enterLambda))
      return this.errorLambda < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedYa: function () {
      this.errorYa = this.errorRelative('a) Y => ', this.ya, parseFloat(this.enterYa))
      return this.errorYa < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedYb: function () {
      this.errorYb = this.errorRelative('b) Y => ', this.yb, parseFloat(this.enterYb))
      return this.errorYb < 1e-1 ? 'correct' : 'not-correct'
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
