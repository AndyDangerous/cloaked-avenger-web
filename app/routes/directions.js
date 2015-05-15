App.DirectionsRoute = Em.Route.extend({
  model: function(){
    return Directions.create()
  },
  setupController(controller, model){
    controller.set("model", model);
  }
});
