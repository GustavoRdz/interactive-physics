<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Hallar la ecuación de la circunferencia que tiene centro en C({{ H }}, {{ K }}) y pasa por el punto P({{ X1 }}, {{ Y1 }}), trace la gráfica
    .center
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050 500" height="250px" width="750px" >
        //- <rect x="10" y="10" width="1040" height="490" fill="none" stroke="#000" />
        <!-- x grid -->
        <line v-for="x in [12, 50, 88, 126, 164, 202, 240, 278, 316, 354, 392, 430, 468, 506, 544, 582, 620, 658, 696]" fill="none" stroke="#000" stroke-width="0.5" :x1="x" y1="7" :x2="x" y2="470" stroke-linecap="round"/>
        <!-- x scale bold -->
        //- <line v-for="x in [50, 202, 354, 506, 658]" fill="none" stroke="#000" stroke-width="3" :x1="x" y1="10" :x2="x" y2="390" stroke-linecap="round"/>
        <!-- y grid -->
        <line v-for="y in [10, 48, 86, 124, 162, 200, 238, 276, 314, 352, 390, 428, 466]" fill="none" stroke="#000" stroke-width="0.5" x1="7" :y1="y" x2="700" :y2="y" stroke-linecap="round"/>
        
        <!-- x Axis -->
        <path d="M0 238 l698 0 l-10 5 l10 -5 l-10 -5" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        <text x="677" y="270" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic">x</text>

        <!-- y Axis -->
        <path d="M354 480 l0 -475 l-5 10 l5 -10 l5 10" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        <text x="330" y="28" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic">y</text>
              
        <text x="325" y="265" font-size="30" fill="black" font-weight="bold" font-family="Times" font-style="italic"> O </text>
        
        <!-- plots -->
        //- <line :x1="xl1a" :y1="yl1a" :x2="xl1b" :y2="yl1b" fill="none" stroke="#F00" stroke-width="2" stroke-linecap="round"/>
        //- <line :x1="xl2a" :y1="yl2a" :x2="xl2b" :y2="yl2b" fill="none" stroke="#0F0" stroke-width="2" stroke-linecap="round"/>
        //- <circle r="8" :cx="354 + 38 * enterX1" :cy="238 - 38 * enterY1"  fill="#00F" stroke="#000" stroke-width="1"/>
        //- <circle r="8" :cx="354 + 38 * enterX2" :cy="238 - 38 * enterY2"  fill="#00F" stroke="#000" stroke-width="1"/>
        //- <circle r="8" :cx="354 + 38 * enterX3" :cy="238 - 38 * enterY3"  fill="#0F0" stroke="#000" stroke-width="1"/>

        <path :d="circulo" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        
        //- <circle r="4" :cx="354 + 38 * ae" cy="238"  fill="#000" stroke="#000" stroke-width="1"/>
        //- <circle r="4" cx="354" :cy="238 - 38 * be"  fill="#000" stroke="#000" stroke-width="1"/>
        //- <circle r="4" :cx="354 + 38 * ap" cy="238"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle r="8" :cx="h" :cy="k"  fill="#0F0" stroke="#000" stroke-width="1"/>
        <circle r="8" :cx="x1" :cy="y1"  fill="#0F0" stroke="#000" stroke-width="1"/>
        <circle r="4" :cx="354 + 38 * enterH" :cy="238 - 38 * enterK"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle r="4" :cx="354 + 38 * enterX1" :cy="238 - 38 * enterY1"  fill="#000" stroke="#000" stroke-width="1"/>
         <g transform="translate(750, 0)">    
         <text x="0" y="30" font-size="30" fill="#F00" font-weight="bold" font-family="Times">(<tspan style="font-style: italic;">x - h</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan>&ensp;+&ensp;(<tspan style="font-style: italic;">y - k</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> = <tspan style="font-style: italic;">r</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan></text>
        
         <text x="0" y="70" font-size="30" fill="#000" font-weight="bold" font-family="Times">(<tspan style="font-style: italic;">x {{ parseFloat(enterH)>0 ? " - " : " + " }}{{ enterH===""  ? " 0 " : Math.abs(enterH) }}</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan>&ensp;+&ensp;(<tspan style="font-style: italic;">y{{ parseFloat(enterK)>0 ? " - " : " + " }}{{ enterK===""  ? " 0 " : Math.abs(enterK) }}</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> = <tspan style="font-style: italic;">{{ enterR===""  ? " 0 " : enterR }}</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan></text>
         
        </g>


      </svg>
    p {{ R }},m {{ r }}
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data h
        input.center.data(:class="checkedH" v-model.number='enterH')
        <span class="error" v-if="errorH">[e: {{ errorH.toPrecision(3) }}%]</span>
      p.inline.data k
        input.center.data(:class="checkedK" v-model.number='enterK')
        <span class="error" v-if="errorK">[e: {{ errorK.toPrecision(3) }}%]</span>
      p.inline.data X1
        input.center.data(:class="checkedX1" v-model.number='enterX1')
        <span class="error" v-if="errorX1">[e: {{ errorX1.toPrecision(3) }}%]</span>
      p.inline.data Y1
        input.center.data(:class="checkedY1" v-model.number='enterY1')
        <span class="error" v-if="errorY1">[e: {{ errorY1.toPrecision(3) }}%]</span>
      p.inline.data r
        input.center.data(:class="checkedR" v-model.number='enterR')
        <span class="error" v-if="errorR">[e: {{ errorR.toPrecision(3) }}%]</span>
      </template>

<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterH: '',
      errorH: 0,
      enterK: '',
      errorK: 0,
      enterX1: '',
      errorX1: 0,
      enterY1: '',
      errorY1: 0,
      enterR: '',
      errorR: 0
    }
  },
  computed: {
    H: function () {
      console.clear()
      let max = 5
      let min = -5
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    h: function () {
      return 354 + 38 * this.H
    },
    K: function () {
      let max = 5
      let min = -5
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    k: function () {
      return 238 - 38 * this.K
    },
    X1: function () {
      let max = 5
      let min = -5
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x1: function () {
      return 354 + 38 * this.X1
    },
    Y1: function () {
      let max = 5
      let min = -5
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    y1: function () {
      return 238 - 38 * this.Y1
    },
    R: function () {
      return Math.sqrt((this.X1 - this.H) ** 2 + (this.Y1 - this.K) ** 2)
    },
    r: function () {
      return 38 * this.R
    },
    circulo () {
      let d = ''
      // let ranges = [350, 342, 318, 282, 237, 188, 140, 98, 68, 52, 52, 68, 98, 140, 188, 237, 282, 318, 342, 350]
      // let ranges = [350, 342, 318, 282, 237, 188, 140, 98, 68, 52, 52, 68, 98, 140, 188, 237, 282, 318, 342, 350]
      // let ranges = [350, 335, 294, 233, 167, 106, 65, 50, 65, 106, 167, 233, 294, 335, 350]
      let points = 40
      // for (var i = 0; i < ranges.length; i++) {
      let d1 = 'M' + `${354 + 38 * this.enterH + 38 * this.enterR}, ${238 - 38 * this.enterK} `
      let period = 2 * Math.PI // ranges[i] / 7
      let delta = period / (points - 2) // ranges[i] / (points + 0)
      for (var j = 0; j < points - 1; j++) {
        d1 = d1 + `${354 + 38 * this.enterH + 38 * this.enterR * Math.cos(2 * Math.PI * delta * j / period)},${238 - 38 * this.enterK + 38 * this.enterR * Math.sin(2 * Math.PI * delta * j / period)} `
      }
      // d1 = d1 + ` ${ranges[i] + 30},90 ${ranges[i] + 50},90;`
      d = d + d1
      // }
      return d
    },
    checkedH: function () {
      this.errorH = this.errorRelative('h => ', this.H, parseFloat(this.enterH))
      return this.errorH < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedK: function () {
      this.errorK = this.errorRelative('k => ', this.K, parseFloat(this.enterK))
      return this.errorK < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedX1: function () {
      this.errorX1 = this.errorRelative('X1 => ', this.X1, parseFloat(this.enterX1))
      return this.errorX1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedY1: function () {
      this.errorY1 = this.errorRelative('Y1 => ', this.Y1, parseFloat(this.enterY1))
      return this.errorY1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedR: function () {
      this.errorR = this.errorRelative('r => ', this.R, parseFloat(this.enterR))
      return this.errorR < 1e-1 ? 'correct' : 'not-correct'
    }
  },
  methods: {
    errorRelative: function (comment, A, x) {
      let relativeError
      relativeError = 100 * Math.abs((A - x) / (A + Number.MIN_VALUE))
      console.log(comment + A + ' : ' + x + ' ==> ' + 'error  ' + relativeError + ' %')
      return relativeError
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
