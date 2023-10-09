<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    //- p.problem A manometer tube is partially filled with water. Oil (which does not mix with water) is poured into the left arm of the tube until the oil-water interface is at the midpoint of the tube as shown. Both arms of the tube are open to the air. Find a relationship between <em>h<sub>water</sub></em> and <em>h<sub>oil</sub></em>. If <em>h<sub>water</sub></em> = {{ hWater }} cm and <em>h<sub>oil</sub></em> = {{ hOil }} cm what is the density of the oil.
    p.problem Un tubo manómetro está parcialmente lleno de agua. Se vierte aceite (que no se mezcla con agua) en el brazo izquierdo del tubo hasta que la interfaz aceite-agua esté en el punto medio del tubo, como se muestra. Ambos brazos del tubo están abiertos al aire. Encuentre una relación entre <em>h<sub>agua</sub></em> y <em>h<sub>aceite</sub></em>. Si <em>h<sub>agua</sub></em> = {{ hAgua }} cm y <em>h<sub>aceite</sub></em> = {{ hOil }} cm ¿cuál es la densidad del aceite.
      .center
        img(src='../assets/equations/uTubeProblem.svg' style="width: 300px;")
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data <em>h<sub>water</sub></em> (m)
        input.center.data(:class="checkedHWater" v-model.number='enterHWater')
        <span class="error" v-if="errorHWater">[e: {{ errorHWater.toPrecision(2) }}%]</span>
      p.inline.data <em>h<sub>oil</sub></em> (m)
        input.center.data(:class="checkedHOil" v-model.number='enterHOil')
        <span class="error" v-if="errorHOil">[e: {{ errorHOil.toPrecision(2) }}%]</span>
      p.inline.data <em style="font-family: Times New Roman">&#x03c1;</em> <sub>water</sub>
        input.center.data(:class="checkedWaterDensity" v-model.number='enterWaterDensity')
        <span class="error" v-if="errorWaterDensity">[e: {{ errorWaterDensity.toPrecision(2) }}%]</span>
      p.inline.data <em style="font-family: Times New Roman">&#x03c1;</em> <sub>oil</sub>
        input.center.data(:class="checkedOilDensity" v-model='enterOilDensity')
        <span class="error" v-if="errorOilDensity">[e: {{ errorOilDensity.toPrecision(2) }}%]</span>


</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterHWater: '',
      errorHWater: 0,
      enterHOil: '',
      errorHOil: 0,
      enterWaterDensity: '',
      errorWaterDensity: 0,
      enterOilDensity: '',
      errorOilDensity: 0,
      waterDensity: 1000
    }
  },
  computed: {
    hWater: function () {
      console.clear()
      let max = 39
      let min = 30
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    hOil: function () {
      let max = 50
      let min = 40
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    density: function () {
      return this.hWater * this.waterDensity / this.hOil
    },
    checkedHWater: function () {
      this.errorHWater = this.errorRelative('Water height => ', this.hWater / 100, parseFloat(this.enterHWater))
      return this.errorHWater < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedHOil: function () {
      this.errorHOil = this.errorRelative('Oil height => ', this.hOil / 100, parseFloat(this.enterHOil))
      return this.errorHOil < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedWaterDensity: function () {
      this.errorWaterDensity = this.errorRelative('water density => ', this.waterDensity, parseFloat(this.enterWaterDensity))
      return this.errorWaterDensity < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedOilDensity: function () {
      this.errorOilDensity = this.errorRelative('Oil density => ', this.density, parseFloat(this.enterOilDensity))
      return this.errorOilDensity < 1e-1 ? 'correct' : 'not-correct'
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
