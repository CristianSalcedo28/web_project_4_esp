export default class UserInfo {
  constructor({userName, userJob}){
    this._userName = userName;
    this._userJob = userJob;
  }

  getUserInfo() {
     return {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent,
    };
  }

  setUserInfo(data) {
    const {userName, userJob} = data
    this._userName.textContent = userName;
    this._userJob.textContent = userJob;
  }
}



