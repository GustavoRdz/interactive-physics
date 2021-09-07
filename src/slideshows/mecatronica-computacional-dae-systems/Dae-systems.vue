<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false')
      .center.frontpage
        h2 Mecatronica Computacional
        //- img(src='./assets/U.svg' style="height: 100px;")
        h4 Systems of Differential-Algebraic Equations
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')

    slide(:steps=1, enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Temas</sup>
      h6(style="margin-top: -20px;")
        | Systems of Differential-Algebraic Equations
      .center
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Introduction to DAE systems</b><br>DAE index tests, DAE index reduction 
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Hybrid Systems</b><br>General structure of a hybrid system, Hybrid phenomena, Net-state models
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Linear System Models</b><br>Local linearization of nonlinear state space models, Local linearization of nonlinear DAE systems, systems: transfer function, frequency response
        //- eg-transition(enter='bounceInRight' leave='bounceOutRight')
        //-   p(v-if="step >= 1")
        //-     <b>Experimental Determination of the Frequency Response</b><br>General considerations, Methodological approach, Frequency responses measurement via noise excitation

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h4(style="margin: -20px 0 0 0; ").center Introduction to DAE systems
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">DAE systems.</b> In the course of modeling the dynamics of mechatronic systems, systems of differential equations appear which are subject to algebraic constraints.
      p(style="line-height: 1.7em;") Multi-port modeling using KIRCHHOFF networks naturally leads to this form of model, as does the application of the EULER-LAGRANGE equations of the first kind given holonomic and nonholonomic constraints
      //- p(style="line-height: 1.7em;") The physical modeling of mechatronic systems is predominantly characterized by the multidisciplinary character of the different component systems. 
      p(style="line-height: 1.7em;") Such systems of equations are called differential-algebraic equations (DAEs). The numeric solution of such models requires the application of special methods.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h4(style="margin-top: -30px;").center 
      p(style="line-height: 1.7em; margin-top: -50px;") <b style="font-size: 1.5em;">Representations</b>
      .center
        img(src='./assets/cap2/eq2_45.png' height="300px")
        img(src='./assets/cap2/eq2_46.png' height="190px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center Index of a DAE system 
      p(style="line-height: 1.7em; margin-top: -20px;") <b style="font-size: 1.5em;">Difficulty of solving a DAE</b> The classification of DAE systems commonly takes place using a special measure, called the index i of the DAE system. 
      p(style="line-height: 1.7em; margin-top: 0px;") In a certain manner, this measure describes the difficulty of solving the DAE system. 
      p(style="line-height: 1.7em; margin-top: 0px;") A system of ordinary differential equations has index  <span class="mth"><i>i</i> = 0</span> , DAE systems have  <span class="mth"><i>i</i> > 0 </span> . A DAE system is called high index if  <span class="mth"><i>i</i> > 2</span>.
      p(style="line-height: 1.7em; margin-top: 0px;") <b>Differential index:</b> The differential index is the minimum number of differentiations required for the equations of a DAE system to arrive at a system of explicit ordinary differential equations.
      


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5(style="margin-top: -0px;").center DAE index tests
      p(style="line-height: 1.7em; margin-top: -20px;") <b style="font-size: 1.5em;">Determination of the differential index</b>. The minimal number of differentiations <span class="mth"><i>d/dt</i></span> required so that a system of explicit ordinary differential equations ensues.     
      .center
        img(src='./assets/cap2/eq2_47.png' height="150px")
      p <span class="mth"><b>Index-1</b></span> condition
      .center
        img(src='./assets/cap2/eq2_48.png' height="150px" style="margin-top: -40px;")
      p(style="line-height: 1.7em; margin-top: -10px;") then the algebraic constraint can be written as a system of first-order differential equations
      .center
        img(src='./assets/cap2/eq2_49.png' height="70px" style="margin-top: -40px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5(style="margin-top: -30px;").center Example: RC network
      p(style="line-height: 1.7em; margin-top: -20px;") <b style="font-size: 1.5em;">System configuration.</b> Consider an unloaded RC network, with an ideal (lossless) voltage source <span class="mth"><i>u<sub>S</sub></i> (<i>t</i>)</span> and constant components <span class="mth"><i>R</i>,<i>C</i></span> .
      .center
        img(src='./assets/cap2/fig2_52.png' height="150px")
      p Modeling as a KIRCHHOFF network gives the mathematical model
      .center
        img(src='./assets/cap2/eq2_50.png' height="120px")
      p and, along with the definitional relations
      .center
        img(src='./assets/cap2/eq2_51.png' height="50px")      

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h4.center(style="margin-top: -10px;") 
      p(style="line-height: 1.7em; margin-top: -20px;") this gives the DAE system in semi-explicit standard form:
      .center
          img(src='./assets/cap2/eq2_52.png' height="120px")
      p The index-1 condition
      .center
          img(src='./assets/cap2/eq2_53.png' height="150px")
      p holds for all <span class="mth"><i>R</i> > 0</span> , so that this represents a DAE system with differential index <span class="mth"><i>i</i> = 1</span>.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : DAE systems</sup>
      h5.center(style="margin-top: -10px;") Index-2 systems
      p(style="line-height: 1.7em; margin-top: -20px;")
      .center
          img(src='./assets/cap2/eq2_54.png' height="70px")
      .center
          img(src='./assets/cap2/eq2_55.png' height="90px")
      p The index-2 condition
      .center
          img(src='./assets/cap2/eq2_56.png' height="200px")
      p(style="line-height: 1.7em;") then the algebraic constraint can again be written as a system of first-order differential equations:  <span class="mth"><b>z&#x0307;</b> = <b>z&#x0307;</b> (<b>x</b>, <b>z</b>, <b>u</b>)</span>
     

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: -10px;") Example: Linear index-2 system.
      p(style="line-height: 1.7em; margin-top: -20px;") Determine the differential index of the following DAE system (<span class="mth"><i>&straightphi;</i>(<i>t</i>)</span> is a given function of time):
      .center
          img(src='./assets/cap2/eq2_57.png' height="110px")
      .center
          img(src='./assets/cap2/eq2_58.png' height="130px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: -10px;") Index-3 systems
      p(style="line-height: 1.7em; margin-top: -20px;") <b style="font-size: 1.5em;">Negative index test</b> If former test does not hold, then the DAE system possesses an index <span class="mth"><i>i</i> > 2</span> . 
      p In most cases, this means it is an index-3 system.
      p This should be considered a very difficult problem, as will be elucidated in the following typical example.
      p <b>Example:</b> Rigidly-coupled two-mass system.
      .center
        img(src='./assets/cap2/fig2_59.png' height="150px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h4.center(style="margin-top: -10px;")
      p(style="line-height: 1.7em; margin-top: -20px;") <b style="font-size: 1.1em;">System configuration.</b> Let two masses be coupled via a rigid connection.
      .center
        img(src='./assets/cap2/fig2_59.png' height="100px")
      p(style="line-height: 1.7em; margin-top: -0px;") Find the equations of motion and the constraining force in the connecting rod, as well as the classification of the resulting DAE system.
      p(style="line-height: 1.7em; margin-top: 0px;") <b>Model.</b> Using LAGRANGian equations of the first kind gives the equations of motion
      .center
        img(src='./assets/cap2/eq2_59.png' height="80px")
      p and the holonomic constraint (rigid coupling)
      .center
        img(src='./assets/cap2/eq2_60.png' height="50px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : DAE systems</sup>
      h4.center(style="margin-top: -10px;")
      p(style="line-height: 1.5em; margin-top: -0px;") Using the definitions <br><span class="mth"><i>x</i><sub>1</sub> := <i>y</i><sub>1</sub>,<br> <i>x</i><sub>2</sub> := <i>y&#x0307;</i><sub>1</sub>,<br> <i>x</i><sub>3</sub> := <i>y</i><sub>2</sub>,<br> <i>x</i><sub>4</sub> := <i>y&#x0307;</i><sub>2</sub>, <br><i>u</i> := <i>F</i>, <br><i>z</i> := <i>F</i><sub><i>S</i></sub></span><br> gives the equivalent DAE system in semi-explicit form:
      .center
        img(src='./assets/cap2/eq2_61.png' height="250px")
      .center
        img(src='./assets/cap2/eq2_62.png' height="50px")
      p Note: <span class="mth"><i>m</i> = 1</span> , i.e. there is one algebraic variable and one algebraic equation.   


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : DAE systems</sup>
      h4.center(style="margin-top: -20px;")
      p(style="line-height: 1.6em;") <b>Index test.</b>
      .center
        img(src='./assets/cap2/eq2_63.png' height="250px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : DAE systems</sup>
      h4.center(style="margin-top: -20px;")
      p(style="line-height: 1.7em;") <b>Index determination.</b> What is the index of the DAE system?
      p(style="line-height: 1.7em;") Solution: Applying the definition of the differential index, the minimal number of differentiations d/dt of 
      .center
        img(src='./assets/cap2/eq2_61.png' height="200px")
      p which—given 
      .center
        img(src='./assets/cap2/eq2_62.png' height="50px")
      p result in a system of explicit ordinary differential equations can be found.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h4.center(style="margin-top: -20px;")
      .center
        img(src='./assets/cap2/eq2_64.png' height="500px")
      p(style="margin-top: -0px;") &rightarrow; Index <span class="mth"><i>i</i>= 3</span> since the original algebraic condition had to be differentiated three times in order to arrive at an ODE in the algebraic variable <span class="mth"><i>z</i></span> .
      p This state of affairs applies in general for mechanical systems with rigid coupling.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : DAE systems</sup>
      h5.center(style="margin-top: -0px;") DAE index reduction
      p(style="line-height: 1.7em;") <b>Goal: </b> Solution of a DAE system via explicit numerical integration (an ordinary differential equation (ODE) solver, e.g. RUNGE- KUTTA).
      p(style="line-height: 1.7em;") <b>Solution:</b> Using index reduction, the DAE system is re-formed into a system of ordinary differential equations, i.e. the algebraic variables also become defined by a system of differential equations.
      p(style="line-height: 1.7em;") One fundamental hurdle in the process is the determination of consistent initial values  <span class="mth"><b>x</b>(0), <b>z</b>(0)</span> for the state and algebraic variables.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : DAE systems</sup>
      h4.center(style="margin-top: -20px;")
      p(style="line-height: 1.7em;") <b> Index reduction by a factor k</b> 
      ul 
        li(style="line-height: 1.7em;") differentiate the algebraic equations <span class="mth"><i>k</i></span> times: <span class="mth"><i>d<sup>k</sup></i>( <b>g</b>(<b>x</b>,<b>z</b>,<i>t</i>))/<i>dt<sup>k</sup></i>=0</span>, i.e. since <span class="mth"><b>g</b> : &#x211d;<sup><i>n</i></sup>&times;&#x211d;<sup><i>m</i></sup>&times;&#x211d;&rightarrow;&#x211d;<sup><i>m</i></sup></span>, there are <span class="mth"><i>m</i></span> new differential equations
        li(style="line-height: 1.7em;") <span class="mth"><i>k</i></span> statements of consistent <i>initial values</i> from the nonlinear system of equations:
          .center
            img(src='./assets/cap2/eq2_69.png' height="150px")
        li(style="line-height: 1.7em;") <span class="mth"><b>x</b>(0), <b>z</b>(0)</span> must satisfy the above system of equations, i.e. they generally can not be chosen independently of one another.
      p(style="line-height: 1.7em;") <b>Further index reduction procedures</b> Index reduction of DAE systems is the key to successfully employing object-oriented physical models. <br>Only DAE systems with sufficiently low index can be solved in a numerically stable, usable form.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h6.center(style="margin-top: -20px;") Example: Index reduction for a rigidly-coupled two-mass system.
      p(style="line-height: 1.7em;") <b>Algebraic conditions: consistent initial conditions</b> The calculations in the last Example lead to the DAE system. <br>Derived from the thrice-differentiated algebraic constraints, the algebraic conditions below hold for the entire trajectory and thus for <span class="mth"><i>t</i> = 0</span> , from which follow consistent initial conditions:
      .center
        img(src='./assets/cap2/eq2_70.png' height="130px")
      .center
        img(src='./assets/cap2/fig2_60.png' height="350px")      

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: -0px;") Hybrid Systems
      p(style="line-height: 1.7em; margin-top: -10px;") <b>General structure of a hybrid system</b>
      p(style="line-height: 1.7em; margin-top: -10px;") <b> Hybrid systems: terminology.</b> In many technical systems, especially if the boundaries of the system are sufficiently broadly defined or if the system dynamics are modeled with sufficient accuracy, the simultaneous appearance of continuous-time and discrete-event phenomena will be observed. Such a system model is then termed a hybrid dynamic system, referred to concisely as a “hybrid system”.
      p(style="line-height: 1.7em; margin-top: -10px;") For example, in mechatronic systems, a hybrid description is called for when, during the course of operation, the governing mathematical model changes due to a deterministic external influence (e.g. user intervention) or state-dependent conditions (e.g. mechanical contact effects, state-depend- ent parameter changes). <br>Such hybrid dynamics resulting from continuous-time and discrete-event changes —and particularly their resulting interactions— must be appropriately represented in a combined system model.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: -10px;")
      p(style="line-height: 1.7em;") <b>Hybrid system structure.</b> The general structure of a hybrid discrete-event, continuous-time system (or hybrid system) is represented as. 
      .center
        img(src='./assets/cap2/fig2_61.png' height="300px")
      p A hybrid system comprises the following components and system variables:
      .center
        img(src='./assets/cap2/list2_1.png' height="180px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: -10px;") Hybrid phenomena
      p(style="line-height: 1.7em;") <b>Hybrid system</b> Consider as given the following description of a continuous subsystem
      .center
        img(src='./assets/cap2/eq2_71.png' height="180px")
      p with discontinuity hypersurface
      .center
        img(src='./assets/cap2/eq2_72.png' height="50px")
      

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: -10px;")
      p(style="line-height: 1.7em;")  <b>Discontinuous vector field.</b> One characteristic of hybrid systems is the existence of discontinuities in the vector field of derivatives of the state variables. <br>In such cases, the smoothness of the vector field is violated, i.e. there exist states <span class="mth"><i>x<sub>s</sub></i></span> , for which no LIPSCHITZ condition of the type
      .center
        img(src='./assets/cap2/eq2_73.png' height="120px")
      //- .center
      //-   img(src='./assets/cap2/eq2_24.png' height="60px")
      p exists (holds similarly for <span class="mth"><b>u</b></span> if its components <span class="mth"><i>u<sub>j</sub></i>(t)</span> exhibit step-wise changes)


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: -10px;") 
      p(style="line-height: 1.7em; margin-top: -10px;") <b>Sets of states</b> The sets <span class="mth"><i>M</i><sub>1</sub>, <i>M</i><sub>2</sub></span> describe regions in the <span class="mth"><i>n</i></span>-dimensional state space <span class="mth">&#x211d;<sup><i>n</i></sup></span> in which the corresponding vector fields <span class="mth"><b>f</b><sup>1</sup>(<b>x</b>, <b>u</b>, <i>t</i>), <b>f</b><sup>2</sup>(<b>x</b>, <b>u</b>, <i>t</i>)</span> define the dynamics of the continuous subsystem. <br>The boundary between <span class="mth"><i>M</i><sub>1</sub></span> and <span class="mth"><i>M</i><sub>2</sub></span> is described by the discontinuity hypersurface.
      .center
        img(src='./assets/cap2/fig2_62.png' height="300px" style="margin-top: -30px;")
      p Hybrid dynamics of systems can be systematically described by the following four hybrid phenomena. <br>In concrete cases, an arbitrary combination of these phenomena can be present.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: -10px;")
      p(style="line-height: 1.5em;") <b>Autonomous switching</b> Entry of the trajectory of the continuous system into a particular subset of the continuous state space which induces a change in the discrete state, which in turn modifies the continuous system dynamics.
      p(style="line-height: 1.5em;") <b>Controlled switching</b> An external intervention triggers a change in the discrete state, which in turn modifies the continuous system dynamics.
      p(style="line-height: 1.5em;") <b> Autonomous state jumps</b>  Entry of the trajectory of the continuous system into a particular subset of the continuous state space which induces a change in the discrete state, which directly triggers a jump in the continuous state.
      p(style="line-height: 1.5em;") <b>Controlled state jumps</b> An external intervention triggers a change in the discrete state, which in turn directly triggers a jump in the continuous state.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: -10px;") Net-state models
      p(style="line-height: 1.5em; margin-top: -20px;") <b>Model structure.</b> The general structure of a net-state model (NSM)
      .center
        img(src='./assets/cap2/fig2_63.png' height="400px")
      p Here, the discrete-event (DE) subsystem is realized as an interpreted PETRI net (IPN) (with inputs and outputs). <br>When combined with a continuity condition on states in the continuous-time subsystem, all above-mentioned hybrid phenomena can be modeled using a net-state model.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: -20px;") Properties of net-state models
      ul
        li(style="line-height: 1.7em;") <b>Discrete-event subsystem.</b> By using interpreted PETRI nets (IPNs), a great diversity of models is achievable, as both purely sequential and parallel processes can be modeled (state machines vs. synchronization graphs); interpre- tation is conventional: switching conditions at the transitions rep- resent inputs to the DE subsystem, and output places represent outputs of the DE subsystem.
        li <b>Hybrid model state </b>
          img(src='./assets/cap2/eq2_74.png' height="30px" style="margin-top:0px;")
        li <b>Discrete model state</b> Describes the current marking vector of the interpreted PETRI net (IPN token distribution).
        li <b>Dynamics of the discrete model variables <span class="mth">x<sub>D</sub>(t), u<sub>D</sub>(t)</span></b> Piecewise-constant, until the occurrence of a switching event at time <span class="mth">t<sup>-</sup></span>.
        li <b>D/C interface, injection</b> Dynamics of the continuous model variable <span class="mth">v<sub>C</sub>(t)</span>; piecewise-constant, until the occurrence of a switching event at time <span class="mth">t<sup>-</sup></span>.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: 0px;") Properties of net-state models
      ul
        li <b>Firing requirement for transition <span class="mth"><i>j</i></span>.</b> If the transition <span class="mth"><i>j</i></span> is activated according to the marking, and the Boolean switching expression <span class="mth"><i>b<sub>j</sub></i>(<i>t</i>)</span> is true, then transition <span class="mth">j</span> fires immediately; if several parallel transitions are ready to fire, then all fire simultaneously.
        li <b>Reinitialization of the continuous model state <span class="mth">x<sub>C</sub></span></b> Upon an external/autonomous jump in the state, the continuous state vector <span class="mth">x<sub>C</sub>(t+)</span> is updated according to the discontinuity equation.
        li <b>C/D interface, quantization</b> Threshold violation by the continuous model state <span class="mth">x<sub>C</sub></span>. When the continuous state vector <span class="mth">x<sub>C</sub>(t)</span> enters the set <span class="mth"><i>Φ<sub>i</sub></i></span>, the corresponding internal model variable <span class="mth">v<sub>Di</sub>(t)</span> is set to <span class="mth">1</span> (i.e. <span class="mth">v<sub>Di</sub>(t) = 0</span> for <span class="mth">x<sub>C</sub>(t) &NotElement; M<sub>i</sub></span> 

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: 0px;") Example: Single-joint manipulator with collision
      p(style="line-height: 1.7em;") <b>System configuration</b> An elastically suspended single-joint manipulator (massless arm of length <span class="mth"><i>l</i></span> , end effector mass <span class="mth"><i>m</i></span> , spring constant <span class="mth"><i>k</i></span> , motor torque <span class="mth"><i>&tau;</i></span>, equilibrium position at <span class="mth"><i>&theta;</i> = 0</span>) moves horizontally on a level surface with position-dependent, velocity-proportional coefficients of friction <span class="mth"><i>&mu;</i><sub>1</sub></span>, <span class="mth"><i>&mu;</i><sub>2</sub></span>. Along the <span class="mth"><i>x</i></span>-axis shown, collisions with a hard boundary are possible (assuming elastic collisions).
      .center
        img(src='./assets/cap2/fig2_64.png' height="350px")
      p For this system, a net-state model is to be created.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: 0px;")
      p <b>Model creation</b> In this system, two hybrid phenomena appear:
      ul
        li <b>autonomous switching:</b> due to the position-dependent friction <span class="mth"><i>&mu;</i><sub>1</sub></span>, <span class="mth"><i>&mu;</i><sub>2</sub></span>, the vector field of the equations of motion changes when the threshold on the arm angle (state) <span class="mth"><i>&theta;</i> > &alpha;</span> is exceeded,
        li <b>autonomous state jump:</b> in the case of contact at <span class="mth"><i>&theta;</i> = 90º</span> under the assumption of an elastic collision, the state <span class="mth"><i>&theta;</i></span> remains continuous; however, there is a jump in the state <span class="mth"><i>&theta;&#x0307;</i></span>: the angular velocity changes sign and its magnitude decreases according to the coefficient of restitution <span class="mth"><i>&rho;</i></span>, <span class="mth">0 &#x2264;<i> &rho; </i>&#x2264; 1</span>.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: 0px;") 
      p(style="line-height: 1.7em;") In the state plane <span class="mth"><i>&theta;</i></span>, <span class="mth"><i>&theta;&#x0307;</i> </span>, three disjoint sets of states <span class="mth"><i>&#x2133;</i><sub>1</sub></span>, <span class="mth"><i>&#x2133;</i><sub>2</sub></span>, <span class="mth"><i>&#x2133;</i><sub>3</sub></span> can be defined. These sets are in turn assigned (binary) variables in the C/D interface.
      .center
        img(src='./assets/cap2/eq2_75.png' height="170px")
      p The alternation of the trajectory <span class="mth"><b>x</b><sub></sub>(t)</span> between the subsets can be described via a simple, structurally constrained PETRI net of the state machine type. The discrete states <span class="mth"><i>x<sub>Di</sub></i>&Element;&#123;0,1&#125;, <i>i</i>= 1, 2, 3</span> describe the current subset occupied by <span class="mth">x<sub>C</sub>(t)</span>.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: -50px;")
      .center
        img(src='./assets/cap2/fig2_64.png' height="200px")
        img(src='./assets/cap2/fig2_65.png' height="350px")
      p In the D/C interface, the discrete states are used to generate continuous-time switching variables <span class="mth"><i>v<sub>Ci</sub></i>(<i>t</i>)</span>, for which
      .center
        img(src='./assets/cap2/eq2_76.png' height="100px")
      p holds. Using the switching variables <span class="mth"><i>v<sub>Ci</sub></i>(<i>t</i>)</span>, the vector field in the state model can then be modified in a timely manner or the state discontinuity can be modeled.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: 0px;") Linear System Models
      p(style="line-height: 1.7em;") <b>Linear dynamic analysis</b> As shown in the previous sections, the class of mechatronic systems with lumped elements considered can be described in a general form by a system of nonlinear differential-algebraic equations. <br>The methods used throughout for dynamic analysis and controller design are, however, based on linear time invariant (LTI) models. <br>This section thus presents a primer on local linearization (or JACOBI linearization) of nonlinear dynamic systems. This type of linearization is well known in many technical disciplines and is discussed here to complete the methodological toolbox.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: 0px;") 
      p(style="line-height: 1.6em;") <b style="font-size: 1em;"> Local linearization</b> As a precondition for local linearization, the dynamics of the nonlinear system in the neighborhood of certain solutions (trajectories) are examined. <br>Even with a completely known (nonlinear) model, the result is always an approximation of the actual system behavior in the vicinity of a certain trajectory and it is no longer representative if “larger” deviations from the reference solution are considered.
      //- p Results based on such linearized models should thus always be evaluated with all due caution, and the observance of “sufficiently small deviations” should be care- fully verified in every particular case.
      p(style="line-height: 1.6em;")  <b>Exact linearization</b> Attention of the interested reader is directed to one extended form of linearization, which has in the last two decades significantly extended control system theory in particular. <br>In exact linearization, input-output linearization, or feedback linearization a nonlinear transformation (e.g. feedback) is inserted in the system to generate a “linear” system (i.e. the system is not simply “linearized”, but in fact “linear”) to which linear control laws can then be applied. In such cases, then, given exact knowledge of the original nonlinear system, an exactly linear system is generated. 

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: 0px;") Local linearization of nonlinear state space models
      p(style="line-height: 1.7em;") <b>System description</b> Consider the following nonlinear state space model as a special case of a DAE system:
      .center
        img(src='./assets/cap2/eq2_77.png' height="150px")
      p For a given input u*(t) and the resulting solution x*(t) of the differential equation, it holds by definition that
      .center
        img(src='./assets/cap2/eq2_78.png' height="150px")


    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: 0px;")
      p(style="line-height: 1.7em;") Now, considering (arbitrary) deviations x(t) = x*(t) + &Delta;x(t) from the reference solution resulting from input deviations u(t) = u*(t) + &Delta;u(t) , it then follows from Eqs. (2.60), (2.61) that
      .center
        img(src='./assets/cap2/eq2_79.png' height="100px")
      p where the substitution y = y* +&Delta;y was applied to the output vector.
      p <b>Linear approximation.</b> Replacing the vector fields <b>f</b> and <b>g</b> in the above Eq. by their linear approximations (Taylor expansion) and considering small deviations &Delta;x, &Delta;u , higher-order terms can be neglected, so that
      .center
        img(src='./assets/cap2/eq2_80.png' height="100px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: -50px;") 
      p(style="line-height: 1.7em;") where
      .center
        img(src='./assets/cap2/eq2_81.png' height="120px")
      p Then the standard representation of a linear state space model
      .center
        img(src='./assets/cap2/eq2_82.png' height="70px")
      p The system matrices are the well-known JACOBIAN matrices of the vector fields f and g,
      .center
        img(src='./assets/cap2/eq2_83.png' height="180px")
      p Thus, the state space system is called the local linearization or JACOBI linearization.



    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: -50px;")
      p(style="line-height: 1.7em;") This predicts that at every time t, the partial derivatives of the respective vector fields should be calculated and subsequently the variables xi, uj should be replaced by the corresponding values xi*(t), uj*(t) from the reference solution. This results in the following two characteristic cases.
      p(style="line-height: 1.7em;") <b>Linearization about an equilibrium</b> For constant inputs u<sub>*</sub>(t) = u<sub>*0</sub> = const., the equilibria x<sub>*0</sub> =const. of the system computed from the algebraic system of equations
      .center
        img(src='./assets/cap2/eq2_84.png' height="50px")
      p(style="line-height: 1.7em;") With the (constant) solutions u<sub>*0</sub>, x<sub>*0</sub>, constant system matrices follow, and thus a linear time-invariant (LTI) state space model
      .center
        img(src='./assets/cap2/eq2_85.png' height="100px")
      p(style="line-height: 1.7em;") The tuple (x<sub>*0</sub>, u<sub>*0</sub>) is also called the operating point of the system so that referred to as a linearization about the operating point (x<sub>*0</sub>, u<sub>*0</sub>).
      

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: 0px;")
      p(style="line-height: 1.7em;") <b>Linearization about a trajectory.</b> For general, non-constant inputs u<sub>*</sub>(t), the time-varying solution trajectory x<sub>*</sub>(t) must also be incorporated into the computation of the system matrices, resulting in time-varying system matrices and, overall, a linear time-varying (LTV) state space system
      .center
        img(src='./assets/cap2/eq2_86.png' height="70px")
      p(style="line-height: 1.7em;")  As usual, the eigenvalues of the system matrix <b>A</b> determine the dynamics and stability of the locally linearized system.     

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: 10px;") Example: Particle motion with viscous friction.
      p(style="line-height: 1.7em;") <b>System configuration</b> Consider a point mass m moving weight lessly in a plane subject to viscous friction (coefficient of friction &mu;) and an applied force <b>F</b> . The current distance r from the point mass to the origin can be measured. Find a linear state space model given a reference trajectory s<sub>*</sub>(t), v<sub>*</sub>(t), F<sub>*</sub>(t).
      .center
        img(src='./assets/cap2/fig2_66.png' height="150px")
      p <b>Model creation</b>
      p(style="margin-top: -10px;") - Equation of motion for the point mass:
      .center
        img(src='./assets/cap2/eq2_87.png' height="80px")
      p(style="margin-top: -10px;") - Measurement equation:
      .center
        img(src='./assets/cap2/eq2_88.png' height="50px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: -20px;")
      p(style="line-height: 1.7em;") - Nonlinear state space model:
      .center
        img(src='./assets/cap2/eq2_89.png' height="400px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: 10px;") 
      p - Linearized state space model (time-varying due to x<sub>i*</sub>(t)):
      .center
        img(src='./assets/cap2/eq2_90.png' height="400px")
      

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : DAE systems</sup>
      h5.center(style="margin-top: 10px;")
      p(style="line-height: 1.7em;") <b>Local linearization of nonlinear DAE systems</b> Consider the semi-explicit time-invariant DAE system
      p
      .center
        img(src='./assets/cap2/eq2_91.png' height="90px")
      .center
        img(src='./assets/cap2/eq2_92.png' height="40px")
      p(style="line-height: 1.7em;") For small deviations &Delta;x, &Delta;z, &Delta;u from a reference solution x*, z*, u* (i.e. x = x* + &Delta;x, z = z* + &Delta;z, u = u* + &Delta;u ) gives the locally linearized DAE system
      .center
        img(src='./assets/cap2/eq2_93.png' height="70px")
      p with system matrices
      .center
        img(src='./assets/cap2/eq2_94.png' height="170px")
      
    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : DAE systems</sup>
      h5.center(style="margin-top: -10px;") LTI systems: transfer function, frequency response
      p(style="line-height: 1.7em;") <b>Frequency domain representation</b> Starting with mathematical models of a mechatronic system in DAE form or state space form a coupled dynamic analysis is particularly clear if undertaken with linearized models in the frequency domain. <br>An important tool for evaluating system dynamics is thus the use of transfer functions of the system elements under consideration. As usual, the linear (LTI) state space model can be used to compute the transfer function via the LAPLACE transform.
      p As an important, representative case, the rest of this section considers the single-input single-output (SISO) LTI system
      .center
        img(src='./assets/cap2/eq2_95.png' height="80px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 10px;") Transfer function
      p(style="line-height: 1.7em;") <b>Procedure</b> By applying the LAPLACE transform to the above LTI system and with straightforward manipulation of the resulting algebraic equations in the complex variable s, the transfer function G(s) is obtained:
      .center
        img(src='./assets/cap2/eq2_96.png' height="70px")
      p(style="line-height: 1.7em; margin-top: -10px;") where U(s) and Y(s) represent the LAPLACE transforms of the input u(t) and the output y(t), respectively
      .center
        img(src='./assets/cap2/eq2_98.png' height="100px")
      p(style="line-height: 1.7em; margin-top: -10px;") The transfer function G(s) is a rational function of the form
      .center
        img(src='./assets/cap2/eq2_97.png' height="200px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: -50px;")
      p(style="line-height: 1.7em;") <b>Frequency response</b>
      p The transfer function G(s) is used to derive the frequency response G(j&omega;) in the usual manner:
      .center
        img(src='./assets/cap2/eq2_100.png' height="50px")
      p The frequency response represents a non-parametric description of the LTI system in the form of the frequency-dependent amplitude response and phase response, and can also be very efficiently determined experimentally.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 10px;") Example: Two-mass oscillator with force excitation
      p <b>System configuration and model creation</b> Any of the methods for physical modeling leads to the following equations of motion for the coupled two-mass system (with assumed negligible damping):
        .center
          img(src='./assets/cap2/fig2_68.png' height="130px")
        .center
          img(src='./assets/cap2/eq2_101.png' height="80px")
      p Using the state definition x<sub>1</sub> := y<sub>1</sub>, x<sub>2</sub>=y<sub>2</sub>, x<sub>3</sub>:= y&#x0307;<sub>1</sub>, x<sub>4</sub>:= y&#x0307;<sub>2</sub> and u = F, the state space model is
        .center
          img(src='./assets/cap2/eq2_102.png' height="200px" style="margin-top: -30px;")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 10px;")
      p Via a LAPLACE transform the transfer function between the excitation force F and the mass displacement y<sub>1</sub>:
        .center
          img(src='./assets/cap2/eq2_103.png' height="200px")
        .center
          img(src='./assets/cap2/fig2_69.png' height="300px")

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : References: {{ slides.length }}</sup>
        h3 References
        ul
          li <b>Mechatronic System Design.</b> <span class="small">Methods, Models, Concepts</span> <br>Author: Klaus Janschek<br> Springer
        p.small Slides created by G. Rodríguez-Morales and spheroidGames, gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com with use of images from the above referenced book

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'DAE systems',
    description: 'Differencial algebraic equation systems',
    path: 'mecatronica-computacional-dae-systems'
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
