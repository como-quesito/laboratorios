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
    $scope.hola="hola desde los reactivos";




    var Profesor=$resource('reactivo/:id',{id:'@id'},{crear:{method:'POST'},
        actualizar:{method:'PUT'}, borrar:{method:'DELETE'}});


    /*

     $rootScope.setSelected = function(prop){
     $rootScope.selectedprop = prop;
     console.log(prop.label);
     };
     $rootScope.props = [{label: "1.", tema:"Introduccion"},{label: "2.", tema:"bases"},{label: "3.", tema:"conclusiones"}];

     $rootScope.agarrar=function(){

     }


     //GET Todos

     $scope.reactivo=Reactivo.query(function(){
     console.log($scope.reactivo.length);
     })


     //Get por id
     $scope.buscarPorId=function(){

     $scope.usu=Usuario.get({id:1

     }, function(){
     console.log("Usuario obtenido:"+$scope.usu.nombre);
     });
     }


     //UPDATE
     $scope.actualizarUsuario=function(){
     console.log("antes del evento update");
     var usuario = new Usuario();
     usuario.login = $scope.login;
     usuario.password = $scope.password;
     usuario.email =$scope.email;
     usuario.$actualizar(function (data) {
     console.log(data.nombre);
     });
     }

     //DELETE
     $scope.borrarUsuario=function(){
     var usuario=new Usuario();
     usuario.id=5;
     usuario.$borrar();
     console.log("si se borro");
     }
     */
    //POST
    $scope.guardarProfesorReactivo=function() {





        console.log("tamaño de los radiesitos:"+ $scope.misradiesitos.length);

        var profesor = new Profesor({
            'password': $rootScope.passwordactual,
            'reactivos':[
                {
                    'pregunta':$scope.pregunta,
                    'urlimagen':"leer-imagen/"+$rootScope.rutaimagen,
                    'tema':$scope.tema,
                    'retroalimentacion':$scope.retroalimentacion,
                    'opciones':[
                        {
                            'titulo':$scope.titulo1,
                            'acierto':valores[0]
                        },
                        {
                            'titulo':$scope.titulo2,
                            'acierto':valores[1]
                        },
                        {
                            'titulo':$scope.titulo3,
                            'acierto':valores[2]
                        },
                        {
                            'titulo':$scope.titulo4,
                            'acierto':valores[3]
                        }
                    ]
                }
            ]
        });
        //  profesor.password = $rootScope.passwordactual;




        profesor.$crear(function (data) {
            console.log(data.password);
            console.log(data.reactivos[0].pregunta);
            $rootScope.rutaimagen='';
        });






    };// Termina boton guardarUsuario()


});

