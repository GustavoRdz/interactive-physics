<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  p.problem A steel bar {{ Math.round(lS * 100) }} cm long is welded end to end to a copper bar {{ Math.round(lC * 100) }} cm long. Each bar has a square cross section, {{ Math.round(side * 100) }} cm on a side. The free end of the steel bar is kept at {{ hotTemp }}°C by placing it in contact with steam, and the free end of the copper bar is kept at {{ coldTemp }}°C by placing it in contact with ice. Both bars are perfectly insulated on their sides. Find the steady-state temperature at the junction of the two bars and the total rate of heat flow through the bars.

  .center
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 120" height="120" width="380" >
      //- <path d="M0,0 l0 120 l380 -120 l0 120 z" stroke-width="0.3"stroke="#000" fill="none"/>

      <rect x=-1 y=10 width=40 height=100 stroke="red" fill="red"/>
      <rect x=40 y=35 width=100 height=50 stroke="silver" fill="silver"/>
      <rect x=141 y=35 width=200 height=50 stroke="peru" fill="peru"/>
      <rect x=330 y=10 width=50 height=100 stroke="deepskyblue" fill="deepskyblue"/>

        <text x="0" y="62" font-family="times" font-size="18" font-style="italic">{{ hotTemp }}ºC </text>
        <text x="330" y="62" font-family="times" font-size="18" font-style="italic">{{ coldTemp }}ºC</text>
        <text x="75" y="62" font-family="times" font-size="20" font-style="italic">Steel</text>
        <text x="200" y="62" font-family="times" font-size="20" font-style="italic">Cooper</text>

        <text x="294" y="65" font-family="times" font-size="20" font-style="italic" stroke="blue" fill="blue">{{ side * 100 }}cm </text>
        <path d="M290 35 l0 50 M290 35 l-3 10 M290 35 l3 10 M290 85 l-3 -10 M290 85 l3 -10" stroke=#000 fill="none"/>

        <text x="75" y="105" font-family="times" font-size="20" font-style="italic">{{ lS * 100 }}cm</text>
        <path d="M40 100 l25 0 M40 100 l10 3 M40 100 l10 -3 M115 100 l25 0 M140 100 l-10 -3 M140 100 l-10 3" stroke=#000 fill="none"/>

        <line x1=140 y1=90 x2=140 y2=110 stroke="#000"/>

        <text x="220" y="105" font-family="times" font-size="20" font-style="italic">{{ lC * 100 }}cm</text>
        <path d="M140 100 l75 0 M140 100 l10 3 M140 100 l10 -3 M270 100 l70 0 M340 100 l-10 -3 M340 100 l-10 3" stroke=#000 fill="none"/>

    </svg>

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data l<sub>steel</sub> (m)
        input.center.data(:class="checkedLS" v-model.number='enterLS')
      p.inline.data l<sub>copper</sub> (m)
        input.center.data(:class="checkedLC" v-model.number='enterLC')
      p.inline.data T<sub>hot</sub> (ºC)
        input.center.data(:class="checkedTH" v-model.number='enterTH')
      p.inline.data T<sub>cool</sub> (ºC)
        input.center.data(:class="checkedTC" v-model.number='enterTC')
      p.inline.data Area (m<sup>2</sup>)
        input.center.data(:class="checkedA" v-model.number='enterA')
      p.inline.data k<sub>steel</sub> (W/kgºC)
        input.center.data(:class="checkedKS" v-model.number='enterKS')
      p.inline.data k<sub>copper</sub> (W/kgºC)
        input.center.data(:class="checkedKC" v-model.number='enterKC')
      p.inline.data T<sub>steady</sub>(ºC)
        input.center.data(:class="checkedTSS" v-model.number='enterTSS')
      p.inline.data H (W)
        input.center.data(:class="checkedH" v-model.number='enterH')

</template>
<script>
import eagle from 'eagle.js'

