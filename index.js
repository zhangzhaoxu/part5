'use strict';


angular
    .module('app', ['ngMaterial'])
    .directive('myDataTable', function () {
        return{
            restrict:'EA',
            templateUrl:'tpl.html',
            controllerAs:'vm',
            scope:{
                test:'@'
            },
            controller: function ($scope, $element) {
                var vm = this;

                vm.todos = [];
                activate();

                this.L = 10; //每行一共的span个数
                this.cL = 5; //每行允许同时显示的个数

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
            }
        }
    })
    .directive('myTableSlider', function () {
        return{
            restrict:'AE',
            require:'^?myDataTable',
            compile: function (ele, attrs) {
                var span = ele.find('span');
                var header = ele.find('div').eq(0);
                header.append('<div flex="15" ng-show="show">' +
                    '<input type="button" value="slideLeft" ng-click="slideLeft()">' +
                    '</div>');
                header.append('<div flex="15" ng-show="show">' +
                    '<input type="button" value="slideRight" ng-click="slideRight()">' +
                    '</div>');
                span.attr('ng-style','sliderStyle');
                return{
                    pre: function (scope, iEle, attrs) {

                    },
                    post: function(scope,iEle,attrs,ctrl){
                        scope.sliderStyle = {};
                        var L = ctrl.L - ctrl.cL;
                        scope.show = L>0?true:false;
                        var sliderMark = 0;
                        scope.slideLeft = function () {
                            if(L>=0){
                                sliderMark-=100;
                                this.sliderStyle = {transition:'all 1s ease',transform:'translateX('+sliderMark+'%)'}
                                L--;
                            }
                        };
                        scope.slideRight = function () {
                            if(L<5){
                                sliderMark+=100;
                                this.sliderStyle = {transition:'all 1s ease',transform:'translateX('+sliderMark+'%)'};
                                L++;
                            }
                        };
                    }
                }
            }
        }
    });
