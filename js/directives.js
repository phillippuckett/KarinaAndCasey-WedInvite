angular.module("kcWedding")
    .directive("footerDir", function () {
        return {
            restrict: 'E',
            templateUrl: 'html/footer.html',
            controller: function ($scope) {
                $scope.footerDir = "FOOTER DIRECTIVE";
                var currentyear = new Date().getFullYear();
                $scope.year = currentyear.toString();
            }
        }
    });