<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Hallar la ecuación de la parábola, la ecuación de su directriz y la longitud del lado recto, si su vértice está en el origen y su foco es el punto 
      <span style="font-family: roboto; font-weight: bold; font-style: italic;">F</span>
      <span style="font-family: roboto; font-weight: bold; font-style: normal;">({{ Fx }}, {{ Fy }}).</span>
      <span>Trazar la gráfica correspondiente.</span>
    //- p(style="margin: 15px 0 10px 0; ").problema.center
    //-   //- <span style="font-family: roboto; font-weight: bold; font-style: normal;">{{ A>0 ? " - " : " " }}{{ A===""  ? " 0 " : Math.abs(A)===1 ? "" : Math.abs(A) }}</span>
    //-   <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
    //-   <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
    //-   <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = </span>
    //-   <span style="font-family: roboto; font-weight: bold; font-style: normal;">{{ Fy>0 ? " " : " - " }}{{ Fy===""  ? " 0 " : Math.abs(Fy)===1 ? "" : 4 * Math.abs(Fy) }}</span>
    //-   <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>

    .center
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300px" width="600px" >
        //- <rect x="10" y="10" width="1040" height="490" fill="none" stroke="#000" />
        <!-- x grid -->
        <line v-for="x in xScale" fill="none" stroke="#000" stroke-width="0.3" :x1="x" y1="0" :x2="x" y2="300" stroke-linecap="round"/>
        <!-- x grid short-->
        <line v-for="x in xScale" fill="none" stroke="#000" stroke-width="0.3" :x1="x" y1="144" :x2="x" y2="155" stroke-linecap="round"/>
        <!-- x scale bold -->
        //- <line v-for="x in [50, 202, 354, 506, 658]" fill="none" stroke="#000" stroke-width="3" :x1="x" y1="10" :x2="x" y2="390" stroke-linecap="round"/>
        <!-- y grid -->
        <line v-for="y in yScale" fill="none" stroke="#000" stroke-width="0.3" x1="0" :y1="y" x2="300" :y2="y" stroke-linecap="round"/>
        <!-- y grid short-->
        <line v-for="y in yScale" fill="none" stroke="#000" stroke-width="0.3" x1="145" :y1="y" x2="155" :y2="y" stroke-linecap="round"/>
        
        
        <!-- x Axis -->
        //- <path d="M0 150 l300 0 l-10 5 l10 -5 l-10 -5" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        <path d="M0 150 l300 0 l-10 5 l10 -5 l-10 -5" stroke="#000" fill="none" stroke-opacity="1" stroke-width="2" ></path>
        <text x="285" y="169" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="italic">x</text>

        <!-- y Axis -->
        <path d="M150 300 l0 -300 l-5 10 l5 -10 l5 10" stroke="#000" fill="none" stroke-opacity="1" stroke-width="2" ></path>
        <text x="133" y="13" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="italic">y</text>
              
        <text x="132" y="168" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> O </text>
        
        <!-- plots -->
        <!-- directriz -->
        <line v-if="xoy == 0 & showP" x1="0" :y1="150 + deltaY*enterP" x2="300" :y2="150 + deltaY*enterP" fill="none" stroke="#0AF" stroke-width="3" stroke-linecap="round"/>
        <line v-if="xoy == 1 & showP" :x1="150 - deltaX*enterP" y1="0" :x2="150 - deltaX*enterP" y2="300" fill="none" stroke="#0AF" stroke-width="3" stroke-linecap="round"/>
        
        <!-- Parabola -->
        <path v-if="xoy == 0 || xoy == 1" :d="parabola" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        
        <!-- f(p,0) -->
        //- <circle v-if="enterPotencia == 2" r="4" cx="150" :cy="150 - deltaY*enterP"  fill="#000" stroke="#F00" stroke-width="2"/>
        //- <circle v-if="enterPotencia == 1" r="4" :cx="150+deltaX*enterP" cy="150"  fill="#000" stroke="#F00" stroke-width="2"/>
        <circle v-if="showf" r="4" :cx="150 + deltaX * Fx" :cy="150 - deltaY*Fy"  fill="#000" stroke="#F00" stroke-width="2"/>
        //- <circle r="4" :cx="150+deltaX*enterP" cy="150"  fill="#000" stroke="#F00" stroke-width="2"/>

         <!-- Lado recto -->
        <line v-if="showLR & enterPotencia == 2" x1="0" :y1="150 + deltaY*enterP" x2="300" :y2="150 + deltaY*enterP" fill="none" stroke="#555" stroke-width="3" stroke-linecap="round"/>
        <line v-if="showLR & enterPotencia == 1" :x1="150 + deltaX*enterP" :y1="150 - 2*deltaY*enterP" :x2="150 + deltaX*enterP" :y2="150 + 2*deltaY*enterP" fill="none" stroke="#0aF" stroke-width="3" stroke-linecap="round"/>
        

        <!-- texto f(p, 0) -->
        <text v-if="enterPotencia == 2 & showf" x="160" :y="140 - deltaY*enterP" font-size="20" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">f</tspan>(0, <tspan style="font-style: italic;">p</tspan>)</text>
        <text v-if="enterPotencia == 1 & showf" :x="130 + deltaX*enterP" y="170" font-size="20" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">f</tspan>(<tspan style="font-style: italic;">p</tspan>, 0)</text>
        
        <!-- ecuacion parabola -->
         <text v-if="enterPotencia == 2" x="320" y="100" font-size="30" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan>&ensp;= 4<tspan style="font-size: 30px; font-style: italic;">py</tspan></text>

         <text v-if="enterPotencia == 1" x="320" y="100" font-size="30" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan>&ensp;= 4<tspan style="font-size: 30px; font-style: italic;">px</tspan></text>

        <!-- texto L(-p,y) -->
        <text v-if="enterPotencia == 2 & showLR" x="170-deltaX*enterP" :y="170 + deltaY*enterP" font-size="20" fill="#00F" font-weight="bold" font-family="Times" style="font-style: italic;">L(x, <tspan style="font-style: italic;">-p</tspan>)
        </text>
        <text v-if="enterPotencia == 1 & showLR" :x="160-deltaX*enterP" y="50 " font-size="20" fill="#00F" font-weight="bold" font-family="Times" style="font-style: italic;">L(<tspan style="font-style: italic;">-p</tspan>, x)
          //- <animate attributeName="x" :values="parabolaX" dur="5" repeatCount="indefinite"/>
        </text>

      </svg>
    //- p.center H={{ H }}, K={{ K }}, R={{ R }}<br>X1={{ X1 }},Y1={{ Y1 }} 
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Orientación<br> ¿horizontal (h) o vertical (v)?
        input.center.data(:class="checkedOr" v-model.number='enterOr')
        <span class="error" v-if="errorP">[e: {{ errorOr.toPrecision(3) }}%]</span>
      p.inline.data p
        input.center.data(:class="checkedP" v-model.number='enterP')
        <span class="error" v-if="errorP">[e: {{ errorP.toPrecision(3) }}%]</span>
      p.inline.data f
        input.center.data(:class="checkedf" v-model.number='enterf')
        <span class="error" v-if="errorf">[e: {{ errorf.toPrecision(3) }}%]</span>
      p.inline.data Lado recto
        input.center.data(:class="checkedLR" v-model.number='enterLR')
        <span class="error" v-if="errorLR">[e: {{ errorLR.toPrecision(3) }}%]</span>
      </template> 

