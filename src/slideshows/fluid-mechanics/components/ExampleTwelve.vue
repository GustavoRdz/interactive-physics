<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem The density of an iceberg floating in the sea is {{ rhoObject }} kg/m<sup>3</sup>. The density of seawater is {{ rhoFluid }} kg/m<sup>3</sup> with a salient volume of {{ volumeAbove }} m<sup>3</sup>. What is the total mass of the iceberg? What fraction of the iceberg lies below the water level?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data <span style="font-family: times new roman; font-style: italic;">&#x03c1;</span><sub>solid</sub> (kg/m<sup>3</sup>)
        input.center.data(:class="checkeduserRhoSolid" v-model.number='userRhoSolid')
      p.inline.data <span style="font-family: times new roman; font-style: italic;">&#x03c1;</span><sub>fluid</sub> (kg/m<sup>3</sup>)
        input.center.data(:class="checkedUserRhoFluid" v-model.number='userRhoFluid')
      p.inline.data V<sub>salient</sub> (m<sup>3</sup>)
        input.center.data(:class="checkedUserSalientVolume" v-model.number='userSalientVolume')
      p.inline.data V<sub>inmmersed</sub> (m<sup>3</sup>)
        input.center.data(:class="checkedUserInmmersedVolume" v-model.number='userInmmersedVolume')
      p.inline.data V<sub>solid</sub> (m<sup>3</sup>)
        input.center.data(:class="checkedUserSolidVolume" v-model.number='userSolidVolume')
      p.inline.data m<sub>solid </sub> (kg)
        input.center.data(:class="checkedUserSolidMass" v-model.number='userSolidMass')
      p.inline.data %<sub>inmmersed</sub>
        input.center.data(:class="checkedUserInmmersedRatio" v-model.number='userInmmersedRatio')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      userRhoSolid: '',
      userRhoFluid: '',
      userSalientVolume: '',
      userInmmersedVolume: '',
      userSolidVolume: '',
      userSolidMass: '',
      userInmmersedRatio: ''
    }
  },
  computed: {
    rhoObject: function () {
      let max = 950
      let min = 850
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    rhoFluid: function () {
      let max = 1040
      let min = 1020
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    volumeAbove: function () {
      let max = 100
      let min = 1
      return (1e6 * (Math.floor(Math.random() * (max - min + 1)) + min) / 10).toPrecision(3)
    },
    volumeBelow: function () {
      return (this.volumeAbove * this.rhoObject / (this.rhoFluid - this.rhoObject)).toPrecision(3)
    },
    solidVolume: function () {
      return (parseFloat(this.volumeAbove) + parseFloat(this.volumeBelow)).toPrecision(3)
    },
    solidMass: function () {
      return (this.solidVolume * this.rhoObject).toPrecision(3)
    },
    inmmersedRatio: function () {
      return (100 * this.rhoObject / this.rhoFluid).toPrecision(3)
    },
    checkeduserRhoSolid: function () {
      let check
      console.log(this.rhoObject + ' : ' + parseFloat(this.userRhoSolid))
      check = parseFloat(this.rhoObject) === parseFloat(this.userRhoSolid) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserRhoFluid: function () {
      let check
      console.log(this.rhoFluid + ' : ' + parseFloat(this.userRhoFluid))
      check = parseFloat(this.rhoFluid) === parseFloat(this.userRhoFluid) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserSalientVolume: function () {
      let check
      console.log(this.volumeAbove + ' : ' + parseFloat(this.userSalientVolume))
      check = parseFloat(this.volumeAbove) === parseFloat(this.userSalientVolume) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserInmmersedVolume: function () {
      let check
      console.log(this.volumeBelow + ' : ' + parseFloat(this.userInmmersedVolume))
      check = parseFloat(this.volumeBelow) === parseFloat(this.userInmmersedVolume) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserSolidVolume: function () {
      let check
      console.log(this.solidVolume + ' : ' + parseFloat(this.userSolidVolume))
      check = parseFloat(this.solidVolume) === parseFloat(this.userSolidVolume) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserSolidMass: function () {
      let check
      console.log(this.solidMass + ' : ' + parseFloat(this.userSolidMass))
      check = parseFloat(this.solidMass) === parseFloat(this.userSolidMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserInmmersedRatio: function () {
      let check
      console.log(this.inmmersedRatio + ' : ' + parseFloat(this.userInmmersedRatio))
      check = parseFloat(this.inmmersedRatio) === parseFloat(this.userInmmersedRatio) ? 'correct' : 'not-correct'
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
