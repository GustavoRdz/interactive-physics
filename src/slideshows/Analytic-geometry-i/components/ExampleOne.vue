<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem 
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Demostrar que los puntos P1({{ x1i }}, {{ y1i }}), P2({{ x2i }}, {{ y2i }}) y P3({{ x3i }}, {{ y3i }}) son los vertices de un triángulo isósceles
    .center
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 500" height="250px" width="350px" >


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

        </svg>
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data x1
        input.center.data(:class="checkedX1" v-model.number='enterX1')
        <span class="error" v-if="errorX1">[e: {{ errorX1.toPrecision(3) }}%]</span>
      p.inline.data y1
        input.center.data(:class="checkedY1" v-model.number='enterY1')
        <span class="error" v-if="errorY1">[e: {{ errorY1.toPrecision(3) }}%]</span>
      p.inline.data x2
        input.center.data(:class="checkedX2" v-model.number='enterX2')
        <span class="error" v-if="errorX2">[e: {{ errorX2.toPrecision(3) }}%]</span>
      p.inline.data y2
        input.center.data(:class="checkedY2" v-model.number='enterY2')
        <span class="error" v-if="errorY2">[e: {{ errorY2.toPrecision(3) }}%]</span>
      p.inline.data x3
        input.center.data(:class="checkedX3" v-model.number='enterX3')
        <span class="error" v-if="errorX3">[e: {{ errorX3.toPrecision(3) }}%]</span>
      p.inline.data y3
        input.center.data(:class="checkedY3" v-model.number='enterY3')
        <span class="error" v-if="errorY3">[e: {{ errorY3.toPrecision(3) }}%]</span>
      p.inline.data distance: P1P2
        input.center.data(:class="checkedd12" v-model.number='enterd12')
        <span class="error" v-if="errord12">[e: {{ errord12.toPrecision(3) }}%]</span>
      p.inline.data distance: P1P3
        input.center.data(:class="checkedd13" v-model.number='enterd13')
        <span class="error" v-if="errord13">[e: {{ errord13.toPrecision(3) }}%]</span>
      p.inline.data distance: P2P3
        input.center.data(:class="checkedd23" v-model.number='enterd23')
        <span class="error" v-if="errord23">[e: {{ errord23.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterX1: '',
      errorX1: 0,
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
    x1i: function () {
      let max = 5
      let min = 0
      return Math.round(Math.random() * (max - min) + min)
    },
    x1: function () {
      return 354 + 38 * this.x1i
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
