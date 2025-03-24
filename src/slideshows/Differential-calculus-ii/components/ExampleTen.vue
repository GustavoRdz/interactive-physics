<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem 
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Digase las pendientes de cada una de las siguientes rectas dirigidas<br> a) El eje x.<br> b) Una recta paralela al eje x y dirigida ya sea a derecha o a la izquierda.<br>c) La recta que pasa por el origen y biseca el cuadrante I.<br>d) La recta que pasa por el origen y biseca el cuadrante II.

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
        <path v-if="showLineA" d="M0 238 l698 0 l-10 5 l10 -5 l-10 -5" stroke="#F00" fill="none" stroke-opacity="5" stroke-width="3" ></path>
        <text x="677" y="270" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic">x</text>

        <!-- y Axis -->
        <path d="M354 480 l0 -475 l-5 10 l5 -10 l5 10" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        <text x="330" y="28" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic">y</text>
              
        <text x="325" y="265" font-size="30" fill="black" font-weight="bold" font-family="Times" font-style="italic"> O </text>
        
        <!-- triangle -->
        <line v-if="showLineB" x1="0" :y1="y1" x2="700" :y2="y1" fill="none" stroke="#0F0" stroke-width="4" stroke-linecap="round"/>
        <line v-if="showLineC" x1="94" y1="500" x2="594" y2="0" fill="none" stroke="#F0F" stroke-width="4" stroke-linecap="round"/>
        <line v-if="showLineD" x1="114" y1="0" x2="614" y2="500" fill="none" stroke="#00F" stroke-width="4" stroke-linecap="round"/>
        //- <line :x1="x1" :y1="y1" :x2="x3" :y2="y3" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        //- <line :x1="x2" :y1="y2" :x2="x3" :y2="y3" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        //- <line :x1="x3" :y1="y3" :x2="x4" :y2="y4" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        
        <!-- Points -->
        //- <circle r="6" :cx="x1" :cy="y1"  fill="red" stroke="#000" stroke-width="1"/>
        //- <text :x="x1-20" :y="y1" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic">A </text>
        //- <circle r="6" :cx="x2" :cy="y2"  fill="blue" stroke="#000" stroke-width="1"/>
        //- <text :x="x2+10" :y="y2" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> B </text>
        //- <circle r="6" :cx="x3" :cy="y3"  fill="black" stroke="#000" stroke-width="1"/>
        //- <text :x="x3" :y="y3" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> C </text>
        //- <circle r="6" :cx="x4" :cy="y4"  fill="magenta" stroke="#000" stroke-width="1"/>
        //- <text :x="x4" :y="y4" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> D </text>

      </svg>
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data m<sub>a</sub>
        input.center.data(:class="checkedMa" v-model.number='enterMa')
        <span class="error" v-if="errorMa">[e: {{ errorMa.toPrecision(3) }}%]</span>
      p.inline.data m<sub>b</sub>
        input.center.data(:class="checkedMb" v-model.number='enterMb')
        <span class="error" v-if="errorMb">[e: {{ errorMb.toPrecision(3) }}%]</span>
      p.inline.data m<sub>c</sub>
        input.center.data(:class="checkedMc" v-model.number='enterMc')
        <span class="error" v-if="errorMc">[e: {{ errorMc.toPrecision(3) }}%]</span>
      p.inline.data m<sub>d</sub>
        input.center.data(:class="checkedMd" v-model.number='enterMd')
        <span class="error" v-if="errorMd">[e: {{ errorMd.toPrecision(3) }}%]</span>
 
</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterMa: '',
      errorMa: 0,
      enterMb: '',
      errorMb: 0,
      enterMc: '',
      errorMc: 0,
      enterMd: '',
      errorMd: 0,
      showLineA: false,
      showLineB: false,
      showLineC: false,
      showLineD: false
    }
  },
  computed: {
    Y1: function () {
      let max = 5
      let min = -5
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    y1: function () {
      return 238 - 38 * this.Y1
    },
    checkedMa: function () {
      this.errorMa = this.errorRelative('ma => ', 0, parseFloat(this.enterMa))
      this.showLineA = this.errorMa < 1e-1
      return this.errorMa < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMb: function () {
      this.errorMb = this.errorRelative('mb => ', 0, parseFloat(this.enterMb))
      this.showLineB = this.errorMb < 1e-1
      return this.errorMb < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMc: function () {
      this.errorMc = this.errorRelative('mc=> ', 1, parseFloat(this.enterMc))
      this.showLineC = this.errorMc < 1e-1
      return this.errorMc < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMd: function () {
      this.errorMd = this.errorRelative('md => ', -1, parseFloat(this.enterMd))
      this.showLineD = this.errorMd < 1e-1
      return this.errorMd < 1e-1 ? 'correct' : 'not-correct'
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
