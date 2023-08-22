<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false')
      .center.frontpage
        h2 Mecatronica Computacional
        //- img(src='./assets/U.svg' style="height: 100px;")
        h4 Open modelica introduction
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modelica</sup>
      h4(style="margin: -20px 0 0 0; ").center Modelica
      p(style="line-height: 1.7em;") Modelica is primarily a modeling language that allows specification of mathematical models of complex natural or man-made systems,
      p(style="line-height: 1.7em;") for example, for the purpose of computer simulation of dynamic systems where behavior evolves as a function of time.
      p(style="line-height: 1.7em;") Modelica is also an object-oriented equation-based programming language, oriented toward computational applications with high complexity requiring high performance.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modelica</sup>
      h4(style="margin: -20px 0 0 0; ").center Modelica
      p(style="line-height: 1.7em;") The four most important features of Modelica are:
      p(style="line-height: 1.7em;") 1. Modelica is primarily based on equations instead of assignment statements. This permits acausal modeling that gives better reuse of classes since equations do not specify a certain data flow direction.<br> Thus a Modelica class can adapt to more than one data flow context.
      p(style="line-height: 1.7em;") 2. Modelica has multidomain modeling capability, meaning that model components corresponding to physical objects from several different domains such as, for example, electrical, mechanical, thermodynamic, hydraulic, biological, and control applications can be described and connected.
        

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modelica</sup>
      h4(style="margin: -20px 0 0 0; ").center Modelica
      p(style="line-height: 1.7em;") The four most important features of Modelica are:
      p(style="line-height: 1.7em;") 3. Modelica is an object-oriented language with a general class concept that unifies classes, generics—known as templates in C++—and general subtyping into a single language construct. This facilitates reuse of components and evolution of models.
      p(style="line-height: 1.7em;") 4. Modelica has a strong software component model, with constructs for creating and connecting components. Thus the language is ideally suited as an architectural description language for complex physical systems and to some extent for software systems.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modelica</sup>
      h4(style="margin-top: -30px;").center  Hello world 
      p(style="line-height: 1.7em; margin-top: -50px;")
      .center
        img(src='./assets/omwebbook/om1_1.png' height="650px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modelica</sup>
      h4(style="margin-top: -30px;").center  Planar pendulum
      p(style="line-height: 1.7em; margin-top: -50px;")
      .center
        img(src='./assets/omwebbook/om1_2.png' height="700px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modelica</sup>
      h4(style="margin-top: -30px;").center  Any differential equation 
      p(style="line-height: 1.7em; margin-top: -50px;")
      .center
        img(src='./assets/omwebbook/om1_3.png' height="700px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modelica</sup>
      h4(style="margin-top: -30px;").center  Van Der Pol oscillator
      p(style="line-height: 1.7em; margin-top: -50px;")
      .center
        img(src='./assets/omwebbook/om1_4.png' height="700px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modelica</sup>
      h4(style="margin-top: -30px;").center  Activity 2
      p(style="line-height: 1.7em; margin-top: -50px;") Part 1/3: Analitical results
      .center
        img(src='./assets/omwebbook/act_1_2.png' height="200px")
        img(src='./assets/omwebbook/act_1_3.png' height="200px")
        img(src='./assets/omwebbook/act_1_4.png' height="200px")
      
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modelica</sup>
      h4(style="margin-top: -30px;").center  Activity 2
      p(style="line-height: 1.7em; margin-top: -50px;") part 1/3:  Results from modelica
      .center
        img(src='./assets/omwebbook/act_1.png' height="400px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modelica</sup>
      h4(style="margin-top: -30px;").center  Activity 2
      p(style="line-height: 1.7em; margin-top: -50px;") part 2/3: Analitical results
      .center
        img(src='./assets/omwebbook/act_2_1.png' height="600px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modelica</sup>
      h4(style="margin-top: -30px;").center  Activity 2
      p(style="line-height: 1.7em; margin-top: -50px;") part 2/3: Modelica results
      .center
        img(src='./assets/omwebbook/act_2.png' height="400px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modelica</sup>
      h4(style="margin-top: -30px;").center  Activity 2
      p(style="line-height: 1.7em; margin-top: -50px;") part 3/3: Analitical
      .center
        img(src='./assets/omwebbook/act_3_1.png' height="500px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modelica</sup>
      h4(style="margin-top: -30px;").center  Activity 2
      p(style="line-height: 1.7em; margin-top: -50px;") part 3/3: Modelica results
      .center
        img(src='./assets/omwebbook/act_3.png' height="300px" style="margin: 10px;")
        img(src='./assets/omwebbook/act_4.png' height="300px" style="margin: 10px;")
        p without friction / with friction

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : References: {{ slides.length }}</sup>
        h3 References
        .center
          img(src='./assets/omwebbook/om_ref1.png' height="400px" style="margin: 10px;")
          img(src='./assets/omwebbook/om_ref2.png' height="400px" style="margin: 10px;")
        p.small Slides created by G. Rodríguez-Morales and spheroidGames, gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com with use of images from the above referenced book
        

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Open modelica',
    description: 'Open modelica introduction',
    path: 'open-modelica-intro',
    course: 'Computational Mechatronics',
    part: null
  },
  components: {
    'example-one': require('./components/ExampleOne'),
    'example-two': require('./components/ExampleTwo'),
    'example-three': require('./components/ExampleThree'),
    'example-four': require('./components/ExampleFour'),
    'example-five': require('./components/ExampleFive'),
    'example-six': require('./components/ExampleSix'),
    'example-seven': require('./components/ExampleSeven'),
    'example-eight': require('./components/ExampleEight'),
    'example-nine': require('./components/ExampleNine'),
    'example-ten': require('./components/ExampleTen'),
    'example-eleven': require('./components/ExampleEleven'),
    'example-twelve': require('./components/ExampleTwelve'),
    'example-thirteen': require('./components/ExampleThirteen'),
    'quantity-of-heat': require('./components/QuantityOfHeat')
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/dist/themes/agrume/agrume';
@import 'node_modules/eagle.js/dist/themes/gourmet/gourmet';
#TemperatureHeat {
  .frontpage {
    img {
      height: 7em;
    }
    img.control-schema {
      width: 8em;
      height: 3em;
    }
  }
  .heart {
    width: 1em;
    height: 0.8em;
    margin-left: 0.1em;
    margin-right: 0.1em;
    background-image: url('./assets/logo.svg');
    background-position: center center;
    background-repeat:  no-repeat;
    background-size: contain;
  }

  .quarter {
    text-align: center;
    p {
      margin-top: 0;
      text-align: center;
    }
    h4 {
      margin-top: 0;
      margin-bottom: 0
    }
  }
  .boredYet {
    p {
      margin-bottom: 0.3em;
      margin-top: 1.3em;
    }
    .button {
      border: none;
    }
    .button.prev {
      float: left;
    }
    .button.next {
      float: right;
    }
  }
  img.computerkid {
    height: 6.5em;
  }

  a {
    color: black;
  }

  .parentWindow {
    border: solide 1px red;
  }
}
#table-wrapper {
  display: flex;
  padding-left:0px;
  align-content: center;

}
#desc {
  width: 18em;
  border-collapse: collapse;
  border-bottom: 1px solid black;
  margin: 0 auto;

  & th {
    font-family: 'Times New Roman', Times, serif;
    background-color: whitesmoke;
    border-bottom: 1px solid black;
    padding: .5em 0em .5em -3em;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
  }

  & td {
    text-align: center;
    padding-left: 0em;
    margin: 0 auto;
    font-size: 14px;
    height: 10px;
  }

  & caption {
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    background-color:slateblue;
    color: white;
  }
}

.mth {
  font-family: 'Times New Roman', Times, serif;
}
</style>
