
export default class UserService {
  //Return an promise
  static getUserList(headers) {
    const url = `${BASE_URL}trainees`;
    return UserService.postData(url, headers);
  }

  static postData(url, headers, body) {
    let defaulHeaders = new Headers();
    defaulHeaders.append('Content-Type', 'application/json');
    defaulHeaders.append('charset', 'utf-8');
    for (let key in headers) {
      if (headers.hasOwnProperty(key)) {
        defaulHeaders.append(key, headers[key]);
      }
    }

    let myInit = {
      method: 'POST',
      headers: defaulHeaders
    };
    if (body) {
      myInit['body'] = JSON.stringify(body);
    }
    let request = new Request(url);
    return fetch(request, myInit)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        let errorMessage = 'Network response was not ok.'
        throw new Error(errorMessage);
      })
      .then(jsonData => {
        if (jsonData.hasOwnProperty('error')) {
          throw new Error(jsonData['error']);
        } else {
          return jsonData;
        }
      });
  }
}