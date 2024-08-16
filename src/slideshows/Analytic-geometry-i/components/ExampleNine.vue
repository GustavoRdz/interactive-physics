<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem 
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Demostrar por medio de pendientes que los puntos ({{ X1 }}, {{ Y1 }}); ({{ X2 }}, {{ Y2 }}) y ({{ X3 }}, {{ Y3 }}) son colineales

    .center
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 500" height="400px" width="400px" >
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
        <line v-if="showLine" :x1="x1l" :y1="y1l" :x2="x2l" :y2="y2l" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        //- <line :x1="x1" :y1="y1" :x2="x3" :y2="y3" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        //- <line :x1="x2" :y1="y2" :x2="x3" :y2="y3" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        //- <line :x1="x3" :y1="y3" :x2="x4" :y2="y4" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        
        <!-- Points -->
        <circle r="6" :cx="x1" :cy="y1"  fill="red" stroke="#000" stroke-width="1"/>
        <text :x="x1-20" :y="y1" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic">A </text>
        <circle r="6" :cx="x2" :cy="y2"  fill="blue" stroke="#000" stroke-width="1"/>
        <text :x="x2+10" :y="y2" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> B </text>
        <circle r="6" :cx="x3" :cy="y3"  fill="black" stroke="#000" stroke-width="1"/>
        <text :x="x3" :y="y3" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> C </text>
        //- <circle r="6" :cx="x4" :cy="y4"  fill="magenta" stroke="#000" stroke-width="1"/>
        //- <text :x="x4" :y="y4" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> D </text>

      </svg>
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data m<sub>AB</sub>
        input.center.data(:class="checkedMab" v-model.number='enterMab')
        <span class="error" v-if="errorMab">[e: {{ errorMab.toPrecision(3) }}%]</span>
      p.inline.data m<sub>AC</sub>
        input.center.data(:class="checkedMac" v-model.number='enterMac')
        <span class="error" v-if="errorMac">[e: {{ errorMac.toPrecision(3) }}%]</span>
      p.inline.data m<sub>BC</sub>
        input.center.data(:class="checkedMbc" v-model.number='enterMbc')
        <span class="error" v-if="errorMbc">[e: {{ errorMbc.toPrecision(3) }}%]</span>
 
</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterMab: '',
      errorMab: 0,
      enterMac: '',
      errorMac: 0,
      enterMbc: '',
      errorMbc: 0,
      showLine: false
    }
  },
  computed: {
    X1: function () {
      console.clear()
      let max = -1
      let min = -8
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
    X2: function () {
      let max = 8
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x2: function () {
      return 354 + 38 * this.X2
    },
    Y2: function () {
      let max = 5
      let min = -5
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    y2: function () {
      return 238 - 38 * this.Y2
    },
    m: function () {
      return (this.Y2 - this.Y1) / (this.X2 - this.X1)
    },
    b: function () {
      return this.Y2 - this.m * this.X2
    },
    X3: function () {
      let max = 8
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x3: function () {
      return 354 + 38 * this.X3
    },
    Y3: function () {
      return Math.round(1000 * (this.m * this.X3 + this.b)) / 1000
    },
    y3: function () {
      return 238 - 38 * this.Y3
    },
    alpha: function () {
      return Math.atan(this.m)
    },
    x1l: function () {
      return this.m === 0 ? 354 + 38 * -10 : 354 + 38 * (6 - this.b) / this.m
    },
    y1l: function () {
      return this.m === 0 ? 238 - 38 * this.Y1 : 238 - 38 * 6
    },
    x2l: function () {
      return this.m === 0 ? 354 + 38 * 10 : 354 + 38 * (-6 - this.b) / this.m
    },
    y2l: function () {
      return this.m === 0 ? 238 - 38 * this.Y2 : 238 - 38 * -6
    },
    checkedMab: function () {
      this.errorMab = this.errorRelative('mAB => ', this.m, parseFloat(this.enterMab))
      this.showLine = this.errorMab < 1e-1
      return this.errorMab < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMac: function () {
      this.errorMac = this.errorRelative('mAC => ', this.m, parseFloat(this.enterMac))
      this.showLine = this.errorMac < 1e-1
      return this.errorMac < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMbc: function () {
      this.errorMbc = this.errorRelative('mBC => ', this.m, parseFloat(this.enterMbc))
      this.showLine = this.errorMbc < 1e-1
      return this.errorMbc < 1e-1 ? 'correct' : 'not-correct'
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
    checkedM: function () {
      this.errorM = this.errorRelative('m => ', this.m, parseFloat(this.enterM))
      return this.errorM < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedA: function () {
      this.errorA = this.errorRelative('alpha => ', this.alpha, parseFloat(this.enterA))
      return this.errorA < 1e-1 ? 'correct' : 'not-correct'
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
