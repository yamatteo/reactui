const reducers = {
  STATE_UPDATE: (prev, action) => {
    const array = action.path.split('.')
    const value = action.value
    // console.log("State update", prev, array, value)
    const replaceArrayValue = function (obj, array, value) {
      // console.log('Rav', obj, array, value);
      if (!((obj instanceof Object) || (obj instanceof Array) || obj === undefined)) {
        throw "Setting value to a non-object element of the state."
      }
      let next = (function() {
        if (obj === undefined) {
          return {}
        }  else {
          return JSON.parse(JSON.stringify(obj))
        }
      }());
      const key = array[0];
      if (array.length === 1) {
        if (key === '') {
          next = value
        } else {
          next[key] = value
        }
      } else {
        const internalPrev = next[key];
        next[key] = replaceArrayValue(internalPrev, array.slice(1), value);
      }
      return next
    }
    return replaceArrayValue(prev, array, value)
  },
}

export function reduce(prev, action) {
  return reducers[action.type](prev, action)
}
