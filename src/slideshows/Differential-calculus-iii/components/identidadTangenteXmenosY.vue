<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(style="margin: 0px 0px 0px 0px;").problem
    .center
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" height="100px" width="400px" >
       
        <g transform="translate(0, 0)">    
          <text x="10" y="53" font-size="30" fill="black"  font-weight="bold" font-family="Times">tan(<tspan style="font-style: italic;">x</tspan> - <tspan style="font-style: italic;">y</tspan>) = </text>    
          <text x="170" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times">tan(<tspan style="font-style: italic;">x</tspan>)&ensp;-&ensp;tan(<tspan style="font-style: italic;">y</tspan>)</text>
          <text x="165" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times">1 + tan(<tspan style="font-style: normal;">x</tspan>) tan(<tspan style="font-style: italic;">y</tspan>)</text>
          //- <text x="200" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>&ensp;&ne; &ensp;<tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan></text>   
          <line  x1="160" y1="45" x2="375" y2="45" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
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
