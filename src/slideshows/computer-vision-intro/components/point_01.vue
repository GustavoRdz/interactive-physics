<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  p.problem 2D point

    .center
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" height="300" width="500" >
        <g style="text-transform: none;">
          <rect x="0" y="0" width="500" height="300" fill="peru" stroke="#000" opacity="0.2"></rect>
          <line v-for="y in 29" x1="10" :y1="20*y" x2="490" :y2="20*y"stroke="#000" stroke-width="0.5" stroke-opacity="0.5"/>
          <line v-for="x in 24" :x1="20*x" y1="10" :x2="20*x" y2="290"stroke="#000" stroke-width="0.5" stroke-opacity="0.5"/>

          <line  x1="0" y1="0" x2="0" y2="250" stroke="#000">
            <animateTransform attributeName="transform" type="translate" from='0 0' to="60 10" begin="0s" dur="2s" fill="freeze"/>
          </line>
          <line  x1="0" y1="10" x2="5" y2="0" stroke="#000">
            <animateTransform attributeName="transform" type="translate" from='0 0' to="55 10" begin="0s" dur="3s" fill="freeze"/>
          </line>
          <line  x1="0" y1="0" x2="5" y2="10" stroke="#000">
            <animateTransform attributeName="transform" type="translate" from='0 0' to="60 10" begin="0s" dur="3s" fill="freeze"/>
          </line>
          <line  x1="0" y1="0" x2="250" y2="0" stroke="#000">
            <animateTransform attributeName="transform" type="translate" from='0 0' to="40 240" begin="0s" dur="2s" fill="freeze"/>
          </line>
          <line  x1="0" y1="5" x2="10" y2="0" stroke="#000">
            <animateTransform attributeName="transform" type="translate" from='0 0' to="280 240" begin="0s" dur="3s" fill="freeze"/>
          </line>
          <line  x1="0" y1="0" x2="10" y2="5" stroke="#000">
            <animateTransform attributeName="transform" type="translate" from='0 0' to="280 235" begin="0s" dur="3s" fill="freeze"/>
          </line>
        
          <g>
            <text x="0" y="0" font-size="25" font-family= "Times" font-style="italic" fill="black">y</text>
            <animateTransform attributeName="transform" type="translate" from='0 0' to="30, 30" begin="0s" dur="5s" fill="freeze"/>
          </g>
          <g>
            <text x="0" y="0" font-size="25" font-family= "Times" font-style="italic" fill="black">x</text>
            <animateTransform attributeName="transform" type="translate" from='0 0' to="260 270" begin="0s" dur="6s" fill="freeze"/>
          </g>

          <circle  cx="0" cy="0" r="3" fill="#F00">
            <animateTransform attributeName="transform" type="translate" from='500 0' to="160 140" begin="5s" dur="3s" fill="freeze"/>
          </circle>
          <line  x1="0" y1="0" x2="100" y2="0" stroke="#00F">
            <animateTransform attributeName="transform" type="translate" from='0 0' to="60 140" begin="5s" dur="3s" fill="freeze"/>
          </line>
          <line  x1="0" y1="0" x2="0" y2="100" stroke="#00F">
            <animateTransform attributeName="transform" type="translate" from='0 0' to="160 140" begin="5s" dur="3s" fill="freeze"/>
          </line>
          <g>
            <text x="0" y="0" font-size="25" font-family= "Times" fill="black">(</text>
            <text x="20" y="0" font-size="25" font-family= "Times" fill="black">,</text>
            <text x="40" y="0" font-size="25" font-family= "Times" fill="black">)</text>
            <text x="10" y="0" font-size="25" font-family= "Times" font-style="italic" fill="black">x</text>
            <text x="30" y="0" font-size="25" font-family= "Times" font-style="italic" fill="black">y</text>
            <animateTransform attributeName="transform" type="translate" from='0 0' to="165 140" begin="0s" dur="6s" fill="freeze"/>
          </g>
          

          //- <g>
          //-   <rect x="20" y="95" width="250" height="15" fill="silver" stroke="#000" stroke-opacity="0.5"></rect>
          //-   <path :d="chord" stroke="#000" fill="silver" stroke-opacity="0.5"></path>
          //-   <animateTransform attributeName="transform" type="translate" from='-150 0' :to="bolt1" begin="0s" dur="6s" fill="freeze"/>
          //- </g>

            //- bolt 2
          //- <g>
          //-   <rect x="18" y="95" width="250" height="15" fill="peru" stroke="#000" stroke-opacity="0.5"></rect>
          //-   <path :d="chord" stroke="#000" fill="peru" stroke-opacity="0.5"></path>
          //-   <animateTransform attributeName="transform" type="translate" from='140 0' :to="bolt2" begin="0s" dur="5s" fill="freeze"/>
          //- </g>

          //- <rect x="15" y="-1" width="8" height="210" fill="silver" stroke="#000" stroke-opacity="0.5"></rect>
          //- <rect x="277" y="-1" width="8" height="210" fill="silver" stroke="#000" stroke-opacity="0.5"></rect>

          //- //- bolt head 1
          //- <path d="M15 75 A15 25 0 0 0 15 130  Z" fill="white" ></path>
          //- <path d="M15 75 A15 25 0 0 0 0 90 L4 90 L4 100 L10 100 L10 106 L4 106 L4 115 L0 115 A15 25 0 0 0 15 130 Z" fill="silver" stroke="#000" stroke-opacity="0.5"></path>
          //- //- nut
          //- <rect x="23" y="78" width="10" height="50" fill="silver" stroke="#000" stroke-opacity="0.1"></rect>
          //- <path d="M23 78 l0 14 l2 2 l5 0 l3 -3 l0 -13  Z" fill="silver" stroke="#000" stroke-opacity="0.5"></path>
          //- <path d="M23 96 l2 -2 l5 0 l3 3 l0 12 l-3 3 l-5 0 l-2 -2 Z" fill="silver" stroke="#000" stroke-opacity="0.5"></path>
          //- <path d="M23 114 l2 -2 l5 0 l3 3 l0 13 l-10 0 Z" fill="silver" stroke="#000" stroke-opacity="0.5"></path>

          //- bolt head 2
          //- <path d="M285 75 A15 25 0 0 1 285 130 Z" fill="white"></path>
          //- <path d="M285 75 A15 25 0 0 1 300 98 L295 98 L295 106 L300 106 A15 25 0 0 1 285 130 Z" fill="peru" stroke="#000" stroke-opacity="0.5"></path>
          //- //- nut 2
          //- <rect x="267" y="78" width="10" height="50" fill="peru" stroke="#000" stroke-opacity="0.5"></rect>
          //- <path d="M267 78 l0 14 l2 2 l5 0 l3 -3 l0 -13  Z" fill="peru" stroke="#000" stroke-opacity="0.5"></path>
          //- <path d="M267 96 l2 -2 l5 0 l3 3 l0 12 l-3 3 l-5 0 l-2 -2 Z" fill="peru" stroke="#000" stroke-opacity="0.5"></path>
          //- <path d="M267 114 l2 -2 l5 0 l3 3 l0 13 l-10 0 Z" fill="peru" stroke="#000" stroke-opacity="0.5"></path>

          //- cotes
          //- <line  x1="273" y1="115" x2="273" y2="175" stroke="#000">
          //- <animateTransform attributeName="transform" type="translate" from='-160 0' :to="cote1" begin="0s" dur="5s" fill="freeze"/>
          //- </line>
          //- <line x1="16" y1="115" x2="16" y2="175" stroke="#000">
          //-   <animateTransform attributeName="transform" type="translate" from='150 0' :to="cote2" begin="0s" dur="5s" fill="freeze"/>
          //- </line>

          //- <line x1="25" y1="150" x2="30" y2="150"  stroke="#000">
          //-   <animate attributeName="x2" from='110' :to="coteLine1" begin="0s" dur="5s" fill="freeze"/>
          //- </line>
          //- <line x1="100" y1="150" x2="276" y2="150"  stroke="#000">
          //-   <animate attributeName="x1" from='170' :to="coteLine2" begin="0s" dur="5s" fill="freeze"/>
          //- </line>
     

       

        </g>
      </svg>
      //- .center
      //-   p.solution Please do calculations and introduce your results
      //-   p.inline.data <em>&#x03B1;</em><sub>br</sub> (K<sup>-1</sup>)
      //-     input.center.data(:class="checkedUserAlphaBr" v-model.number='userAlphaBr')
      //-   p.inline.data <em>&#x03B1;</em><sub>st</sub> (K<sup>-1</sup>)
      //-     input.center.data(:class="checkedUserAlphaSt" v-model.number='userAlphaSt')
      //-   p.inline.data Touch T (&#x00B0;C)
      //-     input.center.data(:class="checkedUserT" v-model.number='userT')

