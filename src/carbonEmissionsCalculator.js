var extend = require("util")._extend
var debug = require("debug")("carbon-emissions:calculator");

var CarbonEmissionsCalculator = function() {
    "use strict";

    this.calculate = function(data, policies) {

        var results = {}

        debug('Calculating carbon emissions')

        for (var factorName in policies) {
            var policy = policies[factorName]
            var emission

            if (data[factorName]) {
                // Calculate emissions based on the data and policy rules
                emission = calculateEmission(data[factorName], policy);

                // Assign scores and determine whether emissions are bad or abnormal
                var score = calculateEmissionScore(emission, policy);

                // Store results
                results[factorName] = {
                    emission: emission,
                    score: score
                }

                debug('Emission for %s calculated. Score: %d', factorName, score);
            }
        }

        debug('Carbon emissions calculation finished');

        return results
    }
}

// Function to calculate emissions based on data and policy rules
function calculateEmission(data, policy) {
    return data * policy.rate;
}

// Function to calculate emission scores based on thresholds
function calculateEmissionScore(emission, policy) {
    var score = 100 - (emission / policy.maxEmission) * 100;
    return Math.round(score);
}

module.exports = new CarbonEmissionsCalculator()
// exemple de donnée
var sampleData = {
    pageViews: Math.round(Math.random(1, 100) * (100, 1000)),
    serverEnergyConsumption: Math.round(Math.random(1, 100)*100) // in kWh
};


// ratio 
var samplePolicies = {
    pageViews: {
        rate: 0.002, // kg CO2 per page view
        maxEmission: 100 // max acceptable emission in kg CO2
    },
    serverEnergyConsumption: {
        rate: 0.5, // kg CO2 per kWh
        maxEmission: 300 // max acceptable emission in kg CO2
    }
};

// Use the calculator
var calculator = new CarbonEmissionsCalculator();
var results = calculator.calculate(sampleData, samplePolicies);
console.log(results)
