<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    //- p.problem A diving bell is being designed to withstand the pressure of the sea at a depth of {{ deep }} m.
     p.problem What is the manometric pressure at that depth?
    //- p.problem At that depth, what net force do external water and indoor air exert on a circular window of {{ diameter }} cm in diameter, if the pressure inside the bell is the same as that on the surface of the water?
    p(style="padding: 0px 0px 10px 0px;").problem Se está diseñando una campana de buceo para resistir la presión del mar a una profundidad de {{ deep }} m.
    p(style="padding: 0px 0px 10px 0px;").problem ¿Cuál es la presión manométrica a esa profundidad?
    p.problem A esa profundidad, ¿qué fuerza neta ejercen el agua externa y el aire interior sobre una ventana circular de {{ diameter }} cm de diámetro, si la presión dentro de la campana es la misma que en la superficie del agua?

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Deep (m)
        input.center.data(:class="checkedDeep" v-model.number='enterDeep')
        <span class="error" v-if="errorDeep">[e: {{ errorDeep.toPrecision(2) }}%]</span>
      p.inline.data <span style="font-family: Times New Roman;"><em>&#x03c1;</em></span> (kg/m<sup>3</sup>)
        input.center.data(:class="checkedDensity" v-model.number='enterDensity')
        <span class="error" v-if="errorDensity">[e: {{ errorDensity.toPrecision(2) }}%]</span>
      p.inline.data Gauge Pressure (Pa)
        input.center.data(:class="checkedGauge" v-model.number='enterGauge')
        <span class="error" v-if="errorGauge">[e: {{ errorGauge.toPrecision(2) }}%]</span>
      p.inline.data Outside pressure (Pa)
        input.center.data(:class="checkedOutPressure" v-model.number='enterOutPressure')
        <span class="error" v-if="errorOutPressure">[e: {{ errorOutPressure.toPrecision(2) }}%]</span>
      p.inline.data Inside pressure (Pa)
        input.center.data(:class="checkedInPressure" v-model.number='enterInPressure')
        <span class="error" v-if="errorInPressure">[e: {{ errorInPressure.toPrecision(2) }}%]</span>
      p.inline.data Area (m<sup>2</sup>)
        input.center.data(:class="checkedArea" v-model.number='enterArea')
        <span class="error" v-if="errorArea">[e: {{ errorArea.toPrecision(2) }}%]</span>
      p.inline.data Force (N)
        input.center.data(:class="checkedForce" v-model.number='enterForce')
        <span class="error" v-if="errorForce">[e: {{ errorForce.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterDeep: '',
      errordeep: 0,
      enterDensity: '',
      errorDensity: 0,
      enterGauge: '',
      errorGauge: 0,
      enterOutPressure: '',
      errorOutPressure: 0,
      enterInPressure: '',
      errorInPressure: 0,
      enterArea: '',
      errorArea: 0,
      enterForce: '',
      errorForce: 0,
      g: 9.81,
      density: 1030,
      atm: 101300
    }
  },
  computed: {
    deep: function () {
      console.clear()
      let max = 250
      let min = 150
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    diameter: function () {
      let max = 40
      let min = 20
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    pressure: function () {
      return this.deep * this.g * this.density
    },
    area: function () {
      return Math.PI * Math.pow(this.diameter / 200, 2)
    },
    force: function () {
      return (this.pressure - this.atm) * this.area
    },
    checkedDeep: function () {
      this.errorDeep = this.errorRelative('Depth => ', this.deep, parseFloat(this.enterDeep))
      return this.errorDeep < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDensity: function () {
      this.errorDensity = this.errorRelative('Fluid density => ', this.density, parseFloat(this.enterDensity))
      return this.errorDensity < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedGauge: function () {
      this.errorGauge = this.errorRelative('Depth pressure => ', this.pressure, parseFloat(this.enterGauge))
      return this.errorGauge < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedOutPressure: function () {
      this.errorOutPressure = this.errorRelative('Out pressure => ', this.pressure, parseFloat(this.enterOutPressure))
      return this.errorOutPressure < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedInPressure: function () {
      this.errorInPressure = this.errorRelative('Inside pressure => ', this.atm, parseFloat(this.enterInPressure))
      return this.errorInPressure < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedArea: function () {
      this.errorArea = this.errorRelative('Window area => ', this.area, parseFloat(this.enterArea))
      return this.errorArea < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedForce: function () {
      this.errorForce = this.errorRelative('Force => ', this.force, parseFloat(this.enterForce))
      return this.errorForce < 1e-1 ? 'correct' : 'not-correct'
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
.eg-slide {
  .eg-slide-content {
    width: 100%;
    max-width: 100%;
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
  margin: auto;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22px;
  color: blue;
  width: 60%;
}
.mate {
  font-family: 'New Times Roman';
  font-style: italic;
  font-size: 30px;
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
