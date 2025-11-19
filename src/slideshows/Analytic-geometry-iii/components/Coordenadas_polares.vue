<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    //- p.problem Hallar la ecuación de la circunferencia que sea tangente al eje  <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>, tenga centro sobre el eje  <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span> y radio   <span style="font-family: roboto; font-weight: bold; font-style: italic;">r</span> = {{ R }}
    //- p {{ rayos }}
    .center
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300px" width="600px" >
        //- <rect x="10" y="10" width="1040" height="490" fill="none" stroke="#000" />
        <!-- x grid -->
        //- <line v-for="x in xScale" fill="none" stroke="#000" stroke-width="1.3" x1="0" y1="0" :x2="x" :y2="y" stroke-linecap="round"/>
        <!-- x grid short-->
        //- <line v-for="x in xScale" fill="none" stroke="#000" stroke-width="0.3" :x1="x" y1="144" :x2="x" y2="155" stroke-linecap="round"/>
        <!-- x scale bold -->
        //- <line v-for="x in [50, 202, 354, 506, 658]" fill="none" stroke="#000" stroke-width="3" :x1="x" y1="10" :x2="x" y2="390" stroke-linecap="round"/>
        <!-- y grid -->
        //- <line v-for="y in yScale" fill="none" stroke="#000" stroke-width="0.3" x1="0" :y1="y" x2="300" :y2="y" stroke-linecap="round"/>
        <!-- y grid short-->
        //- <line v-for="y in yScale" fill="none" stroke="#000" stroke-width="0.3" x1="145" :y1="y" x2="155" :y2="y" stroke-linecap="round"/>
        
        
        <!-- x Axis -->
        //- <path d="M0 150 l300 0 l-10 5 l10 -5 l-10 -5" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        <path d="M0 150 l300 0 l-10 5 l10 -5 l-10 -5" stroke="#000" fill="none" stroke-opacity="1" stroke-width="0.5" ></path>
        <text x="285" y="169" font-size="25" fill="grey" font-weight="bold" font-family="Times" font-style="italic">x</text>

        <!-- y Axis -->
        <path d="M150 300 l0 -300 l-5 10 l5 -10 l5 10" stroke="#000" fill="none" stroke-opacity="1" stroke-width="0.5" ></path>
        <text x="133" y="13" font-size="25" fill="grey" font-weight="bold" font-family="Times" font-style="italic">y</text>
              
        <text x="132" y="168" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> O </text>
        <text v-for="(pos, index) in labels" :x="pos[0]" :y="pos[1] - 4" font-size="15" fill="black" font-weight="bold" font-family="Times" font-style="italic"> {{ fracPiN[index] }} &pi; </text>
        <text v-for="(pos, index) in labels" :x="pos[0]" :y="pos[1] + 12" font-size="15" fill="black" font-weight="bold" font-family="Times" font-style="italic"> {{ fracPiD[index] }}</text>
        <line v-for="(pos, index) in labels" :x1="pos[0]-3" :y1="pos[1]" :x2="pos[0]+15" :y2="pos[1]" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round"/>
        
        <path :d="rayos" stroke="#000" fill="none" stroke-opacity="1" stroke-width="0.5" ></path>
        <circle v-for="radio in radios" :r="radio" cx="150" cy="150"  fill="none" stroke="black" stroke-width="0.5"/>
        <circle :r="3" :cx="150 + 20*r*Math.cos(theta*Math.PI/180)" :cy="150 +-20*r*Math.sin(theta*Math.PI/180)"  fill="red" stroke="#F00" stroke-width="2"/>
        <text :x="155 + 20*r*Math.cos(theta*Math.PI/180)" :y="150 - 20*r*Math.sin(theta*Math.PI/180)" font-size="20" fill="darkred" font-weight="bold" font-family="Times" font-style="normal"> ({{ r }}, {{ this.decimalAdjust('round', theta*Math.PI/180, -2) }}rad) </text>
        <!-- plots -->
        <!-- directriz -->
        //- <line v-if="enterPotencia == 2" x1="0" :y1="150 + deltaY*enterP" x2="300" :y2="150 + deltaY*enterP" fill="none" stroke="#555" stroke-width="3" stroke-linecap="round"/>
        //- <line v-if="enterPotencia == 1" :x1="150 - deltaX*enterP" y1="0" :x2="150 - deltaX*enterP" y2="300" fill="none" stroke="#555" stroke-width="3" stroke-linecap="round"/>
        
        <!-- Parabola -->
        //- <path v-if="enterPotencia == 2 || enterPotencia == 1" :d="parabola" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        
        <!-- f(p,0) -->
        //- <circle v-if="enterPotencia == 2" r="4" cx="150" :cy="150 - deltaY*enterP"  fill="#000" stroke="#F00" stroke-width="2"/>
        //- <circle v-if="enterPotencia == 1" r="4" :cx="150+deltaX*enterP" cy="150"  fill="#000" stroke="#F00" stroke-width="2"/>

        <!-- vertice -->
        //- <circle r="4" cx="150" cy="150"  fill="#00a" stroke="#00a" stroke-width="2"/>

        <!-- P(x,y) -->
        //- <circle r="4" cx="0" cy="0"  fill="#F00" stroke="#222" stroke-width="1">
        //-   <animate attributeName="cx" :values="parabolaX" dur="5" repeatCount="indefinite"/>
        //-   <animate attributeName="cy" :values="parabolaY" dur="5" repeatCount="indefinite"/>
        //- </circle>
        <!-- L(-p,y) -->
        //- <circle r="4" :cx="150 - deltaX*p" :cy="150 + deltaY*p"  fill="#000" stroke="#F00" stroke-width="2">
        //-   //- <animate attributeName="cy" :values="parabolaY" dur="5" repeatCount="indefinite"/>
        //-   <animate attributeName="cx" :values="parabolaX" dur="5" repeatCount="indefinite"/>
        //- </circle>

        <!-- Segmento FP -->
        //- <line x1="0" y1="150" x2="150" :y2="150 - deltaY*p" fill="none" stroke="#777" stroke-width="2" stroke-linecap="round">
        //-   <animate attributeName="x1" :values="parabolaX" dur="5" repeatCount="indefinite"/>
        //-   <animate attributeName="y1" :values="parabolaY" dur="5" repeatCount="indefinite"/>
        //- </line>
        <!-- Segmento LP -->
        //- <line :x1="0" y1="0" x2="0" :y2="150 + deltaY*p" fill="none" stroke="#777" stroke-width="2" stroke-linecap="round">
        //-   <animate attributeName="x1" :values="parabolaX" dur="5" repeatCount="indefinite"/>
        //-   <animate attributeName="x2" :values="parabolaX" dur="5" repeatCount="indefinite"/>
        //-   <animate attributeName="y1" :values="parabolaY" dur="5" repeatCount="indefinite"/>
        //- </line>
       
        <!-- texto f(p, 0) -->
        //- <text v-if="enterPotencia == 2" x="160" :y="140 - deltaY*enterP" font-size="20" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">f</tspan>(0, <tspan style="font-style: italic;">p</tspan>)</text>
        //- <text v-if="enterPotencia == 1" :x="130 + deltaX*enterP" y="170" font-size="20" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">f</tspan>(<tspan style="font-style: italic;">p</tspan>, 0)</text>
        
        <!-- ecuacion parabola -->
        //-  <text v-if="enterPotencia == 2" x="320" y="100" font-size="30" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan>&ensp;= 4<tspan style="font-size: 30px; font-style: italic;">py</tspan></text>

        //-  <text v-if="enterPotencia == 1" x="320" y="100" font-size="30" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan>&ensp;= 4<tspan style="font-size: 30px; font-style: italic;">px</tspan></text>

        <!-- texto p(x,y) -->
        //- <text x="0" y="0" font-size="20" fill="#00F" font-weight="bold" font-family="Times" style="font-style: italic;">P(<tspan style="font-style: italic;">x</tspan>,y)
        //-   <animate attributeName="x" :values="parabolaX" dur="5" repeatCount="indefinite"/>
        //-   <animate attributeName="y" :values="parabolaY" dur="5" repeatCount="indefinite"/>
        //- </text>   
        <!-- texto L(-p,y) -->
        //- <text v-if="enterPotencia == 2" x="170-deltaX*enterP" :y="170 + deltaY*enterP" font-size="20" fill="#00F" font-weight="bold" font-family="Times" style="font-style: italic;">L(x, <tspan style="font-style: italic;">-p</tspan>)
        //- </text>
        //- <text v-if="enterPotencia == 1" :x="160-deltaX*enterP" y="50 " font-size="20" fill="#00F" font-weight="bold" font-family="Times" style="font-style: italic;">L(<tspan style="font-style: italic;">-p</tspan>, x)
        //-   //- <animate attributeName="x" :values="parabolaX" dur="5" repeatCount="indefinite"/>
        //- </text>

        //-  <g transform="translate(-400,-85)">
        //-  <!-- Eje focal -->
        //-   <text x="370" y="185" font-size="25" fill="#00aa00" font-weight="bold" font-family="Pompiere" font-style="normal">Eje focal</text>
        //-   //- <path d="M400 190 c0 20 0 30 -40 20 l3 5 l-3 -5 l3 -5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        //-   <path d="M410 190 c30 30 30 10 30 40 l-3 -5 l3 5 l4 -5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        //- </g>
        //- <g transform="translate(-294,-85)">
        //-   <!-- vertice -->
        //-   <text x="400" y="180" font-size="25" fill="#0000aa" font-weight="bold" font-family="Pompiere" font-style="normal">Vertice</text>
        //-   //- <path d="M400 190 c0 20 0 30 -40 20 l3 5 l-3 -5 l3 -5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        //-   <path d="M410 190 c30 30 30 10 30 40 l-3 -5 l3 5 l4 -5" stroke="#0000aa" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        //- </g>
        
        //-   <!-- cuerda -->
        //- <line x1="260" y1="10" x2="230" y2="270" fill="#aaaa00" stroke="#aaaa00" stroke-width="3" stroke-linecap="round"/>
        //- <circle r="4" cx="260" cy="10"  fill="#aa0" stroke="#aa0" stroke-width="2"/>
        //- <circle r="4" cx="230" cy="270"  fill="#aa0" stroke="#aa0" stroke-width="2"/>
        //- <g transform="translate(-105,-110)">
        //-   <text x="400" y="180" font-size="25" fill="#aaaa00" font-weight="bold" font-family="Pompiere" font-style="normal">Cuerda</text>
        //-   <path d="M400 190 c0 20 0 30 -40 20 l3 5 l-3 -5 l3 -5" stroke="#aaaa00" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        //-   //- <path d="M410 190 c30 30 30 10 30 40 l-3 -5 l3 5 l4 -5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        //- </g>
        //-  <!-- Cuerda focal -->
        //-  <line x1="170" y1="90" x2="260" y2="290" fill="#00aaaa" stroke="#00aaaa" stroke-width="3" stroke-linecap="round"/>
        //- <circle r="4" cx="170" cy="90"  fill="#00aaaa" stroke="#00aaaa" stroke-width="2"/>
        //- <circle r="4" cx="260" cy="290"  fill="#00aaaa" stroke="#00aaaa" stroke-width="2"/>
        //- <g transform="translate(-100,60)">
        //-   <text x="400" y="180" font-size="25" fill="#00aaaa" font-weight="bold" font-family="Pompiere" font-style="normal">Cuerda focal</text>
        //-   <path d="M400 190 c0 20 0 30 -40 20 l3 5 l-3 -5 l3 -5" stroke="#00aaaa" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        //-   //- <path d="M410 190 c30 30 30 10 30 40 l-3 -5 l3 5 l4 -5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        //- </g>
        //-  <!-- Lado recto -->
        //-  <line x1="195" y1="60" x2="195" y2="240" fill="#aa00aa" stroke="#aa00aa" stroke-width="3" stroke-linecap="round"/>
        //- <circle r="4" cx="195" cy="60"  fill="#aa00aa" stroke="#aa00aa" stroke-width="2"/>
        //- <circle r="4" cx="195" cy="240"  fill="#aa00aa" stroke="#aa00aa" stroke-width="2"/>
        //- <g transform="translate(-160,15)">
        //-   <text x="400" y="180" font-size="25" fill="#aa00aa" font-weight="bold" font-family="Pompiere" font-style="normal">Lado recto</text>
        //-   <path d="M400 190 c0 20 0 30 -40 20 l3 5 l-3 -5 l3 -5" stroke="#aa00aa" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        //-   //- <path d="M410 190 c30 30 30 10 30 40 l-3 -5 l3 5 l4 -5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        //- </g>
        //-  <!-- Radio focal -->
        //- <line x1="195" y1="150" x2="240" y2="22" fill="#aaaaaa" stroke="#aaaaaa" stroke-width="3" stroke-linecap="round"/>
        //- <circle r="4" cx="240" cy="22"  fill="#aaaaaa" stroke="#aaaaaa" stroke-width="2"/>
        //- //- <circle r="4" cx="260" cy="290"  fill="#00aaaa" stroke="#00aaaa" stroke-width="2"/>
        //- <g transform="translate(-125,-155)">
        //-   <text x="400" y="180" font-size="25" fill="#aaaaaa" font-weight="bold" font-family="Pompiere" font-style="normal">Radio focal</text>
        //-   <path d="M400 190 c0 20 0 30 -40 20 l3 5 l-3 -5 l3 -5" stroke="#aaaaaa" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        //-   //- <path d="M410 190 c30 30 30 10 30 40 l-3 -5 l3 5 l4 -5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        //- </g>

      </svg>
      //- p(v-for="(pos, index) in labels") {{index}} *** {{ pos }} %%% {{ pos[0] }} -- {{ pos[1]}}
      //- p {{ p }} : {{ 10/39 }} : {{ 150 + 38 * (1 * 10 / 39) ** 2}}
      p(style="font-size:25px;") (r, &theta;) &rarr; (r cos(&theta;), rsen(&theta;)) = (x,y)
      p(style="font-size:25px;") (r, &theta;) = ({{ r }}, {{ thetaDeg }}) &rarr; ({{ r }}*cos({{ thetaDeg }}), {{ r }}*sen({{ thetaDeg }}))  &rarr; ({{ this.decimalAdjust('round', r*Math.cos(thetaDeg), -2) }}, {{ this.decimalAdjust('round', r*Math.sin(thetaDeg), -2)}}) = (x,y)
      //-p(style="font-size:25px;") (x, y) &rarr; (r, &theta;) &rarr; (r cos(&theta;), rsen(&theta;)) = (x,y)
      //-p(style="font-size:25px;") (r, &theta;) = ({{ r }}, {{ thetaDeg }}) &rarr; ({{ r }}*cos({{ thetaDeg }}), {{ r }}*sen({{ thetaDeg }}))  &rarr; ({{ this.decimalAdjust('round', r*Math.cos(thetaDeg), -2) }}, {{ this.decimalAdjust('round', r*Math.sin(thetaDeg), -2)}}) = (x,y)
      //- p {{ parabolaX }} ::: {{ parabolaY }}
      //- p {{ xScale }}, {{ yScale }}, {{ deltaX }}, {{ deltaY }}
    .center
      //- p.solution Introdusca los parametros
      //- p.inline.data <span style="font-family: Times;">¿Potencia de x?<br>(1 o 2)</span>
      //-   input.center.data(:class="checkedPotencia" v-model.number='enterPotencia')
      //-   //- <span class="error" v-if="errorX1">[e: {{ errorX1.toPrecision(3) }}%]</span>
      //- p.inline.data <span style="font-family: Times;">¿p?</span>
      //-   input.center.data(:class="checkedP" v-model.number='enterP')
        //- <span class="error" v-if="errorY1">[e: {{ errorY1.toPrecision(3) }}%]</span>

      </template>

