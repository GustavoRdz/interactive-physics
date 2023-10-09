<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    //- p.problem A plastic ball has a radius of {{ radius }} cm and floats in water, the submerged volume represents {{ volumeSubmergedPercent }}% of the total volume of the ball.
    //- p.problem a) What force should we apply to the ball to hold it at rest completely below the surface of the water?
    //- p.problem b) If the ball is released, what acceleration will it have at the moment it is released?

    p.problem Una bola de plástico tiene un radio de {{ radius }} cm y flota en el agua, el volumen sumergido representa el {{ volumeSubmergedPercent }}% del volumen total de la bola.
    p.problem a) ¿Qué fuerza debemos aplicar a la pelota para mantenerla en reposo completamente debajo de la superficie del agua?
    p.problem b) Si se suelta la pelota, ¿qué aceleración tendrá en el momento de soltarse?
    .center
    
      p.solution Please do calculations and introduce your results
      p.inline.data <span style="font-family: times new roman; font-style: italic;">&#x03c1;</span><sub>fluid</sub> (kg/m<sup>3</sup>)
        input.center.data(:class="checkedRhoFluid" v-model.number='enterRhoFluid')
        <span class="error" v-if="errorRhoFluid">[e: {{ errorRhoFluid.toPrecision(2) }}%]</span>
      p.inline.data V<sub>100%</sub> (m<sup>3</sup>)
        input.center.data(:class="checkedTotalVolume" v-model.number='enterTotalVolume')
        <span class="error" v-if="errorTotalVolume">[e: {{ errorTotalVolume.toPrecision(2) }}%]</span>
      p.inline.data V<sub>{{ volumeSubmergedPercent }}%</sub> (m<sup>3</sup>)
        input.center.data(:class="checkedPartialVolume" v-model.number='enterPartialVolume')
        <span class="error" v-if="errorPartialVolume">[e: {{ errorPartialVolume.toPrecision(2) }}%]</span>
      p.inline.data B<sub>{{ volumeSubmergedPercent }}%</sub> (N)
        input.center.data(:class="checkedPartialSubmergedBoyant" v-model.number='enterPartialSubmergedBoyant')
        <span class="error" v-if="errorPartialSubmergedBoyant">[e: {{ errorPartialSubmergedBoyant.toPrecision(2) }}%]</span>
      p.inline.data B<sub>100%</sub> (N)
        input.center.data(:class="checkedTotalSubmergedBoyant" v-model.number='enterTotalSubmergedBoyant')
        <span class="error" v-if="errorTotalSubmergedBoyant">[e: {{ errorTotalSubmergedBoyant.toPrecision(2) }}%]</span>
      p.inline.data a) Force (N)
        input.center.data(:class="checkedForce" v-model.number='enterForce')
        <span class="error" v-if="errorForce">[e: {{ errorForce.toPrecision(2) }}%]</span>
      p.inline.data m<sub>ball</sub> (kg)
        input.center.data(:class="checkedMass" v-model.number='enterMass')
        <span class="error" v-if="errorMass">[e: {{ errorMass.toPrecision(2) }}%]</span>
      p.inline.data b) a<sub>ball</sub> (m/s<sup>2</sup>)
        input.center.data(:class="checkedAcceleration" v-model.number='enterAcceleration')
        <span class="error" v-if="errorAcceleration">[e: {{ errorAcceleration.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterRhoFluid: '',
      errorRhoFluid: 0,
      enterTotalVolume: '',
      errorTotalVolume: 0,
      enterPartialVolume: '',
      errorPartialVolume: 0,
      enterPartialSubmergedBoyant: '',
      errorPartialSubmergedBoyant: 0,
      enterTotalSubmergedBoyant: '',
      errorTotalSubmergedBoyant: 0,
      enterForce: '',
      errorForce: 0,
      enterMass: '',
      errorMass: 0,
      enterAcceleration: '',
      errorAcceleration: 0,
      g: 9.81,
      rho: 1000
    }
  },
  computed: {
    volumeSubmergedPercent: function () {
      console.clear()
      let max = 25
      let min = 10
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    radius: function () {
      let max = 20
      let min = 10
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    volumeTotal: function () {
      return 4 * Math.PI * Math.pow(this.radius / 100, 3) / 3
    },
    partialSubmergedBoyant: function () {
      return this.rho * this.g * (this.volumeTotal * this.volumeSubmergedPercent / 100)
    },
    totalSubmergedBoyant: function () {
      return this.rho * this.g * this.volumeTotal
    },
    force: function () {
      return this.totalSubmergedBoyant - this.partialSubmergedBoyant
    },
    mass: function () {
      return this.partialSubmergedBoyant / this.g
    },
    acceleration: function () {
      return 9.81 * (100 - this.volumeSubmergedPercent) / this.volumeSubmergedPercent
    },
    checkedRhoFluid: function () {
      this.errorRhoFluid = this.errorRelative('Fluid density => ', this.rho, parseFloat(this.enterRhoFluid))
      return this.errorRhoFluid < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTotalVolume: function () {
      this.errorTotalVolume = this.errorRelative('Ball volume => ', this.volumeTotal, parseFloat(this.enterTotalVolume))
      return this.errorTotalVolume < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPartialVolume: function () {
      this.errorPartialVolume = this.errorRelative('Submerged volume => ', this.volumeTotal * this.volumeSubmergedPercent / 100, parseFloat(this.enterPartialVolume))
      return this.errorPartialVolume < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPartialSubmergedBoyant: function () {
      this.errorPartialSubmergedBoyant = this.errorRelative('Boyant force floating ball => ', this.partialSubmergedBoyant, parseFloat(this.enterPartialSubmergedBoyant))
      return this.errorPartialSubmergedBoyant < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTotalSubmergedBoyant: function () {
      this.errorTotalSubmergedBoyant = this.errorRelative('Boyant force submerged ball => ', this.totalSubmergedBoyant, parseFloat(this.enterTotalSubmergedBoyant))
      return this.errorTotalSubmergedBoyant < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedForce: function () {
      this.errorForce = this.errorRelative('Applied force => ', this.force, parseFloat(this.enterForce))
      return this.errorForce < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMass: function () {
      this.errorMass = this.errorRelative('Ball mass => ', this.mass, parseFloat(this.enterMass))
      return this.errorMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAcceleration: function () {
      this.errorAcceleration = this.errorRelative('Ball acceleration => ', this.acceleration, parseFloat(this.enterAcceleration))
      return this.errorAcceleration < 1e-1 ? 'correct' : 'not-correct'
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
