export const appComponent = {
  template: require('./app.component.html'),
  controller() {
    this.data = {
      items: [
        {
          name: 'item 1',
          percent: 0
        },
        {
          name: 'item 2',
          percent: 45
        },
        {
          name: 'item 3',
          percent: 55
        },
        {
          name: 'item 4',
          percent: 55
        }
      ]
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
  }
};
