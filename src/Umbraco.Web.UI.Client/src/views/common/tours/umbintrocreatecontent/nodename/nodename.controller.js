(function () {
    "use strict";

    function NodeNameController($scope) {
        
        var vm = this;
        var element = angular.element($scope.model.currentStep.element);

        vm.error = false;
        
        vm.initNextStep = initNextStep;

        function initNextStep() {
            if(element.val() === 'Home') {
                $scope.model.nextStep();
            } else {
                vm.error = true;
            }
        }

    }

    angular.module("umbraco").controller("Umbraco.Tours.umbIntroCreateDocType.NodeNameController", NodeNameController);
})();
