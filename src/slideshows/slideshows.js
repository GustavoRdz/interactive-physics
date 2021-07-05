// This is the list of all slideshows that will be registered on the
// website, don't forget to register your new slideshows in the list:
export default {
  list: [
    require('./oscillatory-motion/OscillatoryMotion'),
    require('./wave-motion/WaveMotion'),
    require('./fluid-mechanics/FluidMechanics'),
    require('./temperature-heat/TemperatureHeat'),
    require('./relativity/Relativity'),
    require('./optics/Optics'),
    require('./photoelectric/photoelectric'),
    require('./atom-physics/Atom-physics'),
    require('./nuclear-physics/Nuclear-physics'),
    require('./introduction/Introduction'),
    require('./exercises-waves/ExercisesWaves'),
    // require('./mecatronica-computacional-modelado/Modelado')
    require('./vision-systems/visionSystems'),
    require('./vision-systems-imagej/imagej'),
    require('./vision-systems-point/pointoperations'),
    require('./vision-systems-spatial-filters/spatialFilters'),
    require('./vision-systems-edges-contours/edgesContours'),
    require('./vision-systems-corner-detection/cornerDetection'),
    require('./vision-systems-morph/morphFilters'),
    require('./vision-systems-regions-binary/regionBinary'),
    require('./vision-systems-fourier/fourier')
    // require('./vision-systems-lab/visionSystemsLab'),
    // require('./comming-soon/CommingSoon')
  ]
}

