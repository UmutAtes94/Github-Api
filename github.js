class Github{

    constructor(){
        this.url = "https://api.github.com/users/";

    }
    async getGithubData(username){
        const responseUser = await fetch(this.url+username);
        const responseRepo = await fetch(this.url+username+"/repos");

        const userData = await responseUser.json();
        const userRepo = await responseRepo.json();
        console.log(userData);
        console.log(userRepo);

        return {
            user : userData,
            repo : userRepo
        }

    }

}