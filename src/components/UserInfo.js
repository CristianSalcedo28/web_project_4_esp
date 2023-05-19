export default class UserInfo {
  constructor({userName, userJob, userAvatar}){
    this._userName = userName;
    this._userJob = userJob;
    this._userAvatar = userAvatar;
  }

  getUserInfo() {
//    this.userData = {
  return {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent,
    };
//    return this.userData;
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userJob.textContent = data.about;
    this._userAvatar.style.backgroundImage = `url(${data.avatar})`;
    this._userId = data._id;
  }

  getId() {
    return this._userId;
  }

  setUserAvatar(avatar) {
    this._userAvatar.style.backgroundImage = `url(${avatar})`;
  }
}



