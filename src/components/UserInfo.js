export default class UserInfo {
  constructor({userName, userJob, userAvatar}){
    this._userName = userName;
    this._userJob = userJob;
    this._userAvatar = userAvatar;
  }

  getUserInfo() {
     return {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent,
    };
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userJob.textContent = data.about;
    this._userAvatar.style.backgroundImage = `url(${data.avatar})`;
  }

  setUserAvatar(avatar) {
    this._userAvatar.style.backgroundImage = `url(${avatar})`;
  }
}



