<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Hallar la ecuacion de la recta que pasa por el punto ({{ X1 }}, {{Y1}}) y es perpendicular a la recta {{ A }}x {{ B>0 ? " + " : " - " }}{{ Math.abs(B) }}y {{ C>0 ? " + " : " - " }}{{ Math.abs(C) }} = 0
    .center
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050 500" height="250px" width="700px" >
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
        <line :x1="xl1a" :y1="yl1a" :x2="xl1b" :y2="yl1b" fill="none" stroke="#F00" stroke-width="2" stroke-linecap="round"/>
        <line :x1="xl2a" :y1="yl2a" :x2="xl2b" :y2="yl2b" fill="none" stroke="#0F0" stroke-width="2" stroke-linecap="round"/>
        <circle r="8" :cx="354 + 38 * enterX1" :cy="238 - 38 * enterY1"  fill="#0F0" stroke="#000" stroke-width="1"/>

        <g transform="translate(750, 100)">    
         <text x="0" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan> = </text>
          <text x="120" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">m</tspan>(<tspan style="font-style: normal;">x</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>)</text>
        </g>
        <g v-if="showPointX1 && showPointY1" transform="translate(750, 150)">    
         <text x="0" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;-&ensp;<tspan style="font-style: normal">{{ Y1 }}</tspan> = </text>
          <text x="120" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">m</tspan>(<tspan style="font-style: normal;">x</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">{{ X1 }}</tspan>)</text>
        </g>
        <g v-if="showEcu" transform="translate(750, 200)">    
         <text x="0" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;-&ensp;<tspan style="font-style: normal">{{ Y1 }}</tspan> = </text>
          <text x="120" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">{{ m1 }}</tspan>(<tspan style="font-style: normal;">x</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">{{ X1 }}</tspan>)</text>
        </g>
        <g v-if="showEcu" transform="translate(750, 250)">    
         <text x="0" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;=&ensp;<tspan style="font-style: italic;">{{ m1 }}</tspan><tspan style="font-style: italic;">x</tspan>&ensp;+&ensp;<tspan style="font-style: normal">{{ b1 }}</tspan></text>
        </g>
        
        <circle r="4" :cx="354 + 38 * X2" cy="238"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle r="4" cx="354" :cy="238 - 38 * b1"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle r="4" :cx="354 + 38 * ap" cy="238"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle r="4" cx="354" :cy="238 - 38 * b2"  fill="#000" stroke="#000" stroke-width="1"/>
      </svg>

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data X1
        input.center.data(:class="checkedX1" v-model.number='enterX1')
        <span class="error" v-if="errorX1">[e: {{ errorX1.toPrecision(3) }}%]</span>
      p.inline.data Y1
        input.center.data(:class="checkedY1" v-model.number='enterY1')
        <span class="error" v-if="errorY1">[e: {{ errorY1.toPrecision(3) }}%]</span>
      p.inline.data A
        input.center.data(:class="checkedA" v-model.number='enterA')
        <span class="error" v-if="errorA">[e: {{ errorA.toPrecision(3) }}%]</span>
      p.inline.data B
        input.center.data(:class="checkedB" v-model.number='enterB')
        <span class="error" v-if="errorB">[e: {{ errorB.toPrecision(3) }}%]</span>
      p.inline.data C
        input.center.data(:class="checkedC" v-model.number='enterC')
        <span class="error" v-if="errorC">[e: {{ errorC.toPrecision(3) }}%]</span>
      p.inline.data m1
        input.center.data(:class="checkedM1" v-model.number='enterM1')
        <span class="error" v-if="errorM1">[e: {{ errorM1.toPrecision(3) }}%]</span>
      p.inline.data b1
        input.center.data(:class="checkedb1" v-model.number='enterb1')
        <span class="error" v-if="errorb1">[e: {{ errorb1.toPrecision(3) }}%]</span>
      p.inline.data A'
        input.center.data(:class="checkedAp" v-model.number='enterAp')
        <span class="error" v-if="errorAp">[e: {{ errorAp.toPrecision(3) }}%]</span>
      p.inline.data B'
        input.center.data(:class="checkedBp" v-model.number='enterBp')
        <span class="error" v-if="errorBp">[e: {{ errorBp.toPrecision(3) }}%]</span>
      p.inline.data C'
        input.center.data(:class="checkedCp" v-model.number='enterCp')
        <span class="error" v-if="errorCp">[e: {{ errorCp.toPrecision(3) }}%]</span>
      p.inline.data m2
        input.center.data(:class="checkedM2" v-model.number='enterM2')
        <span class="error" v-if="errorM2">[e: {{ errorM2.toPrecision(3) }}%]</span>
      p.inline.data b2
        input.center.data(:class="checkedb2" v-model.number='enterb2')
        <span class="error" v-if="errorb2">[e: {{ errorb2.toPrecision(3) }}%]</span>
