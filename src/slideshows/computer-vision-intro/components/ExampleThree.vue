<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Determina si los siguientes pares de vectores representan el mismo punto proyectivo. Justifica algebraicamente:
    p.problem a) [2, 4, 6]  y  [1, 2, 3] <br> b) [3, 0, 6]  y  [1, 0, 3] <br> c) [1, -1, 2]  y  [-2, 2, -4]
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data <em>&#x03B2;</em><sub>Hg</sub> (K<sup>-1</sup>)
    //-     input.center.data(:class="checkedBetaHg" v-model.number='userBetaHg')
    //-   p.inline.data <em>&#x03B2;</em><sub>Glass</sub> (K<sup>-1</sup>)
    //-     input.center.data(:class="checkedUserBetaGlass" v-model.number='userBetaGlass')
    //-   p.inline.data &#x394;T (&#x00B0;C)
    //-     input.center.data(:class="checkedUserDT" v-model.number='userDT')
    //-   p.inline.data &#x394;V<sub>Hg</sub> (cm<sup>3</sup>)
    //-     input.center.data(:class="checkedUserDVHg" v-model.number='userDVHg')
    //-   p.inline.data  &#x394;V<sub>Glass</sub> (cm<sup>3</sup>)
    //-     input.center.data(:class="checkedUserDVGlass" v-model.number='userDVGlass')
    //-   p.inline.data  &#x394;V<sub>overflow</sub> (cm<sup>3</sup>)
    //-     input.center.data(:class="checkedUserOverflow" v-model.number='userOverflow')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      userBetaHg: '',
      userBetaGlass: '',
      userDT: '',
      userDVHg: '',
      userDVGlass: '',
      userOverflow: '',
      hgBeta: 18e-5,
      glassAlpha: 0.4e-5
    }
  },
  computed: {
    glassVolume: function () {
      let max = 250
      let min = 150
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    initialTemperature: function () {
      let max = 35
      let min = 15
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    finalTemperature: function () {
      let max = 120
      let min = 90
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    DT: function () {
      return this.finalTemperature - this.initialTemperature
    },
    glassBeta: function () {
      return 3 * this.glassAlpha
    },
    DVHg: function () {
      return Math.round(1000 * this.hgBeta * this.glassVolume * this.DT) / 1000
    },
    DVGlass: function () {
      return Math.round(1000 * this.glassBeta * this.glassVolume * this.DT) / 1000
    },
    overflow: function () {
      return Math.round(1000 * (this.DVHg - this.DVGlass)) / 1000
    },
    checkedUserT1Celsius: function () {
      let check
      console.log(this.T1Celsius + ' : ' + parseFloat(this.userT1Celsius))
      check = parseFloat(this.T1Celsius) === parseFloat(this.userT1Celsius) ? 'correct' : 'not-correct'
      return check
    },
    checkedBetaHg: function () {
      let check
      console.log(this.hgBeta + ' : ' + parseFloat(this.userBetaHg))
      check = parseFloat(this.hgBeta) === parseFloat(this.userBetaHg) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserBetaGlass: function () {
      let check
      console.log(this.glassBeta + ' : ' + parseFloat(this.userBetaGlass))
      check = parseFloat(this.glassBeta) === parseFloat(this.userBetaGlass) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserDT: function () {
      let check
      console.log(this.DT + ' : ' + parseFloat(this.userDT))
      check = parseFloat(this.DT) === parseFloat(this.userDT) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserDVHg: function () {
      let check
      console.log(this.DVHg + ' : ' + parseFloat(this.userDVHg))
      check = parseFloat(this.DVHg) === parseFloat(this.userDVHg) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserDVGlass: function () {
      let check
      console.log(this.DVGlass + ' : ' + parseFloat(this.userDVGlass))
      check = parseFloat(this.DVGlass) === parseFloat(this.userDVGlass) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserOverflow: function () {
      let check
      console.log(this.overflow + ' : ' + parseFloat(this.userOverflow))
      check = parseFloat(this.overflow) === parseFloat(this.userOverflow) ? 'correct' : 'not-correct'
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
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
