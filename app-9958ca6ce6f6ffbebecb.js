webpackJsonp([0],[,,function(n,e){},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.appComponent={template:t(6),controller:["$http",function(n){"ngInject";var e=this;this.data={items:[]},this.options={floor:0,ceil:100,step:.01,precision:2,translate:function(n){return n+"%"}},this.getObjects=function(t){n.get("api/data"+t+".json").then(function(n){e.data=n.data})},this.$onInit=function(){e.getObjects(3)}}]}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.watchModel=function(){return{require:"ngModel",link:function(n,e,t,i){function r(n,e,t){for(var i=0===e?1:0,r=n[i],o=1;o<n.length;o+=1)o!==e&&("min"===t&&n[o]<r&&(i=o,r=n[o]),"max"===t&&n[o]>r&&(i=o,r=n[o]));return i}var o=!1;n.$watch(function(){return i.$modelValue},function(n,e){if(o||n.length<=1)return void(o=!1);n.forEach(function(n){(isNaN(n.percent)||n.percent<0)&&(n.percent=0),n.percent=Math.round(100*n.percent)/100});var t=n.map(function(n){return n.percent}),i=t.reduce(function(n,e){return e+n},0),c=t.findIndex(function(n,t){return n!==e[t].percent}),a=Math.round(100*(i-100))/100,u=r(t,c,"min"),d=r(t,c,"max");a>0?n[d].percent-=a:a<0&&(n[u].percent+=-a)},!0)}}}},,function(n,e){n.exports='<div class="buttons">\n  <button\n    ng-repeat="n in [\'One\', \'Two\', \'Three\', \'Four\', \'Five\'] track by $index"\n    ng-click="$ctrl.getObjects($index + 1)"\n  >{{n}} elements</button>\n</div>\n<hr class="container__hr">\n<div class="slider-item" ng-repeat="item in $ctrl.data.items">\n  <div class="slider-item__label">{{item.name}}</div>\n  <rzslider\n    rz-slider-model="item.percent"\n    rz-slider-options="$ctrl.options"\n  ></rzslider>\n  <input\n    class="slider-item__input"\n    type="number"\n    ng-model="item.percent"\n    string-to-number\n    min="0"\n    max="100"\n    step="0.01"\n    tabindex="{{$index + 1}}"\n  >\n</div>\n<hr class="container__hr">\n<div watch-model ng-if="$ctrl.data.items.length" ng-model="$ctrl.data.items">\n  Result:\n  <div ng-repeat="item in $ctrl.data.items">{{item.name}}: {{item.percent | number : 2}}%</div>\n</div>\n'},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.app=void 0;var i=t(0),r=function(n){return n&&n.__esModule?n:{default:n}}(i);t(1);var o=t(3),c=t(4);t(2);var a=e.app="app";r.default.module(a,["rzModule"]).directive("watchModel",c.watchModel).component("app",o.appComponent)}],[7]);