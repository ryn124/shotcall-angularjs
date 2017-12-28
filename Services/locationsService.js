app.service("locationsService", function ($state, $http) {

  var _location = "9341 maureen dr garden grove ca";

  this.changeLocation = function (address) {
    _location = address;
    console.log("service address:" + _location)
  }

  var _gLat = 33.80222320000001;
  var _gLng = -117.9699812;
  // var _gLat = {};
  // var _gLng = {};
  this.gLat = function (){
    return _gLat;
  }
  this.gLng = function (){
    return _gLng;
  }
  this.gLatChange = function (lat){
    console.log("service:" + _gLat)
    _gLat = lat;
  }
  this.gLngChange = function (lng){
    console.log("srvice:" + _gLng)
    _gLng = lng;
  }

  // google maps geocode call
  this.gMap = function () {
    return $http.get("https://maps.googleapis.com/maps/api/geocode/json?", {
      params: {
        address: _location,
        key: 'API KEY'
      }
    });
  }

  // weather api call
  this.acuWeather = function () {
    return $http.get(" http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=GKTUSW8gah5gAtQ1AVlSoDMbXojdcUbf&q=33.80222320000001%2C-117.9699812")
  }

  var _acuKey = {};
  this.acuKeyChange = function(key){
    _acuKey = "http://dataservice.accuweather.com/currentconditions/v1/" + key + "?apikey=GKTUSW8gah5gAtQ1AVlSoDMbXojdcUbf";
    console.log(_acuKey)
  }

  this.acuCondition = function(){
    return $http.get(_acuKey)
  }

});

