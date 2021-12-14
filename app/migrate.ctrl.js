(module => {
  'use strict';
  migrateCtrl.$inject = [];
  
  function migrateCtrl() {
    const vm = this;
    vm.$onInit = () => {
      vm.description = "Description from angularJS to Vuex state"
      vm.vueInstance();
    }
    vm.$onDestroy = () => {}

    vm.vueInstance = () => {
      new Vue({
        el: document.getElementById('app'),
        store,
        data: {},
        created() {
          this.setDescription(vm.description);
        },
        methods: {
          ...Vuex.mapMutations({
            setDescription: "SET_DESCRIPTION" 
          })
        }
      });
    };
  }
  module.controller('migrateCtrl', migrateCtrl);
})(angular.module('app'));
