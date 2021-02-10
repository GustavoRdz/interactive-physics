<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Find the mass and weight of the air at 20<sup>o</sup>C in a living room with a {{ width }} x {{ large }} m floor and a ceiling {{ height }} m high, and the mass and weight of an equal volume of water.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data width (m)
        input.center.data(:class="checkedRoomWidth" v-model.number='roomWidth')
      p.inline.data Depth (m)
        input.center.data(:class="checkedRoomLarge" v-model.number='roomLarge')
      p.inline.data Height (m)
        input.center.data(:class="checkedRoomHeight" v-model.number='roomHeight')
      p.inline.data Fluid Volume (m<sup>3</sup>)
        input.center.data(:class="checked" v-model='fluidVolume')
      p.inline.data Fluid density (kg/m<sup>3</sup>)
        input.center.data(:class="checkedFluidDensity" v-model='fluidDensity')
      p.inline.data Fluid mass (kg)
        input.center.data(:class="checkedMass" v-model='fluidMass')
      p.inline.data Fluid weight (N)
        input.center.data(:class="checkedWeight" v-model='fluidWeight')
      p.inline.data Water mass (kg)
        input.center.data(:class="checkedWaterMass" v-model='waterFluidMass')
      p.inline.data Water weight (N)
        input.center.data(:class="checkedWaterWeight" v-model='waterFluidWeight')
</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      roomHeight: '',
      roomWidth: '',
      roomLarge: '',
      fluidDensity: '',
      fluidVolume: '',
      fluidMass: '',
      fluidWeight: '',
      waterFluidMass: '',
      waterFluidWeight: ''
    }
  },
  computed: {
    height: function () {
      let max = 1000
      let min = 300
      return Math.round(10 * Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    width: function () {
      let max = 1000
      let min = 200
      return Math.round(10 * Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    large: function () {
      let max = 1000
      let min = 200
      return Math.round(10 * Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    volume: function () {
      return Math.round(this.roomHeight * this.roomWidth * this.roomLarge * 1000) / 1000
    },
    mass: function () {
      return Math.round(this.fluidDensity * this.volume * 1000) / 1000
    },
    weight: function () {
      return Math.round(this.mass * 9.81 * 1000) / 1000
    },
    waterMass: function () {
      return Math.round(1000 * this.volume * 1000) / 1000
    },
    waterWeight: function () {
      return Math.round(this.waterMass * 9.81 * 1000) / 1000
    },
    checkedRoomWidth: function () {
      let check
      console.log('width => ' + this.width + ' : ' + parseFloat(this.roomWidth))
      check = this.width === parseFloat(this.roomWidth) ? 'correct' : 'not-correct'
      return check
    },
    checkedRoomLarge: function () {
      let check
      console.log('Depth => ' + this.large + ' : ' + parseFloat(this.roomLarge))
      check = this.large === parseFloat(this.roomLarge) ? 'correct' : 'not-correct'
      return check
    },
    checkedRoomHeight: function () {
      let check
      console.log('height => ' + this.height + ' : ' + parseFloat(this.roomHeight))
      check = this.height === parseFloat(this.roomHeight) ? 'correct' : 'not-correct'
      return check
    },
    checked: function () {
      let check
      console.log('volume => ' + this.volume + ' : ' + parseFloat(this.fluidVolume))
      check = this.volume === parseFloat(this.fluidVolume) ? 'correct' : 'not-correct'
      return check
    },
    checkedFluidDensity: function () {
      let check
      console.log('fluidDensity => ' + 1.2 + ' : ' + parseFloat(this.fluidDensity))
      check = parseFloat(this.fluidDensity) === 1.2 ? 'correct' : 'not-correct'
      return check
    },
    checkedMass: function () {
      let check
      console.log('airMass => ' + this.mass + ' : ' + parseFloat(this.fluidMass))
      check = this.mass === parseFloat(this.fluidMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedWeight: function () {
      let check
      console.log('airWeight => ' + this.weight + ' : ' + parseFloat(this.fluidWeight))
      check = this.weight === parseFloat(this.fluidWeight) ? 'correct' : 'not-correct'
      return check
    },
    checkedWaterMass: function () {
      let check
      console.log('waterMass => ' + this.waterMass + ' : ' + parseFloat(this.waterFluidMass))
      check = this.waterMass === parseFloat(this.waterFluidMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedWaterWeight: function () {
      let check
      console.log('waterWeight => ' + this.waterWeight + ' : ' + parseFloat(this.waterFluidWeight))
      this.correct = true
      check = this.waterWeight === parseFloat(this.waterFluidWeight) ? 'correct' : 'not-correct'
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
  width: 95%;
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
