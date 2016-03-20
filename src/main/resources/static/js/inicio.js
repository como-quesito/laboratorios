/**
 * Created by campitos on 6/11/15.
 */
angular.module('inicio',['ngRoute','ngResource','ngFileUpload','ngMaterial', 'ngMdIcons'])
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
            when('/apartados2',{
            templateUrl:'apartados2.html',
            controller:'apartados2'
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

    }).controller('incidencias',function($rootScope,$scope,Upload, $timeout,$rootScope, $http,$resource,$log,$timeout, $q) {



        var self = this;
        $scope.simulateQuery = false;
        $scope.isDisabled    = false;
        // list of `state` value/display objects
        $scope.states        = loadAll();
        $scope.querySearch   = querySearch;
        $scope.selectedItemChange = selectedItemChange;
        $scope.searchTextChange   = searchTextChange;
        $scope.searchText;
        $scope.newState=  function newState(state) {
            alert("Lo siento necesitas primero construir una constitucion para " + state + " primero!");
            console.log('Te has metido e la constitucion mexicana jejejeje');
        }
        // ******************************
        // Internal methods
        // ******************************
        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch (query) {
            var results = query ? $scope.states.filter( createFilterFor(query) ) : $scope.states,
                deferred;
            if ($scope.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }
        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }
        function selectedItemChange(item) {
            $log.info('Item changed to ' + JSON.stringify(item));
        }
        /**
         * Build `states` list of key/value pairs
         */
        function loadAll() {
            var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
            return allStates.split(/, +/g).map( function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }
        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }














        $scope.hola = "hola desde los reactivos";
        console.log('Controlador incidencias');
    }).controller('home',function($rootScope,$scope,Upload, $timeout,$rootScope, $http,$resource,$log) {
        $scope.hola = "hola desde los reactivos";
        console.log('Controlador home');
    })
       .controller('apartados',function($rootScope,$scope,Upload, $timeout, $http,$resource,$log,$mdDialog,$q) {















        $scope.hola = "hola desde los reactivos";
            console.log('Controlador apartados');
           $scope.title1 = 'Button';
           $scope.title4 = 'Warn';
           $scope.isDisabled = true;
           $scope.miDate;
           $scope.horario;
           $scope.coal;
           $scope.copr;
           $scope.obge;
           $scope.profe;

   $scope.apartar=function(){
       console.log('Haz hecho clicki en apartados');
       $http.post("apartado/"+$scope.miDate).success(function(datos){
           console.log(datos);

           //Abrimos la ventanita de dialogos
           $mdDialog.show(
               $mdDialog.alert()
                   .clickOutsideToClose(true)
                   .title('Apartado guardado')
                   .textContent('MALO')
                   .ariaLabel('Estatus:')
                   .ok('Bien!')
                   // You can specify either sting with query selector
                   .openFrom('#left')
                   // or an element
                   .closeTo(angular.element(document.querySelector('#right')))
           );

       });



   }//TERMINA EL METODO PARA GUARDAR UNA INCIDENCIA


           //dialogo
           $scope.openFromLeft = function() {
               $mdDialog.show(
                   $mdDialog.alert()
                       .clickOutsideToClose(true)
                       .title('Opening from the left')
                       .textContent('Closing to the right!')
                       .ariaLabel('Left to right demo')
                       .ok('Nice!')
                       // You can specify either sting with query selector
                       .openFrom('#left')
                       // or an element
                       .closeTo(angular.element(document.querySelector('#right')))
               );
           };

           $scope.openOffscreen = function() {
               $mdDialog.show(
                   $mdDialog.alert()
                       .clickOutsideToClose(true)
                       .title('Opening from offscreen')
                       .textContent('Closing to offscreen')
                       .ariaLabel('Offscreen Demo')
                       .ok('Amazing!')
                       // Or you can specify the rect to do the transition from
                       .openFrom({
                           top: -50,
                           width: 30,
                           height: 80
                       })
                       .closeTo({
                           left: 1500
                       })
               );
           };
           $scope.googleUrl = 'http://google.com';
    /****************************************************************************
     CODIGO DEL AFUNCION DE AUTOCOMLETADO
     ***************************************************************************/

    var self = this;

        self.simulateQuery = false;
        self.isDisabled    = false;

        // list of `state` value/display objects
        self.states        = loadAll();
        self.querySearch   = querySearch;
        self.selectedItemChange = selectedItemChange;
        self.searchTextChange   = searchTextChange;

        self.newState = newState;

        function newState(state) {
            alert("Sorry! You'll need to create a Constituion for " + state + " first!");
        }

        // ******************************
        // Internal methods
        // ******************************

        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch (query) {
            var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
                deferred;
            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
            $log.info('Item changed to ' + JSON.stringify(item));
        }

        /**
         * Build `states` list of key/value pairs
         */
        function loadAll() {
            var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

            return allStates.split(/, +/g).map( function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };

        }
    //**************TERMINA AUTOCOMPLETADO


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



}).controller('incidencias',function($rootScope,$scope,Upload, $timeout,$rootScope, $http,$resource,$log, $mdDialog, $q){

    // REST PAREA INCIDENCIAS LA DEFINIMOS GLOBALMENTE DENTRO DE CONTROLADOR
    var Incidencia=$resource('incidencia/:id',{id:'@id'},{crear:{method:'POST'},
        actualizar:{method:'PUT'}, borrar:{method:'DELETE'}});

        console.log("Controlador Incidencias")

        $scope.tamanios=[{tamano:'1'},{tamano:'2'},{ tamano:'3'},{tamano:'4'},{tamano:'5'},{tamano:'6'},{tamano:'7'}
            ,{tamano:'8'},{tamano:'9'},{tamano:'10'},{tamano:'11'},{tamano:'12'},{tamano:'13'},{tamano:'14'}];

        $scope.horarios=[{hora:'07-09'},{hora:'07-08:30'},{ hora:'08:30-10'},{hora:'09-11'},{hora:'10-11:30'},{hora:'11-13'},{hora:'11:30-13'}
            ,{hora:'13-15'},{hora:'14-16'},{hora:'16-18'},{hora:'16-20'},{hora:'18-20'},{hora:'19-20:30'},{hora:'20-22'},{hora:'20:30-22'}];

        $scope.salones=[{sala:'T-101'},{sala:'T-102'},{ sala:'T-10A'},{sala:'T-10B'},{sala:'T-104'},{sala:'T-105'},{sala:'T-106'}
            ,{sala:'T-107'},{sala:'T-201'},{sala:'T-202'},{sala:'T-203'},{sala:'T-204'},{sala:'T-205'},{sala:'T-206'},{sala:'T-301'},
            {sala:'T-302'},{sala:'T-303'},{sala:'T-304'},{sala:'T-305'},{sala:'T-401'},{sala:'T-402'},{sala:'T-403'},
            {sala:'T-404'},{sala:'T-405'},{sala:'T-406'},{sala:'T-407'},{sala:'T-408'}];
        $scope.miSemana;
        $scope.miHorario;
        $scope.miSalon;


    /*
    CODIGO DE AUTOCOMPLETADO
     */
    /*
     CODIGO DE AUTOCOMPLETADO
     */

    var self = this;
    $scope.simulateQuery = false;
    $scope.isDisabled    = false;
    // list of `state` value/display objects
    $scope.selectedItem  = null;
    $scope.states        = loadAll();
    $scope.querySearch   = querySearch;
    $scope.selectedItemChange = selectedItemChange;
    $scope.searchTextChange   = searchTextChange;
    $scope.searchText         =null;
    $scope.newState=  function newState(state) {
        alert("Lo siento necesitas primero construir una constitucion para " + state + " primero!");
        console.log('Te has metido e la constitucion mexicana jejejeje');
    }
    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
        var results = query ? $scope.states.filter( createFilterFor(query) ) : $scope.states,
            deferred;
        if ($scope.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    }
    function searchTextChange(text) {
        $log.info('Text changed to ' + text);
    }
    function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
    }
    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
        var allStates = 'Juan Carlos Campos Martinez, Ulises Ivan Lujan Salazar, Carlos Jurado Aguirre, Ivan Hernandes Hernandez, Paola Elizabeth Ramirez Santiago';
        return allStates.split(/, +/g).map( function (state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };
    }

    //TERMINA CODIGO DE AUTOCOMPLETADO



    $scope.guardarIncidencia=function(){
//Transformamos los tipos d dato al correspondiente cuando no son string

        //Creamos una Incidencia como clase con ayuda de los ng-model
        var incidencia =new Incidencia({
           "sala":$scope.sala,
           "reporta":$scope.reporta,
            "horario":$scope.horario,
            "fecha":$scope.miFechaIncidencia,
            "semana":5,
            "nupc":$scope.Nupc,
            "coal":$scope.CoAl,
            "copr":$scope.CoPr,
            "obge":$scope.ObGe,
            "profe":$scope.Profe


        });
        //LA SOMETEMOS AL METODO POST
        incidencia.$crear(function (mensaje) {
            console.log(mensaje.titulo);
            console.log("Valor que envia"+$scope.miSemana);


            //Abrimos la ventanita de dialogos
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Incidencia guardada')
                    .textContent(mensaje.titulo)
                    .ariaLabel('Estatus:'+mensaje.estatus)
                    .ok('Bien!')
                    // hacia donde abre
                    .openFrom('#left')
                    // elemento
                    .closeTo(angular.element(document.querySelector('#right')))
            );

        });

    }//TERMINA EL METODO GUARDAR INCIDENCIA


    $scope.actualizarApartado=function(){

    }
    $scope.buscarTodosApartados=function(){

    }
    $scope.buscarPorIdApartado=function(){

    }
    $scope.borrarApartado=function(){

    }



}).controller('apartados2', function($scope, $http, $resource, $mdDialog,$timeout, $q, $log){
    console.log('APARTADOS2');
    /*
     un jsoncito para tamaños de bebidas
     */
   $scope.tamanios=[{tamano:'chico'},{tamano:'mediano'},{ tamano:'grande'}];


/*
CODIGO DE AUTOCOMPLETADO
 */

            var self = this;
            $scope.simulateQuery = false;
            $scope.isDisabled    = false;
            // list of `state` value/display objects
            $scope.states        = loadAll();
            $scope.querySearch   = querySearch;
            $scope.selectedItemChange = selectedItemChange;
            $scope.searchTextChange   = searchTextChange;
            $scope.searchText;
          $scope.newState=  function newState(state) {
                alert("Lo siento necesitas primero construir una constitucion para " + state + " primero!");
                console.log('Te has metido e la constitucion mexicana jejejeje');
            }
            // ******************************
            // Internal methods
            // ******************************
            /**
             * Search for states... use $timeout to simulate
             * remote dataservice call.
             */
            function querySearch (query) {
                var results = query ? $scope.states.filter( createFilterFor(query) ) : $scope.states,
                    deferred;
                if ($scope.simulateQuery) {
                    deferred = $q.defer();
                    $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                    return deferred.promise;
                } else {
                    return results;
                }
            }
            function searchTextChange(text) {
                $log.info('Text changed to ' + text);
            }
            function selectedItemChange(item) {
                $log.info('Item changed to ' + JSON.stringify(item));
            }
            /**
             * Build `states` list of key/value pairs
             */
            function loadAll() {
                var allStates = 'Aguascalientes, Baja California, Baja California Sur, Campeche, Yucatan, Estado de México,\
              Durango, Nuevo Leon, Queretaro, San Luis Potpsi, Chiapas, Guerrero, Hidalgo, Puebla, Sonora, Chihuahua,\
              Morelos, Veracruz';
                return allStates.split(/, +/g).map( function (state) {
                    return {
                        value: state.toLowerCase(),
                        display: state
                    };
                });
            }
            /**
             * Create filter function for a query string
             */
            function createFilterFor(query) {
                var lowercaseQuery = angular.lowercase(query);
                return function filterFn(state) {
                    return (state.value.indexOf(lowercaseQuery) === 0);
                };
            }

    //TERMINA CODIGO DE AUTOCOMPLETADO



})
    .config(function($mdIconProvider) {
    $mdIconProvider
        .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
        .defaultIconSet('img/icons/sets/core-icons.svg', 24);
}).config(function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function(date) {
        return moment(date).format('YYYY-MM-DD');
    };
});


