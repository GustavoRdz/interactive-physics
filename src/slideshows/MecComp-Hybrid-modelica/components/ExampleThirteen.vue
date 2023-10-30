<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  p.problem Suppose the two bars of the former Example are separated. One end of each bar is kept at 100°C and the other end of each bar is kept at 0°C. What is the total heat current in the two bars?
  .center
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" height="220" width="280" >
      //- <path d="M0,0 l0 220 l280 -220 l0 220 z" stroke-width="0.3"stroke="#000" fill="none"/>

      <path d="M9 10 l30 0 l0 90 l100 25 l0 85 l-130 0 Z" stroke="red" fill="red"/>
      <rect x=40 y=35 width=200 height=50 stroke="peru" fill="peru"/>
      <rect x=140 y=140 width=100 height=50 stroke="silver" fill="silver"/>
      <rect x=241 y=10 width=30 height=200 stroke="deepskyblue" fill="deepskyblue"/>

        <text x="15" y="110" font-family="times" font-size="20" font-style="italic">T<tspan baseline-shift="sub" font-size="10">H</tspan></text>
        <text x="245" y="110" font-family="times" font-size="20" font-style="italic">T<tspan baseline-shift="sub" font-size="10">C</tspan></text>
        <text x="110" y="62" font-family="times" font-size="20" font-style="italic">Cooper</text>
        <text x="150" y="170" font-family="times" font-size="20" font-style="italic">Steel</text>

        <text x="210" y="65" font-family="times" font-size="25" font-style="italic">&#x03c6;</text>
        <path d="M205 35 l0 50 M205 35 l-3 10 M205 35 l3 10 M205 85 l-3 -10 M205 85 l3 -10" stroke=#000 fill="none"/>
        <text x="210" y="170" font-family="times" font-size="25" font-style="italic">&#x03c6;</text>
        <path d="M205 140 l0 50 M205 140 l-3 10 M205 140 l3 10 M205 190 l-3 -10 M205 190 l3 -10" stroke=#000 fill="none"/>

        <text x="180" y="205" font-family="times" font-size="20" font-style="italic">L<tspan baseline-shift="sub" font-size="10">S</tspan></text>
        <path d="M140 200 l35 0 M140 200 l10 3 M140 200 l10 -3 M200 200 l40 0 M240 200 l-10 -3 M240 200 l-10 3" stroke=#000 fill="none"/>

        <text x="130" y="100" font-family="times" font-size="20" font-style="italic">L<tspan baseline-shift="sub" font-size="10">C</tspan></text>
        <path d="M40 95 l85 0 M40 95 l10 3 M40 95 l10 -3 M150 95 l90 0 M240 95 l-10 -3 M240 95 l-10 3" stroke=#000 fill="none"/>

        

    </svg>


    .center
      //- p.solution Please do calculations and introduce your results
      //- p.inline.data <em>&#x03B1;</em><sub>br</sub> (K<sup>-1</sup>)
      //-   input.center.data(:class="checkedUserAlphaBr" v-model.number='userAlphaBr')
      //- p.inline.data <em>&#x03B1;</em><sub>st</sub> (K<sup>-1</sup>)
      //-   input.center.data(:class="checkedUserAlphaSt" v-model.number='userAlphaSt')
      //- p.inline.data Touch T (&#x00B0;C)
      //-   input.center.data(:class="checkedUserT" v-model.number='userT')

</template>
<script>
import eagle from 'eagle.js'

export default {
  data: function () {
    return {
      stepScrew: 8,
      temperature1: 100,
      temperature2: 0,
      opacity: 1,
      mat1: 0,
      mat2: 0,
      userT: '',
      userAlphaBr: '',
      userAlphaSt: ''
    }
  },
  computed: {
    boltLengthOne: function () {
      let max = 188
      let min = 12
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    boltLengthTwo: function () {
      return 195 - this.boltLengthOne
    },
    chord: function () {
      return calcChord()
    },
    move: function () {
      return Math.round(1000 * (this.boltLengthOne - 100) * (1 - this.position / 5)) / 1000
    },
    bolt1: function () {
      return `${-110 + (this.boltLengthOne - 110)}` + ' 0'
    },
    bolt2: function () {
      return `${255 - 110 + (this.boltLengthOne - 110)}` + ' 0'
    },
    cote1: function () {
      return `${-113 + (this.boltLengthOne - 110)}` + ' 0'
    },
    cote2: function () {
      return `${257 - 110 + (this.boltLengthOne - 110)}` + ' 0'
    },
    coteLine1: function () {
      return `${-62 + (this.boltLengthOne + 110)}`
    },
    coteLine2: function () {
      return `${275 - 110 + (this.boltLengthOne - 110)}`
    },
    text1: function () {
      return `${-152 + (0.5 * this.boltLengthOne + 110)}`
    },
    text2: function () {
      return `${-152 + (0.5 * this.boltLengthOne + 110)}`
    },
    moveBolt1: function () {
      return 'translate(' + `${-120 + this.move}` + ',0)'
    },
    moveBolt2: function () {
      return 'translate(' + `${135 + this.move}` + ',0)'
    },
    moveLine1: function () {
      return 149 + this.move
    },
    moveLine2: function () {
      return 155 + this.move
    },
    gapText: function () {
      return `${-0 + (1 * (this.boltLengthOne - 110))}`
    },
    gapSize: function () {
      let max = 15
      let min = 5
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    initialTemperature: function () {
      let max = 30
      let min = 20
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    temperatureFinal: function () {
      return Math.round(100 * (this.initialTemperature + this.gapSize * 1e-6 / (19e-6 * this.boltLengthOne + 11e-6 * this.boltLengthTwo))) / 100
    },
    checkedUserAlphaBr: function () {
      let check
      console.log(19e-6 + ' : ' + parseFloat(this.userAlphaBr))
      check = parseFloat(19e-6) === parseFloat(this.userAlphaBr) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserAlphaSt: function () {
      let check
      console.log(11e-6 + ' : ' + parseFloat(this.userAlphaSt))
      check = parseFloat(11e-6) === parseFloat(this.userAlphaSt) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserT: function () {
      let check
      console.log(this.temperatureFinal + ' : ' + parseFloat(this.userT))
      check = parseFloat(this.temperatureFinal) === parseFloat(this.userT) ? 'correct' : 'not-correct'
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

function calcChord () {
  let d = ''
  let step = 8
  var i
  for (i = 0; i <= 30; i++) {
    d += `M${22 + i * step} 92 L${20 + i * step} 94 L${23 + i * step} 111 L${25 + i * step} 113 L${28 + i * step} 111 L${25 + i * step} 94 L${22 + i * step} 92 L${25 + i * step} 113 `
  }
  return d
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
