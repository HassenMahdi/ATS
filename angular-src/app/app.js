var app = angular.module('App',['ui.router']);

app.controller("mainCtrl",function($rootScope,$scope,authService){

    $rootScope.user=JSON.parse(localStorage.getItem('user'))
})