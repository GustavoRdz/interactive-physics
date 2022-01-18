<template lang="pug">
#OscillatoryMotion.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      //- img(src='./assets/Logo-FIME copy.svg' height='820px' style="margin: -10 0 50px 0;")
      .center.frontpage
        h2 Maxwell equations
        img(src='./assets/U.svg')

        h4 Maxwell equations
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3 Oscillatory motion
    //-   h5.center Simple pendulum example
    //-   simple-pendulum
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right


    //- slide(:steps=1, enter='bounceInRight' leave='bounceOutDown'  :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3
    //-     | Topics
    //-     .inline(class='animated infinite pulse heart')
    //-   .center
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(v-if="step >= 1")
    //-         <b>Motion of an Object Attached to a Spring</b>
    //-     eg-transition(enter='bounceInRight' leave='bounceOutRight')
    //-       p(v-if="step >= 1")
    //-         <b>Particle Model in Simple Harmonic Motion</b>
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(v-if="step >= 1")
    //-         <b>Energy of the Simple Harmonic Oscillator</b>
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutTop')
    //-       p(v-if="step >= 1")
    //-         <b>The pendulum and other systems</b>
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutRight')
    //-       p(v-if="step >= 1")
    //-         <b>Damped oscillations</b>
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(v-if="step >= 1")
    //-         <b>Forced oscillations and resonance</b>

    //- slide(:steps=0, enter='bounceInDown'  :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Periodic motion
    //-   p.center In our daily life we treat with a many devices that describe <b><em>periodic motion</em></b>:<br> The vibration that produce sound<br> The back-and-fort motion of the pistons in a car engine<br> The motion described by a pendulum in a clock...
    //-   .center
    //-     img(height="400px" src='./assets/motor vocho.gif')

    //- slide(:steps=0, enter='bounceInDown', :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -20px;") Oscillations
    //-   p(style="margin: 0 0 -0px 0;").center Mass-spring system
    //-   spring-mass
    //-   p <span style="font-size: 1em;"><b>Amplitude</b></span>, the maximun displacement of the mass with respect the equilibrium position
    //-   p <span style="font-size: 1em; font-family: Times New Roman;"><em>x</em></span>: displacement of the mass with respect to the equilibrium position at <span style="font-size: 1em; font-family: Times New Roman;"><em>x</em></span> = 0.
    //-   .button.prev(@click.stop='previousSlide' style="float: left; border: 0px;")
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide' style="float: right; border: 0px;")
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide(:steps=0, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -30px;") Oscillations
    //-   p(style="margin: 0 0 -0px 0;").center Mass-spring system
    //-   spring-mass
    //-   p <span style="font-size: 1em;"><b>Period</b></span>, is the time interval in which the sistem completes an oscillation
    //-   p <span style="font-size: 1em;"><b>Frequency</b></span>, is the number of oscillations made in one unit of time
    //-   p <span style="font-size: 1em;"><b>Angular Frequency</b></span>, is 2&#x1D70B; radians times the number of oscillations made in one unit of time

    //- slide(:steps=0, enter='bounceInDown'  :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -20px;") Oscillations
    //-   p(style="margin: 0 0 0px 0;").center Mass-spring system
    //-   spring-mass
    //-   p(style="margin: 50px 0 -0px 0;") Formulas: <b>frequency</b>, <b>period</b> and <b>angular frequency</b>
    //-   .center
    //-     img(src='./assets/equations/frequency.svg' height="150px")

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 1
    //-   example-one
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide(:steps=0, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Simple Harmonic Motion
    //-   spring-mass
    //-   p(style="margin: 0px 20px 0 0;") Hooke's law
    //-   .center
    //-     img(src='./assets/equations/forceHook.svg' height="100px" style="margin: -20px 20px 0 0;")
    //-   p(style="margin: 0px 20px 0 0;") with
    //-   .center
    //-     img(src='./assets/equations/frequencySpring.svg' height="100px" style="margin: -20px 30px 0 0;")
    //-   p(style="margin: -10px 20px 0 0;") we have
    //-   .center
    //-     img(src='./assets/equations/formulasSpring.svg' height="100px"  style="margin-right: 20px;")
    //-     img(src='./assets/period.png' height="100px"  style="margin-right: 20px;")


    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 2
    //-   example-two
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right


    //- slide(:steps=0, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Displacement, Velocity and Acceleration
    //-   p(style="margin-top: -40px;").center
    //-   spring-mass
    //-   p(style="margin: 30px 0px -40px 70px; font-size: 1.3em;") <b>Displacement:</b>
    //-   .center
    //-     img(src='./assets/displacement.png' height="70px" style="margin: -20px 20px 0 50px;")
    //-   displacement-plot
    //-   .center
    //-     img(src='./assets/displacementGraph.png' height="250px")

    //- slide(:steps=0, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Displacement, Velocity and Acceleration
    //-   p <b>Displacement:</b>
    //-   .center
    //-     img(src='./assets/displacementA.png' height="250px" style="margin: -20px 20px 0 0;")
    //-     img(src='./assets/displacementB.png' height="250px")
    //-   .center
    //-     img(src='./assets/displacementC.png' height="250px" style="margin: -20px 55px 0 0;")
    //-     img(src='./assets/displacementPhase.png' height="250px")

    //- slide(:steps=0, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Displacement, Velocity and Acceleration
    //-   p(style="margin-top:-60px;")
    //-     spring-mass(style="margin-left: -70px;")
    //-   p(style="margin: -30px 0px -40px 70px; font-size: 1.3em;") <b>Velocity and acceleration</b>
    //-   p
    //-     img(src='./assets/velocityAcceleration.png' height="150px" style="margin: -0px 130px 180px 100px;")
    //-     img(src='./assets/velocityAccelerationGraphs.png' height="600px" style="margin: -300px -150px 50px 0px;")

    //- slide(:steps=0, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Displacement, Velocity and Acceleration
    //-   p(style="margin-top:-60px;")
    //-     spring-mass
    //-   p(style="margin: 40px 0px -40px 100px; font-size: 1.3em;") <b>Velocity and acceleration</b>
    //-   .center
    //-     img(src='./assets/velocityAccelerationSigns.png' height="400px" style="margin: -40px -200px 0px 150px;")

    //- slide(:steps=0, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Phase constant and Amplitude
    //-   p At t = 0
    //-   .center
    //-     img(src='./assets/displacementT0.png' height="50px" style="margin: -70px 20px 150px 35px;")
    //-     img(src='./assets/velocityT0.png' height="50px" style="margin: -70px 20px 150px 35px;")
    //-   p(style="margin: -150px 20px 150px 35px;") dividing
    //-   .center
    //-     img(src='./assets/velocityOverDisplacementT0.png' height="100px" style="margin: -150px 20px 150px 35px;")
    //-   p(style="margin: -150px 20px 150px 35px;") then
    //-   .center
    //-     img(src='./assets/phaseT0.png' height="150px" style="margin: -150px 20px 150px 35px;")
    //-   p(style="margin: -150px 20px 150px 35px;") and squaring the displacement and velocity we get
    //-   .center
    //-     img(src='./assets/amplitudeT0.png' height="150px" style="margin: -150px 20px 150px 35px;")


    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 3
    //-   example-three
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 4
    //-   example-four
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 5
    //-   example-five
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 6
    //-   example-six
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 7
    //-   example-seven
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide(:steps=0, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Energy in Simple Harmonic Motion
    //-   p.center
    //-     <svg height="250" width="600" viewbox="0 0 600 250">
    //-       <defs>
    //-         <path id="r1" fill="none" stroke="black">
    //-           <animate id="p1" attributeName="d" :values="resorte" dur="2s" repeatCount="indefinite"/>
    //-           <animate attributeName="stroke" values="red;red;black;red;red;black;red;red;" dur="2s" repeatCount="indefinite" begin="p1.begin"/>
    //-         </path>

    //-       </defs>
    //-       <use xlink:href="#r1"/>

    //-       <path :d="base" stroke="black"  fill="none"/>
    //-       <rect x="250" y="40" width="100" height="100" stroke="black" fill="lightskyblue" opacity="0.8">
    //-         <animate attributeName="x" :values="blockPositions" dur="2s" repeatCount="indefinite" begin="p1.begin"/>
    //-       </rect>
    //-       <line x1="300" y1="138" x2="300" y2="170" stroke="red" />
    //-       <line x1="450" y1="138" x2="450" y2="170" stroke="red" />
    //-       <line x1="150" y1="138" x2="150" y2="170" stroke="red" />

    //-       <text x="120" y="190"><tspan style="font-style:italic; font-family: Times New Roman; font-size:0.8em;">x = -A</tspan></text>
    //-       <text x="275" y="190"><tspan style="font-style:italic; font-family: Times New Roman; font-size:0.8em;">x = 0</tspan></text>
    //-       <text x="420" y="190"><tspan style="font-style:italic; font-family: Times New Roman; font-size:0.8em;">x = +A</tspan></text>

    //-         <text x="500" y="98">
    //-           <tspan style="font-style:normal; font-size:0.8em;">No friction</tspan>
    //-         </text>
    //-         <path d="M500,100 475,140 477,125 M475,140 490,130" stroke="red" stroke-width="3" fill="none"/>

    //-         //- <line x1="0" y1="0" x2="500" y2="200" stroke="red" stroke-width="0.5"/>
    //-         //- <line x1="0" y1="200" x2="500" y2="0" stroke="red" stroke-width="0.5"/>
    //-     </svg>
    //-   p(style="margin: 0px 20px 0 0;") Energies
    //-   .center
    //-     img(src='./assets/kineticEnergy.png' height="50px"  style="margin: -20px 100px 0 0;")
    //-     img(src='./assets/potentialEnergy.png' height="50px" style="margin: -20px 20px 0 0;")
    //-   p(style="margin: 0px 20px 0 0;") Mecanical energy
    //-   .center
    //-     img(src='./assets/totalEnergyA.png' height="50px"  style="margin: -50px 10px 0 0")
    //-   p(style="margin: 0px 20px 0 0;") the constant
    //-   .center
    //-     img(src='./assets/totalEnergyB.png' height="100px"  style="margin-right: 20px;")

    //- slide(:steps=0, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Energy in Simple Harmonic Motion
    //-   p.center We can derivre formulas for velocity
    //-   .center
    //-     img(src='./assets/velocityEnergy.png' height="100px"  style="margin-right: 20px;")

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 8
    //-   example-nine
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 9
    //-   example-ten
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -30px;") Exercise 10
    //-   example-thirteen
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide(enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Other systems of SHM
    //-   p(style="margin-top: -30px;").center Angular SHM
    //-   //- torsion-pendulum
    //-   .center
    //-     img(src='./assets/angularSHM.png' height="300px")
    //-   .center
    //-     img(src='./assets/angularTheta.png')
    //-   .center
    //-     img(src='./assets/angularWf.png' height="100px")

    //- slide(enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Inertia moments
    //-   p(style="margin-top: -30px;").center
    //-   .center
    //-     img(src='./assets/inertiaMomentsTable.png')
    //-   p.center Parallel axis theorem
    //-   .center
    //-     img(src='./assets/inertiaParallelAxisTheorem.png' height="70px")

    //- slide(enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center The simple pendulum
    //-   .center
    //-     img(src='./assets/simplePendulum.png' height="350px")
    //-   .center
    //-     img(src='./assets/simplePendulumW.png' height="100px")
    //-   .center
    //-     img(src='./assets/simplePendulumF.png' height="100px")
    //-   .center
    //-     img(src='./assets/simplePendulumT.png' height="100px")

    //- slide(enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center The physical pendulum
    //-   p.center We can derivre formulas for velocity
    //-   .center
    //-     img(src='./assets/physicalPendulum.png' height="350px")
    //-   .center
    //-     img(src='./assets/physicalPendulumW.png' height="100px" style="margin-right: 40px;")
    //-     img(src='./assets/physicalPendulumT.png' height="100px")

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 11
    //-   example-fourteen
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 12
    //-   example-seventeen
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide.boredYet(enter='bounceInDown' , :mouseNavigation='false' :keyboardNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(style="margin-top: -20px;") Exercise 13
    //-   example-eighteen
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right

    //- slide(enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5.center Damped oscillations
    //-   .center
    //-     img(src='./assets/dampedOscillationsX.png')
    //-   .center
    //-     img(src='./assets/dampedOscGraph.png' height="300px" style="margin-right: 50px;")
    //-     img(src='./assets/struts.png' height="300px")

    //- slide(enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5.center Forced oscillations
    //-   .center
    //-     img(src='./assets/forcedOscA.png' height="100px")
    //-   .center
    //-     img(src='./assets/forcedOscillationsGraph.png' height="500px")

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      .center
        h3 References
        p University Physics 13th Edition. Searzs and Zemanzky
        p Physics for scientist and engineers 8th Edition. Serway, Jewett
        p.small created by G. Rodríguez-Morales and spheroidGames
        p.small gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Maxwell equations',
    description: 'Maxwell equations',
    path: 'maxwell-equation'
  },
  components: {
    'pressure-machine': require('./PressureMachine'),
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
    'example-fourteen': require('./components/ExampleFourteen'),
    'example-fifteen': require('./components/ExampleFifteen'),
    'example-sixteen': require('./components/ExampleSixteen'),
    'example-seventeen': require('./components/ExampleSeventeen'),
    'example-eighteen': require('./components/ExampleEighteen'),
    'example-nineteen': require('./components/ExampleNineteen'),
    'example-twenty': require('./components/ExampleTwenty'),
    'simple-pendulum': require('./components/SimplePendulum'),
    'spring-mass': require('./components/SpringMass'),
    'displacement-plot': require('./components/DisplacementPlot'),
    'torsion-pendulum': require('./components/TorsionPendulum')
  },
  data: function () {
    return {
      tiempo: '',
      theme: 'Oscillatory motion'
    }
  },
  computed: {
    time () {
      setInterval(this.updateTime, 100)
    },
    base () {
      let d = 'M10,0 10,140 500,140'
      for (var i = 1; i < 16; i++) {
        d = d + `M0,${i * 10} 10,${(i - 1) * 10}`
      }
      for (i = 1; i < 50; i++) {
        d = d + `M${i * 10},150 ${(i + 1) * 10},140`
      }
      return d
    },
    // var timer = setTimeInterval(resorte),
    resorte () {
      let d = ''
      // let ranges = [350, 342, 318, 282, 237, 188, 140, 98, 68, 52, 52, 68, 98, 140, 188, 237, 282, 318, 342, 350]
      // let ranges = [350, 342, 318, 282, 237, 188, 140, 98, 68, 52, 52, 68, 98, 140, 188, 237, 282, 318, 342, 350]
      let ranges = [350, 335, 294, 233, 167, 106, 65, 50, 65, 106, 167, 233, 294, 335, 350]
      let points = 102
      for (var i = 0; i < ranges.length; i++) {
        let d1 = 'M10,90 30,90 '
        let delta = ranges[i] / (points + 0)
        let period = ranges[i] / 7
        for (var j = 0; j < points - 1; j++) {
          d1 = d1 + `${delta * j + 30},${90 + 20 * Math.sin(2 * Math.PI * delta * j / period)} `
        }
        // console.log('d1', d1)
        d1 = d1 + ` ${ranges[i] + 30},90 ${ranges[i] + 50},90;`
        d = d + d1
      }
     // console.log('d: ', d)

      return d
    },
    blockPositions () {
      let positions = ''
      let points = 15
      for (var i = 0; i < points; i++) {
        let angle = 2 * i * Math.PI / (points - 1)
        positions = positions + `${Math.round(250 + 150 * Math.cos(angle))};`
      }
      console.log(positions)
      return positions
    }
  },
  methods: {
    updateTime () {
      var cd = new Date()
      this.tiempo = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2)
      console.log('tiempoo', this.tiempo)
    },
    zeroPadding (num, digit) {
      var zero = ''
      for (var i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    }
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/dist/themes/agrume/agrume';
#OscillatoryMotion {
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
    font-size: 10px;
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


</style>
