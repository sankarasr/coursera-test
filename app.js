(function () {
     'use strict';

     //Define app module
     angular.module('lunchTimeApp', [])
     .controller('checkQty', checkQtyController);

     //Define services to be injected
     checkQtyController.$inject= ['$scope'];

     //Actual controlllers
     function checkQtyController($scope) {
        //Initializations
        $scope.name="";
        $scope.message = "";


       $scope.displayMessage = function () {

        //No input given - model unchanged
        if ($scope.name == ""){
            $scope.message = "Please enter data first";
        }else{
            //exclude space elements between commas
            var words = $scope.name.split(',').filter(function (el){
                if(el != null && el.trim() != ""){
                    return el;
                }
            });
            //Just debugging
            //console.log(words);
            if(words.length < 4){
                if(words.length < 1){
                     $scope.message = "Please enter data first";
                } else{
                    $scope.message = "Enjoy";
                }
            }else{
               $scope.message = "Too much!";
            }
        }
       }
     };
})();