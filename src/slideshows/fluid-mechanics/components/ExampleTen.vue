<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    //- p.problem Archimedes suppousedly was asked to determine whether a crown made for the king consisted of pure gold. According to legend he solved this problem by weighting the crown first in air and then in water. Suppose the scale read {{ airWeight }} N when the crown was in air and {{ waterWeight }} N when it was in water. What should Archimedes have told the king?
    p.problem Supuestamente se le pidió a Arquímedes que determinara si una corona hecha para el rey estaba hecha de oro puro. Según la leyenda, resolvió este problema pesando la corona primero en aire y luego en agua. Suponga que la báscula marca {{ airWeight }} N cuando la corona estaba en el aire y {{ waterWeight }} N cuando estaba en agua. ¿Qué debería haberle dicho Arquímedes al rey?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Weight in air (N)
        input.center.data(:class="checkedWAir" v-model.number='enterWAir')
        <span class="error" v-if="errorWAir">[e: {{ errorWAir.toPrecision(2) }}%]</span>
      p.inline.data  Weight in water (N)
        input.center.data(:class="checkedWWater" v-model.number='enterWWater')
        <span class="error" v-if="errorWWater">[e: {{ errorWWater.toPrecision(2) }}%]</span>
      p.inline.data Bouyant force (N)
        input.center.data(:class="checkedBouyant" v-model.number='enterBouyant')
        <span class="error" v-if="errorBouyant">[e: {{ errorBouyant.toPrecision(2) }}%]</span>
      p.inline.data Crown mass (kg)
        input.center.data(:class="checkedCrownMass" v-model.number='enterCrownMass')
        <span class="error" v-if="errorCrownMass">[e: {{ errorCrownMass.toPrecision(2) }}%]</span>
      p.inline.data Crown volume (m<sup>3</sup>)
        input.center.data(:class="checkedVolume" v-model.number='enterVolume')
        <span class="error" v-if="errorVolume">[e: {{ errorVolume.toPrecision(2) }}%]</span>
      p.inline.data Crown density (kg/m<sup>3</sup>)
        input.center.data(:class="checkedCrownDensity" v-model.number='enterCrownDensity')
        <span class="error" v-if="errorCrownDensity">[e: {{ errorCrownDensity.toPrecision(2) }}%]</span>
      p.inline.data Gold density (kg/m<sup>3</sup>)
        input.center.data(:class="checkedGoldDensity" v-model.number='enterGoldDensity')
        <span class="error" v-if="errorGoldDensity">[e: {{ errorGoldDensity.toPrecision(2) }}%]</span>
      p.inline.data Cheat (true/false)
        input.center.data(:class="checkedCheat" v-model='enterCheat')
        <span class="error" v-if="errorCheat">[e: {{ errorCheat.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterWAir: '',
      errorWAir: 0,
      enterWWater: '',
      errorWWater: 0,
      enterBouyant: '',
      errorBouyant: 0,
      enterCrownMass: '',
      errorCrownMass: 0,
      enterVolume: '',
      errorVolume: 0,
      enterCrownDensity: '',
      errorCrownDensity: 0,
      enterGoldDensity: '',
      errorGoldDensity: 0,
      enterCheat: '',
      errorCheat: 0,
      g: 9.81,
      rho: 1000,
      goldRho: 19300
    }
  },
  computed: {
    airWeight: function () {
      console.clear()
      let max = 1000
      let min = 500
      return Math.floor(Math.random() * (max - min + 1) + min) / 100
    },
    waterWeight: function () {
      let max = this.airWeight - this.realGoldBouyant
      let min = this.airWeight - 3 * this.realGoldBouyant
      return Math.floor(100 * Math.random() * (max - min + 1) + min) / 100
    },
    crownMass: function () {
      return this.airWeight / this.g
    },
    realGoldBouyant: function () {
      return this.rho * this.g * this.goldVolume
    },
    goldVolume: function () {
      return this.crownMass / this.goldRho
    },
    bouyant: function () {
      return this.airWeight - this.waterWeight
    },
    crownVolume: function () {
      return this.bouyant / (this.g * this.rho)
    },
    crownDensity: function () {
      return this.crownMass / this.crownVolume
    },
    cheat: function () {
      return this.bouyant === this.realGoldBouyant
    },
    checkedWAir: function () {
      this.errorWAir = this.errorRelative('Weight in air => ', this.airWeight, parseFloat(this.enterWAir))
      return this.errorWAir < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedWWater: function () {
      this.errorWWater = this.errorRelative('Weight in water => ', this.waterWeight, parseFloat(this.enterWWater))
      return this.errorWWater < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedBouyant: function () {
      this.errorBouyant = this.errorRelative('Bouyant force => ', this.bouyant, parseFloat(this.enterBouyant))
      return this.errorBouyant < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedCrownMass: function () {
      this.errorCrownMass = this.errorRelative('Crown mass => ', this.crownMass, parseFloat(this.enterCrownMass))
      return this.errorCrownMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedVolume: function () {
      this.errorVolume = this.errorRelative('Crown volume => ', this.crownVolume, parseFloat(this.enterVolume))
      return this.errorVolume < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedCrownDensity: function () {
      this.errorCrownDensity = this.errorRelative('Crown density => ', this.crownDensity, parseFloat(this.enterCrownDensity))
      return this.errorCrownDensity < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedGoldDensity: function () {
      this.errorGoldDensity = this.errorRelative('Gold density => ', this.goldRho, parseFloat(this.enterGoldDensity))
      return this.errorGoldDensity < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedCheat: function () {
      let check
      let cheat = this.cheat ? 'false' : 'true'
      console.log('Cheat : ' + cheat + ' : ' + this.enterCheat)
      check = cheat === this.enterCheat ? 'correct' : 'not-correct'
      return check
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
