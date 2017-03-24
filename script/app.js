var app=angular.module('palindromeApp',[]);
app.controller('palindromeCtrl',function($scope){
	$scope.palindrome=function(string){
    var n,r,sum=0,temp;    
         
         
          temp=n;      
          while(n>0)      
          {      
           r=n%10;      
           sum=(sum*10)+r;      
           n=n/10;      
          }      
          if(temp==sum)      
           alert("Number is Palindrome.");      
          else      
           alert("Number is not Palindrome");     
    }  
  

});