<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Demostrar que los cuatro puntos A({{ X1 }}, {{ Y1 }}), B({{ X2 }}, {{ Y2 }}), C({{ X3 }}, {{ Y3 }}) y D({{ X4 }}, {{ Y4 }}) son vértices de un rombo y que sus diagonales son perpendiculares y se cortan en el punto medio.
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
        
        <circle v-if="showPointX1 && showPointY1" r="8" :cx="x1" :cy="y1"  fill="#F00" stroke="#000" stroke-width="1"/>
        <text v-if="showPointX1 && showPointY1" :x="x1+10" :y="y1" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic">A</text>
        <circle v-if="showPointX2 && showPointY2" r="8" :cx="x2" :cy="y2"  fill="#0F0" stroke="#000" stroke-width="1"/>
        <text v-if="showPointX2 && showPointY2" :x="x2+10" :y="y2-10" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic">B</text>
        <circle v-if="showPointX3 && showPointY3" r="8" :cx="x3" :cy="y3"  fill="#00F" stroke="#000" stroke-width="1"/>
        <text v-if="showPointX3 && showPointY3" :x="x3+10" :y="y3+20" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic">C</text>
        <circle v-if="showPointX4 && showPointY4" r="8" :cx="x4" :cy="y4"  fill="#F0F" stroke="#000" stroke-width="1"/>
        <text v-if="showPointX4 && showPointY4" :x="x4-20" :y="y4" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic">D</text>
        <line v-if="showLine1" :x1="x1" :y1="y1" :x2="x2" :y2="y2" fill="none" stroke="#F00" stroke-width="2" stroke-linecap="round"/>
        <line v-if="showLine2" :x1="x2" :y1="y2" :x2="x4" :y2="y4" fill="none" stroke="#0F0" stroke-width="2" stroke-linecap="round"/>
        <line v-if="showLine3" :x1="x4" :y1="y4" :x2="x3" :y2="y3" fill="none" stroke="#00F" stroke-width="2" stroke-linecap="round"/>
        <line v-if="showLine4" :x1="x3" :y1="y3" :x2="x1" :y2="y1" fill="none" stroke="#F0F" stroke-width="2" stroke-linecap="round"/>
        <line v-if="showLine5"  :x1="x1" :y1="y1" :x2="x4" :y2="y4" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round"/>
        <line v-if="showLine6" :x1="x2" :y1="y2" :x2="x3" :y2="y3" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round"/>
        <circle v-if="showPointX5 && showPointY5" r="8" :cx="354 + 38 * medioXbc" :cy="238 - 38 * medioYbc"  fill="#000" stroke="#000" stroke-width="1"/>

      </svg>
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Xa
        input.center.data(:class="checkedXa" v-model.number='enterXa')
        <span class="error" v-if="errorXa">[e: {{ errorXa.toPrecision(3) }}%]</span>
      p.inline.data Ya
        input.center.data(:class="checkedYa" v-model.number='enterYa')
        <span class="error" v-if="errorYa">[e: {{ errorYa.toPrecision(3) }}%]</span>
      p.inline.data Xb
        input.center.data(:class="checkedXb" v-model.number='enterXb')
        <span class="error" v-if="errorXb">[e: {{ errorXb.toPrecision(3) }}%]</span>
      p.inline.data Yb
        input.center.data(:class="checkedYb" v-model.number='enterYb')
        <span class="error" v-if="errorYb">[e: {{ errorYb.toPrecision(3) }}%]</span>
      p.inline.data Xc
        input.center.data(:class="checkedXc" v-model.number='enterXc')
        <span class="error" v-if="errorXc">[e: {{ errorXc.toPrecision(3) }}%]</span>
      p.inline.data Yc
        input.center.data(:class="checkedYc" v-model.number='enterYc')
        <span class="error" v-if="errorYc">[e: {{ errorYc.toPrecision(3) }}%]</span>
      p.inline.data Xd
        input.center.data(:class="checkedXd" v-model.number='enterXd')
        <span class="error" v-if="errorXd">[e: {{ errorXd.toPrecision(3) }}%]</span>
      p.inline.data Yd
        input.center.data(:class="checkedYd" v-model.number='enterYd')
        <span class="error" v-if="errorYd">[e: {{ errorYd.toPrecision(3) }}%]</span>
      p.inline.data <span style="text-decoration: overline;">AB</span>
        input.center.data(:class="checkedDab" v-model.number='enterDab')
        <span class="error" v-if="errorDab">[e: {{ errorDab.toPrecision(3) }}%]</span>
      p.inline.data <span style="text-decoration: overline;">CD</span>
        input.center.data(:class="checkedDcd" v-model.number='enterDcd')
        <span class="error" v-if="errorDcd">[e: {{ errorDcd.toPrecision(3) }}%]</span>
      p.inline.data <span style="text-decoration: overline;">AC</span>
        input.center.data(:class="checkedDac" v-model.number='enterDac')
        <span class="error" v-if="errorDac">[e: {{ errorDac.toPrecision(3) }}%]</span>
      p.inline.data <span style="text-decoration: overline;">BD</span>
        input.center.data(:class="checkedDbd" v-model.number='enterDbd')
        <span class="error" v-if="errorDbd">[e: {{ errorDbd.toPrecision(3) }}%]</span>
      p.inline.data m (AD) diagonal
        input.center.data(:class="checkedMad" v-model.number='enterMad')
        <span class="error" v-if="errorMad">[e: {{ errorMad.toPrecision(3) }}%]</span>
      p.inline.data m (BC) diagonal
        input.center.data(:class="checkedMbc" v-model.number='enterMbc')
        <span class="error" v-if="errorMbc">[e: {{ errorMbc.toPrecision(3) }}%]</span>
      p.inline.data <span style="text-decoration: overline;">X</span> (AD)
        input.center.data(:class="checkedXmad" v-model.number='enterXmad')
        <span class="error" v-if="errorXmad">[e: {{ errorXmad.toPrecision(3) }}%]</span>
      p.inline.data <span style="text-decoration: overline;">Y</span> (AD)
        input.center.data(:class="checkedYmad" v-model.number='enterYmad')
        <span class="error" v-if="errorYmad">[e: {{ errorYmad.toPrecision(3) }}%]</span>
      p.inline.data <span style="text-decoration: overline;">X</span> (BC)
        input.center.data(:class="checkedXmbc" v-model.number='enterXmbc')
        <span class="error" v-if="errorXmbc">[e: {{ errorXmbc.toPrecision(3) }}%]</span>
      p.inline.data <span style="text-decoration: overline;">Y</span> (BC)
        input.center.data(:class="checkedYmbc" v-model.number='enterYmbc')
        <span class="error" v-if="errorYmbc">[e: {{ errorYmbc.toPrecision(3) }}%]</span>
