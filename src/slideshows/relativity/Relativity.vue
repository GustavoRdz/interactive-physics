<template lang="pug">
#Relativity.eg-theme-agrume
  .eg-slideshow
    <button class="language" @click="isSpanish = !isSpanish">{{ a = isSpanish ? languages[0]:languages[1] }} </button>
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false' style="overflow: scroll;")
      .center.frontpage
        h2(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Relativity theory
        h2(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Teoría dela relatividad
        img(src='./assets/microres4.jpg')
        p(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Special theory of relativity
        p(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Teoría de la relatividad especial
        //- eg-triggered-message(:trigger='slideTimer >= 2',
        //-                     :duration='6', position='top right',
        //-                     enter='bounceInRight', leave='bounceOutRight')
        //-   p Next:
        //-   img.control-schema(src='./assets/controlsNext.svg')
        //-   p Previous:
        //-   img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>
      //- .prev(@click.stop='previousSlide' style="float: left;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInUp' leave='bounceOutDown' :mouseNavigation='false' style="overflow: scroll;")
      h3
        | Topics
        .inline(class='animated infinite pulse heart')
      .center
        h6(style="color: #aa0000; margin: -10px;")
          <b>Galilean relativity</b>
        eg-transition(enter='bounceInDown')
          p(style="margin-bottom: -30px;")
            <b>Galilean principle of relativity</b>
        eg-transition(enter='bounceInRight')
          p(style="margin-bottom: -30px;")
            <b>Galilean transformations</b>
        eg-transition(enter='bounceInUp')
          p(style="margin-bottom: -30px;")
            <b>Michelson-Morley experiment</b>

        h6(style="color: #aa0000; margin-bottom: -20px;")
          <b>Einstein relativity</b>
        eg-transition(enter='bounceInRight')
          p(style="margin-bottom: -30px;")
            <b>Einstein relativity principle</b>
        eg-transition(enter='bounceInUp')
          p(style="margin-bottom: -30px;")
            <b>Simultainety</b>
        eg-transition(enter='bounceInRight')
          p(style="margin-bottom: -30px;")
            <b>Lorentz transformations</b>
        eg-transition(enter='bounceInRight')
          p(style="margin-bottom: -30px;")
            <b>Time dilation</b>
        eg-transition(enter='bounceInDown')
          p(style="margin-bottom: -30px;")
            <b>Length contraction</b>
        eg-transition(enter='bounceInRight')
          p(style="margin-bottom: -30px;")
            <b>Mass variation</b>
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4(style="text-transform: uppercase;").center The principle of Galilean relativity
      p The laws of mechanics must be the same in all inertial frames of reference.
      .center
        img(src='./assets/inertialFrame.svg')
      p If objects moves at constant speed with respect to any reference frame it is an <b>inertial frame</b>. It obey the first movement law
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Galilean transformations
      p Suppose two inertial frames and an event, we measure the speed of the event in one of the reference frames, howcan we calculate the speed of event with respect the other inertial frame?.
      .center
        img(src='./assets/galileoTransforms.svg')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide(:steps=6, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4 Space-time Galilean Transformations
      p(v-if="step >= 2" style="margin-bottom: 0px;") From the figure we have that
      p(v-if="step >= 2" style="margin-bottom: -20px;").center
          <svg height="50" width="500" viewbox="0 0 500 50">
            <text x="25" y="25" >
              <tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">x<tspan style="font-size:0.5em; font-style:normal;" baseline-shift="sub">2</tspan></tspan>  = <tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">x<tspan style="font-size:0.5em; font-style:normal;" baseline-shift="sub">1</tspan></tspan> -<tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">vt</tspan>
            </text>
            <text x="195" y="25" >
              <tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">y<tspan style="font-size:0.5em; font-style:normal;" baseline-shift="sub">2</tspan></tspan>=<tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">y<tspan style="font-size:0.5em; font-style:normal;" baseline-shift="sub">1</tspan></tspan> </text>
            <text x="300" y="25" >
              <tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">z<tspan style="font-size:0.5em; font-style:normal;" baseline-shift="sub">2</tspan></tspan>=<tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">z<tspan style="font-size:0.5em; font-style:normal;" baseline-shift="sub">1</tspan></tspan> </text>

              <text x="400" y="25" >
              <tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">t<tspan style="font-size:0.5em; font-style:normal;" baseline-shift="sub">2</tspan></tspan>=<tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">t<tspan style="font-size:0.5em; font-style:normal;" baseline-shift="sub">1</tspan></tspan> </text>
            //- <line x1="0" y1="0" x2="600" y2="50" stroke="red" />
            //- <line x1="0" y1="50" x2="600" y2="0" stroke="red" />
          </svg>
      .center
        img(src='./assets/inertialFrame.svg')
      p(v-if="step >= 3" style="margin-bottom: -30px;") What is the speed of the event?
      p(v-if="step >= 5" style="margin-bottom: -30px;").center
          <svg height="100" width="500" viewbox="0 0 500 100">
            <text x="25" y="50" >
              <tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">v</tspan>=
            </text>
            <text x="80" y="25" >
              <tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">dx</tspan></text>
            <text x="80" y="75" >
              <tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">dt</tspan></text>
            <line x1="70" y1="42" x2="130" y2="42" stroke="black" stroke-width="2"/>
            <text x="150" y="50" > =>
            </text>
            <text x="220" y="25" >
              <tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">dx<tspan style="font-size:0.5em; font-style:normal;" baseline-shift="sub">2</tspan></tspan></text>
            <text x="220" y="75" >
              <tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">dt</tspan></text>
            <line x1="210" y1="42" x2="270" y2="42" stroke="black" stroke-width="2"/>
            <text x="280" y="50" > =
            </text>
              <text x="310" y="25" >
              <tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">dx<tspan style="font-size:0.5em; font-style:normal;" baseline-shift="sub">1</tspan></tspan></text>
            <text x="310" y="75" >
              <tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">dt</tspan></text>
            <line x1="310" y1="42" x2="360" y2="42" stroke="black" stroke-width="2"/>
            <text x="370" y="50" > <tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">- v</tspan>
            </text>
              <text x="420" y="25" >
              <tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">dt</tspan></text>
            <text x="420" y="75" >
              <tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">dt</tspan></text>
            <line x1="415" y1="42" x2="460" y2="42" stroke="black" stroke-width="2"/>

            //- <line x1="0" y1="0" x2="600" y2="50" stroke="red" />
            //- <line x1="0" y1="50" x2="600" y2="0" stroke="red" />
            </svg>
          p(v-if="step >= 6" style="margin-bottom: -10px;").center
            <svg height="50" width="200" viewbox="0 0 200 50">
              <text x="25" y="25"  fill="blue">
                <tspan style="font-style:italic; font-family: Times New Roman; font-size:1.5em;">v<tspan style="font-size:0.5em; font-style:normal;" baseline-shift="sub">2</tspan></tspan> = <tspan style="font-style:italic; font-family: Times New Roman; font-size:1.5em;">v<tspan style="font-size:0.5em; font-style:normal;" baseline-shift="sub">1</tspan></tspan> -<tspan style="font-style:italic; font-family: Times New Roman; font-size:1.5em;">v</tspan>
              </text>
              //- <line x1="0" y1="0" x2="200" y2="50" stroke="red" />
              //- <line x1="0" y1="50" x2="200" y2="0" stroke="red" />
            </svg>
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(v-if = '!isSpanish' style="margin: 25px 0px 0px 0px;") Exercise 1
      h3(v-if = 'isSpanish' style="margin: 25px 0px 0px 0px;") Ejercicio 1
      example-one(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(v-if = '!isSpanish' style="margin: 25px 0px 0px 0px;") Exercise 2
      h3(v-if = 'isSpanish' style="margin: 25px 0px 0px 0px;") Ejercicio 2
      example-two(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(v-if = '!isSpanish' style="margin: 25px 0px 0px 0px;") Exercise 3
      h3(v-if = 'isSpanish' style="margin: 25px 0px 0px 0px;") Ejercicio 3
      example-three(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 The speed of light
      //- p Physicst of the late 1800s thought light moves in a medium called <em>Ether</em> in order to justify the propagation of electromagnetic waves in the empty space.
      p Physicst of the late 1800s thought light  can have a speed of <b><em>c</em></b> only in an special reference frame with respect to the <b><em>ether</em></b>. A stationary substance in which light can move in empty space.
      .center
        img(src='./assets/etherVelocity.svg')
      p.center Velocity of light resulting from different situations according to <b>Galilean relativity</b>
      p.center But light is so fast, how can we detect that changes is light velocity?
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Michelson-Morley Experiment
      .center
        img(src='./assets/michelsonInterferometer.svg')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Einstein's Principle of Relativity
      p 1. The principle of relativity:
      p.center <b>The laws of physics must be the same in all inertial reference frames.</b>
      p 2. The constancy of the speed of light:
      p.center <b>The speed of light in vacuum has the same value, c = 3.00 x 10<sup>8</sup> m/s, in all inertial frames, regardless of the velocity of the observer or the velocity of the source emitting the light</b>.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Simultaneity
      p.center Time measurement depends on the reference frame of the observer
      .center
        img(src='./assets/simultaneity.svg')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide(:steps=1,  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Relativity of time
      p.center Time measurement depends on the reference frame of the observer
      .center
        img(src='./assets/timeDilation.svg')
      p.center
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt


    slide(enter='bounceInDown', :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4.center Lorentz tranformations equations
      .center
        img(src='./assets/inertialFrame.svg' width="400px")
      .center
        img(src='./assets/lorentzEqs.svg')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide(enter='bounceInDown', :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h4.center Lorentz tranformations in two dimensions
      .center
        img(src='./assets/lorentzEqs2D.svg')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(v-if = '!isSpanish' style="margin: 25px 0px 0px 0px;") Exercise 4
      h3(v-if = 'isSpanish' style="margin: 25px 0px 0px 0px;") Ejercicio 4
      example-four(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
       h3(v-if = '!isSpanish' style="margin: 25px 0px 0px 0px;") Exercise 5
      h3(v-if = 'isSpanish' style="margin: 25px 0px 0px 0px;") Ejercicio 5
      example-five(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide.boredYet(enter='bounceInDown', :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Length contraction
      .center
        img(src='./assets/lengthContraction.svg' width="500px")
      p <b>L<sub>1</sub></b>: Length measured by an observer when motion exist between him and the object
      p <b>L<sub>2</sub></b>: Length measured by an observer when <b>NO</b> motion exist between him and the object
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(v-if = '!isSpanish' style="margin: 25px 0px 0px 0px;") Exercise 6
      h3(v-if = 'isSpanish' style="margin: 25px 0px 0px 0px;") Ejercicio 6
      example-six(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(v-if = '!isSpanish' style="margin: 25px 0px 0px 0px;") Exercise 7
      h3(v-if = 'isSpanish' style="margin: 25px 0px 0px 0px;") Ejercicio 7
      example-seven(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide.boredYet(enter='bounceInDown', :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Time dilation
      .center
        img(src='./assets/timeDilation2.svg' width="500px")
      p <b>T<sub>1</sub></b>: time interval measured by an observer when motion exist between him and the object
      p <b>T<sub>2</sub></b>: time interval measured by an observer when <b>NO</b> motion exist between him and the object
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(v-if = '!isSpanish' style="margin: 25px 0px 0px 0px;") Exercise 8
      h3(v-if = 'isSpanish' style="margin: 25px 0px 0px 0px;") Ejercicio 8
      example-eight(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(v-if = '!isSpanish' style="margin: 25px 0px 0px 0px;") Exercise 9
      h3(v-if = 'isSpanish' style="margin: 25px 0px 0px 0px;") Ejercicio 9
      example-nine(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide.boredYet(enter='bounceInDown', :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3 Mass variation
      .center
        img(src='./assets/massVariation.svg' width="500px")
      p <b>m<sub>1</sub></b>: time interval measured by an observer when motion exist between him and the object
      p <b>m<sub>2</sub></b>: time interval measured by an observer when <b>NO</b> motion exist between him and the object
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide.boredYet(enter='bounceInDown', :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
      h3(v-if = '!isSpanish' style="margin: 25px 0px 0px 0px;") Exercise 10
      h3(v-if = 'isSpanish' style="margin: 25px 0px 0px 0px;") Ejercicio 10
      example-ten(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} </sup>
       h3(v-if = '!isSpanish' style="margin: 25px 0px 0px 0px;") Exercise 11
      h3(v-if = 'isSpanish' style="margin: 25px 0px 0px 0px;") Ejercicio 11
      example-eleven(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt

    slide(enter='bounceInDown', :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      .center
        h3 References
        p.center Física Moderna<br> Edición revisada<br> Norma Esthela Flores, Jorge Enrique Figueroa.<br>Pearsons-Prentice Hall
        p.center Physics for Scientist and Engineers with Modern Physics <br>9th Edition<br> Serway, Jewett
        p.small created by G. Rodríguez-Morales and spheroidGames
        p.small gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      //- .next(@click.stop='nextSlide' style="float: right;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt



</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Relativity',
    description: 'Special relativity',
    path: 'relativity',
    course: 'Physics IV',
    part: 1
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
    'sodoku': require('./components/Sodoku')
  },

  data: function () {
    return {
      theme: 'Relativity',
      isSpanish: true,
      languages: ['🇺🇸', '🇲🇽']
    }
  }
}
</script>

<style lang='scss'>
// @import 'node_modules/eagle.js/dist/themes/agrume/agrume';
@import 'node_modules/eagle.js/dist/themes/gourmet/gourmet';
#Relativity {
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

  #table-wrapper {
    display: flex;
    padding-left:0px;
    align-content: center;

  }
  #desc {
    width: 30em;
    border-collapse: collapse;
    border-bottom: 1px solid black;

    & th {
      background-color: whitesmoke;
      border-bottom: 1px solid black;
      padding: 1em;
      text-align: center;
      font-size: 15px;
      font-weight: bold;
    }

    & td {
      text-align:left;
      padding-left: 4em;
      font-size: 15px;
      height: 15px;
    }

    & caption {
      font-family: 'Times New Roman', Times, serif;
      font-size: 15px;
      font-style: italic;
    }
  }

  .eg-slide-content {
    width: 30em;
    max-width: 95%;
    margin: 0 100 0 50;
  }

  .pressureFormula{
      height: 5em;
  }
}
</style>