export default {
  data: function () {
    return {
      enterLS: '',
      enterLC: '',
      enterTH: '',
      enterTC: '',
      enterA: '',
      enterKS: '',
      enterKC: '',
      enterTSS: '',
      enterH: '',
      kS: 50.2,
      kC: 385
    }
  },
  computed: {
    lS: function () {
      let max = 15
      let min = 5
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    lC: function () {
      let max = 25
      let min = 15
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    side: function () {
      let max = 5
      let min = 2
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    hotTemp: function () {
      let max = 150
      let min = 50
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    coldTemp: function () {
      let max = 20
      let min = -50
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    steadyT: function () {
      return parseFloat(((this.kS * this.hotTemp / this.lS + this.kC * this.coldTemp / this.lC) / (this.kS / this.lS + this.kC / this.lC)).toFixed(3))
    },
    area: function () {
      return parseFloat((this.side * this.side).toPrecision(3))
    },
    heatFlow: function () {
      return parseFloat((this.kS * this.area * (this.hotTemp - this.coldTemp) / this.lS).toFixed(3))
    },
    checkedLS: function () {
      let check
      console.log('Steel length : ' + this.lS + ' : ' + parseFloat(this.enterLS))
      check = this.lS === parseFloat(this.enterLS) ? 'correct' : 'not-correct'
      return check
    },
    checkedLC: function () {
      let check
      console.log('cooper length : ' + this.lC + ' : ' + parseFloat(this.enterLC))
      check = this.lC === parseFloat(this.enterLC) ? 'correct' : 'not-correct'
      return check
    },
    checkedTH: function () {
      let check
      console.log('hot temperature : ' + this.hotTemp + ' : ' + parseFloat(this.enterTH))
      check = this.hotTemp === parseFloat(this.enterTH) ? 'correct' : 'not-correct'
      return check
    },
    checkedTC: function () {
      let check
      console.log('cool temperature : ' + this.coldTemp + ' : ' + parseFloat(this.enterTC))
      check = this.coldTemp === parseFloat(this.enterTC) ? 'correct' : 'not-correct'
      return check
    },
    checkedA: function () {
      let check
      console.log('Area : ' + this.area + ' : ' + parseFloat(this.enterA))
      check = this.area === parseFloat(this.enterA) ? 'correct' : 'not-correct'
      return check
    },
    checkedKS: function () {
      let check
      console.log('steel K : ' + this.kS + ' : ' + parseFloat(this.enterKS))
      check = this.kS === parseFloat(this.enterKS) ? 'correct' : 'not-correct'
      return check
    },
    checkedKC: function () {
      let check
      console.log('copper K : ' + this.kC + ' : ' + parseFloat(this.enterKC))
      check = this.kC === parseFloat(this.enterKC) ? 'correct' : 'not-correct'
      return check
    },
    checkedTSS: function () {
      let check
      console.log('Steady state temp. : ' + this.steadyT + ' : ' + parseFloat(this.enterTSS))
      check = this.steadyT === parseFloat(this.enterTSS) ? 'correct' : 'not-correct'
      return check
    },
    checkedH: function () {
      let check
      console.log('Heat flow : ' + this.heatFlow + ' : ' + parseFloat(this.enterH))
      check = this.heatFlow === parseFloat(this.enterH) ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
  },
  watch: {
  },
  mixins: [eagle.slide]
}
</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css?family=Major+Mono+Display');
@import url('https://fonts.googleapis.com/css?family=Allerta+Stencil');
@import url('https://fonts.googleapis.com/css?family=Space+Mono');


.svg-display {
        font-family:'Space Mono', monospace;
        text-transform: "none";
      }
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #3f3;
}

li {
  float: left;
}

li a, .dropbtn {
  display: inline-block;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 0px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {background-color: #f1f1f1;}

.dropdown:hover .dropdown-content {
  display: block;
}

button {
  width: 200px;
  height:40px;
}

.data {
  display: inline-block;
  text-transform: none;
  width: 100px;
  height: 30px;
  margin: 5px 3px 5px 3px;
  font-size: 20px;
}

.problem {
  text-transform: none;
  margin: 1px 2px 1px 2px;
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
