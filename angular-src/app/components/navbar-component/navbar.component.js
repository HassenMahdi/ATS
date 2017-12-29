function navbarController($scope,$rootScope,authService){
    var vm = this
    
    $rootScope.user
    
    vm.logout=function(e){
        e.preventDefault()
        $rootScope.user=null
        authService.logout()
    }
}

app.component("navbar",{
    templateUrl:"app/components/navbar-component/navbar.html",
    controller:navbarController,
    controllerAs: "vm",
})