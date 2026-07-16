<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 10px 0px;").problem 
    p(v-if = 'language' style="margin: 25px 0px 10px 0px;").problem Los extremos de un segmento son los puntos P1({{ X1 }}, {{ Y1 }}) y P2({{ X2 }}, {{ Y2 }}) hallar la razón r en la que el origen divide al segmento, interpreta el resultado. 
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
          <line :x1="x1" :y1="y1" :x2="x2" :y2="y2" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
          //- <line :x1="x1" :y1="y1" :x2="x3" :y2="y3" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
          //- <line :x1="x2" :y1="y2" :x2="x3" :y2="y3" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
          //- <line :x1="x3" :y1="y3" :x2="x4" :y2="y4" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
          
          <!-- Points -->
          <circle r="6" :cx="x1" :cy="y1"  fill="red" stroke="#000" stroke-width="1"/>
          <text :x="x1" :y="y1" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic">A </text>
          <circle r="6" :cx="x2" :cy="y2"  fill="blue" stroke="#000" stroke-width="1"/>
          <text :x="x2" :y="y2" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> B </text>
          <circle r="6" cx="354" cy="238"  fill="black" stroke="#000" stroke-width="1"/>
          //- <text :x="x3" :y="y3" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> C </text>
          //- <circle r="6" :cx="x4" :cy="y4"  fill="magenta" stroke="#000" stroke-width="1"/>
          //- <text :x="x4" :y="y4" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> D </text>

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
      p.inline.data r
        input.center.data(:class="checkedR" v-model='enterR')
        <span class="error" v-if="errorR">[e: {{ errorR.toPrecision(3) }}%]</span>
      
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
      enterR: '',
      errorR: 0
    }
  },
  computed: {
    x1i: function () {
      let max = 8
      let min = 2
      return Math.round(Math.random() * (max - min) + min)
    },
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
    m: function () {
      return this.Y1 / this.X1
    },
    X2: function () {
      let max = Math.round(8 / Math.abs(this.m))
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x2: function () {
      return 354 + 38 * this.X2
    },
    Y2: function () {
      return this.m * this.X2
    },
    y2: function () {
      return 238 - 38 * this.Y2
    },
    r: function () {
      return Math.sqrt(this.X1 ** 2 + this.Y1 ** 2) / Math.sqrt(this.X2 ** 2 + this.Y2 ** 2)
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
      this.errorR = this.errorRelative('r => ', this.r, parseFloat(this.enterR))
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

// function calcChord (initialX, frequency, amplitudeAccel, phase) {
//   let xIncrement = 380 / 19
//   let d = `M50,${200 - initialX * 0.625 * xIncrement} `
//   let timeIncrement = 0.425 / 50
//   let pixelTime = 570 / 0.75
//   // let phase = Math.acos(initialX / amplitude)
//   var time
//   for (time = 0; time <= 94; time++) {
//     d += `L${50 + pixelTime * time * timeIncrement} ${200 - 0.625 * xIncrement * amplitudeAccel * Math.cos(1 * Math.PI * frequency * time * timeIncrement + phase)}`
//   }
//   return d
// }
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
