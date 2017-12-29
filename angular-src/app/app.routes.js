app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/')

    $stateProvider
        .state("home", {
        url:"/",
        template:"<home></home>" 
        })
        .state("login", {
            url:"/login",
            template:"<login></login>" 
            })
        .state("register", {
            url:"/register",
            template:"<register></register>" 
            })
        .state('allRequests',{
            url:'/requests',
            template:"<all-requests></all-requests>"
        })
        .state('request',{
            url:'/requests/:requestId',
            template:"<request-detail></request-detail>"
        })
})