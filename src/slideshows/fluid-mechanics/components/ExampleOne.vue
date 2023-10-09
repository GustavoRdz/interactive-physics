<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    //- p.problem Find the mass and weight of the air at 20<sup>o</sup>C in a living room with a {{ width }} x {{ large }} m floor and a ceiling {{ height }} m high, and the mass and weight of an equal volume of water.
    p.problem Encuentre la masa y el peso del  aire a 20<sup>o</sup>C que llena una habitacion con dimensiones {{ width }} x {{ large }} m en el piso y el techo esta a {{ height }} m de altura. Calcule también la masa y el peso de un volumen igual de agua.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data width (m)
        input.center.data(:class="checkedWidth" v-model.number='enterWidth')
        <span class="error" v-if="errorWidth">[e: {{ errorWidth.toPrecision(2) }}%]</span>
      p.inline.data Depth (m)
        input.center.data(:class="checkedLarge" v-model.number='enterLarge')
        <span class="error" v-if="errorLarge">[e: {{ errorLarge.toPrecision(2) }}%]</span>
      p.inline.data Height (m)
        input.center.data(:class="checkedHeight" v-model.number='enterHeight')
        <span class="error" v-if="errorHeight">[e: {{ errorHeight.toPrecision(2) }}%]</span>
      <br>
      p.inline.data Air Vol. (m<sup>3</sup>)
        input.center.data(:class="checkedVolume" v-model='enterVolume')
        <span class="error" v-if="errorVolume">[e: {{ errorVolume.toPrecision(2) }}%]</span>
      p.inline.data Air density (kg/m<sup>3</sup>)
        input.center.data(:class="checkedAirDensity" v-model='enterAirDensity')
        <span class="error" v-if="errorAirDensity">[e: {{ errorAirDensity.toPrecision(2) }}%]</span>
      p.inline.data Air mass (kg)
        input.center.data(:class="checkedAirMass" v-model='enterAirMass')
        <span class="error" v-if="errorAirMass">[e: {{ errorAirMass.toPrecision(2) }}%]</span>
      p.inline.data Air weight (N)
        input.center.data(:class="checkedAirWeight" v-model='enterAirWeight')
        <span class="error" v-if="errorAirWeight">[e: {{ errorAirWeight.toPrecision(2) }}%]</span>
      <br>
      p.inline.data Water mass (kg)
        input.center.data(:class="checkedWaterMass" v-model='enterWaterMass')
        <span class="error" v-if="errorWaterMass">[e: {{ errorWaterMass.toPrecision(2) }}%]</span>
      p.inline.data Water weight (N)
        input.center.data(:class="checkedWaterWeight" v-model='enterWaterWeight')
        <span class="error" v-if="errorWaterWeight">[e: {{ errorWaterWeight.toPrecision(2) }}%]</span>
</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterHeight: '',
      errorHeight: 0,
      enterWidth: '',
      errorWidth: 0,
      enterLarge: '',
      errorLarge: 0,
      enterAirDensity: '',
      errorAirDensity: 0,
      enterVolume: '',
      errorVolume: 0,
      enterAirMass: '',
      errorAirMass: 0,
      enterAirWeight: '',
      errorAirWeight: 0,
      enterWaterMass: '',
      errorWaterMass: 0,
      enterWaterWeight: '',
      errorWaterWeight: 0
    }
  },
  computed: {
    height: function () {
      console.clear()
      let max = 1000
      let min = 300
      return Math.round(10 * Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    width: function () {
      let max = 1000
      let min = 200
      return Math.round(10 * Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    large: function () {
      let max = 1000
      let min = 200
      return Math.round(10 * Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    volume: function () {
      return this.height * this.width * this.large
    },
    mass: function () {
      return 1.2 * this.volume
    },
    weight: function () {
      return this.mass * 9.81
    },
    waterMass: function () {
      return 1000 * this.volume
    },
    waterWeight: function () {
      return this.waterMass * 9.81
    },
    checkedWidth: function () {
      this.errorWidth = this.errorRelative('Width => ', this.width, parseFloat(this.enterWidth))
      return this.errorWidth < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedLarge: function () {
      this.errorLarge = this.errorRelative('Depth => ', this.large, parseFloat(this.enterLarge))
      return this.errorLarge < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedHeight: function () {
      this.errorHeight = this.errorRelative('height => ', this.height, parseFloat(this.enterHeight))
      return this.errorHeight < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedVolume: function () {
      this.errorVolume = this.errorRelative('Volume => ', this.volume, parseFloat(this.enterVolume))
      return this.errorVolume < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAirDensity: function () {
      this.errorAirDensity = this.errorRelative('Air density => ', 1.2, parseFloat(this.enterAirDensity))
      return this.errorAirDensity < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAirMass: function () {
      this.errorAirMass = this.errorRelative('Air mass => ', this.mass, parseFloat(this.enterAirMass))
      return this.errorAirMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAirWeight: function () {
      this.errorAirWeight = this.errorRelative('Weight => ', this.weight, parseFloat(this.enterAirWeight))
      return this.errorAirWeight < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedWaterMass: function () {
      this.errorWaterMass = this.errorRelative('Water mass => ', this.waterMass, parseFloat(this.enterWaterMass))
      return this.errorWaterMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedWaterWeight: function () {
      this.errorWaterWeight = this.errorRelative('Water weight => ', this.waterWeight, parseFloat(this.enterWaterWeight))
      return this.errorWaterWeight < 1e-1 ? 'correct' : 'not-correct'
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
