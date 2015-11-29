/**
 * Created by campitos on 6/11/15.
 */
angular.module('inicio',['ngRoute','ngResource','ngFileUpload'])
    .config(function($routeProvider,$httpProvider){
        $routeProvider.when('/',{
            templateUrl:'home.html',
            controller:'home'
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
    }).controller('home', function($scope, $http){
        $scope.mensaje='';
        $http.get('recurso').success(function(data) {
            $scope.saludo = data;
            console.log('Ya estas en home');
        })


    }).controller('navegacion',function($rootScope,$scope,$http,$location,$route){
        console.log("se cargo el controlador de navegacion")
        $scope.tab = function(route) {
            return $route.current && route === $route.current.controller;
        };
        $rootScope.loading=false;

    }).controller('incidencias',function($rootScope,$scope,Upload, $timeout,$rootScope, $http,$resource,$log) {
        $scope.hola = "hola desde los reactivos";
        console.log('Controlador incidencias');
    }).controller('home',function($rootScope,$scope,Upload, $timeout,$rootScope, $http,$resource,$log) {
        $scope.hola = "hola desde los reactivos";
        console.log('Controlador home');
    })
       .controller('apartados',function($rootScope,$scope,Upload, $timeout,$rootScope, $http,$resource,$log) {
    $scope.hola = "hola desde los reactivos";
    console.log('Controlador apartados');


}).controller('profesores',function($rootScope,$scope,Upload, $timeout,$rootScope, $http,$resource,$log){

    console.log("Controlador Profesores")
    $scope.guardarProfesor=function(){

    }
    $scope.actualizarProfesor=function(){

    }
    $scope.buscarTodosProfesores=function(){

    }
    $scope.buscarPorIdProfesor=function(){

    }
    $scope.borrarProfesor=function(){

    }



})
    .controller('incidencias',function($rootScope,$scope,Upload, $timeout,$rootScope, $http,$resource,$log){

    console.log("Controlador Incidencias")
    $scope.guardarIncidencia=function(){
          $http.post('/incidencias/valorcito').success(function(datos){
              console.log(datos);
          });
    }
    $scope.actualizarIncindencia=function(){

    }
    $scope.buscarTodosIncindencias=function(){

    }
    $scope.buscarPorIdIncidencia=function(){

    }
    $scope.borrarIncidencia=function(){

    }



}) .controller('apartados',function($rootScope,$scope,Upload, $timeout,$rootScope, $http,$resource,$log){

    console.log("Controlador Apartados")
    $scope.guardarIncidencia=function(){

    }
    $scope.actualizarApartado=function(){

    }
    $scope.buscarTodosApartados=function(){

    }
    $scope.buscarPorIdApartado=function(){

    }
    $scope.borrarApartado=function(){

    }



});


