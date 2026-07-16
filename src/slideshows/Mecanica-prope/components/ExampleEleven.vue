<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem  Demostrar que los puntos A({{ X1 }}, {{ Y1 }}), B({{ X2 }}, {{ Y2 }}), C({{ X3 }}, {{ Y3 }}) y D({{ X4 }}, {{ Y4 }}) son vértices de un paralelogramo y hallar su ángulo obtuso.
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
        //- <line :x1="x1l" :y1="y1l" :x2="x2l" :y2="y2l" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        <line v-if="showLine1" :x1="x1" :y1="y1" :x2="x2" :y2="y2" fill="none" stroke="#F00" stroke-width="2" stroke-linecap="round"/>
        <line v-if="showLine2" :x1="x2" :y1="y2" :x2="x3" :y2="y3" fill="none" stroke="#0F0" stroke-width="2" stroke-linecap="round"/>
        <line v-if="showLine1" :x1="x3" :y1="y3" :x2="x4" :y2="y4" fill="none" stroke="#00F" stroke-width="2" stroke-linecap="round"/>
        <line v-if="showLine2" :x1="x4" :y1="y4" :x2="x1" :y2="y1" fill="none" stroke="#F0F" stroke-width="2" stroke-linecap="round"/>
        <circle v-if="showPointX1 && showPointY1" r="6" :cx="x1" :cy="y1"  fill="red" stroke="#000" stroke-width="1"/>
        <text v-if="showPointX1 && showPointY1" :x="x1+10" :y="y1" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic">A </text>
        <circle v-if="showPointX2 && showPointY2" r="6" :cx="x2" :cy="y2"  fill="green" stroke="#000" stroke-width="1"/>
        <text v-if="showPointX2 && showPointY2" :x="x2-20" :y="y2-10" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> B </text>
        <circle v-if="showPointX3 && showPointY3" r="6" :cx="x3" :cy="y3"  fill="blue" stroke="#000" stroke-width="1"/>
        <text v-if="showPointX3 && showPointY3" :x="x3-20" :y="y3+20" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> C </text>
        <circle v-if="showPointX4 && showPointY4" r="6" :cx="x4" :cy="y4"  fill="magenta" stroke="#000" stroke-width="1"/>
        <text v-if="showPointX4 && showPointY4" :x="x4+10" :y="y4+20" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> D </text>
        //- <line v-if="showLine" :x1="x1l" :y1="y1l" :x2="x2l" :y2="y2l" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        //- <line :x1="x1" :y1="y1" :x2="x3" :y2="y3" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        //- <line :x1="x2" :y1="y2" :x2="x3" :y2="y3" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        //- <line :x1="x3" :y1="y3" :x2="x4" :y2="y4" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        
        <!-- Points -->
        //- <circle v-if="showPointX1 && showPointY1" r="6" :cx="x1" :cy="y1"  fill="red" stroke="#000" stroke-width="1"/>
        //- <circle v-if="showPointX2 && showPointY2" r="6" :cx="x2" :cy="y2"  fill="blue" stroke="#000" stroke-width="1"/>
        //- //- <circle r="6" cx="354" cy="238"  fill="black" stroke="#000" stroke-width="1"/>
        //- <circle r="6" :cx="x4" :cy="y4"  fill="magenta" stroke="#000" stroke-width="1"/>

      </svg>
    //- p {{ m1 }}, {{ m2 }}  <br>{{ b1 }}····· {{ b2 }} ·····{{ b3 }} ····· {{ b4 }}
    .center
      p.solution Please do calculations and introduce your results
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
      p.inline.data x4
        input.center.data(:class="checkedX4" v-model.number='enterX4')
        <span class="error" v-if="errorX4">[e: {{ errorX4.toPrecision(3) }}%]</span>
      p.inline.data y4
        input.center.data(:class="checkedY4" v-model.number='enterY4')
        <span class="error" v-if="errorY4">[e: {{ errorY4.toPrecision(3) }}%]</span>
      p.inline.data m1
        input.center.data(:class="checkedM1" v-model.number='enterM1')
        <span class="error" v-if="errorM1">[e: {{ errorM1.toPrecision(3) }}%]</span>
      p.inline.data m2
        input.center.data(:class="checkedM2" v-model.number='enterM2')
        <span class="error" v-if="errorM2">[e: {{ errorM2.toPrecision(3) }}%]</span>

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
      enterX4: '',
      errorX4: 0,
      enterY4: '',
      errorY4: 0,
      enterM1: '',
      errorM1: 0,
      enterM2: '',
      errorM2: 0,
      showPointX1: false,
      showPointY1: false,
      showPointX2: false,
      showPointY2: false,
      showPointX3: false,
      showPointY3: false,
      showPointX4: false,
      showPointY4: false,
      showLine1: false,
      showLine2: false
    }
  },
  computed: {
    X1: function () {
      console.clear()
      let max = 6
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x1: function () {
      return 354 + 38 * this.X1
    },
    Y1: function () {
      let max = 5
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    y1: function () {
      return 238 - 38 * this.Y1
    },
    X2: function () {
      let max = -1
      let min = -6
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x2: function () {
      return 354 + 38 * this.X2
    },
    Y2: function () {
      let max = 5
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    y2: function () {
      return 238 - 38 * this.Y2
    },
    X3: function () {
      let max = -2
      let min = -6
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x3: function () {
      return 354 + 38 * this.X3
    },
    Y3: function () {
      let max = -1
      let min = -5
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    y3: function () {
      return 238 - 38 * this.Y3
    },
    m1: function () {
      return (this.Y2 - this.Y1) / (this.X2 - this.X1)
    },
    b1: function () {
      return this.Y1 - this.m1 * this.X1
    },
    m2: function () {
      return (this.Y3 - this.Y2) / (this.X3 - this.X2)
    },
    b2: function () {
      return this.Y2 - this.m2 * this.X2
    },
    b3: function () {
      return this.Y3 - this.m1 * this.X3
    },
    b4: function () {
      return this.Y1 - this.m2 * this.X1
    },
    X4: function () {
      return Math.round(100 * (this.b4 - this.b3) / (this.m1 - this.m2)) / 100
    },
    x4: function () {
      return 354 + 38 * this.X4
    },
    Y4: function () {
      return Math.round(100 * (this.m1 * this.X4 + this.b3)) / 100
    },
    y4: function () {
      return 238 - 38 * this.Y4
    },
    checkedX1: function () {
      this.errorX1 = this.errorRelative('X1 => ', this.X1, parseFloat(this.enterX1))
      this.showPointX1 = this.errorX1 < 1e-1
      return this.errorX1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedY1: function () {
      this.errorY1 = this.errorRelative('Y1 => ', this.Y1, parseFloat(this.enterY1))
      this.showPointY1 = this.errorY1 < 1e-1
      return this.errorY1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedX2: function () {
      this.errorX2 = this.errorRelative('X2 => ', this.X2, parseFloat(this.enterX2))
      this.showPointX2 = this.errorX2 < 1e-1
      return this.errorX2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedY2: function () {
      this.errorY2 = this.errorRelative('Y2 => ', this.Y2, parseFloat(this.enterY2))
      this.showPointY2 = this.errorY2 < 1e-1
      return this.errorY2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedX3: function () {
      this.errorX3 = this.errorRelative('X3 => ', this.X3, parseFloat(this.enterX3))
      this.showPointX3 = this.errorX3 < 1e-1
      return this.errorX3 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedY3: function () {
      this.errorY3 = this.errorRelative('Y3 => ', this.Y3, parseFloat(this.enterY3))
      this.showPointY3 = this.errorY3 < 1e-1
      return this.errorY3 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedX4: function () {
      this.errorX4 = this.errorRelative('X4 => ', this.X4, parseFloat(this.enterX4))
      this.showPointX4 = this.errorX4 < 1e-1
      return this.errorX4 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedY4: function () {
      this.errorY4 = this.errorRelative('Y4 => ', this.Y4, parseFloat(this.enterY4))
      this.showPointY4 = this.errorY4 < 1e-1
      return this.errorY4 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedM1: function () {
      this.errorM1 = this.errorRelative('m1 => ', this.m1, parseFloat(this.enterM1))
      this.showLine1 = this.errorM1 < 1e-1
      return this.errorM1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedM2: function () {
      this.errorM2 = this.errorRelative('m2 => ', this.m2, parseFloat(this.enterM2))
      this.showLine2 = this.errorM2 < 1e-1
      return this.errorM2 < 1e-1 ? 'correct' : 'not-correct'
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
