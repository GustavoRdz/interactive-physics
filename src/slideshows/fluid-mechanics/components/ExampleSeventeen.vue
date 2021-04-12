<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A gas storage tank with a cross-sectional area <em>A</em><sub>1</sub>, filled up to a height <em>h</em>. The space above the gasoline contains air at P<sub>0</sub> and the gasoline comes out through a short tube of area A<sub>2</sub>, located at the bottom of the tank.
    p.solution a) Deduce expresions for the speed of flow in the tube and the volume flow rate
    p.solution b) If the tank is open to the atmosphere which will be the expression for the flow speed and volume flow rate
      .center
        img(width="350px" src='../assets/equations/ex17Solutions.svg')
    
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
