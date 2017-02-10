var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "main.html"
                })
                .when("/products", {
                        templateUrl: "products.html"
                    }
                    .when("/ContactUs", {
                        templateUrl: "contactus.html"
                    })
                })