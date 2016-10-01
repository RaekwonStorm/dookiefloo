app.config(function ($stateProvider) {

  $stateProvider.state('diagnosis', {
    url: '/diagnosis',
    templateUrl: 'build/angular/diagnosis/diagnosis.html',
    controller: 'diagnosisCtrl'
  });
});
