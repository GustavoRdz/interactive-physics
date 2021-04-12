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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3 Temperature and Heat
      p What is <em><strong>temperature</strong></em> ?

      p When measuring tempetature usually hold two objects in thermal contact. One of these objects use to be a thermometer <em> <strong>termometer</strong></em>
      p It is common to wait a long period of time (minutes) before get the correct measutement because reaching the <em><strong>thermal equilibrium</strong></em> is a slow process
      p Once the thermal equilibrium is reached the thermometer has the same temperature as the object to measure and its calibration allows to get the temperature of the object in it's scale

    slide(enter='bounceInDown', :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3 Thermal equilibrium
        .center
          equilibrio-termico

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Thermometer
      p If a physical quantity varies with heat, it can be used to measure temperature
      .center
        img(src='./assets/equations/thermometers.svg')



    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center The zeroth law of thermodynamics
      p If <em><strong>C</strong></em> is initially in thermal equilibrium with both <em><strong>A</strong></em> and <em><strong>B</strong></em>, then <em><strong>A</strong></em> and <em><strong>B</strong></em> are also in thermal equilibrium with each other.
      .center
        img(src='./assets/equations/zerothLaw.svg')

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center Thermometers and its scales
      p  <em><strong>Celsius temperature scale.</strong></em>  Celsius takes the melting (as T = 0&#x00B0; C) and boiling (T = 100&#x00B0; C) point of water as the reference points and then added one hundred equally spaced marks (degrees) between the reference points.
        .center
          img(src='./assets/equations/celsiusScale.svg')

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center Thermometers and its scales
      p  <em><strong>Fahrenheit temperature scale.</strong></em>  The melting point of water is at 32&#x00B0;F and the boling point at 212&#x00B0; F. Then we have 180 degrees between the reference points
        .center
          img(src='./assets/equations/fahrenheitScale.svg')

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center Conversion between Celsius and Fahrenheit
      .center
          img(src='./assets/equations/celsiusToFahrenheit.svg')
      .center
          img(src='./assets/equations/fahrenheitToCelsius.svg')

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center Thermometers and its scales
      p  <em><strong>Kelvin temperature scale</strong></em> and the gas thermometer
        .center
          img(src='./assets/equations/constantVolumeGasThermometer.svg')

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3.center Thermal expansion
      p Most materials expand when their temperatures increase
      h5.center Linear expansion
      .center
          img(src='./assets/equations/linearExpansion.svg')

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3.center Exercise 4
      example-four(style="margin:-30px 0 0 0;")
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Quantity of heat
      //- quantity-of-heat
      p Energy transfer that takes place solely because of temperature difference is called <strong><em>heat flow</em></strong> or <strong><em>heat transfer</em></strong> and energy transferred in this way is called <strong><em style="color: red;">heat</em></strong>
      p The <strong><em>calorie</em></strong> is defined as <em> the amount of heat requiered to raise the temperature of 1 gram of water from 14.5 &#x00B0;C to 15.5&#x00B0; C</em>
      p The <strong>Btu</strong> (<strong>British thermal unit</strong>) is the quantity of heat required to rise the temperature of 1 pound (weight) of water  1&#x00B0;F from 63 &#x00B0;F to 64&#x00B0;F
      p.center <strong>1 cal = 4.186 J</strong>
      p.center <strong>1 kcal = 1000 cal = 4186 J</strong>
      p.center <strong>1 Btu = 778 ft·lb = 252 cal = 1055 J</strong>

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Specific heat
      p The quantity of heat <strong><em>Q</em></strong> required to increase the temperature of a mass <strong><em>m</em></strong> of a certain material from <strong><em>T<sub>1</sub></em></strong> to <strong><em>T<sub>2</sub></em></strong> is proportional to the temperature change &#x394;<strong><em>T</em></strong> = <strong><em>T<sub>2</sub></em></strong> - <strong><em>T<sub>1</sub></em></strong>. It is also proportional to the mass <strong><em>m</em></strong> of the material
      p.center <strong><em>Q</em></strong> = <strong><em>m</em></strong><strong><em>c</em></strong>&#x394;<strong><em>T</em></strong>
      p(style="color: peru;").center Heat required for temperature change &#x394;<strong><em>T</em></strong> of mass <strong><em>m</em></strong>
      p where <strong><em>c</em></strong> is a quantity, different for different materials, called the <strong>specifc heat</strong> of the material.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Calorimetry
      p One technique for measuring specific heat involves heating a sample to some known temperature <strong><em>T<sub>x</sub></em></strong>, placing it in a vessel containing water of known mass and temperature <strong><em>T<sub>w</sub></em></strong><<strong><em>T<sub>x</sub></em></strong>, and measuring the temperature of the water after equilibrium has been reached.
      p This technique is called <strong><em>calorimetry</em></strong>, and devices in which this energy trasfer occurs are called <strong><em>calorimeters</em></strong>.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
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
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Phase change
      p <strong><em>Phase</em></strong> refers to the materia state: solid, liquid and gas
      p A transition between the materia states is called <strong><em>Phase change</em></strong>
      p Heat transfer in a phase change of a material is proportional to its mass
      p.center <strong><em>Q = &#x00B1; mL</em></strong>


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Phase changes of water
      .center
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" height="300" width="600" >
          //-<path d="M0,0 l0 300 l600 -300 l0 300 z" stroke-width="0.3"stroke="#000" fill="none"/>
          //- axis
          <g>
            <path d="M50 40 l0 210 l 500 0" stroke=#000 fill="none"/>
            <line x1=55 y1=50 x2=55 y2=250 stroke-width="10" stroke=#000 stroke-dasharray="2 32"/>
            <line x1=70 y1=221 x2=550 y2=221 stroke-width="2" stroke=#000 stroke-dasharray="20 20"/>
            <line x1=70 y1=85 x2=550 y2=85 stroke-width="2" stroke=#000 stroke-dasharray="20 20"/>
            <path d="M50 251 l15 -30 l40 0 l130 -136 l200 0 l130 -136" fill="none" stroke="red" stroke-width="3"/>

            <text x="35" y="30" font-family="times" font-size="20" font-style="italic">T(&#x00B0;C)</text>
            <text x="15" y="57" font-family="times" font-size="20">125</text>
            <text x="15" y="92" font-family="times" font-size="20">100</text>
            <text x="25" y="125" font-family="times" font-size="20">75</text>
            <text x="25" y="159" font-family="times" font-size="20">50</text>
            <text x="25" y="193" font-family="times" font-size="20">25</text>
            <text x="35" y="227" font-family="times" font-size="20">0</text>
            <text x="20" y="255" font-family="times" font-size="20">-25</text>
            <text x="555" y="257" font-family="times" font-size="20">Time</text>
            <text x="485" y="82" font-family="times" font-size="20" fill="red">Boiling point</text>
            <text x="485" y="218" font-family="times" font-size="20" fill="blue">Melting point</text>
            <text x="50" y="263" font-family="times" font-size="20" fill="blue">a</text>
            <text x="60" y="215" font-family="times" font-size="20" fill="blue">b</text>
            <text x="105" y="235" font-family="times" font-size="20" fill="blue">c</text>
            <text x="225" y="80" font-family="times" font-size="20" fill="blue">d</text>
            <text x="435" y="100" font-family="times" font-size="20" fill="blue">e</text>

            //- <path d="M51 250 A50 50 0 0 1 70 270 A50 50 0 0 0 65 221 " fill="green" fill-opacity="0.5" stroke="green" />
            <text x="60" y="240" font-family="times" font-size="15" fill="green" transform="rotate(20,65,240)">Ice warms (Q = mc&#x2206;T)</text>
            <text x="85" y="210" font-family="times" font-size="15" fill="green" transform="rotate(-65,90,215)">Ice melts (Q = +mL)</text>
            //- <path d="M66 221 A10 60 10 0 1 90 120 A10 60 -10 0 0 105 221 " fill="green" fill-opacity="0.5" stroke="green" />
            <text x="105" y="205" font-family="times" font-size="15" fill="green" transform="rotate(-46,105,190)">Water warms (Q = mc&#x2206;T)</text>
            //- <path d="M105 221 A80 100 0 0 1 190 270 A150 1000 -5 0 0 235 85 " fill="green" fill-opacity="0.5" stroke="green" />
            <text x="255" y="78" font-family="times" font-size="15" fill="green">Water vaporizes (Q = +mL)</text>
            <text x="440" y="80" font-family="times" font-size="15" fill="green" transform="rotate(-46,430,80)">Steam warms</text>
            <text x="460" y="90" font-family="times" font-size="15" fill="green" transform="rotate(-46,445,80)">(Q = mc&#x2206;T)</text>

          </g>
        </svg>

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Phase change
      .centered
          #table-wrapper
            table#desc
              caption Heats of fusion and vaporization
              tr
                th(height='5px') Substance
                th(height='5px') Melting point (&#x00B0;C)
                th(height='5px') <em>L<sub>f</sub></em> (J/kg)
                th(height='5px') Boiling point (&#x00B0;C)
                th(height='5px') <em>L<sub>v</sub></em> (J/kg)
              tr
                td Helium
                td  -
                td  -
                td -268.93
                td 20.9 x 10<sup>3</sup>
              tr
                td Hydrogen
                td -259.31
                td 58.3 x 10<sup>3</sup>
                td -252.89
                td 452 x 10<sup>3</sup>
              tr
                td Nitrogen
                td -209.97
                td 25.5 x 10<sup>3</sup>
                td -195.8
                td 201 x 10<sup>3</sup>
              tr
                td Oxigen
                td -218.79
                td 13.8 x 10<sup>3</sup>
                td -183.0
                td 213 x 10<sup>3</sup>
              tr
                td Ethanol
                td -114.00
                td 104.2 x 10<sup>3</sup>
                td -78.00
                td 854 x 10<sup>3</sup>
              tr
                td Mercury
                td -39.00
                td 11.8 x 10<sup>3</sup>
                td 357.00
                td 272 x 10<sup>3</sup>
              tr
                td Water
                td 0.00
                td 334 x 10<sup>3</sup>
                td 100.00
                td 2256 x 10<sup>3</sup>
              tr
                td Sulfur
                td 119.00
                td 38.1 x 10<sup>3</sup>
                td 444.60
                td 326 x 10<sup>3</sup>
              tr
                td Lead
                td 327.30
                td 24.5 x 10<sup>3</sup>
                td 1750
                td 871 x 10<sup>3</sup>
              tr
                td Antimony
                td 630.50
                td 165.0 x 10<sup>3</sup>
                td 1440
                td 561 x 10<sup>3</sup>
              tr
                td Aluminium
                td 660.00
                td 397 x 10<sup>3</sup>
                td 2450
                td 114 x 10<sup>3</sup>
              tr
                td Silver
                td 960.8
                td 88.3 x 10<sup>3</sup>
                td 2193
                td 2336 x 10<sup>3</sup>
              tr
                td Gold
                td 1063.00
                td 64.5 x 10<sup>3</sup>
                td 2660
                td 1578 x 10<sup>3</sup>
              tr
                td Copper
                td 1083
                td 134 x 10<sup>3</sup>
                td 1187
                td 5069 x 10<sup>3</sup>

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3.center Exercise 9
      example-nine
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3.center Exercise 10
      example-ten
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Mechanisms of heat transfer
      h5 Conduction, H: heat current
      .center
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" height="300" width="400" >
          //- <path d="M0,0 l0 300 l400 -300 l0 300 z" stroke-width="0.3"stroke="#000" fill="none"/>

          <g style="text-transform: none;">
            <path d="M15 1 l-14 15 l0 40 l40 0 l15 -15 l0 -40 l-41 0 m41 0 l-15 15 m-40 0 l40 0 m0 0 l0 40" stroke="#000" fill="tomato" stroke-opacity="0.5"></path>

            <path d="M50 10 A10 20 0 0 0 50 45 l70 0 l0 -35z" stroke="#000" fill="peru" stroke-opacity="0.5"></path>

            <path d="M129 1 l-14 15 l0 40 l40 0 l15 -15 l0 -40 l-41 0 m41 0 l-15 15 m-40 0 l40 0 m0 0 l0 40" stroke="#000" fill="deepskyblue" stroke-opacity="0.5"></path>

            <path d="M35 40 A5 5 0 0 1 43 40 m0 0 A5 5 0 0 0 50 40 A5 5 0 0 1 58 40 L63 40 L58 38 L60 40 L58 42 L63 40" stroke="#F00" fill="none" stroke-opacity="1" transform="translate(15,-20)"></path>
            <path d="M35 40 A5 5 0 0 1 43 40 m0 0 A5 5 0 0 0 50 40 A5 5 0 0 1 58 40 L63 40 L58 38 L60 40 L58 42 L63 40" stroke="#F00" fill="none" stroke-opacity="1" transform="translate(50,-20)"></path>
            <path d="M35 40 A5 5 0 0 1 43 40 m0 0 A5 5 0 0 0 50 40 A5 5 0 0 1 58 40 L63 40 L58 38 L60 40 L58 42 L63 40" stroke="#F00" fill="none" stroke-opacity="1" transform="translate(15,-5)"></path>
            <path d="M35 40 A5 5 0 0 1 43 40 m0 0 A5 5 0 0 0 50 40 A5 5 0 0 1 58 40 L63 40 L58 38 L60 40 L58 42 L63 40" stroke="#F00" fill="none" stroke-opacity="1" transform="translate(50,-5)"></path>

            <ellipse cx="85" cy="27.5" rx="5" ry="17.5" stroke="black" fill="none" stroke-dasharray="6 2"/>

            <text x=80 y=30 font-family="times" font-style="italic" font-size="15">A</text>
            <text x="10" y="40" font-family="times" font-size="20" font-style="italic">T<tspan baseline-shift="sub" font-size="10">H</tspan></text>
            <text x="130" y="40" font-family="times" font-size="20" font-style="italic">T<tspan baseline-shift="sub" font-size="10">C</tspan></text>

            <path d="M-7 60 L25 60 M-7 60 L5 63 M-7 60 L5 57 M38 60 L63 60 L53 57 M63 60 L53 63" stroke="#000" fill="none" stroke-opacity="1" transform="translate(50,-5)"></path>
            <text x="78" y="62" font-family="times" font-size="20" font-style="italic">L</text>

            <text x="255" y="30" font-family="times" font-size="30" font-style="italic">H <tspan font-style="normal">&#x221D;</tspan> &#x2206;T·A/L</text>

          </g>

          <g transform="translate(0, 100)">
            <path d="M15 1 l-14 15 l0 90 l40 0 l15 -15 l0 -90 l-41 0 m41 0 l-15 15 m-40 0 l40 0 m0 0 l0 90" stroke="#000" fill="tomato" stroke-opacity="0.5"></path>

            <g transform="translate(0,0)">
              <path d="M50 10 A10 20 0 0 0 50 45 l70 0 l0 -35z" stroke="#000" fill="peru" stroke-opacity="0.5"></path>
              <path d="M50 10 A10 20 0 0 0 50 45 l70 0 l0 -35z" stroke="#000" fill="peru" stroke-opacity="0.5"></path>


              <path d="M35 40 A5 5 0 0 1 43 40 m0 0 A5 5 0 0 0 50 40 A5 5 0 0 1 58 40 L63 40 L58 38 L60 40 L58 42 L63 40" stroke="#F00" fill="none" stroke-opacity="1" transform="translate(15,-20)"></path>
              <path d="M35 40 A5 5 0 0 1 43 40 m0 0 A5 5 0 0 0 50 40 A5 5 0 0 1 58 40 L63 40 L58 38 L60 40 L58 42 L63 40" stroke="#F00" fill="none" stroke-opacity="1" transform="translate(50,-20)"></path>
              <path d="M35 40 A5 5 0 0 1 43 40 m0 0 A5 5 0 0 0 50 40 A5 5 0 0 1 58 40 L63 40 L58 38 L60 40 L58 42 L63 40" stroke="#F00" fill="none" stroke-opacity="1" transform="translate(15,-5)"></path>
              <path d="M35 40 A5 5 0 0 1 43 40 m0 0 A5 5 0 0 0 50 40 A5 5 0 0 1 58 40 L63 40 L58 38 L60 40 L58 42 L63 40" stroke="#F00" fill="none" stroke-opacity="1" transform="translate(50,-5)"></path>
            </g>
            <g transform="translate(0,50)">
              <path d="M50 10 A10 20 0 0 0 50 45 l70 0 l0 -35z" stroke="#000" fill="peru" stroke-opacity="0.5"></path>
              <path d="M50 10 A10 20 0 0 0 50 45 l70 0 l0 -35z" stroke="#000" fill="peru" stroke-opacity="0.5"></path>


              <path d="M35 40 A5 5 0 0 1 43 40 m0 0 A5 5 0 0 0 50 40 A5 5 0 0 1 58 40 L63 40 L58 38 L60 40 L58 42 L63 40" stroke="#F00" fill="none" stroke-opacity="1" transform="translate(15,-20)"></path>
              <path d="M35 40 A5 5 0 0 1 43 40 m0 0 A5 5 0 0 0 50 40 A5 5 0 0 1 58 40 L63 40 L58 38 L60 40 L58 42 L63 40" stroke="#F00" fill="none" stroke-opacity="1" transform="translate(50,-20)"></path>
              <path d="M35 40 A5 5 0 0 1 43 40 m0 0 A5 5 0 0 0 50 40 A5 5 0 0 1 58 40 L63 40 L58 38 L60 40 L58 42 L63 40" stroke="#F00" fill="none" stroke-opacity="1" transform="translate(15,-5)"></path>
              <path d="M35 40 A5 5 0 0 1 43 40 m0 0 A5 5 0 0 0 50 40 A5 5 0 0 1 58 40 L63 40 L58 38 L60 40 L58 42 L63 40" stroke="#F00" fill="none" stroke-opacity="1" transform="translate(50,-5)"></path>
            </g>

            <path d="M129 1 l-14 15 l0 90 l40 0 l15 -15 l0 -90 l-41 0 m41 0 l-15 15 m-40 0 l40 0 m0 0 l0 90" stroke="#000" fill="deepskyblue" stroke-opacity="0.5"></path>

            <ellipse cx="85" cy="27.5" rx="5" ry="17.5" stroke="black" fill="none" stroke-dasharray="6 2"/>
            <text x=81 y=30 font-family="times" font-style="italic" font-size="13">A</text>

            <ellipse cx="85" cy="77.5" rx="5" ry="17.5" stroke="black" fill="none" stroke-dasharray="6 2"/>
            <text x=81 y=80 font-family="times" font-style="italic" font-size="13">A</text>

            <text x="10" y="60" font-family="times" font-size="20" font-style="italic">T<tspan baseline-shift="sub" font-size="10">H</tspan></text>
            <text x="125" y="60" font-family="times" font-size="20" font-style="italic">T<tspan baseline-shift="sub" font-size="10">C</tspan></text>

            <path d="M-7 110 L25 110 M-7 110 L5 113 M-7 110 L5 107 M38 110 L63 110 L53 107 M63 110 L53 113" stroke="#000" fill="none" stroke-opacity="1" transform="translate(50,-5)"></path>
            <text x="78" y="112" font-family="times" font-size="20" font-style="italic">L</text>

            <text x="260" y="60" font-family="times" font-size="30" font-style="italic">2A <tspan font-style="normal">&#x21D2;</tspan> 2H</text>
          </g>

          <g transform="translate(0,230)">
            <path d="M15 1 l-14 15 l0 40 l40 0 l15 -15 l0 -40 l-41 0 m41 0 l-15 15 m-40 0 l40 0 m0 0 l0 40" stroke="#000" fill="tomato" stroke-opacity="0.5"></path>

            <path d="M50 10 A10 20 0 0 0 50 45 l140 0 l0 -35z" stroke="#000" fill="peru" stroke-opacity="0.5"></path>

            <path d="M199 1 l-14 15 l0 40 l40 0 l15 -15 l0 -40 l-41 0 m41 0 l-15 15 m-40 0 l40 0 m0 0 l0 40" stroke="#000" fill="deepskyblue" stroke-opacity="0.5"></path>

            <path d="M35 40 A5 5 0 0 1 43 40 m0 0 A5 5 0 0 0 50 40 A5 5 0 0 1 58 40 L63 40 L58 38 L60 40 L58 42 L63 40" stroke="#F00" fill="none" stroke-opacity="1" transform="translate(15,-10)"></path>
            <path d="M35 40 A5 5 0 0 1 43 40 m0 0 A5 5 0 0 0 50 40 A5 5 0 0 1 58 40 L63 40 L58 38 L60 40 L58 42 L63 40" stroke="#F00" fill="none" stroke-opacity="1" transform="translate(50,-10)"></path>
            <path d="M35 40 A5 5 0 0 1 43 40 m0 0 A5 5 0 0 0 50 40 A5 5 0 0 1 58 40 L63 40 L58 38 L60 40 L58 42 L63 40" stroke="#F00" fill="none" stroke-opacity="1" transform="translate(85,-10)"></path>
            <path d="M35 40 A5 5 0 0 1 43 40 m0 0 A5 5 0 0 0 50 40 A5 5 0 0 1 58 40 L63 40 L58 38 L60 40 L58 42 L63 40" stroke="#F00" fill="none" stroke-opacity="1" transform="translate(120,-10)"></path>


            <ellipse cx="120" cy="27.5" rx="5" ry="17.5" stroke="black" fill="none" stroke-dasharray="6 2"/>

            <text x=116 y=30 font-family="times" font-style="italic" font-size="15">A</text>
            <text x="10" y="40" font-family="times" font-size="20" font-style="italic">T<tspan baseline-shift="sub" font-size="10">H</tspan></text>
            <text x="195" y="40" font-family="times" font-size="20" font-style="italic">T<tspan baseline-shift="sub" font-size="10">C</tspan></text>

            <path d="M-7 60 L50 60 M-7 60 L5 63 M-7 60 L5 57 M80 60 L133 60 L123 57 M133 60 L123 63" stroke="#000" fill="none" stroke-opacity="1" transform="translate(50,-5)"></path>
            <text x="105" y="62" font-family="times" font-size="20" font-style="italic">2L</text>

            <text x="260" y="30" font-family="times" font-size="30" font-style="italic">2L <tspan font-style="normal">&#x21D2;</tspan> H / 2 </text>
          </g>
        </svg>

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}</sup>
      h4.center Heat current in conduction
      .center
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 100" height="100" width="270" >
          //- <path d="M0,0 l0 100 l270 -100 l0 100 z" stroke-width="0.3"stroke="#000" fill="none"/>

          <g style="text-transform: none;">

            <text x=10 y=50 font-family="times" font-style="italic" font-size="30">H <tspan font-style="normal">=</tspan></text>
            <line x1=60 y1=43 x2=100 y2=43 stroke=#000 stroke-width=2 />
            <text x="65" y="35" font-family="times" font-size="30" font-style="italic">dQ</text>
            <text x="65" y="68" font-family="times" font-size="30" font-style="italic">dt</text>
            <text x=105 y=50 font-family="times" font-style="italic" font-size="30"><tspan font-style="normal">=</tspan></text>

            <text x="130" y="50" font-family="times" font-size="30" font-style="italic">kA</text>
            <line x1=165 y1=43 x2=250 y2=43 stroke=#000 stroke-width=2 />

            <text x="170" y="30" font-family="times" font-size="30" font-style="italic">T<tspan baseline-shift="sub" font-size="15">H</tspan>  - T<tspan baseline-shift="sub" font-size="15">C</tspan></text>
            <text x="200" y="70" font-family="times" font-size="30" font-style="italic">L</text>

          </g>
        </svg>
      .centered
          #table-wrapper
            table#desc
              caption Thermal conductivities
              tr
                th(height='5px') Substance
                th(height='5px') k (W/m·K)
                th(height='5px') Substance
                th(height='5px') k (W/m·K)
                th(height='5px') Substance
                th(height='5px') k (W/m·K)
              tr
                td Argon
                td 0.016
                td Wood
                td 0.12 - 0.04
                td Mercury
                td 8.3
              tr
                td Oxygen
                td 0.023
                td Helium
                td 0.14
                td Lead
                td 34.7
              tr
                td Air
                td 0.024
                td Hydrogen
                td 0.14
                td Steel
                td 50.2
              tr
                td Styrofoam
                td 0.027
                td Brick, insulating
                td 0.15
                td Brass
                td 109.0
              tr
                td Cork
                td 0.04
                td Brick, red
                td 0.6
                td Aluminium
                td 205.0
              tr
                td Felt
                td 0.04
                td concrete
                td 0.8
                td Copper
                td 385.0
              tr
                td Fiberglass
                td 0.04
                td Glass
                td 0.8
                td Silver
                td 406.0
              tr
                td Rock wool
                td 0.04
                td Ice
                td 1.6
                td Diamond
                td 2300

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Thermal resistance: <strong>R</strong>
      .center
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" height="150" width="200" >
          //- <path d="M0,0 l0 150 l200 -150 l0 150 z" stroke-width="0.3"stroke="#000" fill="none"/>

          <g style="text-transform: none;">

            <text x=10 y=50 font-family="times" font-style="italic" font-size="30">H <tspan font-style="normal">=</tspan></text>
            //- <line x1=60 y1=43 x2=100 y2=43 stroke=#000 stroke-width=2 />
            //- <text x="65" y="35" font-family="times" font-size="30" font-style="italic">dQ</text>
            //- <text x="65" y="68" font-family="times" font-size="30" font-style="italic">dt</text>
            //- <text x=105 y=50 font-family="times" font-style="italic" font-size="30"><tspan font-style="normal">=</tspan></text>

            <text x="65" y="50" font-family="times" font-size="30" font-style="italic">A</text>
            <line x1=95 y1=43 x2=200 y2=43 stroke=#000 stroke-width=2 />

            <text x="105" y="30" font-family="times" font-size="30" font-style="italic">T<tspan baseline-shift="sub" font-size="15">H</tspan>  - T<tspan baseline-shift="sub" font-size="15">C</tspan></text>
            <text x="130" y="70" font-family="times" font-size="30" font-style="italic">R</text>

          </g>
          <g transform="translate(40,0)">

            <text x=10 y=120 font-family="times" font-style="italic" font-size="30">R <tspan font-style="normal">=</tspan></text>

            <text x="65" y="110" font-family="times" font-size="30" font-style="italic">L</text>
            <line x1=55 y1=113 x2=90 y2=113 stroke=#000 stroke-width=2 />

            <text x="65" y="139" font-family="times" font-size="30" font-style="italic">k</text>
          </g>
        </svg>

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3.center Exercise 11
      example-eleven
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3.center Exercise 12
      example-twelve
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3.center Exercise 13
      example-thirteen
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center Convection
      p <strong>Convection</strong> is the transfer of heat by mass motion of a fluid from one region of space to another.
      p Convective heat transfer is a very complex process, and there is no simple equation to describe it. Here are a few experimental facts:
      ol
        li The heat current due to convection is directly proportional to the surface area.
        li The viscosity of fluids slows natural convection near a stationary surface, giving a surface film that on a vertical surface typically has about the same insulating value as 1.3 cm of plywood. Forced convection decreases the thickness of this film, increasing the rate of heat transfer.
        li The heat current due to convection is found to be approximately proportional to the 5 power of the temperature difference between the surface and the main body of fluid.


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Radiation
      p <strong>Radiation</strong> is the transfer of heat by electromagnetic waves such as visible light, infrared, and ultraviolet radiation.
      p The heat current <strong>H = dQ/dt</strong> due to radiation from a surface area <strong>A</strong> with emissivity <strong>e</strong> at absolute temperature <strong>T</strong> can be expressed as
      p.center <strong>H = Ae&#x03c3;T<sup>4</sup></strong>
      p where <strong>&#x03C3; = 5.6704x10<sup>-8</sup> W/m<sup>2</sup> · K<sup>4</sup></strong>,  is the Stefan–Boltzmann constant.

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      .center
        h3 References
        p University Physics 13th Edition. Searzs and Zemanzky
        p Physics for scientist and engineers 8th Edition. Serway, Jewett
        p.small created by G. Rodríguez-Morales and spheroidGames
        p.small gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center Fun soon!
</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Temperature and Heat',
    description: 'Temperature and Heat',
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
    'example-nine': require('./components/ExampleNine'),
    'example-ten': require('./components/ExampleTen'),
    'example-eleven': require('./components/ExampleEleven'),
    'example-twelve': require('./components/ExampleTwelve'),
    'example-thirteen': require('./components/ExampleThirteen'),
    'quantity-of-heat': require('./components/QuantityOfHeat')
  },
  data: function () {
    return {
      theme: 'Temperature and Heat'
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
</style>
