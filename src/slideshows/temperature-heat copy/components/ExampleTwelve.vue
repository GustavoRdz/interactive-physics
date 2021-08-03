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
        <span class="error" v-if="errorLS">[e: {{ errorLS.toPrecision(2) }}%]</span>
      p.inline.data l<sub>copper</sub> (m)
        input.center.data(:class="checkedLC" v-model.number='enterLC')
        <span class="error" v-if="errorLC">[e: {{ errorLC.toPrecision(2) }}%]</span>
      p.inline.data T<sub>hot</sub> (ºC)
        input.center.data(:class="checkedTH" v-model.number='enterTH')
        <span class="error" v-if="errorTH">[e: {{ errorTH.toPrecision(2) }}%]</span>
      p.inline.data T<sub>cool</sub> (ºC)
        input.center.data(:class="checkedTC" v-model.number='enterTC')
        <span class="error" v-if="errorTC">[e: {{ errorTC.toPrecision(2) }}%]</span>
      p.inline.data Area (m<sup>2</sup>)
        input.center.data(:class="checkedA" v-model.number='enterA')
        <span class="error" v-if="errorA">[e: {{ errorA.toPrecision(2) }}%]</span>
      p.inline.data k<sub>steel</sub> (W/kgºC)
        input.center.data(:class="checkedKS" v-model.number='enterKS')
        <span class="error" v-if="errorKS">[e: {{ errorKS.toPrecision(2) }}%]</span>
      p.inline.data k<sub>copper</sub> (W/kgºC)
        input.center.data(:class="checkedKC" v-model.number='enterKC')
        <span class="error" v-if="errorKC">[e: {{ errorKC.toPrecision(2) }}%]</span>
      p.inline.data T<sub>steady</sub>(ºC)
        input.center.data(:class="checkedTSS" v-model.number='enterTSS')
        <span class="error" v-if="errorTSS">[e: {{ errorTSS.toPrecision(2) }}%]</span>
      p.inline.data H (W)
        input.center.data(:class="checkedH" v-model.number='enterH')
        <span class="error" v-if="errorH">[e: {{ errorH.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'

export default {
  data: function () {
    return {
      enterLS: '',
      errorLS: 0,
      enterLC: '',
      errorLC: 0,
      enterTH: '',
      errorTH: 0,
      enterTC: '',
      errorTC: 0,
      enterA: '',
      errorA: 0,
      enterKS: '',
      errorKS: 0,
      enterKC: '',
      errorKC: 0,
      enterTSS: '',
      errorTSS: 0,
      enterH: '',
      errorH: 0,
      kS: 50.2,
      kC: 385
    }
  },
  computed: {
    lS: function () {
      console.clear()
      let max = 15
      let min = 5
      return Math.floor(Math.random() * (max - min + 1) + min) / 100
    },
    lC: function () {
      let max = 25
      let min = 15
      return Math.floor(Math.random() * (max - min + 1) + min) / 100
    },
    side: function () {
      let max = 5
      let min = 2
      return Math.floor(Math.random() * (max - min + 1) + min) / 100
    },
    hotTemp: function () {
      let max = 150
      let min = 50
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    coldTemp: function () {
      let max = 20
      let min = -50
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    steadyT: function () {
      return (this.kS * this.hotTemp / this.lS + this.kC * this.coldTemp / this.lC) / (this.kS / this.lS + this.kC / this.lC)
    },
    area: function () {
      return this.side ** 2
    },
    heatFlow: function () {
      return this.kS * this.area * (this.hotTemp - this.coldTemp) / this.lS
    },
    checkedLS: function () {
      this.errorLS = this.errorRelative('Steel length => ', this.lS, parseFloat(this.enterLS))
      return this.errorLS < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedLC: function () {
      this.errorLC = this.errorRelative('Copper length => ', this.lC, parseFloat(this.enterLC))
      return this.errorLC < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTH: function () {
      this.errorTH = this.errorRelative('Hot temperature => ', this.hotTemp, parseFloat(this.enterTH))
      return this.errorTH < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTC: function () {
      this.errorTC = this.errorRelative('Cool temp => ', this.coldTemp, parseFloat(this.enterTC))
      return this.errorTC < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedA: function () {
      this.errorA = this.errorRelative('Area => ', this.area, parseFloat(this.enterA))
      return this.errorA < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedKS: function () {
      let check
      console.log('steel K : ' + this.kS + ' : ' + parseFloat(this.enterKS))
      check = this.kS === parseFloat(this.enterKS) ? 'correct' : 'not-correct'
      return check
    },
    checkedKC: function () {
      this.errorKC = this.errorRelative('Copper k => ', this.kC, parseFloat(this.enterKC))
      return this.errorKC < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTSS: function () {
      this.errorTSS = this.errorRelative('Steady state temp. => ', this.steadyT, parseFloat(this.enterTSS))
      return this.errorTSS < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedH: function () {
      this.errorH = this.errorRelative('Heat flow => ', this.heatFlow, parseFloat(this.enterH))
      return this.errorH < 1e-1 ? 'correct' : 'not-correct'
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
  watch: {
  },
  mixins: [eagle.slide]
}
</script>

<style lang='scss' scoped>
.eg-slide {
  .eg-slide-content {
    width: 100%;
    max-width: 100%;
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
  margin: 0;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22px;
  color: blue;
  width: 100%;
}
.mate {
  font-family: 'New Times Roman';
  font-style: italic;
  font-size: 30px;
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
