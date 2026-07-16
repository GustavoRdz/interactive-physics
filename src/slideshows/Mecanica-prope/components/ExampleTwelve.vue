<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Dos rectas se cortan formando un ángulo de {{ theta }}. Si la recta inicial tiene una pendiente de {{ m1 }}, calcular la pendiente de la recta final.
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
        
        <!-- plots -->
        <line v-if="showLine1" :x1="xl1a" :y1="yl1a" :x2="xl1b" :y2="yl1b" fill="none" stroke="#F00" stroke-width="2" stroke-linecap="round"/>
        <line v-if="showLine2" :x1="xl2a" :y1="yl2a" :x2="xl2b" :y2="yl2b" fill="none" stroke="#00F" stroke-width="2" stroke-linecap="round"/>
        <circle v-if="showLine1 && showLine2" r="8" :cx="x1" :cy="y1"  fill="#0F0" stroke="#000" stroke-width="1"/>
        
      </svg>
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data &theta; (º)
        input.center.data(:class="checkedTheta" v-model.number='enterTheta')
        <span class="error" v-if="errorTheta">[e: {{ errorTheta.toPrecision(3) }}%]</span>
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
  data: function () {
    return {
      enterTheta: '',
      errorTheta: 0,
      enterM1: '',
      errorM1: 0,
      enterM2: '',
      errorM2: 0,
      showPoint: false,
      showLine1: false,
      showLine2: false
    }
  },
  computed: {
    X1: function () {
      console.clear()
      let max = 4
      let min = -4
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x1: function () {
      return 354 + 38 * this.X1
    },
    Y1: function () {
      let max = 3
      let min = -3
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    y1: function () {
      return 238 - 38 * this.Y1
    },
    theta: function () {
      let max = 170
      let min = 10
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    m1: function () {
      let max = 30
      let min = 0
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 10
    },
    m2: function () {
      return (this.m1 + Math.tan(this.theta * Math.PI / 180)) / (1 - this.m1 * Math.tan(this.theta * Math.PI / 180))
    },
    b1: function () {
      return this.Y1 - this.m1 * this.X1
    },
    b2: function () {
      return this.Y1 - this.m2 * this.X1
    },
    Xl1a: function () {
      return -9
    },
    xl1a: function () {
      return 354 + 38 * this.Xl1a
    },
    Yl1a: function () {
      return this.m1 * this.Xl1a + this.b1
    },
    yl1a: function () {
      return 238 - 38 * this.Yl1a
    },
    Xl1b: function () {
      return 9
    },
    xl1b: function () {
      return 354 + 38 * this.Xl1b
    },
    Yl1b: function () {
      return this.m1 * this.Xl1b + this.b1
    },
    yl1b: function () {
      return 238 - 38 * this.Yl1b
    },
    Xl2a: function () {
      return -9
    },
    xl2a: function () {
      return 354 + 38 * this.Xl1a
    },
    Yl2a: function () {
      return this.m2 * this.Xl2a + this.b2
    },
    yl2a: function () {
      return 238 - 38 * this.Yl2a
    },
    Xl2b: function () {
      return 9
    },
    xl2b: function () {
      return 354 + 38 * this.Xl2b
    },
    Yl2b: function () {
      return this.m2 * this.Xl2b + this.b2
    },
    yl2b: function () {
      return 238 - 38 * this.Yl2b
    },
    checkedTheta: function () {
      this.errorTheta = this.errorRelative('theta => ', this.theta, parseFloat(this.enterTheta))
      this.showPoint = this.errorTheta < 1e-1
      return this.errorTheta < 1e-1 ? 'correct' : 'not-correct'
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
