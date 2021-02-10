<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Archimedes suppousedly was asked to determine whether a crown made for the king consisted of pure gold. According to legend he solved this problem by weighting the crown first in air and then in water. Suppose the scale read {{ airWeight }} N when the crown was in air and {{ waterWeight }} N when it was in water. What should Archimedes have told the king?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Weight in air (N)
        input.center.data(:class="checkedUserAir" v-model.number='userAir')
      p.inline.data  Weight in water (N)
        input.center.data(:class="checkedUserWater" v-model.number='userWater')
      p.inline.data Bouyant force (N)
        input.center.data(:class="checkedUserBouyant" v-model.number='userBouyant')
      p.inline.data Crown mass (kg)
        input.center.data(:class="checkedUserCrownMass" v-model.number='userCrownMass')
      p.inline.data Crown volume (m<sup>3</sup>)
        input.center.data(:class="checkedUserVolume" v-model.number='userVolume')
      p.inline.data Crown density (kg/m<sup>3</sup>)
        input.center.data(:class="checkedUserCrownDensity" v-model.number='userCrownDensity')
      p.inline.data Gold density (kg/m<sup>3</sup>)
        input.center.data(:class="checkedUserGoldDensity" v-model.number='userGoldDensity')
      p.inline.data Cheat (true/false)
        input.center.data(:class="checkedUserCheat" v-model='userCheat')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      userAir: '',
      userWater: '',
      userBouyant: '',
      userCrownMass: '',
      userVolume: '',
      userCrownDensity: '',
      userGoldDensity: '',
      userCheat: ''
    }
  },
  computed: {
    airWeight: function () {
      let max = 1000
      let min = 500
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    crownMass: function () {
      return Math.round(1000 * this.airWeight / 9.81) / 1000
    },
    realGoldBouyant: function () {
      return (1000 * 9.81 * this.goldVolume).toPrecision(3)
    },
    goldVolume: function () {
      return Number(this.crownMass / 19300).toPrecision(3)
    },
    waterWeight: function () {
      console.log('mass: ' + this.crownMass)
      // console.log('volume: ' + this.crownVolume)
      console.log('volumegold: ' + this.goldVolume)
      console.log('realGoldB: ' + this.realGoldBouyant)
      let max = this.airWeight - this.realGoldBouyant
      let min = this.airWeight - 5 * this.realGoldBouyant
      console.log('max : ' + max + '  min: ' + min)
      return (Math.floor(Math.random() * (max - min + 1)) + min).toPrecision(3)
    },
    bouyant: function () {
      return (this.airWeight - this.waterWeight) > 0 ? (this.airWeight - this.waterWeight).toPrecision(4) : (this.airWeight - this.waterWeight).toPrecision(3)
    },
    crownVolume: function () {
      return Number(this.bouyant / (9.81 * 1000)).toPrecision(3)
    },
    crownDensity: function () {
      // return (this.airWeight * 1000 / this.bouyant).toPrecision(3)
      return (this.crownMass / this.crownVolume).toPrecision(3)
    },
    cheat: function () {
      return this.bouyant === this.realGoldBouyant
    },
    checkedUserAir: function () {
      let check
      console.log(this.airWeight + ' : ' + parseFloat(this.userAir))
      check = this.airWeight === parseFloat(this.userAir) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserWater: function () {
      let check
      console.log(this.waterWeight + ' : ' + parseFloat(this.userWater))
      check = parseFloat(this.waterWeight) === parseFloat(this.userWater) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserBouyant: function () {
      let check
      console.log(this.bouyant + ' : ' + parseFloat(this.userBouyant))
      check = parseFloat(this.bouyant) === parseFloat(this.userBouyant) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserCrownMass: function () {
      let check
      console.log(this.crownMass + ' : ' + parseFloat(this.userCrownMass))
      check = parseFloat(this.crownMass) === parseFloat(this.userCrownMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserVolume: function () {
      let check
      console.log(this.crownVolume + ' : ' + parseFloat(this.userVolume))
      check = parseFloat(this.crownVolume) === parseFloat(this.userVolume) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserCrownDensity: function () {
      let check
      console.log(this.crownDensity + ' : ' + parseFloat(this.userCrownDensity))
      check = parseFloat(this.crownDensity) === parseFloat(this.userCrownDensity) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserGoldDensity: function () {
      let check
      console.log(19300 + ' : ' + parseFloat(this.userGoldDensity))
      check = this.userGoldDensity === 19300 ? 'correct' : 'not-correct'
      return check
    },
    checkedUserCheat: function () {
      let check
      let cheat = this.cheat ? 'false' : 'true'
      console.log(this.cheat + ' : ' + this.userCheat)
      console.log(cheat)
      console.log(this.userCheat)
      console.log('Bouyant: ' + this.bouyant + ' : ' + this.realGoldBouyant)
      check = cheat === this.userCheat ? 'correct' : 'not-correct'
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
