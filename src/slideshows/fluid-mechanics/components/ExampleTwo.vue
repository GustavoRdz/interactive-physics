<template lang="pug">
  eg-transition(:enter='enter', :leave='leave')
    .eg-slide-content
      p.problem In the room described in the last excercice, what is the total downward force on the floor due to an air pressure of 1.00 atm.
      p Use room size, width: {{ width }}, depth {{ large }}, and height {{ height }}
      .center
        p.solution Please do calculations and introduce your results
        p.inline.data Width (m)
          input.center.data(:class="checkedRoomWidth" v-model.number='roomWidth')
        p.inline.data Depth (m)
          input.center.data(:class="checkedRoomLarge" v-model.number='roomLarge')
        p.inline.data Height (m)
          input.center.data(:class="checkedRoomHeight" v-model.number='roomHeight')
        p.inline.data Pressure (S.I.)
          input.center.data(:class="checked" v-model='fluidPressure')
        p.inline.data Floor area (m<sup>2</sup>)
          input.center.data(:class="checkedFloorArea" v-model='floorArea')
        p.inline.data Pressure force (N)
          input.center.data(:class="checkedPressureForce" v-model='pressureForce')

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
      fluidPressure: '',
      floorArea: '',
      pressureForce: ''
    }
  },
  computed: {
    height: function () {
      let max = 10
      let min = 3
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    width: function () {
      let max = 10
      let min = 2
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    large: function () {
      let max = 10
      let min = 2
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    area: function () {
      return Math.round(this.width * this.large * 1000) / 1000
    },
    force: function () {
      return Math.round(this.fluidPressure * this.area * 1000) / 1000
    },
    checkedRoomWidth: function () {
      let check
      // console.log('width => ' + this.width + ' : ' + parseFloat(this.roomWidth))
      check = this.width === parseFloat(this.roomWidth) ? 'correct' : 'not-correct'
      return check
    },
    checkedRoomLarge: function () {
      let check
      // console.log('depth => ' + this.large + ' : ' + parseFloat(this.roomLarge))
      check = this.large === parseFloat(this.roomLarge) ? 'correct' : 'not-correct'
      return check
    },
    checkedRoomHeight: function () {
      let check
      // console.log('height => ' + this.height + ' : ' + parseFloat(this.roomHeight))
      check = this.height === parseFloat(this.roomHeight) ? 'correct' : 'not-correct'
      return check
    },
    checked: function () {
      let check
      // console.log('fluidPressure => ' + 101300 + ' : ' + parseFloat(this.fluidPressure))
      check = parseFloat(this.fluidPressure) === 101300 ? 'correct' : 'not-correct'
      return check
    },
    checkedFloorArea: function () {
      let check
      // console.log('area => ' + this.area + ' : ' + parseFloat(this.floorArea))
      check = this.area === parseFloat(this.floorArea) ? 'correct' : 'not-correct'
      return check
    },
    checkedWeight: function () {
      let check
      // console.log('weight => ' + this.weight + ' : ' + parseFloat(this.roomWidth))
      check = this.weight === parseFloat(this.fluidWeight) ? 'correct' : 'not-correct'
      return check
    },
    checkedPressureForce: function () {
      let check
      // console.log('force => ' + this.force + ' : ' + parseFloat(this.pressureForce))
      check = this.force === parseFloat(this.pressureForce) ? 'correct' : 'not-correct'
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
  margin: 5px 5px 5px 5px;
  font-size: 30px;
  color: blue;
  width: 700px;
}

.solution {
  margin: 5px 5px 5px 5px;
  font-size: 20px;
  color: red;
}

.not-correct {
  background: #fa4408;
}
.correct {
  background: #80c080;
}
</style>
