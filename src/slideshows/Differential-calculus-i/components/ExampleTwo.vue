<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem 
    p(v-if = 'language' style="margin: 25px 0px 40px 0px;").problem Encontrar el dominio y el rango de de la función <span style="font-family: roboto; font-weight: bold; font-style: italic;">f</span><span style="font-family: roboto; font-weight: bold; font-style: normal;">(</span><span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span><span style="font-family: roboto; font-weight: bold; font-style: normal;">)</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> = </span> {{ a }}<span style="font-family: roboto; font-weight: bold; font-style: italic;">x<sup style="font-size: 20px; font-style: normal;">{{ n }}</sup></span> - {{ b }}
    .center
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 500" height="250px" width="350px" >


        <!-- x grid -->
        <line v-for="x in [12, 50, 88, 126, 164, 202, 240, 278, 316, 354, 392, 430, 468, 506, 544, 582, 620, 658, 696]" fill="none" stroke="#000" stroke-width="0.5" :x1="x" y1="7" :x2="x" y2="470" stroke-linecap="round"/>
        <!-- x scale bold -->
        //- <line v-for="x in [50, 202, 354, 506, 658]" fill="none" stroke="#000" stroke-width="3" :x1="x" y1="10" :x2="x" y2="390" stroke-linecap="round"/>
        <!-- y grid -->
        <line v-for="y in [10, 48, 86, 124, 162, 200, 238, 276, 314, 352, 390, 428, 466]" fill="none" stroke="#000" stroke-width="0.5" x1="7" :y1="y" x2="700" :y2="y" stroke-linecap="round"/>
        
        <!-- x Axis -->
        <path d="M0 238 l698 0 l-10 5 l10 -5 l-10 -5" stroke="#000" fill="none" stroke-opacity="1" stroke-width="2" ></path>
        <text x="677" y="270" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic">x</text>

        <!-- y Axis -->
        <path d="M354 480 l0 -475 l-5 10 l5 -10 l5 10" stroke="#000" fill="none" stroke-opacity="1" stroke-width="2" ></path>
        <text x="330" y="28" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic">y</text>
              
        <text x="325" y="265" font-size="30" fill="black" font-weight="bold" font-family="Times" font-style="italic"> O </text>
        
        <!-- triangle -->
        <line v-if="showLine1" :x1="x1" :y1="y1" :x2="x2" :y2="y2" fill="none" stroke="#F00" stroke-width="2" stroke-linecap="round"/>
        <line v-if="showLine2" :x1="x1" :y1="y1" :x2="x3" :y2="y3" fill="none" stroke="#0F0" stroke-width="2" stroke-linecap="round"/>
        <line v-if="showLine3" :x1="x2" :y1="y2" :x2="x3" :y2="y3" fill="none" stroke="#00F" stroke-width="2" stroke-linecap="round"/>
        
        <!-- Points -->
        <circle v-if="showPointX1 && showPointY1" r="6" :cx="x1" :cy="y1"  fill="red" stroke="#000" stroke-width="1"/>
        <text v-if="showPointX1 && showPointY1" :x="x1+10" :y="y1-10" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> P1 </text>
        <circle v-if="showPointX2 && showPointY2" r="6" :cx="x2" :cy="y2"  fill="blue" stroke="#000" stroke-width="1"/>
        <text v-if="showPointX2 && showPointY2" :x="x2-30" :y="y2" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> P2 </text>
        <circle v-if="showPointX3 && showPointY3" r="6" :cx="x3" :cy="y3"  fill="green" stroke="#000" stroke-width="1"/>
        <text v-if="showPointX3 && showPointY3" :x="x3" :y="y3+20" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> P3 </text>

        <circle r="6" cx="3" :cy="3"  fill="green" stroke="#000" stroke-width="1"/>
        <circle r="6" cx="697" :cy="497"  fill="green" stroke="#000" stroke-width="1"/>

        <path :d="exponencial" stroke="blue" fill="none" stroke-opacity="1" stroke-width="6" ></path>

        </svg>
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data coeficiente
        input.center.data(:class="checkedA" v-model.number='enterA')
        <span class="error" v-if="errorA">[e: {{ errorA.toPrecision(3) }}%]</span>
      p.inline.data exponente
        input.center.data(:class="checkedY1" v-model.number='enterY1')
        <span class="error" v-if="errorY1">[e: {{ errorY1.toPrecision(3) }}%]</span>
      p.inline.data [a,_] (dominio)
        input.center.data(:class="checkedX2" v-model.number='enterX2')
        <span class="error" v-if="errorX2">[e: {{ errorX2.toPrecision(3) }}%]</span>
      p.inline.data [_,b] (dominio)
        input.center.data(:class="checkedY2" v-model.number='enterY2')
        <span class="error" v-if="errorY2">[e: {{ errorY2.toPrecision(3) }}%]</span>
      p.inline.data [c,_] (Rango)
        input.center.data(:class="checkedX3" v-model.number='enterX3')
        <span class="error" v-if="errorX3">[e: {{ errorX3.toPrecision(3) }}%]</span>
      p.inline.data [_,d] (Rango)
        input.center.data(:class="checkedY3" v-model.number='enterY3')
        <span class="error" v-if="errorY3">[e: {{ errorY3.toPrecision(3) }}%]</span>
      //- p.inline.data distance: P1P2
      //-   input.center.data(:class="checkedd12" v-model.number='enterd12')
      //-   <span class="error" v-if="errord12">[e: {{ errord12.toPrecision(3) }}%]</span>
      //- p.inline.data distance: P1P3
      //-   input.center.data(:class="checkedd13" v-model.number='enterd13')
      //-   <span class="error" v-if="errord13">[e: {{ errord13.toPrecision(3) }}%]</span>
      //- p.inline.data distance: P2P3
      //-   input.center.data(:class="checkedd23" v-model.number='enterd23')
      //-   <span class="error" v-if="errord23">[e: {{ errord23.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterA: '',
      errorA: 0,
      enterY1: '',
      errorY1: 0,
      enterX2: '',
      errorX2: 0,
      enterY2: '',
      errorY2: 0,
      enterX3: '',
      errorX3: 0,
      enterY3: '',
      errorY3: 0,
      enterd12: '',
      errord12: 0,
      enterd13: '',
      errord13: 0,
      enterd23: '',
      errord23: 0,
      showPointX1: false,
      showPointY1: false,
      showPointX2: false,
      showPointY2: false,
      showPointX3: false,
      showPointY3: false,
      showLine1: false,
      showLine2: false,
      showLine3: false
    }
  },
  computed: {
    a: function () {
      let max = 5
      let min = -5
      return Math.round(Math.random() * (max - min) + min)
    },
    n: function () {
      let max = 5
      let min = 1
      return Math.round(Math.random() * (max - min) + min)
    },
    b: function () {
      let max = 5
      let min = -5
      return Math.round(Math.random() * (max - min) + min)
    },
    y1i: function () {
      let max = 3
      let min = 0
      return Math.round(Math.random() * (max - min) + min)
    },
    y1: function () {
      return 238 - 38 * this.y1i
    },
    x2i: function () {
      let max = -1
      let min = -5
      return Math.round(Math.random() * (max - min) + min)
    },
    x2: function () {
      return 354 + 38 * this.x2i
    },
    y2i: function () {
      let max = 3
      let min = -1
      return Math.round(Math.random() * (max - min) + min)
    },
    y2: function () {
      return 238 - 38 * this.y2i
    },
    m1: function () {
      return (this.y2i - this.y1i) / (this.x2i - this.x1i)
    },
    m2: function () {
      return -1 / this.m1
    },
    d12: function () {
      return Math.sqrt((this.x2i - this.x1i) ** 2 + (this.y2i - this.y1i) ** 2)
    },
    x3i: function () {
      return this.x1i - this.y2i + this.y1i
    },
    x3: function () {
      return 354 + 38 * this.x3i
    },
    y3i: function () {
      return this.y1i - this.x2i + this.x1i
    },
    y3: function () {
      return 238 - 38 * this.y3i
    },
    d13: function () {
      return Math.sqrt((this.x3i - this.x1i) ** 2 + (this.y3i - this.y1i) ** 2)
    },
    d23: function () {
      return Math.sqrt((this.x3i - this.x2i) ** 2 + (this.y3i - this.y2i) ** 2)
    },
    exponencial () {
      let d = ''
      // let ranges = [350, 342, 318, 282, 237, 188, 140, 98, 68, 52, 52, 68, 98, 140, 188, 237, 282, 318, 342, 350]
      // let ranges = [350, 342, 318, 282, 237, 188, 140, 98, 68, 52, 52, 68, 98, 140, 188, 237, 282, 318, 342, 350]
      // let ranges = [350, 335, 294, 233, 167, 106, 65, 50, 65, 106, 167, 233, 294, 335, 350]
      let x0 = -10
      let y0 = this.a * Math.pow(x0, this.n)
      let points = 100
      // for (var i = 0; i < ranges.length; i++) {
      let d1 = 'M' + `${354 + 38 * x0}, ${238 - 38 * y0} `
      // let period = 2 * Math.PI // ranges[i] / 7
      let delta = 20 / (points - 2) // ranges[i] / (points + 0)
      for (var j = 0; j < points - 1; j++) {
        d1 = d1 + `${354 + 38 * (j - points / 2) * delta},${238 - 38 * (this.a * Math.pow((j - points / 2) * delta, this.n) - this.b)} `
        // d1 = d1 + `${354 + 38 * 1 + 38 * 5 * Math.cos(2 * Math.PI * delta * j / period)},${238 - 38 * 1 + 38 * 5 * Math.sin(2 * Math.PI * delta * j / period)} `
      }
      // d1 = d1 + ` ${ranges[i] + 30},90 ${ranges[i] + 50},90;`
      d = d + d1
      // }
      return d
    },
    checkedX1: function () {
      this.errorX1 = this.errorRelative('x1 => ', this.x1i, parseFloat(this.enterX1))
      this.showPointX1 = this.errorX1 < 1e-1
      return this.errorX1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedY1: function () {
      this.errorY1 = this.errorRelative('y1 => ', this.y1i, parseFloat(this.enterY1))
      this.showPointY1 = this.errorY1 < 1e-1
      return this.errorY1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedX2: function () {
      this.errorX2 = this.errorRelative('x2 => ', this.x2i, parseFloat(this.enterX2))
      this.showPointX2 = this.errorX2 < 1e-1
      return this.errorX2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedY2: function () {
      this.errorY2 = this.errorRelative('y2 => ', this.y2i, parseFloat(this.enterY2))
      this.showPointY2 = this.errorY2 < 1e-1
      return this.errorY2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedX3: function () {
      this.errorX3 = this.errorRelative('x3 => ', this.x3i, parseFloat(this.enterX3))
      this.showPointX3 = this.errorX3 < 1e-1
      return this.errorX3 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedY3: function () {
      this.errorY3 = this.errorRelative('y3 => ', this.y3i, parseFloat(this.enterY3))
      this.showPointY3 = this.errorY3 < 1e-1
      return this.errorY3 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedd12: function () {
      this.errord12 = this.errorRelative('d12 => ', this.d12, parseFloat(this.enterd12))
      this.showLine1 = this.errord12 < 1e-1
      return this.errord12 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedd13: function () {
      this.errord13 = this.errorRelative('d13 => ', this.d13, parseFloat(this.enterd13))
      this.showLine2 = this.errord13 < 1e-1
      return this.errord13 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedd23: function () {
      this.errord23 = this.errorRelative('d23 => ', this.d23, parseFloat(this.enterd23))
      this.showLine3 = this.errord23 < 1e-1
      return this.errord23 < 1e-1 ? 'correct' : 'not-correct'
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
.data {
  display: inline-block;
  width: 100px;
  height: 30px;
  margin: 5px 3px 5px 3px;
  font-size: 20px;
}
.problem {
  margin: 0;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
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
.error {
  font-size: 14px;
}
</style>
