<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false')
      .center.frontpage
        h3 Optomechatronics
        img(src='./assets/U.svg')
        h4 Optomechatronic Integration
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
        | Optomechatronic Integration
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Basic Considerations for Integration</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Basic Functional Modules</b><br> <span style="font-size: 0.7em;">Signal Transformation, Signal Manipulation, Signal Sensing, Signal Actuation, Signal Transmission, Signal Display.</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Optomechatronic Interface or Integration</b><br><span style="font-size: 0.7em;">Basic Two-Signal Integration, Fundamental Optomechatronic Integration: Illustrations, Generic Forms for Optomechatronic Interface, Integrability, Signal Flow.</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1" style="margin: -10px 0 0 0;")
            <b>Integration-Generated Functionalities</b>

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h4(style="margin: -20px 0 0 0; ").center Optomechatronic integration
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;")  Integrations can be derivable from certain principles of physical interaction. We can summarize the following characteristic points:
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") <b>Hierarchical structure of integration</b>: Is composed of functional coordination level, structural integration level, and organization level.
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") <b>Fundamental functionalities</b>: Functionality is a task-oriented functional entity required for a system to execute a given task specified by the designer.
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") <b>Integration interface</b>: The integration must consider the interfacing mechanism between the optical, mechanical, and electrical components.  

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(style="margin: -20px 0 0 0; ").center Basic Considerations for Integration
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") Three engineering fields (O, E, M) have distinct physical variables originating from their own physical phenomena.
      
      img(src='./assets/fig5-1.png' height="300px" style="margin:0px 20px 120px 50px;")
      img(src='./assets/table5-1.png' height="500px" style="margin:100px 0px 0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(style="margin: -20px 0 0 0; ").center Basic Considerations for Integration 
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") We will represent these unique variables in the following manner: mechanical variables as a mechanical signal, optical variables as an optical signal, and electrical variables as an electrical signal.
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") optical signal = O (energy, ray, intensity, radiation flux...)
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") mechanical signal = M (energy, motion, fluid flow deformation, strain...)
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") electrical signal = E (energy, current, voltage, charge, magnetic flux...)
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") The interaction can occur with various modalities, depending largely upon: <br>(1) which variables are interacting, <br>(2) how many variables are interacting, <br>(3) how and when they are interacting, and <br>(4) finally, the sequence and the duration of the interaction.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(style="margin: -20px 0 0 0; ").center Basic Considerations for Integration 
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") We will try to find a relevant integration concept 
      .center
        img(src='./assets/fig5-2.png' height="300px" style="margin:0px 0px 0px 0px;")
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") <b>Signal transformation</b> is the conversion of one signal form into another as a result of a change of physical elements.<br> <b>Signal manipulation</b> is the action of diverting or modifying a signal.<br><b>Sensing</b> is the measurement of the state of a signal.<br><b>Signal actuation</b> is the control of a signal in order to maintain it at a certain value.<br><b>Signal transmission</b> is the action of transmitting a signal to a desired location.<br><b>Signal display</b> is the presentation of a signal in a presentation element.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h6(style="margin: 0px 0 40px 0; ").center Basic Considerations for Integration 
      p(style="padding: 15px; margin: 1px; line-height: 1.5em;") The principle of the optomechatronic integration concept departs from this concept. 
      .center
        img(src='./assets/fig5-3.png' height="500px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center  Basic Considerations for Integration 
      p(style="padding: 1px; margin: -10px 0 0px 0px; line-height: 1.5em;") Example: Optical-based heat-treatment of the surface of a mechanical part.
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") <b>Functionalities involved</b>:<br>+ Light beam generation for heating the material<br>+ Control of the actuator for precise light intensity<br>+ Control of the stage motion in a desired manner<br>+ Sensing or monitoring the heat-treated state of the material<br>+ Feedback control of this information to regulate the heat-treated state. 
      .center
        img(src='./assets/fig5-4.png' height="350px" style="margin: 20px 0 10px 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Basic Considerations for Integration 
      p(style="padding: 1px; margin: -10px 0 0px 0px; line-height: 1.5em;") Relevant functional modules 
      .center
        img(src='./assets/fig5-5.png' height="500px" style="margin: 20px 0 10px 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Basic Functional Modules
      h6(style="margin-top: -50px;").center Signal transformation
      .center
      .center
        img(src='./assets/table5-2.png' height="450px" style="margin: -0px 0 0 0;")
      p(style="padding: 1px; margin: -0px 0 10px 0px; line-height: 1.5em;") Transformation example: 
      .center
        img(src='./assets/eq5-0B.png' height="60px" style="margin: 0px 0 0 0;")
      .center
      p(style="padding: 1px; margin: -0px 0 10px 0px; line-height: 1.5em;") Mathematically, this can be expressed by: 
      .center
        img(src='./assets/eq5-1.png' height="50px" style="margin: 0px 0 0 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Basic Functional Modules
      h6(style="margin-top: -50px;").center Signal manipulation
      .center
      .center
        img(src='./assets/table5-3.png' height="450px" style="margin: -0px 0 0 0;")
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Basic Functional Modules
      h6(style="margin-top: -50px;").center Signal manipulation
      p(style="padding: 1px; margin: -0px 0 10px 0px; line-height: 1.5em;") A) Optical signal modulation:<br> The major need for optical modulation comes when we want to:<br> &emsp; (1) control the intensity and phase of a light beam.<br> &emsp; (2) control the frequency and wave form of a light beam.<br> &emsp; (3) impress information on to a carrier signal.<br> &emsp; (4) have noise reduction. 
      p(style="padding: 1px; margin: -0px 0 10px 0px; line-height: 1.5em;") B) Optical scanning:<br> Scanning is necessary when a light beam or field of view needs to be directed to a certain point or area of an optical field. 
      .center
        img(src='./assets/fig5-6.png' height="250px" style="margin: -0px 0 0 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Basic Functional Modules
      h6(style="margin-top: -50px;").center Signal sensing
      .center
        img(src='./assets/table5-4.png' height="450px" style="margin: -40px 0 0 0;")
      .center
        img(src='./assets/fig5-7.png' height="300px" style="margin: -0px 0 0 0;")
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Basic Functional Modules
      h6(style="margin-top: -50px;").center Signal actuation
      p(style="padding: 1px; margin: -0px 0 10px 0px; line-height: 1.5em;") Optical to mechanical actuator.
      .center
        img(src='./assets/fig5-7.png' height="500px" style="margin: -0px 0px -0px 0px; width: 315px; height: 180px; object-fit: none; object-position: 100% 100%;")
      p(style="padding: 1px; margin: 50px 0 10px 0px; line-height: 1.5em;") The electrical-to-mechanical module <b>T<sup>E</sup><sub>M</sub></b> is the most commonly-used actuation mode that actuates mechanical signal by electrical signal.
      p(style="padding: 1px; margin: 50px 0 10px 0px; line-height: 1.5em;") In case of remote actuation
      .center
        img(src='./assets/eq5-3.png' height="50px" style="margin: -0px 0px -0px 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Basic Functional Modules
      h6(style="margin-top: -50px;").center Signal transmision
      .center
        img(src='./assets/table5-5.png' height="350px" style="margin: -40px 0 0 0;")
      .center
        img(src='./assets/fig5-8.png' height="400px" style="margin: -0px 0 0 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Basic Functional Modules
      h6(style="margin-top: -50px;").center Signal display
      .center
        img(src='./assets/table5-6.png' height="250px" style="margin: -10px 0 0 0;")
      .center
        img(src='./assets/fig5-9.png' height="400px" style="margin: 20px 0 0 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Optomechatronic Interface or Integration
      h6(style="margin-top: -40px;").center Basic Two-Signal Integration
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;")
      .center
        img(src='./assets/fig5-10.png' height="700px" style="margin: -40px 0 0px 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Optomechatronic Interface or Integration
      h6(style="margin-top: -40px;").center Basic Two-Signal Integration
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;")
      .center
        img(src='./assets/fig5-10.png' height="500px" style="margin: -0px 0px -0px 0px; width: 420px; height: 180px; object-fit: none; object-position: 0% 0%;")
      .center
        img(src='./assets/eq5-7B.png' height="80px" style="margin: 0px 0 50px 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Optomechatronic Interface or Integration
      h6(style="margin-top: -40px;").center Basic Two-Signal Integration
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;")
      .center
        img(src='./assets/fig5-10.png' height="500px" style="margin: -0px 0px -0px 0px; width: 240px; height: 190px; object-fit: none; object-position: 94% 0%;")
        img(src='./assets/fig5-10.png' height="500px" style="margin: -0px 0px -0px 0px; width: 420px; height: 190px; object-fit: none; object-position: 12% 34%;")
      .center
        img(src='./assets/eq5-8.png' height="40px" style="margin: 0px 0 0px 0;")
      .center
        img(src='./assets/fig5-10.png' height="500px" style="margin: -0px 0px -0px 0px; width: 220px; height: 180px; object-fit: none; object-position: 96% 35%;")
        img(src='./assets/fig5-10.png' height="500px" style="margin: -0px 0px -0px 0px; width: 240px; height: 180px; object-fit: none; object-position: 0% 66%;")
      .center
        img(src='./assets/eq5-9.png' height="50px" style="margin: 0px 0 50px 0;")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Optomechatronic Interface or Integration
      h6(style="margin-top: -40px;").center Basic Two-Signal Integration
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;")
      .center
        img(src='./assets/fig5-10.png' height="500px" style="margin: -0px 0px -0px 0px; width: 210px; height: 180px; object-fit: none; object-position: 98% 66%;")
        img(src='./assets/fig5-10.png' height="500px" style="margin: -0px 0px -0px 0px; width: 450px; height: 180px; object-fit: none; object-position: 12% 100%;")
      .center
        img(src='./assets/eq5-10.png' height="50px" style="margin: 0px 0 0px 0;")
      .center
        img(src='./assets/fig5-10.png' height="500px" style="margin: 50px 0px -0px 0px; width: 180px; height: 190px; object-fit: none; object-position: 100% 100%;")
      .center
        img(src='./assets/eq5-11.png' height="50px" style="margin: 0px 0 50px 0;")
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Fundamental Optomechatronic Integration
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;")
      .center
        img(src='./assets/fig5-11.png' height="400px" style="margin: -0px 0 0px 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Fundamental Optomechatronic Integration
      .center
        img(src='./assets/fig5-11.png' height="500px" style="margin: 5px 0px -0px 0px; width: 464px; height: 180px; object-fit: none; object-position: 0% 0%;")
      .center
        img(src='./assets/eq5-11B.png' height="50px" style="margin: 0px 0 0px 0;")
      .center
        img(src='./assets/fig5-11.png' height="500px" style="margin: 50px 0px -0px 0px; width: 188px; height: 180px; object-fit: none; object-position: 100% 0%;")
        img(src='./assets/fig5-11.png' height="500px" style="margin: 50px 0px -0px 0px; width: 210px; height: 180px; object-fit: none; object-position: 0% 100%;")
        img(src='./assets/fig5-10.png' height="500px" style="margin: 50px 0px -0px 0px; width: 180px; height: 180px; object-fit: none; object-position: 100% 98%;")
      .center
        img(src='./assets/eq5-11C.png' height="150px" style="margin: 0px 0 50px 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Fundamental Optomechatronic Integration
      .center
        img(src='./assets/fig5-11.png' style="margin: 50px 0px -0px 0px; width: 350px; height: 180px; object-fit: none; object-position: 70% 100%;")
      .center
        img(src='./assets/eq5-11D.png' height="80px" style="margin: 0px 0 0px 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Fundamental Optomechatronic Integration
      .center
        img(src='./assets/fig5-12.png' style="margin: 40px 0px -0px 0px; height: 300px;")
      .center
        img(src='./assets/eq5-11E.png' height="130px" style="margin: 20px 0 0px 0;")
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Generic Forms for Optomechatronic Interface
      h6(style="margin-top: -0px;").center Basic types of optomechatronic integration.
      .center
        img(src='./assets/fig5-13.png' height="200px" style="margin: 0px 30px 0 0;")
    
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Generic Forms for Optomechatronic Interface
      h6(style="margin-top: -0px;").center Interface for an optomechatronic transformation type integration
      .center
        img(src='./assets/fig5-14.png' height="500px" style="margin: -40px 30px 0 0;")
      .center
        img(src='./assets/eq5-11F.png' height="150px" style="margin: 20px 30px 0 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Generic Forms for Optomechatronic Interface
      h6(style="margin-top: -50px;").center Symbols and mathematics for various type of integrations
      .center
        img(src='./assets/table5-7A.png' height="100px" style="margin: -40px 0px 0 0px;")
      .center
        img(src='./assets/table5-7C.png' height="182px" style="margin: -0px 0px 0 0px;")
      .center
        img(src='./assets/table5-7D.png' height="209px" style="margin: -0px 0px 0 0px;")
      .center
        img(src='./assets/table5-7E.png' height="190px" style="margin: -0px 0px 0 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Generic Forms for Optomechatronic Interface
      h6(style="margin-top: -50px;").center Symbols and mathematics for various type of integrations
      .center
        img(src='./assets/table5-7B.png' height="56px" style="margin: -0px 0px 0 0px;")
      .center
        img(src='./assets/table5-7F.png' height="209px" style="margin: -0px 0px 0 0px;")
      .center
        img(src='./assets/table5-7G.png' height="140px" style="margin: -0px 0px 0 0px;")
      .center
        img(src='./assets/table5-7H.png' height="178px" style="margin: -0px 0px 0 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Generic Forms for Optomechatronic Interface
      h6(style="margin-top: -50px;").center Symbols and mathematics for various type of integrations
      .center
        img(src='./assets/table5-7B.png' height="56px" style="margin: -0px 0px 0 0px;")
      .center
        img(src='./assets/table5-7I.png' height="135px" style="margin: -0px 0px 0 0px;")
      .center
        img(src='./assets/table5-7J.png' height="228px" style="margin: -0px 0px 0 0px;")
      .center
        img(src='./assets/table5-7K.png' height="200px" style="margin: -0px 0px 0 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Generic Forms for Optomechatronic Interface
      h6(style="margin-top: -50px;").center Symbols and mathematics for various type of integrations
      .center
        img(src='./assets/table5-7B.png' height="56px" style="margin: -0px 0px 0 0px;")
      .center
        img(src='./assets/table5-7L.png' height="210px" style="margin: -0px 0px 0 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Generic Forms for Optomechatronic Interface
      h6(style="margin-top: -50px;").center Integration type and mathematics for various optomechatronic integrations
      .center
        img(src='./assets/table5-8A.png' height="140px" style="margin: -0px 0px 0 0px;")
      .center
        img(src='./assets/table5-8C.png' height="188px" style="margin: -0px 0px 0 0px;")
      .center
        img(src='./assets/table5-8D.png' height="232px" style="margin: -0px 0px 0 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Generic Forms for Optomechatronic Interface
      h6(style="margin-top: -50px;").center Integration type and mathematics for various optomechatronic integrations
      .center
        img(src='./assets/table5-8B.png' height="112px" style="margin: -30px 0px 0 0px;")
      .center
        img(src='./assets/table5-8E.png' height="175px" style="margin: -0px 0px 0 0px;")
      .center
        img(src='./assets/table5-8F.png' height="247px" style="margin: -0px 0px 0 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Generic Forms for Optomechatronic Interface
      h6(style="margin-top: -50px;").center Integration type and mathematics for various optomechatronic integrations
      .center
        img(src='./assets/table5-8B.png' style="margin: 0px 0px -0px 0px; width: 630px; height: 80px; object-fit: none; object-position: 0% 0%;")
      .center
        img(src='./assets/table5-8G.png' height="152px" style="margin: -0px 0px 0 0px;")
      .center
        img(src='./assets/table5-8H.png' height="162px" style="margin: -0px 0px 0 0px;")
      .center
        img(src='./assets/table5-8I.png' height="154px" style="margin: -0px 0px 0 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center Generic Forms for Optomechatronic Interface
      h6(style="margin-top: -50px;").center Integration type and mathematics for various optomechatronic integrations
      .center
        img(src='./assets/table5-8B.png' style="margin: 0px 0px -0px 0px; width: 630px; height: 80px; object-fit: none; object-position: 0% 0%;")
      .center
        img(src='./assets/table5-8J.png' height="202px" style="margin: -0px 0px 0 0px;")
      .center
        img(src='./assets/table5-8K.png' height="179px" style="margin: -0px 0px 0 0px;")
      .center
        img(src='./assets/table5-8L.png' height="130px" style="margin: -0px 0px 0 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Integrability
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") Two important considerations can be made regarding the integrability:<br>+ The interfaciability, <br>+ The output power requirement. 
      p(style="padding: 1px; margin: 30px 0 0px 0px; line-height: 1.5em;") The interfaciability refers to causality considerations, whereas output power requirement refers to the ability to produce the power that can be usable at the output side.
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") Causality is the relationship between the signal at the input side and the signal at the receiving unit when they are interconnected at the interface.
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") If this is not the case, the integration cannot possibly happen.
      p(style="padding: 1px; margin: 30px 0 0px 0px; line-height: 1.5em;") The other consideration of integrability is the magnitude of energy or power attainable at the output port for a given input signal level.
      p(style="padding: 1px; margin: 10px 0 0px 0px; line-height: 1.5em;") If the output magnitude is very small, the output signal may be affected by noise excitation, or require a very large input signal to attain a relatively large output signal.
     
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Signal Flow
      .center
        img(src='./assets/fig5-16.png' height="400px" style="margin: -0px 0px 0 0px;")
     
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -0px;").center  Signal Flow
      .center
        img(src='./assets/fig5-17.png' height="550px" style="margin: -0px 0px 0 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Integration-Generated Functionalities
      h6(style="margin-top: -0px;").center Various configurations to generate a functionality
      .center
        img(src='./assets/fig5-18.png' height="450px" style="margin: -0px 0px 0 0px;")     

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Integration-Generated Functionalities
      h6(style="margin-top: -30px;").center Functional modules for a pneumatic pressure control system
      .center
        img(src='./assets/fig5-19.png' height="600px" style="margin: 0px 0px 0 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -0px;").center Integration-Generated Functionalities
      h6(style="margin-top: -30px;").center Functional modules for a diffraction grating sensor
      .center
        img(src='./assets/fig5-20.png' height="600px" style="margin: 0px 0px 0 0;")

    
      
    
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
    description: 'Optomechatronic Integration',
    path: 'optomechatronics-optomechartonic-integration/OptomechatronicIntegration'
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
      theme: 'Optomechatronic integration'
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
