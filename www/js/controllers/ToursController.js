app.controller('ToursController', function ($scope, $http, ionicMaterialInk) {

    ionicMaterialInk.displayEffect();
    
    $http.get("localhost:80/Mexica/server.php")
    
        .success(function(data) {
                console.log("hola");
            $scope.tours = data;
        })
        .error(function() {
            
        })

});