"use strict";

const difference = (a, b) => Math.abs(a-b);
function randIntBetween(min, max) {
    if(min > max) {
        var tempMin = max;
        max = min;
        min = tempMin;
    };
    /*return a random number between the min and max. The min 
    and the max do not have to start with 1*/
    return Math.floor(Math.random()*(max-min+1)+min);
};
const d100 = () => randIntBetween(1, 100);
const d10 = () => randIntBetween(1, 10);
function rollD100 (overrideRoll) {
    var roll = 1; //initialize roll        
        if (overrideRoll >= 1 && overrideRoll <= 100){
            roll = overrideRoll;
        } else {
            roll = d100();
        };
    return roll;
};
function rollD10 (overrideRoll) {
    var roll = 1; //initialize roll        
        if (overrideRoll >= 1 && overrideRoll <= 10){
            roll = overrideRoll;
        } else {
            roll = d10();
        };
    return roll;
};
var starSystem = []; //Initializing starSystem
var generate = {    
    star: function(overrideRoll) { //overrideRoll forces a certain d100() result instead of rolling the dice
        var roll = rollD100(overrideRoll);
        var result = {} //initialize result        
        /*accepts a starType category and iterates through them to find the star type that matches the 
        specified d100() roll range, then returns that star type as result */
        var pickStar = function(starType) {
            starType.forEach(function(e){
                if ((e.rollRangeMin <= roll) && (e.rollRangeMax >= roll)){            
                    result = e;
                };
            });            
        };
        if(roll <= 98) {
            pickStar(commonStar);
        } else if(roll === 99) {
            var roll = d100();
            pickStar(rareStar);
        } else {
            var roll = d100();
            pickStar(specialStar);
        };        
        //generate the star size here
        result.size = (randIntBetween(result.sizeMin*100,result.sizeMax*100)/100);
        return result;
    },
    planet: function(overrideRoll, starType) {
        // *** to do
    },
    moon: function(roll) {
        var result = {};
        moonType.forEach(function(e){
            if (e.rollRangeMin <= roll && e.rollRangeMax >= roll) {
                result = e;
            };
        });    
        return result;
    },
    newStarSystem: function(overrideRoll){
        starSystem = []; //clears starSystem
        handlers.addStar(overrideRoll); //add the first star, which is the primary stars
        var potentialNewStar = generate.star(); //rolls a new star
        /*checks to see if the new star has less mass than the star previous to it. if it does,
        it is added to the starSystem, a new star is generated, and the cycle repeats until
        the new star has a higher mass than the last star generated*/
        while (potentialNewStar.size < starSystem[starSystem.length - 1].size) {
            starSystem.push(potentialNewStar);
            potentialNewStar = generate.star();
        };
        generate.planets();
        generate.moons();
        render.stars();
        render.planets();
    },
    planets: function() {        
        starSystem.forEach(function(star){
            star.planets = [];
            var innerPlanetsRangeMax = 1000;
            var outerPlanetsRangeMin = 1000;
            var outerPlanetsRangeMax = 10000;
            function planetTableRoll (table, overrideRoll) {
                var roll = d100(overrideRoll);                
                var result = [];
                table.forEach(function(e){
                    if ((e.rollRangeMin <= roll) && (e.rollRangeMax >= roll)){            
                        result = e;
                    };
                });
                return result;
            };
            if (star.type === "A-Type Main Sequence" || star.type === "B-Type Main Sequence" || star.type === "O-Type Main Sequence") {
                innerPlanetsRangeMax = 2000;
                outerPlanetsRangeMin = 3000;
                outerPlanetsRangeMax = 20000;
            };
            /* ***DRY up this section - begin */
            //Generate inner planets
            if (star.innerPlanetTable) { //checks to see if the star is elligible to roll on the inner planet table            
                for (var i = 100; i <= innerPlanetsRangeMax; i += 100) {
                    var planet = planetTableRoll(star.innerPlanetTable);
                    planet.distance = i;
                    star.planets.push(planet);                    
                };
            };
            //Generate outer planets
            for (var i = outerPlanetsRangeMin; i <= outerPlanetsRangeMax; i += 1000) {
                var planet = planetTableRoll(star.outerPlanetTable);
                planet.distance = i;
                star.planets.push(planet);                  
            };
            /* DRY up this section - end */
        });
    },
    //****fix this #### */
    moons: function() {
        starSystem.forEach(function(e) {
            e.planets.forEach(function(p){
                if (p.type !== 'No Planet' && p.type !== 'Asteroid Belt' && p.type !== 'Star'){
                    p.moons = [];
                    p.numMoons = 0;
                    var roll1 = rollD10();
                    moons.forEach(function(f) {
                        if (roll1 <= f.rollRangeMin && f.rollRangMax) {
                            if (p.gasGiant === false) {
                                p.numMoons = f.planet;
                            } else {
                                p.numMoons = f.gasGiant
                            };
                        };
                    });
                    for (var i = 0; i <= p.numMoons; i++){
                        console.log('generating a moon');
                        var roll2 = rollD10();
                        var generatedMoon = generate.moon(roll2);
                        p.moons.push(generatedMoon);
                    };
                };
            });            
        });
    }
};
var handlers = {  
    addStar: function(overrideRoll) {
        starSystem.push(generate.star(overrideRoll));        
    },
    addPlanet: function(star) {
        //to do
    }    
  };
var render = {
    stars: function() {
        var targetDiv = document.querySelector('#target');
        targetDiv.innerHTML = ''; //clears the target div. this is necessary 
        starSystem.forEach(function(e, position) {
            const starHtml = '<div><h3><strong>'+ e.type +'</strong></h3>\
                                    <p><strong>Size: </strong>'+ e.size +'</p>\
                                    <p><strong>Appearance: </strong>'+ e.appearance +'</p>\
                                    <p><strong>Planets: </strong>' + '<div id = "planets' + position + '"></div></p>\
                                </div>';
            var starDiv = document.createElement('div');
            starDiv.innerHTML = starHtml;
            starDiv.id = 'star'+ position;
            targetDiv.appendChild(starDiv);
        });
    },
    planets: function() {
        for (var i = 0; i < starSystem.length; i++){
            var targetId = '#planets' + i;
            var targetDiv = document.querySelector(targetId);
            targetDiv.innerHTML = ''; //clears the target div. this is necessary 
            starSystem[i].planets.forEach(function(e, position) {
                const planetHtml = '<div id = "planet"' + position + '>\
                                        <p>' + e.type + '</p>\
                                    </div>';
                var planetDiv = document.createElement('div');
                planetDiv.innerHTML = planetHtml;
                planetDiv.id = 'planet'+ position;
                targetDiv.appendChild(planetDiv);
            });
        };
    }
};