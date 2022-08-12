<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem A rod of length <span style="font-family: times; font-style: italic;">l</span>, has a uniform positive charge per unit length <span style="font-family: times; font-style: italic;">&lambda;</span> and a total charge <span style="font-family: times; font-style: italic;">Q</span>. Calculate the electric field at a point <span style="font-family: times; font-style: italic;">P</span> that is located along the long axis of the rod and a distance <span style="font-family: times; font-style: italic;">a</span> from one end
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Una varilla de longitud <span style="font-family: times; font-style: italic;">l</span>, tiene una carga positiva uniforme por unidad de longitud <span style="font-family: times; font-style: italic;">&lambda;</span> y una carga total <span style="font-family: times; font-style: italic;">Q</span>. Calcular el campo eléctrico en un punto P que se encuentra a lo largo del eje longitudinal de la varilla y a una distancia <span style="font-family: times; font-style: italic;">a</span> de un extremo
    .center
        img(src='../assets/fig23-15.png' height="200px"  style="margin: 0px 0 0 0px;")

    p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
    p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Period (s)
    //-     input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
    //-     <span class="error" v-if="errorPeriod">[e: {{ errorPeriod.toPrecision(3) }}%]</span>
    //-   p.inline.data Amplitude (m)
    //-     input.center.data(:class="checkedAmplitude" v-model.number='enterAmplitude')
    //-     <span class="error" v-if="errorAmplitude">[e: {{ errorAmplitude.toPrecision(3) }}%]</span>
    //-   p.inline.data Angular frequency (rad/s)
    //-     input.center.data(:class="checkedAngular" v-model.number='enterAngular')
    //-     <span class="error" v-if="errorAngular">[e: {{ errorAngular.toPrecision(3) }}%]</span>
    //-   p.inline.data (a) time (s)
    //-     input.center.data(:class="checkedHalf" v-model.number='enterHalf')
    //-     <span class="error" v-if="errorHalf">[e: {{ errorHalf.toPrecision(3) }}%]</span>
    //-   p.inline.data (b) time (s)
    //-     input.center.data(:class="checkedSecondHalf" v-model='enterSecondHalf')
    //-     <span class="error" v-if="errorSecondHalf">[e: {{ errorSecondHalf.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterPeriod: '',
      errorPeriod: 0,
      enterAmplitude: '',
      errorAmplitude: 0,
      enterAngular: '',
      errorAngular: 0,
      enterHalf: '',
      errorHalf: 0,
      enterSecondHalf: '',
      errorSecondHalf: 0
    }
  },
  computed: {
    period: function () {
      console.clear()
      let max = 40
      let min = 20
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    amplitude: function () {
      let max = 40
      let min = 20
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    angular: function () {
      return 2 * Math.PI / this.period
    },
    half: function () {
      return this.period / 6
    },
    secondHalf: function () {
      return (this.period / 4) - this.half
    },
    checkedPeriod: function () {
      this.errorPeriod = this.errorRelative('Period => ', this.period, parseFloat(this.enterPeriod))
      return this.errorPeriod < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAmplitude: function () {
      this.errorAmplitude = this.errorRelative('Amplitude => ', this.amplitude / 100, parseFloat(this.enterAmplitude))
      return this.errorAmplitude < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAngular: function () {
      this.errorAngular = this.errorRelative('Omega => ', this.angular, parseFloat(this.enterAngular))
      return this.errorAngular < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedHalf: function () {
      this.errorHalf = this.errorRelative('a) time  => ', this.half, parseFloat(this.enterHalf))
      return this.errorHalf < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSecondHalf: function () {
      this.errorSecondHalf = this.errorRelative('b) time => ', this.secondHalf, parseFloat(this.enterSecondHalf))
      return this.errorSecondHalf < 1e-1 ? 'correct' : 'not-correct'
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
