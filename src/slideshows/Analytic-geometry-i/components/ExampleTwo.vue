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
          <span class="error" v-if="errorda">[e: {{ errorda.toPrecision(3) }}%]</span>
        p.inline.data (b) d
          input.center.data(:class="checkeddb" v-model.number='enterdb')
          <span class="error" v-if="errordb">[e: {{ errordb.toPrecision(3) }}%]</span>
        p.inline.data (c) d
          input.center.data(:class="checkeddc" v-model.number='enterdc')
          <span class="error" v-if="errordc">[e: {{ errordc.toPrecision(3) }}%]</span>
      
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
    da: function () {
      return Math.abs(this.ab - this.aa)
    },
    db: function () {
      return Math.abs(this.bb - this.ba)
    },
    dc: function () {
      return Math.abs(this.cb - this.ca)
    },
    checkedda: function () {
      this.errorda = this.errorRelative('da => ', this.da, parseFloat(this.enterda))
      return this.errorda < 1e-1 ? 'correct' : 'not-correct'
    },
    checkeddb: function () {
      this.errordb = this.errorRelative('db => ', this.db, parseFloat(this.enterdb))
      return this.errordb < 1e-1 ? 'correct' : 'not-correct'
    },
    checkeddc: function () {
      this.errordc = this.errorRelative('dc => ', this.dc, parseFloat(this.enterdc))
      return this.errordc < 1e-1 ? 'correct' : 'not-correct'
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
