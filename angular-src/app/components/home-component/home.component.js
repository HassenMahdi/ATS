function homeController($scope){
    var vm = this
    
    $scope.user = JSON.parse(localStorage.getItem("user"))
}

app.component("home",{
    templateUrl:"app/components/home-component/home.html",
    controller:homeController,
    controllerAs: "vm"
})