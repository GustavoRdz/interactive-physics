<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem An electric dipole consists of two charges of equal magnitude and opposite sign separated by a distance 2a as shown in Figure. The dipole is along the x axis and is centered at the origin.<br>(A) Calculate the electric potential at point P on the y axis.<br>(B) Calculate the electric potential at point R on the positive x axis.<br>(C) Calculate V and Ex at a point on the x axis far from the dipole.
    .center
      img(src='../assets/fig25-13.png' height="200px" style="margin: -0px 0px 10px 0px;")
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Length (m)
    //-     input.center.data(:class="checkedLength" v-model.number='enterLength')
    //-   p.inline.data Period (s)
    //-     input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
    //-   p.inline.data Angle (º)
    //-     input.center.data(:class="checkedAngle" v-model.number='enterAngle')
    //-   p.inline.data Time to max speed (s)
    //-     input.center.data(:class="checkedTime" v-model.number='enterTime')
    //-   p.inline.data New angle (º)
    //-     input.center.data(:class="checkedAngle2" v-model.number='enterAngle2')
    //-   p.inline.data Time to max speed (s)
    //-     input.center.data(:class="checkedTime2" v-model.number='enterTime2')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterLength: '',
      enterPeriod: '',
      enterAngle: '',
      enterTime: '',
      enterAngle2: '',
      enterTime2: ''
    }
  },
  computed: {
    length: function () {
      let max = 1500
      let min = 500
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    angle: function () {
      let max = 5000
      let min = 1000
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    angle2: function () {
      let max = 5000
      let min = 1000
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    period: function () {
      return Math.round(1000 * 2 * Math.PI * Math.sqrt(this.length / 9.81)) / 1000
    },
    time: function () {
      return Math.round(1000 * this.period / 4) / 1000
    },
    time2: function () {
      return Math.round(1000 * this.period / 4) / 1000
    },
    checkedLength: function () {
      let check
      console.log('Length : ' + this.length + ' : ' + parseFloat(this.enterLength))
      check = this.length === parseFloat(this.enterLength) ? 'correct' : 'not-correct'
      return check
    },
    checkedPeriod: function () {
      let check
      console.log('Period : ' + this.period + ' : ' + parseFloat(this.enterPeriod))
      check = this.period === parseFloat(this.enterPeriod) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngle: function () {
      let check
      console.log('Angle : ' + this.angle + ' : ' + parseFloat(this.enterAngle))
      check = this.angle === parseFloat(this.enterAngle) ? 'correct' : 'not-correct'
      return check
    },
    checkedTime: function () {
      let check
      console.log('Time : ' + this.time + ' : ' + parseFloat(this.enterTime))
      check = this.time === parseFloat(this.enterTime) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngle2: function () {
      let check
      console.log('New angle : ' + this.angle2 + ' : ' + parseFloat(this.enterAngle2))
      check = this.angle2 === parseFloat(this.enterAngle2) ? 'correct' : 'not-correct'
      return check
    },
    checkedTime2: function () {
      let check
      console.log('New time : ' + this.time2 + ' : ' + parseFloat(this.enterTime2))
      check = this.time2 === parseFloat(this.enterTime2) ? 'correct' : 'not-correct'
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
