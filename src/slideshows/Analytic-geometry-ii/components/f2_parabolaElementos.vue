<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    //- p.problem Hallar la ecuación de la circunferencia que sea tangente al eje  <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>, tenga centro sobre el eje  <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span> y radio   <span style="font-family: roboto; font-weight: bold; font-style: italic;">r</span> = {{ R }}
    .center
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300px" width="600px" >
        //- <rect x="10" y="10" width="1040" height="490" fill="none" stroke="#000" />
        <!-- x grid -->
        //- <line v-for="x in xScale" fill="none" stroke="#000" stroke-width="0.3" :x1="x" y1="0" :x2="x" y2="300" stroke-linecap="round"/>
        <!-- x grid short-->
        <line v-for="x in xScale" fill="none" stroke="#000" stroke-width="0.3" :x1="x" y1="144" :x2="x" y2="155" stroke-linecap="round"/>
        <!-- x scale bold -->
        //- <line v-for="x in [50, 202, 354, 506, 658]" fill="none" stroke="#000" stroke-width="3" :x1="x" y1="10" :x2="x" y2="390" stroke-linecap="round"/>
        <!-- y grid -->
        //- <line v-for="y in yScale" fill="none" stroke="#000" stroke-width="0.3" x1="0" :y1="y" x2="300" :y2="y" stroke-linecap="round"/>
        <!-- y grid short-->
        <line v-for="y in yScale" fill="none" stroke="#000" stroke-width="0.3" x1="145" :y1="y" x2="155" :y2="y" stroke-linecap="round"/>
        
        
        <!-- x Axis -->
        <path d="M0 150 l300 0 l-10 5 l10 -5 l-10 -5" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        <path d="M0 150 l300 0 l-10 5 l10 -5 l-10 -5" stroke="#0a0" fill="none" stroke-opacity="1" stroke-width="2" ></path>
        <text x="285" y="169" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="italic">x</text>

        <!-- y Axis -->
        <path d="M150 300 l0 -300 l-5 10 l5 -10 l5 10" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        <text x="133" y="13" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="italic">y</text>
              
        <text x="132" y="168" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> O </text>
        
        <!-- plots -->
        <!-- directriz -->
        <line :x1="150 - deltaX*p" y1="0" :x2="150 - deltaX*p" y2="300" fill="none" stroke="#555" stroke-width="3" stroke-linecap="round"/>
        
        <!-- Parabola -->
        <path :d="parabola" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        
        <!-- f(p,0) -->
        <circle r="4" :cx="150 + deltaX*p" cy="150"  fill="#000" stroke="#F00" stroke-width="2"/>

        <!-- vertice -->
        <circle r="4" cx="150" cy="150"  fill="#00a" stroke="#00a" stroke-width="2"/>

        <!-- P(x,y) -->
        //- <circle r="4" cx="0" cy="0"  fill="#F00" stroke="#222" stroke-width="1">
        //-   <animate attributeName="cx" :values="parabolaX" dur="5" repeatCount="indefinite"/>
        //-   <animate attributeName="cy" :values="parabolaY" dur="5" repeatCount="indefinite"/>
        //- </circle>
        <!-- L(-p,y) -->
        //- <circle r="4" :cx="150 - deltaX*p" cy="0"  fill="#000" stroke="#F00" stroke-width="2">
        //-   //- <animate attributeName="cx" :values="parabolaX" dur="5" repeatCount="indefinite"/>
        //-   <animate attributeName="cy" :values="parabolaY" dur="5" repeatCount="indefinite"/>
        //- </circle>

        <!-- Segmento FP -->
        //- <line x1="0" y1="150" :x2="150 + deltaX*p" y2="150" fill="none" stroke="#777" stroke-width="2" stroke-linecap="round">
        //-   <animate attributeName="x1" :values="parabolaX" dur="5" repeatCount="indefinite"/>
        //-   <animate attributeName="y1" :values="parabolaY" dur="5" repeatCount="indefinite"/>
        //- </line>
        <!-- Segmento LP -->
        //- <line :x1="0" y1="0" :x2="150 - 38*p" :y2="0" fill="none" stroke="#777" stroke-width="2" stroke-linecap="round">
        //-   <animate attributeName="x1" :values="parabolaX" dur="5" repeatCount="indefinite"/>
        //-   <animate attributeName="y1" :values="parabolaY" dur="5" repeatCount="indefinite"/>
        //-   <animate attributeName="y2" :values="parabolaY" dur="5" repeatCount="indefinite"/>
        //- </line>
       
        <!-- texto f(p, 0) -->
        <text :x="160 + deltaX*p" y="140" font-size="20" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">f</tspan>(<tspan style="font-style: italic;">p</tspan>,0)</text>
        //- <!-- texto p(x,y) -->
        //- <text x="0" y="0" font-size="20" fill="#00F" font-weight="bold" font-family="Times" style="font-style: italic;">p(<tspan style="font-style: italic;">x</tspan>,y)
        //-   //- <animate attributeName="x" :values="parabolaX" dur="5" repeatCount="indefinite"/>
        //-   //- <animate attributeName="y" :values="parabolaY" dur="5" repeatCount="indefinite"/>
        //- </text>   
        <!-- texto L(-p,y) -->
        <text :x="90-deltaX*p" y="50" font-size="20" fill="#00F" font-weight="bold" font-family="Times" style="font-style: italic;">L(<tspan style="font-style: italic;">-p</tspan>,y)
          //- <animate attributeName="y" :values="parabolaY" dur="5" repeatCount="indefinite"/>
        </text>

         <g transform="translate(-400,-85)">
         <!-- Eje focal -->
          <text x="370" y="185" font-size="25" fill="#00aa00" font-weight="bold" font-family="Pompiere" font-style="normal">Eje focal</text>
          //- <path d="M400 190 c0 20 0 30 -40 20 l3 5 l-3 -5 l3 -5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
          <path d="M410 190 c30 30 30 10 30 40 l-3 -5 l3 5 l4 -5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        </g>
        <g transform="translate(-294,-85)">
          <!-- vertice -->
          <text x="400" y="180" font-size="25" fill="#0000aa" font-weight="bold" font-family="Pompiere" font-style="normal">Vertice</text>
          //- <path d="M400 190 c0 20 0 30 -40 20 l3 5 l-3 -5 l3 -5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
          <path d="M410 190 c30 30 30 10 30 40 l-3 -5 l3 5 l4 -5" stroke="#0000aa" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        </g>
        
          <!-- cuerda -->
        <line x1="260" y1="10" x2="230" y2="270" fill="#aaaa00" stroke="#aaaa00" stroke-width="3" stroke-linecap="round"/>
        <circle r="4" cx="260" cy="10"  fill="#aa0" stroke="#aa0" stroke-width="2"/>
        <circle r="4" cx="230" cy="270"  fill="#aa0" stroke="#aa0" stroke-width="2"/>
        <g transform="translate(-105,-110)">
          <text x="400" y="180" font-size="25" fill="#aaaa00" font-weight="bold" font-family="Pompiere" font-style="normal">Cuerda</text>
          <path d="M400 190 c0 20 0 30 -40 20 l3 5 l-3 -5 l3 -5" stroke="#aaaa00" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
          //- <path d="M410 190 c30 30 30 10 30 40 l-3 -5 l3 5 l4 -5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        </g>
         <!-- Cuerda focal -->
         <line x1="170" y1="90" x2="260" y2="290" fill="#00aaaa" stroke="#00aaaa" stroke-width="3" stroke-linecap="round"/>
        <circle r="4" cx="170" cy="90"  fill="#00aaaa" stroke="#00aaaa" stroke-width="2"/>
        <circle r="4" cx="260" cy="290"  fill="#00aaaa" stroke="#00aaaa" stroke-width="2"/>
        <g transform="translate(-100,60)">
          <text x="400" y="180" font-size="25" fill="#00aaaa" font-weight="bold" font-family="Pompiere" font-style="normal">Cuerda focal</text>
          <path d="M400 190 c0 20 0 30 -40 20 l3 5 l-3 -5 l3 -5" stroke="#00aaaa" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
          //- <path d="M410 190 c30 30 30 10 30 40 l-3 -5 l3 5 l4 -5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        </g>
         <!-- Lado recto -->
         <line x1="195" y1="60" x2="195" y2="240" fill="#aa00aa" stroke="#aa00aa" stroke-width="3" stroke-linecap="round"/>
        <circle r="4" cx="195" cy="60"  fill="#aa00aa" stroke="#aa00aa" stroke-width="2"/>
        <circle r="4" cx="195" cy="240"  fill="#aa00aa" stroke="#aa00aa" stroke-width="2"/>
        <g transform="translate(-160,15)">
          <text x="400" y="180" font-size="25" fill="#aa00aa" font-weight="bold" font-family="Pompiere" font-style="normal">Lado recto</text>
          <path d="M400 190 c0 20 0 30 -40 20 l3 5 l-3 -5 l3 -5" stroke="#aa00aa" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
          //- <path d="M410 190 c30 30 30 10 30 40 l-3 -5 l3 5 l4 -5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        </g>
         <!-- Radio focal -->
        <line x1="195" y1="150" x2="240" y2="22" fill="#aaaaaa" stroke="#aaaaaa" stroke-width="3" stroke-linecap="round"/>
        <circle r="4" cx="240" cy="22"  fill="#aaaaaa" stroke="#aaaaaa" stroke-width="2"/>
        //- <circle r="4" cx="260" cy="290"  fill="#00aaaa" stroke="#00aaaa" stroke-width="2"/>
        <g transform="translate(-125,-155)">
          <text x="400" y="180" font-size="25" fill="#aaaaaa" font-weight="bold" font-family="Pompiere" font-style="normal">Radio focal</text>
          <path d="M400 190 c0 20 0 30 -40 20 l3 5 l-3 -5 l3 -5" stroke="#aaaaaa" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
          //- <path d="M410 190 c30 30 30 10 30 40 l-3 -5 l3 5 l4 -5" stroke="green" fill="none" stroke-opacity="0.8" stroke-width="2"></path>
        </g>

      </svg>
      //- p {{ p }} : {{ 10/39 }} : {{ 150 + 38 * (1 * 10 / 39) ** 2}}
      //- p {{ parabola }}
      //- p {{ parabolaX }} ::: {{ parabolaY }}
    //- p {{ xScale }}, {{ yScale }}, {{ deltaX }}, {{ deltaY }}
    .center
      //- p.solution Please do calculations and introduce your results
      //- p.inline.data X1
      //-   input.center.data(:class="checkedX1" v-model.number='enterX1')
      //-   <span class="error" v-if="errorX1">[e: {{ errorX1.toPrecision(3) }}%]</span>
      //- p.inline.data Y1
      //-   input.center.data(:class="checkedY1" v-model.number='enterY1')
      //-   <span class="error" v-if="errorY1">[e: {{ errorY1.toPrecision(3) }}%]</span>
      //- p.inline.data X2
      //-   input.center.data(:class="checkedX2" v-model.number='enterX2')
      //-   <span class="error" v-if="errorX2">[e: {{ errorX2.toPrecision(3) }}%]</span>
      //- p.inline.data Y3
      //-   input.center.data(:class="checkedY2" v-model.number='enterY2')
      //-   <span class="error" v-if="errorY2">[e: {{ errorY2.toPrecision(3) }}%]</span>
      //- p.inline.data r
      //-   input.center.data(:class="checkedR" v-model.number='enterR')
      //-   <span class="error" v-if="errorR">[e: {{ errorR.toPrecision(3) }}%]</span>
      //- p.inline.data h
      //-   input.center.data(:class="checkedH" v-model.number='enterH')
      //-   <span class="error" v-if="errorH">[e: {{ errorH.toPrecision(3) }}%]</span>
      //- p.inline.data k
      //-   input.center.data(:class="checkedK" v-model.number='enterK')
      //-   <span class="error" v-if="errorK">[e: {{ errorK.toPrecision(3) }}%]</span>
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
      enterX2: '',
      errorX2: 0,
      enterY2: '',
      errorY2: 0,
      enterR: '',
      errorR: 0,
      pointsX: 20,
      pointsY: 20,
      parabolaX: '',
      parabolaY: ''
    }
  },
  computed: {
    p: function () {
      console.clear()
      // let max = 3
      // let min = 2
      return 3 // Math.round(Math.random() * (max - min + 1) + min) / 1
    },
    deltaX: function () {
      return 300 / (this.pointsX + 0)
    },
    deltaY: function () {
      return 300 / (this.pointsY + 0)
    },
    xScale: function () {
      let xs = []
      for (var j = 0; j < this.pointsX + 1; j++) {
        xs[j] = -0 + j * this.deltaX
      }
      return xs
    },
    yScale: function () {
      let ys = []
      for (var j = 0; j < this.pointsY + 1; j++) {
        ys[j] = -0 + j * this.deltaY
      }
      return ys
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
      let period = 10 // ranges[i] / 7
      let delta = period / (points - 1) // ranges[i] / (points + 0)
      // let phi = Math.PI / 4
      // let a = 2
      for (var j = 0; j < points - 1; j++) {
        let x = 150 + this.deltaX * (j * delta) ** 1
        let yUp = 150 - this.deltaY * (4 * this.p * j * delta) ** 0.5
        let yDn = 150 + this.deltaY * (4 * this.p * j * delta) ** 0.5
        this.parabolaX += `${x};`
        this.parabolaY += `${yUp};`
        d1 = d1 + `${x},${yUp} `
        d2 = d2 + `${x},${yDn} `
      }
      // d1 = d1 + ` ${ranges[i] + 30},90 ${ranges[i] + 50},90;`
      d = 'M' + d1 + ' M' + d2
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
    checkedX2: function () {
      this.errorX2 = this.errorRelative('X2 => ', this.X2, parseFloat(this.enterX2))
      return this.errorX2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedY2: function () {
      this.errorY2 = this.errorRelative('Y2 => ', this.Y2, parseFloat(this.enterY2))
      return this.errorY2 < 1e-1 ? 'correct' : 'not-correct'
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
