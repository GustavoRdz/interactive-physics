<template lang="pug">
  eg-transition(:enter='enter', :leave='leave')
    .eg-slide-content
      p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Hallar la distancia entre los puntos cuyas coordenandas son:
      p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem a) {{ aa }}  y {{ ab }}
      p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem b) {{ ba }} y {{ bb }}
      p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem c) {{ ca }} y {{ cb }}
      .center
        p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
        p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
        p.inline.data (a) d
          input.center.data(:class="checkedda" v-model.number='enterda')
          <span class="error" v-if="errorF">[e: {{ errorF.toPrecision(3) }}%]</span>
        p.inline.data (b) d
          input.center.data(:class="checkeddb" v-model.number='enterdb')
          <span class="error" v-if="errorD">[e: {{ errorD.toPrecision(3) }}%]</span>
        p.inline.data (c) d
          input.center.data(:class="checkeddc" v-model.number='enterdc')
          <span class="error" v-if="errorM">[e: {{ errorM.toPrecision(3) }}%]</span>
      
</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterda: '',
      errorda: 0,
      enterdb: '',
      errordb: 0,
      enterdc: '',
      errordc: 0
    }
  },
  computed: {
    aa: function () {
      let max = 20
      let min = 10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    ab: function () {
      let max = 9
      let min = 0
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    ba: function () {
      let max = 20
      let min = 5
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    bb: function () {
      let max = -1
      let min = -20
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    ca: function () {
      let max = 20
      let min = 5
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    cb: function () {
      let max = -1
      let min = -20
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    frequency: function () {
      return this.angular / (2 * Math.PI)
    },
    angular: function () {
      return Math.sqrt(this.elastic / this.mass)
    },
    period: function () {
      return 1 / this.frequency
    },
    checkedF: function () {
      this.errorF = this.errorRelative('Force => ', this.force, parseFloat(this.enterF))
      return this.errorF < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedD: function () {
      this.errorD = this.errorRelative('Displacement => ', this.displacement, parseFloat(this.enterD))
      return this.errorD < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedM: function () {
      this.errorM = this.errorRelative('Mass => ', this.mass, parseFloat(this.enterM))
      return this.errorM < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPullD: function () {
      this.errorPullD = this.errorRelative('Pull distance => ', this.pullDistance, parseFloat(this.enterPullD))
      return this.errorPullD < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedK: function () {
      this.errorK = this.errorRelative('elastic K => ', this.elastic, parseFloat(this.enterK))
      return this.errorK < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedOmega: function () {
      this.errorOmega = this.errorRelative('Angular freq => ', this.angular, parseFloat(this.enterOmega))
      return this.errorOmega < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFr: function () {
      this.errorFr = this.errorRelative('frequency => ', this.frequency, parseFloat(this.enterFr))
      return this.errorFr < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedT: function () {
      this.errorT = this.errorRelative('Period => ', this.period, parseFloat(this.enterT))
      return this.errorT < 1e-1 ? 'correct' : 'not-correct'
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
