(function() {
'use strict';

  angular
    .module('app')
    .controller('OroosController', OroosController);

  OroosController.inject = ['$state', '$stateParams'];
  function OroosController($state, $stateParams) {
    var vm = this;
    vm.next = next;
    function next(){
      $state.go('dashboard.oroos', {"q":(vm.q+1<21?vm.q+1:1)});
    }

    activate();

    ////////////////

    function activate() {
      vm.q = $stateParams['q'];
    }
  }
})();