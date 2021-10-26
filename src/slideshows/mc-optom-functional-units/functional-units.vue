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
      .center
        img(src='./assets/eq6-22.png' height="100px" style="margin: 0 50px 0 0;")
        img(src='./assets/eq6-23.png' height="100px" style="margin: 0 0 0 50px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optomechatronic sensing</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Fiber optic sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;")
      .center
        img(src='./assets/fig6-21.png' height="300px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Piezoelectric bimorph optical fiber sensor.
      .center
        img(src='./assets/eq6-24.png' height="100px" style="margin: 0 0px 0 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Optomechatronic sensing</sup>
      h4(style="margin: -20px 0 20px 0; ").center Optical Sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Fiber optic sensor
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;")
      .center
        img(src='./assets/fig6-22.png' height="300px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Fibre-optic vision sensor.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      h4(style="margin: -20px 0 20px 0; ").center Automatic Optical Focusing
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Autofocusing that automatically locates the focal position is a desirable attribute and an important concept in a number of optical systems.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") It produces clear, sharp images of objects by avoiding blurring of local imaging. 
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") For instance, in some types of microscopes, autofocusing makes possible the detection and identification of atoms. For example, a confocal microscope employs the confocal principle in which a point of light source is always in focus with a point inside the sample, using a pinhole placed in front of the object.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") This confocal system can effectively see a clear image inside thick samples due to this arrangement in which its autofocusing adopts a single point illumination. In this way, it produces a clear image of objects by locally imaging one point at a time.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") In optical hard disks, it enables the optical head to accurately read and write the data by optical means. And in a laser printer, it also helps print better quality images.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      //- h4(style="margin: -20px 0 20px 0; ").center Automatic Optical Focusing
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Optical System Configuration
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") In confocal microscope systems there is a point source of light, a point focus of light inside or at the surface of the object, and a pinhole detector, all three are confocal with each other. 
      .center
        img(src='./assets/fig6-23.png' height="400px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Basic configuration of the autofocusing system.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      //- h4(style="margin: -20px 0 20px 0; ").center Automatic Optical Focusing
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") <em>The f-number</em>
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The brightness of the imaged spot partially depends on the amount of light gathered in by the objective lens of the autofocusing system. To describe this, the f-number is a useful parameter, when the object is located some distance away.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") <em>The Numerical Aperture (NA)</em>
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") However, when both the object and detector are located at a finite distance, as in the case of the confocal system, the numerical aperture denoted by NA is more useful. 
      p(style="margin: 10px 0 0px 0; line-height: 1.2em;") NA is expressed by
      .center
        img(src='./assets/eq6-25.png' height="50px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") where <b>n<sub>t</sub></b> is the refractive index of the immersing medium adjacent to the objective lens of the confocal system, and <b>θ<sub>a</sub></b> is the half-angle of the maximum light cone picked up by the lens, depending upon the aperture of the lens.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") A large value of <b>NA</b> implies a large lens aperture. This is true when the object lens pupil is uniformly filled with light.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      //- h4(style="margin: -20px 0 20px 0; ").center Automatic Optical Focusing
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Optical Resolution
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Lateral resolution is defined by that in the plane of focus. 
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Diffraction of light by an object and by an objective lens determines image resolution.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;")  The lateral resolution is governed by diffraction, rather than limited by chromatic aberration, a spherical aberration. 
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The image resolution for a given numerical aperture of the objective lens of an optical system is given by
      .center
        img(src='./assets/eq6-26.png' height="70px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") where <b>&Delta;<sub>x</sub></b> is the minimum resolvable distance that the diffraction images of two adjacent points in the object can approach each other laterally before they merge.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The above equation implies that the larger the numerical aperture, the higher the resolution.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      //- h4(style="margin: -20px 0 20px 0; ").center Automatic Optical Focusing
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Axial Resolution 
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Axial resolution is defined by the minimum resolvable distance that the diffraction image of two points in the object can approach each other along the optical axis before they merge.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") As derived for the lateral resolution, the wave optics can be used to obtain the minimum resolvable length <b>&Delta;<sub>z</sub></b> in the optical axis (objective lens) direction. 
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The minimum resolvable length along the axis of the objective lens is approximately twice as large as that in the plane of focus.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The axial resolution is given by
      .center
        img(src='./assets/eq6-27.png' height="70px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The depth of field. A practical rule is that the beam spot is “in focus” if it is located in a region on either side of the focal (image) plane bounded by the depth of focus. <br>The bound is given by &pm;10% of the beam spot diameter, <b>D<sub>w</sub></b> at beam waist.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      h4(style="margin: -20px 0 20px 0; ").center Feedback Control of the Objective Lens
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") A typical autofocusing system controls the motion of the objective lens in the direction of optical axis so that it always places a focal point at the image plane.
      .center
        img(src='./assets/fig6-24.png' height="400px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") It consists of an actuator, a half mirror plate, a laser diode, and a quadrant photo sensor.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      //- h4(style="margin: -20px 0 20px 0; ").center Feedback Control of the Objective Lens
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Feedback Control of the Objective Lens
      .center
        img(src='./assets/fig6-25.png' height="200px")
      .center
        img(src='./assets/table6-3.png' height="200px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") PZT is desirable in terms of accuracy and response time, but not for moving range.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The actuator needs to be chosen depending on specifications of the application.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") For autofocusing applications, voice coil motors and piezo-electric transducers are popularly used due to relatively simple structure, fast response, light weight and high precision.
      
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      //- h4(style="margin: -20px 0 20px 0; ").center Feedback Control of the Objective Lens
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Feedback Control of the Objective Lens
      p(style="margin: 10px 0 0px 0; line-height: 1.2em;") In general, the actuator structure should satisfy the following mechanical requirements:
      ol(style="margin: 10px 0 0px 0; line-height: 1.2em;")
        li should be as small and light as possible.
        li should maintain thedirection of laser beam during actuator motion.
        li should have high natural frequency of the moving bobbin.
      .center
        img(src='./assets/fig6-26.png' height="450px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;").center A configuration of the confocal system.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      //- h4(style="margin: -20px 0 20px 0; ").center Feedback Control of the Objective Lens
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Feedback Control of the Objective Lens
      .center
        img(src='./assets/fig6-26.png' height="300px")
      p(style="margin: 10px 0 0px 0; line-height: 1.2em;") The force is given by 
      .center
        img(src='./assets/eq6-28.png' height="60px")
      p(style="margin: 10px 0 0px 0; line-height: 1.2em;") <b>n</b> is the number of coil turns, <b>B</b> is the magnetic flux density in tesla, <b>i</b> is the current in amperes, flowing in the direction perpendicular to the image plane and <b>l<sub>c</sub></b> is the coil effective length in meter.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      //- h4(style="margin: -20px 0 20px 0; ").center Feedback Control of the Objective Lens
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The electrical circuit of the VCM is written by
      .center
        img(src='./assets/eq6-29.png' height="70px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") where <b>V</b> is the electrical voltage applied to the coil and <b>V<sub>bL</sub></b> and <b>V<sub>bR</sub></b> are the back <em>emf</em> of the left and right hand side of the bobbin, respectively.      
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") <b>L</b> and <b>R</b> are the inductance and resistance of the coil, respectively
      .center
        img(src='./assets/eq6-29-1.png' height="70px" style="margin: 0px 50px 0px 0;")
        img(src='./assets/eq6-29-2.png' height="70px" style="margin: 0px 0 0px 50px;")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") where <b>A<sub>c</sub></b> is the cross-sectional area of the coil, <b>μ</b> is the permeability, <b>ρ</b> is the resistivity of the conductor. 
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The back emf is given by
      .center
        img(src='./assets/eq6-30.png' height="70px" style="margin: 0px 50px 0px 0;")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") where <b>dz/dt</b> is the velocity of the bobbin. 

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      //- h4(style="margin: -20px 0 20px 0; ").center Feedback Control of the Objective Lens
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Then
      .center
        img(src='./assets/eq6-29.png' height="70px" style="margin: -10px 50px 0px 0;")
        | &rightarrow;
        img(src='./assets/eq6-31.png' height="70px" style="margin: 0px 0px 0px 50px;")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The dynamic equation governing the vertical motion of the bobbin can be written by
      .center
        img(src='./assets/eq6-32.png' height="70px" style="margin: 0px 0px 0px 0;")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") where <b>m</b> is the total mass of the bobbin and lens unit, and <b>b</b> and <b>k</b> are the damping coefficient and the stiffness of the bobbin, respectively.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Laplace transforming we can obtain the transfer function between vertical motion of the bobbin and electric input voltage to the coil.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The transfer function is given by 
      .center
        img(src='./assets/eq6-33.png' height="60px" style="margin: 0px 50px 0px 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      //- h4(style="margin: -20px 0 20px 0; ").center Feedback Control of the Objective Lens
      .center
        img(src='./assets/fig6-25.png' height="150px" style="margin: 0px 50px 0px 0;")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The objective of this control is to maintain a vertical displacement of the objective lens at the focal length.
      //- p(style="margin: 10px 0 20px 0; line-height: 1.2em;") If the focal length is denoted by <b>z<sub>f</sub></b>, then the controller should bring the system response always within some required specifications.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") For simplicity assume D(s) = 0, and G<sub>u</sub>(s) = 1 and G<sub>s</sub>(s) = 1 or constant.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") If we use a PI controller, the controller transfer function is given by
      .center
        img(src='./assets/eq6-33-1.png' height="70px")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") From the block diagram, the overall closed loop transfer function is determined by
      .center
        img(src='./assets/eq6-34.png' height="120px" style="margin: 0px 0px 0px 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      //- h4(style="margin: -20px 0 20px 0; ").center Feedback Control of the Objective Lens
      .center
        img(src='./assets/table6-4.png' height="300px" style="margin: 0px 50px 0px 0;")
      .center
        img(src='./assets/fig6-27.png' height="450px" style="margin: 0px 50px 0px 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      //- h4(style="margin: -20px 0 20px 0; ").center Feedback Control of the Objective Lens
      p(style="margin: 50px 0 20px 0; line-height: 1.2em;") Let us consider the stability of the system, and determine the range of stability for various gain parameters. The characteristic equation of the
      .center
        img(src='./assets/eq6-34-1.png' height="50px" style="margin: 0px 0px 0px 0;")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;")  Using the parameters in the table, the above equation can be written as
      .center
        img(src='./assets/eq6-35.png' height="40px" style="margin: 0px 0px 0px 0;")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") According to the Routh stability criterion, we can determine the stability condition for the gains kp and ki in the following manner:
      p(style="margin: 100px 0 20px 0; line-height: 1.2em;") (1) All the coefficients of the characteristic equation should be greater than zero,
      .center
        img(src='./assets/eq6-35-1.png' height="40px" style="margin: 0px 0px 0px 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      //- h4(style="margin: -20px 0 20px 0; ").center Feedback Control of the Objective Lens
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") (2) Arranging the coefficients of the polynomial in rows and columns according to the following pattern yields
      .center
        img(src='./assets/eq6-35-2.png' height="200px" style="margin: 0px 0px 0px 0;")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") We have the following parameter condition for stability
      .center
        img(src='./assets/eq6-35-3.png' height="350px" style="margin: 0px 0px 0px 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      //- h4(style="margin: -20px 0 20px 0; ").center Feedback Control of the Objective Lens
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") To satisfy all of the above conditions, kp and ki should meet the following condition for stability
      .center
        img(src='./assets/eq6-35-4.png' height="70px" style="margin: 0px 50px 0px 0;")
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Using this condition, the range of the stability limit (shaded area) is shown in figure.
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") We see that kp is bounded for all values of ki, while ki is not for small kp value.
      .center
        img(src='./assets/fig6-28.png' height="400px" style="margin: 0px 50px 0px 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      //- h4(style="margin: -20px 0 20px 0; ").center Feedback Control of the Objective Lens
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Effect of External Disturbance
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The effect of external disturbance caused by thermal dilation or mechanical vibration that may cause unwanted position deviation.
      .center
        img(src='./assets/fig6-25.png' height="150px" style="margin: 0px 0px 0px 0;")
      p(style="margin: 10px 0 0px 0; line-height: 1.2em;") When disturbance, D(s), comes into the VCR, the overall output displacement of the VCR becomes
      .center
        img(src='./assets/eq6-36.png' height="80px" style="margin: 0px 0px 0px 0;")
      p(style="margin: 10px 0 0px 0; line-height: 1.2em;") The displacement deviation <b>&Delta;Z(s)</b> due to the external disturbance is given as
      .center
        img(src='./assets/eq6-37.png' height="65px" style="margin: 0px 0px 0px 0;")
      p(style="margin: 10px 0 0px 0; line-height: 1.2em;") The deviation can be remarkably diminished by a factor of |1/1+Gp(s)Gc(s)| compared to the case without feedback. This observation implies that the open loop transfer function should be sufficiently larger than unity in order to minimize the displacement deviation. 

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      //- h4(style="margin: -20px 0 20px 0; ").center Feedback Control of the Objective Lens
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Effect of External Disturbance
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") To investigate the effect of the feedback, let us assume that the disturbance D(s) is a step input type, i.e., D(s) =  0.1/s then
      .center
        img(src='./assets/eq6-37-1.png' height="80px" style="margin: 0px 0px 0px 0;")
      p(style="margin: 10px 0 0px 0; line-height: 1.2em;") For proportional controller, Gc(s) = kp; we have
      .center
        img(src='./assets/eq6-37-2.png' height="80px" style="margin: 0px 0px 0px 0;")
      p(style="margin: 10px 0 0px 0; line-height: 1.2em;") From the final value theorem, the steady state error becomes
      .center
        img(src='./assets/eq6-37-3.png' height="65px" style="margin: 0px 0px 0px 0;")
      p(style="margin: 10px 0 0px 0; line-height: 1.2em;") The results show that in order to reduce the steady state error, kp should be increased as large as possible, but the overshoot and stability must also be taken into account.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      //- h4(style="margin: -20px 0 20px 0; ").center Feedback Control of the Objective Lens
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") Effect of External Disturbance
      p(style="margin: 10px 0 0px 0; line-height: 1.2em;") The case of using PI control yields
      .center
        img(src='./assets/eq6-37-4.png' height="65px" style="margin: 0px 20px 0px 0;")
      p(style="margin: 10px 0 0px 0; line-height: 1.2em;") Appling the final value theorem again to the above equation, we have
      .center
        img(src='./assets/eq6-37-5.png' height="50px" style="margin: 20px 0px 0px 0;")
      p(style="margin: 10px 0 0px 0; line-height: 1.2em;") which indicates that the integral control action eliminates the steady state error due to the step disturbance.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Opto-mechatronic functional units : Automatic Optical Focusing</sup>
      h4(style="margin: -20px 0 20px 0; ").center Focus Measurement
      p(style="margin: 10px 0 20px 0; line-height: 1.2em;") The astigmatism method,
      .center
        img(src='./assets/fig6-29.png' height="350px" style="margin: 0px 20px 0px 0;")
      p(style="margin: 10px 0 0px 0; line-height: 1.2em;") When <b>i<sub>a</sub></b>, <b>i<sub>b</sub></b>, <b>i<sub>c</sub></b>, and <b>i<sub>d</sub></b> represent the output of the four quadrants, respectively, the out-of-focus displacement of the lens &Delta;z can be computed by
      .center
        img(src='./assets/eq6-38.png' height="50px" style="margin: 20px 0px 0px 0;")
      p(style="margin: 10px 0 0px 0; line-height: 1.2em;") This &Delta;z represents the error between the desired z(t), and actual values of the focal length, zf, and is measured at every instant of time.


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
