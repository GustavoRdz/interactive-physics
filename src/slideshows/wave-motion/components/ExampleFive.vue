<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content 
    p.problem Two pulses are moving in opposite directions at on a taut string, each with a speed of 1.0 cm/s. Each square is 1.0 cm.<br> Sketch the shape of the string at the end of (a) 6.0 s; (b) 7.0 s; (c) 8.0 s.
    //- svg(xmlns='http://www.w3.org/2000/svg', width="1000" height="400" viewBox="0 0 1000 400")
    //-   rect( x="0" y="0" width="1000" height="400" stroke="#f57c00" fill="#f57c00" stroke-width="1" opacity= "0.2")
    //-   circle(fill='#000', stroke-width='2', cx='12', cy='9', r='3')

    .center
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 300" width="980px" height="210px">

       <!-- <rect x="0" y="0" width="980" height="210" stroke="#f57c00" fill="#0f0" stroke-width="1"  opacity= "0.3"/> -->
        <!-- grid hor-->
        <line v-for="(item, index) in [-50, 0, 50, 100, 150, 200, 250, 300]" fill="none" stroke="#000" stroke-width="2" x1="0" :y1="item + 10" x2="1020" :y2="item + 10" opacity="0.2" stroke-linecap="round"/>
        
        <!-- grid vert-->
        <line v-for="(item, index) in [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000]" fill="none" stroke="#000" stroke-width="2" :x1="item + 10" y1="-60" :x2="item + 10" y2="320" opacity="0.2" stroke-linecap="round"/>

        <!-- string -->
        <path d="M0,160 L110,160 160,58 260,160 760,160 860,58 910,160 1050,160" fill="none" stroke="#f57c00" stroke-width="8" stroke-linecap="round"/>
       
        <!-- speed -->
        <line x1="180" y1="58" x2="270" y2="58" stroke="#00f" stroke-width="10" stroke-linecap="round"/>
        <line x1="250" y1="48" x2="275" y2="58" stroke="#00f" stroke-width="8" stroke-linecap="round"/>
        <line x1="250" y1="68" x2="275" y2="58" stroke="#00f" stroke-width="8" stroke-linecap="round"/>

        <!-- speed -->
        <line x1="800" y1="58" x2="710" y2="58" stroke="#00f" stroke-width="10" stroke-linecap="round"/>
        <line x1="705" y1="58" x2="730" y2="48" stroke="#00f" stroke-width="8" stroke-linecap="round"/>
        <line x1="705" y1="58" x2="730" y2="68" stroke="#00f" stroke-width="8" stroke-linecap="round"/>
      </svg>

    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Box mass (kg)
    //-     input.center.data(:class="checkedWeight" v-model.number='enterWeight')
    //-   p.inline.data Elastic constant (N/m)
    //-     input.center.data(:class="checkedElastic" v-model.number='enterElastic')
    //-   p.inline.data Stone mass (Kg)
    //-     input.center.data(:class="checkedStone" v-model.number='enterStone')
    //-   p.inline.data Amplitude (m)
    //-     input.center.data(:class="checkedAmplitude" v-model.number='enterAmplitude')
    //-   p.inline.data Only box period (s)
    //-     input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
    //-   p.inline.data Only box amplitude (m)
    //-     input.center.data(:class="checkedAmplitude2" v-model.number='enterAmplitude2')
    //-   p.inline.data greater or smaller?
    //-     input.center.data(:class="checkedGreat" v-model.number='enterGreat')

</template>
<script>
import eagle from 'eagle.js'
// const arrayMove = require('array-move')

export default {
  data: function () {
    return {
    }
  },
  computed: {
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
