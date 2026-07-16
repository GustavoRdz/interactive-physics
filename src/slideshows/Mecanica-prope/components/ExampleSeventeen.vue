<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Hallar la pendiente y la ordenada al origen de la recta {{ A }}x {{ B>0 ? " + " : " - " }}{{ Math.abs(B) }}y {{ C>0 ? " + " : " - " }}{{ Math.abs(C) }} = 0
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
        <line v-if="showLine" :x1="xl1a" :y1="yl1a" :x2="xl1b" :y2="yl1b" fill="none" stroke="#F00" stroke-width="2" stroke-linecap="round"/>
        <circle v-if="showPointX1 && showPointY1" r="8" :cx="x1" :cy="y1"  fill="#0F0" stroke="#000" stroke-width="1"/>

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
          <text x="120" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">{{ m }}</tspan>(<tspan style="font-style: normal;">x</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">{{ X1 }}</tspan>)</text>
        </g>
        <g v-if="showEcu" transform="translate(750, 250)">    
         <text x="0" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;=&ensp;<tspan style="font-style: italic;">{{ m }}</tspan><tspan style="font-style: italic;">x</tspan>&ensp;+&ensp;<tspan style="font-style: normal">{{ b }}</tspan></text>
        </g>
        
        <circle r="4" :cx="354 + 38 * X2" cy="238"  fill="#000" stroke="#000" stroke-width="1"/>
        <circle r="4" cx="354" :cy="238 - 38 * Y1"  fill="#000" stroke="#000" stroke-width="1"/>
      </svg>
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data A
        input.center.data(:class="checkedA" v-model.number='enterA')
        <span class="error" v-if="errorA">[e: {{ errorA.toPrecision(3) }}%]</span>
      p.inline.data B
        input.center.data(:class="checkedB" v-model.number='enterB')
        <span class="error" v-if="errorB">[e: {{ errorB.toPrecision(3) }}%]</span>
      p.inline.data C
        input.center.data(:class="checkedC" v-model.number='enterC')
        <span class="error" v-if="errorC">[e: {{ errorC.toPrecision(3) }}%]</span>
      p.inline.data m
        input.center.data(:class="checkedM" v-model.number='enterM')
        <span class="error" v-if="errorM">[e: {{ errorM.toPrecision(3) }}%]</span>
      p.inline.data b
        input.center.data(:class="checkedb" v-model.number='enterb')
        <span class="error" v-if="errorb">[e: {{ errorb.toPrecision(3) }}%]</span>
</template>

<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterA: '',
      errorA: 0,
      enterB: '',
      errorB: 0,
      enterC: '',
      errorC: 0,
      enterb: '',
      errorb: 0,
      enterM: '',
      errorM: 0,
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
      return 0
    },
    x1: function () {
      return 354 + 38 * this.X1
    },
    Y1: function () {
      return -this.C / this.B
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
    m: function () {
      return -this.A / this.B
    },
    b: function () {
      return -this.C / this.B
    },
    // abscisa: function () {
    //   let x = Math.cos(this.alpha * Math.PI / 180) > 0 ? 80 * Math.cos(this.alpha * Math.PI / 180) - 80 : -80 + 80 * Math.cos(this.alpha * Math.PI / 180)
    //   let y = -80 * Math.sin(this.alpha * Math.PI / 180)
    //   return 'M' + `${354 + 38 * this.abscX + 80} ` + '240 a80 80 0 0 0 ' + `${x} ` + `${y}` + '  l0 5 l0 -5 l5 -1'
    //   // M592 390 a80, 80 0 0 0 -127,-62  l5 2 l-5 -2 l1 -5
    // },
    // abscX: function () {
    //   return -this.b / this.m
    // },
    Xl1a: function () {
      return -9
    },
    xl1a: function () {
      return 354 + 38 * this.Xl1a
    },
    Yl1a: function () {
      return this.enterM * this.Xl1a + this.b
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
      return this.enterM * this.Xl1b + this.b
    },
    yl1b: function () {
      return 238 - 38 * this.Yl1b
    },
    checkedA: function () {
      this.errorA = this.errorRelative('A => ', this.A, parseFloat(this.enterA))
      this.showPointA = this.errorA < 1e-1
      return this.errorA < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedB: function () {
      this.errorB = this.errorRelative('B => ', this.B, parseFloat(this.enterB))
      this.showPointB = this.errorB < 1e-1
      return this.errorB < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedC: function () {
      this.errorC = this.errorRelative('C => ', this.C, parseFloat(this.enterC))
      this.showPointC = this.errorC < 1e-1
      return this.errorC < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedb: function () {
      this.errorb = this.errorRelative('b => ', this.b, parseFloat(this.enterb))
      this.showPointb = this.errorb < 1e-1
      return this.errorb < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedM: function () {
      this.errorM = this.errorRelative('m => ', this.m, parseFloat(this.enterM))
      this.showLine = true // this.errorM < 1e-1
      this.showEcu = this.errorM < 1e-1
      return this.errorM < 1e-1 ? 'correct' : 'not-correct'
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
