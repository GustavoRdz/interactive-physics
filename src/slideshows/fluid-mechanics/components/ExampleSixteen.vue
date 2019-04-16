<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Water enters a house through a tube with an internal diameter of {{ inletDiameter }} cm at an absolute pressure of {{ inletPressure }} kPa. A tube of {{ outletDiameter }} cm in diameter goes to the bathroom on the second floor, {{ height }} m above. Calculate the flow speed, pressure, and volume flow rate in the bathroom, when the flow speed in the inlet tube is {{ inletFlowSpeed }} m/s
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data A<sub>1</sub> (m<sup>2</sup>)
        input.center.data(:class="checkedUserAreaInlet" v-model.number='userAreaInlet')
      p.inline.data Flow speed<sub>inlet</sub> (m/s)
        input.center.data(:class="checkedUserFlowSpeedInlet" v-model.number='userFlowSpeedInlet')
      p.inline.data P<sub>1</sub> (Pa)
        input.center.data(:class="checkedUserPressureInlet" v-model.number='userPressureInlet')
      p.inline.data A<sub>2</sub> (m<sup>2</sup>)
        input.center.data(:class="checkedUserAreaOutlet" v-model.number='userAreaOutlet')
      p.inline.data Height difference (m)
        input.center.data(:class="checkedUserHeight" v-model.number='userHeight')
      p.inline.data Flow speed<sub>bath</sub> (m/s)
        input.center.data(:class="checkedUserFlowSpeedOutlet" v-model.number='userFlowSpeedOutlet')
      p.inline.data P<sub>2</sub> (Pa)
        input.center.data(:class="checkedUserPressureOutlet" v-model.number='userPressureOutlet')
      p.inline.data Flow rate (m<sup>3</sup>/s)
        input.center.data(:class="checkedUserFlowRate" v-model.number='userFlowRate')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      userAreaInlet: '',
      userFlowSpeedInlet: '',
      userPressureInlet: '',
      userAreaOutlet: '',
      userHeight: '',
      userFlowSpeedOutlet: '',
      userPressureOutlet: '',
      userFlowRate: ''
    }
  },
  computed: {
    inletDiameter: function () {
      let max = 200
      let min = 200
      return Number((Math.floor(Math.random() * (max - min + 1)) + min) / 100).toPrecision(3)
    },
    inletPressure: function () {
      let max = 40000
      let min = 40000
      return Number((Math.floor(Math.random() * (max - min + 1)) + min) / 100).toPrecision(3)
    },
    outletDiameter: function () {
      let max = 100
      let min = 100
      return Number((Math.floor(Math.random() * (max - min + 1)) + min) / 100).toPrecision(3)
    },
    height: function () {
      let max = 500
      let min = 500
      return Number((Math.floor(Math.random() * (max - min + 1)) + min) / 100).toPrecision(3)
    },
    inletFlowSpeed: function () {
      let max = 150
      let min = 150
      return Number((Math.floor(Math.random() * (max - min + 1)) + min) / 100).toPrecision(3)
    },
    areaInlet: function () {
      return Number(Math.PI * Math.pow(this.inletDiameter * 0.01 / 2, 2)).toPrecision(3)
    },
    areaOutlet: function () {
      return Number(Math.PI * Math.pow(this.outletDiameter * 0.01 / 2, 2)).toPrecision(3)
    },
    outletFlowSpeed: function () {
      return this.areaInlet * this.inletFlowSpeed / this.areaOutlet
    },
    outletPressure: function () {
      return this.inletPressure * 1e3 + 1000 * (Math.pow(this.inletFlowSpeed, 2) - Math.pow(this.outletFlowSpeed, 2)) / 2 + 1000 * 9.81 * (-this.height)
    },
    flowRate: function () {
      return Number(this.areaInlet * this.inletFlowSpeed).toPrecision(3)
    },
    checkedUserAreaInlet: function () {
      let check
      console.log(this.areaInlet + ' : ' + parseFloat(this.userAreaInlet))
      check = parseFloat(this.areaInlet) === parseFloat(this.userAreaInlet) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserFlowSpeedInlet: function () {
      let check
      console.log(this.inletFlowSpeed + ' : ' + parseFloat(this.userFlowSpeedInlet))
      check = parseFloat(this.inletFlowSpeed) === parseFloat(this.userFlowSpeedInlet) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserPressureInlet: function () {
      let check
      console.log(1e3 * this.inletPressure + ' : ' + parseFloat(this.userPressureInlet))
      check = parseFloat(1e3 * this.inletPressure) === parseFloat(this.userPressureInlet) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserAreaOutlet: function () {
      let check
      console.log(this.areaOutlet + ' : ' + parseFloat(this.userAreaOutlet))
      check = parseFloat(this.areaOutlet) === parseFloat(this.userAreaOutlet) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserHeight: function () {
      let check
      console.log(this.height + ' : ' + parseFloat(this.userHeight))
      check = parseFloat(this.height) === parseFloat(this.userHeight) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserFlowSpeedOutlet: function () {
      let check
      console.log(this.outletFlowSpeed + ' : ' + parseFloat(this.userFlowSpeedOutlet))
      check = parseFloat(this.outletFlowSpeed) === parseFloat(this.userFlowSpeedOutlet) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserPressureOutlet: function () {
      let check
      console.log(this.outletPressure + ' : ' + parseFloat(this.userPressureOutlet))
      check = parseFloat(this.outletPressure) === parseFloat(this.userPressureOutlet) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserFlowRate: function () {
      let check
      console.log(this.flowRate + ' : ' + parseFloat(this.userFlowRate))
      check = parseFloat(this.flowRate) === parseFloat(this.userFlowRate) ? 'correct' : 'not-correct'
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
  margin: 15px 20px 15px 20px;
  font-size: 30px;
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
</style>
