<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A diving bell is being designed to withstand the pressure of the sea at a depth of {{ deep }} m.
      p.problem What is the manometric pressure at that depth?
      p.problem At that depth, what net force do external water and indoor air exert on a circular window of {{ diameter }} cm in diameter, if the pressure inside the bell is the same as that on the surface of the water?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Deep (m)
        input.center.data(:class="checkedUserDeep" v-model.number='userDeep')
      p.inline.data <span style="font-family: Times New Roman;"><em>&#x03c1;</em><sub>fluid</sub></span> (kg/m<sup>3</sup>)
        input.center.data(:class="checkedUserDensity" v-model.number='userDensity')
      p.inline.data Gauge Pressure (Pa)
        input.center.data(:class="checkedUserGaugePressure" v-model.number='userGaugePressure')
      p.inline.data Outside pressure (Pa)
        input.center.data(:class="checkedUserOutsidePressure" v-model.number='userOutsidePressure')
      p.inline.data Inside pressure (Pa)
        input.center.data(:class="checkedUserInsidePressure" v-model.number='userInsidePressure')
      p.inline.data Area (Pa)
        input.center.data(:class="checkedUserArea" v-model.number='userArea')
      p.inline.data Force (Pa)
        input.center.data(:class="checkedUserForce" v-model.number='userForce')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      userDeep: '',
      userDensity: '',
      userGaugePressure: '',
      userOutsidePressure: '',
      userInsidePressure: '',
      userArea: '',
      userForce: ''
    }
  },
  computed: {
    deep: function () {
      let max = 250
      let min = 150
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    pressure: function () {
      return Math.round(this.deep * 9.81 * 1030 * 1000) / 1000
    },
    diameter: function () {
      let max = 40
      let min = 20
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    area: function () {
      return Math.round(Math.PI * this.diameter * this.diameter * 1000 / 40000) / 1000
    },
    force: function () {
      return Math.round((this.pressure - 101300) * this.area * 1000) / 1000
    },
    checkedUserDeep: function () {
      let check
      console.log(this.deep + ' : ' + parseFloat(this.userDeep))
      check = this.deep === parseFloat(this.userDeep) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserDensity: function () {
      let check
      console.log('1030' + ' : ' + parseFloat(this.userDensity))
      check = parseFloat(this.userDensity) === 1030 ? 'correct' : 'not-correct'
      return check
    },
    checkedUserGaugePressure: function () {
      let check
      console.log(this.pressure + ' : ' + parseFloat(this.userGaugePressure))
      check = this.pressure === parseFloat(this.userGaugePressure) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserOutsidePressure: function () {
      let check
      console.log(this.pressure + ' : ' + parseFloat(this.userOutsidePressure))
      check = this.pressure === parseFloat(this.userOutsidePressure) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserInsidePressure: function () {
      let check
      console.log('101300' + ' : ' + parseFloat(this.userInsidePressure))
      check = parseFloat(this.userInsidePressure) === 101300 ? 'correct' : 'not-correct'
      return check
    },
    checkedUserArea: function () {
      let check
      console.log(this.area + ' : ' + parseFloat(this.userArea))
      check = this.area === parseFloat(this.userArea) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserForce: function () {
      let check
      console.log(this.force + ' : ' + parseFloat(this.userForce))
      check = this.force === parseFloat(this.userForce) ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
    message: function (name) {
      return {
        'baby bunnies': 'Yeeeeah my favorite too !',
        'fluffy puppies': 'Wow so original.',
        'funny kitties': 'Good for you ' + this.volume + '.',
        'Theming': 'Ok ' + this.volume + ', whatever.',
        'Slide reuse': 'Seriously ' + this.volume + ' you <em>want</em> to see this.',
        'Interactivity': 'Well that\'s this slide, ' + this.volume +
                         '. <br /> A bit too late to unsee it, heh ?'
      }[name]
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
