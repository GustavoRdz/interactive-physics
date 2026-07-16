<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem 
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Los vertices de un triángulo son: A({{ x1i }}, {{ y1i }}), B({{ x2i }}, {{ y2i }}) y C({{ x3i }}, {{ y3i }}). Si D es el punto medio del lado AB, calcular la longitud de la mediana CD.

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 500" height="500px" width="700px" >


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
        <line :x1="x1e" :y1="y1e" :x2="x2e" :y2="y2e" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        <line :x1="x1e" :y1="y1e" :x2="x3e" :y2="y3e" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        <line :x1="x2e" :y1="y2e" :x2="x3e" :y2="y3e" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        <line :x1="x3e" :y1="y3e" :x2="x4e" :y2="y4e" fill="none" stroke="#F00" stroke-width="4" stroke-linecap="round"/>
        <line :x1="x3e" :y1="y3e" :x2="xm34" :y2="ym34" fill="none" stroke="#FAED27" stroke-width="2" stroke-linecap="round"/>
        
        <!-- Points -->
        <circle r="7" :cx="x1" :cy="y1"  fill="red" stroke="#FAED27" stroke-width="2" opacity="0.2" />
        <circle r="6" :cx="x1e" :cy="y1e"  fill="red" stroke="#FAED27" stroke-width="2"/>
        <text :x="x1e+5" :y="y1e-5" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic">A </text>
        <circle r="7" :cx="x2" :cy="y2"  fill="blue" stroke="#FAED27" stroke-width="2" opacity="0.2"/>
        <circle r="6" :cx="x2e" :cy="y2e"  fill="blue" stroke="#FAED27" stroke-width="2"/>
        <text :x="x2e-15" :y="y2e-5" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> B </text>
        <circle r="7" :cx="x3" :cy="y3"  fill="green" stroke="#FAED27" stroke-width="2" opacity="0.2"/>
        <circle r="6" :cx="x3e" :cy="y3e"  fill="green" stroke="#FAED27" stroke-width="2"/>
        <text :x="x3e-5" :y="y3e+15" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> C </text>
        <circle r="7" :cx="x4" :cy="y4"  fill="magenta" stroke="#FAED27" stroke-width="2" opacity="0.2"/>
        <circle r="6" :cx="x4e" :cy="y4e"  fill="magenta" stroke="#FAED27" stroke-width="2"/>
        <text :x="x4e" :y="y4e-5" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> D </text>


        </svg>
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data coordenada: xA
        input.center.data(:class="checkedXa" v-model.number='enterXa')
        <span class="error" v-if="errorXa">[e: {{ errorXa.toPrecision(3) }}%]</span>
      p.inline.data coordenada: yA
        input.center.data(:class="checkedYa" v-model.number='enterYa')
        <span class="error" v-if="errorYa">[e: {{ errorYa.toPrecision(3) }}%]</span>
      p.inline.data coordenada: xB
        input.center.data(:class="checkedXb" v-model.number='enterXb')
        <span class="error" v-if="errorXb">[e: {{ errorXb.toPrecision(3) }}%]</span>
      p.inline.data coordenada: yB
        input.center.data(:class="checkedYb" v-model.number='enterYb')
        <span class="error" v-if="errorYb">[e: {{ errorYb.toPrecision(3) }}%]</span>
      p.inline.data coordenada: xC
        input.center.data(:class="checkedXc" v-model.number='enterXc')
        <span class="error" v-if="errorXc">[e: {{ errorXc.toPrecision(3) }}%]</span>
      p.inline.data coordenada: yC
        input.center.data(:class="checkedYc" v-model.number='enterYc')
        <span class="error" v-if="errorYc">[e: {{ errorYc.toPrecision(3) }}%]</span>
      p.inline.data coordenada: xD
        input.center.data(:class="checkedXd" v-model.number='enterXd')
        <span class="error" v-if="errorXd">[e: {{ errorXd.toPrecision(3) }}%]</span>
      p.inline.data coordenada: yD
        input.center.data(:class="checkedYd" v-model.number='enterYd')
        <span class="error" v-if="errorYd">[e: {{ errorYd.toPrecision(3) }}%]</span>
      p.inline.data distance: CD
        input.center.data(:class="checkeddCD" v-model.number='enterdCD')
        <span class="error" v-if="errordCD">[e: {{ errordCD.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
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
      enterdCD: '',
      errordCD: 0
    }
  },
  computed: {
    x1i: function () {
      let max = 8
      let min = 0
      return Math.round(Math.random() * (max - min) + min)
    },
    x1e: function () {
      return 354 + 38 * this.enterXa
    },
    x1: function () {
      return 354 + 38 * this.x1i
    },
    y1i: function () {
      let max = 5
      let min = 0
      return Math.round(Math.random() * (max - min) + min)
    },
    y1e: function () {
      return 238 - 38 * this.enterYa
    },
    y1: function () {
      return 238 - 38 * this.y1i
    },
    x2i: function () {
      let max = -1
      let min = -8
      return Math.round(Math.random() * (max - min) + min)
    },
    x2e: function () {
      return 354 + 38 * this.enterXb
    },
    x2: function () {
      return 354 + 38 * this.x2i
    },
    y2i: function () {
      let max = 5
      let min = -1
      return Math.round(Math.random() * (max - min) + min)
    },
    y2e: function () {
      return 238 - 38 * this.enterYb
    },
    y2: function () {
      return 238 - 38 * this.y2i
    },
    x3i: function () {
      let max = 8
      let min = -8
      return Math.round(Math.random() * (max - min) + min)
    },
    x3e: function () {
      return 354 + 38 * this.enterXc
    },
    x3: function () {
      return 354 + 38 * this.x3i
    },
    y3i: function () {
      let max = -1
      let min = -5
      return Math.round(Math.random() * (max - min) + min)
    },
    y3e: function () {
      return 238 - 38 * this.enterYc
    },
    y3: function () {
      return 238 - 38 * this.y3i
    },
    x4i: function () {
      return (this.x1i + this.x2i) / 2
    },
    x4e: function () {
      return 354 + 38 * this.enterXd
    },
    x4: function () {
      return 354 + 38 * this.x4i
    },
    y4i: function () {
      return (this.y1i + this.y2i) / 2
    },
    y4e: function () {
      return 238 - 38 * this.enterYd
    },
    y4: function () {
      return 238 - 38 * this.y4i
    },
    // d12: function () {
    //   return Math.sqrt((this.x2i - this.x1i) ** 2 + (this.y2i - this.y1i) ** 2)
    // },
    // d13: function () {
    //   return Math.sqrt((this.x3i - this.x1i) ** 2 + (this.y3i - this.y1i) ** 2)
    // },
    // d23: function () {
    //   return Math.sqrt((this.x3i - this.x2i) ** 2 + (this.y3i - this.y2i) ** 2)
    // },
    dCD: function () {
      return Math.sqrt((this.x4i - this.x3i) ** 2 + (this.y4i - this.y3i) ** 2)
    },
    dCDe: function () {
      return Math.sqrt((this.enterXd - this.enterXc) ** 2 + (this.enterYd - this.enterYc) ** 2)
    },
    m34: function () {
      return (this.y4i - this.y3i) / (this.x4i - this.x3i)
    },
    b34: function () {
      return this.y3i - this.m34 * this.x3i
    },
    r34: function () {
      return 1 / (this.dCDe / this.enterdCD - 1)
    },
    xm34i: function () {
      return (this.enterXc + this.r34 * this.enterXd) / (1 + this.r34)
    },
    xm34: function () {
      return 354 + 38 * this.xm34i
    },
    ym34i: function () {
      return (this.enterYc + this.r34 * this.enterYd) / (1 + this.r34)
    },
    ym34: function () {
      return 238 - 38 * this.ym34i
    },
    checkedXa: function () {
      this.errorXa = this.errorRelative('Xa => ', this.x1i, parseFloat(this.enterXa))
      return this.errorXa < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedYa: function () {
      this.errorYa = this.errorRelative('Ya => ', this.y1i, parseFloat(this.enterYa))
      return this.errorYa < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedXb: function () {
      this.errorXb = this.errorRelative('Xb => ', this.x2i, parseFloat(this.enterXb))
      return this.errorXb < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedYb: function () {
      this.errorYb = this.errorRelative('Yb => ', this.y2i, parseFloat(this.enterYb))
      return this.errorYb < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedXc: function () {
      this.errorXc = this.errorRelative('Xc => ', this.x3i, parseFloat(this.enterXc))
      return this.errorXc < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedYc: function () {
      this.errorYc = this.errorRelative('Yc => ', this.y3i, parseFloat(this.enterYc))
      return this.errorYc < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedXd: function () {
      this.errorXd = this.errorRelative('Xd => ', this.x4i, parseFloat(this.enterXd))
      return this.errorXd < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedYd: function () {
      this.errorYd = this.errorRelative('Yd => ', this.y4i, parseFloat(this.enterYd))
      return this.errorYd < 1e-1 ? 'correct' : 'not-correct'
    },
    checkeddCD: function () {
      this.errordCD = this.errorRelative('dCD => ', this.dCD, parseFloat(this.enterdCD))
      return this.errordCD < 1e-1 ? 'correct' : 'not-correct'
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
