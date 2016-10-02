app.controller('ruleoutCtrl', function($scope, decisionTrees) {

  $scope.ruleOuts = decisionTrees.ruleOuts;
  $scope.showResult = false;
  $scope.result;

  $scope.clickHandler = (ruleout, gender, obese, pregnant) => {
    if (gender === "male") {
      $scope.result = $scope.diagnoses[ruleout][gender]['obese'][obese]
      console.log($scope.result);
    } else {
      $scope.result = $scope.diagnoses[ruleout][gender][obese][pregnant];
    }
    $scope.showResult = true;
    console.log(gender, obese, pregnant);
  }

  console.log("Did it blend? " ,decisionTrees);

});
