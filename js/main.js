"use strict";

function difference(a, b) {
    return Math.abs(a-b);
};

function randIntBetween(min, max) {
    if(min > max) {
        var tempMin = max;
        max = min;
        min = tempMin;
    }
    /*return a random number between the min and max. The min 
    and the max do not have to start with 1*/
    return Math.floor(Math.random()*(max-min+1)+min);
};

function d100() {
    return randIntBetween(1, 100)    
};

var starSystem = []; //Initializing starSystem


var generate = {
    star: function(overrideRoll) { //overrideRoll forces a certain d100() result instead of rolling the dice
        var roll = 1; //initialize roll        
        if (overrideRoll >= 1 && overrideRoll <= 100){
            roll = overrideRoll;
        } else {
            roll = d100();
        };
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
    }
};

var handlers = {  
    addStar: function(overrideRoll) {
        starSystem.push(generate.star(overrideRoll));        
    },
    generateNewStarSystem: function(overrideRoll){
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
    }  
  };