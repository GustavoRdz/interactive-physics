<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false')
      .center.frontpage
        h2 Mecatronica Computacional
        img(src='./assets/U.svg')
        h4 Modelado
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
        | Elementos de Modelado en Ingeniería
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Contexto de sistemas en ingeniería</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Modelado de sistemas con análisis estructurado</b><br><span style="font-size: 0.8em;">Principios de ordenado. <br>Elementos de modelado para un análisis estructurado. <br>Ejemplo la cámara con autoenfoque. Modelos alternativos de modelado.</span>
        //- eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        //-   p(v-if="step >= 1")
        //-     <b>Paradigmas del modelado en sistemas mecatrónicos</b><br><span style="font-size: 0.7em;">Potencia y energía generalizados. Modelado basado en energía: formalismo de Lagrange. Modelado basado en energía: ecuaciones de Hamilton. Modelado multipuerto: redes de Kirchhoff. Modelado multipuerto: gráficas de enlace. Modelado Energía/multipuerto: sistema puerto-Hamiltoniano.</span>
        //- eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        //-   p(v-if="step >= 1")
        //-     <b>Sistemas de ecuaciones diferenciales </b><br><span style="font-size: 0.7em;"></span>

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Introduction</sup>
      h4(style="margin: -20px 0 0 0; ").center Mechatronics
      p(style="border: 1px solid black; padding: 15px; margin: 1px; line-height: 1.5em;") <b>Mechatronics</b> describes an interdisciplinary design methodology which solves primarily mechanically oriented product functions through the synergistic spatial and functional integration of mechanical, electronic, and information processing subsystems.<br><span style="font-size: 16px; font-weight: bold;"> VDI/VDE Gesellschaft für Mess- und Automatisierungstechnik (GMA) - Society for Measurement and Automatic Control (VDI/VDE GMA ), Technical Committee 4.15 “Mechatronics”</span>
      .center
      p(style="border: 1px solid black; padding: 15px; margin-top: 20px; line-height: 1.5em;") <b>Mechatronics</b> is the synergistic combination of precision mechanical engineering, electronic control and systems thinking in the design of products and manufacturing processes. It covers the integrated design of mechanical parts with an embedded control system and information processing.<br><span style="font-size: 16px; font-weight: bold;">International Federation of Automatic Control (IFAC) – Technical Committee on Mechatronic Systems</span>

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Engineering context</sup>
      h4.center System Engineering context
      p(style="line-height: 1.8em; margin-top: 50px;") <b style="font-size: 1.5em;">System models.</b> <br>Abstract, mathematical models of a mechatronic system as a depiction of the real world play a central role in systems design.
      p(style="line-height: 1.8em;") As a rule, these models are developed and manipulated long before the actual components of the system are available.
      p(style="line-height: 1.8em;") It is on the basis of such abstract models that robust predictions of the capabilities of the (possibly yet to be produced) real system must already be made.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Engineering context</sup>
      h5.center Experimenting with models: simulation
      p(style="line-height: 1.8em;") In this context, the construction of these models —<b>the modeling task</b>— is a key task of systems design which should be carried out with the greatest degree of diligence and care.
      p(style="line-height: 1.8em;") Ultimately, product capabilities of interest are always stated in terms of statistics concerning system performance at a specified time or over a defined time interval (e.g. the nominal operating period).
      p(style="line-height: 1.8em;") Such time-based performance properties can be determined via simulation, that is, through experiments on available models.
      p(style="line-height: 1.8em;") As a part of this process, each experiment should be set up in a clearly verifiable manner with an experiment frame <em>ε</em> (the experimental conditions) and assessable system responses y(t).


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Engineering context</sup>
      h5(style="margin-top: -30px;").center Experimenting with models: simulation
      p Such experiments can be performed on the real system <span style="font-family: Times; font-weight: bold">(ε<sub>S</sub>, y<sub>S</sub>)</span> or a model of the real system <span style="font-family: Times; font-weight: bold">(ε<sub>M</sub>, y<sub>M</sub>)</span> via simulation.
      .center
        img(src='./assets/cap2/fig2_1.png' height="350px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Engineering context</sup>
      h5(style="margin-top: -30px;").center Experimenting with models: simulation
      p To perform a simulation experiment, the mathematical model must be “animated” in such a way that it becomes possible to calculate the time history of all outputs that are of interest
      .center
        img(src='./assets/cap2/fig2_2.png' height="250px")
      p In general, this proceeds via the solution of a system of differential equations using appropriate numerical methods (numerical integration algorithms) which are implemented on a computational platform. The methods used to implement simulation models inside of simulators are termed simulation techniques.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Engineering context</sup>
      h4.center(style="margin-top: -10px;") Experimenting with models: simulation
      h6 Simulation experiments
      p(style="line-height: 1.5em;") With a simulation experiment, its possible to predict the behavior <span style="font-family: Times; font-weight: bold; font-style: italic;">y<sup style="font-size: 0.6em;">i</sup><sub style="font-size: 0.5em;">S</sub>(t)</span> of the real system for one specific experiment <span style="font-family: Times; font-weight: bold; font-style: italic;">ε<sup style="font-size: 0.6em;">i</sup><sub style="font-size: 0.5em;">S</sub></span>, using the simulation solution <span style="font-family: Times; font-weight: bold; font-style: italic;">y<sup style="font-size: 0.6em;">i</sup><sub style="font-size: 0.6em;">M</sub>(t)</span> as the result of one equivalent simulation experiment <span style="font-family: Times; font-weight: bold; font-style: italic;">ε<sup style="font-size: 0.6em;">i</sup><sub style="font-size: 0.6em;">M</sub></span>.
      p(style="line-height: 1.5em;") Kepping in mind in this context: <br> the comparability of <span style="font-family: Times; font-weight: bold; font-style: italic;">y<sup style="font-size: 0.6em;">i</sup><sub style="font-size: 0.6em;">S</sub>(t)</span> and <span style="font-family: Times; font-weight: bold; font-style: italic;">y<sup style="font-size: 0.6em;">i</sup><sub style="font-size: 0.6em;">M</sub>(t)</span> depends on the model accuracy and on the concrete computational implementation of the mathematical model.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Engineering context</sup>
      h4.center(style="margin-top: -10px;") Experimenting with models: simulation
      p(style="line-height: 1.7em;")  The predictive capability of the simulation results should thus always be critically scrutinized:
      p(style="line-height: 1.7em;") <b>“Does my model consider all properties important to me?”,<br> “How are my model equations actually implemented in the simulator?”,<br> “Which method-dependent approximation errors are entailed by the solution algorithms employed?”,<br> “What numerical errors result from the concrete implementation on the chosen computational platform?”.</b>
      p(style="line-height: 1.5em;") All of these questions predictably influence the accuracy of the simulation, i.e. the best possible equivalence <span style="font-family: Times; font-weight: bold; font-style: italic;">y<sup>i</sup><sub>S</sub>(t)</span> &#x2248; <span style="font-family: Times; font-weight: bold; font-style: italic;">y<sup>i</sup><sub>M</sub>(t)</span> under the chosen simulation boundary conditions.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Engineering context</sup>
      h4.center(style="margin-top: -10px;") Experimenting with models: simulation
      p In confirming the correctness of models, a distinction is made—depending on the types of the models—between the terms <b>verification</b> and <b>validation</b>.
      p(style="border: 1px solid black; padding: 10px; line-height: 1.2em;") <b>VALIDATION</b> – (IEEE 1997) “Validation is the process of determining the degree to which a simulation is an accurate representation of the real world from the perspective of the intended use(s) as defined by the requirements.”
      p(style="border: 1px solid black; padding: 10px; line-height: 1.2em;") <b>VERIFICATION</b> – (IEEE 1997) “Verification is the process of determining that an implementation of a simulation accurately represents the developers conceptual description and specifications.” 
      p(style="line-height: 1.5em;") In summary, the definitions can be expressed as follows:<br> <b>validation</b>=“Have I reated the correct model?” <br> <b>verification</b>=“Have I correctly created (implemented) the model?”

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Engineering context</sup>
      h4.center(style="margin-top: -10px;") Experimenting with models: simulation
      p(style="line-height: 25px;") <b>Experimental model validation.</b> If sufficiently meaningful results regarding the output <span style="font-family: Times; font-weight: bold; font-style: italic;">y<sup>i</sup><sub>S</sub>(t)</span> of the real system are available for comparison, experimental validation of mathematical models is possible based on simulation. 
      .center
        img(src='./assets/cap2/fig2_3.png' height="450px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Engineering context</sup>
      h4.center(style="margin-top: -10px;") Experimenting with models: simulation
      .center
        img(src='./assets/cap2/fig2_3.png' height="400px")
      p Non-trivial questions in this context include: <br>“<b>Where do the comparison results come from, given an as yet non-existent system?</b>”, <br>“<b>How many simulation experiments are really sufficient for validation?</b>”
      


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Engineering context</sup>
      h4.center(style="margin-top: -10px;") Experimenting with models: simulation
      p(style="line-height: 30px;") <b>Verification of simulation models.</b> For model validation, an implied premise is that the mathematical models, including the accompanying experiment frame, have been correctly implemented in the employed simulation model.
      p(style="line-height: 30px;") Assessing the correctness of the implementation is termed <b>verification of the simulation model</b>. 
      .center
        img(src='./assets/cap2/fig2_3.png' height="400px")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Engineering context</sup>
      h4.center(style="margin-top: -20px;") Experimenting with models: simulation
      p(style="margin-top: -50px;") <b>Verification of simulation models.</b>
      //- .center
      //-   img(src='./assets/cap2/fig2_3.png' height="350px")
      p(style="line-height: 30px;") Verification proceeds by comparing simulation results <span style="font-family: Times; font-weight: bold; font-style: italic;">y<sup>i</sup><sub>M</sub>(t)</span> with significant reference data <span style="font-family: Times; font-weight: bold; font-style: italic;">y<sup>i</sup><sub>S</sub>(t)</span>. 
      p(style="line-height: 40px;") Predictions of system behavior obtained through analytical consideration of the mathematical models are particularly well-suited to this purpose, <br>e.g.<br> * steady-state values from limiting values of a LAPLACE transform,<br>* oscillatory dynamics under harmonic excitation from the frequency response,
      // p(style="line-height: 30px;") For any such analytical prediction, appropriate test cases (experimental frames) should be created. 
      p(style="line-height: 30px;") <b>The deeper the theoretical understanding of the system</b> incorporated at this point, <b>the greater the chance</b> of generating an accurate simulation model.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Engineering context</sup>
      h4.center(style="margin-top: -20px;") Experimenting with models: simulation
      p(style="line-height: 1.7em;") <b>Analytical model validation.</b> Analytical predictions of system behavior bring forth the possibility of analytical validation of mathematical system models, i.e. a direct comparison with real system data.
      p(style="line-height: 1.7em;") Properties with general validity can be derived for a large class of experiment frames.
      // p(style="line-height: 1.7em;") A good example is provided by stability predictions for mechatronic systems.
      p(style="line-height: 1.7em;") Experimental confirmation of system linearity and time-invariance within a few characteristic experiment frames permits general predictions for arbitrary inputs in terms of bounded-input bounded-output (BIBO) stability within a particular operational regime.
      p(style="line-height: 1.7em;") Using analytical predictions can reduce the costs and complexity of verification and validation (directly affecting design time and cost).

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Engineering context</sup>
      h4.center(style="margin-top: -20px;") Experimenting with models: simulation
      p(style="margin-top: -50px;") Model hierarchy: 
      .center
        img(src='./assets/cap2/fig2_4.png' height="600px")
      

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Engineering context</sup>
      h4.center(style="margin-top: -20px;") Experimenting with models: simulation
      p(style="line-height: 1.7em;") <b>Model hierarchy</b> In the domain of systems design, a variety of types of models are employed, representing differing perspectives on the mechatronic system under consideration.
      p(style="line-height: 1.7em;") Each perspective describes certain differing properties of the same mechatronic system.
      p(style="line-height: 1.7em;") <b>Qualitative system model.</b> At the most abstract level, a system can be described using purely qualitative attributes, resulting in a qualitative system model.
      p(style="line-height: 1.7em;") In a mechatronic system, important aspects of the model include defining the behavior of the system with respect to the environment (user) and assigning product tasks to realizing “functions”.
      p(style="line-height: 1.7em;") At the same time, a preliminary functional system structure and important functional interfaces should be defined.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Engineering context</sup>
      h4.center(style="margin-top: -20px;") Experimenting with models: simulation
      p(style="line-height: 1.7em;") <b>Quantitative models.</b> For quantitative predictions of system behavior, mathematical models suitable for computation must be generated.
      p(style="line-height: 1.7em;") To accomplish this, attention should be paid to energy flow, signal flow, and the dynamics within and between the functions defined in the qualitative model.
      p(style="line-height: 1.7em;") The challenge in mechatronic systems lies in the variety of physical domains involved. A broad technical understanding of the different domains must be present to form a firm basis for modeling.
      p(style="line-height: 1.7em;") When creating a model, attention must be paid to the fact that interactions between system elements from different physical domains always take place via energy flows with power back-effects.      


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Engineering context</sup>
      h5.center(style="margin-top: -20px;") Experimenting with models: simulation
      p(style="line-height: 1.7em;") <b>Mathematical system model.</b> The end results of the various modeling methodologies are so-called differential-algebraic equations (DAE).
      p(style="line-height: 1.7em;") They are the final, actual mathematical model formulation—a DAE system presents a domain-independent mathematical model in which all physical phenomena are represented.
      p(style="line-height: 1.7em;") Predictions of system behavior are obtained via appropriate experimentation on the DAE system model.
      // p(style="line-height: 1.7em;") Solving such DAE systems in the general case is, however, (very) difficult, so that a DAE system model must generally be manipulated so as to enable computations based on it (e.g. converting it to state-space representation, possibly linearization).
      p(style="line-height: 1.7em;") Note that certain special phenomena—such as switching operations, mechanical contact problems, stiction, and discrete-time and discrete-event phenomena—should be modeled by extending the model into a hybrid system.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Engineering context</sup>
      h5.center(style="margin-top: -20px;") Experimenting with models: simulation
      p(style="line-height: 1.7em;") <b>Model purpose, model accuracy.</b> One significant task in systems design is to incorporate the “correct” abstraction and simplification of the real physical behavior of a system under examination into a mathematical model.
      p(style="line-height: 1.7em;") <b>Low-fidelity models.</b> For controller design, stochastic performance predictions, or a rough design (feasibility studies), simplified or low-fidelity models are typically employed. This type of model is generally a linear time-invariant model (LTI system) of low order.
      p(style="line-height: 1.7em;") <b>High-fidelity models.</b> On the other hand, for design verification and validation  detailed, high-fidelity models with the smallest possible modeling errors should be used to the greatest extent possible. Such models generally take into account all relevant nonlinearities, broadband dynamic system behavior, and, in particular, high-frequency structural modes.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: -10px;") System Modeling with Structured Analysis
      p(style="line-height: 1.7em;") <b>Qualitative system models</b> Due to the complexity of some systems, developing a system model is generally a non-trivial task with an uncertain outcome.
      p(style="line-height: 1.7em;") Though qualitative system models do not allow for numerical computation, they do enable—in addition to the recognition of fundamental system relations (causality loops, dynamics)—the preliminary establish- ment of a foundation for quantitative (mathematical) models by setting up clearly-delineated and manageable subsystems.
      p(style="line-height: 1.7em;") <b>Top-down modeling</b> The workflow described above belongs to the so-called top-down system modeling paradigm, and always takes place at the beginning of the product design process. During the definition of requirements, the description of properties of the product under development is made more and more detailed following to the above procedure.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: -10px;") System Modeling with Structured Analysis
      p(style="line-height: 1.7em;") <b>Function-oriented models</b> Function-oriented modeling methods offer a natural approach for the design of mechatronic systems, as they are centered on workflows and input/output relations in a conventional way.
      p(style="line-height: 1.7em;") Thus, following a few fundamental definitions, several elements of modeling via structured analysis (SA)—which are practical for qualitative modeling due to their intuitive simplicity—are presented below.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: -10px;") System Modeling with Structured Analysis
      p(style="line-height: 1.7em;") Definition. <b>System</b> – (Cellier 1991) “A system is characterized by the fact that we can say what belongs to it and what does not, and by the fact that we can specify how it interacts with its environment. System definitions can furthermore be hierarchical. We can take the piece from before, cut out a yet smaller part of it, and we have a new ‘system’.”
      .center
        img(src='./assets/cap2/fig2_5.png' height="300px")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: -10px;") System Modeling with Structured Analysis
      p(style="line-height: 1.7em;") Definition. <b>System – (Schnieder 1999)</b> “A system is marked by the presence of certain properties and is characterized by the following four axioms:
      p(style="line-height: 1.5em;") <b>Principle of Structure</b> The system consists of a quantity of parts, which have mutual relationships to each other and the (system) environment. The system has reciprocal influences with its environment via physical quanti- ties describing the energy, mass and information state of the system.
      p(style="line-height: 1.5em;") <b>Principle of Decomposition</b> The system consists of a quantity of parts, which can further be decomposed into a number of mutually influencing sub-parts. When examined in detail, the sub-parts in turn exhibit a certain complexity or general system characteristics.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: -10px;") System Modeling with Structured Analysis
      p(style="line-height: 1.5em;") <b>Principle of Causality</b> The system consist of a quantity of parts, whose mutual relationships and own variations are clearly defined in themselves. Following a causal interrelationship, later states can only depend on previous ones. Causality is understood as the logic of events.
      p(style="line-height: 1.5em;") <b>Principle of Temporality</b> The system consists of a quantity of parts, whose structure and state to a greater or lesser extent determine changes occurring over time. Temporality is the sequence of events and variations over time.”
      p(style="line-height: 1.7em;") These two definitions are, in the end, equivalent, though the second definition also brings into play the temporal aspect important for physical systems.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 20px;") Ordering principles
      p(style="line-height: 1.5em;") <b>Complex systems</b> One significant task of system modeling is the ordering of the various components of a system. <br>Complex systems are understood to be those consisting of a great number of components. <br>Experience shows that humans are limited in the number of elements (graphic symbols) they are capable of simultaneously recognizing and understanding the contents (the semantics) of in a depiction. <br>The important design principles of structuring, decomposition, aggregation, and hierarchy allow the designer to limit the number of system components under consideration at any time in the face of increasing model detail; these principles are
      p(style="line-height: 1.7em;") <b>Structuring</b>
        ul 
          li establishing the relationships between entities in a system according to given criteria,
          li deconstructing a given system according to given criteria so that its relationships become recognizable.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 20px;") Ordering principles
      p(style="line-height: 1.7em;") <b>Decomposition</b>
        ul
          li “breaking into fundamental elements”,
          li systems are decomposed into subsystems,
          li more details are revealed in an existing model,
          li refinement of a structure.
      p(style="line-height: 1.7em;") <b>Aggregation</b>
        ul
          li “layering together of individual elements”,
          li subsystems are aggregated into a system.
      p(style="line-height: 1.7em;") <b>Hierarchy</b>
        ul
          li “(pyramidal)ranking”,
          li system hierarchy: system definitions are hierarchical, i.e. one piece of the system can be extracted from the whole and be considered as a new system,
          li hierarchical level: a particular level of consideration of a system, generally representing a subsystem,
          li top level: a global view of the system
          li lower level: a detailed view of the system (view of the interior).

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 0px;") Modeling elements of structured analysis
      p(style="line-height: 1.7em;") The method of <b>structured analysis</b> (SA) known from the field of software development offers a very natural approach for system modeling for the design of mechatronic systems.
      p(style="line-height: 1.7em;") <b>Function-oriented modeling</b> Using structured analysis results in a primarily function-oriented model as it takes as a starting point product functions and then considers their logically causal interconnectedness via data and signals. <br>Note further, that for a complete system description, structured analysis additionally models temporally causal relationships using state machines.
      

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 0px;") Modeling elements of structured analysis
      p(style="line-height: 1.7em;") Model elements
      p(style="line-height: 1.7em;") The most important elements of function-oriented modeling are 
      .center
        img(src='./assets/cap2/table2_1.png' height="400px")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 0px;") Modeling elements of structured analysis
      p <b>Data context diagram (DCD)</b> Context diagrams describe the system under development from the point of view of a user. The purpose of the system is summarized as a single system process.<br> This process converts inputs from terminators/end users into outputs to terminators/end users. <br>The context diagram describes the interaction of the system with its environment.
      .center
        img(src='./assets/cap2/fig2_7.png' height="300px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 0px;") Modeling elements of structured analysis
      p(style="line-height: 1.7em;") <b>Data flow diagram (DFD)</b> Data flow diagrams are the primary tool for determining the functional properties of a system. They make structures of the system concrete by defining component functions (processes) which are tied together with data flows. A DFD contains processes, data flows and data storage locations, but no terminators.
      .center
        img(src='./assets/cap2/fig2_8.png' height="400px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 0px;") Modeling elements of structured analysis
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">Process.</b> A process (also called a function, activity, or task) creates an output from an input by performing an operation. Processes have names and numbers.
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">Data flow.</b> Data flows represent all possible types of generalized information (signals, action flows) and can be further decomposed.
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">Leveling.</b> The decomposition of a parent DFD into child DFDs with an in- creased level of detail. The decomposition levels can have various depths.
      .center
        img(src='./assets/cap2/fig2_8.png' height="270px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 0px;") Modeling elements of structured analysis
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">Balancing.</b> A test for inconsistent data flows. Input and output data flows from parent and child processes must match up in a consistent manner. Data flows without a source or sink create inconsistencies which can be tested for with automated or manual procedures.
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">Process specification (PSPEC).</b> A process is continuously decomposed until a short and unambiguous component description becomes possible. Possible methods for describing the process include anything elucidating its content, e.g. tables, prose description, equations, control theory transfer functions. PSPECs can appear at all levels of refinement.
      .center
        img(src='./assets/cap2/fig2_9.png' height="150px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 0px;") Modeling elements of structured analysis
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;"> Control specification</b>
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">State transition diagram (STD)</b> Control specifications describe the processing of control flows. Usually, these flows trigger state transitions or are combined with other signals to form new control signals. Typical means of description include state transition diagrams, decision tables, or prose descriptions. In general, each process has its own control specification. When State 1 is active, fulfillment of Condition A results in the activation of State 2 (with simultaneous deactivation of State 1) and the carrying out of Action A’.
      .center
        img(src='./assets/cap2/fig2_10.png' height="200px")
      

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 0px;") Modeling elements of structured analysis
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">Data handling</b>
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">Data dictionary (DD).</b> Every data and control flow—as well as all storage locations—must be defined in a data dictionary. 
      // p Flows are either primitives or non-primitives, the latter consist of groupings of primitives. 
      p A dictionary is usually laid out in a computer-readable format, and can be for- mulated in written form, table form, or as a database.
      

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 0px;") Modeling elements of structured analysis
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">Architecture diagram</b>
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">Implementation structure.</b> An architecture diagram describes an implementation structure which realizes the functional relationships indicated in a DFD. <br>In addition, the distribution of functions among device elements and the distribution of data flows among device interfaces are documented. This gives a semantic description of devices, i.e. “which task(s) should the device fulfill”. <br>Further, clear justification for the existence of any particular device in the system becomes evident within a device architecture.
      .center
        img(src='./assets/cap2/fig2_11.png' height="200px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 0px;") Modeling elements of structured analysis
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;"> System model.</b> <br>In a concise, semi-formal form, this model describes different views of the system (logically causal = functional vs. temporally causal = dynamic), possesses different hierarchical levels (context, DFD level 1, DFD level 2...), and contains one or more possible device architectures (design variants) along with the assignment of device elements to their functions.
      .center
        img(src='./assets/cap2/fig2_12.png' height="430px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 30px;") Example product: autofocus camera
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">Task definition.</b><br>The goal is a qualitative design model for a simple autofocus camera.
      p(style="line-height: 1.7em;") In particular, the mechatronic aspects which enable optimal picture taking should be made evident.
      p(style="line-height: 1.7em;") In addition, the assignment of functions to proposed device elements in possible physical realizations (design variants) should be highlighted. 
      p(style="line-height: 1.7em;") This example thus represents the typical first steps in the design of a new product.
      

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 30px;") Example product: autofocus camera
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">Written product specification.</b> <br>“The autofocus camera should be very user-friendly and have as few operational and display functions as possible.<br> Sharp pictures should be produced without special manual intervention. <br>The camera should work with standard rolls of film (black-and- white, color). <br>It should be possible to use standard rechargeable batteries. <br>The camera should fit into the low-cost market, preferably be light weight, and enable as long an operational time as possible for every full battery charge.”
      p(style="line-height: 1.7em;") Typically, user requirements (e.g. from marketing) are given in purely verbal form, it allow for great freedom in the design. <br>To begin the design process, this freedom should—in cooperation with the customer—be further constrained using formal qualitative system models.
      

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 10px;") Example product: autofocus camera
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;"> Context diagram.</b> Here, the most significant outside view of the product, i.e. how the user sees the camera, should already be recognizable.
      p(style="line-height: 1.7em;") Basically, the available data flows and a PSPEC of the Primary Function F0 can already be used to write a first draft of the user manual. <br>The data flows are coded alphanumerically, in order to simplify later reference (D0.x = Level 0).
      .center
        img(src='./assets/cap2/fig2_13.png' height="330px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 10px;") Example product: autofocus camera
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;"> Data flow diagrams.</b> Already at Level a—the first below the context diagram—the first candidate mechatronic functions (F1, F2, F5, i.e. those in which it is obvious that masses must be made to move in a precise manner) become evident.
      .center
        img(src='./assets/cap2/fig2_14.png' height="550px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 10px;") Example product: autofocus camera
      p Function F7 <b>focus_lens</b> is further decomposed at the second level, Level b. The presence of a closed functional chain is already clearly discernable here.
      .center
        img(src='./assets/cap2/fig2_15.png' height="550px")
      

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 10px;") Example product: autofocus camera
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;"> PSPECs</b> Though the functional descriptions of the DFD elements are al- ready readily interpretable in clear text, it is advisable to further specify the contents of the functions.
      .center
        img(src='./assets/cap2/fig2_16.png' height="150px")
      p(style="line-height: 1.7em;") In the present case, Function F2 focus_lens has a detailed written specification, which is supplemented with important numerical performance parameters. <br>However, at this point, concrete values for the parameters are unknown, indicated by <b>TBD = to be defined</b>. Such concrete values must then be specified in subsequent steps of the design process.
      
    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 10px;") Example product: autofocus camera
      p(style="line-height: 1.7em;") State transition diagram In this diagram, a model of the flow between operational modes becomes visible.
      p(style="line-height: 1.7em;") Note that the transition conditions of the state machine must involve only available control flow signals.
      .center
        img(src='./assets/cap2/fig2_17.png' height="400px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 10px;") Example product: autofocus camera
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">Data dictionary.</b> <br>In this concise representation, all data flows are described in more detail <br>(D = data flow, C = control flow).
      .center
        img(src='./assets/cap2/fig2_18.png' height="450px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 10px;") Example product: autofocus camera
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">Design variants</b> <br>Two different design variants for Function F2 <b>focus_lens</b>. <br>In the two cases, the same functional characteristics are realized using different technologies. <br>This fact can be used to justify, for example, the design decision to use two microcontrollers.
      .center
        img(src='./assets/cap2/fig2_19.png' height="310px" style="margin-right: 30px;")
        img(src='./assets/cap2/fig2_20.png' height="310px" style="margin-right: 30px;")
      

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 10px;") Example product: autofocus camera
      p The important aspect here is the assignment of functions and data flows of the DFD to device elements. This makes clear which tasks are fulfilled by these elements. 
      p Additionally, this directly specifies the hardware interfaces along with their data contents. Note that it is only at this point that physical modeling can begin as it is here that candidates for concrete device technologies—e.g. a DC motor or piezoelectric motor—become known. 
      p The specification of particular device elements in this example is clearly based on the defined functions as a concretization of user requirements.
    
    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 10px;") Alternative modeling methods
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">Object-oriented system modeling with UML</b>
      p(style="line-height: 1.7em;") Unified Modeling Language (UML) In addition to the above-mentioned structured analysis with real-time extensions (SA/RT), the only real alternative—due to its engineering-oriented approach and wide international acceptance—for comprehensive system modeling in the object-oriented paradigm is the Unified Modeling Language (UML).
      
    
    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 10px;") Alternative modeling methods
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">UML model elements.</b> The semi-formal modeling elements of UML offer the possibility of depicting structural and dynamic system layers in the following diagram types:
        ul 
          li <b>Structure Diagrams:</b> Class Diagram, Object Diagram, Profile Diagram, Package Diagram,
          li <b>Architecture Diagrams</b> (derived subgroup of structure diagrams): Composite Structure Diagram, Component Diagram, Subsystem Diagram, Deployment Diagram,
          li <b>Behavior Diagrams</b>: Activity Diagram, Use Case Diagram, State Machine Diagram (a special type of State Machine Diagram is the so-called Protocol State Machine),
          li <b>Interaction Diagrams</b> (derived from Behavior Diagrams): Sequence Diagram, Communication Diagram, Timing Diagram, Interaction Overview Diagram.
      p(style="line-height: 1.7em;") UML is particularly well-suited to modeling and specification of complex systems and is primarily employed in software development. <br>Since 1997, UML has been an international standard and is supported with an excellent selection of computer-aided tools (primarily for software design, though equally suited to general systems design).
    
    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 10px;") Alternative modeling methods
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">Model-based systems design</b><br>An alternative approach—which is increasingly experiencing great popularity among mechatronics users (particularly in the automotive industry)—is so-called model-based systems design. 
      p In general, this approach does not encompass qualitative system modeling in the above sense, but rather quantitative hybrid system models, with mixed discrete event and continuous dynamics. 
      p For the modeling of flow-oriented properties, generalized state machines are used in combination with descriptive languages employing block diagrams (e.g. STATEFLOW / SIMULINK). <br>As a result of the hierarchical structure of these tools, structural characteristics can be depicted with hierarchical subsystems (SIMULINK) and can be coupled with flow-oriented model components (STATEFLOW).
    
    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : System Modeling with Structured Analysis</sup>
      h5.center(style="margin-top: 10px;") Alternative modeling methods
      p(style="line-height: 1.7em;") <b style="font-size: 1.5em;">Model-based systems design</b><br>Given consistent modeling, the descriptive elements of structured analysis (the data flow diagram and the state transition diagram) can, to a certain extent, be transformed into executable models. 
      p They thus result in executable specifications, which can be continually refined throughout the design process. 
      p For example, purely written PSPECs can be used in the form of text comments in SIMULINK blocks, and can be replaced step by step with mathematical functions (transfer functions, state machines, etc.) during the course of the design process in an evolution of system models.

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
    description: 'modelado en mecatrónica',
    path: 'mecatronica-computacional-modelado'
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
