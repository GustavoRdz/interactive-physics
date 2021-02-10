<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A gas storage tank with a cross-sectional area <em>A</em><sub>1</sub>, filled up to a height <em>h</em>. The space above the gasoline contains air at P<sub>0</sub> and the gasoline comes out through a short tube of area A<sub>2</sub>, located at the bottom of the tank.
    p.solution a) Deduce expresions for the speed of flow in the tube and the volume flow rate
    p.solution b) If the tank is open to the atmosphere which will be the expression for the flow speed and volume flow rate
      .center
        img(width="350px" src='../assets/equations/ex17Solutions.svg')
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data A<sub>1</sub> (m<sup>2</sup>)
    //-     input.center.data(:class="checkedUserHoseArea" v-model.number='userHoseArea')
    //-   p.inline.data P<sub>1</sub> (Pa)
    //-     input.center.data(:class="checkedUserFlowRate" v-model.number='userFlowRate')
    //-   p.inline.data A<sub>2</sub> (m<sup>2</sup>)
    //-     input.center.data(:class="checkedUserSpeedHose" v-model.number='userSpeedHose')
    //-   p.inline.data Height difference (m)
    //-     input.center.data(:class="checkedUserNozzleArea" v-model.number='userNozzleArea')
    //-   p.inline.data Flow speed (m/s)
    //-     input.center.data(:class="checkedUserSpeedNozzle" v-model.number='userSpeedNozzle')
    //-   p.inline.data Speed<sub>bath</sub> (m/s)
    //-     input.center.data(:class="checkedUserTravelTime" v-model.number='userTravelTime')
    //-   p.inline.data P<sub>2</sub> (Pa)
    //-     input.center.data(:class="checkedUserHorizontalDistance" v-model.number='userHorizontalDistance')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      userHoseArea: '',
      userFlowRate: '',
      userSpeedHose: '',
      userNozzleArea: '',
      userSpeedNozzle: '',
      userTravelTime: '',
      userHorizontalDistance: ''
    }
  },
  computed: {
    hoseDiameter: function () {
      let max = 300
      let min = 150
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    bucketVolume: function () {
      let max = 3000
      let min = 2000
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    fillTime: function () {
      let max = 40
      let min = 20
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 10
    },
    nozzleArea: function () {
      let max = 1.5
      let min = 5
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 10
    },
    hoseHeight: function () {
      let max = 15
      let min = 8
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 10
    },
    hoseArea: function () {
      return Number(Math.PI * Math.pow(this.hoseDiameter / 200, 2)).toPrecision(3)
    },
    flowRate: function () {
      return Number((this.bucketVolume * 1e-3 / (this.fillTime * 60))).toPrecision(3)
    },
    speedHose: function () {
      return Math.round(1000 * this.flowRate / this.hoseArea) / 1000
    },
    speedNozzle: function () {
      return Number(this.speedHose * this.hoseArea / (this.nozzleArea * 1e-4)).toPrecision(3)
    },
    travelTime: function () {
      return Math.round(1000 * Math.sqrt(2 * this.hoseHeight / 9.81)) / 1000
    },
    horizontalDistance: function () {
      return Math.round(1000 * this.speedNozzle * this.travelTime) / 1000
    },
    checkedUserHoseArea: function () {
      let check
      console.log(this.hoseArea + ' : ' + parseFloat(this.userHoseArea))
      check = parseFloat(this.hoseArea) === parseFloat(this.userHoseArea) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserFlowRate: function () {
      let check
      console.log(this.flowRate + ' : ' + parseFloat(this.userFlowRate))
      check = parseFloat(this.flowRate) === parseFloat(this.userFlowRate) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserSpeedHose: function () {
      let check
      console.log(this.speedHose + ' : ' + parseFloat(this.userSpeedHose))
      check = parseFloat(this.speedHose) === parseFloat(this.userSpeedHose) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserNozzleArea: function () {
      let check
      console.log((this.nozzleArea / 10000).toPrecision(3) + ' : ' + parseFloat(this.userNozzleArea))
      check = parseFloat((this.nozzleArea / 10000).toPrecision(3)) === parseFloat(this.userNozzleArea) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserSpeedNozzle: function () {
      let check
      console.log(this.speedNozzle + ' : ' + parseFloat(this.userSpeedNozzle))
      check = parseFloat(this.speedNozzle) === parseFloat(this.userSpeedNozzle) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserTravelTime: function () {
      let check
      console.log(this.travelTime + ' : ' + parseFloat(this.userTravelTime))
      check = parseFloat(this.travelTime) === parseFloat(this.userTravelTime) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserHorizontalDistance: function () {
      let check
      console.log(this.horizontalDistance + ' : ' + parseFloat(this.userHorizontalDistance))
      check = parseFloat(this.horizontalDistance) === parseFloat(this.userHorizontalDistance) ? 'correct' : 'not-correct'
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
