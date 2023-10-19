const ImageProcessor = require("./src/imgSizeCalculator");
const CarbonEmissions = require("./src/carbonEmissionsCalculator");





// Carbon Emissions
// exemple de données
const sampleData = {
    pageViews: Math.round(Math.random(1, 100) * (100, 1000)),
    serverEnergyConsumption: Math.round(Math.random(1, 100) * 100) // en kWh
};

// ratios
const samplePolicies = {
    pageViews: {
        rate: 0.002, // kg CO2 par vue de page
        maxEmission: 100 // émission maximale acceptable en kg CO2
    },
    serverEnergyConsumption: {
        rate: 0.5, // kg CO2 par kWh
        maxEmission: 300 // émission maximale acceptable en kg CO2
    }
};

// Utilisation du calculateur
const calculator = new CarbonEmissions();
const results = calculator.calculate(sampleData, samplePolicies);
console.log(results);


