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
        <line v-for="x in xScale" fill="none" stroke="#000" stroke-width="0.3" :x1="x" y1="244" :x2="x" y2="255" stroke-linecap="round"/>
        <!-- x scale bold -->
        //- <line v-for="x in [50, 202, 354, 506, 658]" fill="none" stroke="#000" stroke-width="3" :x1="x" y1="10" :x2="x" y2="390" stroke-linecap="round"/>
        <!-- y grid -->
        //- <line v-for="y in yScale" fill="none" stroke="#000" stroke-width="0.3" x1="0" :y1="y" x2="300" :y2="y" stroke-linecap="round"/>
        <!-- y grid short-->
        <line v-for="y in yScale" fill="none" stroke="#000" stroke-width="0.3" x1="45" :y1="y" x2="55" :y2="y" stroke-linecap="round"/>
        
        
        <!-- x Axis -->
        <path d="M0 250 l300 0 l-10 5 l10 -5 l-10 -5" stroke="#000" fill="none" stroke-opacity="1" stroke-width="1" ></path>
        <text x="285" y="269" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="italic">x</text>

        <!-- y Axis -->
        <path d="M50 300 l0 -300 l-5 10 l5 -10 l5 10" stroke="#000" fill="none" stroke-opacity="1" stroke-width="1" ></path>
        <text x="33" y="13" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="italic">y</text>
              
        <text x="32" y="268" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> O </text>
        
        <!-- eje focal -->
        <line  x1="150" y1="0" x2="150" y2="300" stroke-linecap="round" fill="none" stroke="#0aF" stroke-width="1"/>
        
        <!-- plots -->
        <!-- directriz -->
        <line x1="0" :y1="150 + deltaY*p" x2="300" :y2="150 + deltaY*p" fill="none" stroke="#0aF" stroke-width="3" stroke-linecap="round"/>
        
        <!-- Lado recto -->
        <line :x1="150 - 2*deltaX*p" :y1="150 - deltaY*p" :x2="150 + 2*deltaX*p" :y2="150 - deltaY*p" fill="none" stroke="#F0a" stroke-width="1" stroke-linecap="round"/>
        <circle r="4" :cx="150 - 2*deltaX*p" :cy="150 - deltaY*p"  fill="#000" stroke="#F0a" stroke-width="2"/>
        <circle r="4" :cx="150 + 2*deltaX*p" :cy="150 - deltaY*p"  fill="#000" stroke="#F0a" stroke-width="2"/>

        <!-- Parabola -->
        <path :d="parabola" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        
        <!-- f(h,k+|p|) -->
        <circle r="4" cx="150" :cy="150 - deltaY*p"  fill="#000" stroke="#F00" stroke-width="2"/>

        <!-- V(h,k) -->
        <circle r="4" cx="150" cy="150"  fill="#000" stroke="#F00" stroke-width="2"/>

        <!-- texto extremos lado recto LR(h+p, k+-p) -->
        <text :x="-30 + deltaX*p" :y="25 + deltaY*p" font-size="20" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-style: italic;"></tspan>(<tspan style="font-style: italic;">h+2p</tspan>, <tspan style="font-style: italic;">k+p</tspan>)</text>
        <text :x="210 + deltaX*p" :y="45 + deltaY*p" font-size="20" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-style: italic;"></tspan>(<tspan style="font-style: italic;">h+p</tspan>, <tspan style="font-style: italic;">k-2p</tspan>)</text>

        <!-- P(x,y) -->
        <circle r="4" cx="0" cy="0"  fill="#F00" stroke="#222" stroke-width="1">
          <animate attributeName="cx" :values="parabolaX" dur="5" repeatCount="indefinite"/>
          <animate attributeName="cy" :values="parabolaY" dur="5" repeatCount="indefinite"/>
        </circle>

        <!-- L(-p,y) -->
        <circle r="4" cx="0" :cy="150 + deltaX*p"  fill="#000" stroke="#F00" stroke-width="2">
          <animate attributeName="cx" :values="parabolaX" dur="5" repeatCount="indefinite"/>
          //- <animate attributeName="cy" :values="parabolaY" dur="5" repeatCount="indefinite"/>
        </circle>

        <!-- Segmento FP -->
        <line x1="0" y1="150" x2="150" :y2="150 - deltaY*p" fill="none" stroke="#777" stroke-width="2" stroke-linecap="round">
          <animate attributeName="x1" :values="parabolaX" dur="5" repeatCount="indefinite"/>
          <animate attributeName="y1" :values="parabolaY" dur="5" repeatCount="indefinite"/>
        </line>

        <!-- Segmento LP -->
        <line :x1="0" y1="0" x2="0" :y2="150 + deltaY*p" fill="none" stroke="#777" stroke-width="2" stroke-linecap="round">
          <animate attributeName="x1" :values="parabolaX" dur="5" repeatCount="indefinite"/>
          <animate attributeName="x2" :values="parabolaX" dur="5" repeatCount="indefinite"/>
          <animate attributeName="y1" :values="parabolaY" dur="5" repeatCount="indefinite"/>
          //- <animate attributeName="y2" :values="parabolaY" dur="5" repeatCount="indefinite"/>
        </line>
       
        <!-- texto V(h, k) -->
        <text :x="107 + deltaX*p" y="170" font-size="20" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">V</tspan>(<tspan style="font-style: italic;">h</tspan>, <tspan style="font-style: italic;">k</tspan>)</text>
        
        <!-- Eje focal y = k -->
        <text x="125" y="280" font-size="15" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-style: normal;">Eje focal: </tspan></text>
        <text x="130" y="295" font-size="20" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan><tspan style="font-style: normal;"> = </tspan><tspan style="font-style: italic;">k</tspan></text>

        <!-- texto f(p, 0) -->
        <text :x="90 + deltaX*p" y="110" font-size="20" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">f</tspan>(<tspan style="font-style: italic;">h</tspan><tspan style="font-style: normal;">+|</tspan><tspan style="font-style: italic;">p</tspan><tspan style="font-style: normal;">|</tspan>, <tspan style="font-style: italic;">k</tspan>)</text>

        <!-- texto p(x,y) -->
        <text x="0" y="0" font-size="20" fill="#00F" font-weight="bold" font-family="Times" style="font-style: italic;">&ensp; p(<tspan style="font-style: italic;">x</tspan>,y)
          <animate attributeName="x" :values="parabolaX" dur="5" repeatCount="indefinite"/>
          <animate attributeName="y" :values="parabolaY" dur="5" repeatCount="indefinite"/>
        </text>   
        <!-- texto L(-p,y) -->
        <text x="0" :y="150 + deltaY*p" font-size="20" fill="#00F" font-weight="bold" font-family="Times" style="font-style: italic;"><tspan style="font-style: italic;">&ensp;L</tspan>(<tspan style="font-style: italic;">h</tspan><tspan style="font-style: normal;">-|</tspan><tspan style="font-style: italic;">p</tspan><tspan style="font-style: normal;">|</tspan>, <tspan style="font-style: italic;">k</tspan>)
          <animate attributeName="x" :values="parabolaX" dur="5" repeatCount="indefinite"/>
        </text>
        <text x="110" y="10" font-size="15" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-style: normal;">Directriz</tspan></text>

        <!-- texto Lado recto -->
        <text x="160" y="85" font-size="15" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-style: normal;">Lado recto</tspan></text>

         <!-- ecuacion parabola -->
         <text x="200" y="240" font-size="35" fill="#F00" font-weight="bold" font-family="Times">(<tspan style="font-size: 30px; font-style: italic;">x - h</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan>&ensp;= 4<tspan style="font-size: 30px; font-style: italic;">p</tspan>(<tspan style="font-size: 30px; font-style: italic;">y - k</tspan>)</text>


      </svg>
      //- p {{ p }} : {{ 10/39 }} : {{ 150 + 38 * (1 * 10 / 39) ** 2}}
      //- p {{ parabola }}
      //- p {{ parabolaX }} ::: {{ parabolaY }}
    //- p {{ R }},m {{ r }}, {{ xScale }}, {{ delta }}
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
      let max = 3
      let min = 2
      return Math.round(Math.random() * (max - min + 1) + min) / 1
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
      // let ranges = [350, 342, 318, 282, 237, 188, 140, 98, 68, 52, 52, 68,98, 140, 188, 237, 282, 318, 342, 350]
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
        let xR = 150 + this.deltaX * (j * delta) ** 1
        let xL = 150 - this.deltaX * (j * delta) ** 1
        let yUp = 150 - this.deltaY * (j * delta) ** 2 / (4 * this.p)
        this.parabolaX += `${xR};`
        this.parabolaY += `${yUp};`
        d1 = d1 + `${xR},${yUp} `
        d2 = d2 + `${xL},${yUp} `
      }
      // d1 = d1 + ` ${ranges[i] + 30},90 ${ranges[i] + 50},90;`
      d = 'M' + d1 + ' M' + d2
      // }
      return d
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
