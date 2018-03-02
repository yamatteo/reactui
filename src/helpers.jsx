
Promise.properRace = function(promises) {
  if (promises.length < 1) {
    return Promise.reject('Can\'t start a race without promises!');
  }

  // There is no way to know which promise is rejected.
  // So we map it to a new promise to return the index when it fails
  let indexPromises = promises.map((p, index) => p.then(res => {
    if (res.status === 200) {
      return res
    } else {
      throw index
    }
  }).catch(() => {throw index;}));

  return Promise.race(indexPromises).catch(index => {
    // The promise has rejected, remove it from the list of promises and just continue the race.
    let p = promises.splice(index, 1)[0];
    p.catch(e => console.log('A promise has crashed (don\'t interrupt the race):', e));
    return Promise.properRace(promises);
  });
};
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function mockFetch(url, autodata, delay=500) {
  await timeout(3000);
  return {
    status: 200,
    json: async () => {
      return autodata
    },
    text: async () => 'Text response'
  }
}

export function api(url, data, autodata={}) {
  return Promise.properRace([
    fetch("http://192.168.1.3:5000"+url, { method: "POST", body: JSON.stringify(data) }),
    fetch("http://37.116.112.163:5000"+url, { method: "POST", body: JSON.stringify(data) }),
    mockFetch("/api", autodata),
  ]).then(async res => {
    // return res.json()
    if (res.status === 200) {
      return Object.assign({}, await res.json())
    } else if (419 < res.status && res.status < 499) {
      await timeout(1000)
      return Object.assign({
        erroneous: true
      }, await res.json())
    } else {
      await timeout(1000)
      const text = await res.text()
      return {status: 500, erroneous: true, result: text}
    }
  }).catch(async (error) => {
    console.log('Error in api function')
    console.log(error);
    return {status: 500, erroneous: true, result: "Error in api function."}
  })
}

export function whichSelectionFields(model) {
  if (model === 'User') {
    return ['id', 'username']
  }
  if (model === 'Node') {
    return ['id', 'serial']
  }
  if (model === 'Question') {
    return ['id', 'serial']
  }
}
export function whichInsertionFields(model) {
  if (model === 'User') {
    return ['username', 'password', 'isadmin']
  }
  if (model === 'Node') {
    return ['serial', 'name', 'antes']
  }
  if (model === 'Question') {
    return ['serial', 'node', 'question', 'answer', 'solution']
  }
}
