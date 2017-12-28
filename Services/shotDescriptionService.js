app.service("shotDescriptionService", function($state){

  var _description = {};

  // saves description
  this.addDescription = function(description){
    _description = description;
    console.log(_description);
  }

  // loads description to update
  this.descriptionUpdate = function(){
    return _description;
  }


})