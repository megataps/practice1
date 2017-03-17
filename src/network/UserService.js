const BASE_URL = 'http://fixiesvn.azurewebsites.net/api/';

export default class UserService {
  //Return an promise
  static getUserList(token) {
    const url = `${BASE_URL}trainees`;
    return UserService.getData(url, token);
  }

  static getData(url, token) {
    let defaulHeaders = new Headers();
    defaulHeaders.append('Content-Type', 'application/json');
    defaulHeaders.append('charset', 'utf-8');
    defaulHeaders.append('x-access-token', token);
   
    let myInit = {
      method: 'GET',
      headers: defaulHeaders
    };

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