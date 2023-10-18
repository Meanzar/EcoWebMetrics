const ImageProcessor = require('./imgSizeCalculator');


const directoryPath = "assets";
const maxSize = 1024 * 1024; // 1 Mo (en octets)

const imageProcessor = new ImageProcessor(maxSize);
imageProcessor.browseDirectory(directoryPath);
