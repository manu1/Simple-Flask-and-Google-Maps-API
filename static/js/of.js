var Class = function(methods) {   
    var klass = function() {    
        this.initialize.apply(this, arguments);          
    };  
    
    for (var property in methods) { 
    	klass.prototype[property] = methods[property];
    }
          
    if (!klass.prototype.initialize) klass.prototype.initialize = function(){};      
    
    return klass;    
};

var Cnt = Class({ 
    initialize: function(json) {
        this.json = json;
    },
    // toString: function() {
    //     return "My name is "+this.name+" and I am "+this.age+" years old.";
    // }
}); 


