app.controller('myNoteCtrl', function($scope) {
    $scope.message='aa';
    $scope.save=function () {
        console.log("aaa");
        alert("保存成功！");
        
    };
    $scope.clear=function () {
        return $scope.message=''
    };
    $scope.reset = function () {
        return 100-$scope.message.length;
        
    }
    
})  