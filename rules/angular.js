module.exports = {
  'plugins': [
    'angular'
  ],
  'rules': {
    // disallow to reference modules with variables and require to use the getter syntax instead angular.module('myModule') (y022)
    'angular/module-getter': 0,

    // disallow to assign modules to variables (linked to module-getter (y021)
    'angular/module-setter': 0,

    // disallow use of internal angular properties prefixed with $$
    'angular/no-private-call': 2,

    // limit the number of angular components per file (y001)
    'angular/component-limit': [2, 3],

    // require the use of controllerAs in routes or states (y031)
    'angular/controller-as-route': 0,

    // require and specify a capture variable for this in controllers (y032)
    'angular/controller-as-vm': 0,

    // disallow assignments to $scope in controllers (y031)
    'angular/controller-as': 0,

    // use $q(function(resolve, reject){}) instead of $q.deferred
    'angular/deferred': 2,

    // disallow unused DI parameters
    'angular/di-unused': 2,

    // disallow any other directive restrict than 'A' or 'E' (y074)
    'angular/directive-restrict': 2,

    // disallow empty controllers
    'angular/empty-controller': 2,

    // disallow use of controllers (according to the component first pattern)
    'angular/no-controller': 0,

    // disallow the use of inline templates
    'angular/no-inline-template': 2,

    // keep run functions clean and simple (y171)
    'angular/no-run-logic': 0,

    // disallow DI of specified services for other angular components ($http for controllers, filters and directives)
    'angular/no-services': 0,

    // require $on and $watch deregistration callbacks to be saved in a variable
    'angular/on-watch': 2,

    // use $cookies instead of $cookieStore
    'angular/no-cookiestore': 2,

    // disallow the deprecated directive replace property
    'angular/no-directive-replace': 2,

    // disallow the $http methods success() and error()
    'angular/no-http-callback': 2,

    // require and specify a prefix for all controller names (y123, y124)
    'angular/controller-name': [2,'/Controller$/'],

    // require and specify a prefix for all directive names (y073, y126)
    'angular/directive-name': 0,

    // require and specify a consistent component name pattern (y120, y121)
    'angular/file-name': 2,

    // require and specify a prefix for all filter names
    'angular/filter-name': 0,

    // require and specify a prefix for all module names (y127)
    'angular/module-name': 0,

    // require and specify a prefix for all service names (y125)
    'angular/service-name': 0,

    // require DI parameters to be sorted alphabetically
    'angular/di-order': 0,

    // require a consistent DI syntax
    'angular/di': 2,

    // unittest inject functions should only consist of assignments from injected values to describe block variables
    'angular/dumb-inject': 2,

    // require and specify a consistent function style for components ('named' or 'anonymous') (y024)
    'angular/function-type': 2,

    // require a consistent order of module dependencies
    'angular/module-dependency-order': 0,

    // use factory() instead of service() (y040)
    'angular/no-service-method': 2,

    // require all DI parameters to be located in their own line
    'angular/one-dependency-per-line': 0,

    // disallow different rest service and specify one of '$http', '$resource', 'Restangular'
    'angular/rest-service': 0,

    // require and specify consistent use $scope.digest() or $scope.apply()
    'angular/watchers-execution': 2,

    // use angular.element instead of $ or jQuery
    'angular/angularelement': 2,

    // use angular.isDefined and angular.isUndefined instead of other undefined checks
    'angular/definedundefined': 2,

    // use $document instead of document (y180)
    'angular/document-service': 2,

    // use angular.forEach instead of native Array.prototype.forEach
    'angular/foreach': 2,

    // use $interval instead of setInterval (y181)
    'angular/interval-service': 2,

    // use angular.fromJson and 'angular.toJson' instead of JSON.parse and JSON.stringify
    'angular/json-functions': 2,

    // use the $log service instead of the console methods
    'angular/log': 2,

    // require to use angular.mock methods directly
    'angular/no-angular-mock': 2,

    // disallow to wrap angular.element objects with jQuery or $
    'angular/no-jquery-angularelement': 2,

    // use $timeout instead of setTimeout (y181)
    'angular/timeout-service': 2,

    // use angular.isArray instead of typeof comparisons
    'angular/typecheck-array': 2,

    // use angular.isDate instead of typeof comparisons
    'angular/typecheck-date': 2,

    // use angular.isFunction instead of typeof comparisons
    'angular/typecheck-function': 2,

    // use angular.isNumber instead of typeof comparisons
    'angular/typecheck-number': 2,

    // use angular.isObject instead of typeof comparisons
    'angular/typecheck-object': 2,

    // use angular.isString instead of typeof comparisons
    'angular/typecheck-string': 2,

    // use $window instead of window (y180)
    'angular/window-service': 2,
  }
};
