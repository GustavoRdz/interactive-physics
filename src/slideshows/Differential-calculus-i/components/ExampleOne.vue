<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(style="margin: 0px 0px 20px 0px;").problem Calcular los siguientes límites
    .center
      <svg width="300px" height="70px" >
        <text x="20" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnn">a) </tspan><tspan class="mnb"> lím (4</tspan><tspan class="mib">x</tspan><tspan class="mnb"> + 5)</tspan></text>
        <text x="50" y="60" font-size="17" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x </tspan>&rarr;<tspan class="mnb"> -1</tspan></text>
      </svg>
      <svg width="300px" height="70px" >
        <text x="20" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnn">b) </tspan><tspan class="mnb"> lím </tspan></text>
        <text x="50" y="60" font-size="17" class="mib"><tspan class="mib">x </tspan>&rarr;<tspan class="mnb"> -5</tspan></text>
        <text x="120" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan  baseline-shift="super"  class="mib" style="font-size: 17px;">2</tspan><tspan class="mnb"> + 3</tspan><tspan class="mib">x</tspan><tspan class="mnb"> - 10</tspan></text>
        <text x="160" y="60" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan class="mnb"> + 5</tspan></text>
        <line x1="110" y1="35" x2="270" y2="35" style="stroke:black; stroke-width:2"/>
      </svg>
      <svg width="300px" height="70px" >
        <text x="20" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnn">c) </tspan><tspan class="mnb"> lím </tspan></text>
        <text x="50" y="60" font-size="17" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x </tspan>&rarr;<tspan class="mnb"> 4</tspan></text>
        <text x="130" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan class="mnb"> - 4</tspan></text>
        <text x="120" y="60" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan  baseline-shift="super"  class="mib" style="font-size: 17px;">2</tspan><tspan class="mnb"> - 16</tspan></text>
        <line x1="110" y1="35" x2="200" y2="35" style="stroke:black; stroke-width:2"/>
      </svg>
      <svg width="300px" height="70px" >
        <text x="20" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnn">d) </tspan><tspan class="mnb"> lím </tspan></text>
        <text x="50" y="60" font-size="17" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x </tspan>&rarr;<tspan class="mnb"> 3</tspan></text>
        <text x="120" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan  baseline-shift="super"  class="mib" style="font-size: 17px;">3</tspan><tspan class="mnb"> - 27</tspan></text>
        <text x="120" y="60" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan class="mnb"> - 3</tspan></text>
        <line x1="110" y1="35" x2="200" y2="35" style="stroke:black; stroke-width:2"/>
      </svg>
      <svg width="300px" height="70px" >
        <text x="20" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnn">e) </tspan><tspan class="mnb"> lím </tspan></text>
        <text x="50" y="60" font-size="17" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x </tspan>&rarr; <tspan class="mnb"> 3</tspan></text>
        <path d="M73 60 l5 5 l5 -20 l10 0" style="fill:none;stroke:black;stroke-width:2" />
        <text x="130" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan class="mnb"> - 3</tspan></text>
        <path d="M160 27 l5 5 l5 -30 l20 0" style="fill:none;stroke:black;stroke-width:2" />
        <text x="120" y="60" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan  baseline-shift="super"  class="mib" style="font-size: 17px;">2</tspan><tspan class="mnb"> - 3</tspan></text>
        <line x1="110" y1="35" x2="200" y2="35" style="stroke:black; stroke-width:2"/>
      </svg>
      <svg width="300px" height="70px" >
        <text x="20" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnn">f) </tspan><tspan class="mnb"> lím </tspan></text>
        <text x="50" y="60" font-size="17" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x </tspan>&rarr;<tspan class="mnb"> 5</tspan></text>
        <text x="135" y="15" font-size="15" fill="black" font-weight="bold" font-family="Times"><tspan class="mnb">1</tspan></text>
        <text x="120" y="33" font-size="15" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan class="mnb"> + 1</tspan></text>
        <line x1="120" y1="20" x2="155" y2="20" style="stroke:black; stroke-width:2"/>
        <line x1="160" y1="20" x2="170" y2="20" style="stroke:black; stroke-width:2"/>
        <text x="180" y="15" font-size="15" fill="black" font-weight="bold" font-family="Times"><tspan class="mnb">1</tspan></text>
        <text x="180" y="33" font-size="15" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">6</tspan></text>
        <line x1="175" y1="20" x2="195" y2="20" style="stroke:black; stroke-width:2"/>
        <text x="130" y="60" font-size="25" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan class="mnb"> - 5</tspan></text>

        <line x1="110" y1="35" x2="200" y2="35" style="stroke:black; stroke-width:2"/>
      </svg>
      <svg width="300px" height="70px" >
        <text x="20" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnn">g) </tspan><tspan class="mnb"> lím </tspan></text>
        <text x="50" y="60" font-size="17" fill="black" font-weight="bold" font-family="Times"><tspan class="mnb">&Delta;</tspan><tspan class="mib">x</tspan>&rarr;<tspan class="mnb"> 0</tspan></text>
        <text x="110" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnb">(</tspan><tspan class="mib">x </tspan><tspan class="mnb">+ &Delta;</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan></text>
        <text x="140" y="60" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mmb">&Delta;</tspan><tspan class="mib">x</tspan></text>
        <line x1="110" y1="35" x2="210" y2="35" style="stroke:black; stroke-width:2"/>
      </svg>
      <svg width="300px" height="70px" >
        <text x="20" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnn">h) </tspan><tspan class="mnb"> lím </tspan></text>
        <text x="50" y="60" font-size="17" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x </tspan>&rarr;<tspan class="mnb"> 0</tspan></text>
        <text x="120" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan class="mnb"> + 5 - 5</tspan></text>
        <path d="M110 27 l5 5 l5 -25 l60 0" style="fill:none;stroke:black;stroke-width:2" />
        <path d="M197 27 l5 5 l5 -25 l20 0" style="fill:none;stroke:black;stroke-width:2" />
        <text x="150" y="60" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan></text>
        <line x1="110" y1="35" x2="230" y2="35" style="stroke:black; stroke-width:2"/>
      </svg>
      <svg width="300px" height="70px" >
        <text x="20" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnn">i) </tspan><tspan class="mnb"> lím </tspan></text>
        <text x="50" y="60" font-size="17" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x </tspan>&rarr;<tspan class="mnb"> -4</tspan></text>
        <text x="110" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan  baseline-shift="super"  class="mib" style="font-size: 17px;">3</tspan><tspan class="mnb"> + 64</tspan></text>
        <text x="120" y="60" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan class="mnb"> + 4</tspan></text>
        <line x1="110" y1="35" x2="200" y2="35" style="stroke:black; stroke-width:2"/>
      </svg>
      <svg width="300px" height="70px" >
        <text x="20" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnn">j) </tspan><tspan class="mnb""> lím </tspan></text>
        <text x="50" y="60" font-size="17" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x </tspan>&rarr;<tspan class="mnb"> -2</tspan></text>
        <text x="145" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan class="mnb"> + 2</tspan></text>
        <text x="110" y="60" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan  baseline-shift="super"  class="mib" style="font-size: 17px;">2</tspan><tspan class="mnb"> - 4</tspan><tspan class="mib">x</tspan><tspan class="mnb"> - 12</tspan></text>
        <line x1="110" y1="35" x2="250" y2="35" style="stroke:black; stroke-width:2"/>
      </svg>
      <svg width="300px" height="70px" >
        <text x="20" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnb">3.- </tspan><tspan class="mnb""> lím </tspan></text>
        <text x="50" y="60" font-size="17" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x </tspan>&rarr;<tspan class="mnb"> -5</tspan></text>
        <text x="130" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan class="mnb"> - 4</tspan></text>
        <text x="120" y="60" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan  baseline-shift="super"  class="mib" style="font-size: 17px;">2</tspan><tspan class="mnb"> + 5</tspan></text>
        <line x1="110" y1="35" x2="200" y2="35" style="stroke:black; stroke-width:2"/>
      </svg>
      <svg width="300px" height="70px" >
        <text x="20" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnb">3.- </tspan><tspan class="mnb""> lím </tspan></text>
        <text x="50" y="60" font-size="17" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x </tspan>&rarr;<tspan class="mnb"> -5</tspan></text>
        <text x="130" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan class="mnb"> - 4</tspan></text>
        <text x="120" y="60" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan  baseline-shift="super"  class="mib" style="font-size: 17px;">2</tspan><tspan class="mnb"> + 5</tspan></text>
        <line x1="110" y1="35" x2="200" y2="35" style="stroke:black; stroke-width:2"/>
      </svg>
      <svg width="300px" height="70px" >
        <text x="20" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnb">3.- </tspan><tspan class="mnb""> lím </tspan></text>
        <text x="50" y="60" font-size="17" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x </tspan>&rarr;<tspan class="mnb"> -5</tspan></text>
        <text x="130" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan class="mnb"> - 4</tspan></text>
        <text x="120" y="60" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan  baseline-shift="super"  class="mib" style="font-size: 17px;">2</tspan><tspan class="mnb"> + 5</tspan></text>
        <line x1="110" y1="35" x2="200" y2="35" style="stroke:black; stroke-width:2"/>
      </svg>
      <svg width="300px" height="70px" >
        <text x="20" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnb">3.- </tspan><tspan class="mnb""> lím </tspan></text>
        <text x="50" y="60" font-size="17" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x </tspan>&rarr;<tspan class="mnb"> -5</tspan></text>
        <text x="130" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan class="mnb"> - 4</tspan></text>
        <text x="120" y="60" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan  baseline-shift="super"  class="mib" style="font-size: 17px;">2</tspan><tspan class="mnb"> + 5</tspan></text>
        <line x1="110" y1="35" x2="200" y2="35" style="stroke:black; stroke-width:2"/>
      </svg>
      <svg width="300px" height="70px" >
        <text x="20" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnb">3.- </tspan><tspan class="mnb""> lím </tspan></text>
        <text x="50" y="60" font-size="17" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x </tspan>&rarr;<tspan class="mnb"> -5</tspan></text>
        <text x="130" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan class="mnb"> - 4</tspan></text>
        <text x="120" y="60" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">x</tspan><tspan  baseline-shift="super"  class="mib" style="font-size: 17px;">2</tspan><tspan class="mnb"> + 5</tspan></text>
        <line x1="110" y1="35" x2="200" y2="35" style="stroke:black; stroke-width:2"/>
      </svg>

    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
  

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterA: '',
      errorA: 0,
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
      enterd12: '',
      errord12: 0,
      enterd13: '',
      errord13: 0,
      enterd23: '',
      errord23: 0,
      showPointX1: false,
      showPointY1: false,
      showPointX2: false,
      showPointY2: false,
      showPointX3: false,
      showPointY3: false,
      showLine1: false,
      showLine2: false,
      showLine3: false
    }
  },
  computed: {
    a: function () {
      let max = 5
      let min = -5
      return Math.round(Math.random() * (max - min) + min)
    },
    n: function () {
      let max = 5
      let min = 1
      return Math.round(Math.random() * (max - min) + min)
    },
    y1i: function () {
      let max = 3
      let min = 0
      return Math.round(Math.random() * (max - min) + min)
    },
    y1: function () {
      return 238 - 38 * this.y1i
    },
    x2i: function () {
      let max = -1
      let min = -5
      return Math.round(Math.random() * (max - min) + min)
    },
    x2: function () {
      return 354 + 38 * this.x2i
    },
    y2i: function () {
      let max = 3
      let min = -1
      return Math.round(Math.random() * (max - min) + min)
    },
    y2: function () {
      return 238 - 38 * this.y2i
    },
    m1: function () {
      return (this.y2i - this.y1i) / (this.x2i - this.x1i)
    },
    m2: function () {
      return -1 / this.m1
    },
    d12: function () {
      return Math.sqrt((this.x2i - this.x1i) ** 2 + (this.y2i - this.y1i) ** 2)
    },
    x3i: function () {
      return this.x1i - this.y2i + this.y1i
    },
    x3: function () {
      return 354 + 38 * this.x3i
    },
    y3i: function () {
      return this.y1i - this.x2i + this.x1i
    },
    y3: function () {
      return 238 - 38 * this.y3i
    },
    d13: function () {
      return Math.sqrt((this.x3i - this.x1i) ** 2 + (this.y3i - this.y1i) ** 2)
    },
    d23: function () {
      return Math.sqrt((this.x3i - this.x2i) ** 2 + (this.y3i - this.y2i) ** 2)
    },
    exponencial () {
      let d = ''
      // let ranges = [350, 342, 318, 282, 237, 188, 140, 98, 68, 52, 52, 68, 98, 140, 188, 237, 282, 318, 342, 350]
      // let ranges = [350, 342, 318, 282, 237, 188, 140, 98, 68, 52, 52, 68, 98, 140, 188, 237, 282, 318, 342, 350]
      // let ranges = [350, 335, 294, 233, 167, 106, 65, 50, 65, 106, 167, 233, 294, 335, 350]
      let x0 = -10
      let y0 = this.a * Math.pow(x0, this.n)
      let points = 100
      // for (var i = 0; i < ranges.length; i++) {
      let d1 = 'M' + `${354 + 38 * x0}, ${238 - 38 * y0} `
      // let period = 2 * Math.PI // ranges[i] / 7
      let delta = 20 / (points - 2) // ranges[i] / (points + 0)
      for (var j = 0; j < points - 1; j++) {
        d1 = d1 + `${354 + 38 * (j - points / 2) * delta},${238 - 38 * this.a * Math.pow((j - points / 2), this.n) / (this.n * 100)} `
        // d1 = d1 + `${354 + 38 * 1 + 38 * 5 * Math.cos(2 * Math.PI * delta * j / period)},${238 - 38 * 1 + 38 * 5 * Math.sin(2 * Math.PI * delta * j / period)} `
      }
      // d1 = d1 + ` ${ranges[i] + 30},90 ${ranges[i] + 50},90;`
      d = d + d1
      // }
      return d
    },
    checkedX1: function () {
      this.errorX1 = this.errorRelative('x1 => ', this.x1i, parseFloat(this.enterX1))
      this.showPointX1 = this.errorX1 < 1e-1
      return this.errorX1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedY1: function () {
      this.errorY1 = this.errorRelative('y1 => ', this.y1i, parseFloat(this.enterY1))
      this.showPointY1 = this.errorY1 < 1e-1
      return this.errorY1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedX2: function () {
      this.errorX2 = this.errorRelative('x2 => ', this.x2i, parseFloat(this.enterX2))
      this.showPointX2 = this.errorX2 < 1e-1
      return this.errorX2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedY2: function () {
      this.errorY2 = this.errorRelative('y2 => ', this.y2i, parseFloat(this.enterY2))
      this.showPointY2 = this.errorY2 < 1e-1
      return this.errorY2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedX3: function () {
      this.errorX3 = this.errorRelative('x3 => ', this.x3i, parseFloat(this.enterX3))
      this.showPointX3 = this.errorX3 < 1e-1
      return this.errorX3 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedY3: function () {
      this.errorY3 = this.errorRelative('y3 => ', this.y3i, parseFloat(this.enterY3))
      this.showPointY3 = this.errorY3 < 1e-1
      return this.errorY3 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedd12: function () {
      this.errord12 = this.errorRelative('d12 => ', this.d12, parseFloat(this.enterd12))
      this.showLine1 = this.errord12 < 1e-1
      return this.errord12 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedd13: function () {
      this.errord13 = this.errorRelative('d13 => ', this.d13, parseFloat(this.enterd13))
      this.showLine2 = this.errord13 < 1e-1
      return this.errord13 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedd23: function () {
      this.errord23 = this.errorRelative('d23 => ', this.d23, parseFloat(this.enterd23))
      this.showLine3 = this.errord23 < 1e-1
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
