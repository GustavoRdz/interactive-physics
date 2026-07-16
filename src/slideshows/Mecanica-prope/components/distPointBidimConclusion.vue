<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(style="margin: 0px 0px 0px 0px;").problem
    .center
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" height="300px" width="500px" >

        <g transform="translate(-2, 0)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times">(<tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan><tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> = (<tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan><tspan style="font-size: 30px; font-style: italic;">A</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> + (<tspan style="font-size: 30px; font-style: italic;">A</tspan><tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan></text>
          <line  x1="25" y1="26" x2="65" y2="26" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
          <line  x1="135" y1="26" x2="175" y2="26" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
          <line  x1="240" y1="26" x2="275" y2="26" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
        </g>

                
        <g transform="translate(0,60)">
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan><tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> &ensp; = &emsp; <tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> - <tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>&ensp;<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> +&ensp;<tspan style="font-size: 30px; font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> - <tspan style="font-size: 30px; font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>&ensp;<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan></text>
          <line  x1="2" y1="26" x2="2" y2="50" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
          <line  x1="65" y1="26" x2="65" y2="50" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
          <line  x1="145" y1="30" x2="145" y2="55" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
          <line  x1="230" y1="30" x2="230" y2="55" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
          <line  x1="280" y1="30" x2="280" y2="55" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
          <line  x1="360" y1="30" x2="360" y2="55" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
          <line  x1="15" y1="26" x2="55" y2="26" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
          <path  d = "M120,45 l5 10 10 -30 235 0" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
        </g>
        <g transform="translate(0,120)">
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan><tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> &ensp; = &ensp; (<tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> - <tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> + (<tspan style="font-size: 30px; font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> - <tspan style="font-size: 30px; font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan></text>
          <line  x1="2" y1="26" x2="2" y2="50" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
          <line  x1="65" y1="26" x2="65" y2="50" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
          <line  x1="15" y1="26" x2="55" y2="26" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
          <path  d = "M120,45 l5 10 10 -30 235 0" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
        </g>

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
