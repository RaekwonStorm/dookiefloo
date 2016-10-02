app.controller('diagnosisCtrl', function ($scope, decisionTrees) {
  $scope.diagnoses = decisionTrees.diagnoses;
  $scope.showResult = false;
  $scope.result;

  $scope.clickHandler = (diagnosis, gender, obese, pregnant) => {
    if (gender === "male") {
      $scope.result = $scope.diagnoses[diagnosis][gender]['obese'][obese]
      console.log($scope.result);
    } else {
      $scope.result = $scope.diagnoses[diagnosis][gender][obese][pregnant];
    }
    $scope.showResult = true;
    console.log(gender, obese, pregnant);
  }

	console.log("Did it blend? " ,decisionTrees);
});
