<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h2 Vision Systems
        img(src='./assets/U.svg')
        p Edges and contours
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>

    slide(:steps=7, enter='bounceInRight' leave='bounceOutDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Topics</sup>
      h6(style="margin-top: -20px;")
        | Topics on Edges and contours
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 2")
            <b>What Makes an Edge?</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 3")
            <b>Gradient-Based Edge Detection</b><br><span style="font-size: 0.7em;">Partial Derivatives and the Gradient, Derivative Filters</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 4")
            <b>Simple Edge Operators</b><br><span style="font-size: 0.7em;">Prewitt and Sobel Operators, Roberts Operator, Compass Operators</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 5")
            <b>Other Edge Operators</b><br><span style="font-size: 0.7em;"> Edge Detection Based on Second Derivatives, Edges at Different Scales, From Edges to Contours</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 6")
            <b>Canny Edge Operator</b><br><span style="font-size: 0.7em;">Pre-processing, Edge localization, Edge tracing and hysteresis thresholding</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 7")
            <b>Edge Sharpening</b><br><span style="font-size: 0.7em;">Edge Sharpening with the Laplacian Filter, Unsharp Masking.</span>

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges and Contours</sup>
      h2(style="margin: -20px 0 0 0; ").center Edges and Contours
      p Prominent image “events” originating from local changes in intensity or color, such as edges and contours, are of high importance for the visual perception and interpretation of images.
      //- p The perceived amount of information in an image appears to be directly related to the distinctiveness of the contained structures and discontinuities.
      p In fact, edge-like structures and contours seem to be so important for our human visual system that a few lines in a caricature or illustration are often sufficient to unambiguously describe an object or a scene.
      p  It is thus no surprise that the enhancement and detection of edges has been a traditional and important topic in image processing as well.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h4(style="margin: -0px 0 0 0").center What Makes an Edge?
      p Edges and contours play a dominant role in human vision and probably in many other biological vision systems as well.
      p Not only are edges visually striking, but it is often possible to describe or reconstruct a complete figure from a few key lines.
      p But how do edges arise, and how can they be technically localized in an image?
      .center
        img(src='./assets/chap07/p118-fig7-1.png' style="margin-right: 50px;")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5(style="margin: -0px 0 0 0").center What Makes an Edge?
      p Edges can roughly be described as image positions where the local intensity changes distinctly along a  particular orientation.
      p The stronger the local intensity change, the higher is the evidence for an edge at that position.
      p In mathematics, the amount of change with respect to spatial distance is known as the first derivative of a function.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5(style="margin-top: -30px;").center Gradient-Based Edge Detection
      p Starting in only one dimension, assuming that the image contains a single bright region at the center surrounded by a dark background.
      .center
        img(src='./assets/chap07/p118-fig7-2.png' height="150px")
      p In this case, the intensity profile along one image line would look like the 1D function f(x).
      p Taking the first derivative of the function f, f (x) = df dx (x), (6.1)
      .center
        img(src='./assets/chap07/p118-eqn7-1.png' height="70px")
      p results in a positive swing at those positions where the intensity rises and a negative swing where the value of the function drops


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h4.center(style="margin-top: -10px;") Gradient-Based Edge Detection
      p  The first derivative of a continuous function at position x can be interpreted as the slope of its tangent at this position.
      .center
        img(src='./assets/chap07/p119-fig7-3.png' height="150px")
      p One simple method for roughly approximating the slope of the tangent for a discrete function <b>f(u)</b> at position <b>u</b> is to fit a straight line through the neighboring function values <b>f(u−1)</b> and <b>f(u+1)</b>,
      .center
        img(src='./assets/chap07/p119-eqn7-2.png' height="70px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h4.center(style="margin-top: -10px;") Partial Derivatives and the Gradient
      p(style="margin-top: -30px;") A derivative of a multi-dimensional function taken along one of its coordinate axes is called a partial derivative
      .center
        img(src='./assets/chap07/p119-eqn7-3.png' height="70px" style="margin-top: -20px;")
      p are the partial derivatives of the 2D image function I(u, v) along the u and v axes, respectively. The vector
      .center
        img(src='./assets/chap07/p119-eqn7-4.png' height="70px" style="margin-top: -20px;")
      p is called the gradient of the function I at position (u, v). The magnitude of the gradient,
      .center
        img(src='./assets/chap07/p119-eqn7-5.png' height="70px" style="margin-top: -20px;")
      p is invariant under image rotation and thus independent of the orientation of the underlying image structures.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5.center(style="margin-top: -10px;") Derivative Filters
      p The components of the gradient function are simply the first derivatives of the image lines and columns along the horizontal and vertical axes, respectively.
      p The approximation of the first horizontal derivatives can be easily implemented by a linear filter with the <span style="font-family: Times; font-weight: bold;">1D</span> kernel
      .center
        img(src='./assets/chap07/p120-eqn7-6.png' height="50px")
      p(style="margin-top: -10px;") where the coefficients <span style="font-family: Times; font-weight: bold;">−0.5</span> and <span style="font-family: Times; font-weight: bold;">+0.5</span> apply to the image elements <span style="font-family: Times; font-weight: bold;">I(u−1, v)</span> and <span style="font-family: Times; font-weight: bold;">I(u+1, v)</span>, respectively.
      p Notice that the center pixel <span style="font-family: Times; font-weight: bold;">I(u, v)</span> itself is weighted with the zero coefficient and is thus ignored. Analogously, the vertical component of the gradient is obtained with the linear filter
      .center
        img(src='./assets/chap07/p120-eqn7-7.png' height="100px" style="margin-top: -20px;")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h4.center(style="margin-top: -10px;") Derivative Filters
      .center
        img(src='./assets/chap07/p121-fig7-4.png' height="600px" style="margin-top: -20px;")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h4.center(style="margin-top: -10px;") Simple Edge Operators
      p The local gradient of the image function is the basis of many classical edge-detection operators.
      p Practically, they only differ in the type of filter used for estimating the gradient components and the way these components are combined.
      p In many situations, one is not only interested in the strength of edge points but also in the local direction of the edge.
      p Both types of information are contained in the gradient function and can be easily computed from the directional components.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5.center(style="margin-top: -10px;") Prewitt and Sobel Operators
      p The edge operators by Prewitt and Sobel are two classic methods that differ only marginally in the derivative filters they use.
      h6.center Gradient filters
      p(style="margin-top: -40px;") Both operators use linear filters that extend over three adjacent lines and columns, respectively, to counteract the noise sensitivity of the simple (single line/column) gradient operators.
      p The Prewitt operator uses the filter kernels
      .center
        img(src='./assets/chap07/p121-fig7-8.png' height="80px" style="margin-top: -20px;")
      p(style="margin-top: -0px;") which compute the average gradient components across three neighboring lines or columns, respectively. When the filters are written in separated form,
      .center
        img(src='./assets/chap07/p121-eqn7-9.png' height="80px" style="margin-top: -20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5.center(style="margin-top: -10px;") Gradient filters
      p The filters for the Sobel operator are almost identical; however, the smoothing part assigns higher weight to the current center line and column, respectively:
      .center
        img(src='./assets/chap07/p122-eqn7-10.png' height="80px" style="margin-top: -20px;")
      p The estimates for the local gradient components are obtained from the filter results by appropriate scaling, that is,
      .center
        img(src='./assets/chap07/p122-fig7-11.png' height="80px" style="margin-top: -20px;")
      p for the Prewitt operator and
      .center
        img(src='./assets/chap07/p122-eqn7-12.png' height="80px" style="margin-top: -20px;")
      p for the Sobel operator.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h4.center(style="margin-top: -10px;") Edge strength and orientation
      p With the scaled filter results as
      .center
        img(src='./assets/chap07/p122-math-a.png' height="50px" style="margin-top: 0px;")
      p In both cases, the local edge strength <span style="font-family: Times; font-weight: bold;">E(u, v)</span> is defined as the gradient magnitude
      .center
        img(src='./assets/chap07/p122-eqn7-13.png' height="70px" style="margin-top: 0px;")
      p and the local edge orientation angle <span style="font-family: Times; font-weight: bold;">Φ(u, v)</span> is
      .center
        img(src='./assets/chap07/p122-eqn7-14.png' height="70px" style="margin-top: 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5.center(style="margin-top: -10px;") Edge strength and orientation
      p The original image <span style="font-family: Times; font-weight: bold;">I</span> is independently convolved with the two gradient filters <span style="font-family: Times; font-weight: bold;">H<sub>x</sub></span> and <span style="font-family: Times; font-weight: bold;">H<sub>y</sub></span>, and
      p The edge strength <span style="font-family: Times; font-weight: bold;">E</span> and orientation <span style="font-family: Times; font-weight: bold;">Φ</span> are computed from the filter results.
      .center
        img(src='./assets/edgeDir.png' style="margin-top: 0px;")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h4.center(style="margin-top: -10px;") Edge strength and orientation
      .center
        img(src='./assets/edgeProcess.png' height="300px" style="margin-top: 50px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5.center(style="margin-top: -10px;") Edge strength and orientation
      p The estimate of the edge orientation based on the original Prewitt and Sobel filters is relatively inaccurate, and improved versions of the Sobel filters were proposed to minimize the orientation errors:
      .center
        img(src='./assets/chap07/p123-eqn7-15.png' height="150px")
      p These edge operators are frequently used because of their good results and simple implementation.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5.center(style="margin-top: -10px;") Edge strength and orientation
      .center
        img(src='./assets/edgeApplication.png' height="700px" style="margin-top: 0px;")



    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5.center(style="margin-top: -10px;") Roberts Operator
      p As one of the simplest and oldest edge finders, the Roberts operator today is mainly of historic interest. It employs two extremely small filters of size <span style="font-family: Times; font-weight: bold;">2×2</span> for estimating the directional gradient along the image diagonals:
      .center
        img(src='./assets/chap07/p123-eqn7-16.png' height="70px")
      p These filters naturally respond to diagonal edges but are not highly selective to orientation; that is, both filters show strong results over a relatively wide range of angles.
      .center
        img(src='./assets/chap07/p124-fig7-6.png' height="300px" style="margin-top: -30px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h4.center(style="margin-top: -10px;") Roberts Operator
      p The local edge strength is calculated by measuring the length of the resulting <span style="font-family: Times; font-weight: bold;">2D</span> vector, similar to the gradient computation but with its components rotated <span style="font-family: Times; font-weight: bold;">45º</span>.
      .center
        img(src='./assets/chap07/p124-fig7-7.png' height="300px" style="margin-top: 30px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5.center Compass Operators
      p The design of linear edge filters involves a trade-off: the stronger a filter responds to edge-like structures, the more sensitive it is to orientation.
      p In other words, filters that are orientation insensitive tend to respond to nonedge structures, while the most discriminating edge filters only respond to edges in a narrow range of orientations.
      p One solution is to use not only a single pair of relatively “wide” filters for two directions but a larger set of filters with narrowly spaced orientations.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5.center Extended Sobel operator
      p Classic examples are the edge operator proposed by Kirsch and the “extended Sobel” or Robinson operator, which employs the following eight filters with orientations spaced at <span style="font-family: Times; font-weight: bold;">45º</span> :
      .center
        img(src='./assets/compassOperatorMatrices.png')

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Edges</sup>
      h5.center(style="margin-top: 0px;") Extended Sobel operator
      p Only the results of four of these eight filters <span style="font-family: Times; font-weight: bold;">(H<sub>0</sub><sup>ES</sup>  ,H<sub>1</sub><sup>ES</sup>, . . . , H<sub>7</sub><sup>ES</sup>)</span> must actually be computed since the remaining four are identical except for the reversed sign. The convolution being linear, it follows that
      .center
        img(src='./assets/chap07/p124-eqn7-21.png' height="50px")
      p that is, the result for filter <span style="font-family: Times; font-weight: bold;">H<sub>4</sub><sup>S</sup></span> is simply the negative result for filter <span style="font-family: Times; font-weight: bold;">H<sub>0</sub><sup>S</sup></span> . The directional outputs <span style="font-family: Times; font-weight: bold;">D<sub>0</sub>, D<sub>1</sub>, . . . D<sub>7</sub></span> for the eight Sobel filters can thus be computed as follows:
      .center
        img(src='./assets/chap07/p125-eqn7-22.png' height="70px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Edges</sup>
      h5.center(style="margin-top: 0px;") Extended Sobel operator
      p The edge strength ES at position <span style="font-family: Times; font-weight: bold;">(u, v)</span> is defined as the maximum of the eight filter outputs; that is,
      .center
        img(src='./assets/chap07/p125-eqn7-23.png' height="100px")
      p and the strongest-responding filter also determines the local edge orientation as
      .center
        img(src='./assets/chap07/p125-eqn7-24.png' height="70px")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5.center(style="margin-top: 20px;") Kirsch operator
      p Another classic compass operator is the one proposed by Kirsch, which also employs eight oriented filters with the following kernels:
      .center
        img(src='./assets/kirschOperator.png' height="400px")
      p Again, because of the symmetries, only four of the eight filters need to be applied and the results may be combined in the same way as already described for the extended Sobel operator.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5(style="margin-top: -0px;").center Other Edge Operators
      p(style="margin-top: -20px;")  One problem with edge operators based on first derivatives is that each resulting edge is as wide as the underlying intensity transition and thus edges may be difficult to localize precisely.
      h6.center Edge Detection Based on Second Derivatives
      p(style="margin-top: -20px;")  The idea is that edges can be found at zero positions or at the zero crossings of the second derivatives of the image function.
      .center
        img(src='./assets/chap07/p131-fig7-11.png' height="350px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5.center(style="margin-top: 0px;") Edge Detection Based on Second Derivatives
      p Since second derivatives generally tend to amplify image noise, some sort of presmoothing is usually applied with suitable low-pass filters. A popular example is the <span style="font-family: Times; font-weight: bold;">“Laplacian-of-Gaussian” (LoG)</span> operator.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5.center(style="margin-top: 0px;") From Edges to Contours
      p Whatever method is used for edge detection, the result is usually a continuous value for the edge strength for each image position and possibly also the angle of local edge orientation.
      p How can this information be used, for example, to find larger image structures and contours of objects in particular?
      h6.center Binary edge maps
      p The next step after edge enhancement is the selection of edge points, a binary decision about whether an image pixel is an edge point or not.
      p The simplest method is to apply a <b>threshold</b> operation to the edge strength delivered by the edge operator using either a fixed or adaptive threshold value, which results in a binary edge image or “edge map”.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5.center(style="margin-top: 0px;") From Edges to Contours
      p In practice, edge maps hardly ever contain perfect contours but instead many small, unconnected contour fragments, interrupted at positions of insufficient edge strength.
      p After thresholding, the empty positions of course contain no edge information at all that could possibly  be used in a subsequent step, such as for linking adjacent edge segments.
      p Despite this weakness, global thresholding is often used at this point because of its simplicity.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5.center(style="margin-top: -10px;") Contour following
      p The idea of tracing contours sequentially along the discovered edge points is not uncommon and appears quite simple in principle.
      p Starting from an image point with high edge strength, the edge is followed iteratively in both directions until the two traces meet and a closed contour is formed.
      p Unfortunately, there are several obstacles that make this task more difficult than it seems at first, including the following:
      p • edges may end in regions of vanishing intensity gradient,<br>• crossing edges lead to ambiguities, and<br>• contours may branch into several directions.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5.center(style="margin-top: 20px;") Canny Edge Operator
      p The operator proposed by Canny is widely used and still considered “state of the art” in edge detection.
      p The method tries to reach three main goals:<br><br> (a) to minimize the number of false edge points,<br> (b) achieve good localization of edges, and<br> (c) deliver only a single mark on each edge.
      p At its core, the Canny “filter” is a gradient method, but it uses the zero crossings of second derivatives for precise edge localization.
      p Fully implemented, the Canny detector uses a set of relatively large, oriented filters at multiple image resolutions and merges the individual results into a common edge map.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Edges</sup>
      h5.center(style="margin-top: -10px;") Canny Edge Operator
      .center
        img(src='./assets/chap07/p129-fig7-10.png' height="600px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Filters</sup>
      h5.center(style="margin-top: -10px;") Canny Edge Operator
      p In its basic form, the Canny operator performs the following steps:<br><br> 1. <b>Pre-processing</b>: Smooth the image with a Gaussian filter of width <span style="font-family: Times New Roman; font-size: 1em; font-style: italic;"><b>σ</b></span>, which specifies the scale level of the edge detector. Calculate the local gradient magnitude and orientation.<br><br> 2. <b>Edge localization</b>: Isolate local maxima of gradient magnitude by “non-maximum suppression” along the local gradient direction.<br><br> 3. <b>Edge tracing and hysteresis thresholding</b>: Collect sets of connected edge pixels from the local maxima by applying “hysteresis  thresholding”.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Filters</sup>
      h5.center Canny Edge Operator
      p 1.- <b>Pre-processing</b> The original intensity image I is first smoothed with a Gaussian filter kernel <span style="font-family: times; font-weight: bold;">H<sup>G,σ</sup></span>; its width <span style="font-family: times; font-weight: bold;">σ</span> specifies the spatial scale at which edges are to be detected.
      p Subsequently, first-order difference filters are applied to the smoothed image <span style="font-family: times; font-weight: bold;">I</span> to calculate the components <span style="font-family: times; font-weight: bold;">I<sub>x</sub>, I<sub>y</sub></span> of the local gradient vectors.
      p Then the local magnitude <span style="font-family: times; font-weight: bold;">E<sub>mag</sub></span> is calculated as the norm of the corresponding gradient vector.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}: Point Operations and Histograms</sup>
      h3.center 2.- <b>Edge localization</b>
      p Candidate edge pixels are isolated by local “non-maximum suppression” of the edge magnitude <span style="font-family: times; font-weight: bold;">E<sub>mag</sub></span>.
      p In this step, only those pixels are preserved that represent a local maximum along the <span style="font-family: times; font-weight: bold;">1D</span> profile in the direction of the gradient, that is, perpendicular to the edge tangent.
      .center
          img(src='./assets/maximaSuppression.png' )

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}: Point Operations and Histograms</sup>
      h5.center <b>Edge localization</b>
      p The problem of finding the discrete orientations <span style="font-family: times; font-weight: bold;">θ = 0, ..., 3</span> for a given gradient vector <span style="font-family: times; font-weight: bold;">q = (dx, dy)</span>. <br><span style="font-family: times; font-weight: bold;">θ = tan<sup>−1</sup>(dy/dx)</span> is typically avoided for efficiency reasons.
      p With signs of the components of the gradient, the octant is known, and the coordinate system and gradient vector <span style="font-family: times; font-weight: bold;">q</span> are rotated by <span style="font-family: times; font-weight: bold;">π/8</span>.
      .center
          img(src='./assets/octants.png')

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}: Point Operations and Histograms</sup>
      h5.center 3.- <b>Edge tracing and hysteresis thresholding</b>
      p(style="margin-top: -30px;") In the final step, sets of connected edge points are collected from the magnitude values that remained unsuppressed in the previous operation.
      p(style="margin-top: 20px;") This is done with a technique called “hysteresis thresholding” using two different threshold values , <span style="font-family: times; font-weight: bold;">t<sub>lo</sub> (with t<sub>hi</sub> > t<sub>lo</sub>)</span>.
      p(style="margin: 20px 0 0 0;") The image is scanned for pixels with edge magnitude <span style="font-family: times; font-weight: bold;">E<sub>nms</sub>(u, v) ≥ t<sub>hi</sub></span>.
      p(style="margin: 20px 0 0 0;") A new edge trace is started and all connected edge pixels <span style="font-family: times; font-weight: bold;">(u', v')</span> are added to it as long as <span style="font-family: times; font-weight: bold;">E<sub>nms</sub>(u', v') ≥ t<sub>lo</sub></span>.
      p(style="margin: 20px 0 0 0;") Only those edge traces remain that contain at least one pixel with edge magnitude greater than <span style="font-family: times; font-weight: bold;">t<sub>hi</sub></span> and no pixels with edge magnitude less than <span style="font-family: times; font-weight: bold;">t<sub>lo</sub></span>.
      p(style="margin: 20px 0 0 0;") Typical threshold values for 8-bit grayscale images are <span style="font-family: times; font-weight: bold;">t<sub>hi</sub> = 20%</span> and <span style="font-family: times; font-weight: bold;">t<sub>lo</sub> = 5%</span>.


    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: References: {{ slides.length }}</sup>
        h3 References
        ul
          li <b>Digital Image Processing</b><br> <span class="small">An Algorithmic Introduction Using Java</span> <br>Wilhelm Burger and Mark J. Burge<br> Springer
        p.small Slides created by G. Rodríguez-Morales and spheroidGames, gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com with use of images from the above referenced book

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Vision Systems',
    description: '5.- Edges and contours',
    path: 'vision-systems-edges-contours'
  },
  components: {
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
