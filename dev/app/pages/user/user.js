import {userSkeleton} from "./user-ui";
import {UnsplashService} from "../../providers/unsplash/unsplash-service";
import  {TimerComponent} from "../../components/timer/timer-components";
export class UserPage {

      constructor(appBody,storageService){
        this.appBody = appBody
        this.formData = storageService.db[0].user
        this.d = new Date();
        this.pageTitle = this.grettings();
        this.userName = this.getUserName();
        this.initUI();
        this.getBackgroundIMG();
        this.timer = new TimerComponent()
        this.loadEventUI();
      }

        initUI(){
          // remove all section before display UI
          if(document.getElementsByTagName("section")[0]){
            document.getElementsByTagName("section")[0].parentNode.removeChild(document.getElementsByTagName("section")[0])
          }

          // create page skeleton
          let pageSkeleton = this.getPageSkeleton();
          // add page skeleton in body
          this.appBody.insertAdjacentHTML( 'afterbegin', pageSkeleton )
        }

        loadEventUI(){
             let search = document.getElementById('search')
             if (search){
                   search.addEventListener('keyup', event =>{

                        if (event.key === 'Enter' && event.target.value.length >=1) {
                              this.onGoToLink(event, "https://www.google.ch/search?q="+search.value)
                        }
                  })
             }
       }

        // timer(){
        //
        //           document.getElementById("montre").innerHTML = this.getTime(this.d)
        //     setInterval( _=>{
        //           this.d = new Date();
        //           document.getElementById("montre").innerHTML = this.getTime(this.d)
        //     }, 100);
        // }
        //
        // getTime(time){
        //       return    `
        //       <time datetime="${(time.getFullYear() < 10)?'0'+time.getFullYear():time.getFullYear()}-${(time.getMonth() < 10)?'0'+time.getMonth():time.getMonth()}-${(time.getDate() < 10)?'0'+time.getDate():time.getDate()} ${(time.getHours() < 10)?'0'+time.getHours():time.getHours()}:${(time.getMinutes() < 10)?'0'+time.getMinutes():time.getMinutes()}:${(time.getSeconds() < 10)?'0'+time.getSeconds():time.getSeconds()}">
        //       ${time.toLocaleTimeString()}</time >
        //       `;
        // }

        getBackgroundIMG(){
          let unsplash = new UnsplashService();
          let queryService = unsplash.getRandomImg()
          queryService.then((response)=>{
              console.log('res 1 -> ', JSON.parse(response))
              this.displayBackground(JSON.parse(response))
              return response
          })
          .then((response)=>{
            this.displayImgInfo(JSON.parse(response));
            return response
          })
          .then((response)=>{
            this.btn_download(JSON.parse(response));
          })
       }



        displayBackground(data){
          console.log('service response-> ')
          console.log( data[0] )
          let pageContainer = document.getElementsByTagName("section")[0]
          if(pageContainer){
            // some css with JS for BG
            pageContainer.style.height = `100%`;
            pageContainer.style.width = `100%`;
            pageContainer.style.position = `absolute`;
            pageContainer.style.top = `0`;
            pageContainer.style.left = `0`;
            pageContainer.style.padding = `0px`;
            pageContainer.style.textAlign = `center`;
            pageContainer.style.color = `#fff`;
            pageContainer.style.opacity = `1`;
            pageContainer.style.background = `url(${data[0].urls.regular}) center center no-repeat`;
            pageContainer.style.backgroundSize = `cover`;
          }
        }
        displayImgInfo(data){
          //console.log('displayImgInfo-> ',data)
          // add author info
          let addressContainer = document.getElementsByTagName("address")[0]
          if(addressContainer){
            addressContainer.style.cursor = 'pointer';
            addressContainer.style.textDecoration = 'underline';
            addressContainer.innerHTML = `${data[0].user.name}`
            addressContainer.addEventListener('click', event =>
            this.onGoToLink(event, `https://unsplash.com/@${data[0].user.username}`), false)
          }
        }

        btn_download(data){// add download link for img
          let downEl = document.getElementById("download")
          if(downEl){
          downEl.addEventListener('click', event =>
          this.onGoToLink(event, data[0].links.download), false)
          }
        }

        onGoToLink(event,url){
          event.preventDefault();
          console.log(url);
          let win = window.open(url, '_blank');
          win.focus();
        }

        grettings(){
            let grettings;
            switch (true) {
              case this.d.getHours()>5 && this.d.getHours()<=10:
                grettings = 'Good morning'
                break;
              case this.d.getHours()>=11 && this.d.getHours()<=17:
                grettings = 'Hello'
                break;
              default:
                grettings = 'Good evening'
            }
            return grettings
          }

          getUserName(){
            // return usernal with first letter Cappitalized
            return this.formData.email.split("@")[0].split(' ').map(elementTableau => elementTableau.slice(0, 1).toUpperCase() + elementTableau.slice(1)).join(' ')
          }

        getPageSkeleton(){
            // return page skeleton
            let data = {}; // create obj to pass data
            data.pageTitle = this.pageTitle // asigne data
            data.userName = this.userName
            //data.timer = this.timer
            return  userSkeleton(data);
        }
};
