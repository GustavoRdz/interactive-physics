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
      p  <em><strong>Kelvin temperature scale</strong></em> and the gas thermometer
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

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3.center Exercise 5
      example-five
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
      h3.center Exercise 6
      example-six
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
      h4.center Quantity of heat
      //- quantity-of-heat
      p Energy transfer that takes place solely because of temperature difference is called <strong><em>heat flow</em></strong> or <strong><em>heat transfer</em></strong> and energy transferred in this way is called <strong><em style="color: red;">heat</em></strong>
      p The <strong><em>calorie</em></strong> is defined as <em> the amount of heat requiered to raise the temperature of 1 gram of water from 14.5 &#x00B0;C to 15.5&#x00B0; C</em>
      p The <strong>Btu</strong> (<strong>British thermal unit</strong>) is the quantity od heat required to rise the temperature of 1 pound (weight) of water  1&#x00B0;F from 63 &#x00B0;F to 64&#x00B0;F
      p.center <strong>1 cal = 4.186 J</strong>
      p.center <strong>1 kcal = 1000 cal = 4186 J</strong>
      p.center <strong>1 Btu = 778 ft·lb = 252 cal = 1055 J</strong>

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3.center Exercise 7
      example-seven
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
      h4.center Specific heat
      p The quantity of heat <strong><em>Q</em></strong> required to increase the temperature of a mass <strong><em>m</em></strong> of a certain material from <strong><em>T<sub>1</sub></em></strong> to <strong><em>T<sub>2</sub></em></strong> is proportional to the temperature change &#x394;<strong><em>T</em></strong> = <strong><em>T<sub>2</sub></em></strong> - <strong><em>T<sub>1</sub></em></strong>. It is also proportional to the mass <strong><em>m</em></strong> of the material
      p.center <strong><em>Q</em></strong> = <strong><em>m</em></strong><strong><em>c</em></strong>&#x394;<strong><em>T</em></strong>
      p(style="color: peru;").center Heat required for temperature change &#x394;<strong><em>T</em></strong> of mass <strong><em>m</em></strong>
      p where <strong><em>c</em></strong> is a quantity, different for different materials, called the <strong>specifc heat</strong> of the material.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h4.center Specific heat
      .centered
          #table-wrapper
            table#desc
              caption Specific heat
              tr
                th(height='5px') Material
                th(height='5px') <em>c</em> (J/kg.K)
              tr
                td Aluminium
                td 910
              tr
                td Beryllium
                td 1970
              tr
                td Cooper
                td 390
              tr
                td Ethanol
                td 2428
              tr
                td Ethylene glycol
                td 2386
              tr
                td Ice (near 0&#x00B0;C)
                td 2100
              tr
                td Iron
                td 470
              tr
                td Lead
                td 130
              tr
                td Marble (CaCO<sub>3</sub>)
                td 879
              tr
                td Mercury
                td 138
              tr
                td Salt (NaCl)
                td 879
              tr
                td Silver
                td 234
              tr
                td Water (liquid)
                td 4190
    
    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h4.center Calorimetry
      p One technique for measuring specific heat involves heating a sample to some known temperature <strong><em>T<sub>x</sub></em></strong>, placing it in a vessel containing water of known mass and temperature <strong><em>T<sub>w</sub></em></strong><<strong><em>T<sub>x</sub></em></strong>, and measuring the temperature of the water after equilibrium has been reached.
      p This technique is called <strong><em>calorimetry</em></strong>, and devices in which this energy trasfer occurs are called <strong><em>calorimeters</em></strong>.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h4.center Calorimetry
      p.center <strong><em>Q</em></strong><sub style="font-size: 15px; font-weight: bold;" >cold</sub> + <strong><em>Q</em></strong><sub style="font-size: 15px; font-weight: bold;">hot</sub> = 0
      p.center <strong><em>Q</em></strong><sub style="font-size: 15px; font-weight: bold;">cold</sub> = - <strong><em>Q</em></strong><sub style="font-size: 15px; font-weight: bold;">hot</sub>
      .center
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" height="300" width="400" >
          <g style="text-transform: none;">
            <path d="M60 50 A10 10 0 0 0 50 60 L50 240 A10 10 0 0 0 60 250 L340 250 A10 10 0 0 0 350 240 L350 60 A10 10 0 0 0 340 50 Z" stroke="#000" fill="deepskyblue" stroke-opacity="0.5"></path>

            <path d="M110 150 A10 10 0 0 0 100 160 L100 230 A10 10 0 0 0 110 240 L240 240 A10 10 0 0 0 250 230 L250 160 A10 10 0 0 0 240 150 Z" stroke="#000" fill="tomato" stroke-opacity="0.5" transform="translate(25,-10)"></path>

            <path d="M135 120 L125 140 L130 137 L130 200 L140 200 L140 137 L145 140 Z" stroke="#000" fill="red" stroke-opacity="0.5" transform="translate(15,-20)"></path>
            <text x="160" y="200" font-family="times">Q<tspan baseline-shift="sub" font-size="15">hot</tspan></text>
            <text x="160" y="100" font-family="times">Q<tspan baseline-shift="sub" font-size="15">cold</tspan></text>

          </g>
        </svg>

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h3.center Exercise 8
      example-eight
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
      h4.center Phase change
      p <strong><em>Phase</em></strong> refers to the materia state: solid, liquid and gas
      p A transition between the materia states is called <strong><em>Phase change</em></strong>

      p Heat transfer in a phase change of a material is proportional to its mass
      p.center Q = &#x00B1; mL 

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h4.center Fun soon!

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
    'example-four': require('./components/ExampleFour'),
    'example-five': require('./components/ExampleFive'),
    'example-six': require('./components/ExampleSix'),
    'example-seven': require('./components/ExampleSeven'),
    'example-eight': require('./components/ExampleEight'),
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
  width: 10em;
  border-collapse: collapse;
  border-bottom: 1px solid black;
  margin: 0 auto;
  
  & th {
    font-family: 'Times New Roman', Times, serif;
    background-color: whitesmoke;
    border-bottom: 1px solid black;
    padding: .5em 0em .5em 3em;
    text-align: left;
    font-size: 15px;
    font-weight: bold;
  }
  
  & td {
    text-align:left;
    padding-left: 3em;
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
