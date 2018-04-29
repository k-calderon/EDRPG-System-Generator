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
        return result;
    }
};

var handlers = {
  
    generateNewStarSystem: function(){
        starSystem = starSystemTemplate; //clears starSystem
        var primaryStar = generate.star(); //generates a primary star
        starSystem.push(primaryStar);
    }  
  };