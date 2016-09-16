(function () {
'use strict';

angular.module('assignment1', [])
.controller('assignment1_ctrl', assignment1_ctrl);

assignment1_ctrl.$inject = ['$scope'];
function assignment1_ctrl($scope) {

	$scope.listDishes = "";	
	$scope.message = "";
	
	$scope.check = function(){

		if ($scope.listDishes === ""){
			$scope.message = "Please enter data first";
		}else{
			if ( $scope.listDishes.split(",").length <= 3){
				$scope.message = "Enjoy!";				
			}else{
				$scope.message = "Too much!";				
			}
		}		
	};

}

})();