<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterOr: '',
      errorOr: 0,
      enterFx: '',
      errorFx: 0,
      enterFy: '',
      errorFy: 0,
      enterf: '',
      errorf: 0,
      enterLR: '',
      errorLR: 0,
      enterP: '',
      errorP: 0,
      enterPotencia: 2,
      pointsX: 20,
      pointsY: 20,
      parabolaX: '',
      parabolaY: ''
    }
  },
  computed: {
    F: function () {
      console.clear()
      let max = 7
      let min = 2
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    sgF: function () {
      let max = 0
      let min = 0
      return 2 * Math.round(Math.random() * (max - min + 1) + min) - 1
    },
    xoy: function () {
      let max = 0
      let min = 0
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    Or: function () {
      return this.xoy === 1 ? 'h' : 'v'
    },
    Fx: function () {
      return this.sgF * this.xoy * this.F
    },
    fx: function () {
      return 150 - this.deltaY * this.Fy
    },
    Fy: function () {
      return this.sgF * (1 - this.xoy) * this.F
    },
    fy: function () {
      return 150 - this.deltaY * this.Fy
    },
    LR: function () {
      return Math.abs(4 * this.p)
    },
    p: function () {
      return this.xoy === 1 ? this.Fx : this.Fy
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
      let period = this.pointsX // ranges[i] / 7
      let delta = period / (points - 1) // ranges[i] / (points + 0)
      let potencia = this.xoy === 1 ? 0.5 : 2
      console.log(potencia)
      let coef = this.xoy === 1 ? Math.sqrt(4 * Math.abs(this.enterP)) : 1 / (4 * Math.abs(this.enterP))
      coef = this.enterP < 0 ? -coef : coef
      // let coefY = this.enterPotencia === 1 ? Math.sqrt(4 * this.enterP) : 1
      for (var j = 0; j < points - 1; j++) {
        let xR = 150 + this.deltaX * (j * delta) * coef / Math.abs(coef)
        let xL = 150 - this.deltaX * (j * delta) * coef / Math.abs(coef)
        let yUp = 150 - this.deltaY * coef * (j * delta) ** potencia
        let yDn = 150 + this.deltaY * coef * (j * delta) ** potencia
        this.parabolaX += `${xR};`
        this.parabolaY += `${yUp};`
        d1 = this.xoy === 1 ? d1 + `${xR},${yUp} ` : d1 + `${xR},${yUp} `
        d2 = this.xoy === 1 ? d2 + `${xR},${yDn} ` : d2 + `${xL},${yUp} `
      }
      // d1 = d1 + ` ${ranges[i] + 30},90 ${ranges[i] + 50},90;`
      d = 'M' + d1 + ' M' + d2
      // }
      return d
    },
    checkedOr: function () {
      // this.errorOr = this.errorRelative('Orientacion => ', this.Or, this.enterOr)
      // this.showLineC = this.errorC < 1e-1
      return this.enterOr === this.Or ? 'correct' : 'not-correct'
    },
    checkedP: function () {
      this.errorP = this.errorRelative('P => ', this.p, parseFloat(this.enterP))
      this.showP = this.errorP < 1e-1
      return this.errorP < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedf: function () {
      this.errorf = this.errorRelative('f => ', this.p, parseFloat(this.enterf))
      this.showf = this.errorf < 1e-1
      return this.errorf < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedLR: function () {
      this.errorLR = this.errorRelative('LR => ', this.LR, parseFloat(this.enterLR))
      this.showLR = this.errorLR < 1e-1
      return this.errorLR < 1e-1 ? 'correct' : 'not-correct'
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
