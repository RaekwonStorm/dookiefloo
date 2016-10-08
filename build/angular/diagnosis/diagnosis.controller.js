app.controller('diagnosisCtrl', function($scope, decisionTrees) {
    $scope.diagnoses = decisionTrees.diagnoses;
    $scope.history = [];
    $scope.result;

    $scope.diagnosisOptions = Object.keys($scope.diagnoses);

    $scope.currentState = null;

    $scope.clickHandler = (selection) => {
      if ($scope.currentState == decisionTrees.diagnoses) return;

      let lastState = {
          text: $scope.currentState.prompt.text,
          choices: $scope.currentState.prompt.choices
      }

      $scope.history.push(lastState);

      if (typeof $scope.currentState[selection] === 'string') {
        $scope.result = $scope.currentState[selection];
        $scope.currentState = null;
        return;
      }

      $scope.currentState = $scope.currentState[selection];

    }

    $scope.selectHandler = (selection) => {
        $scope.currentState = $scope.diagnoses[selection];
    }

});
