//
// Promise.properRace = function(promises) {
//   if (promises.length < 1) {
//     return Promise.reject('Can\'t start a race without promises!');
//   }
//
//   // There is no way to know which promise is rejected.
//   // So we map it to a new promise to return the index when it fails
//   let indexPromises = promises.map((p, index) => p.then(res => {
//     if (res.status === 200) {
//       return res
//     } else {
//       throw index
//     }
//   }).catch(() => {throw index;}));
//
//   return Promise.race(indexPromises).catch(index => {
//     // The promise has rejected, remove it from the list of promises and just continue the race.
//     let p = promises.splice(index, 1)[0];
//     p.catch(e => console.log('A promise has crashed (don\'t interrupt the race):', e));
//     return Promise.properRace(promises);
//   });
// };
//
// export function api(url, data, autodata={}) {
//   return Promise.properRace([
//     // fetch("http://192.168.1.3:5000"+url, { method: "POST", body: JSON.stringify(data) }),
//     // fetch("http://127.0.0.1:5000"+url, { method: "POST", body: JSON.stringify(data) }),
//     fetch("http://yamatteo.pythonanywhere.com"+url, { method: "POST", body: JSON.stringify(data) }),
//     // mockFetch("/api", autodata),
//   ]).then(async res => {
//     // return res.json()
//     if (res.status === 200) {
//       return Object.assign({}, await res.json())
//     } else if (419 < res.status && res.status < 499) {
//       await timeout(1000)
//       return Object.assign({
//         erroneous: true
//       }, await res.json())
//     } else {
//       await timeout(1000)
//       const text = await res.text()
//       return {status: 500, erroneous: true, result: text}
//     }
//   }).catch(async (error) => {
//     console.log('Error in api function')
//     console.log(error);
//     return {status: 500, erroneous: true, result: "Error in api function."}
//   })
// }
// let mountain_ip
// fetch("http://yamatteo.pythonanywhere.com/get_mountain").then(res => {
//   if (res.status === 200) {
//     return res.json()
//   } else {
//     return res.text()
//   }
// }).then(res => {
//   if (res.mountain_ip) {
//     let mountain_ip = res.mountain_ip
//     console.log("Mip is", mountain_ip)
//     return true
//   } else {
//     let mountain_ip = '198.162.1.3'
//     return false
//   }
// })

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export function api(url, data) {
  // return fetch(mountain_ip+url, { method: "POST", body: JSON.stringify(data) })
  return fetch("http://yamatteo.pythonanywhere.com"+url, { method: "POST", body: JSON.stringify(data) })
  .then(async res => {
    // return res.json()
    if (res.status === 200) {
      return Object.assign({}, await res.json())
    } else if (399 < res.status && res.status < 500) {
      return Object.assign({
        erroneous: true
      }, await res.json())
    } else {
      await timeout(1000)
      const text = await res.text()
      return {status: 500, erroneous: true, result: text}
    }
  }).catch(async (error) => {
    await timeout(1000)
    console.log('Error in api function')
    console.log(error);
    return {status: 500, erroneous: true, result: "Error in api function."}
  })
}
