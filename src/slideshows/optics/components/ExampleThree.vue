<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem A laser beam is incident on a prism perpendicular to one of its faces as shown in figure. The transmitted beam that exits the hypotenuse of the prism makes an angle of {{ angle }}º with the direction of the incident beam. Find the index of refraction of the prism.
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Un rayo láser incide sobre un prisma perpendicular a una de sus caras como se muestra en la figura. El haz transmitido que sale de la hipotenusa del prisma forma un ángulo de {{ angle }}º con la dirección del haz incidente. Encuentre el índice de refracción del prisma.
    .center
      img(src='../assets/example3.png' width="200px")
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data Incidence angle (degrees)
        input.center.data(:class="checkedIncident" v-model.number='enterIncident')
        <span class="error" v-if="errorIncident">[e: {{ errorIncident.toPrecision(2) }}%]</span>
      p.inline.data Transmitted angle (degrees)
        input.center.data(:class="checkedTransmitted" v-model.number='enterTransmitted')
        <span class="error" v-if="errorTransmitted">[e: {{ errorTransmitted.toPrecision(2) }}%]</span>
      p.inline.data Refractive index
        input.center.data(:class="checkedIndex" v-model.number='enterIndex')
        <span class="error" v-if="errorIndex">[e: {{ errorIndex.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterIncident: '',
      errorIncident: 0,
      enterTransmitted: '',
      errorTransmitted: 0,
      enterIndex: '',
      errorIndex: 0
    }
  },
  computed: {
    angle: function () {
      console.clear()
      let max = 30
      let min = 10
      return (Math.round(100 * Math.random() * (max - min + 1) + min) / 100)
    },
    incident: function () {
      return 45
    },
    transmitted: function () {
      return this.incident + this.angle
    },
    index: function () {
      return Math.sin(Math.PI * this.transmitted / 180) / Math.sin(Math.PI * this.incident / 180)
    },
    checkedIncident: function () {
      this.errorIncident = this.errorRelative('Incident => ', this.incident, parseFloat(this.enterIncident))
      return this.errorIncident < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTransmitted: function () {
      this.errorTransmitted = this.errorRelative('Transmitted => ', this.transmitted, parseFloat(this.enterTransmitted))
      return this.errorTransmitted < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedIndex: function () {
      this.errorIndex = this.errorRelative('Index => ', this.index, parseFloat(this.enterIndex))
      return this.errorIndex < 1e-1 ? 'correct' : 'not-correct'
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
