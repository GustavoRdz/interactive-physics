<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false')
      .center.frontpage
        h2 Mecatronica Computacional
        //- img(src='./assets/U.svg' style="height: 100px;")
        h4 Paradigmas del modelado en sistemas mecatrónicos
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
        | Modeling Paradigms for Mechatronic Systems
      .center
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Generalized power and energy</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Energy-based modeling: LAGRANGE formalism</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Energy-based modeling: HAMILTON’s equation</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Multi-port modeling: KIRCHHOFF networks</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Multi-port modeling: bond graphs</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Energy / multi-port modeling: port-HAMILTONian systems</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Signal-coupled networks</b>   

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Introduction</sup>
      h4(style="margin: -20px 0 0 0; ").center Introduction
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">Modeling goals.</b>  The physical modeling of mechatronic systems is predominantly characterized by the multidisciplinary character of the different component systems. 
      p Naturally, the goal is a complete abstract model, representing overall system behavior—a domain-independent model.
      p This will be accomplished by transferring and simplifying fundamental physical model equations into linear time-invariant (LTI) models in a frequency-domain representation (transfer functions).
      p Using such models, a series of significant analyses of system behavior can be efficiently worked through using established (commercial) computational tools. However, to deal with more complex high-fidelity models, further modeling must be undertaken.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h4(style="margin-top: -30px;").center Introduction
      p(style="line-height: 1.7em; margin-top: -50px;") <b style="font-size: 1.5em;">Modeling goals.</b> Modeling approaches Starting from the view of a system using lumped system elements and generally valid statements of energy conservation, there are fundamentally two modeling approaches which emerge
      .center
        img(src='./assets/cap2/fig2_21.png' height="500px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center Generalized power and energy
      p(style="line-height: 1.7em; margin-top: -20px;") Modeling paradigms presented here are based on statements of energy conservation. In order to clarify the relationship between these different approaches, domain-independent generalized variables which describe the transfer of energy between component systems are defined.
      p This permits a largely domain-independent, generic, axiomatic foundation for modeling to be established, which is only connected to domain-specific physical laws—the so-called constitutive equations—at very precise points to realize a functional instrument for computation.
      


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5(style="margin-top: -0px;").center
      p(style="line-height: 1.7em; margin-top: -20px;") <b style="font-size: 1.5em;">Definitions.</b> <b>Generalized energy variables.</b> For the modeling of me- chatronic systems, the following generalized energy variables are defined:
      ul
        li Generalized potential, <b><i>effort e</i></b>
        li Generalized velocity, <b><i>flow f</i></b>
        li Generalized <b><i>momentum</i></b>
        .center
          img(src='./assets/cap2/eq2_1.png' height="80px")
        li Generalized coordinate, <b><i>displacement</i></b>
        .center
          img(src='./assets/cap2/eq2_2.png' height="80px")
        li Generalized power
        .center
          img(src='./assets/cap2/eq2_3.png' height="70px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5(style="margin-top: -30px;").center 
      p(style="line-height: 1.7em; margin-top: -20px;") <b style="font-size: 1.5em;">Definitions.</b> 
      ul
        li Generalized <b><i>energy</i></b>
        .center
          img(src='./assets/cap2/eq2_4.png' height="50px")
          img(src='./assets/cap2/eq2_5.png' height="50px")
        li Generalized <b><i>potential energy</i></b> 
        .center
          img(src='./assets/cap2/eq2_6.png' height="70px")
        li Generalized potential co-energy
        .center
          img(src='./assets/cap2/eq2_7.png' height="70px")
        li Generalized <b><i>kinetic energy</i></b>
        .center
          img(src='./assets/cap2/eq2_8.png' height="70px")
        li Generalized kinetic co-energy
        .center
          img(src='./assets/cap2/eq2_9.png' height="70px")
      

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h4.center(style="margin-top: -10px;") 
      p(style="line-height: 1.7em; margin-top: -20px;") <b style="font-size: 1.5em;">Definitions.</b> 
      p(style="line-height: 1.5em;") A summary representation of the relationships
      .center
          img(src='./assets/cap2/fig2_22.png' height="350px")
      .center
          img(src='./assets/cap2/fig2_23.png' height="250px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Modeling Paradigms for Mechatronic Systems</sup>
      h4.center(style="margin-top: -10px;")
      p(style="line-height: 1.7em; margin-top: -20px;") <b style="font-size: 1.5em;">Definitions.</b> 
      p(style="line-height: 1.7em;") <b>Conjugate variables.</b> The tuples <span class="mth">(<i>p</i>, <i>q</i>)</span> and <span class="mth">(<i>e</i>, <i>f</i>)</span> are respectively termed conjugate energy variables and conjugate power variables.
      p <b>Constitutive equations.</b> Among the equations involving the generalized energy variables, the so-called constitutive equations <span class="mth"><i>e</i> = <i>e</i>(<i>q</i>)</span> and its inverse relation <span class="mth"><i>q</i> = <i>q</i>(<i>e</i>)</span> , as well as <span class="mth"><i>q&#x0307;</i>= <i>q&#x0307;</i>(<i>p</i>)</span>  and <span class="mth"><i>p&#x0307;</i> = <i>p&#x0307;</i>(<i>q</i>)</span> , represent the domain-specific physical laws, which relate energy variables to one another.
      p For the majority of applications, the generalized displacement coordinates <span class="mth"><i>q</i></span> and <span class="mth"><i>q&#x0307;</i></span> along with the constitutive equations <span class="mth"><i>e</i> = <i>e</i>(<i>q</i>)</span> and <span class="mth"><i>p</i> = <i>p</i>(<i>q&#x0307;</i>)</span> offer a convenient starting point for model creation.
     

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h4.center(style="margin-top: -10px;")
      p(style="line-height: 1.7em; margin-top: -20px;") <b style="font-size: 1.5em;">Definitions.</b> 
      p <b>Energy and co-energy.</b> The energy and co-energy variables are only equal in the case where there is a linear relationship between the energy and power variables
      .center
          img(src='./assets/cap2/eq2_10.png' height="70px")
      .center
          img(src='./assets/cap2/fig2_23.png' height="150px")
      p The energy and co-energy are generally linked via a so-called LEGENDRE transformation
      .center
          img(src='./assets/cap2/eq2_11.png' height="100px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h4.center(style="margin-top: -10px;")
      p(style="line-height: 1.7em; margin-top: -20px;") <b style="font-size: 1.5em;">Definitions.</b> 
      p(style="line-height: 1.8em;") <b>NEWTONian mechanics.</b> In the context of NEWTONian mechanics with lumped parameters, there exists a linear relationship between momentum and velocity, i.e. momentum <span class="mth"><i>p</i> = <i>M</i>(<i>x</i>)·<i>v</i></span>, and angular momentum <span class="mth"><i>h</i> = <i>I</i>(<i>θ</i>)·ω</span>. Thus the kinetic energy <span class="mth"><i>T</i></span> and co-energy <span class="mth"><i>T*</i></span> are equal.
      .center
        img(src='./assets/cap2/fig2_24.png' height="150px")
      p It is only with relativistic effects that kinetic energy <span class="mth"><i>T</i></span> and co-energy <span class="mth"><i>T*</i></span> begin to differ due to
      .center
        img(src='./assets/cap2/eq2_12.png' height="80px")
      p For this course, however, relativistic effects do not play a role.  

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h4.center(style="margin-top: -10px;")
      p(style="line-height: 1.7em; margin-top: -20px;") <b style="font-size: 1.5em;">Definitions.</b> 
      p There is however one more important aspect to consider. Typically when working in the context of NEWTONian mechanics, the kinetic co- energy is employed
      .center
        img(src='./assets/cap2/eq2_13.png' height="80px")
      p Due to the equality of <span class="mth"><i>T</i></span> and <span class="mth"><i>T*</i></span> , this is not an issue in most applications (as long as NEWTONian conditions are maintained!). Care should however be taken when applying the LAGRANGE formalism, as there the distinction between the energy and co-energy functions must be carefully maintained.
      


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Modeling Paradigms for Mechatronic Systems</sup>
      h4.center(style="margin-top: -10px;")
      p(style="line-height: 1.5em; margin-top: -70px;") <b>Domain-specific relations.</b> Power and energy variables for selected physical domains and linear energy storage elements.
      .center
        img(src='./assets/cap2/table2_2.png' height="520px")
        img(src='./assets/cap2/fig2_25.png' height="200px")       


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Modeling Paradigms for Mechatronic Systems</sup>
      h4.center(style="margin-top: -20px;")
      p(style="line-height: 1.6em;") <b>Mechanical power variable in KIRCHHOFF networks.</b> Interestingly, in the domain of KIRCHHOFF network models for mechanical systems, slightly different definitions are often used for the flow and effort variables.
      p(style="line-height: 1.6em;") In this formulation, the conjugate power variables are switched <span class="mth"><i>e</i></span> &#8644; <span class="mth"><i>f</i></span> while the remainder of the definitional relations are retained.
      .center
        img(src='./assets/cap2/table2_3.png' height="400px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Modeling Paradigms for Mechatronic Systems</sup>
      h4.center(style="margin-top: -20px;") Energy-based modeling
      p(style="line-height: 1.7em;") <b>LAGRANGE formalism.</b>
      p(style="line-height: 1.7em;") <b>Background.</b> An exceedingly elegant method for domain-independent modeling is offered by the LAGRANGE formalism, based on the calculus of variations. <br>Using the generalized energy and power variables, not only can the equations of motion for mechanical systems be derived, but in a very natural way, the dynamic equations for heterogeneous physical systems—in particular for mechatronic systems—can also be obtained.   

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h4.center(style="margin-top: -20px;")
      p(style="margin-top: -50px;") <b>Generalized coordinates.</b> One important modeling decision is the choice of domain-specific (physical) generalized coordinates.
      p Candidates include two of the energy variables: the generalized displacement <span class="mth"><i>q</i></span> or the generalized momentum <span class="mth"><i>p</i></span>.
      p note the differing definitions of the energy functions depending on the choice of variables (energy vs. co-energy).
      p In the mechanical systems, the mechanical displacement <span class="mth"><i>x</i></span> is commonly chosen as the generalized coordinate, so that the usual kinetic mechanical co-energy <span class="mth"><i>T*</i>(<i>x</i>, <i>x&#x0307;</i>)</span> and potential mechanical energy <span class="mth"><i>V</i>(<i>x</i>)</span> are employed.
      p In the case of electrical systems, there is a choice of whether to choose the electrical displacement (charge) <span class="mth"><i>q</i></span> or the electrical momentum (flux linkage) <span class="mth"><i>ψ</i></span> as the generalized coordinate.      

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Modeling Paradigms for Mechatronic Systems</sup>
      h4.center(style="margin-top: -20px;")
      p(style="line-height: 1.7em;") <b>Configuration space: redundant coordinates.</b> If every energy storage element <span class="mth"><i>ν = 1, ..., N</i></span> is assigned a generalized coordinate <span class="mth"><i>q</i></span>, the result is a vector of generalized coordinates
      .center
        img(src='./assets/cap2/eq2_14.png' height="80px")
      p defining the configuration space of the system under consideration. Since these coordinates are generally not independent due to configuration con- straints, they are termed redundant coordinates.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Modeling Paradigms for Mechatronic Systems</sup>
      h4.center(style="margin-top: -20px;")
      p(style="line-height: 1.7em;") <b> Holonomic constraints: minimal coordinates.</b> In general, energy storage elements are coupled via constraints. These manifest themselves as dependencies between the generalized coordinates. These are termed holonomic constraints. <br>With NC such holonomic constraints
      .center
        img(src='./assets/cap2/eq2_15.png' height="80px")
      p elimination of NC components of the redundant coordinates is possible resulting in a set of independent coordinates, the minimal coordinates
      .center
        img(src='./assets/cap2/eq2_16.png' height="80px")
      p where <span class="mth"><i>N<sub>DOF</sub></i></span> is termed the number of degrees of freedom of the system.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: -20px;")
      p(style="line-height: 1.7em;") <b>Nonholonomic constraints.</b> If the configuration constraints between redun- dant generalized coordinates cannot be described via algebraic equations, they are termed nonholonomic constraints. <br>Examples include non-integrable differential equations (e.g. a rolling wheel) or inequality constraints.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: -20px;")
      p(style="line-height: 1.7em;") <b>Differential constraints: PFAFFian form.</b> The manipulation of holonomic and nonholonomic constraints is simplified by examining their differential form, i.e. the relationship between derivatives of the generalized coordinates. This results in first-order differential equations in a particular form—the PFAFFian form:
      .center
        img(src='./assets/cap2/eq2_17.png' height="80px")
      p If a differential constraint has been derived from a holonomic constraint, it then holds that
      .center
        img(src='./assets/cap2/eq2_18.png' height="80px")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: -10px;")
      p(style="line-height: 1.7em;") <b>EULER-LAGRANGE equations of the second kind.</b> Under the condition that the chosen minimal coordinates are not only independent, but also unconstrained, component-wise construction of the kinetic co-energy <span class="mth"><i>T*</i>(<i>q, q&#x0307;</i>)</span> and the potential energy <span class="mth"><i>V</i>(<i>q</i>)</span> enables construction of EULER-LAGRANGE equations of the second kind:
      .center
        img(src='./assets/cap2/eq2_19.png' height="80px")
      p with the LAGRANGian
      .center
        img(src='./assets/cap2/eq2_20.png' height="80px")
      p(style="line-height: 1.7em;") The LAGRANGian contains all conservative dynamic components of the modeled heterogeneous physical (mechatronic) system. <br>Domain-specific generalized forcing terms <span class="mth"><i>f<sub>i</sub></i></span> and dissipative forces <span class="mth"><i>D<sub>i</sub></i></span> can be accounted within the EULER-LAGRANGE equations. <br> This leads to a set of nonlinear second-order differential equations in terms of the generalized minimal coordinates

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: -10px;")
      p(style="line-height: 1.7em;") <b>EULER-LAGRANGE equations of the first kind.</b> In the case of non-holonomic constraints between redundant generalized coordinates or when constraint forces are called upon to maintain system constraints, the EULER-LAGRANGE equations can be extended with LAGRANGE multipliers <span class="mth"><i>j</i></span> to form EULER-LAGRANGE equations of the first kind
      .center
        img(src='./assets/cap2/eq2_22.png' height="80px")
      p with differential-algebraic constraints (holonomic and/or nonholonomic, the PFAFFian form).
      p The second-order differential system of equations and the first-order differential system of equations give a total of <span class="mth">(<i>N</i> + <i>N<sub>C</sub></i>)</span> equations for computation of the <span class="mth">(<i>N</i> + <i>N<sub>C</sub></i>)</span> unknowns <span class="mth"><i>q&#x303;<sub>1</sub></i>, ..., <i>q&#x303;<sub>N</sub></i></span> and <span class="mth"><i>λ<sub>1</sub></i>, ..., <i>λ<sub>N</sub></i></span>.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: -10px;")
      p(style="line-height: 1.7em;")  <b>EULER-LAGRANGE equations of the first kind.</b> <br>Here, the LAGRANGE multipliers <span class="mth"><i>λ<sub>j</sub></i>(<i>t</i>)</span>  represent the constraint forces required to maintain the constraints equations. <br>To this extent, the EULER-LAGRANGE equations of the first kind also com- mend themselves in the case of holonomic constraints if the constraint forces are of interest.
      p(style="line-height: 1.7em;") In the general case, using the state definition <span class="mth"><i>x<sub>j</sub></i> := <i>q&#x303;<sub>i</sub></i>, <i>x<sub>j+1</sub></i> := <i>q&#x303;&#x0307;<sub>i</sub></i></span> or the algebraic variables <span class="mth"><i>z<sub>j</sub></i> := <i>λ<sub>j</sub></i></span> results in a system of differential-algebraic equations (DAE) in the form
      .center
        img(src='./assets/cap2/eq2_23.png' height="60px")
      .center
        img(src='./assets/cap2/eq2_24.png' height="60px")
      p The dimension of the state vector <span class="mth"><i>x</i></span> can vary from <span class="mth"><i>N</i></span> to <span class="mth">2<i>N</i></span>.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: -10px;") Example: Electrostatic saddle bearing, LAGRANGE formalism
      p(style="line-height: 1.7em;") <b>System configuration.</b> Gyroscopes are used to measure rotation rates of moving objects (airplanes, satellites, etc.). <br>An electrostatic suspension in a gyroscope enables friction-free rotation of the inertial mass spinning at a constant rate.
      .center
        img(src='./assets/cap2/fig2_26.png' height="400px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: -10px;")
      p(style="line-height: 1.5em;") <b>Model validity</b> A few remarks regarding restrictions on the <b>model validity:</b> in this example, only the vertical motion of the sphere is of interest. <br>The vertical translational motion is decoupled from the rotational motion of the sphere. <br>The rotational energy of the sphere is a conserved variable (i.e. a constant physical quantity), and does not affect the translational motion. <br>Thus, the sphere rotation can be ignored when creating the model.
      .center
        img(src='./assets/cap2/fig2_26.png' height="400px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 20px;")
      p(style="line-height: 1.5em;") Two nonholonomic constraints are apparent:
      .center
        img(src='./assets/cap2/eq2_25.png' height="80px")
      p(style="line-height: 1.7em;") In the remainder of this example, it is assumed that the sphere only moves within its free range of motion. <br>Thus, the nonholonomic constraints do not bind, and all relevant generalized coordinates remain unconstrained (an important prerequisite for EULER-LAGRANGE equations of the second kind).
      .center
        img(src='./assets/cap2/fig2_26.png' height="300px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 20px;")
      p(style="line-height: 1.7em;") <b>Model creation</b> To start, a generalized coordinate is chosen for each of the three energy storage elements:
      .center
        img(src='./assets/cap2/eq2_26.png' height="80px")
      p Due to the holonomic condition q2 = q3 , there remain only two degrees of freedom with independent, unconstrained (in the sense of the above assumption!) generalized coordinates q1,q2. <br>The energy functions obtained for this case are:
      .center
        img(src='./assets/cap2/eq2_27a.png' height="80px")
      .center
        img(src='./assets/cap2/eq2_27b.png' height="80px")
      p giving the LAGRANGian <span class="mth"><i>L</i>(<b>q</b>, <b>q&#x307;</b>) = <i>T*</i>(<b>q&#x307;</b>) - <i>V</i>(<b>q</b>)</span>.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 0px;")
      p(style="line-height: 1.7em;") <b>Model creation</b> <br>An approximation for the computation of the gap-dependent capacitance C(x) is a simplified plate capacitor where
      .center
        img(src='./assets/cap2/eq2_28.png' height="80px")
      p The only dissipative term which requires consideration is the resistive contribution Rq1 for the electrical coordinate q1. <br>The generalized forcing term is to be found in the voltage source u(t) (in the q1 -direction).
      p By evaluating the EULER-LAGRANGE equations of the second kind (2.8), the (nonlinear) equations of motion are then obtained in problem coordinates:
      .center
        img(src='./assets/cap2/eq2_29.png' height="150px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 0px;")
      p(style="line-height: 1.7em;") <b>Model creation</b> <br>Using the state definition x1 :  x, x2 :  x , x3 :  Q , in Eq. (2.14), the state space model is then x 1  x2
      .center
        img(src='./assets/cap2/eq2_30.png' height="150px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 0px;")
      p <b>Discussion</b> Last equations represents an ordinary state space model without algebraic variables or equations. This is not surprising, as a set of independent generalized coordinates q1,q2 without constraints was already present.
      p One other particularity is worth noting in this example: as is apparent, the EULER-LAGRANGE equations—despite representing a system of second-order differential equations with two degrees of freedom— do not (as in the case of purely mechanical systems) result in a state space model with four states. <br>Rather, only three states appear. This is due to the fact that in the electrical subsystem including the capacitor, only one potential energy storage element is present, so that the electrical coordinate makes no contribution to the total kinetic energy. As a result, the typically-expected second time derivative of the electrical coordinate—which would require an additional state variable—is missing.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 0px;")  Energy-based modeling
      p(style="line-height: 1.7em;") <b>Energy-based modeling: HAMILTON’s equations</b> Special state definition: canonical momentum Transforming the system of second-order differential EULER-LAGRANGE equations into an equivalent system of first-order differential equations can be effected via a very specialized state definition, motivated by analytical mechanics.
      p Define as the state variable the existing generalized position coordinates qi as well as a set of new variables, their conjugate coordinates pi :
      .center
        img(src='./assets/cap2/eq2_33.png' height="70px")
      p The variables pi are also termed the canonical momentum variables. It is easy to see that, from a physical point of view, the pi actually correspond to generalized momenta by simply evaluating the above equation while accounting for L =T* -V and f =q&#x307;.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 0px;")
      p(style="line-height: 1.7em;") <b>Energy-based modeling: HAMILTON’s equations</b>  <br>The canonical momentum variables pi satisfy the following system of first-order equations
      .center
        img(src='./assets/cap2/eq2_34.png' height="70px")
      p Employing a manipulation with various justifications, the scalar HAMILTONian can be introduced and derived from the LAGRANGian via the following LEGENDRE transformation
      .center
        img(src='./assets/cap2/eq2_35.png' height="50px")
      p With the resulting HAMILTONian and the canonical momentum, the EULER-LAGRANGE equations can be written in the following, equivalent form:
      .center
        img(src='./assets/cap2/eq2_36.png' height="70px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 0px;") Multi-port modeling
      p(style="line-height: 1.7em;") <b>KIRCHHOFF networks</b> It is noteworthy that mechanical, acoustic, fluidic, and thermal systems can also be neatly abstracted as networks; generalized KIRCHHOFF’s Laws suffice for their modeling and analysis. Such networks are termed KIRCHHOFF networks. 
      p Due to the existence of well-developed methods and tools for electrical networks, it is convenient to describe network models in the other domains as equivalent electrical networks. 
      p These are then called “<b>analogous electrical</b>” networks. <br>By finding these analogs, it is thus possible to depict networks from a variety of domains at a common, abstract level in a unified system model.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 0px;") 
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;"> Lumped element networks</b> The following discussion examines networks having lumped elements. Such spatially and functionally delineated elements can mutually exchange energy with other coupled elements (the network) via interfaces (terminals or poles, with a pair of terminals form- ing a port). <br>Thus network elements are termed two-terminal elements (bipoles), three-terminal (tripoles), four-terminal (quadripoles), or one-port or multi-port. <br>Spatially lumped implies that spatial delay effects (wave propagation) play no role at the element level.
      .center
        img(src='./assets/cap2/fig2_27.png' height="200px")
      

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 0px;") 
      p(style="line-height: 1.7em;") <b>Effort and flow variables</b> The behavior of an element can be described using two generic terminal variables 
      .center
        img(src='./assets/cap2/fig2_28.png' height="150px")
      ul
        li <b>Flow f.</b> Describes variables which transit through the network element, i.e. flow into and out of the element (e.g. electric current). <br>Such a variable can be measured at any single point (terminal) in the network.
        li <b>Effort e.</b> Describes variables which are applied between terminals of the network element (e.g. electric voltage). <br>Such a variable can be measured between two different points (terminals) in the network.
      //- .center
      //-   img(src='./assets/cap2/table2_4.png' height="50px")
      //- p In the international literature, the synonymous terms for flow and effort variables shown in Table 2.4 have become commonplace.


    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 0px;")
      p(style="line-height: 1.7em;") <b>Circuit laws.</b> Combining elements into a network proceeds by considering the following elementary conservation laws,:
      .center
        img(src='./assets/cap2/fig2_29.png' height="250px")
      ul
        li <b>Junction rule for flow variables</b> (KIRCHHOFF’s node rule) <br>The algebraic sum of all flow variables (inflows and outflows) at any arbitrary network node is zero at every point in time.
        li <b>Loop rule for effort variables</b> (KIRCHHOFF’s mesh rule) <br>The algebraic sum of all effort variable differences around any arbitrary closed network path is zero at every point in time.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 0px;") 
      p(style="line-height: 1.7em;") <b> Port-based networks</b> So-called two-terminal or one-port elements and four-terminal or two-port elements are the most important network elements. Networks resulting from the interconnection of such elements are called port-based networks. <br>When creating networks, it should be ensured that the same types of flow and effort variables connect at circuit nodes.
      .center
        img(src='./assets/cap2/fig2_30.png' height="290px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 30px;")
      p(style="line-height: 1.7em;") <b>Elementary two-terminal element: the one-port</b> Characteristic constitu- tive relations between effort and flow can be described using the following elementary two-terminal or one-port network elements:
      ul
        li Load
        .center
          img(src='./assets/cap2/eq2_38.png' height="70px")
        li Flow accumulator
        .center
          img(src='./assets/cap2/eq2_39.png' height="70px")
        li Effort accumulator
        .center
          img(src='./assets/cap2/eq2_40.png' height="80px")
      p The proportionality constants represent the parameters of the corresponding lumped network elements.
      

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 30px;")
      p(style="line-height: 1.7em;") <b>Analogous relations</b> In any particular domain, the parameters α, β, γ are typically assigned individual names and symbols.
        .center
          img(src='./assets/cap2/table2_5.png' height="385px")
        .center
          img(src='./assets/cap2/table2_6.png' height="150px")
      

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 10px;")
      p(style="line-height: 1.7em;") <b>Independence of power variables.</b> One hallmark of port-based networks is that only one of the two conjugate power variables can be independently controlled at any one time. <br>An important example is seen in ideal (lossless) sources for effort and flow. 
      .center
        img(src='./assets/cap2/fig2_31.png' height="150px")
      p In the case of a potential source (source for effort variables), the output effort e<sub>0</sub>(t) can be controlled independently of the applied load, whereas the flow f(t) is load-dependent. <br>The equivalent holds for flow sources, where the flow f<sub>0</sub>(t) can be controlled independently of the load.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 10px;")
      p(style="line-height: 1.7em;") <b>Transducers</b> The domain-specific two-terminal network elements introduced so far can only be connected within a single physical domain, i.e. only the same types of effort and flow variables can be coupled to the network port. <br>In order to model the interaction of variables from different domains—e.g. electrical-mechanical, mechanical-hydraulic, translation- rotation—the four-terminal or two-port transducer elements are required.
      .center
        img(src='./assets/cap2/fig2_30.png' height="285px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 10px;") Example product: autofocus camera
      p <b>Transformer vs. gyrator</b> These two transducer elements describe a generalized power flow between different ports. <br>In particular, differing physical domains can be present at the two ports.
      p
      .center
        img(src='./assets/cap2/fig2_32.png' height="160px")
      .center
        img(src='./assets/cap2/fig2_33.png' height="230px")
      .center
        img(src='./assets/cap2/fig2_34.png' height="90px")
      

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 10px;")
      p(style="line-height: 1.7em;") <b>Mechanical transducers: variable definitions</b> Recall that, due to the arbitrary assignment of domain-specific power variables, the description of physical transducer implementations is not unique. 
      p Particular attention is due in the case of mechanical transducers. 
      p Depending on which physical quantities are assigned to the power variables effort (e) and flow (f), the same system can be described as a transformer or a gyrator.
      p
      .center
        img(src='./assets/cap2/fig2_35.png' height="300px")
      p(style="line-height: 1.7em;")
      
    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 10px;")
      p(style="line-height: 1.7em;") <b>Topological rules of construction</b> Starting with the physical topological structure of network elements, an abstract topological network model can be constructed using the following elementary rules:
      ul
        li <b>Common potential:</b> Elements with a common potential are connected in parallel in the abstract network graph,
        li <b>Common flow:</b> Elements with a common flow are connected in series in the abstract network graph.
      .center
        img(src='./assets/cap2/fig2_36.png' height="350px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 10px;") Example 2: Electrostatic saddle bearing – multi-port model.
      p(style="line-height: 1.7em;") <b>System configuration</b> A multi-port system model is to be derived for the electrostatic saddle bearing already described in the last example
      .center
        img(src='./assets/cap2/fig2_26.png' height="300px")
      p(style="line-height: 1.7em;") From the physical configuration, a locally limited electrical and a mechanical network can be directly extracted.
      .center
        img(src='./assets/cap2/fig2_37.png' height="200px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 10px;")
      p(style="line-height: 1.7em;") <b>Mathematical model: DAE system</b> For each of these networks, the elementary circuit rules can now be applied, and the constitutive equations for the network elements can be constructed.
      p (a) Electrical network. <br>Loop rule for effort variables (electrical voltages, KIRCHHOFF’s mesh rule)
      .center
        img(src='./assets/cap2/eq2_41.png' height="80px")
      p Constitutive equations
        .center
          img(src='./assets/cap2/eq2_42.png' height="180px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :Modeling Paradigms for Mechatronic Systems</sup>
      h5.center(style="margin-top: 10px;")
      p (b) Mechanical network
      p Junction rule for flow variables (forces, NEWTON’s third law)
        .center
          img(src='./assets/cap2/eq2_43.png' height="80px")
      p Constitutive equations
        .center
          img(src='./assets/cap2/eq2_44.png' height="180px")
      p The system of equations fully describes the system behavior though here it is in the form of a general DAE system integrating all involved physical domains (a domain-independent system model). <br>Via suitable manipulation, this DAE system can, without much difficulty, be transformed into the state space form.

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
    title: 'Modelado',
    description: 'Paradigmas del modelado en sistemas mecatrónicos',
    path: 'mecatronica-computacional-paradigmas'
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
  font-family: Times New Roman;
}
</style>