</template>

<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterX1: '',
      errorX1: 0,
      enterY1: '',
      errorY1: 0,
      enterA: '',
      errorA: 0,
      enterB: '',
      errorB: 0,
      enterC: '',
      errorC: 0,
      enterM1: '',
      errorM1: 0,
      enterb1: '',
      errorb1: 0,
      enterAp: '',
      errorAp: 0,
      enterBp: '',
      errorBp: 0,
      enterCp: '',
      errorCp: 0,
      enterM2: '',
      errorM2: 0,
      enterb2: '',
      errorb2: 0,
      showPointX1: false,
      showPointY1: false,
      showPointX2: false,
      showPointY2: false,
      showLine: false,
      showAngle: false,
      showEcu: false
    }
  },
  computed: {
    A: function () {
      console.clear()
      let max = 5
      let min = -5
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    B: function () {
      console.clear()
      let max = 5
      let min = -5
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    C: function () {
      console.clear()
      let max = 5
      let min = -5
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    X1: function () {
      console.clear()
      let max = 5
      let min = -5
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
    Y2: function () {
      return 0
    },
    x2: function () {
      return 354 + 38 * this.X1
    },
    X2: function () {
      return -this.C / this.A
    },
    y2: function () {
      return 238 - 38 * this.Y1
    },
    m1: function () {
      return -this.A / this.B
    },
    b1: function () {
      return -this.C / this.B
    },
    m2: function () {
      return this.B / this.A
    },
    b2: function () {
      return -this.B * this.X1 / this.A + this.Y1
    },
    Ap: function () {
      return -this.B
    },
    Bp: function () {
      return this.A
    },
    Cp: function () {
      return this.B * this.X1 - this.A * this.Y1
    },
    ap: function () {
      return -this.Cp / this.Ap
    },
    bp: function () {
      return -this.Cp / this.Bp
    },
    Xl1a: function () {
      return -9
    },
    xl1a: function () {
      return 354 + 38 * this.Xl1a
    },
    Yl1a: function () {
      return -this.enterA * this.Xl1a / this.enterB - this.enterC / this.enterB
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
      return -this.enterA * this.Xl1b / this.enterB - this.enterC / this.enterB
    },
    yl1b: function () {
      return 238 - 38 * this.Yl1b
    },
    Xl2a: function () {
      return -9
    },
    xl2a: function () {
      return 354 + 38 * this.Xl2a
    },
    Yl2a: function () {
      return -this.enterAp * this.Xl2a / this.enterBp - this.enterCp / this.enterBp
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
      return -this.enterAp * this.Xl2b / this.enterBp - this.enterCp / this.enterBp
    },
    yl2b: function () {
      return 238 - 38 * this.Yl2b
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
    checkedA: function () {
      this.errorA = this.errorRelative('A => ', this.A, parseFloat(this.enterA))
      this.showLineA = this.errorA < 1e-1
      return this.errorA < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedB: function () {
      this.errorB = this.errorRelative('B => ', this.B, parseFloat(this.enterB))
      this.showPLineB = this.errorB < 1e-1
      return this.errorB < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedC: function () {
      this.errorC = this.errorRelative('C => ', this.C, parseFloat(this.enterC))
      this.showLineC = this.errorC < 1e-1
      return this.errorC < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedM1: function () {
      this.errorM1 = this.errorRelative('m1 => ', this.m1, parseFloat(this.enterM1))
      this.showLine = true // this.errorM < 1e-1
      this.showEcu = this.errorM1 < 1e-1
      return this.errorM1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedb1: function () {
      this.errorb1 = this.errorRelative('b1 => ', this.b1, parseFloat(this.enterb1))
      this.showPointb1 = this.errorb1 < 1e-1
      return this.errorb1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAp: function () {
      this.errorAp = this.errorRelative('Ap => ', this.Ap, parseFloat(this.enterAp))
      this.showLineAp = this.errorAp < 1e-1
      return this.errorAp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedBp: function () {
      this.errorBp = this.errorRelative('Bp => ', this.Bp, parseFloat(this.enterBp))
      this.showPLineBp = this.errorBp < 1e-1
      return this.errorBp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedCp: function () {
      this.errorCp = this.errorRelative('Cp => ', this.Cp, parseFloat(this.enterCp))
      this.showLineCp = this.errorCp < 1e-1
      return this.errorCp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedM2: function () {
      this.errorM2 = this.errorRelative('m2 => ', this.m2, parseFloat(this.enterM2))
      this.showLine = true // this.errorM < 1e-1
      this.showEcu = this.errorM2 < 1e-1
      return this.errorM2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedb2: function () {
      this.errorb2 = this.errorRelative('b2 => ', this.b2, parseFloat(this.enterb2))
      this.showPointb2 = this.errorb2 < 1e-1
      return this.errorb2 < 1e-1 ? 'correct' : 'not-correct'
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
