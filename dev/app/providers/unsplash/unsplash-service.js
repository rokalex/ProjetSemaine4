import  { API_KEY } from '../../providers/unsplash/config';

export class UnsplashService{

  constructor(){
    this.data = [];
    this.params = API_KEY
    this.queryUrl = 'https://api.unsplash.com/photos/random?count=1&client_id='
    console.log('hello UnsplashService!')
  }

  getRandomImg(){
      //Return a new promise.
      return new Promise((resolve, reject)=> {
        // Do the usual XHR stuff
        // Ici, la requête sera émise de façon synchrone.
          let req = new XMLHttpRequest();
          req.open('get', this.queryUrl+this.params);
          req.send();
          //avec le onload nous sommes en asynchrone
          req.onload = ()=>{
          if (req.status === 200) {
            resolve(req.responseText);
          } else {
            reject(req.statusText);
          }
        };
        })
      }
}
