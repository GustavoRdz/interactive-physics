<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  p.problem A sphere of steel that is at a temperature of {{ coldTemperature }}&#x00B0;C has a diameter of {{ sphereDiameter }} cm, while the diameter of a hole that was made in an aluminum plate is {{ holeDiameter }} cm. At what common temperature will the sphere just pass the hole? What is the diameter of the sphere at that temperature?

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data T<sub>f</sub> (&#x00B0;C)
        input.center.data(:class="checkedUserTemperature" v-model.number='userTemperature')
      p.inline.data <em>&#x03C6;</em><sub>sphere</sub> (cm)
        input.center.data(:class="checkedUserDiameter" v-model.number='userDiameter')

</template>
<script>
import eagle from 'eagle.js'

export default {
  data: function () {
    return {
      alphaSteel: 1.1e-5,
      alphaAluminium: 2.4e-5,
      userTemperature: '',
      userDiameter: ''
    }
  },
  computed: {
    coldTemperature: function () {
      let max = 30
      let min = 20
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    sphereDiameter: function () {
      let max = 1000
      let min = 900
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    holeDiameter: function () {
      let max = 1000 * this.sphereDiameter - 1
      let min = max * 0.998
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    hotTemperature: function () {
      let numerator = this.holeDiameter - this.sphereDiameter
      let denominator = this.alphaSteel * this.sphereDiameter - this.alphaAluminium * this.holeDiameter
      return Math.round(1000 * (this.coldTemperature + numerator / denominator)) / 1000
    },
    sphereHotDiameter: function () {
      return Math.round(1000 * (this.sphereDiameter * (1 + this.alphaSteel * (this.hotTemperature - this.coldTemperature)))) / 1000
    },
    checkedUserTemperature: function () {
      let check
      console.log(this.hotTemperature + ' : ' + parseFloat(this.userTemperature))
      check = this.hotTemperature === parseFloat(this.userTemperature) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserDiameter: function () {
      let check
      console.log(this.sphereHotDiameter + ' : ' + parseFloat(this.userDiameter))
      check = this.sphereHotDiameter === parseFloat(this.userDiameter) ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
    material1: function (index) {
      this.mat1 = index
      if (this.isStarted === false) {
        this.stop()
      } else {
        this.stop()
        this.start()
      }
    },
    material2: function (index) {
      this.mat2 = index
      if (this.isStarted === false) {
        this.stop()
      } else {
        this.stop()
        this.start()
      }
    }
  },
  watch: {
  },
  mixins: [eagle.slide]
}

</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css?family=Major+Mono+Display');
@import url('https://fonts.googleapis.com/css?family=Allerta+Stencil');
@import url('https://fonts.googleapis.com/css?family=Space+Mono');


.svg-display {
        font-family:'Space Mono', monospace;
        text-transform: "none";
      }
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #3f3;
}

li {
  float: left;
}

li a, .dropbtn {
  display: inline-block;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 0px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {background-color: #f1f1f1;}

.dropdown:hover .dropdown-content {
  display: block;
}

button {
  width: 200px;
  height:40px;
}

.data {
  display: inline-block;
  text-transform: none;
  width: 100px;
  height: 30px;
  margin: 5px 3px 5px 3px;
  font-size: 20px;
}

.problem {
  text-transform: none;
  margin: 1px 2px 1px 2px;
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
