<template lang="pug">
#TemperatureHeat.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false')
      .center.frontpage
        h2 Vision Systems
        img(src='./assets/U.svg')
        p Morphological filters
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>

    slide(:steps=6, enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Topics</sup>
      h6(style="margin-top: -20px;")
        | Topics on Morphological Filters
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 2")
            <b>Shrink and Let Grow</b><br><span style="font-size: 0.7em;">Neighborhood of Pixels</span>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 3")
            <b>Basic Morphological Operations</b><br><span style="font-size: 0.7em;">The Structuring Element, Point Sets, Dilation, Erosion, Formal Properties of Dilation and Erosion, Designing Morphological Filters</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 4")
            <b>Composite Morphological Operations</b><br><span style="font-size: 0.7em;">Opening, Closing, Properties of Opening and Closing</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 5")
            <b>Thinning (Skeletonization)</b><br><span style="font-size: 0.7em;">Thinning Algorithm by Zhang and Suen, Fast Thinning Algorithm.</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 6")
            <b>Grayscale Morphology</b><br><span style="font-size: 0.7em;">Structuring Elements, Dilation and Erosion, Grayscale Opening and Closing</span>

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h2(style="margin: -20px 0 0 0; ").center Morphological filters
      p Remember the median filter?, we noticed that this type of filter can somehow alter 2D image structures.
      .center
        img(src='./assets/chap10/p173-fig10-1.png' height="200px" style="margin-right: 50px;")
      p Corners are rounded off, holes of a certain size are filled, and small structures, such as single dots or thin lines, are removed.
      p  The median filter thus responds selectively to the local shape of image structures.
      p Altering the local structure in a predictable way is exactly what “morphological” filters can do.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h4(style="margin: -0px 0 0 0").center Morphological filters
      p In their original form, morphological filters are aimed at binary images, images with only two possible pixel values, <b>0</b> and <b>1</b> or <b>black</b> and <b>white</b>, respectively.
      p Binary images are found in many places, in particular in digital printing, document transmission (FAX) and storage, or as selection masks in image and video editing.
      p Binary images can be obtained from grayscale images by simple thresholding using either a global or a locally varying threshold value.
      p We denote binary pixels with values <b>1</b> and <b>0</b> as <b>foreground</b> and <b>background</b> pixels, respectively. In most of the following examples, the foreground pixels are shown in black and background pixels are shown in white, as is common in printing.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h5(style="margin: -0px 0 0 0").center Size-dependent removal
      p Our starting point was the observation that a simple 3×3 pixel median filter can round off larger image structures and remove smaller structures, such as points and thin lines, in a binary image.
      p This could be useful to eliminate structures that are below a certain size.
      .center
        img(src='./assets/chap10/p174-fig10-2.png' height="300px")
      p But how can we control the size and possibly the shape of the structures affected by such an operation?

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h4.center(style="margin-top: -10px;") Shrink and let go
      p All we need for this are two types of operations.
      p “<b>Shrinking</b>” means to remove a layer of pixels from a foreground region around all its borders against the background.
      p The other way around,  “<b>growing</b>”, adds a layer of pixels around the border of a foreground region.
      .center
        img(src='./assets/chap10/p175-fig10-3.png' height="160px")
      .center
        img(src='./assets/chap10/p175-fig10-4.png' height="150px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h5(style="margin-top: -30px;").center Neighborhood of Pixels
      p For both operations, we must define the meaning of two pixels being adjacent.
      p Two definitions of “neighborhood” are commonly used for rectangular pixel grids:
      ul
        li 4-neighborhood (<b>N4</b>): the four pixels adjacent to a given pixel in the horizontal and vertical directions;
        li 8-neighborhood (<b>N8</b>): the pixels contained in N4 plus the four adjacent pixels along the diagonals.
      .center
        img(src='./assets/chap10/p176-fig10-5.png' height="200px")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h4.center(style="margin-top: -10px;") Basic Morphological Operations
      p Shrinking and growing are indeed the two most basic morphological operations, which are referred to as “erosion” and “dilation”, respectively.
      p These morphological operations go well beyond removing or attaching single pixel layers and—in combination—can perform much more complex operations.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h4.center(style="margin-top: -10px;") The Structuring Element
      p Similar to the coefficient matrix of a linear filter, the properties of a morphological filter are specified by elements in a matrix called a “structuring element”.
      p In binary morphology, the structuring element contains only the values 0 and 1,
      .center
        img(src='./assets/chap10/p176-math-a.png' height="50px")
      p and the <b>hot spot</b> marks the origin of the coordinate system of H.
      .center
        img(src='./assets/chap10/p176-fig10-6.png' height="100px")
      p Notice that the hot spot is not necessarily located at the center of the structuring element, nor must its value be 1.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h5.center(style="margin-top: -10px;") Point Sets
      p For the formal specification of morphological operations, it is sometimes helpful to describe binary images as sets of 2D coordinate points.
      p For a binary image <b class="math">I(u, v) ∈ {0, 1}</b>, the corresponding point set <b class="math" >Q<sub>I</sub></b> consists of the coordinate pairs <b class="math">p = (u, v)</b> of all foreground pixels,
      .center
        img(src='./assets/chap10/p176-eqn10-1.png' height="50px" style="margin-top: -20px;")
      p Of course, not only a binary image <span class="math">I</span> but also a structuring element <span class="math">H</span> can be described as a point set.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h4.center(style="margin-top: -10px;") Point Sets
      .center
        img(src='./assets/chap10/p177-fig10-7.png' height="200px" style="margin-top: -50px;")
      p(style="margin-top: 30px;") Fundamental operations can be expressed as simple set operations. For example, inverting a binary image <span class="math">I → &Imacr;</span> is equivalent to building the complementary set
      .center
        img(src='./assets/chap10/p176-eqn10-2.png' height="60px" style="margin-top: -20px;")
      p(style="margin-top: 30px;") Combining two binary images <span class="math">I<sub>1</sub></span> and <span class="math">I<sub>2</sub></span> by an OR operation results in the union of the individual point sets <span class="math">Q<sub>I<sub>1</sub></sub></span> and <span class="math">Q<sub>I<sub>2</sub></sub></span>; that is,
      .center
        img(src='./assets/chap10/p176-eqn10-3.png' height="60px" style="margin-top: -20px;")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h4.center(style="margin-top: -10px;") Point sets
      p <b>Translating</b> (shifting) a binary image <span class="math">I</span> by some coordinate vector <span class="math">d</span> creates a new image with the content
      .center
        img(src='./assets/chap10/p177-eqn10-4.png' height="50px" style="margin-top: -20px;")
      p In some cases, it is also necessary to reflect (mirror) a binary image or point set about its origin, which we denote as
      .center
        img(src='./assets/chap10/p177-eqn10-5.png' height="50px" style="margin-top: -20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h5.center(style="margin-top: -10px;") Dilation
      p A dilation is the morphological operation that corresponds to our intuitive concept of “<b>growing</b>”.
      p As a set operation, it is defined as
      .center
        img(src='./assets/chap10/p177-eqn10-6.png' height="50px" style="margin-top: -20px;")
      p Thus the point set produced by a dilation is the (vector) sum of all possible pairs of coordinate points from the original sets <span class="math">I</span> and <span class="math">H</span>.
      .center
        img(src='./assets/chap10/p178-fig10-8.png' height="350px" style="margin-top: -20px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h5.center(style="margin-top: -10px;") Dilation
      p Alternatively, one could view the dilation as the structuring element <span class="math">H</span> being replicated at each foreground pixel of the image <span class="math">I</span> or, conversely, the image <span class="math">I</span> being replicated at each foreground element of <span class="math">H</span>.
      .center
        img(src='./assets/chap10/p177-eqn10-7.png' height="80px" style="margin-top: -20px;")
      p with <span class="math">H<sub>p</sub></span>, <span class="math">I<sub>q</sub></span> denoting the sets <span class="math">H</span>, <span class="math">I</span> shifted by <span class="math">p</span> and <span class="math">q</span>, respectively

    slide.boredYet(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h5.center(style="margin-top: -10px;") Erosion
      p The quasi-inverse of dilation is the erosion operation, again defined in set notation as
      .center
        img(src='./assets/chap10/p178-eqn10-8.png' height="50px" style="margin-top: -20px;")
      p Equivalently we could thus define binary erosion as
      .center
        img(src='./assets/chap10/p178-eqn10-9.png' height="50px" style="margin-top: -20px;")
      .center
        img(src='./assets/chap10/p179-fig10-9.png' height="300px" style="margin-top: -20px;")

      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
        br
        span.small  Ctrl + left
      .button.next(@click.stop='nextSlide')
        span Next slide &gt;
        br
        span.small Ctrl + right

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h5.center(style="margin-top: -10px;") Formal Properties of Dilation and Erosion
      p The dilation operation is commutative,
      .center
        img(src='./assets/chap10/p178-eqn10-10.png' height="50px" style="margin-top: 0px;")
      p Dilation is also associative, that is,
      .center
        img(src='./assets/chap10/p178-eqn10-11.png' height="50px" style="margin-top: 0px;")
      p then
      .center
        img(src='./assets/chap10/p178-eqn10-12.png' height="50px" style="margin-top: 0px;")
      p There is also a neutral element (δ) for the dilation operation,
      .center
        img(src='./assets/chap10/p179-eqn10-13.png' height="50px" style="margin-top: 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h5.center(style="margin-top: -10px;") Formal Properties of Dilation and Erosion
      p The erosion operation is not commutative,
      .center
        img(src='./assets/chap10/p179-eqn10-14.png' height="50px" style="margin-top: 0px;")
      p However, if erosion and dilation are combined, then the following chain rule holds:
      .center
        img(src='./assets/chap10/p179-eqn10-15.png' height="50px" style="margin-top: 0px;")
      p Although dilation and erosion are not mutually inverse
      .center
        img(src='./assets/chap10/p179-eqn10-16.png' height="50px" style="margin-top: 0px;")
      p This works similarly the other way, too, namely
      .center
        img(src='./assets/chap10/p179-eqn10-17.png' height="50px")



    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h4.center(style="margin-top: -10px;") Formal Properties of Dilation and Erosion
      .center
        img(src='./assets/chap10/p180-fig10-10.png' height="600px")

    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
    //-   h5.center(style="margin-top: -10px;") Dilation erosion algorithms
    //-   .center
    //-     img(src='./assets/chap10/p180-alg10-1.png' height="600px" style="margin-top: -30px;")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h5.center(style="margin-top: -10px;") Designing Morphological Filters
      p A morphological filter is unambiguously specified by
      p (a) the type of operation and
      p (b) the contents of the structuring element.
      p The appropriate size and shape of the structuring element depends upon the application, image resolution, etc.
      .center
        img(src='./assets/chap10/p181-fig10-11.png' height="250px" style="margin-top: 30px;")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h5.center(style="margin-top: -10px;") Designing Morphological Filters
      .center
        img(src='./assets/chap10/p181-fig10-12.png' height="150px" style="margin: -20px 0 -20px 0;")
      .center
        img(src='./assets/chap10/p182-fig10-13.png' height="600px" style="margin: 20px 0 0px 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h5.center(style="margin-top: -10px;") Designing Morphological Filters
      .center
        img(src='./assets/chap10/p183-fig10-14.png' height="700px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h4.center(style="margin-top: -10px;") Application Example: Outline
      p A typical application of morphological operations is to extract the boundary pixels of the foreground structures.
      p The process is very simple. First, we apply an erosion on the original image I to remove the boundary pixels of the foreground,
      .center
        img(src='./assets/chap10/p181-math-a.png' height="50px" :mouseNavigation='false')
      p The actual boundary pixels B are those contained in the original image but not in the eroded image, that is,
      .center
        img(src='./assets/chap10/p182-eqn10-18.png' height="50px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h5.center Application Example: Outline
      p Structuring elements
      .center
        img(src='./assets/chap10/p184-fig10-16.png' height="500px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h5.center Application Example: Outline
      p Result
      .center
        img(src='./assets/chap10/p185-fig10-17.png' height="500px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h5.center Composite Morphological Operations
      p Due to their semiduality, dilation and erosion are often used together in composite operations, two of which are so important that they even carry their own names and symbols: “opening” and “closing”.
      p They are probably the most frequently used morphological operations in practice.
      h5.center Opening
      p A binary opening I ◦H denotes an erosion followed by a dilation with the same structuring element H,
      .center
        img(src='./assets/chap10/p185-eqn10-20.png' height="50px")
      p The main effect of an opening is that all foreground structures that are smaller than the structuring element are eliminated in the first step (erosion).

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h5.center(style="margin-top: 0px;") Composite Morphological Operations
      p When the sequence of erosion and dilation is reversed, the resulting operation is called a closing and denoted I • H,
      .center
        img(src='./assets/chap10/p185-eqn10-21.png' height="70px")
      p A closing removes (closes) holes and fissures in the foreground structures that are smaller than the structuring element H.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h5.center(style="margin-top: 0px;") Composite Morphological Operations
      .center
        img(src='./assets/chap10/p186-fig10-18.png' height="700px")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Morphological filters</sup>
      h5.center(style="margin-top: 20px;") Properties of Opening and Closing
      p Both operations, opening as well as closing, are idempotent, meaning that their results are “final” in the sense that any subsequent application of the same operation no longer changes the result, that is,
      .center
        img(src='./assets/chap10/p186-eqn10-22.png' height="70px")
      p Also, opening and closing are “duals” in the sense that opening the foreground is equivalent to closing the background and vice versa, that is,
      .center
        img(src='./assets/chap10/p186-eqn10-23.png' height="50px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h5(style="margin-top: -0px;").center Thinning (Skeletonization)
      p Thinning is a common morphological technique which aims at shrinking binary structures down to a maximum thickness of one pixel without splitting them into multiple parts.
      p This is accomplished by iterative “conditional” erosion. It is applied to a local neighborhood only if a sufficiently thick structure remains and the operation does not cause a separation to occur.
      p This requires that, depending on the local image structure, a decision must be made at every image position whether another erosion step may be applied or not. The operation continues until no more changes appear in the resulting image.
      P A frequent application of thinning is to calculate the “skeleton” of a binary region.
      p Thinning is also known by the terms center line detection and medial axis transform.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h5.center(style="margin-top: 0px;") Thinning Algorithm by Zhang and Suen
      p The input to this algorithm is a binary image I, with foreground pixels as 1 and background pixels as 0.
      p The algorithm scans the image and at each (u, v) examines a 3×3 neighborhood with the central element P and the surrounding values N = (N0,N1, . . .,N7).
      p For classifying the contents of the local neighborhood N we first define
      .center
        img(src='./assets/chap10/BN.png' height="100px")
      p We also define the so-called “connectivity number”.
      .center
        img(src='./assets/chap10/cn.png' height="70px")
      .center
        img(src='./assets/chap10/3x3Filters.png' height="80px")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h5.center(style="margin-top: 0px;") Thinning Algorithm by Zhang and Suen
      p Based on the above functions, we finally define two Boolean predicates R1,R2 on the neighborhood N,
      .center
        img(src='./assets/chap10/Rn.png' height="200px")
      p Depending on the outcome of R1(N) and R2(N), the foreground pixel at the center position of N is either deleted or marked as non-removable.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h5.center(style="margin-top: 0px;") Thinning Algorithm by Zhang and Suen
      .center
        img(src='./assets/chap10/RH.png' height="300px")
      .center
        img(src='./assets/chap10/rhino.png' height="450px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h5.center(style="margin-top: -10px;") Fast Thinning Algorithm
      p In a binary image, only 2<sup>8</sup> = 256 different combinations of zeros and ones are possible inside any 8-neighborhood.
      p Since former equations are relatively costly to evaluate it makes sense to pre-calculate and tabulate all 256 instances.
      p This is the basis of the fast version of Zhang and Suen’s algorithm.
      p It uses a decision table Q, which is constant and calculated only once.
      p The table contains the binary codes
      p.center Q(i) ∈ {0, 1, 2, 3} = {00<sub>b</sub>, 01<sub>b</sub>, 10<sub>b</sub>, 11<sub>b</sub>},
      p for i = 0, . . . , 255,
      p where the two bits correspond to the predicates R1 and R2, respectively.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h5.center(style="margin-top: 20px;") Fast Thinning Algorithm
      .center
        img(src='./assets/chap10/table1.png' height="600px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h5.center(style="margin-top: 20px;") Fast Thinning Algorithm
      .center
        img(src='./assets/chap10/table2.png' height="600px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h5.center(style="margin-top: -10px;") Grayscale Morphology
      p Morphological operations are not confined to binary images but are also for intensity (grayscale) images.
      p In fact, the definition of grayscale morphology is a generalization of binary morphology, with the binary OR and AND operators replaced by the arithmetic MAX and MIN operators, respectively.
      p As a consequence, procedures designed for grayscale morphology can also perform binary morphology.
      p In the case of color images, the grayscale operations are usually applied individually to each color channel.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h5.center Grayscale Morphology
      p Unlike in the binary scheme, the structuring elements for grayscale morphology are not defined as point sets but as real-valued 2D functions, that is,
      .center
          img(src='./assets/chap10/p187-math-a.png' height="50px")
      p The values in H may be negative or zero. Notice, however, that, in contrast to linear convolution, zero elements in grayscale morphology generally do contribute to the result. The design of structuring elements for grayscale morphology must therefore distinguish explicitly between cells containing the value 0 and empty (“don’t care”) cells, for example,
      .center
          img(src='./assets/chap10/p187-eqn10-24.png' )

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h5.center Grayscale Dilation and Erosion
      p The result of grayscale dilation I ⊕ H is defined as the maximum of the values in H added to the values of the current subimage of I, that is,
      .center
          img(src='./assets/chap10/p187-eqn10-25.png' height="50px")
      p Similarly, the result of grayscale erosion is the minimum of the differences,
      .center
          img(src='./assets/chap10/p187-eqn10-26.png' height="50px")
      .center
          img(src='./assets/chap10/p188-fig10-19.png' height="300px" style="margin-right: 40px;")
          img(src='./assets/chap10/p188-fig10-20.png' height="300px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h5.center Grayscale Dilation and Erosion
      p(style="margin-top: -30px;")
      .center
          img(src='./assets/chap10/p189-fig10-21.png' height="700px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h5.center Grayscale Opening and Closing
      p Opening and closing on grayscale images are defined, identical to the binary case, as operations composed of dilation and erosion with the same structuring element.
      p Notice that interesting effects can be obtained, particularly from structuring elements resembling the shape of brush or other stroke patterns.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h5.center Grayscale Opening and Closing
      .center
          img(src='./assets/chap10/p191-fig10-23.png' height="700px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h5.center Grayscale Opening and Closing
      .center
          img(src='./assets/chap10/p190-fig10-22.png' height="700px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Morphological filters</sup>
      h5.center Grayscale Opening and Closing
      .center
          img(src='./assets/chap10/p192-fig10-24.png' height="700px")

    slide(enter='bounceInDown' :mouseNavigation='false')
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
    description: '9.- Morphological filters',
    path: 'vision-systems-morph',
    course: 'Vision Systems',
    part: null
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
  font-style: italic;
  font-weight: bold;

  sub {
    font-size: 0.7em;
  }
}
</style>
