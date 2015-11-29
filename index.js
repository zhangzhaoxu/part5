'use strict';


angular
    .module('app', ['ngMaterial'])
    .directive('myTableSlider', function () {
        function controller($scope,$element){
            var divCon = $element;
            console.log(divCon);
            this.test = function () {
                alert("boom");
            }
        }
        return{
            restrict:'EA',
            transclude: true,
            template: '<div ng-transclude></div>',
            controller: controller
        }
    })
    .directive('myDataTable', function () {
        return{
            restrict:'EA',
            templateUrl:'tpl.html',
            require:'^myTableSlider',
            controllerAs:'vm',
            scope:{
                test:'@'
            },
            controller: function ($scope, $element) {
                var vm = this;

                vm.todos = [];

                activate();

                ///////////////////
                function activate () {
                    for (var i = 0; i < 30; i++) {
                        vm.todos.push({
                            name: i+" Brunch",
                            studentId: "1110450121",
                            attendances: []
                        });

                        for (var j = 0; j <= 10; j++) {
                            vm.todos[i].attendances.push('markasdfasdf' + j);
                        }
                    }
                }
            },
            link: function (scope, ele, attr, ctrl) {

                scope.slideLeft = function () {
                    ctrl.test();
                }

            }
            //link: function (scope, ele, attrs) {
            //    var lis = ele.find('ul').eq(1).find('li');
            //    scope.changeShow = lis.length>3?true:false;
            //    console.log(lis);
            //    scope.addTest = function () {
            //        var lis = ele.find('ul').eq(1).find('li');
            //        var l = lis.length;
            //        scope.changeShow  = l>3?true:false;
            //        lis.eq(l-1).after('<li>第'+(l+1)+'次测试</li>');
            //    };
            //
            //    scope.slideMark = 0;
            //
            //    scope.slideLeft = function () {
            //        var lis = ele.find('ul').eq(1).find('li');
            //        var l = lis.length;
            //        scope.slideMark-=100;
            //        for(var i=0;i<l;i++){
            //            lis[i].style.transform="translateX("+scope.slideMark+"%)";
            //        }
            //    };
            //
            //    scope.slideRight = function () {
            //        var lis = ele.find('ul').eq(1).find('li');
            //        var l = lis.length;
            //        scope.slideMark+=100;
            //        for(var i=0;i<l;i++){
            //            lis[i].style.transform = "translateX("+scope.slideMark+"%)";
            //        }
            //    }
            //}
        }
    })


//function DataTableSlider(){
//    function link(scope,ele){
//        var divCon = ele.find('div').eq(0).find('div');
//        console.log(divCon);
//    }
//    return{
//        restrict:'EA',
//        link:link,
//        scope:{}
//    }
//}
