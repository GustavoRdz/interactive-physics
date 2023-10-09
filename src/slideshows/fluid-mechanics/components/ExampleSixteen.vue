<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    //- p.problem Water enters a house through a tube with an internal diameter of {{ inletDiameter }} cm at an absolute pressure of {{ inletPressure }} kPa. A tube of {{ outletDiameter }} cm in diameter goes to the bathroom on the second floor, {{ height }} m above. Calculate the flow speed, pressure, and volume flow rate in the bathroom, when the flow speed in the inlet tube is {{ inletFlowSpeed }} m/s
    p.problem El agua entra a una casa a través de un tubo con un diámetro interno de {{ inletDiameter }} cm a una presión absoluta de {{ inletPressure }} kPa. Un tubo de {{ outletDiameter }} cm de diámetro va al baño del segundo piso, {{ height }} m arriba. Calcule la velocidad del flujo, la presión y el caudal volumétrico en el baño, cuando la velocidad del flujo en el tubo de entrada es {{ inletFlowSpeed }} m/s
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data A<sub>1</sub> (m<sup>2</sup>)
        input.center.data(:class="checkedAreaInlet" v-model.number='enterAreaInlet')
        <span class="error" v-if="errorAreaInlet">[e: {{ errorAreaInlet.toPrecision(2) }}%]</span>
      p.inline.data Flow speed<sub>inlet</sub> (m/s)
        input.center.data(:class="checkedFlowSpeedInlet" v-model.number='enterFlowSpeedInlet')
        <span class="error" v-if="errorFlowSpeedInlet">[e: {{ errorFlowSpeedInlet.toPrecision(2) }}%]</span>
      p.inline.data P<sub>1</sub> (Pa)
        input.center.data(:class="checkedPressureInlet" v-model.number='enterPressureInlet')
        <span class="error" v-if="errorPressureInlet">[e: {{ errorPressureInlet.toPrecision(2) }}%]</span>
      p.inline.data A<sub>2</sub> (m<sup>2</sup>)
        input.center.data(:class="checkedAreaOutlet" v-model.number='enterAreaOutlet')
        <span class="error" v-if="errorAreaOutlet">[e: {{ errorAreaOutlet.toPrecision(2) }}%]</span>
      p.inline.data Height difference (m)
        input.center.data(:class="checkedHeight" v-model.number='enterHeight')
        <span class="error" v-if="errorHeight">[e: {{ errorHeight.toPrecision(2) }}%]</span>
      p.inline.data Flow speed<sub>bath</sub> (m/s)
        input.center.data(:class="checkedFlowSpeedOutlet" v-model.number='enterFlowSpeedOutlet')
        <span class="error" v-if="errorFlowSpeedOutlet">[e: {{ errorFlowSpeedOutlet.toPrecision(2) }}%]</span>
      p.inline.data P<sub>2</sub> (Pa)
        input.center.data(:class="checkedPressureOutlet" v-model.number='enterPressureOutlet')
        <span class="error" v-if="errorPressureOutlet">[e: {{ errorPressureOutlet.toPrecision(2) }}%]</span>
      p.inline.data Flow rate (m<sup>3</sup>/s)
        input.center.data(:class="checkedFlowRate" v-model.number='enterFlowRate')
        <span class="error" v-if="errorFlowRate">[e: {{ errorFlowRate.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterAreaInlet: '',
      errorAreaInlet: 0,
      enterFlowSpeedInlet: '',
      errorFlowSpeedInlet: 0,
      enterPressureInlet: '',
      errorPressureInlet: 0,
      enterAreaOutlet: '',
      errorAreaOutlet: 0,
      enterHeight: '',
      errorHeight: 0,
      enterFlowSpeedOutlet: '',
      errorFlowSpeedOutlet: 0,
      enterPressureOutlet: '',
      errorPressureOutlet: 0,
      enterFlowRate: '',
      errorFlowRate: 0
    }
  },
  computed: {
    inletDiameter: function () {
      console.clear()
      let max = 200
      let min = 200
      return Math.floor(Math.random() * (max - min + 1) + min) / 100
    },
    inletPressure: function () {
      let max = 40000
      let min = 40000
      return Math.floor(Math.random() * (max - min + 1) + min) / 100
    },
    outletDiameter: function () {
      let max = 100
      let min = 100
      return Math.floor(Math.random() * (max - min + 1) + min) / 100
    },
    height: function () {
      let max = 500
      let min = 500
      return Math.floor(Math.random() * (max - min + 1) + min) / 100
    },
    inletFlowSpeed: function () {
      let max = 150
      let min = 150
      return Math.floor(Math.random() * (max - min + 1) + min) / 100
    },
    areaInlet: function () {
      return Math.PI * Math.pow(this.inletDiameter * 0.01 / 2, 2)
    },
    areaOutlet: function () {
      return Math.PI * Math.pow(this.outletDiameter * 0.01 / 2, 2)
    },
    outletFlowSpeed: function () {
      return this.areaInlet * this.inletFlowSpeed / this.areaOutlet
    },
    outletPressure: function () {
      return this.inletPressure * 1e3 + 1000 * (Math.pow(this.inletFlowSpeed, 2) - Math.pow(this.outletFlowSpeed, 2)) / 2 + 1000 * 9.81 * (-this.height)
    },
    flowRate: function () {
      return this.areaInlet * this.inletFlowSpeed
    },
    checkedAreaInlet: function () {
      this.errorAreaInlet = this.errorRelative('Area inlet => ', this.areaInlet, parseFloat(this.enterAreaInlet))
      return this.errorAreaInlet < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFlowSpeedInlet: function () {
      this.errorFlowSpeedInlet = this.errorRelative('Inlet flow speed => ', this.inletFlowSpeed, parseFloat(this.enterFlowSpeedInlet))
      return this.errorFlowSpeedInlet < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPressureInlet: function () {
      this.errorPressureInlet = this.errorRelative('Inlet pressure => ', this.inletPressure, parseFloat(this.enterPressureInlet))
      return this.errorPressureInlet < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAreaOutlet: function () {
      this.errorAreaOutlet = this.errorRelative('Outlet area => ', this.areaOutlet, parseFloat(this.enterAreaOutlet))
      return this.errorAreaOutlet < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedHeight: function () {
      this.errorHeight = this.errorRelative('Height => ', this.height, parseFloat(this.enterHeight))
      return this.errorHeight < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFlowSpeedOutlet: function () {
      this.errorFlowSpeedOutlet = this.errorRelative('Outlet flow speed => ', this.outletFlowSpeed, parseFloat(this.enterFlowSpeedOutlet))
      return this.errorFlowSpeedOutlet < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPressureOutlet: function () {
      this.errorPressureOutlet = this.errorRelative('Outlet pressure => ', this.outletPressure, parseFloat(this.enterPressureOutlet))
      return this.errorPressureOutlet < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFlowRate: function () {
      this.errorFlowRate = this.errorRelative('Flow rate => ', this.flowRate, parseFloat(this.enterFlowRate))
      return this.errorFlowRate < 1e-1 ? 'correct' : 'not-correct'
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
