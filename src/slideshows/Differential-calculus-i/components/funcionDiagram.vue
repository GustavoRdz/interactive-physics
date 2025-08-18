<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(style="margin: 25px 0px 10px 0px;").problem
    .center
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" height="300px" width="1000px" >

        <!-- x grid -->
        //- <line v-for="x in [88, 126, 164, 202, 240, 278, 316, 354, 392, 430, 468, 506, 544, 582, 620]" fill="none" stroke="#000" stroke-width="0.5" :x1="x" y1="10" :x2="x" y2="390" stroke-linecap="round"/>
        <!-- x scale bold -->
        //- <line v-for="x in [50, 202, 354, 506, 658]" fill="none" stroke="#000" stroke-width="3" :x1="x" y1="10" :x2="x" y2="390" stroke-linecap="round"/>
        <!-- y grid -->
        //- <line v-for="y in [48, 86, 124, 162, 200, 238, 276, 314, 352]" fill="none" stroke="#000" stroke-width="0.5" x1="50" :y1="y" x2="660" :y2="y" stroke-linecap="round"/>
        <!-- line -->
        //- <path d="M100 330 l500 -250 l-10 15 m15 -20 l-23 6" stroke="#f00" fill="none" stroke-opacity="1" stroke-width="5" ></path>

        //- Dominio
        <ellipse rx="100" ry="50" cx="120" cy="80" style="fill:lightblue;stroke:green;stroke-width:3" />
        //- Rango
        <ellipse rx="100" ry="50" cx="500" cy="80" style="fill:orange;stroke:green;stroke-width:3" />
        <ellipse rx="80" ry="40" cx="500" cy="80" style="fill:orange;stroke:green;stroke-width:3" />

        <circle r="4" cx="120" cy="100"  fill="black" stroke="#000" stroke-width="1"/>
        <circle r="4" cx="450" cy="90"  fill="black" stroke="#000" stroke-width="1"/>

        <!-- text -->
        <text x="80" y="60" font-size="25" fill="Black" font-weight="bold" font-family="Times" font-style="normal"> Dominio</text>
        <text x="40" y="30" font-size="25" fill="blue" font-weight="bold" font-family="Times" font-style="italic"> X</text>
        <text x="100" y="90" font-size="25" fill="blue" font-weight="bold" font-family="Times" font-style="italic"> x</text>
        <text x="230" y="190" font-size="35" fill="red" font-weight="bold" font-family="Times" font-style="italic"> f</text>
        <text x="460" y="70" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="normal"> Rango </text>
        <text x="440" y="30" font-size="25" fill="blue" font-weight="bold" font-family="Times" font-style="italic"> Y</text>
        <text x="460" y="100" font-size="25" fill="black" font-weight="bold" font-family="Times" font-style="italic"> y = f(x) </text>

        //- <path d="M130 100 l310 -10" stroke="#f00" fill="none" stroke-opacity="3" stroke-width="1" ></path>
        <path id="lineAC" d="M 123 110 q 50 200 314 -10 l-5 10 l5 -10 l-11 2" stroke="red" stroke-width="4" fill="none"/>
        </svg>

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
