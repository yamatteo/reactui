export async function mockFetch(url, data, status=200) {
  return {
    status: status,
    json: async () => {
      return data
    },
    text: async () => 'Text response'
  }
}

export function mockApi(url, data) {
  // console.log("syncApi");
  // const server = "http://192.168.1.3:5000"
  const server = 'http://37.116.112.163:5000'
  // fetch(server+url, { method: "POST", body: JSON.stringify(data) }).then(res => {
  return mockFetch(server+url, data).then(async res => {
    // return res.json()
    if (res.status === 200) {
      return Object.assign({}, await res.json())
    } else if (419 < res.status && res.status < 499) {
      return Object.assign({
        erroneous: true
      }, await res.json())
    } else {
      const text = await res.text()
      return {status: 500, erroneous: true, result: text}
    }
  }).catch((error) => {
    console.log(error);
  })
}
