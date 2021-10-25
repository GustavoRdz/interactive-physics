<template lang="pug">
#TemperatureHeat.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false')
      .center.frontpage
        h3 Mecatronica Computacional
        img(src='./assets/U.svg')
        h4 Optmechatronic Functional units
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')

    slide(:steps=1, enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Temas</sup>
      h6(style="margin-top: -20px;") Optomechatronic functional units
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Optomechatronic Actuation</b><br><span style="font-size: 0.8em;"> Silicon Capacitive Actuator. Optical Piezoelectric Actuator. Mathematical Model of the Photon-Induced Currents. Induced Strains of the PLZT. Photo-Thermal Actuator.</span>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Optomechatronic Sensing</b><br><span style="font-size: 0.8em;">Optical Sensor. Fabry-Perot Etalon. Fiber Optic Sensors.</span>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Automatic Optical Focusing</b><br><span style="font-size: 0.8em;"> Optical System Configuration. Optical Resolution. Axial Resolution. Feedback Control of the Objective Lens. Effect of External Disturbance. Focus Measurement.</span>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Acoustic-Opto Modulator</b><br><span style="font-size: 0.8em;">Deflector. Frequency Shifter. Tunable Wavelength Filtering. Efficiency of Modulation and Speed.</span>
        //- eg-transition(enter='bounceInRight' leave='bounceOutRight')
        //-   p(v-if="step >= 1")
        //-     <b>Optical Scanning</b><br><span style="font-size: 0.8em;">Galvanometer. Feedback Control of Galvanometer. Polygonal Scanner. Correcting Scan Errors.</span>

    //- slide(:steps=1, enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Temas</sup>
    //-   h6(style="margin-top: -20px;") Optomechatronic functional units
    //-   .center
    //-     eg-transition(enter='bounceInRight' leave='bounceOutRight')
    //-       p(v-if="step >= 1")
    //-         <b>Optical Switch</b><br><span style="font-size: 0.8em;">Thermally Actuated Mirror. Electrostatically Actuated Mirror Control. Lens Controlled Switching.</span>
    //-     eg-transition(enter='bounceInRight' leave='bounceOutRight')
    //-       p(v-if="step >= 1")
    //-         <b>Zoom Control</b><br><span style="font-size: 0.8em;">Zooming Principle. Zoom Control Mechanism.</span>
    //-     eg-transition(enter='bounceInRight' leave='bounceOutRight')
    //-       p(v-if="step >= 1")
    //-         <b>Visual Autofocusing</b><br><span style="font-size: 0.8em;">Image Blurring. Focus Measure.</span>
    //-     eg-transition(enter='bounceInRight' leave='bounceOutRight')
    //-       p(v-if="step >= 1")
    //-         <b>Illumination Control</b><br><span style="font-size: 0.8em;">Illumination Methods. Illumination Control. Illumination Quality Measure. Autofocusing with Illumination Control.</span>
    //-     eg-transition(enter='bounceInRight' leave='bounceOutRight')
    //-       p(v-if="step >= 1")
    //-         <b>Visual (Optical) Information Feedback Control</b><br><span style="font-size: 0.8em;">Visual Feedback Control Architectures. Fixed Camera Configuration. Eye-In-Hand Configuration. Feedback Controller Design.</span>
    //-     eg-transition(enter='bounceInRight' leave='bounceOutRight')
    //-       p(v-if="step >= 1")
    //-         <b>Optical Signal Transmission</b><br><span style="font-size: 0.8em;">Signal Transmission. Power Transmission and Detection.</span>

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic functional units</sup>
      h4(style="margin: -20px 0 0 0; ").center Optomechatronic Actuation
      p(style="padding: 15px; margin: 1px; line-height: 1.1em;") The types of optomechatronic actuation can be grouped into three classes.
      p The first class is the optical actuators which employ the optically-driven actuation principle. In this case, the energy supplied for actuation comes from a light source, which provides displacement or force to moving mechanisms.
      p The second class is the mechatronic actuators with embedded optical units: Here, mechatronic actuators implies all non-optical actuators. An electrical motor with an optical encoder is a typical example.
      p The third class encompasses the actuators that drive an optical or optomechatronic system.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Opto-mechatronic functional units</sup>
      h4(style="margin: -20px 0 0 0; ").center Optomechatronic Actuation
      p(style="padding: 15px; margin: 1px; line-height: 1.1em;") Optical actuators function when light is either directly or indirectly transformed into mechanical deformation that generates small displacements of micro- or nanometer scale.
      p(style="padding: 15px; margin: 1px; line-height: 1.1em;") Depending upon the interaction of light energy with an absorbing surface, a variety of effects can occur.
      p(style="padding: 15px; margin: 1px; line-height: 1.1em;") According to their nature, two types of optical actuations are considered here: photo-electric actuation and photo-thermal actuation.
      p(style="padding: 15px; margin: 1px; line-height: 1.1em;") Photo-electric actuation utilizes the conversion of the variations in light intensity into the change in the electric power by means of a p–n junction of semiconductor devices, or piezoelectric material resulting from the generation of photo electrons. The other form of conversion uses the change in capacitance in a capacitor type of actuator configuration.
      p(style="padding: 15px; margin: 1px; line-height: 1.1em;") In contrast to this principle, photo thermal actuation utilizes the conversion of the variation in light energy into the change in thermal energy.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Silicon Capacitive Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Silicon Capacitive Actuator
      p( style="margin: 15px 0 0 0; line-height: 1.2em;") Silicon micro actuator is one of the photo-electric actuators that utilize the photon-generated electrons.
      p(style="margin: 15px 0 0 0; line-height: 1.2em;") This actuator uses change in the stored charges in a capacitor, which results in change in the electrostatic pressure acting on a cantilevered beam.
      p(style="margin: 15px 0 0 0; line-height: 1.2em;") This actuator therefore does not use piezoelectric or thermal effects for silicon microstructures.
      p(style="margin: 15px 0 50px 0; line-height: 1.2em;") The actuator is composed of a cantilever beam (Si) and a ground plate (Cu) on an insulating glass, which forms a parallel plate capacitor.
      .center
        img(src='./assets/fig6-1a.png' height="200px")
        img(src='./assets/fig6-1b.png' height="200px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Silicon Capacitive Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Silicon Capacitive Actuator
      p(style="margin: 15px 0 10px 0; line-height: 1.2em;") This parallel plate capacitor is given by a simple relation according to Equation
      .center
        img(src='./assets/eq0.png' height="90px")
      p(style="margin: 15px 0 50px 0; line-height: 1.2em;") where A is the area of the cantilever facing the ground plate, ε<sub>o</sub> is the permittivity of the free space, ε<sub>r</sub> is the permittivity constant of the medium between the gap, and d is the gap between the cantilever and the ground plate.
      p(style="margin: 15px 0 10px 0; line-height: 1.2em;") If an electric voltage <b>V<sub>o</sub></b> is applied to the capacitor through a resistor <b>R</b>, the stored charge is 
      .center
        img(src='./assets/eq6-1.png' height="90px")
      
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Silicon Capacitive Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Silicon Capacitive Actuator
      p(style="margin: 15px 0 20px 0; line-height: 1.2em;") Now, let us consider the optical actuator subject to the electrical potential <b>V</b>, whose gap is not constant due to the cantilevered beam being clamped at one end.
      p(style="margin: 15px 0 20px 0; line-height: 1.2em;") The stored charge will then produce an electrostatic force, which in turn causes a deformation of the cantilever.
      p(style="margin: 15px 0 20px 0; line-height: 1.2em;") Since the beam has a clamped-free condition at its ends, the deflection d at the tip can be described by
      .center
        img(src='./assets/eq6-2.png' height="90px")
      p(style="margin: 15px 0 50px 0; line-height: 1.2em;") where <b>k<sub>q</sub></b> is a constant related to the geometry and material property of the cantilever. This relation can be derived from a simple beam theory from which the deflection of a cantilever beam is governed by
      .center
        img(src='./assets/eq6-3.png' height="90px")
      
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Silicon Capacitive Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Silicon Capacitive Actuator
      p(style="margin: 15px 0 20px 0; line-height: 1.2em;") where z is the vertical displacement at the location x along the beam, and pðxÞ is the distributed loading due to the applied voltage. In the above equation, the cantilever has small deflection and the thickness <b>h << l</b>.
      p(style="margin: 15px 0 20px 0; line-height: 1.2em;") Considering for simplicity a constant loading condition. According to the electrostatic force theory, voltage causes a constant electrostatic force between the ground plate and the undeformed cantilever by the relation given by
      .center
        img(src='./assets/eq6-4.png' height="90px")
      p(style="margin: 15px 0 10px 0; line-height: 1.2em;") Substituting abover equation in its previous one and evaluating z(x) at the end of the cantilever, we have
      .center
        img(src='./assets/eq6-5.png' height="90px")
     
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Silicon Capacitive Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Silicon Capacitive Actuator
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") It is found that this relation is valid for small <b>δ << d</b>. This relates the displacement <b>δ</b> to the applied voltage. If we neglect the changes in capacitance formed by the cantilever beam and ground plate, as the applied voltage increases, the displacement can be expressed by using the relation <b>q &thickapprox; C<sub>o</sub>V</b>. Then it relates the displacement at the cantilever tip to the stored charge q due to the applied voltage. 
      .center
        img(src='./assets/eq6-5.png' height="90px" style="margin: -10px 50px -30px 0;")
        | <span style="font-size: 15px; color: blue;">becomes</span> 
        img(src='./assets/eq6-2.png' height="90px" style="margin: -10px 0 -30px 50px;")
      p(style="margin: 40px 0 20px 0; line-height: 1.2em;")  This implies that the electrostatic field provides the cantilevered optical actuator with a potential energy field.
     
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Silicon Capacitive Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Silicon Capacitive Actuator
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") When monochromatic light (photon) strikes the ground metal plate through the air gap, the photoelectrons are generated through the gap to the cantilever plate.
      p(style="margin: 20px 0 20px 0; line-height: 1.1em;") These photo electrons reduce the charge on the capacitor from the <b>q<sub>o</sub></b> at the stressed condition by the following equation. 
      .center
        img(src='./assets/eq6-6.png' height="90px" style="margin: -10px 50px -30px 0;")
      p(style="margin: 10px 0 20px 0; line-height: 1.1em;")  where <b>Φ<sub>a</sub></b> is the optical power impinging on the area of the ground plate, <b>A</b>, and <b>γ</b> is a constant related to photoelectron flux generation.
      p(style="margin: 10px 0 20px 0; line-height: 1.1em;") Then generation of photoelectron current can control the cantilever beam position denoted by a dotted line shown in the figure.
      .center
        img(src='./assets/fig6-1a.png' height="200px")
     
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Silicon Capacitive Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Silicon Capacitive Actuator
      .center
        img(src='./assets/fig6-1a.png' height="200px")
        img(src='./assets/fig6-1b.png' height="200px")
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") Total current includes the current induced due to optical power and that of the induced current due to bias voltage. The figure indicates a nonlinear relationship between the current and the voltage.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") This relationship differs from magnitude of light intensity, and shows that, as light intensity increases, total current increases accordingly.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") It is reported that for a bias voltage 6V and optical power less than 0.1 mW/cm2 for 600 x 50 x 1 mm3 cantilever beam with a gap of 12 mm.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optical Piezoelectric Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Piezoelectric Actuator
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") When a piezoelectric material is irradiated by light (UV light), it exhibits two interesting phenomena:
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;").center (1) photostrictive, &emsp; &emsp;(2) pyroelectric.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Photostrictive effect is essentially photovoltaic effect caused by the electromotive force which comes from the electrons generated due to the irradiation by the light.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Pyroelectric effect is due to a thermal electromotive force when the piezoelectric material such as lead zironate titanate (PLZT) experiences temperature change at the time of the light irradiation.
      .center
        img(src='./assets/fig6-2a.png' height="300px")
        img(src='./assets/fig6-2b.png' height="300px")
      
   
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optical Piezoelectric Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Piezoelectric Actuator
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") The energy conversion process.
      .center
        img(src='./assets/fig6-3.png' height="300px")
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") This optical actuator can be utilized for various applications such as optical switch, microvalve, and microrobot.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optical Piezoelectric Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Piezoelectric Actuator
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") Mathematical Model of the Photon-Induced Currents
      p(style="margin: 10px 0 0px 0; line-height: 1.2em;") Experimental results show that electromotive current <b>i<sub>p</sub>(t)</b> due to photovoltaic effect may be expressed as
      .center
        img(src='./assets/eq6-7.png' height="90px")
      p(style="margin: 0px 0 20px 0; line-height: 1.2em;") where <b>τ<sub>p</sub></b> is the discharge time constant, <b>c<sub>p</sub></b> is the conversion coefficient from photonic to electric, and <b>u<sub>p</sub></b> is the irradiated light energy.<br> The pyroelectric current <b>i<sub>t</sub></b> is governed by the temperature difference between both sides of the PLZT and can be expressed by
      .center
        img(src='./assets/eq6-8.png' height="70px")
      p(style="margin: 0px 0 20px 0; line-height: 1.2em;") where <b>C<sub>t</sub></b> is the coefficient for conversion from thermal to electric energy, <b>θ<sub>lm</sub>(t)</b> and <b>θ<sub>rm</sub>(t)</b> are the average temperature at both sides of the PLZT due to irradiation, respectively.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optical Piezoelectric Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Piezoelectric Actuator
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") Induced Strains of the PLZT
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") Once the two photon-induced currents are obtained, the induced strains of both sides of the PLZT can be explicitly expressed as a function of the electric charge by
      .center
        img(src='./assets/eq6-9-1.png' height="60px")
      .center
        img(src='./assets/eq6-9-2.png' height="63px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") where <b>α<sub>q</sub></b> is the coefficient of strain conversion from the electric current to mechanical strain for the PLZT element, and <b>q(t)</b> is the electric charge produced by the light photonic energy. The electric charge is governed by
      .center
        img(src='./assets/eq6-10.png' height="70px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") where <b>τ<sub>q</sub></b> is the time constant of the electric charge process.
      
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optical Piezoelectric Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Piezoelectric Actuator
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") Induced Strains of the PLZT
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") On the other hand, the strain <b>ε<sub>lt</sub>(t)</b> and <b>ε<sub>rt</sub>(t)</b>, due to thermal energy produced by the incident light can be expressed by
      .center
        img(src='./assets/eq6-11.png' height="60px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") where <b>α<sub>t</sub></b> is the coefficient of thermal expansion of the PLZT.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Combining the above equations, we have total strains due to photovoltaic effect, pyroelectric effect, and thermal deformations
      .center
        img(src='./assets/eq6-12.png' height="70px")      
      
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optical Piezoelectric Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Piezoelectric Actuator
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") Induced Strains of the PLZT
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") From these strains, the displacement at the tip of a cantilever due to bending <b>δ<sub>l</sub>(t)</b> can be expressed by
      .center
        img(src='./assets/eq6-13.png' height="90px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") where <b>L</b> is the length of the optical piezoelectric element, <b>h</b> is the thickness of the same element.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") 
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optical Piezoelectric Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Piezoelectric Actuator
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") <b>Optical actuator control</b> of the optical actuator, based upon the above derived model equations.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Accurate control of the actuator is essential for microsystem positioning, because any error occurring from the control may be the order of positioning dimension.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") To determine the response of the system for a given controller, we need to determine all of the transfer functions. Some are neither simple nor linear.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") If the actuator system is operated at a certain nominal point, the relationship can be linearized near that point.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") For simplicity, we will assume all elements are linear.
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optical Piezoelectric Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Piezoelectric Actuator
      p(style="margin: 50px 0 50px 0; line-height: 1.2em;") Figure shows a servo-controlled optical actuator system in which an electric motor controls the position of the valve.
      .center
        img(src='./assets/fig6-4.png' height="300px")
      //- p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The control system is composed of an optical actuator <b>G<sub>p</sub>(s)</b> consisting of two bimorph PLZT elements, a UV beam source <b>G<sub>l</sub>(s)</b>, a servomotor, <b>G</sub>m</sub>(s)</b>, a controller <b>G<sub>c</sub>(s)</b>, and a displacement sensor <b>G</sub>s</sub></b>. 
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") The controller must be so designed that the error between <b>x<sub>d</sub></b> and <b>x(t)</b>, <b>e(t)</b>, be driven to zero steady state with fast response.
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optical Piezoelectric Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Piezoelectric Actuator
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The open loop transfer function between the displacement at the tip <b>δ<sub>l</sub>(s)</b> and UV beam energy <b>U<sub>p</sub>(s)</b> can be obtained by Laplace transforming the above equations. This can be written by 
      .center
        img(src='./assets/eq6-14.png' height="90px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") For simplicity, let us suppose that the dynamics of the servomotor-UV beam and sensor are fast enough to be neglected. In this situation, the control system has two elements; plant to be controlled <b>G<sub>p</sub>(s)</b> and controller <b>G<sub>c</sub>(s)</b>. The control system block diagram (a) in this case can be reduced to (b) to describe the simplified loop transfer function <b>G<sub>o</sub>(s)</b> which is given by
      .center
        img(src='./assets/eq6-15.png' height="90px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") where <b>δ(s)</b> is replaced by <b>X(s)</b>, <b>i</b> is the current input to the UV radiator, <b>K<sub>l</sub></b> is the gain associated with the radiator and servomotor. 
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optical Piezoelectric Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Piezoelectric Actuator
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") With <b>G<sub>p</sub>(s)</b>, we have
      .center
        img(src='./assets/eq6-15-B.png' height="90px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") where the above coefficients are <b>b<sub>0</sub>=CC<sub>t</sub>α<sub>q</sub></b>, <b>b<sub>1</sub>=C<sub>p</sub>α<sub>q</sub> + CC<sub>t</sub>α<sub>q</sub>τ<sub>p</sub></b>, <b>b<sub>2</sub>=C<sub>p</sub>α<sub>q</sub>τ<sub>t</sub></b>, <b>a<sub>0</sub>=τ<sub>p</sub> + τ<sub>q</sub> + τ<sub>t</sub></b>, <b>a<sub>1</sub>=τ<sub>p</sub>τ<sub>q</sub> + τ<sub>p</sub>τ<sub>t</sub> + τ<sub>q</sub>τ<sub>t</sub></b>, <b>a<sub>2</sub>=τ<sub>p</sub>τ<sub>q</sub>τ<sub>t</sub></b> and C = 2.0&times;10<sup>-4</sup>. <br>Let the desired deformation at the tip of the PLZT be 20 μm, i.e., X<sub>d</sub> = 20&times;10<sup>-6</sup>&times;(1/s). <br>With the open loop transfer function <b>G<sub>o</sub>(s)</b> of the optical actuator system and a PID controller given in the form
      .center
        img(src='./assets/eq6-16.png' height="90px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") we can simulate the closed loop control system in order to see the control performance of the optical actuator.      
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optical Piezoelectric Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Piezoelectric Actuator
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") we can simulate the closed loop control system in order to see the control performance of the optical actuator.
      .center
        img(src='./assets/table6-1.png' height="400px")
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optical Piezoelectric Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Piezoelectric Actuator
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;").center Controller response

      .center
        img(src='./assets/fig6-5.png' height="300px")
      p(style="margin: -10px 0 20px 0; line-height: 1.2em;").center Optical actuator responses
      .center
        img(src='./assets/fig6-6.png' height="300px")
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optical Piezoelectric Actuator</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Piezoelectric Actuator
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") A gripper-like structure of a robotic manipulator application
      .center
        img(src='./assets/fig6-7a.png' height="200px")
      .center
        img(src='./assets/fig6-7b.png' height="200px")
      p(style="margin: 10px 0 20px 0; line-height: 1.1em;") <b>G<sub>l</sub>(s)</b> is the transfer function between the controller input and the radiated input of the UV beam, <b>G<sub>o</sub>(s)</b> is the transfer function between the UV light and actuator movement, <b>G<sub>p</sub>(s)</b> is the gripper transfer function, <b>G<sub>c</sub>(s)</b> is the controller transfer function, and <b>G<sub>s</sub>(s)</b> is the sensor transfer function.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Photo Thermal Actuador</sup>
      h4(style="margin: -20px 0 20px 0; ").center Photo Thermal Actuador
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") This actuator employs an indirect means of transforming light energy into mechanical actuation. <br>Typical arrangements of the photo-thermal actuator are illustrated in figure
      .center
        img(src='./assets/fig6-8.png' height="500px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Photo Thermal Actuador</sup>
      h4(style="margin: -20px 0 20px 0; ").center Photo Thermal Actuador
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") Walking machine
      .center
        img(src='./assets/fig6-9.png' height="500px")
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Photo Thermal Actuador</sup>
      h4(style="margin: -20px 0 20px 0; ").center Photo Thermal Actuador
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") Walking machine
      .center
        img(src='./assets/fig6-10.png' height="500px")
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Photo Thermal Actuador</sup>
      h4(style="margin: -20px 0 20px 0; ").center Photo Thermal Actuador
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") Walking machine
      .center
        img(src='./assets/fig6-11.png' height="300px")
      .center
        img(src='./assets/eq6-17-B.png' height="100px")
      .center
        img(src='./assets/eq6-18.png' height="100px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Photo Thermal Actuador</sup>
      h4(style="margin: -20px 0 20px 0; ").center Photo Thermal Actuador
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") Walking machine control
      .center
        img(src='./assets/fig6-12.png' height="200px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Deformable Mirror</sup>
      h4(style="margin: -20px 0 20px 0; ").center Photo Thermal Actuador
      p(style="margin: 20px 0 20px 0; line-height: 1.2em;") Deformable Mirror
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Deformable mirror concept for controlling the phase of light wave. The first one shown in (a) is a monolithic deformable mirror actuated by a PZT ceramic bulk with two-dimensionally-arrayed electrodes.<br> Applying suitable electrical voltage on these electrodes forms a locally deformable mirror surface.<br> Deformable mirrors based on MEMS technology shown in (b) are to correct the distorted wave front, which utilize a great member of a tiny lenslet.
      .center
        img(src='./assets/fig6-13.png' height="400px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optomechatronic sensing</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optomechatronic Sensing
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Sensing is a basic functionality that optomechatronic systems possess. 
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Depending upon whether optical or mechatronic elements participate in providing sensing function or not, optomechatronic sensors are classified into the following two groups.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The first group represents optical sensors whose sensing function is enabled by incorporating with mechatronic units. Most of the optical sensors belong to this class. 
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The second group represents non-optical sensors integrated with optical units or elements belonging to the reverse case of the above example.<br> In this case, sensors have optical units within their body to constitute a sensing element.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optomechatronic sensing</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") As an illustration of an optical sensor, consider an <b>optical encoder</b> which measures angular or linear motion of mechatronic systems in an optical way by adopting the optical photoelectric principle.
      .center
        img(src='./assets/fig6-14.png' height="450px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optomechatronic sensing</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The interferometric <b>dilatometer</b> is a variation of Michelson type that is based upon opto-mechatronic interaction between the optical and mechatronic units.
      .center
        img(src='./assets/fig6-15.png' height="450px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optomechatronic sensing</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The Fabry-Parot etalon has a variety of different fringe characteristics controlled by varying one of the mirror separations, the index of refraction, the incident angle. Due to this changeability of its parameters, and its special characteristics, the device has numerous applications in various fields.
      .center
        img(src='./assets/fig6-16.png' height="450px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optomechatronic sensing</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The Fabry-Parot etalon.
      .center
        img(src='./assets/fig6-16-1.png' height="250px")
      .center
        img(src='./assets/fig6-16-2.png' height="350px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optomechatronic sensing</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The Fabry-Parot etalon.
      .center
        img(src='./assets/fig6-16-1.png' height="250px")
      .center
        img(src='./assets/fig6-16-2.png' height="350px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optomechatronic sensing</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The Fabry-Parot etalon.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Can enable us to calculate the unknown wavelength by moving the plates of the device and counting the number of interference fringes. 
      .center
        img(src='./assets/eq6-18-1.png' height="100px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") When two wavelength components &lambda;<sub>0</sub> and &lambda;<sub>1</sub> = &lambda;<sub>0</sub> + &Delta;&lambda;, are contained in the source, superposition of two fringe systems would result.  
      .center
        img(src='./assets/fig6-17.png' height="300px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optomechatronic sensing</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The Fabry-Parot etalon.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Can enable us to calculate the unknown wavelength by moving the plates of the device and counting the number of interference fringes. 
      .center
        img(src='./assets/eq6-18-1.png' height="100px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") When two wavelength components &lambda;<sub>0</sub> and &lambda;<sub>1</sub> = &lambda;<sub>0</sub> + &Delta;&lambda;, are contained in the source, superposition of two fringe systems would result.  
      .center
        img(src='./assets/fig6-17.png' height="300px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optomechatronic sensing</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Fiber optic sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The characteristic of fiber optic sensors as distinct from other optical sensors is that they can easily interact with the mechanical elements in detecting motion. 
      .center
        img(src='./assets/table6-2.png' height="400px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optomechatronic sensing</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Fiber optic sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The characteristic of fiber optic sensors as distinct from other optical sensors is that they can easily interact with the mechanical elements in detecting motion. 
      .center
        img(src='./assets/fig6-18.png' height="400px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Intensity modulation optical sensors. 

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optomechatronic sensing</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Fiber optic sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;")
      .center
        img(src='./assets/fig6-19.png' height="300px")
      .center
        img(src='./assets/eq6-20.png' height="50px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Wavelength modulation-based optical sensor.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optomechatronic sensing</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Fiber optic sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;")
      .center
        img(src='./assets/fig6-20.png' height="400px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") An optical fiber Fabry-Perot interferometer.

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : References: {{ slides.length }}</sup>
        h3 References
        ul
          li <b>Optomechatronics</b> <span class="small"> Fusion of Optical and Mechatronic Engineering</span> <br>Author: Hyungsuck Cho<br> Tylor and Francias
        p.small Slides created by G. Rodríguez-Morales and spheroidGames, gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com with use of images from the above referenced book

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Optomechatronic functional units',
    description: 'optmechatronic functional units',
    path: 'mc-optom-functional-units'
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
</style>
