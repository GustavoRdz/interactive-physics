<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A manometer tube is partially filled with water. Oil (which does not mix with water) is poured into the left arm of the tube until the oil-water interface is at the midpoint of the tube as shown. Both arms of the tube are open to the air. Find a relationship between <em>h<sub>water</sub></em> and <em>h<sub>oil</sub></em>. If <em>h<sub>water</sub></em> = {{ water }} cm and <em>h<sub>oil</sub></em> = {{ oil }} cm what is the density of the oil.
      .center
        img(src='../assets/equations/uTubeProblem.svg')
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data <em>h<sub>water</sub></em> (m)
        input.center.data(:class="checkedhWater" v-model.number='hWater')
      p.inline.data <em>h<sub>oil</sub></em> (m)
        input.center.data(:class="checkedhOil" v-model.number='hOil')
      p.inline.data <em style="font-family: Times New Roman">&#x03c1;</em> <sub>water</sub>
        input.center.data(:class="checkedWaterDensity" v-model.number='waterDensity')
      p.inline.data <em style="font-family: Times New Roman">&#x03c1;</em> <sub>oil</sub>
        input.center.data(:class="checkedOilDensity" v-model='oilDensity')


</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      hWater: '',
      hOil: '',
      waterDensity: '',
      oilDensity: ''
    }
  },
  computed: {
    water: function () {
      let max = 39
      let min = 30
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    oil: function () {
      let max = 50
      let min = 40
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    density: function () {
      return Math.round(1000 * this.water * this.waterDensity / this.oil) / 1000
    },
    checkedhWater: function () {
      let check
      console.log('hwater : ' + this.water / 100 + ' : ' + parseFloat(this.hWater))
      check = this.water / 100 === parseFloat(this.hWater) ? 'correct' : 'not-correct'
      return check
    },
    checkedhOil: function () {
      let check
      console.log('hOil : ' + this.oil / 100 + ' : ' + parseFloat(this.hOil))
      check = this.oil / 100 === parseFloat(this.hOil) ? 'correct' : 'not-correct'
      return check
    },
    checkedWaterDensity: function () {
      let check
      console.log('Rhowater : ' + 1000 + ' : ' + parseFloat(this.waterDensity))
      check = parseFloat(this.waterDensity) === 1000 ? 'correct' : 'not-correct'
      return check
    },
    checkedOilDensity: function () {
      let check
      console.log('RhoOil : ' + this.density + ' : ' + parseFloat(this.oilDensity))
      check = this.density === parseFloat(this.oilDensity) ? 'correct' : 'not-correct'
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
  img {
    width: 150px;
    display: inline-block;
  }
  em {
    color: black;
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
  display: inline-block;
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
