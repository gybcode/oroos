(function() {
'use strict';

  angular
    .module('app')
    .controller('DashboardController', DashboardController);

  DashboardController.inject = ['$state'];
  function DashboardController($state) {
    var vm = this;


    activate();

    ////////////////

    function activate() {
      $state.go('dashboard.home');
    }
  }
})();