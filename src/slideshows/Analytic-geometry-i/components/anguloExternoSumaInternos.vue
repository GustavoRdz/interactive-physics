<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(style="margin: 0px 0px 0px 0px;").problem
    .center
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 120" height="120px" width="300px" >

        <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">&alpha;</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> = <tspan style="font-size: 30px; font-style: italic;">&alpha;</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan> + <tspan style="font-size: 30px; font-style: italic;">&theta;</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
        <text x="10" y="100" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">&theta;</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan> = <tspan style="font-size: 30px; font-style: italic;">&alpha;</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> - <tspan style="font-size: 30px; font-style: italic;">&alpha;</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan></text>
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
