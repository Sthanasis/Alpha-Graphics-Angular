export class AuthStatus{
  public isAuth:boolean = this.CheckIfToken();

  getIsAuth(){
    return this.isAuth;
  }

  CheckIfToken():boolean{
    if(localStorage.getItem('token') && localStorage.getItem('userId')==='123'){
      return true;
    } else {
      return false;
    }
  }

  setIsAuth() {
    if(this.CheckIfToken()){
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
  }
}