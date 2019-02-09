class Storage{

    static getSearchedUsersFromStorage(){
        // Tum Kullanıcıları AL
        let users;

        if(localStorage.getItem("searched") === null){
            users = [];
        }
        else{
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;

    }
    
    static addSearchedUserToStorage(username){
        let users = this.getSearchedUsersFromStorage();

        //IndexOf
        if(users.indexOf(username) === -1){ //users dizisi içinde bu username yoksa...
            users.push(username);
        }
        localStorage.setItem("searched", JSON.stringify(users));

    }

    static clearAllSearchedUsersFromStorage(){

        localStorage.removeItem("searched");

        }
}