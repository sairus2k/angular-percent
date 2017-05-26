import angular from 'angular';
import 'angularjs-slider';

import {appComponent} from './app/app.component';
import {watchModel} from './app/watch-model.directive';

import './index.css';

export const app = 'app';

angular
  .module(app, [
    'rzModule'
  ])
  .directive('watchModel', watchModel)
  .component('app', appComponent);
