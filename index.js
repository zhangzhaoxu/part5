'use strict';


angular
    .module('app', ['ngMaterial'])
    .directive('myDataTable', function () {
        return{
            restrict:'EA',
            templateUrl:'tpl.html',
            scope:{
                test:'@'
            },
            link: function (scope, ele, attrs) {
                var lis = ele.find('ul').eq(1).find('li');
                scope.changeShow = lis.length>3?true:false;
                console.log(lis);
                scope.addTest = function () {
                    var lis = ele.find('ul').eq(1).find('li');
                    var l = lis.length;
                    scope.changeShow  = l>3?true:false;
                    lis.eq(l-1).after('<li>第'+(l+1)+'次测试</li>');
                };

                scope.slideMark = 0;

                scope.slideLeft = function () {
                    var lis = ele.find('ul').eq(1).find('li');
                    var l = lis.length;
                    scope.slideMark-=100;
                    for(var i=0;i<l;i++){
                        lis[i].style.transform="translateX("+scope.slideMark+"%)";
                    }
                };

                scope.slideRight = function () {
                    var lis = ele.find('ul').eq(1).find('li');
                    var l = lis.length;
                    scope.slideMark+=100;
                    for(var i=0;i<l;i++){
                        lis[i].style.transform = "translateX("+scope.slideMark+"%)";
                    }
                }
            }
        }
    });
