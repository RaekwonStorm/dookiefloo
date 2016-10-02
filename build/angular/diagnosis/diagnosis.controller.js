app.controller('diagnosisCtrl', function($scope, decisionTrees) {
    $scope.diagnoses = decisionTrees.diagnoses;
    $scope.showResult = false;
    $scope.history = [{text: "Willow was the best movie of 1988?", choices: ['Yes', 'No']}];
    $scope.result = $scope.diagnoses.rlqp.prompt;
    console.log($scope.result)

    $scope.clickHandler = (derp) => {
      console.log("derp", derp);
    }


  // let example = { prompt: {
  //     text: 'obese',
  //     choices: []
  //   },
  //   choice1: {},
  //   choice2: {},
  // }

});
