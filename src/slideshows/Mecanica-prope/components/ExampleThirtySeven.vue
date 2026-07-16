<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Demuestre que las siguentes circunferencias son concéntricas
    p(style="margin: -5px 0 0px 0; ").problem.center
      <span style="font-family: roboto; font-weight: bold; font-style: normal;">{{ C===""  ? " 0 " : A }}</span>
      <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;">{{ D>0 ? " + " : " - " }}{{ D===""  ? " 0 " : Math.abs(D*A) }}</span>
      <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;">{{ C>0 ? " + " : " - " }}{{ C===""  ? " 0 " : Math.abs(C*A) }}</span>
      <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;">{{ A>0 ? " + " : " - " }}{{ A===""  ? " 0 " : Math.abs(A) }}</span>
      <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;">{{ E>0 ? " + " : " - " }}{{ E===""  ? " 0 " : Math.abs(E*A) }}</span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span>
    p(style="margin: 0px 0 0px 0; ").problem y
    p(style="margin: -5px 0 30px 0; ").problem.center
      <span style="font-family: roboto; font-weight: bold; font-style: normal;">{{ Cp===""  ? " 0 " : Cp*Ap }}</span>
      <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;">{{ Ap>0 ? " + " : " - " }}{{ Ap===""  ? " 0 " : Math.abs(Ap) }}</span>
      <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;">{{ Ep>0 ? " + " : " - " }}{{ Ep===""  ? " 0 " : Math.abs(Ep*Ap) }}</span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;">{{ Dp>0 ? " + " : " - " }}{{ Dp===""  ? " 0 " : Math.abs(Dp*Ap) }}</span>
      <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;">{{ Ap>0 ? " + " : " - " }}{{ Ap===""  ? " 0 " : Math.abs(Ap) }}</span>
      <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
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
        //- <line v-if="showLineA && showLineB && showLineC" :x1="xl1a" :y1="yl1a" :x2="xl1b" :y2="yl1b" fill="none" stroke="#FF0" stroke-width="4" stroke-linecap="round"/>
        //- <line :x1="xl1a" :y1="yl1a" :x2="xl1b" :y2="yl1b" fill="none" stroke="#F00" stroke-width="2" stroke-linecap="round"/>
        //- <line v-if="showLineAp && showLineBp && showLineCp" :x1="xl2a" :y1="yl2a" :x2="xl2b" :y2="yl2b" fill="none" stroke="#FF0" stroke-width="4" stroke-linecap="round"/>
        //- <line :x1="xl2a" :y1="yl2a" :x2="xl2b" :y2="yl2b" fill="none" stroke="#00F" stroke-width="2" stroke-linecap="round"/>
        <!-- axis intersections line-->
        //- <circle r="2" cx="150" :cy="150 + delta*enterC/enterB"  fill="#000" stroke="#000" stroke-width="1"/>
        //- <circle v-if="showLineA && showLineB && showLineC" r="2" cx="150" :cy="150 + delta*C/B"  fill="#000" stroke="#000" stroke-width="1"/>
        //- <circle r="2" :cx="150 - delta*enterC/enterA" :cy="150"  fill="#000" stroke="#000" stroke-width="1"/>
        //- <circle v-if="showLineA && showLineB && showLineC" r="2" :cx="150 - delta*C/A" :cy="150"  fill="#000" stroke="#000" stroke-width="1"/>
        //- <circle r="2" cx="150" :cy="150 + delta*enterCp/enterBp"  fill="#000" stroke="#000" stroke-width="1"/>
        //- <circle v-if="showLineAp && showLineBp && showLineCp" r="2" cx="150" :cy="150 + delta*Cp/Bp"  fill="#000" stroke="#000" stroke-width="1"/>
        //- <circle r="2" :cx="150 - delta*enterCp/enterAp" :cy="150"  fill="#000" stroke="#000" stroke-width="1"/>
        //- <circle v-if="showLineAp && showLineBp && showLineCp" r="2" :cx="150 - delta*Cp/Ap" :cy="150"  fill="#000" stroke="#000" stroke-width="1"/>
        <!-- interseccion lines -->
        //- <circle v-if="showCircleXi && showCircleYi" r="4" :cx="xi" :cy="yi"  fill="#FF0" stroke="#000" stroke-width="1"/>
        //- <circle r="2" :cx="150 + delta * enterX1" :cy="150 - delta * enterY1"  fill="#000" stroke="#000" stroke-width="1"/>
        
        <!-- circle 1-->
        //- <circle :r="r" :cx="h" :cy="k"  fill="none" stroke="#000" stroke-width="1"/>
        <circle v-if="showCircleH && showCircleK && showCircleR" :r="r" :cx="h" :cy="k"  fill="none" opacity="0.5" stroke="#0F0" stroke-width="4"/>
        <circle :r="intror" :cx="introH" :cy="introK"  fill="none" opacity="0.2" stroke="#000" stroke-width="2"/>
        <circle r="2" :cx="introH" :cy="introK"  fill="none" opacity="0.1" stroke="#000" stroke-width="2"/>
        <circle :r="delta * enterR" :cx="150+delta*enterH" :cy="150-delta*enterK"  fill="none" opacity="1" stroke="#000" stroke-width="1"/>
        <circle r="2" :cx="150+delta*enterH" :cy="150-delta*enterK"  fill="#000" opacity="1" stroke="#000" stroke-width="1"/>
        <!-- circle 2-->
        //- <circle :r="rp" :cx="h" :cy="k"  fill="none" stroke="#000" stroke-width="1"/>
        <circle v-if="showCircleHp && showCircleKp && showCircleRp" :r="rp" :cx="hp" :cy="kp"  fill="none" stroke="#0F0" stroke-width="4"/>
        <circle :r="introrp" :cx="introHp" :cy="introKp"  fill="none" opacity="0.2" stroke="#000" stroke-width="2"/>
        <circle r="2" :cx="introHp" :cy="introKp"  fill="none" opacity="0.1" stroke="#000" stroke-width="2"/>
        <circle :r="delta * enterRp" :cx="150+delta*enterHp" :cy="150-delta*enterKp"  fill="none" opacity="1" stroke="#000" stroke-width="1"/>
        <circle r="2" :cx="150+delta*enterHp" :cy="150-delta*enterKp"  fill="#000" opacity="1" stroke="#000" stroke-width="1"/>
        <!-- center -->
        //- <circle v-if="showCircleH && showCircleK" r="4" :cx="h" :cy="k"  fill="#FF0" stroke="#000" stroke-width="1"/>
        //- <circle r="2" :cx="150+delta*enterH" :cy="150-delta*enterK"  fill="#000" opacity="0.2" stroke="#000" stroke-width="1"/>

        <!-- axis intersections circle 1 -->
        <circle v-if="x0y1 > 0 && x0y1 < 300" r="2" :cx="150" :cy="x0y1"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle v-if="x0y2 > 0 && x0y2 < 300" r="2" :cx="150" :cy="x0y2"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle v-if="y0x1 < 0 && y0x1 < 300" r="2" :cx="y0x1" :cy="150"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle v-if="y0x2 > 0 && y0x2 < 300" r="2" :cx="y0x2" :cy="150"  fill="#000" stroke="#000" stroke-width="1"/>
        
        <!-- axis intersections circle 2 -->
        <circle v-if="x0y1 > 0 && x0y1 < 300" r="2" :cx="150" :cy="x0y1p"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle v-if="x0y1 > 0 && x0y1 < 300" r="2" :cx="150" :cy="x0y2p"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle v-if="x0y1 > 0 && x0y1 < 300" r="2" :cx="y0x1p" :cy="150"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle v-if="x0y1 > 0 && x0y1 < 300" r="2" :cx="y0x2p" :cy="150"  fill="#000" stroke="#000" stroke-width="1"/>
        
        //- <circle r="4" :cx="xi1" :cy="yi1"  fill="#F00" stroke="#000" opacity="0.2" stroke-width="1"/>
        //- <circle r="2" :cx="introH" :cy="introK"  fill="#000" stroke="#000" opacity="0.5" stroke-width="1"/>
        //- <circle v-if="showCircleXi1 && showCircleYi1" r="4" :cx="xi1" :cy="yi1"  fill="#0F0" stroke="#000" stroke-width="1"/>
        //- <circle r="2" :cx="150 + delta*enterX1" :cy="150 - delta*enterY1"  fill="#000" stroke="#000" stroke-width="1"/>
        //- <circle r="4" :cx="xi2" :cy="yi2"  fill="#F00" stroke="#000" opacity="0.2" stroke-width="1"/>
        //- <circle r="2" :cx="introHp" :cy="introKp"  fill="#000" stroke="#000" opacity="0.5" stroke-width="1"/>
        //- <circle v-if="showCircleXi2 && showCircleYi2" r="4" :cx="xi2" :cy="yi2"  fill="#0F0" stroke="#000" stroke-width="1"/>
        //- <circle r="2" :cx="150 + delta*enterX2" :cy="150 - delta*enterY2"  fill="#000" stroke="#000" stroke-width="1"/>

        <!-- segments between centers and intersecctions -->
        //- <line :x1="h" :y1="k" :x2="hp" :y2="kp" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        //- <line :x1="xi1" :y1="yi1" :x2="xi2" :y2="yi2" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        //- <circle r="2" :cx="h" :cy="k"  fill="#F00" stroke="#F00" stroke-width="1"/>
        //- <circle r="2" :cx="hp" :cy="kp"  fill="#F00" stroke="#F00" stroke-width="1"/>
        //- <circle r="2" :cx="150 + delta * X3" :cy="150 - delta * Y3"  fill="#F00" stroke="#F00" stroke-width="1"/>
        //- <circle r="2" :cx="xi1" :cy="yi1"  fill="#F00" stroke="#F00" stroke-width="1"/>
        //- <circle r="2" :cx="xi2" :cy="yi2"  fill="#F00" stroke="#F00" stroke-width="1"/>

         <g transform="translate(300, 0)">    
           <text x="0" y="30" font-size="15" fill="#F00" font-weight="bold" font-family="Times">(<tspan style="font-style: italic;">x - h</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan>&ensp;+&ensp;(<tspan style="font-style: italic;">y - k</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> = <tspan style="font-style: italic;">r</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan></text>
        
           <text x="0" y="60" font-size="15" fill="#000" font-weight="bold" font-family="Times">(<tspan style="font-style: italic;">x {{ parseFloat(enterH)>0 ? " - " : " + " }}{{ enterH===""  ? " 0 " : Math.abs(enterH) }}</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan>&ensp;+&ensp;(<tspan style="font-style: italic;">y{{ parseFloat(enterK)>0 ? " - " : " + " }}{{ enterK===""  ? " 0 " : Math.abs(enterK) }}</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> = <tspan style="font-style: italic;">{{ enterR===""  ? " 0 " : enterR }}</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan></text>
         
        </g>


      </svg>
    //- p.center H={{ H }}, K={{ K }}, R={{ R }}<br>Hp={{ Hp }}, Kp={{ Kp }}, Rp={{ Rp }} <br>C={{ C}}, D={{ D }} E={{ E }}<br> Cp={{ Cp }}, Dp={{ Dp }} Ep={{ Ep }}  
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
      p.inline.data C'
        input.center.data(:class="checkedCp" v-model.number='enterCp')
        <span class="error" v-if="errorCp">[e: {{ errorCp.toPrecision(3) }}%]</span>
      p.inline.data D'
        input.center.data(:class="checkedDp" v-model.number='enterDp')
        <span class="error" v-if="errorDp">[e: {{ errorDp.toPrecision(3) }}%]</span>
      p.inline.data E'
        input.center.data(:class="checkedEp" v-model.number='enterEp')
        <span class="error" v-if="errorEp">[e: {{ errorEp.toPrecision(3) }}%]</span>
      p.inline.data h
        input.center.data(:class="checkedH" v-model.number='enterH')
        <span class="error" v-if="errorH">[e: {{ errorH.toPrecision(3) }}%]</span>
      p.inline.data k
        input.center.data(:class="checkedK" v-model.number='enterK')
        <span class="error" v-if="errorK">[e: {{ errorK.toPrecision(3) }}%]</span>
      p.inline.data r
        input.center.data(:class="checkedR" v-model.number='enterR')
        <span class="error" v-if="errorR">[e: {{ errorR.toPrecision(3) }}%]</span>
      p.inline.data h'
        input.center.data(:class="checkedHp" v-model.number='enterHp')
        <span class="error" v-if="errorHp">[e: {{ errorHp.toPrecision(3) }}%]</span>
      p.inline.data k'
        input.center.data(:class="checkedKp" v-model.number='enterKp')
        <span class="error" v-if="errorKp">[e: {{ errorKp.toPrecision(3) }}%]</span>
      p.inline.data r'
        input.center.data(:class="checkedRp" v-model.number='enterRp')
        <span class="error" v-if="errorRp">[e: {{ errorRp.toPrecision(3) }}%]</span>
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
      enterCp: '',
      errorCp: 0,
      enterDp: '',
      errorDp: 0,
      enterEp: '',
      errorEp: 0,
      enterH: '',
      errorH: 0,
      enterK: '',
      errorK: 0,
      enterR: '',
      errorR: 0,
      enterHp: '',
      errorHp: 0,
      enterKp: '',
      errorKp: 0,
      enterRp: '',
      errorRp: 0,
      points: 30
    }
  },
  computed: {
    H: function () {
      console.clear()
      let max = 10
      let min = -10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    h: function () {
      return 150 + this.delta * this.H
    },
    K: function () {
      let max = 10
      let min = -10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    k: function () {
      return 150 - this.delta * this.K
    },
    R: function () {
      let max = 10
      let min = 2
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    r: function () {
      return this.delta * this.R
    },
    Rp: function () {
      let max = 10
      let min = 2
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    rp: function () {
      return this.delta * this.Rp
    },
    A: function () {
      let max = 10
      let min = -10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    C: function () {
      return -2 * this.H
    },
    D: function () {
      return -2 * this.K
    },
    E: function () {
      return this.H ** 2 + this.K ** 2 - this.R ** 2
    },
    Ap: function () {
      let max = 10
      let min = -10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    Cp: function () {
      return -2 * this.H
    },
    Dp: function () {
      return -2 * this.K
    },
    Ep: function () {
      return this.H ** 2 + this.K ** 2 - this.Rp ** 2
    },
    Hp: function () {
      return -this.Cp / 2
    },
    hp: function () {
      return 150 + this.delta * this.Hp
    },
    Kp: function () {
      return -this.Dp / 2
    },
    kp: function () {
      return 150 - this.delta * this.Kp
    },
    introH: function () {
      return 150 - this.delta * this.enterC / 2
    },
    introK: function () {
      return 150 + this.delta * this.enterD / 2
    },
    introR: function () {
      return Math.sqrt(-4 * this.enterE + this.enterC ** 2 + this.enterD ** 2) / 2
    },
    intror: function () {
      return this.delta * this.introR
    },
    introHp: function () {
      return 150 - this.delta * this.enterCp / 2
    },
    introKp: function () {
      return 150 + this.delta * this.enterDp / 2
    },
    introRp: function () {
      return Math.sqrt(-4 * this.enterEp + this.enterCp ** 2 + this.enterDp ** 2) / 2
    },
    introrp: function () {
      return this.delta * this.introRp
    },
    d: function () {
      return Math.sqrt((this.H - this.Hp) ** 2 + (this.K - this.Kp) ** 2)
    },
    a: function () {
      return (this.R ** 2 - this.Rp ** 2 + this.d ** 2) / (2 * this.d)
    },
    b: function () {
      return Math.sqrt(this.R ** 2 - this.a ** 2)
    },
    X3: function () {
      return this.H + (this.a / this.d) * (this.Hp - this.H)
    },
    Y3: function () {
      return this.K + (this.a / this.d) * (this.Kp - this.K)
    },
    Xi1: function () {
      return this.X3 + (this.b / this.d) * (this.Kp - this.K)
    },
    xi1: function () {
      return 150 + this.delta * this.Xi1
    },
    Yi1: function () {
      return this.Y3 - (this.b / this.d) * (this.Hp - this.H)
    },
    yi1: function () {
      return 150 - this.delta * this.Yi1
    },
    Xi2: function () {
      return this.X3 - (this.b / this.d) * (this.Kp - this.K)
    },
    xi2: function () {
      return 150 + this.delta * this.Xi2
    },
    Yi2: function () {
      return this.Y3 + (this.b / this.d) * (this.Hp - this.H)
    },
    yi2: function () {
      return 150 - this.delta * this.Yi2
    },
    X0Y1: function () {
      return this.K + Math.sqrt(this.R ** 2 - this.H ** 2)
    },
    x0y1: function () {
      return 150 - this.delta * this.X0Y1
    },
    X0Y2: function () {
      return this.K - Math.sqrt(this.R ** 2 - this.H ** 2)
    },
    x0y2: function () {
      return 150 - this.delta * this.X0Y2
    },
    Y0X1: function () {
      return this.H + Math.sqrt(this.R ** 2 - this.K ** 2)
    },
    y0x1: function () {
      return 150 + this.delta * this.Y0X1
    },
    Y0X2: function () {
      return this.H - Math.sqrt(this.R ** 2 - this.K ** 2)
    },
    y0x2: function () {
      return 150 + this.delta * this.Y0X2
    },
    X0Y1p: function () {
      return this.Kp + Math.sqrt(this.Rp ** 2 - this.Hp ** 2)
    },
    x0y1p: function () {
      return 150 - this.delta * this.X0Y1p
    },
    X0Y2p: function () {
      return this.Kp - Math.sqrt(this.Rp ** 2 - this.Hp ** 2)
    },
    x0y2p: function () {
      return 150 - this.delta * this.X0Y2p
    },
    Y0X1p: function () {
      return this.Hp + Math.sqrt(this.Rp ** 2 - this.Kp ** 2)
    },
    y0x1p: function () {
      return 150 + this.delta * this.Y0X1p
    },
    Y0X2p: function () {
      return this.Hp - Math.sqrt(this.Rp ** 2 - this.Kp ** 2)
    },
    y0x2p: function () {
      return 150 + this.delta * this.Y0X2p
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
    checkedC: function () {
      this.errorC = this.errorRelative('C => ', this.C, parseFloat(this.enterC))
      this.showCircleC = this.errorC < 1e-1
      return this.errorC < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedD: function () {
      this.errorD = this.errorRelative('D => ', this.D, parseFloat(this.enterD))
      this.showCircleD = this.errorD < 1e-1
      return this.errorD < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedE: function () {
      this.errorE = this.errorRelative('E => ', this.E, parseFloat(this.enterE))
      this.showCircleE = this.errorE < 1e-1
      return this.errorE < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedCp: function () {
      this.errorCp = this.errorRelative('Cp => ', this.Cp, parseFloat(this.enterCp))
      this.showCircleCp = this.errorCp < 1e-1
      return this.errorCp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDp: function () {
      this.errorDp = this.errorRelative('Dp => ', this.Dp, parseFloat(this.enterDp))
      this.showCircleDp = this.errorDp < 1e-1
      return this.errorDp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedEp: function () {
      this.errorEp = this.errorRelative('Ep => ', this.Ep, parseFloat(this.enterEp))
      this.showCircleEp = this.errorEp < 1e-1
      return this.errorEp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedH: function () {
      this.errorH = this.errorRelative('H => ', this.H, parseFloat(this.enterH))
      this.showCircleH = this.errorH < 1e-1
      return this.errorH < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedK: function () {
      this.errorK = this.errorRelative('K => ', this.K, parseFloat(this.enterK))
      this.showCircleK = this.errorK < 1e-1
      return this.errorK < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedR: function () {
      this.errorR = this.errorRelative('R => ', this.R, parseFloat(this.enterR))
      this.showCircleR = this.errorR < 1e-1
      return this.errorR < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedHp: function () {
      this.errorHp = this.errorRelative('Hp => ', this.Hp, parseFloat(this.enterHp))
      this.showCircleHp = this.errorHp < 1e-1
      return this.errorHp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedKp: function () {
      this.errorKp = this.errorRelative('Kp => ', this.Kp, parseFloat(this.enterKp))
      this.showCircleKp = this.errorKp < 1e-1
      return this.errorKp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedRp: function () {
      this.errorRp = this.errorRelative('Rp => ', this.Rp, parseFloat(this.enterRp))
      this.showCircleRp = this.errorRp < 1e-1
      return this.errorRp < 1e-1 ? 'correct' : 'not-correct'
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
