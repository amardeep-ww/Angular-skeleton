'use strict';


export default function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home1', {
      url: '/home',
      template: '<home></home>'
    });
};
