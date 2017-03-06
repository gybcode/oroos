(function() {
'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  HomeController.inject = ['$state'];
  function HomeController($state) {
    var vm = this;
    vm.start = start;

    function start(){
      $state.go('dashboard.oroos', {"q":1})
    }

    activate();

    ////////////////

    function activate() { }
  }
})();