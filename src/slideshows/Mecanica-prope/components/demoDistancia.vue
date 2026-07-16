<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(style="margin: 0px 0px 0px 0px;").problem
    .center
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" height="200px" width="600px" >

       
        <g transform="translate(0, 0)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">O</tspan><tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> = </text>
          <line  x1="15" y1="26" x2="55" y2="26" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
        </g>
        <g transform="translate(85, 0)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">O</tspan><tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan> + </text>
          <line  x1="15" y1="26" x2="55" y2="26" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
        </g>
        <g transform="translate(170, 0)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan><tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan></text>
          <line  x1="15" y1="26" x2="55" y2="26" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
        </g>
        <g transform="translate(23, 50)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> = </text>
        </g>
        <g transform="translate(80, 50)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>&ensp;+</text>
        </g>
        <g transform="translate(150, 50)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan><tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
          <line  x1="15" y1="26" x2="55" y2="26" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
        </g>
        <g transform="translate(-8, 100)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan><tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> = </text>
          <line  x1="15" y1="26" x2="55" y2="26" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
        </g>
        <g transform="translate(80, 100)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> - </text>
        </g>
        <g transform="translate(130, 100)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
        </g>
        <!-- second column -->
        <g transform="translate(350, 0)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan><tspan style="font-size: 30px; font-style: italic;">O</tspan> = </text>
          <line  x1="15" y1="26" x2="55" y2="26" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
        </g>
        <g transform="translate(430, 0)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan><tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan> + </text>
          <line  x1="15" y1="26" x2="55" y2="26" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
        </g>
        <g transform="translate(520, 0)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan><tspan style="font-size: 30px; font-style: italic;">O</tspan></text>
          <line  x1="15" y1="26" x2="55" y2="26" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
        </g>
        <g transform="translate(357, 50)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">- x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> = </text>
        </g>
        <g transform="translate(430, 50)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan><tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan> - </text>
          <line  x1="15" y1="26" x2="55" y2="26" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
        </g>
        <g transform="translate(515, 50)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
        </g>
        <g transform="translate(344, 100)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan><tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan> = </text>
          <line  x1="15" y1="26" x2="55" y2="26" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
        </g>
        <g transform="translate(430, 100)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan> - </text>
        </g>
        <g transform="translate(485, 100)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan></text>
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
