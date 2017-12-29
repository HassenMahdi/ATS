function registerController($rootScope,$window,$attrs){
    var vm = this;

    vm.popup=$attrs.popup

    redirectUser()

    function redirectUser(){
        if($rootScope.user && !vm.popup)
            $window.location.href='/';
    }
}

app.component("register",{
    templateUrl:"app/components/register-component/register.html",
    controller:registerController,
    controllerAs: "vm",
    binding:{
        popup:'<'
    }
})