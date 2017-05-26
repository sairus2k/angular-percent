export const appComponent = {
  template: require('./app.component.html'),
  controller($http) {
    'ngInject';
    this.data = {
      items: []
    };
    this.options = {
      floor: 0,
      ceil: 100,
      step: 0.01,
      precision: 2,
      translate(value) {
        return `${value}%`;
      }
    };
    this.getObjects = number => {
      $http.get(`api/data${number}.json`)
        .then(response => {
          this.data = response.data;
        });
    };
    this.$onInit = () => {
      this.getObjects(3);
    };
  }
};
