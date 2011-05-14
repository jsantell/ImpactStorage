ig.module(
	'plugins.impact-storage'
)
.requires(
	'impact.game'
)
.defines(function(){

ImpactStorage = ig.Class.extend({

    // Makes ImpactStorage a singleton
    staticInstantiate: function(i)  {

        if(ImpactStorage.instance==null)
            return null;
        else
            return ImpactStorage.instance;
    },

	
    init: function()    {
        
    },

    
    isCapable: function()   {

        if(typeof(localStorage) == 'undefined')
            return false
        else
            return true
    },
    

    isSet: function(key)   {

        if(this.get(key)==null)
            return false;
        else
            return true;
    },
    

    // Iff a key is uninitialized, set key to value
    initUnset: function(key, value) {
        
        if(this.get(key) == null)    
            this.set(key, value);
    },


    // Returns a string or an object stored at key
    get: function(key)  {
    
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch(e)  {
            return localStorage.getItem(key);
        }
    },


    getInt: function(key)   {

        return parseInt(localStorage.getItem(key));
    },


    getFloat: function(key) {
        
        return parseFloat(localStorage.getItem(key));
    },

    
    getBool: function(key)  {
        if(localStorage.getItem(key)=='true' || localStorage.getItem(key)=='1')
            return true;
        else if(localStorage.getItem(key)=='false' || localStorage.getItem(key)=='0')
            return false;
        else
            return null;
    },


    key: function(n)    {

        return localStorage.key(n);
    },

    
    set: function(key, value)    {
        
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch(e)  {
            if(e == QUOTA_EXCEEDED_ERR)
                console.log('localStorage quota exceeded');
        }
    },


    // Sets key to value, iff stored value is smaller
    setHighest: function(key, value)    {

        if(value > this.getFloat(key))
            this.set(key, value);
    },

    
    remove: function(key)   {
    
        localStorage.removeItem(key);
    },


    /**
     *  Note, .clear() will clear all local storage data from that origin,
     *  Calling .clear() from www.yourdomain.com/impactgame1 will also clear it from
     *  www.yourdomain.com/impactgame2.
     */
    clear: function()   {

        localStorage.clear();
    }


});

});
