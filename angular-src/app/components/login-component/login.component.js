function loginController($rootScope,$window,$attrs,$scope,authService){
    var vm = this;
    
    vm.popup=$attrs.popup

    redirectUser()

    vm.login=function(){
       authService.login("","").then(function(user){
        $("#myModal").modal('hide')
        $rootScope.user=user
        $rootScope.$apply();
        redirectUser()
       })
    }

    //if user is logged redirct to home page
    function redirectUser(){
        if($rootScope.user && !vm.popup)
            $window.location.href='/';
    }
}

app.component("login",{
    templateUrl:"app/components/login-component/login.html",
    controller:loginController,
    controllerAs: "vm",
    binding:{
        popup:'<'
    }
})