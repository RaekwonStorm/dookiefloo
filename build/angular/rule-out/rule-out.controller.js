app.controller('ruleoutCtrl', function($scope, decisionTrees) {

  $scope.ruleOuts = decisionTrees.ruleOuts;
  $scope.history = [];
  $scope.result;
  // console.log($scope.result)

  $scope.currentState = decisionTrees.ruleOuts['tachycardia'];

  $scope.clickHandler = (selection) => {
    if ($scope.currentState == decisionTrees.ruleOuts) return;
    // console.log("selection", selection);
    let lastState = {text: $scope.currentState.prompt.text, choices: $scope.currentState.prompt.choices}
    $scope.history.push(lastState);
    if (typeof $scope.currentState[selection] === 'string') {
      $scope.result = $scope.currentState[selection];
      $scope.currentState = null;
      return;
    }
    // console.log('State Before: ', $scope.currentState);
    $scope.currentState = $scope.currentState[selection];

    // console.log('State After: ', $scope.currentState);
  }

});