<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterPotencia: '',
      enterP: '',
      pointsX: 8,
      pointsY: 8,
      parabolaX: '',
      parabolaY: '',
      rayosX: '',
      rayosY: '',
      angles: [0, Math.PI / 6, Math.PI / 3, Math.PI / 2, 2 * Math.PI / 3, 5 * Math.PI / 6, Math.PI, 7 * Math.PI / 6, 4 * Math.PI / 3, 3 * Math.PI / 2, 5 * Math.PI / 3, 11 * Math.PI / 6, 2 * Math.PI],
      fracPiN: ['0', '', '', '', '2', '5', '', '7', '4', '3', '5', '11', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      fracPiD: ['1', '6', '3', '2', '3', '6', '1', '6', '3', '2', '3', '6', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      radios: [20, 40, 60, 80, 100]
    }
  },
  computed: {
    r: function () {
      console.clear()
      let max = 1
      let min = 5
      return Math.round(Math.random() * (max - min + 1) + min) / 1
    },
    theta: function () {
      let max = 0
      let min = 360
      return Math.round(Math.random() * (max - min + 1) + min) / 1
    },
    thetaDeg: function () {
      return this.decimalAdjust('round', this.theta * Math.PI / 180, -2)
    },
    deltaX: function () {
      return Math.PI / (this.pointsX + 0)
    },
    deltaY: function () {
      return Math.PI / (this.pointsY + 0)
    },
    xScale: function () {
      let xs = []
      for (var j = 0; j < this.pointsX; j++) {
        xs[j] = 100 * Math.cos(j * this.deltaX)
      }
      return xs
    },
    yScale: function () {
      let ys = []
      for (var j = 0; j < this.pointsY; j++) {
        ys[j] = 100 * Math.sin(j * this.deltaY)
      }
      return ys
    },
    rayos () {
      let d = 'M150,150'
      // let angles = [0, Math.PI / 6, Math.PI / 3, Math.PI / 2, 2 * Math.PI / 3, 5 * Math.PI / 6, Math.PI, 7 * Math.PI / 6, 4 * Math.PI / 3, 3 * Math.PI / 2, 5 * Math.PI / 3, 11 * Math.PI / 6, 2 * Math.PI]
      let points = 13
      for (var j = 0; j < points - 1; j++) {
        // let x = 150 + 130 * Math.cos(this.deltaX * j)
        // let y = 150 - 130 * Math.sin(this.deltaY * j)
        let x = 150 + 130 * Math.cos(this.angles[j])
        let y = 150 - 130 * Math.sin(this.angles[j])
        d += ` L${150},${150}, ${x},${y} `
      }
      // d1 = d1 + ` ${ranges[i] + 30},90 ${ranges[i] + 50},90;`
      // }
      return d
    },
    labels () {
      let positionsX = []
      let positionsY = []
      let positions = []
      let points = 13
      for (var j = 0; j < points - 1; j++) {
        positionsX[j] = 150 + 115 * Math.cos(this.angles[j]) - 5
        positionsY[j] = 150 - 115 * Math.sin(this.angles[j])
        positions[j] = [positionsX[j], positionsY[j]]
      }
      return positions
    },
    parabola () {
      let d = ''
      // let ranges = [350, 342, 318, 282, 237, 188, 140, 98, 68, 52, 52, 68, 98, 140, 188, 237, 282, 318, 342, 350]
      // let ranges = [350, 342, 318, 282, 237, 188, 140, 98, 68, 52, 52, 68, 98, 140, 188, 237, 282, 318, 342, 350]
      // let ranges = [350, 335, 294, 233, 167, 106, 65, 50, 65, 106, 167, 233, 294, 335, 350]
      let points = 40
      // for (var i = 0; i < ranges.length; i++) {
      let d1 = '' // + `${150}, ${150} `
      let d2 = '' // + `${150}, ${150} `
      let period = this.pointsX // ranges[i] / 7
      let delta = period / (points - 1) // ranges[i] / (points + 0)
      let potencia = this.enterPotencia === 1 ? 0.5 : 2
      let coef = this.enterPotencia === 1 ? Math.sqrt(4 * Math.abs(this.enterP)) : 1 / (4 * Math.abs(this.enterP))
      coef = this.enterP < 0 ? -coef : coef
      // let coefY = this.enterPotencia === 1 ? Math.sqrt(4 * this.enterP) : 1
      for (var j = 0; j < points - 1; j++) {
        let xR = 150 + this.deltaX * (j * delta) * coef / Math.abs(coef)
        let xL = 150 - this.deltaX * (j * delta) * coef / Math.abs(coef)
        let yUp = 150 - this.deltaY * coef * (j * delta) ** potencia
        let yDn = 150 + this.deltaY * coef * (j * delta) ** potencia
        this.parabolaX += `${xR};`
        this.parabolaY += `${yUp};`
        d1 = this.enterPotencia === 1 ? d1 + `${xR},${yUp} ` : d1 + `${xR},${yUp} `
        d2 = this.enterPotencia === 1 ? d2 + `${xR},${yDn} ` : d2 + `${xL},${yUp} `
      }
      // d1 = d1 + ` ${ranges[i] + 30},90 ${ranges[i] + 50},90;`
      d = 'M' + d1 + ' M' + d2
      // }
      return d
    },
    checkedPotencia: function () {
      // this.errorH = this.errorRelative('h => ', this.H, parseFloat(this.enterH))
      return this.enterPotencia === 1 || this.enterPotencia === 2 ? 'correct' : 'not-correct'
    },
    checkedP: function () {
      // this.errorK = this.errorRelative('k => ', this.K, parseFloat(this.enterK))
      return Number(this.enterP) === 0 ? 'not-correct' : 'correct'
    }
  },
  methods: {
    errorRelative: function (comment, A, x) {
      let relativeError
      relativeError = 100 * Math.abs((A - x) / (A + Number.MIN_VALUE))
      console.log(comment + A + ' : ' + x + ' ==> ' + 'error  ' + relativeError + ' %')
      return relativeError
    },
    decimalAdjust: function (type, value, exp) {
    /**
     * Ajuste decimal de un número.
     *
     * @param {String}  tipo  El tipo de ajuste.
     * @param {Number}  valor El numero.
     * @param {Integer} exp   El exponente (el logaritmo 10 del ajuste base).
     * @returns {Number} El valor ajustado.
     */
      // function decimalAdjust (type, value, exp) {
        // Si el exp no está definido o es cero...
      if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value)
      }
      value = +value
      exp = +exp
      // Si el valor no es un número o el exp no es un entero...
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN
      }
      // Shift
      value = value.toString().split('e')
      value = Math[type](+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)))
      // Shift back
      value = value.toString().split('e')
      return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp))
      // }

      // // Decimal round
      // if (!Math.round10) {
      //   Math.round10 = function (value, exp) {
      //     return decimalAdjust('round', value, exp)
      //   }
      // }
      // // Decimal floor
      // if (!Math.floor10) {
      //   Math.floor10 = function (value, exp) {
      //     return decimalAdjust('floor', value, exp)
      //   }
      // }
      // // Decimal ceil
      // if (!Math.ceil10) {
      //   Math.ceil10 = function (value, exp) {
      //     return decimalAdjust('ceil', value, exp)
      //   }
      // }
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
