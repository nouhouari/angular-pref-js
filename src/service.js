/** 
 * Angular library for Preference microservice . 
 **/

angular.module('my-pharma-pref-js',[])
      .service('my-pharma-pref-service',function($http){

   this.endpoint =  "http://localhost:8089/api/prefs";

   /**
    * Set the service endpoint.
    */
   this.setEndPoint = function(url){
       this.endpoint = url;
   }    

   /**
    * Get all preferences.
    */
   this.getPreferences = function(success, failure){
        console.log("get all preferences.");
        $http.get(endpoint+"/preferences").then(
        success,
        failure    
        );
    }
    
    /**
     * Create  preference.
     */
    this.createPreference = function(theKey, theValue, success, failure){
        console.log("create preference.");
        var pref = {
            key: theKey,
            value: theValue
        };
        $http.post(endpoint+"/preference", pref).then(
        success,
        failure    
        );
    }
    
    /**
     * Find a preference by key.
     */
    this.createPreference = function(theKey, success, failure){
        console.log("Find preference by key.");
        $http.get(endpoint+"/preference/"+theKey).then(
        success,
        failure    
        );
    }

});


