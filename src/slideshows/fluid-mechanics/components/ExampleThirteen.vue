<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A plastic ball has a radius of {{ radius }} cm and floats in water, the submerged volume represents {{ volumePartial }}% of the total volume of the ball.
    p.problem a) What force should we apply to the ball to hold it at rest completely below the surface of the water?
    p.problem b) If the ball is released, what acceleration will it have at the moment it is released?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data <span style="font-family: times new roman; font-style: italic;">&#x03c1;</span><sub>fluid</sub> (kg/m<sup>3</sup>)
        input.center.data(:class="checkedUserRhoFluid" v-model.number='userRhoFluid')
      p.inline.data V<sub>100%</sub> (m<sup>3</sup>)
        input.center.data(:class="checkedUserTotalVolume" v-model.number='userTotalVolume')
      p.inline.data V<sub>{{ volumePartial }}%</sub> (m<sup>3</sup>)
        input.center.data(:class="checkedUserPartialVolume" v-model.number='userPartialVolume')
      p.inline.data B<sub>{{ volumePartial }}%</sub> (N)
        input.center.data(:class="checkedUserPartialSubmergedBoyant" v-model.number='userPartialSubmergedBoyant')
      p.inline.data B<sub>100%</sub> (N)
        input.center.data(:class="checkedUserTotalSubmergedBoyant" v-model.number='userTotalSubmergedBoyant')
      p.inline.data a) Force (N)
        input.center.data(:class="checkedUserForce" v-model.number='userForce')
      p.inline.data m<sub>ball</sub> (kg)
        input.center.data(:class="checkedUserMass" v-model.number='userMass')
      p.inline.data b) a<sub>ball</sub> (m/s<sup>2</sup>)
        input.center.data(:class="checkedUserAcceleration" v-model.number='userAcceleration')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      userRhoFluid: '',
      userTotalVolume: '',
      userPartialVolume: '',
      userPartialSubmergedBoyant: '',
      userTotalSubmergedBoyant: '',
      userForce: '',
      userMass: '',
      userAcceleration: ''
    }
  },
  computed: {
    volumePartial: function () {
      let max = 25
      let min = 10
      return Number((Math.floor(Math.random() * (max - min + 1)) + min)).toPrecision(3)
    },
    radius: function () {
      let max = 20
      let min = 10
      return Number((Math.floor(Math.random() * (max - min + 1)) + min)).toPrecision(3)
    },
    volumeTotal: function () {
      return Number(4 * Math.PI * Math.pow(this.radius / 100, 3) / 3).toPrecision(3)
    },
    partialSubmergedBoyant: function () {
      return Number(1000 * 9.81 * this.volumeTotal * this.volumePartial / 100).toPrecision(4)
    },
    totalSubmergedBoyant: function () {
      return Number(1000 * 9.81 * this.volumeTotal).toPrecision(4)
    },
    force: function () {
      return Number(this.totalSubmergedBoyant - this.partialSubmergedBoyant).toPrecision(3)
    },
    mass: function () {
      return Number(this.partialSubmergedBoyant / 9.81).toPrecision(3)
    },
    acceleration: function () {
      return Number(9.81 * (100 - this.volumePartial) / this.volumePartial).toPrecision(3)
    },
    checkedUserRhoFluid: function () {
      let check
      console.log(1000 + ' : ' + parseFloat(this.userRhoFluid))
      check = parseFloat(this.userRhoFluid) === 1000 ? 'correct' : 'not-correct'
      return check
    },
    checkedUserTotalVolume: function () {
      let check
      console.log(this.volumeTotal + ' : ' + parseFloat(this.userTotalVolume))
      check = parseFloat(this.volumeTotal) === parseFloat(this.userTotalVolume) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserPartialVolume: function () {
      let check
      console.log((this.volumeTotal * this.volumePartial / 100).toPrecision(3) + ' : ' + parseFloat(this.userPartialVolume))
      check = parseFloat((this.volumeTotal * this.volumePartial / 100).toPrecision(3)) === parseFloat(this.userPartialVolume) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserPartialSubmergedBoyant: function () {
      let check
      console.log(this.partialSubmergedBoyant + ' : ' + parseFloat(this.userPartialSubmergedBoyant))
      check = parseFloat(this.partialSubmergedBoyant) === parseFloat(this.userPartialSubmergedBoyant) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserTotalSubmergedBoyant: function () {
      let check
      console.log(this.totalSubmergedBoyant + ' : ' + parseFloat(this.userTotalSubmergedBoyant))
      check = parseFloat(this.totalSubmergedBoyant) === parseFloat(this.userTotalSubmergedBoyant) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserForce: function () {
      let check
      console.log(this.force + ' : ' + parseFloat(this.userForce))
      check = parseFloat(this.force) === parseFloat(this.userForce) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserMass: function () {
      let check
      console.log(this.mass + ' : ' + parseFloat(this.userMass))
      check = parseFloat(this.mass) === parseFloat(this.userMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserAcceleration: function () {
      let check
      console.log(this.acceleration + ' : ' + parseFloat(this.userAcceleration))
      check = parseFloat(this.acceleration) === parseFloat(this.userAcceleration) ? 'correct' : 'not-correct'
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
