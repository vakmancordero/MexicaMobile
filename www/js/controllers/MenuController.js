
﻿app.controller('MenuController', function ($scope, $ionicPopover) {
    
    $scope.loginData = {};

    var template =  '<ion-popover-view>' +
                    '   <ion-header-bar>' +
                    '       <h1 class="title">Contacto</h1>' +
                    '   </ion-header-bar>' +
                    '   <ion-content>' +
                    '       <div class="list">' +
                    '           <a class="item ">' +
                    '               LLamadas gratis en México:' +
                    '           </a>' +
                    '           <a class="item item-icon-left">' +
                    '               <i class="icon ion-android-call"></i> 01 800 839 46 47' +
                    '           </a>' +
                    '           <a class="item ">' +
                    '               Ciudad de México:' +
                    '           </a>' +
                    '           <a class="item item-icon-left">' +
                    '               <i class="icon ion-android-call"></i> +52 (55) 5526 7002' +
                    '           </a>' +
                    '           <a class="item item-icon-left">' +
                    '               <i class="icon ion-android-call"></i> +52 (55) 5546 3341' +
                    '           </a>' +
                    '           <a class="item ">' +
                    '               E-mail:' +
                    '           </a>' +
                    '           <a class="item item-icon-left">' +
                    '               <i class="icon ion-android-call"></i> ventasdf@mexicatours.com' +
                    '           </a>' +
                    '       </div>' +
                    '   </ion-content>' +
                    '</ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });
    
    $scope.closePopover = function () {
        $scope.popover.hide();
    };
    
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });
});