export default class UserInfo {
  constructor({userName, userJob, userAvatar}){
    this._userName = userName;
    this._userJob = userJob;
    //this._userAvatar = userAvatar;
  }

  getUserInfo() {
     return {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent,
    };
  }

  setUserInfo(data) {
    this._userName.textContent = data.userName;
    this._userJob.textContent = data.userJob;
    this._userAvatar = data._userAvatar;
  }

  setUserAvatar(avatar) {
    this._userAvatar.src = avatar;
  }
}



