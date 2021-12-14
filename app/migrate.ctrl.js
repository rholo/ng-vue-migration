(module => {
  'use strict';
  migrateCtrl.$inject = [];

  function migrateCtrl() {
    const vm = this;

    vm.$onInit = () =>{
      vm.vueInstance()
    }

    vm.$onDestroy = () =>{}

    vm.vueInstance = () => {
      new Vue({
        el: document.getElementById('app'),
        store,
        data:{}
      });
    };

  }
  module.controller('migrateCtrl', migrateCtrl);
})(angular.module('app'))
