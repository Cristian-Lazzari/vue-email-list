const app = Vue.createApp({
    data() {
        return{
            arremail:[],
            mail:''
        }
    },
    methods: {
        emailRand(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(email => this.mail = email.data.response)
                
        },
        pushemail(){
            for(let i=0;i<10;i++){
                this.emailRand()
                this.arremail.push(this.mail)
              
            }
        }
        
    },

})
app.mount('#app')
