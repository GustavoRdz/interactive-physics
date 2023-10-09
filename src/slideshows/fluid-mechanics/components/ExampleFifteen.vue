<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    //- p.problem A gardener uses a water hose {{ hoseDiameter }} cm in diameter to fill a {{ bucketVolume }} L bucket. The gardener notes that it takes {{ fillTime }} min to fill the bucket. A nozzle with an opening of cross-sectional area {{ nozzleArea }} cm<sup>2</sup> is attached to the hose. The nozzle is held so that water is projected horizontally from a point {{ hoseHeight }} m above the ground. Over what horizontal distance can the water be projected?
    p.problem Un jardinero usa una manguera de agua de {{hoseDiameter }} cm de diámetro para llenar un balde de {{ bucketVolume }} L. El jardinero observa que se necesitan {{ fillTime }} min para llenar el balde. A la manguera se adjunta una boquilla con una abertura de área de sección transversal {{ nozzleArea }} cm<sup>2</sup>. La boquilla se sostiene de manera que el agua se proyecte horizontalmente desde un punto {{hoseHeight}} m sobre el suelo. ¿A qué distancia horizontal se puede proyectar el agua?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Hose area (m<sup>2</sup>)
        input.center.data(:class="checkedHoseArea" v-model.number='enterHoseArea')
        <span class="error" v-if="errorHoseArea">[e: {{ errorHoseArea.toPrecision(2) }}%]</span>
      p.inline.data Flow rate (m<sup>3</sup>/s)
        input.center.data(:class="checkedFlowRate" v-model.number='enterFlowRate')
        <span class="error" v-if="errorFlowRate">[e: {{ errorFlowRate.toPrecision(2) }}%]</span>
      p.inline.data Water speed hose (m/s)
        input.center.data(:class="checkedSpeedHose" v-model.number='enterSpeedHose')
        <span class="error" v-if="errorSpeedHose">[e: {{ errorSpeedHose.toPrecision(2) }}%]</span>
      p.inline.data Nozzle area (m<sup>2</sup>)
        input.center.data(:class="checkedNozzleArea" v-model.number='enterNozzleArea')
        <span class="error" v-if="errorNozzleArea">[e: {{ errorNozzleArea.toPrecision(2) }}%]</span>
      p.inline.data Water speed nozzle (m/s)
        input.center.data(:class="checkedSpeedNozzle" v-model.number='enterSpeedNozzle')
        <span class="error" v-if="errorSpeedNozzle">[e: {{ errorSpeedNozzle.toPrecision(2) }}%]</span>
      p.inline.data Travel time (s)
        input.center.data(:class="checkedTravelTime" v-model.number='enterTravelTime')
        <span class="error" v-if="errorTravelTime">[e: {{ errorTravelTime.toPrecision(2) }}%]</span>
      p.inline.data Traveled hor. distance (m)
        input.center.data(:class="checkedHorizontalDistance" v-model.number='enterHorizontalDistance')
        <span class="error" v-if="errorHorizontalDistance">[e: {{ errorHorizontalDistance.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterHoseArea: '',
      errorHoseArea: 0,
      enterFlowRate: '',
      errorFlowRate: 0,
      enterSpeedHose: '',
      errorSpeedHose: 0,
      enterNozzleArea: '',
      errorNozzleArea: 0,
      enterSpeedNozzle: '',
      errorSpeedNozzle: 0,
      enterTravelTime: '',
      errorTravelTime: 0,
      enterHorizontalDistance: '',
      errorHorizontalDistance: 0,
      g: 9.81
    }
  },
  computed: {
    hoseDiameter: function () {
      console.clear()
      let max = 300
      let min = 150
      return Math.floor(Math.random() * (max - min + 1) + min) / 100
    },
    bucketVolume: function () {
      let max = 3000
      let min = 2000
      return Math.floor(Math.random() * (max - min + 1) + min) / 100
    },
    fillTime: function () {
      let max = 40
      let min = 20
      return Math.floor(Math.random() * (max - min + 1) + min) / 10
    },
    nozzleArea: function () {
      let max = 1.5
      let min = 5
      return Math.floor(Math.random() * (max - min + 1) + min) / 10
    },
    hoseHeight: function () {
      let max = 15
      let min = 8
      return Math.floor(Math.random() * (max - min + 1) + min) / 10
    },
    hoseArea: function () {
      return Math.PI * Math.pow(this.hoseDiameter / 200, 2)
    },
    flowRate: function () {
      return this.bucketVolume * 1e-3 / (this.fillTime * 60)
    },
    speedHose: function () {
      return this.flowRate / this.hoseArea
    },
    speedNozzle: function () {
      return this.speedHose * this.hoseArea / (this.nozzleArea * 1e-4)
    },
    travelTime: function () {
      return Math.sqrt(2 * this.hoseHeight / this.g)
    },
    horizontalDistance: function () {
      return this.speedNozzle * this.travelTime
    },
    checkedHoseArea: function () {
      this.errorHoseArea = this.errorRelative('Hose transverse area => ', this.hoseArea, parseFloat(this.enterHoseArea))
      return this.errorHoseArea < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFlowRate: function () {
      this.errorFlowRate = this.errorRelative('Flow reate => ', this.flowRate, parseFloat(this.enterFlowRate))
      return this.errorFlowRate < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSpeedHose: function () {
      this.errorSpeedHose = this.errorRelative('Flow reate SI => ', this.speedHose, parseFloat(this.enterSpeedHose))
      return this.errorSpeedHose < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedNozzleArea: function () {
      this.errorNozzleArea = this.errorRelative('Nozzle area => ', this.nozzleArea * 1e-4, parseFloat(this.enterNozzleArea))
      return this.errorNozzleArea < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSpeedNozzle: function () {
      this.errorSpeedNozzle = this.errorRelative('Speed nozzle => ', this.speedNozzle, parseFloat(this.enterSpeedNozzle))
      return this.errorSpeedNozzle < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTravelTime: function () {
      this.errorTravelTime = this.errorRelative('Travel time => ', this.travelTime, parseFloat(this.enterTravelTime))
      return this.errorTravelTime < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedHorizontalDistance: function () {
      this.errorHorizontalDistance = this.errorRelative('Horizontal distance => ', this.horizontalDistance, parseFloat(this.enterHorizontalDistance))
      return this.errorHorizontalDistance < 1e-1 ? 'correct' : 'not-correct'
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
  margin: auto;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22px;
  color: blue;
  width: 60%;
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
