// const fs = require("fs");
// const path = require("path");
// const sizeOf = require("image-size");

// const max_ig_size = 1024 * 1024; // 1 Mo (en octets)



// function isImageSizeTooLarge(filePath) {

//     try {
//         const imgSize = calculImgSize(filePath)
//         const imgWeight = calculImgWeight(filePath)
//         calculImgCarbonEmission(imgWeight)

//         return imgSize > max_ig_size;
//     } catch (error) {
//         console.error("Erreur lors de la lecture des dimensions de l\"image :", error);
//         return false;
//     }
// };


// // Image dimension
// function calculImgSize(filePath) {
//     const dimensions = sizeOf(filePath);
//     const imageSize = dimensions.width * dimensions.height;
//     console.log("Largeur : " + dimensions.width + " Hauteur : " + dimensions.height)

//     return imageSize
// };


// function calculImgWeight(filePath) {
//     const stats = fs.statSync(filePath);

//     const fileSizeInBytes = stats.size;
//     const fileSizeInKb = fileSizeInBytes / 1024;
//     console.log("Le poids de l'image est de " + fileSizeInKb + " Ko.")

//     return fileSizeInKb
// };


// // Calcul carbon emission
// function calculImgCarbonEmission(imgWeight) {
//     const kwhEnergyPerKb = 0.2 / 1024; // Consommation d"énergie par Ko chargé (en kWh)
//     const kgCo2PerKwh = 0.5; // Emissions de CO2 par kWh (en kg)

//     const totalEnergyConsumed = imgWeight * kwhEnergyPerKb; // Energy consumed in kWh
//     const totalCarbonEmission = totalEnergyConsumed * kgCo2PerKwh; // Carbon emission in kg
//     console.log("L'image dépense " + totalCarbonEmission + " kg de CO2.")

//     return totalCarbonEmission
// };






// const directoryPath = "assets";
// const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];

// // Filter images files
// const isImageFile = (fileName) => {
//     const extension = path.extname(fileName).toLowerCase();
//     return imageExtensions.includes(extension);
// };

// // Browse directory
// fs.readdir(directoryPath, (err, files) => {
//     if (err) {
//         console.error("Erreur lors de la lecture du répertoire :", err);
//         return;
//     }

//     // Filtrer les fichiers d"images
//     const imageFiles = files.filter(isImageFile);

//     // For each image file check size
//     imageFiles.forEach((file) => {
//         console.log("\nImage : ", file);
//         if (isImageSizeTooLarge("assets/" + file)) {
//             console.log("La taille de l\"image est trop grande.");
//         } else {
//             console.log("La taille de l\"image est acceptable.");
//         }
//     });
// });


const fs = require("fs");
const path = require("path");
const sizeOf = require("image-size");

class ImageProcessor {
    constructor(maxSize) {
        this.maxSize = maxSize;
    }

    calculImgSize(filePath) {
        const dimensions = sizeOf(filePath);
        const imageSize = dimensions.width * dimensions.height;
        console.log("Largeur : " + dimensions.width + " Hauteur : " + dimensions.height);

        return imageSize;
    }

    calculImgWeight(filePath) {
        const stats = fs.statSync(filePath);

        const fileSizeInBytes = stats.size;
        const fileSizeInKb = Number((fileSizeInBytes / 1024).toFixed(2));
        console.log("Le poids de l'image est de " + fileSizeInKb + " Ko.");

        return fileSizeInKb;
    }

    calculImgCarbonEmission(imgWeight) {
        const kwhEnergyPerKb = 0.2 / 1024; // Consommation d'énergie par Ko chargé (en kWh)
        const kgCo2PerKwh = 0.5; // Emissions de CO2 par kWh (en kg)

        const totalEnergyConsumed = imgWeight * kwhEnergyPerKb; // Energy consumed in kWh
        const totalCarbonEmission = Number((totalEnergyConsumed * kgCo2PerKwh).toFixed(3)); // Carbon emission in kg
        console.log("L'image dépense " + totalCarbonEmission + " kg de CO2.");

        return totalCarbonEmission;
    }

    isImageSizeTooLarge(filePath) {
        try {
            const imgSize = this.calculImgSize(filePath);
            const imgWeight = this.calculImgWeight(filePath);
            this.calculImgCarbonEmission(imgWeight);

            return imgSize > this.maxSize;
        } catch (error) {
            console.error("Erreur lors de la lecture des dimensions de l'image :", error);
            return false;
        }
    }

    browseDirectory(directoryPath) {
        // Filter images files
        const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];

        const isImageFile = (fileName) => {
            const extension = path.extname(fileName).toLowerCase();
            return imageExtensions.includes(extension);
        };

        // Browse directory
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                console.error("Erreur lors de la lecture du répertoire :", err);
                return;
            }

            // Filtrer les fichiers d'images
            const imageFiles = files.filter(isImageFile);

            // For each image file check size
            if (imageFiles.length === 0) {
                console.log("Aucune image trouvée dans le dossier.");
            } else {
                imageFiles.forEach((file) => {
                    console.log("\nImage : ", file);
                    if (this.isImageSizeTooLarge(path.join(directoryPath, file))) {
                        console.log("La taille de l'image est trop grande.");
                    } else {
                        console.log("La taille de l'image est bonne.");
                    }
                });
            }


        });
    }
}

module.exports = ImageProcessor;