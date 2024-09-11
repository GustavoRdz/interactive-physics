<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Encuentre los puntos de intersección (si los hay) de la recta &ensp;
    p(style="margin: -5px 0 -30px 0; ").problem.center
      <span style="font-family: roboto; font-weight: bold; font-style: normal;">{{ A }}</span>
      <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;"> {{ B>0 ? " + " : " - " }}{{ B===""  ? " 0 " : Math.abs(B) }} </span>
      <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;"> {{ C>0 ? " + " : " - " }}{{ C===""  ? " 0 " : Math.abs(C) }} </span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span>.
    p.problem con la circunferencia
    p(style="margin: -5px 0 30px 0; ").problem.center
      <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
      <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;">{{ Cc>0 ? " + " : " - " }}{{ Cc===""  ? " 0 " : Math.abs(Cc) }}</span>
      <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;">{{ D>0 ? " + " : " - " }}{{ D===""  ? " 0 " : Math.abs(D) }}</span>
      <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;">{{ E>0 ? " + " : " - " }}{{ E===""  ? " 0 " : Math.abs(E) }}</span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span>
    .center
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300px" width="600px" >
        //- <rect x="10" y="10" width="1040" height="490" fill="none" stroke="#000" />
        <!-- x grid -->
        //- <line v-for="x in [12, 50, 88, 126, 164, 202, 240, 278, 316, 354, 392, 430, 468, 506, 544, 582, 620, 658, 696]" fill="none" stroke="#000" stroke-width="0.5" :x1="x" y1="7" :x2="x" y2="470" stroke-linecap="round"/>
        <line v-for="x in xScale" fill="none" stroke="#000" stroke-width="0.2" :x1="x" y1="0" :x2="x" y2="300" stroke-linecap="round"/>
        <!-- x scale bold -->
        //- <line v-for="x in [50, 202, 354, 506, 658]" fill="none" stroke="#000" stroke-width="3" :x1="x" y1="10" :x2="x" y2="390" stroke-linecap="round"/>
        <!-- y grid -->
        <line v-for="y in yScale" fill="none" stroke="#000" stroke-width="0.2" x1="0" :y1="y" x2="300" :y2="y" stroke-linecap="round"/>
        //- <line v-for="y in [10, 48, 86, 124, 162, 200, 238, 276, 314, 352, 390, 428, 466]" fill="none" stroke="#000" stroke-width="0.5" x1="7" :y1="y" x2="700" :y2="y" stroke-linecap="round"/>
        
        <!-- x Axis -->
        <path d="M0 150 l300 0 l-10 5 l10 -5 l-10 -5" stroke="#000" fill="none" stroke-opacity="1" stroke-width="1" ></path>
        <text x="285" y="169" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="italic">x</text>

        <!-- y Axis -->
        <path d="M150 300 l0 -300 l-5 10 l5 -10 l5 10" stroke="#000" fill="none" stroke-opacity="1" stroke-width="1" ></path>
        <text x="133" y="13" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="italic">y</text>
              
        <text x="132" y="168" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> O </text>
        
        <!-- plots -->
        <line v-if="showLineA && showLineB && showLineC" :x1="xl1a" :y1="yl1a" :x2="xl1b" :y2="yl1b" fill="none" stroke="#FF0" stroke-width="4" stroke-linecap="round"/>
        <line :x1="xl1a" :y1="yl1a" :x2="xl1b" :y2="yl1b" fill="none" stroke="#F00" stroke-width="2" stroke-linecap="round"/>
        <line v-if="showLineAp && showLineBp && showLineCp" :x1="xl2a" :y1="yl2a" :x2="xl2b" :y2="yl2b" fill="none" stroke="#FF0" stroke-width="4" stroke-linecap="round"/>
        <line :x1="xl2a" :y1="yl2a" :x2="xl2b" :y2="yl2b" fill="none" stroke="#00F" stroke-width="2" stroke-linecap="round"/>
        <!-- axis intersections line-->
        <circle r="2" cx="150" :cy="150 + delta*enterC/enterB"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle v-if="showLineA && showLineB && showLineC" r="2" cx="150" :cy="150 + delta*C/B"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle r="2" :cx="150 - delta*enterC/enterA" :cy="150"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle v-if="showLineA && showLineB && showLineC" r="2" :cx="150 - delta*C/A" :cy="150"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle r="2" cx="150" :cy="150 + delta*enterCp/enterBp"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle v-if="showLineAp && showLineBp && showLineCp" r="2" cx="150" :cy="150 + delta*Cp/Bp"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle r="2" :cx="150 - delta*enterCp/enterAp" :cy="150"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle v-if="showLineAp && showLineBp && showLineCp" r="2" :cx="150 - delta*Cp/Ap" :cy="150"  fill="#000" stroke="#000" stroke-width="1"/>
        <!-- interseccion lines -->
        <circle v-if="showCircleXi && showCircleYi" r="4" :cx="xi" :cy="yi"  fill="#FF0" stroke="#000" stroke-width="1"/>
        <circle r="2" :cx="150 + delta * enterX1" :cy="150 - delta * enterY1"  fill="#000" stroke="#000" stroke-width="1"/>
        
        <!-- circle -->
        <circle v-if="showCircleR && showCircleH && showCircleK" :r="r" :cx="h" :cy="k"  fill="none" stroke="#0F0" stroke-width="4"/>
        <circle :r="r" :cx="h" :cy="k"  fill="none" stroke="#0F0" stroke-width="1"/>
        <circle :r="delta * enterR" :cx="150 + delta * enterH" :cy="150 - delta * enterK"  fill="none" stroke="#000" stroke-width="2"/>
        <!-- center -->
        <circle v-if="showCircleH && showCircleK" r="4" :cx="h" :cy="k"  fill="#FF0" stroke="#000" stroke-width="1"/>
        <circle r="2" :cx="150+delta*enterH" :cy="150-delta*enterK"  fill="#000" stroke="#000" stroke-width="1"/>
        <!-- axis intersections circle -->
        
        <circle r="2" :cx="150" :cy="x0y1"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle r="2" :cx="150" :cy="x0y2"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle r="2" :cx="y0x1" :cy="150"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle r="2" :cx="y0x2" :cy="150"  fill="#000" stroke="#000" stroke-width="1"/>
        
        <circle r="2" :cx="xi1" :cy="yi1"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle r="2" :cx="xi2" :cy="yi2"  fill="#000" stroke="#000" stroke-width="1"/>
        <line :x1="xl1a" :y1="yl1a" :x2="xl1b" :y2="yl1b" fill="none" stroke="#F00" stroke-width="2" stroke-linecap="round"/>
        //- <circle r="2" :cx="150 + delta * enterH" :cy="150 - delta * enterK"  fill="#000" stroke="#000" stroke-width="1"/>
        //- <circle r="2" cx="150" :cy="x0y1"  fill="#000" stroke="#000" stroke-width="1"/>
        //- <circle r="2" cx="150" :cy="x0y2"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle r="2" :cx="150 + delta*enterX1" :cy="150 - delta*enterY1"  fill="#000" stroke="#000" stroke-width="1"/>
        //- <circle r="2" :cx="150 + delta * enterX2" :cy="150 - delta * enterY2"  fill="#000" stroke="#000" stroke-width="1"/>
        //- <circle :r="rEnter" :cx="354 - 19 * enterC" :cy="238 + 19 * enterD"  fill="none" stroke="#0F0" stroke-width="8" opacity="0.2"/>
         <g transform="translate(300, 0)">    
           <text x="0" y="30" font-size="15" fill="#F00" font-weight="bold" font-family="Times">(<tspan style="font-style: italic;">x - h</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan>&ensp;+&ensp;(<tspan style="font-style: italic;">y - k</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> = <tspan style="font-style: italic;">r</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan></text>
        
           <text x="0" y="60" font-size="15" fill="#000" font-weight="bold" font-family="Times">(<tspan style="font-style: italic;">x {{ parseFloat(enterH)>0 ? " - " : " + " }}{{ enterH===""  ? " 0 " : Math.abs(enterH) }}</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan>&ensp;+&ensp;(<tspan style="font-style: italic;">y{{ parseFloat(enterK)>0 ? " - " : " + " }}{{ enterK===""  ? " 0 " : Math.abs(enterK) }}</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> = <tspan style="font-style: italic;">{{ enterR===""  ? " 0 " : enterR }}</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan></text>
         
        </g>


      </svg>
    //- p.center Xi1={{ Xi1 }},Yi1={{ Yi1 }}, <br>Xi2={{ Xi2 }},Yi2={{ Yi2 }} <br>{{ Yi }}, Yi {{ yi }} <br> r {{ R }}  
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data A
        input.center.data(:class="checkedA" v-model.number='enterA')
        <span class="error" v-if="errorA">[e: {{ errorA.toPrecision(3) }}%]</span>
      p.inline.data B
        input.center.data(:class="checkedB" v-model.number='enterB')
        <span class="error" v-if="errorB">[e: {{ errorB.toPrecision(3) }}%]</span>
      p.inline.data C (línea)
        input.center.data(:class="checkedC" v-model.number='enterC')
        <span class="error" v-if="errorC">[e: {{ errorC.toPrecision(3) }}%]</span>
      p.inline.data C (circulo)
        input.center.data(:class="checkedCc" v-model.number='enterCc')
        <span class="error" v-if="errorCc">[e: {{ errorCc.toPrecision(3) }}%]</span>
      p.inline.data D
        input.center.data(:class="checkedD" v-model.number='enterD')
        <span class="error" v-if="errorD">[e: {{ errorD.toPrecision(3) }}%]</span>
      p.inline.data E
        input.center.data(:class="checkedE" v-model.number='enterE')
        <span class="error" v-if="errorE">[e: {{ errorE.toPrecision(3) }}%]</span>
      p.inline.data X1 (cruce)
        input.center.data(:class="checkedX1" v-model.number='enterX1')
        <span class="error" v-if="errorX1">[e: {{ errorX1.toPrecision(3) }}%]</span>
      p.inline.data Y1 (cruce)
        input.center.data(:class="checkedY1" v-model.number='enterY1')
        <span class="error" v-if="errorY1">[e: {{ errorY1.toPrecision(3) }}%]</span>
      p.inline.data X2 (cruce)
        input.center.data(:class="checkedX2" v-model.number='enterX2')
        <span class="error" v-if="errorX2">[e: {{ errorX2.toPrecision(3) }}%]</span>
      p.inline.data Y2 (cruce)
        input.center.data(:class="checkedY2" v-model.number='enterY2')
        <span class="error" v-if="errorY2">[e: {{ errorY2.toPrecision(3) }}%]</span>
      </template> 

<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterA: '',
      errorA: 0,
      enterB: '',
      errorB: 0,
      enterC: '',
      errorC: 0,
      enterCc: '',
      errorCc: 0,
      enterD: '',
      errorD: 0,
      enterE: '',
      errorE: 0,
      enterX1: '',
      errorX1: 0,
      enterY1: '',
      errorY1: 0,
      enterX2: '',
      errorX2: 0,
      enterY2: '',
      errorY2: 0,
      points: 30
    }
  },
  computed: {
    A: function () {
      console.clear()
      let max = 10
      let min = -10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    B: function () {
      let max = 10
      let min = -10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    C: function () {
      let max = 10
      let min = -10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    Cc: function () {
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
      return -this.Cc / 2
    },
    h: function () {
      return 150 + this.delta * this.H
    },
    K: function () {
      return -this.D / 2
    },
    k: function () {
      return 150 - this.delta * this.K
    },
    R: function () {
      return Math.sqrt(-4 * this.E + this.Cc ** 2 + this.D ** 2) / 2
    },
    r: function () {
      return this.delta * this.R
    },
    Ap: function () {
      return this.B
    },
    Bp: function () {
      return -this.A
    },
    Cp: function () {
      return this.A * this.K - this.B * this.H
    },
    Xi1: function () {
      let a = 1 + this.A ** 2 / this.B ** 2
      let b = 2 * this.A * this.C / this.B ** 2 - this.A * this.D / this.B + this.Cc
      let c = this.C ** 2 / this.B ** 2 - this.D * this.C / this.B + this.E
      return (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
    },
    xi1: function () {
      return 150 + this.delta * this.Xi1
    },
    Yi1: function () {
      return -this.A * this.Xi1 / this.B - this.C / this.B
    },
    yi1: function () {
      return 150 - this.delta * this.Yi1
    },
    Xi2: function () {
      let a = 1 + this.A ** 2 / this.B ** 2
      let b = 2 * this.A * this.C / this.B ** 2 - this.A * this.D / this.B + this.Cc
      let c = this.C ** 2 / this.B ** 2 - this.D * this.C / this.B + this.E
      return (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
    },
    xi2: function () {
      return 150 + this.delta * this.Xi2
    },
    Yi2: function () {
      return -this.A * this.Xi2 / this.B - this.C / this.B
    },
    yi2: function () {
      return 150 - this.delta * this.Yi2
    },
    X1: function () {
      return this.H
    },
    x1: function () {
      return 150 + this.delta * this.X1
    },
    Y1: function () {
      return 0
    },
    y1: function () {
      return 150 - this.delta * this.Y1
    },
    X0Y1: function () {
      return this.enterK + Math.sqrt(this.enterR ** 2 - this.enterH ** 2)
    },
    x0y1: function () {
      return 150 - this.delta * this.X0Y1
    },
    X0Y2: function () {
      return this.enterK - Math.sqrt(this.enterR ** 2 - this.enterH ** 2)
    },
    x0y2: function () {
      return 150 - this.delta * this.X0Y2
    },
    Y0X1: function () {
      return this.enterH + Math.sqrt(this.enterR ** 2 - this.enterK ** 2)
    },
    y0x1: function () {
      return 150 + this.delta * this.Y0X1
    },
    Y0X2: function () {
      return this.enterH - Math.sqrt(this.enterR ** 2 - this.enterK ** 2)
    },
    y0x2: function () {
      return 150 + this.delta * this.Y0X2
    },
    Xl1a: function () {
      return -15
    },
    xl1a: function () {
      return 150 + this.delta * this.Xl1a
    },
    Yl1a: function () {
      return -this.enterA * this.Xl1a / this.enterB - this.enterC / this.enterB
    },
    yl1a: function () {
      return 150 - this.delta * this.Yl1a
    },
    Xl1b: function () {
      return 15
    },
    xl1b: function () {
      return 150 + this.delta * this.Xl1b
    },
    Yl1b: function () {
      return -this.enterA * this.Xl1b / this.enterB - this.enterC / this.enterB
    },
    yl1b: function () {
      return 150 - this.delta * this.Yl1b
    },
    Xl2a: function () {
      return -15
    },
    xl2a: function () {
      return 150 + this.delta * this.Xl2a
    },
    Yl2a: function () {
      return -this.enterAp * this.Xl2a / this.enterBp - this.enterCp / this.enterBp
    },
    yl2a: function () {
      return 150 - this.delta * this.Yl2a
    },
    Xl2b: function () {
      return 15
    },
    xl2b: function () {
      return 150 + this.delta * this.Xl2b
    },
    Yl2b: function () {
      return -this.enterAp * this.Xl2b / this.enterBp - this.enterCp / this.enterBp
    },
    yl2b: function () {
      return 150 - this.delta * this.Yl2b
    },
    delta: function () {
      return 300 / (this.points + 0)
    },
    xScale: function () {
      let xs = []
      for (var j = 0; j < this.points + 1; j++) {
        xs[j] = -0 + j * this.delta
      }
      return xs
    },
    yScale: function () {
      let ys = []
      for (var j = 0; j < this.points + 1; j++) {
        ys[j] = -0 + j * this.delta
      }
      return ys
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
    checkedA: function () {
      this.errorA = this.errorRelative('A => ', this.A, parseFloat(this.enterA))
      this.showLineA = this.errorA < 1e-1
      return this.errorA < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedB: function () {
      this.errorB = this.errorRelative('B => ', this.B, parseFloat(this.enterB))
      this.showLineB = this.errorB < 1e-1
      return this.errorB < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedC: function () {
      this.errorC = this.errorRelative('C => ', this.C, parseFloat(this.enterC))
      this.showLineC = this.errorC < 1e-1
      return this.errorC < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAp: function () {
      this.errorAp = this.errorRelative('Ap => ', this.Ap, parseFloat(this.enterAp))
      this.showLineAp = this.errorAp < 1e-1
      return this.errorAp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedBp: function () {
      this.errorBp = this.errorRelative('Bp => ', this.Bp, parseFloat(this.enterBp))
      this.showLineBp = this.errorBp < 1e-1
      return this.errorBp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedCp: function () {
      this.errorCp = this.errorRelative('Cp => ', this.Cp, parseFloat(this.enterCp))
      this.showLineCp = this.errorCp < 1e-1
      return this.errorCp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedX1: function () {
      this.errorX1 = this.errorRelative('X1 => ', this.Xi, parseFloat(this.enterX1))
      this.showCircleXi = this.errorX1 < 1e-1
      return this.errorX1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedY1: function () {
      this.errorY1 = this.errorRelative('Y1 => ', this.Yi, parseFloat(this.enterY1))
      this.showCircleYi = this.errorY1 < 1e-1
      return this.errorY1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedR: function () {
      this.errorR = this.errorRelative('r => ', this.R, parseFloat(this.enterR))
      this.showCircleR = this.errorR < 1e-1
      return this.errorR < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedH: function () {
      this.errorH = this.errorRelative('h => ', this.H, parseFloat(this.enterH))
      this.showCircleH = this.errorH < 1e-1
      return this.errorH < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedK: function () {
      this.errorK = this.errorRelative('k => ', this.K, parseFloat(this.enterK))
      this.showCircleK = this.errorK < 1e-1
      return this.errorK < 1e-1 ? 'correct' : 'not-correct'
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
