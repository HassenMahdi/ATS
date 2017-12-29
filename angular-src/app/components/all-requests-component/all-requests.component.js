function allRequestsController(){
    var vm = this;

    vm.show="all"
}

app.component("allRequests",{
    templateUrl:"app/components/all-requests-component/all-requests.html",
    controller:allRequestsController,
    controllerAs: "vm"
})