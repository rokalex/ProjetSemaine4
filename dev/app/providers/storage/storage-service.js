export class StorageService{

  constructor(){
    this.dbName = 'browser-dev'
    this.db = []
  }

  loadData(){
    let db = this.read()
    if(db){
      this.db.push(db)
    }
    else {
      this.create()
      this.db.push({})
    }
    console.log('StorageService: database ready ->', this.db)
  }

  isAuth(){
    if(this.db[0].user){
      return this.db[0]
    }
  }

  login(userData){
    console.log('StorageService: login->', userData)
    let isAuth = this.isAuth()
    if(!isAuth){
      this.db[0].user = userData
      this.update()
    }
  }

  /* Methodes CRUD Query */

  create(){
    console.log('StorageService: create->', this.dbName)
    localStorage.setItem(this.dbName, JSON.stringify({}))
  }

  read(){
    console.log('StorageService: read->', this.dbName)
    let query = localStorage.getItem(this.dbName)
    //console.log(query)
    if(query){
      return JSON.parse(query)
    }
  }

  update(){
    console.log('StorageService: update->', this.db[0])
    localStorage.setItem(this.dbName, JSON.stringify(this.db[0]))
  }

  //delete(item){

  //}

}
