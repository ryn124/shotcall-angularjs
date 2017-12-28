app.controller("callSheetController", function ($scope, $stateParams, $state, contactsService, callSheetService, locationsService, scheduleService, shotDescriptionService) {

  // populate contacts
  $scope.people = contactsService.getPeople()
  console.log($scope.people);


  // acuweather initialize
  $scope.weatherRead = {};
  $scope.weatherIcon = {};

  locationsService.acuWeather()
    .then(function (response) {
      console.log(response);
      locationsService.acuKeyChange(response.data.Key);
      locationsService.acuCondition()
        .then(function (response) {
          console.log(response);
          console.log(response.data[0].Temperature.Imperial.Value)
          $scope.weatherRead = response.data[0].Temperature.Imperial.Value + "°" + response.data[0].Temperature.Imperial.Unit;
          $scope.weatherIcon = response.data[0].WeatherIcon;
        }).catch(function (error) {
          console.log(error)
        })
    }).catch(function (error) {
      console.log(error)
    })

  // google map
  // google maps initialize
  $scope.initMap = function () {
    // var coords = LatLng(lat: $scope.geoLat, lng:$scope.geoLng);
    var map = new google.maps.Map(document.getElementById('mapSheet'), {
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

  $scope.locationHeading = {}

  $scope.geocodeCall = function () {
    locationsService.gMap()
      .then(function (response) {
        locationsService.gLatChange(response.data.results[0].geometry.location.lat);
        locationsService.gLngChange(response.data.results[0].geometry.location.lng);
        console.log($scope.geoLat, $scope.geoLng)
        locationsService.gMap()
          .then(function (response) {
            $scope.locationHeading = (response.data.results[0].formatted_address);
          }), function (error) {
            console.log(error)
          };
      }).catch(function (error) {
        console.log(error);
      })
    console.log("geocodeCall end")
  }


  // map load on page load
  $scope.geocodeCall();
  $scope.initMap();

  // date info
  $scope.dateRead = {};
  $scope.dateLoad = function () {
    $scope.dateRead = contactsService.returnDate();
  }
  $scope.dateLoad()

  // planner load
  $scope.plannerName = "planner";
  $scope.plannerLoad = function () {
    console.log(contactsService.getPeople()[0].firstName);
    $scope.plannerName = contactsService.getPeople()[0].firstName.toUpperCase() + " " + contactsService.getPeople()[0].lastName.toUpperCase();
  };
  $scope.plannerLoad();

  // description load
  $scope.callDescription = "description test";
  $scope.descLoad = function () {
    $scope.callDescription = shotDescriptionService.descriptionUpdate();
  }
  $scope.descLoad();

  // scheduleService
  $scope.events = scheduleService.getEvents()

  // pdf layer call
  $scope.loadPdf = function () {
    locationsService.pdfLoad()
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error)
      })
  }







})