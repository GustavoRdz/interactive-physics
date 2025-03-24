<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(style="margin: 0px 0px 0px 0px;").problem
    .center
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" height="100px" width="400px" >

        <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">d</tspan> = <tspan style="font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan><tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> &ensp; = &ensp; (<tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> - <tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> + (<tspan style="font-size: 30px; font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> - <tspan style="font-size: 30px; font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan></text>
        <line  x1="55" y1="26" x2="55" y2="50" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
        <line  x1="110" y1="26" x2="110" y2="50" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
        <line  x1="60" y1="26" x2="105" y2="26" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
        <path  d = "M170,45 l5 10 10 -30 235 0" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
        </svg>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
    }
  },
  computed: {
  },
  methods: {
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
