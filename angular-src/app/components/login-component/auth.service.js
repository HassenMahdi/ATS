app.service('authService',function(){

    this.login=function(email,pass){
        user={
            firstname:"Hassen",
            lastname:"Mahdi"
        }
        localStorage.setItem("user",JSON.stringify(user))
        return Promise.resolve(user)
    }

    this.logout=function(){
        localStorage.clear()
    }
})