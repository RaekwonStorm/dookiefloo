app.config(function ($stateProvider) {

  $stateProvider.state('ruleout', {
    url: '/ruleout',
    templateUrl: 'build/angular/rule-out/rule-out.html',
    controller: 'ruleoutCtrl'
  });
});
