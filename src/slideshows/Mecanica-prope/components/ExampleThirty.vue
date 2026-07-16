<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Determine qué lugar geométrico representa la ecuación
    p(style="margin-top: -0px; color: blue;").center 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">+</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> {{ C>0 ? " + " : " - " }}{{ C===""  ? " 0 " : Math.abs(C) }} </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> {{ D>0 ? " + " : " - " }}{{ D===""  ? " 0 " : Math.abs(D) }} </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> {{ E>0 ? " + " : " - " }}{{ E===""  ? " 0 " : Math.abs(E) }} </span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span>

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
        <circle r="8" :cx="h" :cy="k" fill="#0F0" stroke="#000" stroke-width="1" opacity="0.2"/>
        //- <circle r="8" :cx="x1" :cy="y1" fill="#0FF" stroke="#000" stroke-width="1"/>
        //- <circle r="8" :cx="x2" :cy="y2" fill="#0FF" stroke="#000" stroke-width="1"/>
        <circle r="4" :cx="354 + 38 * enterH" :cy="238 - 38 * enterK"  fill="#000" stroke="#000" stroke-width="1"/>
        //- <circle r="4" :cx="354 + 38 * enterX1" :cy="238 - 38 * enterY1"  fill="#000" stroke="#000" stroke-width="1"/>
        //- <circle r="4" :cx="354 + 38 * enterX2" :cy="238 - 38 * enterY2"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle :r="rEnter" :cx="354 - 19 * enterC" :cy="238 + 19 * enterD"  fill="none" stroke="#0F0" stroke-width="8" opacity="0.2"/>
        <circle :r="38 * enterR" :cx="354 + 38 * enterH" :cy="238 - 38 * enterK"  fill="none" stroke="#000" stroke-width="3"/>
         <g transform="translate(750, 0)">    
         <text x="0" y="30" font-size="30" fill="#F00" font-weight="bold" font-family="Times">(<tspan style="font-style: italic;">x - h</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan>&ensp;+&ensp;(<tspan style="font-style: italic;">y - k</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> = <tspan style="font-style: italic;">r</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan></text>
        
         <text x="0" y="70" font-size="30" fill="#000" font-weight="bold" font-family="Times">(<tspan style="font-style: italic;">x {{ parseFloat(enterH)>0 ? " - " : " + " }}{{ enterH===""  ? " 0 " : Math.abs(enterH) }}</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan>&ensp;+&ensp;(<tspan style="font-style: italic;">y{{ parseFloat(enterK)>0 ? " - " : " + " }}{{ enterK===""  ? " 0 " : Math.abs(enterK) }}</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> = <tspan style="font-style: italic;">{{ enterR===""  ? " 0 " : enterR }}</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan></text>
         
        </g>


      </svg>
    //- p {{ R }},m {{ rEnter }}
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data C
        input.center.data(:class="checkedC" v-model.number='enterC')
        <span class="error" v-if="errorC">[e: {{ errorC.toPrecision(3) }}%]</span>
      p.inline.data D
        input.center.data(:class="checkedD" v-model.number='enterD')
        <span class="error" v-if="errorD">[e: {{ errorD.toPrecision(3) }}%]</span>
      p.inline.data E
        input.center.data(:class="checkedE" v-model.number='enterE')
        <span class="error" v-if="errorE">[e: {{ errorE.toPrecision(3) }}%]</span>
      p.inline.data h
        input.center.data(:class="checkedH" v-model.number='enterH')
        <span class="error" v-if="errorH">[e: {{ errorH.toPrecision(3) }}%]</span>
      p.inline.data k
        input.center.data(:class="checkedK" v-model.number='enterK')
        <span class="error" v-if="errorK">[e: {{ errorK.toPrecision(3) }}%]</span>
      p.inline.data r
        input.center.data(:class="checkedR" v-model.number='enterR')
        <span class="error" v-if="errorR">[e: {{ errorR.toPrecision(3) }}%]</span>
      </template>

<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterC: '',
      errorC: 0,
      enterD: '',
      errorD: 0,
      enterE: '',
      errorE: 0,
      enterH: '',
      errorH: 0,
      enterK: '',
      errorK: 0,
      enterR: '',
      errorR: 0
    }
  },
  computed: {
    C: function () {
      console.clear()
      let max = 10
      let min = -10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    D: function () {
      let max = 10
      let min = -10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    E: function () {
      let max = 10
      let min = -10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    H: function () {
      return -this.C / 2
    },
    h: function () {
      return 354 + 38 * this.H
    },
    K: function () {
      return -this.D / 2
    },
    k: function () {
      return 238 - 38 * this.K
    },
    R: function () {
      return Math.sqrt(-4 * this.E + this.C ** 2 + this.D ** 2) / 2
    },
    r: function () {
      return 38 * this.R
    },
    Renter: function () {
      return Math.sqrt(-4 * this.enterE + this.enterC ** 2 + this.enterD ** 2) / 2
    },
    rEnter: function () {
      return 38 * this.Renter
    },
    checkedC: function () {
      this.errorC = this.errorRelative('C => ', this.C, parseFloat(this.enterC))
      return this.errorC < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedD: function () {
      this.errorD = this.errorRelative('D => ', this.D, parseFloat(this.enterD))
      return this.errorD < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedE: function () {
      this.errorE = this.errorRelative('E => ', this.E, parseFloat(this.enterE))
      return this.errorE < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedH: function () {
      this.errorH = this.errorRelative('h => ', this.H, parseFloat(this.enterH))
      return this.errorH < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedK: function () {
      this.errorK = this.errorRelative('k => ', this.K, parseFloat(this.enterK))
      return this.errorK < 1e-1 ? 'correct' : 'not-correct'
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
