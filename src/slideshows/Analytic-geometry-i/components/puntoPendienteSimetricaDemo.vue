<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(style="margin: 0px 0px 0px 0px;").problem
    .center
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220" height="220px" width="300px" >
       
        <g transform="translate(0, 0)">    
         <text x="0" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan> = <tspan style="font-style: italic;">m</tspan>(<tspan style="font-style: normal;">x</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>)</text>

         <text x="0" y="100" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;-&ensp;<tspan style="font-style: normal;">0</tspan> = </text>    
         <text x="110" y="85" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">-b</tspan></text>
          <text x="115" y="115" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">a</tspan></text>
          <line  x1="105" y1="92" x2="150" y2="92" fill="none" stroke="#000" stroke-width="3"/>   
          <text x="155" y="100" font-size="30" fill="black" font-weight="bold" font-family="Times">(<tspan style="font-style: normal;">x</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">a</tspan>)</text>

         <text x="0" y="150" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">ay</tspan> = <tspan style="font-style: italic;">-bx</tspan>&ensp;+&ensp;<tspan style="font-style: italic;">ab</tspan></text>

         <text x="0" y="200" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">bx</tspan>&ensp;+&ensp;<tspan style="font-style: italic;">ay</tspan> = <tspan style="font-style: italic;">ab</tspan></text>
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
