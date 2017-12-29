function requestDetailController(requestListSrv,$scope,$stateParams){
    var vm = this

    vm.request;
    vm.requestId=$stateParams.requestId

    vm.request=requestListSrv.getById(vm.requestId).then(function(request){
        vm.request=request
        //for simplicity 
        $scope.r=vm.request
        $scope.$apply()
    })
}

app.component("requestDetail",{
    templateUrl:"app/components/request-detail-component/request-detail.html",
    controller:requestDetailController,
    controllerAs: "vm",
})