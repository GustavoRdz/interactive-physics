<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(style="margin: 0px 0px 0px 0px;").problem
    .center
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" height="300px" width="500px" >
        <g transform="translate(157,0)">
        <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">F</tspan><tspan style="font-size: 30px; font-style: italic;">P</tspan> &ensp; = &ensp; <tspan style="font-style: italic;">P</tspan><tspan style="font-size: 30px; font-style: italic;">L</tspan></text>
        <line  x1="4" y1="24" x2="4" y2="50" fill="none" stroke="#000" stroke-width="2" />
        <line  x1="55" y1="24" x2="55" y2="50" fill="none" stroke="#000" stroke-width="2"/>
        <line  x1="10" y1="26" x2="50" y2="26" fill="none" stroke="#000" stroke-width="2"/>
        <line  x1="120" y1="24" x2="120" y2="50" fill="none" stroke="#000" stroke-width="2" />
        <line  x1="165" y1="24" x2="165" y2="50" fill="none" stroke="#000" stroke-width="2"/>
        <line  x1="125" y1="26" x2="160" y2="26" fill="none" stroke="#000" stroke-width="2"/>
        </g>
        <path  d = "M10,100 l5 10 10 -30 195 0" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
        <text x="25" y="105" font-size="30" fill="black" font-weight="bold" font-family="Times">(<tspan style="font-size: 30px; font-style: italic;">x</tspan> - <tspan style="font-size: 30px; font-style: italic;">p</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> + (<tspan style="font-size: 30px; font-style: italic;">y</tspan> - <tspan style="font-size: 30px;">0</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan>&ensp;= </text>
        
        <path  d = "M260,100 l5 10 10 -30 235 0" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
        <text x="275" y="105" font-size="30" fill="black" font-weight="bold" font-family="Times">(<tspan style="font-size: 30px; font-style: italic;">x</tspan> + <tspan style="font-size: 30px; font-style: italic;">p</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> + (<tspan style="font-size: 30px; font-style: italic;">y</tspan> - <tspan style="font-size: 30px; font-style: italic;">y</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan></text>
        
        <text x="85" y="155" font-size="30" fill="black" font-weight="bold" font-family="Times">(<tspan style="font-size: 30px; font-style: italic;">x</tspan> - <tspan style="font-size: 30px; font-style: italic;">p</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> + <tspan style="font-size: 30px; font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan>&ensp;= </text>
        
        <text x="275" y="155" font-size="30" fill="black" font-weight="bold" font-family="Times">(<tspan style="font-size: 30px; font-style: italic;">x</tspan> + <tspan style="font-size: 30px; font-style: italic;">p</tspan>)<tspan style="font-size: 15px;" baseline-shift = "super">2</tspan></text>

        <text x="20" y="200" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> - 2<tspan style="font-size: 30px; font-style: italic;">xp</tspan> + <tspan style="font-size: 30px; font-style: italic;">p</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> + <tspan style="font-size: 30px; font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan>&ensp;= <tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan> + 2<tspan style="font-size: 30px; font-style: italic;">xp</tspan> + <tspan style="font-size: 30px; font-style: italic;">p</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan></text>

        <text x="200" y="250" font-size="30" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "super">2</tspan>&ensp;= 4<tspan style="font-size: 30px; font-style: italic;">px</tspan></text>
       <rect x="190" y="220" width="120" height="50" fill="none" stroke="#0A0" />

        <line  x1="35" y1="200" x2="20" y2="180" fill="none" stroke="#A00" stroke-width="3"stroke-linecap="round"/>
        <line  x1="275" y1="200" x2="260" y2="180" fill="none" stroke="#A00" stroke-width="3"stroke-linecap="round"/>
        <line  x1="160" y1="200" x2="145" y2="180" fill="none" stroke="#00A" stroke-width="3"stroke-linecap="round"/>
        <line  x1="405" y1="200" x2="390" y2="180" fill="none" stroke="#00A" stroke-width="3"stroke-linecap="round"/>
        
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
