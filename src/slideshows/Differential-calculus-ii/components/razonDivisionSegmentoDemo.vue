<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(style="margin: 0px 0px 0px 0px;").problem
    .center
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 500" height="500px" width="700px" >

       
        <g transform="translate(0, 0)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">r</tspan> = </text>
          <text x="60" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan><tspan style="font-style: italic;">P</tspan></text>
          <text x="60" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">P</tspan><tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan></text>
          <line  x1="55" y1="42" x2="115" y2="42" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
          <line  x1="65" y1="5" x2="105" y2="5" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
          <line  x1="65" y1="50" x2="100" y2="50" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
        </g>
        <g transform="translate(120, 0)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"> = </text>
          <text x="40" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"> <tspan style="font-style: italic;">x</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
          <text x="40" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"> <tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">x</tspan></text>
          <line  x1="35" y1="42" x2="130" y2="42" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
        </g>
        <g transform="translate(0, 120)">    
          <text x="10" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">r</tspan>(<tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">x</tspan>) = </text>
          <text x="150" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
        </g>
        <g transform="translate(0, 190)">    
          <text x="10" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">rx</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">rx</tspan> = </text>
          <text x="150" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
        </g>
        <g transform="translate(0, 260)">    
          <text x="10" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>&ensp;+&ensp;<tspan style="font-style: italic;">rx</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> = </text>
          <text x="150" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan>&ensp;+&ensp;<tspan style="font-style: italic;">rx</tspan></text>
        </g>
        <g transform="translate(0, 330)">    
          <text x="10" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>&ensp;+&ensp;<tspan style="font-style: italic;">rx</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> = </text>
          <text x="150" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan>(1&ensp;+&ensp;<tspan style="font-style: italic;">r</tspan>)</text>
        </g>
        <g transform="translate(0, 400)">    
          <text x="10" y="53" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">x</tspan> = </text>    
          <text x="70" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>&ensp;+&ensp;<tspan style="font-style: italic;">rx</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan></text>
          <text x="70" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: normal;">1</tspan>&ensp;+&ensp;<tspan style="font-style: italic;">r</tspan></text>
          <text x="200" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">r</tspan>&ensp;&ne; &ensp;<tspan style="font-style: italic;">-1</tspan></text>   
          <line  x1="60" y1="45" x2="175" y2="45" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
        </g>
        <!-- second column -->
        <g transform="translate(400, 0)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">r</tspan> = </text>
          <text x="60" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan><tspan style="font-style: italic;">P</tspan></text>
          <text x="60" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">P</tspan><tspan style="font-size: 30px; font-style: italic;">P</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan></text>
          <line  x1="55" y1="42" x2="115" y2="42" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
          <line  x1="65" y1="5" x2="105" y2="5" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
          <line  x1="65" y1="50" x2="100" y2="50" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
        </g>
        <g transform="translate(520, 0)">    
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"> = </text>
          <text x="40" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"> <tspan style="font-style: italic;">y</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
          <text x="40" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"> <tspan style="font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">y</tspan></text>
          <line  x1="35" y1="42" x2="130" y2="42" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
        </g>
        <g transform="translate(400, 120)">    
          <text x="10" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">r</tspan>(<tspan style="font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">y</tspan>) = </text>
          <text x="150" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
        </g>
        <g transform="translate(400, 190)">    
          <text x="10" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">ry</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">ry</tspan> = </text>
          <text x="150" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
        </g>
        <g transform="translate(400, 260)">    
          <text x="10" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>&ensp;+&ensp;<tspan style="font-style: italic;">ry</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> = </text>
          <text x="150" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;+&ensp;<tspan style="font-style: italic;">ry</tspan></text>
        </g>
        <g transform="translate(400, 330)">    
          <text x="10" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>&ensp;+&ensp;<tspan style="font-style: italic;">ry</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> = </text>
          <text x="150" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>(1&ensp;+&ensp;<tspan style="font-style: italic;">r</tspan>)</text>
        </g>
        <g transform="translate(400, 400)">    
          <text x="10" y="53" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">y</tspan> = </text>    
          <text x="70" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>&ensp;+&ensp;<tspan style="font-style: italic;">ry</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan></text>
          <text x="70" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: normal;">1</tspan>&ensp;+&ensp;<tspan style="font-style: italic;">r</tspan></text>
          <text x="200" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">r</tspan>&ensp;&ne; &ensp;<tspan style="font-style: italic;">-1</tspan></text>   
          <line  x1="60" y1="45" x2="175" y2="45" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
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