</template>
<script>
import eagle from 'eagle.js'

export default {
  data: function () {
    return {
      lineGridX: [10, 20, 30, 40],
      stepScrew: 8,
      temperature1: 100,
      temperature2: 0,
      opacity: 1,
      mat1: 0,
      mat2: 0,
      userT: '',
      userAlphaBr: '',
      userAlphaSt: '',
      materials: [
        {
          name: 'Aluminium',
          density: 2700,
          calorific: 910,
          fusion: 660,
          vapor: 2450,
          conductivity: 238,
          color: '#D7D7D9'
        },
        {
          name: 'Cooper',
          density: 8920,
          calorific: 390,
          fusion: 1083,
          vapor: 1187,
          conductivity: 397,
          color: '#B87333'
        },
        {
          name: 'Iron',
          density: 7800,
          calorific: 470,
          fusion: 1538,
          vapor: 2750,
          conductivity: 79.5,
          color: '#cBcDcD'
        },
        {
          name: 'Steel',
          density: 7800,
          calorific: 448,
          fusion: 1375,
          vapor: 2320,
          conductivity: 50.2,
          color: '#43464B'
        },
        {
          name: 'Brass',
          density: 8600,
          calorific: 380,
          fusion: 910,
          vapor: 2300,
          conductivity: 150,
          color: '#B5A642'
        },
        {
          name: 'Silver',
          density: 10500,
          calorific: 234,
          fusion: 960,
          vapor: 2193,
          conductivity: 406,
          color: '#c0c0c0'
        },
        {
          name: 'Lead',
          density: 11300,
          calorific: 128,
          fusion: 327,
          vapor: 1750,
          conductivity: 34.7,
          color: '#485048'
        },
        {
          name: 'Gold',
          density: 19300,
          calorific: 129,
          fusion: 1063,
          vapor: 2660,
          conductivity: 314,
          color: '#FFD700'
        },
        {
          name: 'Wood',
          density: 700,
          calorific: 1700,
          fusion: 0,
          vapor: 0,
          conductivity: 0.8 + 1,
          color: '#855E42'
        },
        {
          name: 'Glass',
          density: 2800,
          calorific: 837,
          fusion: 1040,
          vapor: 1300,
          conductivity: 0.8 + 1,
          color: '#c6e2e3'
        }
      ]
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
      let boltSteel = Math.round(100 * (0.025 * this.coteLine1 - 1)) / 100
      let boltBrass = Math.round(100 * (6 - 0.025 * this.coteLine1)) / 100
      return Math.round(100 * (this.initialTemperature + ((this.gapSize * 1e-6) / ((19e-6 * boltBrass / 100) + (11e-6 * boltSteel / 100))))) / 100
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
