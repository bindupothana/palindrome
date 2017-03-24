var app=angular.module('palindromeApp',[]);
app.controller('palindromeCtrl',function($scope){
	$scope.palindrome=function(num){
		var temp =0;
		var i;
		while( i!=0 )
    {
        $scope.remainder = num%10;
        // console.log("num",num)
       $scope.reverseInteger =$scope.reversedInteger*10 + $scope.remainder;
               console.log("num", $scope.reverseInteger)

        num / 10;
    }

	}


});