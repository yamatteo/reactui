function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export function api(url, data) {
  // return fetch(mountain_ip+url, { method: "POST", body: JSON.stringify(data) })
  return fetch("http://0.0.0.0:8000"+url, { method: "POST", body: JSON.stringify(data) })
  .then(async res => {
    // return res.json()
    console.log("status", res.status)
    if (199 < res.status && res.status < 300) {
      return Object.assign({}, await res.json())
    } else if (399 < res.status && res.status < 500) {
      const json_response = await res.json()
      return Object.assign({
        erroneous: true
      }, json_response)
    } else {
      await timeout(1000)
      const text = await res.text()
      console.log(text)
      return {status: 500, erroneous: true, exceptional:true, result: text}
    }
  }).catch(async (error) => {
    await timeout(1000)
    console.log('Error in api function')
    console.log(error);
    return {status: 500, erroneous: true, result: "Error in api function."}
  })
}
