var EventDispatcher = (function() {
  var _callbacks = {};

  return {
    addEventListener: function(eventType, callback) {
      if(!_callbacks.hasOwnProperty(eventType)) {
        _callbacks[eventType] = [];
      }

      _callbacks[eventType].push(callback);
    },

    removeEventListener: function(eventType, callback) {
      if(!_callbacks.hasOwnProperty(eventType)) {
        return;
      }

      var index = _callbacks[eventType].indexOf(callback);
      _callbacks[eventType].splice(index, 1);
    },

    dispatch: function(eventType, event) {
      if(!_callbacks.hasOwnProperty(eventType)) {
        return;
      }

      for(var i in _callbacks[eventType]) {
        _callbacks[eventType][i](event);
      }
    },

    log: function(){return _callbacks}
  };
})();
