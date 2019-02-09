const githubForm = document.getElementById("github-form");
const clearBtn = document.getElementById("clear-last-users");
const inputField = document.getElementById("githubname");
const lastUsers = document.getElementById("last-users"); //last userların listelendiği <ul>'yi aldık

const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit", getUser);
    clearBtn.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);

}

function getUser(e){
    const username = inputField.value.trim();
    if(username === ""){
        alert("Kullanıcı adı boş bırakılamaz");

    }
    github.getGithubData(username)
    .then(response => {
        if(response.user.message === "Not Found"){
            ui.showError("Aradığınız Kullanıcı Bulunamadı");
        }
        else{
            ui.addSearchedUserToUI(username);
            Storage.addSearchedUserToStorage(username);
            ui.showUserInfo(response.user);
            ui.showRepoInfo(response.repo);
            

        }
    })
    .catch(err => ui.showError(err));

    
    ui.clearInput();
    e.preventDefault(); //submit durumunda sayfanın yenilenmesini engellemek için
}
function clearAllSearched(){
    if(confirm("Hepsini Silmek İstediğinize Emin Misiniz ??")){
        Storage.clearAllSearchedUsersFromStorage();
    ui.clearAllSearchedFromUI();
    }
    
    
}
function getAllSearched(){
    let users = Storage.getSearchedUsersFromStorage();
    let result = "";

    users.forEach(user => {
        result += `<li class="list-group-item">${user}</li>`;
    }); 
    lastUsers.innerHTML = result;

}
