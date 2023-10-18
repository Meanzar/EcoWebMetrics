const fs = require('fs');
const sizeOf = require('image-size');


const MAX_IMAGE_SIZE = 1024 * 1024; // 1 Mo (en octets)

const isImageSizeTooLarge = (filePath) => {
    const stats = fs.statSync(filePath);

    try {
        // Image dimension
        const dimensions = sizeOf(filePath);
        const imageSize = dimensions.width * dimensions.height;
        console.log("Largeur : " + dimensions.width + " Hauteur : " + dimensions.height)

        // Image weight
        const fileSizeInBytes = stats.size;
        const fileSizeInKilobytes = fileSizeInBytes / 1024;
        console.log("Le poids de l'image est de " + fileSizeInKilobytes + " Ko.")


        // Calcul carbon emission

        const kwhEnergyPerKb = 0.2 / 1024; // Consommation d'énergie par Ko chargé (en kWh)
        const kgCo2PerKwh = 0.5; // Emissions de CO2 par kWh (en kg)

        const totalEnergyConsumed = fileSizeInKilobytes * kwhEnergyPerKb; // Energy consumed in kWh
        const totalCarbonEmission = totalEnergyConsumed * kgCo2PerKwh; // Carbon emission in kg
        console.log("L'image dépense " + totalCarbonEmission + " kg de CO2.")

        return imageSize > MAX_IMAGE_SIZE;
    } catch (error) {
        console.error('Erreur lors de la lecture des dimensions de l\'image :', error);
        return false;
    }
};

// Exemple d'utilisation

const filePath = 'assets/img.jpg';
if (isImageSizeTooLarge(filePath)) {
    console.log('La taille de l\'image est trop grande.');
    // console.log(dimensions.width, dimensions.height)
} else {
    console.log('La taille de l\'image est acceptable.');
}