</template>

<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterXa: '',
      errorXa: 0,
      enterYa: '',
      errorYa: 0,
      enterXb: '',
      errorXb: 0,
      enterYb: '',
      errorYb: 0,
      enterXc: '',
      errorXc: 0,
      enterYc: '',
      errorYc: 0,
      enterXd: '',
      errorXd: 0,
      enterYd: '',
      errorYd: 0,
      enterDab: '',
      errorDab: 0,
      enterDcd: '',
      errorDcd: 0,
      enterDac: '',
      errorDac: 0,
      enterDbd: '',
      errorDbd: 0,
      enterMad: '',
      errorMad: 0,
      enterMbc: '',
      errorMbc: 0,
      enterXmad: '',
      errorXmad: 0,
      enterYmad: '',
      errorYmad: 0,
      enterXmbc: '',
      errorXmbc: 0,
      enterYmbc: '',
      errorYmbc: 0,
      showPointX1: false,
      showPointy1: false,
      showPointX2: false,
      showPointy2: false,
      showPointX3: false,
      showPointy3: false,
      showPointX4: false,
      showPointy4: false,
      showPointX5: false,
      showPointy5: false,
      showLine1: false,
      showLine2: false
    }
  },
  computed: {
    X1: function () {
      console.clear()
      let max = 5
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
      console.clear()
      let max = -1
      let min = -5
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
      console.clear()
      let max = this.X1
      let min = this.X2
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x3: function () {
      return 354 + 38 * this.X3
    },
    dab: function () {
      return Math.sqrt((this.X1 - this.X2) ** 2 + (this.Y1 - this.Y2) ** 2)
    },
    Y3: function () {
      return Math.round(100 * (this.Y1 - Math.sqrt(this.dab ** 2 - (this.X3 - this.X1) ** 2))) / 100
    },
    y3: function () {
      return 238 - 38 * this.Y3
    },
    medioXbc: function () {
      return (this.X2 + this.X3) / 2
    },
    medioYbc: function () {
      return (this.Y2 + this.Y3) / 2
    },
    X4: function () {
      return this.X1 - 2 * Math.abs(this.X1 - this.medioXbc)
    },
    x4: function () {
      return 354 + 38 * this.X4
    },
    Y4: function () {
      return Math.round(100 * (this.Y1 - 2 * Math.abs(this.Y1 - this.medioYbc))) / 100
    },
    y4: function () {
      return 238 - 38 * this.Y4
    },
    dabada: function () {
      return Math.sqrt((this.X1 - this.X2) ** 2 + (this.Y1 - this.Y2) ** 2)
    },
    dcd: function () {
      return Math.sqrt((this.X4 - this.X3) ** 2 + (this.Y4 - this.Y3) ** 2)
    },
    dac: function () {
      return Math.sqrt((this.X3 - this.X1) ** 2 + (this.Y3 - this.Y1) ** 2)
    },
    dbd: function () {
      return Math.sqrt((this.X4 - this.X2) ** 2 + (this.Y4 - this.Y2) ** 2)
    },
    mad: function () {
      return (this.Y4 - this.Y1) / (this.X4 - this.X1)
    },
    mbc: function () {
      return (this.Y3 - this.Y2) / (this.X3 - this.X2)
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
    checkedXa: function () {
      this.errorXa = this.errorRelative('x1 => ', this.X1, parseFloat(this.enterXa))
      this.showPointX1 = this.errorXa < 1e-1
      return this.errorXa < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedYa: function () {
      this.errorYa = this.errorRelative('y1 => ', this.Y1, parseFloat(this.enterYa))
      this.showPointY1 = this.errorYa < 1e-1
      return this.errorYa < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedXb: function () {
      this.errorXb = this.errorRelative('x2 => ', this.X2, parseFloat(this.enterXb))
      this.showPointX2 = this.errorXb < 1e-1
      return this.errorXb < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedYb: function () {
      this.errorYb = this.errorRelative('y2 => ', this.Y2, parseFloat(this.enterYb))
      this.showPointY2 = this.errorYb < 1e-1
      return this.errorYb < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedXc: function () {
      this.errorXc = this.errorRelative('x3 => ', this.X3, parseFloat(this.enterXc))
      this.showPointX3 = this.errorXc < 1e-1
      return this.errorXc < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedYc: function () {
      this.errorYc = this.errorRelative('y3 => ', this.Y3, parseFloat(this.enterYc))
      this.showPointY3 = this.errorYc < 1e-1
      return this.errorYc < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedXd: function () {
      this.errorXd = this.errorRelative('x4 => ', this.X4, parseFloat(this.enterXd))
      this.showPointX4 = this.errorXd < 1e-1
      return this.errorXd < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedYd: function () {
      this.errorYd = this.errorRelative('y4 => ', this.Y4, parseFloat(this.enterYd))
      this.showPointY4 = this.errorYd < 1e-1
      return this.errorYd < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDab: function () {
      this.errorDab = this.errorRelative('dab => ', this.dab, parseFloat(this.enterDab))
      this.showLine1 = this.errorDab < 1e-1
      return this.errorDab < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDcd: function () {
      this.errorDcd = this.errorRelative('dcd => ', this.dcd, parseFloat(this.enterDcd))
      this.showLine2 = this.errorDcd < 1e-1
      return this.errorDcd < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDac: function () {
      this.errorDac = this.errorRelative('dac => ', this.dac, parseFloat(this.enterDac))
      this.showLine3 = this.errorDac < 1e-1
      return this.errorDac < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDbd: function () {
      this.errorDbd = this.errorRelative('dbd => ', this.dbd, parseFloat(this.enterDbd))
      this.showLine4 = this.errorDbd < 1e-1
      return this.errorDbd < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMad: function () {
      this.errorMad = this.errorRelative('mad => ', this.mad, parseFloat(this.enterMad))
      this.showLine5 = this.errorMad < 1e-1
      return this.errorMad < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMbc: function () {
      this.errorMbc = this.errorRelative('mbc => ', this.mbc, parseFloat(this.enterMbc))
      this.showLine6 = this.errorMbc < 1e-1
      return this.errorMbc < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedXmad: function () {
      this.errorXmad = this.errorRelative('Xmad => ', this.medioXbc, parseFloat(this.enterXmad))
      this.showPointX5 = this.errorXmad < 1e-1
      return this.errorXmad < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedYmad: function () {
      this.errorYmad = this.errorRelative('Ymad => ', this.medioYbc, parseFloat(this.enterYmad))
      this.showPointY5 = this.errorYmad < 1e-1
      return this.errorYmad < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedXmbc: function () {
      this.errorXmbc = this.errorRelative('Xmbc => ', this.medioXbc, parseFloat(this.enterXmbc))
      // this.showPointX1 = this.errorXa < 1e-1
      return this.errorXmbc < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedYmbc: function () {
      this.errorYmbc = this.errorRelative('Ymbc => ', this.medioYbc, parseFloat(this.enterYmbc))
      // this.showPointX1 = this.errorXa < 1e-1
      return this.errorYmbc < 1e-1 ? 'correct' : 'not-correct'
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
