import { HomePage } from './pages/home/home';
import { UserPage } from './pages/user/user';
import { StorageService } from './providers/storage/storage-service';

class MyApp {//parent

      constructor(){
          //permet de prendre le premier élément dans mon html qui est ma balise app et le zéro défini sa position. Si j'avais eu une deuxième balise app alors j'aurais noté 1.
          this.appBody = document.getElementsByTagName("app")[0];
          this.storage = new StorageService();
          this.storage.loadData()
          this.startApp()
      }

      startApp(){
        if(this.storage.isAuth()){
          console.log('user is auth-> ',this.storage.db[0].user)
          new UserPage(this.appBody,this.storage)
        }
        else {
          console.log('user is not auth-> ',this.storage.db[0])
          // init HomePage
          let homePage = new HomePage(this.appBody, this.storage);
        }
      }

};

let myapp = new MyApp()
