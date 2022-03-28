<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false')
      .center.frontpage
        h3 Optomechatronics
        img(src='./assets/U.svg')
        h4 Mechatronic Elements<br>for Optomechatronic Interface
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>

    slide(:steps=1, enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -20px;")
        | Mechatronic elements for optomechatronic interface
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Sensores</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Acondicionamiento de la señal</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Actuadores</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Microactuadores</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Desplegado de la señal</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Sistemas dinámicos y control </b>

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h4(style="margin: -20px 0 0 0; ").center Sensors
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") Sensing is the most fundamental technique that senses the physical variables being measured. The sensor is a physical element that does this, and contains one or more transducers within it.
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") The transducer converts or transforms one form of energy to another form in a detectable signal form: The energy includes various types of form-mechanical, electrical, optical, chemical, and so forth.
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;")  In view of this, the transducer is an essential element of a sensor which needs to be contained within it.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(style="margin: -20px 0 0 0; ").center Capacitive Sensors
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") When two isolated conductive objects are connected to the poles of a battery, the plates will receive equal amounts of opposite charge.
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") If the plates are disconnected from the battery, they will remain charged as long as they are in a vacuum.
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") A pair of these plates called a capacitor has a capability of holding electrical charge whose capacitance depends on the magnitude of charge, q, and the potential difference between the plates, V. 
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") The capacitance of the parallel plate capacitor is given by
      .center
        img(src='./assets/eq4-1.png' height="70px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(style="margin: -20px 0 0 0; ").center Capacitive Sensors 
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") The capacitance of the parallel plate capacitor is given by
      .center
        img(src='./assets/eq4-1.png' height="70px" style="padding: 15px; margin: 0 50px 0 0;")
        img(src='./assets/eq4-2.png' height="70px" style="padding: 15px; margin: 0 0 0 50px;")
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") where &epsilon;<sub>0</sub> is the permittivity of free space, &epsilon;<sub>r</sub> is the relative permittivity of the dielectric material between two plates, A is the area of the plates, and d is the distance between the plates.
      .center
        img(src='./assets/table4-1.png' height="400px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h6(style="margin: 0px 0 40px 0; ").center Capacitive sensor
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") There are three ways of achieving capacitance variation. 
      .center
        img(src='./assets/fig4-1.png' height="250px")
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") As one example of such changes, let us suppose that the plate separation d is changed by the amount &Delta;d, and then the resulting change in C will be given by
      .center
        img(src='./assets/eq4-2B.png' height="60px" style=" margin: -30px 0 0px 0px;")
      p(style="padding: 15px; margin: -20px 0 0 0px; line-height: 1.5em;") which indicates a nonlinear relationship between them. 
      p(style="padding: 15px; margin: -20px 0 0 0px; line-height: 1.5em;") This type of sensor has several advantages: noncontact, high accuracy, and high resolution. In addition, stability is another advantage, because it is not influenced by pressure or temperature of the environment.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(style="margin-top: 10px;").center Differential Transformer
      .center
        img(src='./assets/fig4-2.png' height="250px" style="margin: -20px 0 0 0px;")
      p(style="padding: 15px; margin: -20px 0 0 0px; line-height: 1.5em;") The differential transformer employing the principle of induction provides an AC voltage output proportional to the displacement of the magnetic core passing through the windings.
      .center
        img(src='./assets/fig4-3.png' height="350px" style="margin: 0px 0 0 -50px;")
        img(src='./assets/eq4-3.png' height="60px" style="margin: -20px -100px 250px 30px;")
        img(src='./assets/eq4-3C.png' height="35px" style="margin: 0px -128px 190px -22px;")
        img(src='./assets/eq4-3B.png' height="40px" style="margin: 0px -128px 130px -0px;")
        img(src='./assets/eq4-3D.png' height="40px" style="margin: 0px -0px 70px -335px;")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Piezoelectric Sensors
      p(style="padding: 1px; margin: -20px 0 0px 0px; line-height: 1.5em;") Certain materials become electrically polarized when they are subject to mechanical strain. This effect is known as the piezoelectric effect. 
      p(style="padding: 1px; margin: -0px 0 0px 0px; line-height: 1.5em;") The reverse effect is called the inverse piezo effect which is widely used in piezo actuators. 
      p.center 
        img(src='./assets/fig4-4.png' height="200px" style="margin: 0px 0 0px 0;")
      p.center 
        img(src='./assets/table4-2.png' height="250px" style="margin: 0px 0 0px 0;")
    

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Piezoelectric Sensors
      p(style="padding: 1px; margin: -0px 0 0px 0px; line-height: 1.5em;") The charge developed is proportional to the applied force, F, and is expressed as
      p.center 
        img(src='./assets/eq4-4.png' height="50px" style="margin: -0px 0 -0px 0;")
      p(style="padding: 1px; margin: -0px 0 0px 0px; line-height: 1.5em;") where Sq is the piezoelectric constant or charge sensitivity of the piezoelectric material. 
      .center
        img(src='./assets/table4-3.png' height="300px" style="margin: 30px 0 0 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Piezoelectric Sensors
      p(style="padding: 1px; margin: -10px 0 0px 0px; line-height: 1.5em;") To pick up an accumulated electric charge, conductive electrodes are applied to the crystal at the opposite sides of the material cut surface. 
      p(style="padding: 1px; margin: -0px 0 20px 0px; line-height: 1.5em;") From this point of view, the piezoelectric transducer is considered to be a parallel plate capacitor. 
      .center
        img(src='./assets/fig4-5.png' height="350px" style="margin: -0px 0 10px 0;")
      p(style="padding: 1px; margin: -0px 0 -20px 0px; line-height: 1.5em;") The capacitance of the piezoelectric material between the plates is given by
      .center
        img(src='./assets/eq4-5.png' height="60px" style="margin: 0px 50px -20px 0;")
        | with
        img(src='./assets/eq4-1.png' height="60px" style="margin: 0 50px -20px 50px;")
        | then 
        img(src='./assets/eq4-6.png' height="80px" style="margin: 0px 0 -30px 50px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Piezoelectric Sensors
      h6(style="margin-top: -0px;").center Polyvinylidene fluoride (PVDF) film sensor
      .center
        img(src='./assets/fig4-6.png' height="250px" style="margin: -0px 0 0 0;")
      p(style="padding: 1px; margin: -0px 0 10px 0px; line-height: 1.5em;") When the PVDF cantilever structure deforms as a result of the applied force, the deformation will produce an electrical charge due to the piezo effect.
      p(style="padding: 1px; margin: -0px 0 10px 0px; line-height: 1.5em;") In general, the relationship between the behavior of the piezoelectric material and electrical behavior is known to exhibit a very complicated phenomenon. According to the property of the linear piezoelectric materials the following relationship holds
      .center
        img(src='./assets/eq4-7.png' height="40px" style="margin: 0px 0 0 0;")
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Piezoelectric Sensors
      h6(style="margin-top: -0px;").center Polyvinylidene fluoride (PVDF) film sensor
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") For the configuration shown in Figure the amount of charge can be expressed as
      .center
        img(src='./assets/eq4-7B.png' height="40px" style="margin: -0px 0 0px 0;")
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") Then the charge generated in the PVDF can be determined by integrating the above equation
      .center
        img(src='./assets/eq4-7C.png' height="60px" style="margin: -0px 0 0px 0;")
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") When the above integration is carried out by using
      .center
        img(src='./assets/eq4-7D.png' height="60px" style="margin: -0px 0 0px 0;")
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") induced due to a concentrated force, F(t), the charge developed for the PVDF configuration is obtained by
      .center
        img(src='./assets/eq4-8.png' height="70px" style="margin: -0px 0 0px 0;")
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Piezoelectric Sensors
      h6(style="margin-top: -0px;").center Polyvinylidene fluoride (PVDF) film sensor
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") This charge generates a current dq=dt through the resistance of the PVDF Rp, so the output voltage Vo(t) of the sensor can be determined by
      .center
        img(src='./assets/eq4-8B.png' height="70px" style="margin: -0px 0 0px 0;")
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") Because
      .center
        img(src='./assets/eq4-8C.png' height="60px" style="margin: -0px 0 0px 0;")
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") the above equation can be rewritten as
      .center
        img(src='./assets/eq4-9.png' height="60px" style="margin: -0px 0 0px 0;")
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") where Cp is the capacitance of the PVDF film given by Cp = &epsilon;<sub>33</sub>A/h and Kp is the constant given by
      .center
        img(src='./assets/eq4-9C.png' height="70px" style="margin: -0px 0 0px 0;")
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Piezoresistive sensors
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") Piezoresistive sensors utilize materials that exhibit a change in resistance large piezoresistive effect. 
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") The strain gauges are attached usually to a beam. 
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") Another type of piezoresistive force sensor uses piezoresistive ceramic composite as a sensing element. 
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") As shown, it does not use any flexible member in its configuration but uses a bulk material which has both structural strength and force detection function.
      .center
        img(src='./assets/fig4-7.png' height="200px" style="margin: 0px 30px 0 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Pyroelectric sensor
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") The pyroelectric materials are crystalline materials capable of generating electric charge in response to heat flow. 
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") When polarized materials are exposed to a temperature change, its polarization, which is the electric charge developed across the material, varies with temperature of the material.
      .center
        img(src='./assets/fig4-8.png' height="450px" style="margin: -0px 0px 0 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Pyroelectric sensor
      .center
        img(src='./assets/fig4-8.png' height="350px" style="margin: -0px 0px 0 0px;")
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") Polarization decreases with increase in temperature and becomes zero or almost zero near the Curie temperature point.
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") The reduction in polarization results in decrease in charge at the surface of material.
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") As a result, a surplus of charge occurs at the surfaces because there are more charges retained at surface before temperature changes.
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") The pyroelectric materials therefore actas a capacitor.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Pyroelectric sensor
      .center
        img(src='./assets/fig4-8.png' height="300px" style="margin: -0px 0px 0 0px;")      
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") When electrodes are deposited on opposite sides, these thermally induced surplus charges can be collected by electrodes.
      //- p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") The configuration is the pyroelectric sensor that measures the change in the charge that occurs in response to change in temperature.
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") The sensor will produce the corresponding charge changes &Delta;q in response to the change in temperature &Delta;T in the following manner
      .center
        img(src='./assets/eq4-9D.png' height="40px" style="margin: 20px 0px 0 0px;")
      p(style="padding: 1px; margin: 0px 0 0px 0px; line-height: 1.5em;") where kq is called pyroelectric charge coefficient and exhibits a nonlinear function of temperature.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Semiconductor Sensors; Light Detectors
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") Semiconductors are crystalline solid material and have several interesting properties:
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") (1) their electrical properties lie in between those of conductor and insulator.
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") (2) their resistance decreases rapidly with increasing temperature, that is, they have a negative coefficient of resistance. For example, silicon is found to have resistivity that decreases about 8%/8C.
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") (3) In a pure state, they have very high resistance such that few electrons are available to carry electric current. Conductors that contain no impurities are called intrinsic semiconductors.
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") However, when impurities are introduced to the pure semiconductor materials, they are called extrinsic semiconductors.
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") The most interesting property of these impure semiconductors is that their conductivity changes, the amount of the change being dependent on the property of the impurity to be added.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Semiconductor Sensors; Light Detectors
      p(style="padding: 1px; margin: -0px 0 0px 0px; line-height: 1.5em;") In extrinsic semiconductors, there is current flow within the materials under the action of an applied field. 
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") Therefore, current flow in semiconductor materials is due to the contribution of 
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") (1) positively charged holes and 
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") (2) negatively charged electrons. 
      .center
        img(src='./assets/fig4-9.png' height="200px" style="margin: 30px 0px 0 0;")
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") The p-type semiconductors are created due to an excess of holes. In this case, the contribution to current flow is due to presence of holes.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center  Semiconductor Sensors; Light Detectors
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") Most semiconductor devices involve a junction at which p-type and n-type doping meet. 
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") In other words, these are placed in contact with one another. 
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") The resulting device is called a p– n junction. 
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") Through this junction, current flows easily from the p-type to the n-type conductor, since positively charged holes easily enter the n-type conductor, whereas electrons (negatively charged) easily enter the p-type conductor. 
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") This process is known as diffusion process. 
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") In the case of the current flow from the n-type to p-type, there is much greater resistance. 
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") There are two types of connection when a voltage source is applied to the junction; forward biased when the p-type is connected to the positive side of the source, and reverse biased when n-type is connected to the positive side. 

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center  Semiconductor Sensors; Light Detectors
      h6(style="margin-top: -0px;").center  Diodo
      .center
        img(src='./assets/fig4-10.png' height="600px" style="margin: -100px -50px 0 0;" class="rotateimg90")
        img(src='./assets/fig4-11.png' height="350px" style="margin: -150px 0px 110px 140px;")
      .center
        img(src='./assets/eq4-10.png' height="70px" style="margin: -40px 0px 0px 0px;")
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em; font-size: 16px;") <b>V</b>: applied voltage, <b>i</b><sub>0</sub>: saturation current, <b>q</b>: electron charge, <b>T</b>: temperature (K), k: Boltzman constant.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center  Photodiode
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") Semiconductor junctions are sensitive to light as well as heat. 
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") If a p– n junction is reversely biased, it has high resistance. 
      p(style="padding: 1px; margin: 10px 0 30px 0px; line-height: 1.5em;") However, when it is exposed to light, photons impinging the junction can excite bound electrons and create new pairs of electrons and holes on both sides of the junction. 
      .center
        img(src='./assets/eq4-11.png' height="70px" style="margin: 0px 50px -20px 0;")
        | <span style="font-size: 20px;">then diode current</span> 
        img(src='./assets/eq4-12.png' height="70px" style="margin: 0px 0px -20px 50px;")
      .center
        img(src='./assets/fig4-12.png' height="380px" style="margin: 30px 0px 0 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center  Photodiode detectors
      .center
        img(src='./assets/fig4-13.png' height="300px" style="margin: 30px 0px 0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center  Other photodetectors
      p(style="padding:15px 0 0 0px; margin: 0px 0px 0px 0px; line-height: 1.2em;") These are categorized into two groups: photon detectors and thermal detectors. 
      p(style="padding: 15px 0 0 0px; margin: 0px 0px 0px 0px; line-height: 1.2em;") The photon detectors operate from the ultraviolet to mid infra spectral ranges, whereas thermal detectors separate in the spectral range of the mid and far infra. 
      p(style="padding: 15px 0 0 0px; margin: 0px 0px 0px 0px; line-height: 1.2em;") There are three major mechanisms which produce this type of phenomenon. 
      p(style="padding: 15px 0 0 0px; margin: 0px 0px 0px 0px; line-height: 1.2em;") These include the photoemissive, photoconductive, and photovoltaic.
      .center
        img(src='./assets/fig4-14.png' height="200px" style="margin: 50px 20px -30px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin: 0 0 -0px 0px;").center Signal conditioning
      h6(style="margin: 0 0 -0px 0px;;").center Operational amplifiers
      p(style="padding: 15px 0 0 0px; margin: 0px 0px 0px 0px; line-height: 1.2em;") An operational amplifier (op-amp) is a complete amplifier circuit supplied as an integrated circuit on a silicon chip and is a basic signal conditioning element. 
      p(style="padding: 15px 0 0 0px; margin: 0px 0px 0px 0px; line-height: 1.2em;") The amplifier has an extremely high gain with typical value higher than 10<sup>5</sup>, and therefore can be regarded as infinite for the purpose of circuit analysis. 
      .center
        img(src='./assets/fig4-15.png' height="220px" style="margin: 0px 0px 0px 0px;")
      p(style="padding: 15px 0 0 0px; margin: 0px 0px 0px 0px; line-height: 1.2em;") We will limit our discussion here to the ideal op-amp which has the following characteristics; 
      p(style="padding: 15px 0 0 0px; margin: 0px 0px 0px 0px; line-height: 1.2em;") (1) high input impedance mega ohms to giga ohms,<br> (2) low output impedance (of the order of 100 &Omega;) considered to be negligible,<br>(3) extremely high gain (G = 10<sup>5</sup> (100 dB) typical value).

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Operational amplifiers
      h6 
      p(style="padding: 15px 0 0 0px; margin: 0px 0px 0px 0px; line-height: 1.2em;") Six different types of amplifier circuits frequently used in instrumentation and signal conditioning.
      .center
        img(src='./assets/fig4-16.png' height="500px" style="margin: -0px 0px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Inverting Amplifier
      p 
      .center
        img(src='./assets/fig4-16.png' height="500px" style="margin: -0px 0px -0px 0px; width: 330px; height: 210px; object-fit: none; object-position: 0% 0;")
      .center
        img(src='./assets/eq4-12C.png' height="70px" style="margin: 10px 20px -0px 20px;")
      .center
        img(src='./assets/eq4-13.png' height="70px" style="margin: 10px 20px -0px 20px;")
      .center
        img(src='./assets/eq4-13B.png' height="50px" style="margin: 10px 20px -0px 20px;")
      .center
        img(src='./assets/eq4-14.png' height="75px" style="margin: 10px 20px -0px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Inverting Amplifier
      p 
      .center
        img(src='./assets/fig4-16.png' height="500px" style="margin: -0px 0px -0px 0px; width: 300px; height: 210px; object-fit: none; object-position: 100% 0;")
      .center
        img(src='./assets/eq4-12C.png' height="70px" style="margin: 10px 20px -0px 20px;")
      .center
        img(src='./assets/eq4-13.png' height="70px" style="margin: 10px 20px -0px 20px;")
      .center
        img(src='./assets/eq4-13B.png' height="50px" style="margin: 10px 20px -0px 20px;")
      .center
        img(src='./assets/eq4-14.png' height="75px" style="margin: 10px 20px -0px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Inverting Summing Amplifier
      p 
      .center
        img(src='./assets/fig4-16.png' height="500px" style="margin: -0px 0px -0px 0px; width: 300px; height: 210px; object-fit: none; object-position: 2% 47%;")
      .center
        img(src='./assets/eq4-16.png' height="60px" style="margin: 30px 20px -0px 20px;")
      .center
        img(src='./assets/eq4-16B.png' height="70px" style="margin: 10px 20px -0px 20px;")
      .center
        img(src='./assets/eq4-16C.png' height="70px" style="margin: 10px 20px -0px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Integrating Amplifier
      .center
        img(src='./assets/fig4-16.png' height="500px" style="margin: -0px 0px -0px 0px; width: 300px; height: 210px; object-fit: none; object-position: 100% 47%;")
      .center
        img(src='./assets/eq4-17.png' height="60px" style="margin: 30px 20px -0px 20px;")
      .center
        img(src='./assets/eq4-17B.png' height="70px" style="margin: 10px 20px -0px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Differential Amplifier
      .center
        img(src='./assets/fig4-16.png' height="500px" style="margin: -0px 0px -0px 0px; width: 610px; height: 210px; object-fit: none; object-position: 0% 98%;")
      .center
        img(src='./assets/eq4-18.png' height="60px" style="margin: 30px 20px -0px 20px;")
      .center
        img(src='./assets/eq4-19.png' height="70px" style="margin: 10px 20px -0px 20px;")
      .center
        img(src='./assets/eq4-19B.png' height="70px" style="margin: 10px 20px -0px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Comparator
      .center
        img(src='./assets/fig4-17.png' height="500px" style="margin: -0px 0px -0px 0px; width: 300px; height: 210px; object-fit: none; object-position: 100% 100%;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Signal Processing Elements
      h6(style="padding: 15px; margin: -60px 1px -0px 1px; line-height: 1.2em;") Filters
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.2em;") Filters are used to inhibit the presence of a certain band of undesirable frequencies from a dynamic final signal, permitting others to be transmitted, as illustrated in Figure 4.18a.
      .center
        img(src='./assets/fig4-18.png' height="500px" style="margin: 40px 20px -30px 20px;")

    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h6(style="margin-top: -0px;").center Wheatstone Bridge
    //-   p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") The bridge circuit is the most common unit which can be used for obtaining the output of transducers.
    //-   p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") It converts a resistance change in response to a voltage change.
    //-   .center
    //-     img(src='./assets/fig4-24.png' height="250px" style="margin: 0px 20px -30px 20px;")
    //-   p(style="padding: 15px; margin: -0px 1px -0px 1px; line-height: 1.2em;") Due to a constant supply voltage this type is called a constant voltage Wheatstone bridge.
    //-   p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") When the bridge is balanced, i.e., V<sub>out</sub> is zero, no current may flow through the meter, which gives i<sub>out</sub> = 0.
    //-   p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") Then, the current i<sub>1</sub> must be equal to i<sub>2</sub>, whereas the current i<sub>3</sub> must be equal to i<sub>4</sub>.
    //-   p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") In addition, the potential difference across R<sub>1</sub> must be equal to that across R<sub>3</sub>, or i<sub>1</sub>R<sub>1</sub> = i<sub>3</sub>R<sub>3</sub> and similarly, for the potential difference across R<sub>2</sub> and R<sub>4</sub>, i<sub>2</sub>R<sub>2a</sub> = i<sub>4</sub>R<sub>4</sub>.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Actuators
      h6(style="margin-top: -0px;").center Electric motors
      p(style="padding: 15px; margin: -50px 1px -0px 1px; line-height: 1.5em;") In DC motor, depending upon what type of magnetic fields (permanent magnetic type or electromagnet wound field type) is used, these are divided into two; permanent magnetic DC motor and electromagnetic type or wound field DC motor. Stepper motors steps by a specified number of degrees according to each pulse the motor receives from its controller. 
      .center
        img(src='./assets/fig4-29.png' height="300px" style="margin: 0px 20px -0px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Actuators: Electric motors
      p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.5em;") The rotor will receive the electromagnetic force called the “Lorentz force” which is given by
      .center
        img(src='./assets/eq4-32.png' height="50px" style="margin: 20px 20px -15px 20px;")
        | <span style="font-size: 20px;">in a generator</span> 
        img(src='./assets/eq4-33.png' height="50px" style="margin: 20px 20px -15px 20px;")
      .center
        img(src='./assets/eq4-33B.png' height="50px" style="margin: 50px 20px -15px 20px;")
        | <span style="font-size: 20px;">in a generator</span> 
        img(src='./assets/eq4-34.png' height="50px" style="margin: 50px 20px -15px 20px;")
      .center
        | <span style="font-size: 20px;">electrical</span> 
        img(src='./assets/eq4-35.png' height="50px" style="margin: 50px 20px -15px 20px;")
        | <span style="font-size: 20px;">mechanical</span> 
        img(src='./assets/eq4-36.png' height="50px" style="margin: 50px 20px -15px 20px;")
      .center
        img(src='./assets/fig4-30.png' height="200px" style="margin: 50px 20px -0px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Actuators: piezoelectric
      p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") A piezoelectric material deforms or produces a force when it is subject to an electrical field.
      .center
        img(src='./assets/fig4-31.png' height="200px" style="margin: 20px 20px -0px 20px;")
      p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") The electrical-mechanical relationship can be approximately described when piezoelectric materials are free of applied loads. It is given by 
      .center
        img(src='./assets/eq4-37.png' height="50px" style="margin: 20px 20px -0px 20px;")
      p(style="padding: 15px; margin: -20px 1px -0px 1px; line-height: 1.2em;") where S is the strain in the piezo material, E is the electric field strength, and dij is the coupling coefficient between S and E, which is the piezoelectric charge constant. 

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Actuators: piezoelectric
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Generally, a single piezoelectric actuator employing the above configuration produces a very small deformation, and therefore a variety of structural configurations are available. 
      p(style="padding: 15px; margin: -10px 1px -0px 1px; line-height: 1.3em;") Three such actuators which include stack, bimorph, and tube types. The stack type is composed of N axial piezo actuators and thus increases N times the deformation of single actuator.
      .center
        img(src='./assets/fig4-32.png' height="300px" style="margin: 30px 20px -0px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Actuators: piezoelectric
      .center
        img(src='./assets/table4-5.png' height="500px" style="margin: 30px 20px -0px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Actuators: piezoelectric
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;")
      .center
        img(src='./assets/fig4-33.png' height="250px" style="margin: 0px 0px -0px 0px;")
      .center
        img(src='./assets/eq4-38.png' height="50px" style="margin: 30px 40px -15px 0px;")
        | <span style="font-size:20px;">with</span>
        img(src='./assets/eq4-38B.png' height="70px" style="margin: 30px 0px -30px 40px;")
      p The dynamics of the element can be written as
      .center
        img(src='./assets/eq4-39.png' height="70px" style="margin: -40px 20px -0px 20px;")
      .center
        img(src='./assets/eq4-39B.png' height="50px" style="margin: 30px 20px -0px 20px;")
      .center
        img(src='./assets/eq4-40.png' height="70px" style="margin: 30px 20px -0px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center   Actuators: Voice Coil Motor (VCM)
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;")
      .center
        img(src='./assets/fig4-34.png' height="500px" style="margin: 50px 20px -110px -20px;")
        img(src='./assets/eq4-41.png'  height="40px"  style="margin: 0px -147px 341px 20px;")
        img(src='./assets/eq4-42.png'  height="70px"  style="margin: 0px -267px 268px 20px;")
        img(src='./assets/eq4-42B.png' height="70px"  style="margin: 0px -141px 194px 20px;")
        img(src='./assets/eq4-42C.png' height="70px"  style="margin: 0px -115px 120px 20px;")
        img(src='./assets/eq4-43.png'  height="70px"  style="margin: 0px -295px 47px 20px;")
        img(src='./assets/eq4-44.png'  height="70px"  style="margin: 0px -245px -28px 20px;")
        img(src='./assets/eq4-45.png'  height="70px"  style="margin: 0px -10px -102px 20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center   Actuators: Voice Coil Motor (VCM)
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") VCM configurations
      .center
        img(src='./assets/fig4-35.png' height="400px" style="margin: 10px 0px -0px -0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Electrostatic Actuator
      .center
        img(src='./assets/fig4-36.png' height="500px" style="margin: 0px 30px -400px -150px;")
        img(src='./assets/eq4-46.png' height="50px" style="margin: 0px 0px 55px 0px;")
        img(src='./assets/eq4-47.png' height="50px" style="margin: 0px 0px 0px -95px;")
        img(src='./assets/eq4-48.png' height="45px" style="margin: 0px 0px -55px -95px;")
        img(src='./assets/eq4-49.png' height="50px" style="margin: 0px 0px -110px -115px;")
        img(src='./assets/eq4-50.png' height="50px" style="margin: 0px 0px -165px -117px;")
        img(src='./assets/eq4-51.png' height="50px" style="margin: 0px 0px -220px -150px;")
        img(src='./assets/eq4-51B.png' height="30px" style="margin: 0px 0px -254px -255px;")
        img(src='./assets/eq4-51C.png' height="50px" style="margin: 0px 0px -310px -117px;")
        img(src='./assets/eq4-52.png' height="50px" style="margin: 0px 0px -365px -197px;")
        img(src='./assets/eq4-53.png' height="50px" style="margin: 0px 0px -420px -145px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Microactuators
      .center
        img(src='./assets/table4-6.png' height="400px" style="margin: -10px 20px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Microactuators: Shape Memory Alloy (SMA) Actuator
      p LoG
      .center
        img(src='./assets/fig4-37.png' height="300px" style="margin: -10px 20px -0px 0px;")
      .center
        img(src='./assets/fig4-38.png' height="300px" style="margin: 10px 20px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Microactuators: Magnetostrictive Actuator
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Magnetostrictive materials found in 1970s transduce magnetic energy to mechanical energy when these are subjected to an electromagnetic field. 
      p(style="padding: 15px; margin: 10px 1px -0px 1px; line-height: 1.3em;")  These materials also generate electromagnetic fields when they are deformed by an external force.
      p(style="padding: 15px; margin: 10px 1px -0px 1px; line-height: 1.3em;") Therefore, magnetostrictive materials can be used for both actuation and sensing due to this bidirectional coupling.
      .center
        img(src='./assets/fig4-39.png' height="300px" style="margin: 10px 20px -0px 0px;")
      p(style="padding: 15px; margin: 10px 1px -0px 1px; line-height: 1.3em;") The advantage of this actuator is that it readily responds to significantly lower voltage as compared with piezoelectric actuators (200 to 300 V).

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Microactuators:  Ionic Polymer Metal Composite (IPMC) Actuator
      p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") The IPMC materials possess the susceptibility to interactions with externally applied electric fields and also to their own internal field structure. 
      p(style="padding: 15px; margin: 10px 1px -0px 1px; line-height: 1.3em;") Due to this property, when an electrical field is applied, the hydrated cations in the materials move to negatively charged electrode side. 
      p(style="padding: 15px; margin: 10px 1px -0px 1px; line-height: 1.3em;") As a result, the IPMC strip undergoes internal volume change and thus bends towards the anode, negatively charged side. 
      .center
        img(src='./assets/fig4-40.png' height="150px" style="margin: 30px 20px -0px 0px;")
      p(style="padding: 15px; margin: 10px 1px -0px 1px; line-height: 1.3em;") The advantages of this actuator are light weight, relatively large displacement, low input voltage (4 to 7 V) and fast response (msec to sec).

    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h6(style="margin-top: -0px;").center Hough transform
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;")
    //-   .center
    //-     img(src='./assets/fig3-33.png' height="600px" style="margin: 30px 20px -0px 0px;")

    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h6(style="margin-top: -0px;").center Hough transform
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;")
    //-   .center
    //-     img(src='./assets/fig3-34.png' height="600px" style="margin: 30px 20px -0px 0px;")

    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h6(style="margin-top: -0px;").center Camera calibration
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") In the pinhole camera model, a small hole is punched at the optical lens center in the camera coordinate system, through which some of the rays of light reflected by the object pass to form an inverted image of the object on the image plane.
    //-   .center
    //-     img(src='./assets/fig3-35.png' height="400px" style="margin: 30px 0px 30px 0px;")
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") This is a camera perspective model. 
      
    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h6(style="margin-top: -0px;").center Camera calibration
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") In the pinhole camera model, a small hole is punched at the optical lens center in the camera coordinate system, through which some of the rays of light reflected by the object pass to form an inverted image of the object on the image plane.
    //-   .center
    //-     img(src='./assets/fig3-35.png' height="350px" style="margin: 30px 0px 30px 0px;")
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") A pinhole does not focus and, in fact, limits the entrance of incoming light, requiring long exposure time.
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") In actual cameras, the pinhole is sufficiently opened by using a converging lens to avoid the disadvantage of the pinhole model.
      
    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h6(style="margin-top: -0px;").center Camera calibration
    //-   .center
    //-     img(src='./assets/fig3-35.png' height="350px" style="margin: 30px 0px 10px 0px;")
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Let us consider the focus variation of the image plane. If an object is located at z = s from the lens as shown in the figure, the following Gaussian lens formula holds
    //-   .center
    //-     img(src='./assets/eq3-46.png' height="70px" style="margin: 10px 0px 10px 0px;")
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") where f and f' are the focal length of the lens and the distance of the image plane from the center point of the lens, respectively.

    //- //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //- //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //- //-   h6(style="margin-top: -0px;").center Camera calibration
    //- //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") The objective of the image analysis is then how we map the image of an object acquired in the image plane into the world coordinate system. Referring to Appendix A1, the mapping conveniently can be described in the following form.
    //- //-   .center
    //- //-     img(src='./assets/eq3-47.png' height="50px" style="margin: 30px 0px 10px 0px;")

      
    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h6(style="margin-top: -0px;").center Perspective projection
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") A perspective transformation called the imaging transformation projects 3D points on to a plane.
    //-   .center
    //-     img(src='./assets/fig3-36.png' height="300px" style="margin: 30px 0px 40px 0px;")
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") In other words, the transformation changes a 3D aggregate of the objects into a plane surface. 

    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h6(style="margin-top: -0px;").center Perspective projection
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") In other words, the transformation changes a 3D aggregate of the objects into a plane surface.
    //-   .center
    //-     img(src='./assets/fig3-37.png' height="350px" style="margin: 0px 0px 30px 0px;")
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") The first step to obtain the image interpretation is to obtain a relationship when a point (Xc, Yc, Zc) in the camera coordinate systems is projected onto the image coordinates (ui, vi) Under the assumption of the ideal projection, the transformation can be described by the projection equation
    //-   .center
    //-     img(src='./assets/eq3-48.png' height="60px" style="margin: 10px 0px 10px 0px;")
      
    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h6(style="margin-top: -0px;").center Perspective projection
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Utilizing these coordinate systems, the whole imaging process can be described in the following sequence:
    //-   .center
    //-     img(src='./assets/eq3-49.png' height="150px" style="margin: 20px 0px 20px 0px;")
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") In other words, the transformation changes a 3D aggregate of the objects into a plane surface. The image coordinates (ui; vi) are located at the center of the pixel coordinate system (u0; v0) As shown in the figure, the relationship between the pixel coordinate and image coordinate systems is, therefore, given by
    //-   .center
    //-     img(src='./assets/eq3-50.png' height="70px" style="margin: 10px 0px 10px 0px;")
      
    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h6(style="margin-top: -0px;").center Perspective projection
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Then, the relationship called perspective matrix can be conveniently expressed in linear form,
    //-   .center
    //-     img(src='./assets/eq3-51.png' height="150px" style="margin: 20px 0px 20px 0px;")
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Using the rigid body transformation, Xc can be related to the world coordinates by the equation
    //-   .center
    //-     img(src='./assets/eq3-52.png' height="200px" style="margin: 10px 0px 10px 0px;")
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") where R denotes the 3D rotation matrix, T denotes the 3D translational vector, and ri (i = 1,2,3) is a row vector.
      
    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h6(style="margin-top: -0px;").center Perspective projection
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Finally, the relationship between the image and the pixel coordinates in the homogeneous coordinate spaceThen, the relationship called perspective matrix can be conveniently expressed in linear form,
    //-   .center
    //-     img(src='./assets/eq3-53.png' height="130px" style="margin: 0px 0px 10px 0px;")
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Therefore, the overall imaging process is described by the relationship,
    //-   .center
    //-     img(src='./assets/eq3-54.png' height="160px" style="margin: 0px 0px 10px 0px;")
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") where [H] is the 3&times;4 camera projection matrix, which is denoted by
    //-   .center
    //-     img(src='./assets/eq3-55.png' height="120px" style="margin: 0px 0px 10px 0px;")
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") where &alpha;<sub>u</sub> = k<sub>u</sub>f and &alpha;<sub>v</sub> = k<sub>v</sub>f
      
    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h6(style="margin-top: -0px;").center Perspective projection
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Rewriting the above equation as,
    //-   .center
    //-     img(src='./assets/eq3-56.png' height="130px" style="margin: 0px 0px 10px 0px;")
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") When the above 12 elements are scaled by the value H<sub>34</sub>, we have 11 variables to determine. The resulting equation is obtained by
    //-   .center
    //-     img(src='./assets/eq3-57.png' height="160px" style="margin: 0px 0px 10px 0px;")
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") where s' is given by s/H<sub>34</sub> This yields the camera calibration equation from which the relationship between the pixel coordinates and the world coordinates can be established.
      
    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h6(style="margin-top: -0px;").center Perspective projection
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") To illustrate the relationship in more detail, let us consider a point, say ith point, in the world coordinates {X} and the corresponding point imaged in the pixel coordinates {u<sub>p</sub>},
    //-   .center
    //-     img(src='./assets/eq3-58.png' height="400px" style="margin: 0px 0px 10px 0px;")
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") In deriving the above equation, we have used the following relationship
    //-   .center
    //-     img(src='./assets/eq3-58B.png' height="60px" style="margin: 0px 0px 10px 0px;")
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") It needs to be pointed out that, at least, we need 12 equations like these that can be obtained by six calibration points.
      
    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h6(style="margin-top: -0px;").center Perspective projection
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") The equation can be written in a more compact form
    //-   .center
    //-     img(src='./assets/eq3-59.png' height="50px" style="margin: 0px 0px 10px 0px;")
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") Solving for q yields
    //-   .center
    //-     img(src='./assets/eq3-60.png' height="50px" style="margin: 0px 0px 10px 0px;")
    //-   p(style="padding: 15px; margin: -30px 1px -0px 1px; line-height: 1.3em;") where A+ is the pseudo inverse of A. Here, we have 11 unknowns for q<sub>s</sub> to be determined and, therefore, need at least six calibration points.


    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : References: {{ slides.length }}</sup>
        h3 References
        ul
          li <b>Optomechatronics</b> <span class="small"> Fusion of Optical and Mechatronic Engineering</span> <br>Author: Hyungsuck Cho<br> Taylor and Francis
        p.small Slides created by G. Rodríguez-Morales, gustavo.rodriguezml@gmail.com, gustavo@gusbits.com with use of images from the above referenced book

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Optomechatronics',
    description: 'Mechatronic Elements',
    path: 'optomechatronics-machine-vision/MechatronicElements'
  },
  components: {
    // 'example-one': require('./components/ExampleOne'),
    // 'example-two': require('./components/ExampleTwo'),
    // 'example-three': require('./components/ExampleThree'),
    // 'example-four': require('./components/ExampleFour'),
    // 'example-five': require('./components/ExampleFive'),
    // 'example-six': require('./components/ExampleSix'),
    // 'example-seven': require('./components/ExampleSeven'),
    // 'example-eight': require('./components/ExampleEight'),
    // 'example-nine': require('./components/ExampleNine'),
    // 'example-ten': require('./components/ExampleTen'),
    // 'example-eleven': require('./components/ExampleEleven'),
    // 'example-twelve': require('./components/ExampleTwelve'),
    // 'example-thirteen': require('./components/ExampleThirteen'),
    // 'quantity-of-heat': require('./components/QuantityOfHeat')
  },
  data: function () {
    return {
      theme: 'Mechatronic elements'
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

.rotateimg90 {
  -webkit-transform:rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
}
</style>
