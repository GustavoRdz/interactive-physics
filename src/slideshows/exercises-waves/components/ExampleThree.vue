<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Un jet pasa volando a Mach {{ mach }} y altitud constante de {{ altitud }} m. a) ¿Qué ángulo a tiene el cono de la onda de choque? b) ¿Cuánto tiempo después de pasar el avión directamente arriba oímos el estampido sónico? Desprecie la variación de la rapidez del sonido con la altitud.

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Mach
        input.center.data(:class="checkedMach" v-model.number='enterMach')
      p.inline.data Altitud (m)
        input.center.data(:class="checkedAltitud" v-model.number='enterAltitud')
      p.inline.data Angulo (º) <br> <span v-if="errorA">[e: {{ errorA.toPrecision(3) }}%]</span>
        input.center.data(:class="checkedAngulo" v-model.number='enterAngulo')
      p.inline.data Tiempo (s) <br><span v-if="errorT">[e: {{ errorT.toPrecision(3) }}%]</span>
        input.center.data(:class="checkedTiempo" v-model.number='enterTiempo')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterMach: '',
      enterAltitud: '',
      enterAngulo: '',
      enterTiempo: '',
      errorA: '',
      errorT: '',
      speed: 340
    }
  },
  computed: {
    mach: function () {
      let max = 30
      let min = 15
      return Math.round(10 * Math.floor(Math.random() * (max - min + 1) + min)) / 100
    },
    altitud: function () {
      let max = 5000
      let min = 1000
      return Math.round(Math.floor(Math.random() * (max - min + 1) + min))
    },
    angulo: function () {
      return Math.round(100 * Math.asin(1 / this.mach)) / 100
    },
    distancia: function () {
      return Math.round(100 * this.altitud / Math.tan(this.angulo)) / 100
    },
    tiempo: function () {
      return Math.round(100 * this.distancia / this.speed) / 100
    },
    checkedMach: function () {
      let check
      console.log('Mach => ' + this.mach + ' : ' + parseFloat(this.enterMach))
      console.log('error  ' + 100 * Math.abs(this.mach - parseFloat(this.enterMach)) / this.mach + ' %')
      check = this.mach === parseFloat(this.enterMach) ? 'correct' : 'not-correct'
      return check
    },
    checkedAltitud: function () {
      let check
      console.log('Altitud => ' + this.altitud + ' : ' + parseFloat(this.enterAltitud))
      console.log('error  ' + 100 * Math.abs(this.altitud - parseFloat(this.enterAltitud)) / this.altitud + ' %')
      check = this.altitud === parseFloat(this.enterAltitud) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngulo: function () {
      let check
      console.log('Angulo => ' + 1 * (this.angulo * 180 / Math.PI) + ' : ' + parseFloat(this.enterAngulo))
      console.log('error  ' + 100 * Math.abs(this.angulo * 180 / Math.PI - parseFloat(this.enterTiempo)) / (this.angulo * 180 / Math.PI) + ' %')
      this.errorA = 100 * Math.abs(this.angulo * 180 / Math.PI - parseFloat(this.enterAngulo)) / (this.angulo * 180 / Math.PI)
      check = this.errorA < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedTiempo: function () {
      let check
      console.log('Tiempo => ' + this.tiempo + ' : ' + parseFloat(this.enterTiempo))
      console.log('error  ' + 100 * Math.abs(this.tiempo - parseFloat(this.enterTiempo)) / this.tiempo + ' %')
      this.errorT = 100 * Math.abs(this.tiempo - parseFloat(this.enterTiempo)) / this.tiempo
      check = this.errorT < 1e0 ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
    message: function (name) {
      return
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
    // FIGURE AND CAPTIONS
    .figure {
      p {
        font-size: 0.7em;
        margin-top: 2em;
        margin-bottom: 0;
        color: #555;
      }
      width: 80%;
      margin-left: 10%;
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
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 25px;
  color: blue;
  width: 100%;
}

.solution {
  margin: 5px 5px 5px 5px;
  font-size: 20px;
  color: red;
}

.not-correct {
  background: #fa4408;
}
.correct {
  background: #80c080;
}
</style>
