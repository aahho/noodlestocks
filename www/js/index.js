(function (window, angular) {

    var TEMPLATE_URL = "views/";

    var DDT = angular.module('duckducktech', [
         'ui.bootstrap',
         'ui.router',
         'toaster',
         'ngFileUpload',
         'dcbImgFallback'
    ]);

    var API_ENDPOINT = "http://aahhostocks.dev:5000/api/v1";
    var UPLOAD_ENDPOINT = "http://139.59.42.80/service/s3/upload?app=noodlestock";

    var getTld = location.hostname.split('.').reverse()[0];

    if (getTld === 'com') {
        API_ENDPOINT = "http://noodlestock.com:5000/api/v1";
    }

    DDT.config(["$compileProvider", "$stateProvider", "$locationProvider", '$httpProvider', '$urlRouterProvider', function ($compileProvider, $stateProvider, $locationProvider, $httpProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);

        $httpProvider.interceptors.push('authInterceptor');

        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);




        $stateProvider


        .state("feeds",{
            url: '/',
            templateUrl: TEMPLATE_URL + 'feed.html',
            controller: 'feedController'
        })
        .state("stocks",{
            url: '/s/:code',
            templateUrl: TEMPLATE_URL + 'stocks.html',
            controller: 'stocksController'
        });

        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get("$state");
            $state.go('feeds');
        });
    }]);

    DDT.factory('authInterceptor', ['$window', '$rootScope', '$q', function ($window, $rootScope, $q) {

        return {
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.localStorage.token) {

                                        config.headers['Authorization'] = $window.localStorage.token;
                    delete config.headers['__setXHR_'];
                }
                return config;
            },
            requestError: function (rejection) {
                return $q.reject(rejection);
            },

            response: function (response) {
                return response || $q.when(response);
            },
            responseError: function (rejection) {
                if(rejection.status === 304) {
                    return etagStore.getItem(rejection.config.url).data;
                }
                $rootScope.$broadcast('Error', rejection);
                return $q.reject(rejection);
            }
        };
    }]);

    DDT.factory("ddtServices", ["$http", "$q", "$rootScope", "Upload", function ($http, $q, $rootScope, Upload) {



                var ajaxCall = function (URL, METHOD, DATA) {
            var deferred = $q.defer();
            $http({
                url: URL,
                method: METHOD,
                data: DATA
            }).then(function (response) {
                deferred.resolve(response);
            }, function (rejection) {
                deferred.reject(rejection);
            });

            return deferred.promise;
        };

        return {
            getFeedsList: function (args) {
                var URL = API_ENDPOINT + args,
                    METHOD = 'GET';
                return ajaxCall(URL, METHOD, undefined);
            },
            getArticle: function (entityId) {
                var URL = API_ENDPOINT + entityId,
                    METHOD = 'GET';
                return ajaxCall(URL, METHOD, undefined);
            },
            getFeedsByUrl: function (url) {
                var URL = url,
                    METHOD = 'GET';
                return ajaxCall(URL, METHOD, undefined);
            },
            getCompanies: function (items, page) {
                var URL = API_ENDPOINT + '/companies?items='+items+'&page='+page;
                var METHOD = 'GET';
                return ajaxCall(URL, METHOD, undefined);
            },
            getCompany: function (code) {
                var URL = API_ENDPOINT + '/companies/' + code + '/stocks';
                var METHOD = 'GET';
                return ajaxCall(URL, METHOD, undefined);
            },
            getComments: function(code){
                var URL = API_ENDPOINT + '/companies/' + code + '/comments';
                var METHOD = 'GET';
                return ajaxCall(URL, METHOD, undefined);
            },

            postComment: function(code, data){
                var URL = API_ENDPOINT + '/companies/' + code + '/comments';
                var METHOD = 'POST';
                return ajaxCall(URL, METHOD, data);
            },

            signup: function(data){
                var URL = API_ENDPOINT + '/users';
                var METHOD = 'POST';
                return ajaxCall(URL, METHOD, data);
            },

            login: function(data){
                var URL = API_ENDPOINT + '/login';
                var METHOD = 'POST';
                return ajaxCall(URL, METHOD, data);
            },
            searchCompanies: function (search) {
                var URL = API_ENDPOINT + '/companies/filter?q='+search+'&page=1&items=30';
                var METHOD = 'GET';
                return ajaxCall(URL, METHOD, undefined);
            },
            trendingCompanies: function(){
                var URL = API_ENDPOINT + '/companies/trending';
                var METHOD = 'GET';
                return ajaxCall(URL, METHOD, undefined);
            },
            getWatchlist: function(){
                var URL = API_ENDPOINT + '/users/watchlist';
                var METHOD = 'GET';
                return ajaxCall(URL, METHOD, undefined);
            },
            addToWatchlist: function(id){
                var URL = API_ENDPOINT + '/companies/' + id + '/watchlist';
                var METHOD = 'POST';
                return ajaxCall(URL, METHOD, undefined);
            },
            deleteWatchlistItem: function(code){
                var URL = API_ENDPOINT + '/companies/' + id + '/watchlist';
                var METHOD = 'DELETE';
                return ajaxCall(URL, METHOD, data);
            },
            uploadImage: function(files) {
                console.log("inside upload service", files);
                var deferred = $q.defer(),
                    uploadFn = null;
                for (var i = 0; i < files.length; i++) {
                    if ($rootScope.fileSizeAlert(files[i])) {
                        deferred.resolve('');
                    } else {
                        var file = files[i];
                        Upload.upload({
                            url: UPLOAD_ENDPOINT,
                            file: file,
                            fileFormDataName: 'files[]'
                        }).success(function(data, status, headers, config) {
                            console.log("upload success", data);
                            deferred.resolve(data)
                        }).error(function(data, status, headers, config) {
                            console.log("upload error", data);
                            deferred.resolve(data)
                        });
                    }
                }
                return deferred.promise;
            }
        }
    }]);

    DDT.controller('baseController',['$scope','$rootScope', 'ddtServices', '$window', 'toaster', '$state', '$http', function ($scope, $rootScope, ddtServices, $window, toaster, $state, $http) {

                $rootScope.iflogin = false;

        if($window.localStorage.token){
            $rootScope.iflogin = true; 
            $rootScope.userObj = JSON.parse($window.localStorage.user);
        }

        $scope.isHomepage = function(){
            if($state.current.name == 'feeds')
                return true;
            else
                return false;
        }

        $scope.openSignupModel = function(){
            $('#signup').modal('show');
        }

        $scope.logout = function(){
            delete $window.localStorage.token;
            delete $window.localStorage.user;
            $rootScope.userObj = {};
            $rootScope.iflogin = false;
            toaster.pop('success', "Logged out Successfull");
        }

        $scope.user = {};
        $scope.submitInProgress = false;
        $scope.login = function(user) {

            if (!$scope.submitInProgress) {
                $scope.submitInProgress = true;

                ddtServices.login(user).then(function(response) {
                    $scope.submitInProgress = false;
                    $scope.user = {};
                    $window.localStorage.token = response.data.token;
                    $window.localStorage.user = JSON.stringify(response.data);
                    $rootScope.userObj = response.data;
                    $rootScope.iflogin=true;
                    $state.go('feeds');
                    $scope.getWatchlist();
                    $('#login').modal('hide');
                    toaster.pop('success', "logged in");
                },function(response){
                    $scope.submitInProgress = false;
                    toaster.pop('error', response.data.message);
                });
            }
        };

        $scope.signup = function(userdata) {

            var user = {
                email : userdata.email,
                password: userdata.password,
                name: userdata.name
            }

            if (!$scope.submitInProgress) {
                $scope.submitInProgress = true;

                ddtServices.signup(user).then(function(response) {
                    $scope.submitInProgress = false;
                    $scope.user = {};
                    if (response.status === 200) {
                        toaster.pop('success', 'signed up');
                        $state.go('login');
                        $('#signup').modal('hide');
                    }else{
                        toaster.pop('error', response.data.message);
                    }
                });
            }
        };

        $scope.searchCompanies = function(str){

            return $http.get(API_ENDPOINT + '/companies/filter?q='+str+'&page=1&items=30', {
                  params: {
                  }
                }).then(function(response){
                  return response.data.data.map(function(item){
                    return item;
                  });
                });
        };

        $scope.gotopage = function(str){
            $state.go('stocks',{code: str.code});
        };


        $scope.gettrendingCompanies = function(){

            ddtServices.trendingCompanies().then(function(response) {
                if (response.status === 200) {

                                        $scope.isSubmitInProgress = false;
                    $scope.trendingCompanies = response.data.data;
                    $scope.trendingCompanies.forEach(function(entry){
                        entry.stock.change = Math.abs(entry.stock.close - entry.stock.open);
                        entry.stock.percentageChange = (100 * entry.stock.change/entry.stock.open).toFixed(2);
                        entry.stock.change = entry.stock.change.toFixed(2);
                        entry.stock.isPositive = true;
                        if(entry.stock.close < entry.stock.open){
                            entry.stock.isPositive = false;
                        }
                    });

                                    }
            }); 
        };
        $scope.gettrendingCompanies();

        $scope.showWatchlist = false;
        $scope.getWatchlist = function(){

            ddtServices.getWatchlist().then(function(response) {
                $scope.showWatchlist = true;
                if (response.status === 200) {
                    $scope.watchList = response.data.data;
                    $scope.watchList.forEach(function(entry){
                        entry.stock.change = Math.abs(entry.stock.close - entry.stock.open);
                        entry.stock.percentageChange = (100 * entry.stock.change/entry.stock.open).toFixed(2);
                        entry.stock.change = entry.stock.change.toFixed(2);
                        entry.stock.isPositive = true;
                        if(entry.stock.close < entry.stock.open){
                            entry.stock.isPositive = false;
                        }
                    });
                }
            });
        };

        if($rootScope.userObj && $rootScope.userObj.id)
            $scope.getWatchlist();


        $scope.addtoWathclist = function(event, item){

            event.preventDefault();
            event.stopPropagation();

            var index = $scope.watchList.map(function(e) {
                return e.id;
            }).indexOf(item.id);

            if($rootScope.userObj && $rootScope.userObj.id){

                if(index === -1)
                ddtServices.addToWatchlist(item.id).then(function(response) {
                    if (response.status === 200) {
                        $scope.watchList.push(item);
                    }
                });

            }else{
                $('#login').modal('show');
            }
        };

        $scope.deleteItemWatchlist = function(id, index){

            if($rootScope.userObj && $rootScope.userObj.id){

                ddtServices.deleteWatchlistItem(id).then(function(response) {
                    if (response.status === 200) {
                        $scope.watchList.splice(index, 1);
                    }
                });

            }else{
                $('#login').modal('show');
            }
        };

        $rootScope.fileSizeAlert = function(file){
            var defaultMinSize = 0 *1024; 
            var defaultMaxSize = 50 *1024 *1024; 

            if (defaultMaxSize < file.size || file.size < defaultMinSize) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('File size should be between 10KB-50MB.')
                        .hideDelay(4000)
                );
                return true;
            }
            return false;
        };

    }]);

    DDT.controller("feedController", ['$scope', '$location', '$timeout','ddtServices', '$window', '$rootScope', function ($scope, $location, $timeout, ddtServices, $window, $rootScope) {

                $scope.feedsList = [];
        $scope.feedsListPagination = {};
        $scope.feedData = {};
        $scope.loadingFeeds = true;
        $scope.getClass = function (path) {
            return ($location.path().substr(0, path.length) === path);
        }
        $scope.getRandomVal = function () {
            return parseInt(Math.round((Math.random() * (3 - 1) + 1)));
        }

        $scope.paginate = {
            "items": 30,
            "next": 1
        };
        $scope.isSubmitInProgress = false;
        $scope.disableInfiniteScroll = false;
        $scope.feedsList = [];
        $scope.getCompanies = function(){
            $scope.isSubmitInProgress = true;


                        ddtServices.getCompanies($scope.paginate.items, $scope.paginate.next).then(function(response) {
                if (response.status === 200) {

                    $scope.isSubmitInProgress = false;

                    if(response.data.data.length < $scope.paginate.items){
                        $scope.disableInfiniteScroll = true;
                    }

                                        $scope.paginate = response.data.paginate;

                    response.data.data.forEach(function(entry){
                        entry.description = entry.description.replace(/<br><br>/g, "<br>")
                        entry.stock.change = Math.abs(entry.stock.close - entry.stock.open);
                        entry.stock.percentageChange = (100 * entry.stock.change/entry.stock.open).toFixed(2);
                        entry.stock.change = entry.stock.change.toFixed(2);
                        entry.stock.isPositive = true;
                        if(entry.stock.close < entry.stock.open){
                            entry.stock.isPositive = false;
                        }
                        $scope.feedsList.push(entry);
                    });
                }
            }); 
        };
        $scope.getCompanies();

        var isLoadingFeeds = false;

        $rootScope.showSecondaryNavbar = false;
        angular.element($window).bind("scroll", function() {
            if($(this).scrollTop() > 180)
                $rootScope.showSecondaryNavbar = true;
            else
                $rootScope.showSecondaryNavbar = false;
            $scope.$apply();


            if($(this).scrollTop() + $(this).innerHeight() >=  $('.feed-content')[0].scrollHeight - 1000) {
                console.log('end reached', $scope.feedsListPagination.next_page);
                if(!$scope.isSubmitInProgress && !$scope.disableInfiniteScroll)
                    $scope.getCompanies();
            }
        });



            }]);


    DDT.controller("stocksController", ['$scope', '$location', '$timeout','ddtServices', '$window', '$stateParams', '$rootScope', function ($scope, $location, $timeout, ddtServices, $window, $stateParams, $rootScope) {

                $scope.paginate = {
            "items": 100,
            "next": 1
        };

        $scope.isSubmitInProgress = true;
        $scope.disableInfiniteScroll = false;
        $scope.comments = [];
        $scope.commentsPagination = {};


        ddtServices.getCompany($stateParams.code).then(function(response) {
            $scope.isSubmitInProgress = false;
            if (response.status === 200) {
                $scope.feed = response.data;

                $scope.feed.stock.change = Math.abs($scope.feed.stock.close - $scope.feed.stock.open);
                $scope.feed.stock.percentageChange = (100 * $scope.feed.stock.change/$scope.feed.stock.open).toFixed(2);
                $scope.feed.stock.change = $scope.feed.stock.change.toFixed(2);
                $scope.feed.stock.isPositive = true;
                if($scope.feed.stock.close < $scope.feed.stock.open){
                    $scope.feed.stock.isPositive = false;
                }

                $scope.getComments();
            }
        });

        $scope.getComments = function(){
            $scope.isSubmitInProgress = true;
            ddtServices.getComments($scope.feed.id).then(function(response) {
                if (response.status === 200) {

                    $scope.isSubmitInProgress = false;

                    if(response.data.data.length < $scope.paginate.items){
                        $scope.disableInfiniteScroll = true;
                    }
                    $scope.paginate = response.data.paginate;

                    response.data.data.forEach(function(entry){
                        $scope.comments.push(entry);
                    });
                }
            }); 
        };

        $rootScope.showSecondaryNavbar = false;
        angular.element($window).bind("scroll", function() {
            if($(this).scrollTop() > 180)
                $rootScope.showSecondaryNavbar = true;
            else
                $rootScope.showSecondaryNavbar = false;
            $scope.$apply();


            if($(this).scrollTop() + $(this).innerHeight() >=  $('.feed-content')[0].scrollHeight - 1000) {
                if(!$scope.isSubmitInProgress && !$scope.disableInfiniteScroll && $scope.feed && $scope.feed.id)
                    $scope.getComments();
            }
        });

        $scope.isPostingComment = false;
        $scope.postComment = function(comment){

            $scope.isPostingComment = true;
            if(!$scope.comment.type)
                comment.type = 'text';

            ddtServices.postComment($scope.feed.id, comment).then(function(response) {
                $scope.isPostingComment = false;
                if (response.status === 200) {
                    $scope.comments.splice(0, 0, response.data);
                    $scope.comment = {
                        comment: ''
                    };
                }
            });
        };

        $scope.comment = {
            comment: ''
        };

        $scope.isUploading = false;
        $scope.uploadDocument = function(file, index) {

            var uploadedBy = {
                id: $rootScope.userObj.id,
                name: $rootScope.userObj.displayName,
                email: $rootScope.userObj.email,
                date: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            };
            if (file && file.length) {
                $scope.isUploading = true;
                $scope.uploadIndex = index;
                ddtServices.uploadImage(file).then(function(data) {
                    $scope.isUploading = false;
                    console.log("upload response", data);
                    $scope.comment.type = 'attachment';
                    $scope.comment.data = data.data[0];
                }, function(reject) {
                    $scope.isUploading = false;
                    $scope.uploadIndex = -1;
                    $mdToast.show($mdToast.simple().textContent(reject.data.notification.message));
                })
            }
        };

        $scope.replytoComment = function( reply, comment){

            $http({
                url: API_ENDPOINT + "/companies/"+$scope.feed.id+'/comments' + comment.id + '/reply',
                method: "POST",
                data: {data : reply, reply_to: comment.id}

            }).then(function (response) {

                $scope.comment.reply.push(response.data);

                            },function (error) {

                            });
        };

        $scope.gettrendingCompanies = function(){

            ddtServices.trendingCompanies().then(function(response) {
                if (response.status === 200) {

                                        $scope.trendingCompanies = response.data.data;
                    $scope.trendingCompanies.forEach(function(entry){
                        entry.stock.change = Math.abs(entry.stock.close - entry.stock.open);
                        entry.stock.percentageChange = (100 * entry.stock.change/entry.stock.open).toFixed(2);
                        entry.stock.change = entry.stock.change.toFixed(2);
                        entry.stock.isPositive = true;
                        if(entry.stock.close < entry.stock.open){
                            entry.stock.isPositive = false;
                        }
                    });
                }
            }); 
        };
        $scope.gettrendingCompanies();
    }]);



    DDT.controller("profileController", ['$scope', function ($scope) {
        $scope.profile = {};
        $scope.loginWEmail = true;
        $scope.signWEmail = false;
        $scope.isLoggedIn = false;

        $scope.loginEmail = function () {
            $scope.signWEmail = false;
            $scope.loginWEmail = true;
        };

        $scope.signUpForm = function () {
            $scope.loginWEmail = false;
            $scope.signWEmail = true;
        };
    }]);

    DDT.controller("tabsController", ['$scope', '$location', function ($scope, $location) {
        $scope.getClass = function (path) {
            return ($location.path().substr(0, path.length) === path);
        };

        $scope.featureRequest = function () {
        };
    }])

    DDT.filter('momentAgo', [function () {
        return function (item) {
            return moment(parseInt(item)).fromNow();
        }
    }]);

    DDT.filter('momentDate', [function () {
        return function (item) {
            return moment(item).format("llll");
        }
    }]);

    DDT.filter('trusted', ['$sce', function ($sce) {
        return function(url) {
            return $sce.trustAsResourceUrl(url);
        };
    }]);

    DDT.filter('trustedHtml', ['$sce', function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        }
    }]);


    DDT.directive('lazyLoadImage',[function () {
        return {
            restrict: 'A',
            link: function (scope, ele, attrs) {
                ele.addClass('ng-hide');
                ele.on('load', function () {
                    angular.element(this).removeClass('ng-hide');
                    angular.element(this).css('animation-delay', 200 * (parseInt(attrs.lazyLoadImage)%10) + 'ms');
                });
            }
        }
    }]);

    DDT.directive('animateDelay',[function () {
        return {
            restrict: 'A',
            link: function (scope, ele, attrs) {
                ele.css('animation-delay', 50 * (parseInt(attrs.animateDelay)%10) + 'ms');
            }
        }
    }]);

    DDT.directive('taskCommentPost', ['$rootScope', '$filter', function($rootScope, $filter) {
        return {
            restrict: 'A', 
            require: '?ngModel', 
            scope: {
                commentAdd: '='
            },
            link: function(scope, element, attrs, ngModel) {
                if (!ngModel) return; 

                element.on('keypress', function(event) {
                    if (event.which === 13 && !event.shiftKey) {
                        event.preventDefault();
                        var data = ngModel.$modelValue.trim();
                        console.log('post message ',data);
                        if (data) {
                            scope.commentAdd({data: data});
                        }
                    }
                });
            }
        };
    }]);

    DDT.directive('badger', [function () {
        return {
            restrict: 'C',
            link: function (scope, ele, attrs) {
                var num = parseInt(Math.round((Math.random() * (3 - 1) + 1)));
                var mclassName = 'badge-primary';
                switch(num) {
                    case 1:
                        mclassName = 'badge-warning';
                        break;
                    case 2:
                        mclassName = 'badge-info';
                        break;
                    case 3:
                        mclassName = 'badge-primary';
                        break;
                }

                ele.addClass(mclassName);
            }
        }
    }])
}(window, angular));




