app.service("scheduleService", function($state){

  var _events = [];
  var _eventId = 0;
  var _eventsIndex = {};

  function Event(id, time, eventName, eventDescription){
    this.id = id;
    this.time = time;
    this.eventName = eventName;
    this.eventDescription = eventDescription;
  };

  // view events
  this.getEvents = function (){
    return _events;
  }


  this.addEvent = function(schedule){
    _events.push(new Event(_eventId++, schedule.time, schedule.eventName, schedule.eventDescription));
    console.log(_events)
  };

  // load a event
  this.loadEvent = function(schedule) {
    _eventsIndex = schedule.id;
    console.log(_eventsIndex)
  }

  // update an event
  this.updateEvent = function(schedule){
    for (var i = 0; i < _events.length; i++){
      if(_events[i].id == _eventsIndex){
        _events.splice(i, 1, (new Event(i, schedule.time, schedule.eventName, schedule.eventDescription))
      )
      }
    }
  }




})