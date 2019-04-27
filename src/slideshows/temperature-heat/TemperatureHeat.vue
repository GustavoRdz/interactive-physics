<template lang="pug">
#TemperatureHeat.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h1 Temperature and heat
        img(src='./assets/U.svg')
        h4 Temperature, Heat, Calorimetry and Heat Transfer
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')

    slide(:steps=8, enter='bounceInRight' leave='bounceOutDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3
        | Topics
        .inline(class='animated infinite pulse heart')
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 2")
            <b>Thermal Equilibrium</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 3")
            <b>Thermometers and Temperature Scales</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 4")
            <b>Gas Thermometers and the Kelvin Scale</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 5")
            <b>Thermal Expansion</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 6")
            <b>Quantity of Heat</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 7")
            <b>Calorimetry and Phase Changes</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 8")
            <b>Mechanisms of Heat Transfer</b>

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Temperature and Heat
      p What is <em><strong>temperature</strong></em> ?
     
      p When measuring tempetature usually hold two objects in thermal contact. One of these objects use to be a thermometer <em> <strong>termometer</strong></em>
      p It is common to wait a long period of time (minutes) before get the correct measutement because reaching the <em><strong>thermal equilibrium</strong></em> is a slow process
      p Once the thermal equilibrium is reached the thermometer has the same temperature as the object to measure and its calibration allows to get the temperature of the object in it's scale

    slide(enter='bounceInDown', :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Thermal equilibrium
        .center
          equilibrio-termico

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h4.center Thermometer
      p If a physical quantity varies with heat, it can be used to measure temperature
      .center
        img(src='./assets/equations/thermometers.svg')
     
      

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h4.center The zeroth law of thermodynamics
      p If <em><strong>C</strong></em> is initially in thermal equilibrium with both <em><strong>A</strong></em> and <em><strong>B</strong></em>, then <em><strong>A</strong></em> and <em><strong>B</strong></em> are also in thermal equilibrium with each other.
      .center
        img(src='./assets/equations/zerothLaw.svg')
      
    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h5.center Thermometers and its scales
      p  <em><strong>Celsius temperature scale.</strong></em>  Celsius takes the melting (as T = 0&#x00B0; C) and boiling (T = 100&#x00B0; C) point of water as the reference points and then added one hundred equally spaced marks (degrees) between the reference points. 
        .center
          img(src='./assets/equations/celsiusScale.svg')
    
    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h5.center Thermometers and its scales
      p  <em><strong>Fahrenheit temperature scale.</strong></em>  The melting point of water is at 32&#x00B0;F and the boling point at 212&#x00B0; F. Then we have 180 degrees between the reference points 
        .center
          img(src='./assets/equations/fahrenheitScale.svg')

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h5.center Conversion between Celsius and Fahrenheit
      .center
          img(src='./assets/equations/celsiusToFahrenheit.svg')
      .center
          img(src='./assets/equations/fahrenheitToCelsius.svg')

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h5.center Thermometers and its scales
      p  <em><strong>Fahrenheit temperature scale.</strong></em>  The melting point of water is at 32&#x00B0;F and the boling point at 212&#x00B0; F. Then we have 180 degrees between the reference points 
        .center
          img(src='./assets/equations/constantVolumeGasThermometer.svg')

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 1
      example-one
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3.center Thermal expansion
      p Most materials expand when their temperatures increase
      h5.center Linear expansion
      .center
          img(src='./assets/equations/linearExpansion.svg')

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Linear expansion
      p.center(style="font-family: serif;") &#x394;<em>L</em> = &#x03B1;<em>L</em><sub>0</sub>&#x394;<em>T</em>
      p.center(style="font-family: serif;") <em>L</em> = <em>L</em><sub>0</sub> + &#x394;<em>L</em>
      p.center(style="font-family: serif;") <em>L</em> = <em>L</em><sub>0</sub>( 1 + &#x03B1;&#x394;<em>T</em>)

      .centered
          #table-wrapper
            table#desc
              caption Coefficients of linear expansion
              tr
                th(height='5px') Material
                th(height='5px') &#x03B1; [K<sup>-1</sup> or (&#x00b0;C)<sup>-1</sup>]
              tr
                td Aluminium
                td 2.4 x 10<sup>-5</sup>
              tr
                td Brass
                td 1.9 x 10<sup>-5</sup>
              tr
                td Cooper
                td 1.7 x 10<sup>-5</sup>
              tr
                td Glass
                td 0.4 - 0.9 x 10<sup>-5</sup>
              tr
                td Invar (Nickel-iron alloy)
                td 0.09 x 10<sup>-5</sup>
              tr
                td Quartz (fused)
                td 0.04 x 10<sup>-5</sup>
              tr
                td Steel
                td 1.1 x 10<sup>-5</sup>

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Volume expansion
      p.center(style="font-family: serif;") &#x394;<em>V</em> = <em>&#x03B2;</em><em>V</em><sub>0</sub>&#x394;<em>T</em>
      p.center(style="font-family: serif;") <em>V</em> = <em>V</em><sub>0</sub> + &#x394;<em>V</em>
      p.center(style="font-family: serif;") <em>V</em> = <em>V</em><sub>0</sub>( 1 + <em>&#x03B2;</em>&#x394;<em>T</em>)

      .centered
          #table-wrapper
            table#desc
              caption Coefficients of Volume expansion
              tr
                th(height='5px') Material
                th(height='5px') <em>&#x03B2;</em> [K<sup>-1</sup> or (&#x00b0;C)<sup>-1</sup>]
              tr
                td Aluminium
                td 7.2 x 10<sup>-5</sup>
              tr
                td Brass
                td 5.7 x 10<sup>-5</sup>
              tr
                td Cooper
                td 5.1 x 10<sup>-5</sup>
              tr
                td Glass
                td 1.2 - 2.7 x 10<sup>-5</sup>
              tr
                td Invar
                td 0.27 x 10<sup>-5</sup>
              tr
                td Quartz (fused)
                td 0.12 x 10<sup>-5</sup>
              tr
                td Steel
                td 3.3 x 10<sup>-5</sup>
    
    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 2
      example-two
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3 Exercise 3
      example-three
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3.center Exercise 4
      example-four
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h4.center Fun soon!

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h4.center Fun soon!

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h4.center Fun soon!

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Temperature and Heat',
    description: 'Temperature, Heat, Calorimetry, and Heat Transfer (In progress)',
    path: 'temperature-heat'
  },
  components: {
    'pressure-machine': require('./PressureMachine'),
    'equilibrio-termico': require('./EquilibrioTermico'),
    'example-one': require('./components/ExampleOne'),
    'example-two': require('./components/ExampleTwo'),
    'example-three': require('./components/ExampleThree'),
    'example-four': require('./components/ExampleFour')
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
  width: 11em;
  border-collapse: collapse;
  border-bottom: 1px solid black;
  margin: 0 auto;
  
  & th {
    font-family: 'Times New Roman', Times, serif;
    background-color: whitesmoke;
    border-bottom: 1px solid black;
    padding: 1em;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
  }
  
  & td {
    text-align:left;
    padding-left: 1em;
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
</style>
