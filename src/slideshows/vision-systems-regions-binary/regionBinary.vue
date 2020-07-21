<template lang="pug">
#TemperatureHeat.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h1 Vision Systems
        img(src='./assets/U.svg')
        h4 Regions in binary images
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')

    slide(:steps=6, enter='bounceInRight' leave='bounceOutDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Topics</sup>
      h6(style="margin-top: -50px;")
        | Topics on Regions in binary Images
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 2")
            <b>Finding Connected Image Regions</b><br><span style="font-size: 0.7em;">Region Labeling by Flood Filling, Sequential Region Labeling, Region Labeling—Summary</span>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 3")
            <b>Region Contours</b><br><span style="font-size: 0.7em;">External and Internal Contours, Combining Region Labeling and Contour Finding</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 4")
            <b>Representing Image Regions</b><br><span style="font-size: 0.7em;"> Matrix Representation, Run Length Encoding, Chain Codes</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 5")
            <b>Properties of Binary Regions</b><br><span style="font-size: 0.7em;">Shape Features, Geometric Features</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 6")
            <b>Statistical Shape Properties</b><br><span style="font-size: 0.7em;"> Centroid, Moments, Central Moments, Normalized Central Moments</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 6")
            <b>Moment-Based Geometric Properties</b><br><span style="font-size: 0.7em;">Orientation, Eccentricity, Bounding Box Aligned to the Major Axis, Invariant Region Moments</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 6")
            <b>Projections</b><br><span style="font-size: 0.7em;">Topological Region Properties</span>

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h2(style="margin: -20px 0 0 0; ").center Regions in Binary Images
      p Now we study connected regions in images and how to isolate  and describe such structures.
      p Let us assume that our task is to devise a procedure for finding the number and type of objects contained in an image.
      .center
        img(src='./assets/chap11/p199-fig11-1.png' height="200px" style="margin-right: 50px;")
      p As long as we continue to consider each pixel in isolation, we will not be able to determine how many objects there are overall in the image, where they are located, and which pixels belong to which objects.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h4(style="margin: -0px 0 0 0").center Finding Connected Image Regions
      p In the search for binary regions, the most important tasks are to find out which pixels belong to which regions, how many regions are in the image, and where these regions are located.
      p These steps usually take place as part of a process called region labeling or region coloring.
      p During this process, neighboring pixels are pieced together in a stepwise manner to build regions in which all pixels within that region are assigned a unique number (“label”) for identification.


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5(style="margin: -0px 0 0 0").center Finding Connected Image Regions
      p Independent of which of the method we use, we must first settle on either the 4- or 8-connected definition of neighboring for determining when two pixels are “connected” to each other, since under each definition we can end up with different results.
      p In the following, we use the following convention: the original binary image I(u, v) contains the values 0 and 1 to mark the background and foreground, respectively; any other value is used for numbering (labeling) the regions, that is, the pixel values are
      .center
        img(src='./assets/chap11/p200-math-a.png' height="100px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h4.center(style="margin-top: -10px;") Region Labeling by Flood Filling
      p The underlying algorithm for region marking by flood filling is simple:
      p search for an unmarked foreground pixel and then fill (visit and mark) all the rest of the neighboring pixels in its region.
      .center
        img(src='./assets/chap11/regionLabeling.png' height="250px" style="margin-top: -20px;")
      p This operation is called a “flood fill” because it is as if a flood of water erupts at the start pixel and flows out across a flat region.
      p There are various methods for carrying out the fill operation that ultimately differ in how to select the coordinates of the next pixel to be visited during the fill.


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5(style="margin-top: -30px;").center Region Labeling by Flood Filling
      p A. Recursive Flood Filling:
      .center
        img(src='./assets/chap11/floodFillRecursive.png' height="250px" style="margin-top: -20px;")
      p The recursive version does not make use of explicit data structures to keep track of the image coordinates but uses the local variables that are implicitly allocated by recursive procedure calls.
      p Within each region, a tree structure, rooted at the starting point, is defined by the neighborhood relation between pixels.
      p Unfortunately, since the maximum depth of the recursion—and thus the size of the required stack memory—is proportional to the size of the region.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h4.center(style="margin-top: -10px;") Region Labeling by Flood Filling
      p B. Iterative Flood Filling (depth-first):
      .center
        img(src='./assets/chap11/floodFillDepthFirst.png' height="250px" style="margin-top: -20px;")
      p Every recursive algorithm can also be reformulated as an iterative algorithm by implementing and managing its own stacks.
      p In this case, the stack records the “open” (that is, the adjacent but not yet visited) elements.
      p As in the recursive version (A), the corresponding tree of pixels is traversed in depth-first order.
      p By making use of its own dedicated stack (which is created in the much larger heap memory), the depth of the tree is no longer limited to the size of the call stack.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h4.center(style="margin-top: -10px;") Region Labeling by Flood Filling
      p C. Iterative Flood Filling (breadth-first):
      .center
        img(src='./assets/chap11/floodFillBreadthFirst.png' height="250px" style="margin-top: -20px;")
      p In this version, pixels are traversed in a way that resembles an expanding wave front propagating out from the starting point.
      p The data structure used to hold the as yet unvisited pixel coordinates is in this case a queue instead of a stack, but otherwise it is identical to version B.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h4.center(style="margin-top: -10px;") Region Labeling by Flood Filling
      .center
        img(src='./assets/chap11/p205-fig11-2.png' height="600px" style="margin-top: -20px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h5.center(style="margin-top: -10px;") Sequential Region Labeling
      p Sequential region marking is a classical, nonrecursive technique that is known in the literature as “region labeling”.
      p The algorithm consists of two steps:<br> (1) preliminary labeling of the image regions and<br> (2) resolving cases where more than one label occurs (i.e., has been assigned in the previous step) in the same connected region.
      p Even though this algorithm is relatively complex, especially its second stage, its moderate memory requirements make it a good choice under limited memory conditions.
      p However, this is not a major issue on modern computers and thus, in terms of overall efficiency, sequential labeling offers no clear advantage over the simpler methods described earlier.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h4.center(style="margin-top: -10px;") Sequential Region Labeling
      p The sequential technique is nevertheless interesting (not only from a historic perspective) and inspiring. The complete process is summarized with the following main steps:
      h5.center Step 1: Initial labeling
      p In the first stage of region labeling, the image is traversed from top left to bottom right sequentially to assign a preliminary label to every foreground pixel.
      p Depending on the definition of neighborhood (either 4- or 8-connected) used, the following neighbors in the direct vicinity of each pixel must be examined (× marks the current pixelat the position (u, v)).


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h4.center(style="margin-top: -10px;") Sequential Region Labeling
      h5.center Step 1: Initial labeling
      p Propagating region labels
      .center
        img(src='./assets/chap11/p208-fig11-3a.png' height="200px" style="margin-top: -20px;")
      .center
        img(src='./assets/chap11/p208-fig11-3b.png' height="300px" style="margin-top: 50px;")

    slide(:steps=1, enter='bounceInDown' )
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h5.center(style="margin-top: -10px;")  Sequential Region Labeling
      h5.center Step 1: Initial labeling
      .center
        img(src='./assets/chap11/p208-fig11-3c.png' height="250px" style="margin-top: -20px;")
      .center
        img(src='./assets/chap11/p208-fig11-3d.png' height="250px" style="margin-top: 50px;")

    slide(:steps=1, enter='bounceInDown' )
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h5.center(style="margin-top: -10px;") Sequential Region Labeling
      h5.center Step 1: Initial labeling
      p Collision labels are regitered
      .center
        img(src='./assets/chap11/p209-fig11-4.png' height="250px" style="margin-top: 50px;")


    slide(:steps=1, enter='bounceInDown' )
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h5.center(style="margin-top: -10px;") Sequential Region Labeling
      p Step 2: Resolving label collisions
      p The task in the second step is to resolve the label collisions that arose in the first step in order to merge the corresponding “partial” regions.
      p This process is nontrivial since it is possible for two regions with different labels to be connected transitively (e.g., (a, b)∩(b, c) ⇒ (a, c) ) through a third region or, more generally, through a series of regions.
      .center
        img(src='./assets/chap11/p209-fig11-5.png' height="250px" style="margin-top: 50px;")

    slide(:steps=1, enter='bounceInDown' )
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h5.center(style="margin-top: -10px;") Sequential Region Labeling
      .center
        img(src='./assets/chap11/p210-fig11-6a.png' height="300px" style="margin-top: 0px;")
      .center
        img(src='./assets/chap11/p210-fig11-6b.png' height="300px" style="margin-top: 0px;")

    slide(:steps=1, enter='bounceInDown' )
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h5.center(style="margin-top: -10px;") Sequential Region Labeling
      .center
        img(src='./assets/chap11/sequentialLabelling.png' height="700px" style="margin-top: 0px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h4.center(style="margin-top: -10px;") Sequential Region Labeling
      .center
        img(src='./assets/chap11/resolveCollisions.png' height="350px")
      .center
        img(src='./assets/chap11/relabel.png' height="240px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h4.center(style="margin-top: -10px;") Region Contours
      p Once the regions in a binary image have been found, the next step is often to find the contours (that is, the outlines) of the regions.
      p Like so many other tasks in image processing, at first glance this appears to be an easy one: simply follow along the edge of the region.
      p We will see that, in actuality, describing this apparently simple process algorithmically requires careful thought, which has made contour finding one of the classic problems in image analysis.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h5.center(style="margin-top: -10px;") Region Contours
      p In this section, we will develop an algorithm for obtaining an ordered sequence of border pixel coordinates for describing a region’s contour.
      p Note that connected image regions contain exactly one outer contour, yet, due to holes, they can contain arbitrarily many inner contours.
      p Within such holes, smaller regions may be found, which will again have their own outer contours, and in turn these regions may themselves contain further holes with even smaller regions, and so on in a recursive manner.
      .center
        img(src='./assets/chap11/p211-fig11-7.png' height="300px" style="margin-top: -30px;")



    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h5.center(style="margin-top: -10px;") Region Contours
      p An additional complication arises when regions are connected by parts that taper down to the width of a single pixel.
      p In such cases, the contour can run through the same pixel more than once and from different directions.<br> Therefore, when tracing a contour from a start point xs, returning to the start point is not a sufficient condition for terminating the contour-tracing process.
      .center
        img(src='./assets/chap11/p211-fig11-8.png' height="300px" style="margin-top: -20px;")
      p Other factors, such as the current direction along which contour points are being traversed, must be taken into account.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h5.center(style="margin-top: -10px;") Combining Region Labeling and Contour Finding
      p This method, based on , combines the concepts of sequential region labeling and traditional contour tracing into a single algorithm able to perform both tasks simultaneously during a single pass through the image.
      p It identifies and labels regions and at the same time traces both their inner and outer contours.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h4.center(style="margin-top: -10px;") Combining Region Labeling and Contour Finding
      p step 1. As in the sequential region labeling, the binary image I is traversed from the top left to the bottom right. Such a traversal ensures that all pixels in the image are eventually examined and assigned an appropriate label.
      .center
        img(src='./assets/chap11/contourFindingAB.png' height="350px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h5.center Combining Region Labeling and Contour Finding
      .center
        img(src='./assets/chap11/contourFindingCD.png' height="300px")
      .center
        img(src='./assets/chap11/contourFindingEF.png' height="300px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h5.center Combining Region Labeling and Contour Finding
      .center
        img(src='./assets/chap11/contourFindingGH.png' height="300px")
      .center
        img(src='./assets/chap11/p217-fig11-11.png' height="350px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h4(style="margin-top: 0px;").center Representing Image Regions
      h5.center Matrix Representation
      p A natural representation for images is a matrix in which elements represent the intensity or the color at a corresponding position in the image.
      p One possible disadvantage with this representation is that it does not depend on the content of the image.
      p Regions in an image can be represented using a logical mask in which the area within the region is assigned the value true and the area without the value false.
      p These values can be represented by a single bit, is often referred to as a “bitmap”.
      .center
        img(src='./assets/chap11/p218-fig11-12.png' height="150px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center(style="margin-top: 0px;") Representing Image Regions
      h6 Run Length Encoding
      p In run length encoding (RLE), sequences of adjacent foreground pixels can be represented compactly as “runs”. A run is a maximal length sequence of adjacent pixels of the same type within either a row or a column.
      .center
        img(src='./assets/chap11/p218-math-a.png' height="70px")
      .center
        img(src='./assets/chap11/p218-fig11-13.png' height="250px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h5.center(style="margin-top: 0px;") Representing Image Regions
      h6 Chain Codes
      p Regions can be represented not only using their interiors but also by their contours.
      p Chain codes, which are often referred to as Freeman codes, are a classical method of contour encoding.
      p In this encoding, the contour beginning at a given start point <span class="math">x<sub>s</sub></span> is represented by the sequence of directional changes it describes on the discrete image grid.
      .center
        img(src='./assets/chap11/p219-fig11-14.png' height="250px")


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Regions in Binary Images</sup>
      h5.center(style="margin-top: 20px;") Representing Image Regions
      h6 Differential chain code
      p Directly comparing two regions represented using chain codes is difficult since the description depends on the starting point selected xs, and for instance simply rotating the region by 90º results in a completely different chain code.
      p When using a differential chain code, the situation improves slightly.
      p Instead of encoding the difference in the position of the next contour point, the change in the direction along the discrete contour is encoded.
      .center
        img(src='./assets/chap11/p220-eqn11-2.png' height="70px")
      .center
        img(src='./assets/chap11/p220-math-a.png' height="70px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5(style="margin-top: -0px;").center Properties of Binary Regions
      p Imagine that you have to describe the contents of a digital image to another person over the telephone.
      p <b>One possibility</b>: say the value of each pixel in some agreed upon order. <br><b>A much simpler way</b>: describe the image on the basis of its properties.
      p It is not (yet) possible for a computer to generate these types of descriptions without human intervention.
      p For computers, it is of course simpler to calculate the mathematical properties of an image or region and to use these as the basis for further  classification.
      p Using features to classify, be they images or other items, is a fundamental part of the field of pattern recognition.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center(style="margin-top: 0px;") Shape Features
      p The comparison and classification of binary regions is widely used, for example, in optical character recognition (OCR) and for automating processes.
      p The analysis of binary regions turns out to be one of the simpler tasks for which many efficient algorithms have been developed and used to implement reliable applications that are in use every day.
      p By a feature of a region, we mean a specific numerical or qualitative measure that is computable from the values and coordinates of the pixels that make up the region.
      p The best features are those that are simple to calculate and are not easily influenced (robust) by irrelevant changes,  particularly translation, rotation, and scaling.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center(style="margin-top: 0px;") Shape Features
      h6 Geometric Features
      p A region R of a binary image can be interpreted as a two-dimensional distribution of foreground points pi = (ui, vi) on the discrete plane Z2, that is, as a set
      .center
        img(src='./assets/chap11/p223-math-a.png' height="50px")
      p Most geometric properties are defined in such a way that a region is considered to be a set of pixels that, in contrast to the definition, does not necessarily have to be connected.


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center(style="margin-top: 0px;") Shape Features : Geometric Features
      h6 Perimeter
      p The perimeter of a region R is defined as the length of its outer contour, where R must be connected.
      p Given an 8-connected chain code, the perimeter of the region is arrived at by
      .center
        img(src='./assets/chap11/p223-eqn11-7.png' height="200px")
      p With this conventional method of calculation, the real perimeter P(R) is systematically overestimated. As a simple remedy, an empirical correction factor of 0.95 works satisfactorily even for relatively small regions.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center(style="margin-top: -10px;") Shape Features : Geometric Features
      h6 Area
      p The area of a binary region R can be found by simply counting the image pixels that make up the region, that is,
      .center
        img(src='./assets/chap11/p224-eqn11-9.png' height="50px")
      p The area of a connected region without holes can also be approximated from its closed contour, defined by M coordinate points, using the Gaussian area formula for polygons:
      .center
        img(src='./assets/chap11/p224-eqn11-10.png' height="70px")
      p - Not affected by translation and rotation. <br> - Afected by scaling



    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center(style="margin-top: 20px;") Shape Features : Geometric Features
      h6 Compactness and roundness
      p Compactness is understood as the relation between a region’s area and its perimeter.
      .center
        img(src='./assets/chap11/p224-eqn11-11.png' height="70px")
      p This ratio can thus be used as a feature that is invariant under translation, rotation, and scaling.
      .center
        img(src='./assets/chap11/p225-fig11-15.png' height="200px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center(style="margin-top: 20px;") Shape Features : Geometric Features
      h6 Bounding box
      p The bounding box of a region <b>R</b> is the minimal axis-parallel rectangle that encloses all points of <b>R</b>,
      .center
        img(src='./assets/chap11/p225-eqn11-13.png' height="50px")
      p where <span class="math">u<sub>min</sub></span>, <span class="math">u<sub>max</sub></span> and <span class="math">v<sub>min</sub></span>, <span class="math">v<sub>max</sub></span> are the minimal and maximal coordinate values of all points (<span class="math">ui, vi</span>)∈<span class="math">R</span> in the x and y directions, respectively.
      .center
        img(src='./assets/chap11/p225-fig11-16.png' height="200px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center(style="margin-top: -10px;") Shape Features : Geometric Features
      h6 Convex hull
      p The convex hull is the smallest convex polygon that contains all points of the region R.
      p The convex hull is useful, for example, for determining the convexity or the density of a region.
      p The <b>convexity</b> is defined as the relationship between the length of the convex hull and the original perimeter of the region.
      p <b>Density</b> is then defined as the ratio between the area of the region and the area of its convex hull.
      p The <b>diameter</b>, on the other hand, is the maximal distance between any two nodes on the convex hull.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center Statistical Shape Properties
      p When computing statistical shape properties, we consider a region R to be a collection of coordinate points distributed within a twodimensional space.
      p Since statistical properties can be computed for point distributions that do not form a connected region, they can be applied before segmentation.
      p An important concept in this context are the central moments of the region’s point distribution, which measure characteristic properties with respect to its midpoint or centroid.

    slide.boredYet(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center Statistical Shape Properties : Centroid
      p The centroid or center of gravity of a connected region can be easily visualized.
      p Imagine drawing the region on a piece of cardboard or tin and then cutting it out and attempting to balance it on the tip of your finger.
      p The location on the region where you must place your finger in order for the region to balance is the centroid of the region.
      p The centroid <span class="math">x&#x0304;</span> <span style="font-family: New Times Roman;">= (</span><span style="font-family: New Times Roman;  font-style: italic;">x&#x0304;, y&#x0304;</span><span style="font-family: New Times Roman;">)</span> of a binary (not necessarily connected) region is the arithmetic mean of the pont coordinates <span class="math">x<sub>i</sub></span><span style="font-family: New Times Roman;"> = (</span><span style="font-family: New Times Roman; font-style: italic;">u<sub>i</sub>, v<sub>i</sub></span><span style="font-family: New Times Roman;">)</span>, that is,
      .center
          img(src='./assets/chap11/p226-eqn11-14.png' height="100px")

    slide.boredYet(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center Statistical Shape Properties : Moments
      h6 Moments
      p The formulation of the region’s centroid is only a special case of the more general statistical concept of a moment. Specifically, the expression
      .center
          img(src='./assets/chap11/p226-eqn11-15.png' height="70px")
      p describes the (ordinary) moment of order p, q for a discrete (image) function I(u, v) ∈ R; for example, a grayscale image.

    slide.boredYet(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center Statistical Shape Properties : Central Moments
      p To compute position-independent (translation-invariant) region features, the region’s centroid, which can be determined precisely in any situation, can be used as a reference point.
      p In other words, we can shift the origin of the coordinate system to the region’s centroid <span class="math it">x&#x0304;</span> <span style="font-family: New Times Roman;">= (</span><span style="font-family: New Times Roman;  font-style: italic;">x&#x0304;, y&#x0304;</span><span style="font-family: New Times Roman;">)</span> to obtain the central moments of order <b>p</b>, <b>q</b>:
      .center
          img(src='./assets/chap11/p227-eqn11-20.png' height="70px")

    slide.boredYet(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center Statistical Shape Properties : Normalized Central Moments
      p Central moment values of course depend on the absolute size of the region since the value depends directly on the distance of all region points to its centroid. So, if a 2D shape is scaled uniformly by some factor <b>s ∈ R</b>, its central moments multiply by the factor
      .center
          img(src='./assets/chap11/p227-eqn11-22.png' height="50px")
      p Thus size-invariant “normalized” moments are obtained by scaling with the reciprocal of the area <span class="math">A = μ<sub>00</sub> = m<sub>00</sub></span> raised to the required power in the form
      .center
          img(src='./assets/chap11/p228-eqn11-23.png' height="70px")
      p for (p + q) ≥ 2.

    slide.boredYet(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center Moment-Based Geometric Properties
      p While normalized moments can be directly applied for classifying regions, further interesting and geometrically relevant features can be derived from statistical region moments.
      h6 Orientation
      p Orientation describes the direction of the major axis, that is, the axis that runs through the centroid and along the widest part of the region.
      .center
          img(src='./assets/chap11/p230-fig11-17.png' height="250px")
          img(src='./assets/chap11/p230-fig11-18.png' height="250px")

    slide.boredYet(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center Moment-Based Geometric Properties : Orientation
      p As long as a region exhibits an orientation at all, the direction θ<sub>R</sub> of the major axis can be found directly from the central moments μpq as
      .center
          img(src='./assets/chap11/p228-eqn11-24.png' height="100px")
      p and thus the corresponding angle is
      .center
          img(src='./assets/chap11/p228-eqn11-25.png' height="100px")
      p The angle θ<sub>R</sub> is in the range [−π/2, π/2 ].<br> Orientation measurements based on region moments are very accurate in general.

    slide.boredYet(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center Moment-Based Geom. Prop. : Calculating orientation vectors
      p When visualizing region properties, a frequent task is to plot the region’s orientation as a line or arrow, usually anchored at the center of gravity ¯x = (¯x, ¯y); for example, by a parametric line of the form
      .center
          img(src='./assets/chap11/p229-eqn11-26.png' height="100px")
      p with the normalized orientation vector xd and the length variable λ > 0. The vector <span class="math">x<sub>d</sub></span> can be obtained without using trigonometric functions as follows
      .center
          img(src='./assets/chap11/p230-eqn11-27.png' height="100px")
      p we get (by Pythagora’s theorem)

    slide.boredYet(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center Moment-Based Geom. Prop. : Calculating orientation vectors
      p As long as a region exhibits an orientation at all, the direction θ<sub>R</sub> of the major axis can be found directly from the central moments μpq as
      .center
          img(src='./assets/chap11/p230-math-a.png' height="100px")
      p where A = 2μ<sub>11</sub>(R) and B = μ<sub>20</sub>(R) − μ<sub>02</sub>(R).<br> Using the relations cos2α = 1/2 [1 + cos(2α)] and sin2α = 1/2[1 − cos(2α)],<br> we can compute the normalized orientation vector as
      .center
          img(src='./assets/chap11/p231-eqn11-28.png' height="70px")
      .center
          img(src='./assets/chap11/p231-eqn11-29.png' height="100px")

    slide.boredYet(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center Moment-Based Geom. Prop. : Eccentricity
      p Similar to the region orientation, moments can also be used to determine the “elongatedness” or eccentricity of a region.
      p We adopt the following definition because of its simple geometrical interpretation:
      .center
          img(src='./assets/chap11/p231-eqn11-30.png' height="70px")
      p where a<sub>1</sub> = 2λ<sub>1</sub>, a<sub>2</sub> = 2λ<sub>2</sub> are proportional to the eigenvalues λ<sub>1</sub>, λ<sub>2</sub> (with λ<sub>1</sub> ≥ λ<sub>2</sub>) of the symmetric 2×2 matrix
      .center
          img(src='./assets/chap11/p231-math-a.png' height="50px")
      p with the region’s central moments μ<sub>11</sub>, μ<sub>20</sub>, μ<sub>02</sub>. The values of Ecc are in the range [1,∞), where Ecc = 1 corresponds to a circular disk and elongated regions have values > 1.

    slide.boredYet(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center Moment-Based Geom. Prop. : Eccentricity
      p The value returned by Ecc(R) is invariant to the region’s orientation and size.
      p However, the values a1, a2 contain relevant information about the spatial structure of the region. The lengths of the major and minor axes, ra and rb, are
      .center
          img(src='./assets/chap11/p232-eqn11-31.png' height="50px")
      .center
          img(src='./assets/chap11/p232-eqn11-32.png' height="50px")
      p respectively, with a1, a2 as defined above and |R| being the number of pixels in the region. The parametric equation of this ellipse is
      .center
          img(src='./assets/chap11/p232-eqn11-33.png' height="130px")

    slide.boredYet(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center Moment-Based Geom. Prop. : Eccentricity
      .center
          img(src='./assets/chap11/p232-fig11-19.png' height="500px")

    slide.boredYet(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Regions in Binary Images</sup>
      h5.center Bounding Box Aligned to the Major Axis
      p While the ordinary, x/y axis-aligned bounding box is of little practical use, it useful to find a region’s bounding box that is aligned with its major axis.
      .center
          img(src='./assets/chap11/boxParallelMajorAxis.png' height="500px")

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : References: </sup>
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
    description: 'Regions in binary images',
    path: 'vision-systems-regions-binary'
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

.math{
  font-family: Times New Roman;
}
.bd{
  font-family: Times New Roman;
  font-weight: bold;
}
.it{
  font-family: Times New Roman;
  font-style: italic;
}
  sub {
    font-size: 0.7em;
  }
</style>
