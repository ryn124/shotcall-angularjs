app.controller("locationsController", function ($scope, $stateParams, $state, locationsService) {



  // google maps initialize
  $scope.initMap = function () {
    // var coords = LatLng(lat: $scope.geoLat, lng:$scope.geoLng);
    var map = new google.maps.Map(document.getElementById('mapMain'), {
      zoom: 15,
      center: new google.maps.LatLng($scope.geoLat, $scope.geoLng)

      
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng($scope.geoLat, $scope.geoLng),
      map: map
    });
    console.log("initMap end")
  }

  // google map check
  // locationsService.gMap()
  //   .then(function (response) {
  //     console.log(response);
  //     console.log(response.data.results[0].formatted_address)
  //     console.log(response.data.results[0].geometry.location)
  //   }).catch(function (error) {
  //     console.log(error)
  //   })


  // geocode call
  $scope.geoLat = locationsService.gLat();
  $scope.geoLng = locationsService.gLng();

  $scope.geocodeCall = function () {
    locationsService.gMap()
      .then(function (response) {
        locationsService.gLatChange(response.data.results[0].geometry.location.lat);
        locationsService.gLngChange(response.data.results[0].geometry.location.lng);
        console.log($scope.geoLat, $scope.geoLng)
      }).catch(function (error) {
        console.log(error);
      })
    $scope.initMap();
    console.log("geocodeCall end")
  }


  // map load on page load
  $scope.geocodeCall();
  
  // $scope.initMap();

  // enter an address
  $scope.submitAddress = function (address) {
    console.log(address.street + " " + address.city + " " + address.state + " " + address.zip);
    locationsService.changeLocation(address.street + " " + address.city + " " + address.state + " " + address.zip);
    $scope.geocodeCall();
    locationsService.gMap()
      .then(function (response) {
        $scope.addressHeading = (response.data.results[0].formatted_address);
        $scope.initMap();
      }), function (error) {
        console.log(error)
      };
    $scope.mapShow = false;
  }

  $scope.addressHeading = "";

  $scope.mapShow = true;

  $scope.mapUpdate = function () {
    $scope.mapShow = true;
  }

})