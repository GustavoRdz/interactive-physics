<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem <strong>Weighing a Virus</strong>. In February 2004, scientists Purdue University used a highly sensitive technique to measure the mass of a vaccinia virus (the kind used in smallpox vaccine). The procedure involved measuring the frequency of oscillation of a tiny sliver of silicon (just 30 nm long) with a laser, first without the virus and then after the virus had attached itself to the silicon. The difference in mass caused a change in the frequency. We can model such a process as a mass on a spring. (a) Show that the ratio of the frequency with the virus attached (f<sub>s+v</sub>) to the frequency without the virus (f<sub>s</sub>) is given by the formula
    .center 
      img(src='../assets/equations/frequency.svg' width="200px" height="100px")
    p.problem(style="margin-top: -10px;") where m<sub>v</sub> is the mass of the virus and m<sub>s</sub> is the mass of the silicon sliver. Notice that it is not necessary to know or measure the force constant of the spring. (b) In some data, the silicon sliver has a mass of {{ silverMass }} femtograms and a frequency of {{ sFrequency }} PetaHertz without the virus and {{ vFrequency }} PHz with the virus. What is the mass of the virus, in femtograms?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Silicon silver mass (fg)
        input.center.data(:class="checkedSilverMass" v-model.number='enterSilverMass')
      p.inline.data Silicon silver frequency (PHz)
        input.center.data(:class="checkedSilverFreq" v-model.number='enterSilverFreq')
      p.inline.data Frequency with virus (PHz)
        input.center.data(:class="checkedVirusFreq" v-model.number='enterVirusFreq')
      p.inline.data Virus mass (fgr)
        input.center.data(:class="checkedVirusMassF" v-model.number='enterVirusMassF')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {}
  },
  computed: {},
  methods: {},
  mixins: [eagle.slide]
}
</script>

<style lang='scss' scoped>
.eg-slide {
  .eg-slide-content {
    // FIGURE AND CAPTIONS
    .figure {
      p {
        font-size: 0.7em;
        margin-top: 2em;
        margin-bottom: 0;
        color: #555;
      }
      width: 80%;
      margin-left: 10%;
    }
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
  margin: 15px 20px 15px 20px;
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
