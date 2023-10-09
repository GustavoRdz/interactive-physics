<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    //- p.problem Estimate the force excerted on your eardrum due to the water when you are swimming at the bottom of a pool that is {{ deep }} m deep. <span style="font-size: 20px; color: green;">Eardrum estimate area is 1 cm<sup>2</sup></span>
    p.problem Estima la fuerza ejercida sobre tu oreja debido al agua cuando nadas en el fondo de una piscina que tiene {{ deep }} m de profundidad. <span style="font-size: 20px; color: green;">El área estimada del tímpano es 1 cm<sup>2</sup></span>
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Pool deep (m)
        input.center.data(:class="checkedDeep" v-model.number='enterDeep')
        <span class="error" v-if="errorDeep">[e: {{ errorDeep.toPrecision(2) }}%]</span>
      p.inline.data Atm pressure (Pa)
        input.center.data(:class="checkedAtmPressure" v-model.number='enterAtmPressure')
        <span class="error" v-if="errorAtmPressure">[e: {{ errorAtmPressure.toPrecision(2) }}%]</span>
      p.inline.data Fluid density (kg/m<sup>2</sup>)
        input.center.data(:class="checkedDensity" v-model.number='enterDensity')
        <span class="error" v-if="errorDensity">[e: {{ errorDensity.toPrecision(2) }}%]</span>
      p.inline.data Water pressure (Pa)
        input.center.data(:class="checkedWaterPressure" v-model.number='enterWaterPressure')
        <span class="error" v-if="errorWaterPressure">[e: {{ errorWaterPressure.toPrecision(2) }}%]</span>
      p.inline.data Surface area (m<sup>2</sup>)
        input.center.data(:class="checkedArea" v-model='enterArea')
        <span class="error" v-if="errorArea">[e: {{ errorArea.toPrecision(2) }}%]</span>
      p.inline.data Water Force (N)
        input.center.data(:class="checkedForce" v-model='enterForce')
        <span class="error" v-if="errorForce">[e: {{ errorForce.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterDeep: '',
      errorDeep: 0,
      enterAtmPressure: '',
      errorAtmPressure: 0,
      enterDensity: '',
      errorDensity: 0,
      enterWaterPressure: '',
      errorWaterPressure: 0,
      enterArea: '',
      errorArea: 0,
      enterForce: '',
      errorForce: 0
    }
  },
  computed: {
    deep: function () {
      console.clear()
      let max = 1000
      let min = 300
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    pressure: function () {
      return 1000 * 9.810 * this.deep
    },
    force: function () {
      return this.pressure * 0.0001
    },
    checkedDeep: function () {
      this.errorDeep = this.errorRelative('Deep => ', this.deep, parseFloat(this.enterDeep))
      return this.errorDeep < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAtmPressure: function () {
      this.errorAtmPressure = this.errorRelative('Atm pressure => ', 101300, parseFloat(this.enterAtmPressure))
      return this.errorAtmPressure < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDensity: function () {
      this.errorDensity = this.errorRelative('Water density => ', 1000, parseFloat(this.enterDensity))
      return this.errorDensity < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedWaterPressure: function () {
      this.errorWaterPressure = this.errorRelative('Water pressure => ', this.pressure, parseFloat(this.enterWaterPressure))
      return this.errorWaterPressure < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedArea: function () {
      this.errorArea = this.errorRelative('Ear Area => ', 0.0001, parseFloat(this.enterArea))
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
