<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem In a car lift used in a service station, compressed air is exerts a force on a small piston that has circular cross section and radius of {{ radiusA }} cm. This pressure is transmitted by a liquid to a piston that has a radius of {{ radiusB }} cm. What force must the compressed air exert to lift a car weigthing {{ weigth }} N? What air pressure produces this force?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Small radius (m)
        input.center.data(:class="checkedSmallRadius" v-model.number='smallRadius')
      p.inline.data Big Radius (m)
        input.center.data(:class="checkedBigRadius" v-model.number='bigRadius')
      p.inline.data Small area (m<sup>2</sup>)
        input.center.data(:class="checkedsmallArea" v-model.number='smallArea')
      p.inline.data Big area (m<sup>2</sup>)
        input.center.data(:class="checkedBigArea" v-model='bigArea')
      p.inline.data Car weigth (N)
        input.center.data(:class="checkedCarWeigth" v-model='carWeigth')
      p.inline.data Air force (N)
        input.center.data(:class="checkedAirForce" v-model='airForce')
      p.inline.data Air pressure (Pa)
        input.center.data(:class="checkedAirPressure" v-model='airPressure')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      smallRadius: '',
      bigRadius: '',
      smallArea: '',
      bigArea: '',
      carWeigth: '',
      airForce: '',
      airPressure: '',
      correct: false
    }
  },
  computed: {
    radiusA: function () {
      let max = 7
      let min = 2
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    radiusB: function () {
      let max = 20
      let min = 10
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    areaA: function () {
      return parseInt(Math.PI * this.radiusA * this.radiusA / 10) / 1000
    },
    areaB: function () {
      return parseInt(Math.PI * this.radiusB * this.radiusB / 10) / 1000
    },
    weigth: function () {
      let max = 20000
      let min = 10000
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    force: function () {
      return parseInt(1000 * this.weigth * this.areaA / this.areaB) / 1000
    },
    pressure: function () {
      return parseInt(1000 * this.force / this.areaA) / 1000
    },
    checkedSmallRadius: function () {
      let check
      console.log('radiusA : ' + this.radiusA / 100 + ' : ' + parseFloat(this.smallRadius))
      check = this.radiusA / 100 === parseFloat(this.smallRadius) ? 'correct' : 'not-correct'
      return check
    },
    checkedBigRadius: function () {
      let check
      console.log('radiusB : ' + this.radiusB / 100 + ' : ' + parseFloat(this.bigRadius))
      check = this.radiusB / 100 === parseFloat(this.bigRadius) ? 'correct' : 'not-correct'
      return check
    },
    checkedsmallArea: function () {
      let check
      console.log('areaA : ' + this.areaA + ' : ' + parseFloat(this.smallArea))
      check = this.areaA === parseFloat(this.smallArea) ? 'correct' : 'not-correct'
      return check
    },
    checkedBigArea: function () {
      let check
      console.log('areaB : ' + this.areaB + ' : ' + parseFloat(this.bigArea))
      check = this.areaB === parseFloat(this.bigArea) ? 'correct' : 'not-correct'
      return check
    },
    checkedCarWeigth: function () {
      let check
      console.log('weigth : ' + this.weigth + ' : ' + parseFloat(this.carWeigth))
      check = this.weigth === parseFloat(this.carWeigth) ? 'correct' : 'not-correct'
      return check
    },
    checkedAirForce: function () {
      let check
      console.log('force : ' + this.force + ' : ' + parseFloat(this.airForce))
      check = this.force === parseFloat(this.airForce) ? 'correct' : 'not-correct'
      return check
    },
    checkedAirPressure: function () {
      let check
      console.log('pressure : ' + this.pressure + ' : ' + parseFloat(this.airPressure))
      check = this.pressure === parseFloat(this.airPressure) ? 'correct' : 'not-correct'
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
