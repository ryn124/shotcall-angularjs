app.service("contactsService", function($state) {

  var _people = [];
  var _personId = 0;
  var _personIndex = {};

  function Person(id, firstName, lastName, phone, email, notes, role) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.notes = notes;
    this.role = role;
    this.show = false;
  
  };

  // add a person
  this.addPerson = function(person) {
    console.log(person);
    _people.push(new Person(_personId++, person.firstName, person.lastName, person.phone, person.email, person.notes, person.role))
    console.log(_people)
  };

 
  // view people
  this.getPeople = function (){
    return _people;
  };

  // view person
  this.getPersonById = function (id) {
    if(id == "" || id == null || id == undefined){
      var _people = {};
      return _people;
    }
    else {
      for (var i = 0; i < _people.length; i ++){
        if(_people[i].id == id){
          return _person[i];
        };
      };
    };
  };

  // load contact
  this.loadPerson = function(person) {
    _personIndex = person.id;
    console.log(_personIndex)
    console.log(_people)
  }

  // update person card
  this.updatePerson = function(person) {
    for (var i = 0; i < _people.length; i ++){
      if(_people[i].id == _personIndex){
        _people.splice(i, 1, 
          (new Person(i, person.firstName, person.lastName, person.phone, person.email, person.notes, person.role))
        )
      };
    };
  };

    // delete a person
    this.deletePerson = function(person) {
      for(var i = 0; i < _people.length; i++){
        if(_people[i].id == _personIndex){
          _people.splice(i, 1);
        }
      }
    }

    // planner name
    this.plannerName = function(){
      return _people[0];
    }
  
  // shoot date
  var _sDate = "Date";

  this.shootDate = function(date){
    _sDate = date;
    console.log(_sDate);
  }

  this.returnDate = function (){
    return _sDate;
  }
})