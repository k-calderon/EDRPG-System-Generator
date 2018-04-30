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

//console.log(randIntBetween(1,5))

var starSystemTemplate = []; //Do not modify starSystemTemplate in any way.
var starSystem = []; //Initializing starSystem


var generate = {
    star: function() {        
        var roll = randIntBetween(1, 100);
        var result = {}
        commonStar.forEach(function(e){
            if ((e.rollRangeMin <= roll) && (e.rollRangeMax >= roll)){            
                result = e;
            };
        });
        //generate the star size here
        result.size = (randIntBetween(result.sizeMin*100,result.sizeMax*100)/100);
        return result;
    }
};

var handlers = {  
    addStar: function() {
        starSystem.push(generate.star());        
    },
    generateNewStarSystem: function(){
        starSystem = starSystemTemplate; //clears starSystem
        handlers.addStar(); //add the first star, which is the primary stars
        var potentialNewStar = generate.star();
        while (potentialNewStar.size < starSystem[starSystem.length - 1].size) {
            starSystem.push(potentialNewStar);
            potentialNewStar = generate.star();
        };
    }  
  };