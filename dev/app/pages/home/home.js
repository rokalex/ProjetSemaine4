import { UserPage } from '../user/user';
import {homeSkeleton} from "./home-ui";
export class HomePage{//enfant

      constructor(appBody,storageService){
            //this est le paramêtre qui s'appelle appBody
            this.appBody = appBody
            this.pageTitle = "Welcome"
            this.storage = storageService
            this.initUI()
      }

      initUI(){
            ////Ceci est le moyen utilisé avec une div dans mon html
            //document.getElementById('myTitle').innerHTML = `<h1>${this.title}</h1>`;

            //afin d'effacer la page et donner l'impression de rester au même endroit sans charger une nouvelle page, on doit effacer du dom ce que l'on a traiter
            if(document.getElementsByTagName('section')[0]){
                  document.getElementsByTagName('section')[0].parentNode.removeChild(document.getElementsByTagName('section')[0]);
            }

        // create page skeleton
            let pageSkeleton = this.getPageSkeleton();
            // add page skeleton in body
            // ceci permet de faire plus que le innerHTML. Ici on donne une position et le html mis dedans. Il y en a 4. Voir doc Mozilla
            this.appBody.insertAdjacentHTML( 'afterbegin', pageSkeleton )
            //pour être certain d'avoir le DOM chargé avant de demander l'utilisation des éléments de celui-ci
            this.loadEventUI()
      }

      getPageSkeleton(){
      	// return page skeleton
      	let data = {}; // create obj to pass data
      	data.pageTitle = this.pageTitle // asigne data
      	return  homeSkeleton(data);
      }

      //ceci charge l'événement sur le bouton submit
      loadEventUI(){
            let loginForm = document.getElementsByTagName("form")[0];
            loginForm.addEventListener('submit', event => this.onLogin(event))
      }

      // Traite ce que va provoquer l'événement du bouton
      onLogin(event){
            event.preventDefault()
            //on donne une valeur 0 pour tester le nombre de fois que la boucle va fonctionner et permettre la vérification des inputs plus bas validationInput === 2
            let validationInput = 0
            //on fait un objet que je rempli des valeurs du formulaire afin d'y passer à la prochaine classe userpage
            let formInput = {}
            let form = document.forms[0].elements
            for (let i = 0; i < form.length; i++) {
              if(form[i].value){
                //le .name est la valeur name dans les input (email, password)
                formInput[form[i].name] = form[i].value
                //afin de parcouris les autres input à disposition
                validationInput++
              }
            }
            console.log(formInput)
            //si mes deux inputs on des valeurs alors tu peux charger la page userpage
            if(validationInput === 2){
              // save in StorageService
              this.storage.login(formInput)
              // load UserPage
              console.log('load UserPage')
              new UserPage(this.appBody, this.storage);
            }
      }
};
