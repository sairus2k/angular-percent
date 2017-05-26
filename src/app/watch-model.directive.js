export const watchModel = () => ({
  require: 'ngModel',
  link(scope, elem, attr, model) {
    let modelChanged = false;
    scope.$watch(() => model.$modelValue, (newVal, prevVal) => {
      if (modelChanged) {
        // Check if user changed the model or $digest
        modelChanged = false;
        return;
      }
      newVal.forEach(item => {
        if (isNaN(item.percent) || item.percent < 0) {
          item.percent = 0;
        }
        item.percent = Math.round(item.percent * 100) / 100;
      });
      const numberArray = newVal.map(item => item.percent);
      const sum = numberArray.reduce((acc, val) => val + acc, 0);
      const changedItem = numberArray.findIndex((item, index) => item !== prevVal[index].percent);
      const diff = Math.round((sum - 100) * 100) / 100;
      const minItem = findExtreme(numberArray, changedItem, 'min');
      const maxItem = findExtreme(numberArray, changedItem, 'max');
      if (diff > 0) {
        newVal[maxItem].percent -= diff;
      } else if (diff < 0) {
        newVal[minItem].percent += -diff;
      }
    }, true);

    function findExtreme(arr, exclude, extreme) {
      let exIndex = exclude === 0 ? 1 : 0;
      let exValue = arr[exIndex];
      for (let i = 1; i < arr.length; i += 1) {
        if (i === exclude) {
          continue;
        }
        if (extreme === 'min' && arr[i] < exValue) {
          exIndex = i;
          exValue = arr[i];
        }
        if (extreme === 'max' && arr[i] > exValue) {
          exIndex = i;
          exValue = arr[i];
        }
      }
      return exIndex;
    }
  }
});
