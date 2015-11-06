/**
 * Created by campitos on 6/11/15.
 */
angular.module('inicio',['ngRoute','ngResource','ngFileUpload'])
    .config(function($routeProvider,$httpProvider){
        $routeProvider.when('/',{
            templateUrl:'inicio.html',
            controller:'inicio'
        }).when('/ingresar',{
            templateUrl:'ingresar.html',
            controller:'navegacion'
        }).when('/apartados',{
            templateUrl:'apartados.html',
            controller:'apartados',

        }). when('/incidencias',{
            templateUrl:'incidencias.html',
            controller:'incidencias'
        }).
            otherwise('/');
       // $httpProvider.defaults.headers.common['X-Requested-With']='XMLHttpRequest';
    })
    .controller('inicio', function($scope, $http){
        $scope.mensaje='';
        console.log("controlador de inicio")
        /*
        $http.get('recurso').success(function(data) {
            $scope.saludo = data;
            console.log('Este es un recuros');
        })
*/

    }).controller('navegacion',function($rootScope,$scope,$http,$location,$route){
        console.log("se cargo el controlador de navegacion")
        $scope.tab = function(route) {
            return $route.current && route === $route.current.controller;
        };

    }).controller('incidencias',function($rootScope,$scope,Upload, $timeout,$rootScope, $http,$resource,$log) {
        $scope.hola = "hola desde los reactivos";
        console.log('Controlador incidencias');
    })
       .controller('apartados',function($rootScope,$scope,Upload, $timeout,$rootScope, $http,$resource,$log) {
    $scope.hola = "hola desde los reactivos";
    console.log('Controlador incidencias');
});

