var app=angular.module('palindromeApp',[]);
app.controller('palindromeCtrl',function($scope){
	$scope.palindrome=function(string){
   var revStr = "";
var i = string.length;
for(var j=i; j>=0; j--) {
revStr = revStr+string.charAt(j);
}
if(string == revStr) {
alert(string+" -is Palindrome");
} else {
alert(string+" -is not a Palindrome");
}  
    } 

  

});