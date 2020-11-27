<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  p.problem Suppose the two bars of the former Example are separated. One end of each bar is kept at {{ hotTemp }}°C and the other end of each bar is kept at {{ coldTemp }}°C. What is the total heat current in the two bars?
  .center
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" height="220" width="280" >
      //- <path d="M0,0 l0 220 l280 -220 l0 220 z" stroke-width="0.3"stroke="#000" fill="none"/>

      <path d="M0 10 l40 0 l0 90 l60 25 l0 85 l-140 0 Z" stroke="red" fill="red"/>
      <rect x=40 y=35 width=200 height=50 stroke="peru" fill="peru"/>
      <rect x=100 y=140 width=130 height=50 stroke="silver" fill="silver"/>
      <rect x=230 y=10 width=50 height=200 stroke="deepskyblue" fill="deepskyblue"/>

        <text x="10" y="120" font-family="times" font-size="20" font-style="italic">{{ hotTemp }}ºC</text>
        <text x="232" y="120" font-family="times" font-size="20" font-style="italic">{{ coldTemp }}ºC</text>
        <text x="110" y="62" font-family="times" font-size="20" font-style="italic">Cooper</text>
        <text x="130" y="170" font-family="times" font-size="20" font-style="italic">Steel</text>

        <text x="195" y="65" font-family="times" font-size="20" font-style="italic">{{ side*100 }}cm</text>
        <path d="M190 35 l0 50 M190 35 l-3 10 M190 35 l3 10 M190 85 l-3 -10 M190 85 l3 -10" stroke=#000 fill="none"/>
        <text x="195" y="170" font-family="times" font-size="20" font-style="italic">{{ side*100 }}cm</text>
        <path d="M190 140 l0 50 M190 140 l-3 10 M190 140 l3 10 M190 190 l-3 -10 M190 190 l3 -10" stroke=#000 fill="none"/>

        <text x="147" y="205" font-family="times" font-size="15" font-style="italic">{{ (lS*100).toFixed() }}cm</text>
        <path d="M100 200 l40 0 M100 200 l10 3 M100 200 l10 -3 M190 200 l40 0 M230 200 l-10 -3 M230 200 l-10 3" stroke=#000 fill="none"/>

        <text x="130" y="100" font-family="times" font-size="15" font-style="italic">{{ (lC*100).toFixed() }}cm</text>
        <path d="M40 95 l75 0 M40 95 l10 3 M40 95 l10 -3 M180 95 l50 0 M230 95 l-10 -3 M230 95 l-10 3" stroke=#000 fill="none"/>



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
    area: function () {
      return parseFloat((this.side * this.side).toPrecision(3))
    },
    heatFlow: function () {
      return parseFloat((this.kS * this.area * (this.hotTemp - this.coldTemp) / this.lS + this.kC * this.area * (this.hotTemp - this.coldTemp) / this.lC).toFixed(3))
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
