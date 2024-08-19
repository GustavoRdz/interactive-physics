<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem 
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Los vertices de un triangulo son: A({{ x1i }}, {{ y1i }}), B({{ x2i }}, {{ y2i }}) y C({{ x3i }}, {{ y3i }}). Si D es el punto medio del lado AB, calcular la longitud de la mediana CD.

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
        <line :x1="x1" :y1="y1" :x2="x2" :y2="y2" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        <line :x1="x1" :y1="y1" :x2="x3" :y2="y3" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        <line :x1="x2" :y1="y2" :x2="x3" :y2="y3" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        <line :x1="x3" :y1="y3" :x2="x4" :y2="y4" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
        
        <!-- Points -->
        <circle r="6" :cx="x1" :cy="y1"  fill="red" stroke="#000" stroke-width="1"/>
        <text :x="x1" :y="y1" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic">A </text>
        <circle r="6" :cx="x2" :cy="y2"  fill="blue" stroke="#000" stroke-width="1"/>
        <text :x="x2" :y="y2" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> B </text>
        <circle r="6" :cx="x3" :cy="y3"  fill="green" stroke="#000" stroke-width="1"/>
        <text :x="x3" :y="y3" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> C </text>
        <circle r="6" :cx="x4" :cy="y4"  fill="magenta" stroke="#000" stroke-width="1"/>
        <text :x="x4" :y="y4" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic"> D </text>

        </svg>
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data distance: 12
        input.center.data(:class="checkedd12" v-model.number='enterd12')
        <span class="error" v-if="errord12">[e: {{ errord12.toPrecision(3) }}%]</span>
      //- p.inline.data distance: 13
      //-   input.center.data(:class="checkedd13" v-model.number='enterd13')
      //-   <span class="error" v-if="errord13">[e: {{ errord13.toPrecision(3) }}%]</span>
      //- p.inline.data distance: 23
      //-   input.center.data(:class="checkedd23" v-model.number='enterd23')
      //-   <span class="error" v-if="errord23">[e: {{ errord23.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterd12: '',
      errord12: 0
    }
  },
  computed: {
    x1i: function () {
      let max = 8
      let min = 0
      return Math.round(Math.random() * (max - min) + min)
    },
    x1: function () {
      return 354 + 38 * this.x1i
    },
    y1i: function () {
      let max = 5
      let min = 0
      return Math.round(Math.random() * (max - min) + min)
    },
    y1: function () {
      return 238 - 38 * this.y1i
    },
    x2i: function () {
      let max = -1
      let min = -8
      return Math.round(Math.random() * (max - min) + min)
    },
    x2: function () {
      return 354 + 38 * this.x2i
    },
    y2i: function () {
      let max = 5
      let min = -1
      return Math.round(Math.random() * (max - min) + min)
    },
    y2: function () {
      return 238 - 38 * this.y2i
    },
    x3i: function () {
      let max = 8
      let min = -8
      return Math.round(Math.random() * (max - min) + min)
    },
    x3: function () {
      return 354 + 38 * this.x3i
    },
    y3i: function () {
      let max = -1
      let min = -5
      return Math.round(Math.random() * (max - min) + min)
    },
    y3: function () {
      return 238 - 38 * this.y3i
    },
    x4i: function () {
      return (this.x1i + this.x2i) / 2
    },
    x4: function () {
      return 354 + 38 * this.x4i
    },
    y4i: function () {
      return (this.y1i + this.y2i) / 2
    },
    y4: function () {
      return 238 - 38 * this.y4i
    },
    d12: function () {
      return Math.sqrt((this.x2i - this.x1i) ** 2 + (this.y2i - this.y1i) ** 2)
    },
    d13: function () {
      return Math.sqrt((this.x3i - this.x1i) ** 2 + (this.y3i - this.y1i) ** 2)
    },
    d23: function () {
      return Math.sqrt((this.x3i - this.x2i) ** 2 + (this.y3i - this.y2i) ** 2)
    },
    checkedd12: function () {
      this.errord12 = this.errorRelative('d12 => ', this.d12, parseFloat(this.enterd12))
      return this.errord12 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedd13: function () {
      this.errord13 = this.errorRelative('d13 => ', this.d13, parseFloat(this.enterd13))
      return this.errord13 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedd23: function () {
      this.errord23 = this.errorRelative('d23 => ', this.d23, parseFloat(this.enterd23))
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
