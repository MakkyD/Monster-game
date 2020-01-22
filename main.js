let button = document.querySelector('#attack')

new Vue({
    el: '#app',
    data: {
        life:100,
    startGame: true,
    actionButtons: false,
    scoreButton: false,
    attack: false,
    specialAttack: false,
    heal: false,
    giveUp: true,
    histrorys:[
        {isMonster:true,detail:"gave 4"},
        {isMonster:false,detail:"gave 6"}
    ]
    },

    methods: {
       attackMonster() {
         this.life = math.random();
       },
    startGame(){
        this.startGame= true;
    },
    actionButton(){
        this.actionButtons =false;
    },
    scoreButton(){
        this.scoreButton = false;
    },
    displayActionButton(){
        this.actionButton= true;
        this.startGame= false;
    },
    giveUpGame(){
        this.startGame= true;
        // this.attack= false;
        // this.specialAttack = false;
        // this.heal = false;
        // this.giveUp = false;
        // this.startGame = true;
    }
}


}); 
button.addEventListener('click', function(){
    // alert("you have clicked already");
    console.log("you have clicked already");
    
        let r = Math.floor(Math.random()*256) + 1;
        let g = Math.floor(Math.random()*256) + 1;
        let b = Math.floor(Math.random()*256) + 1;
    
        attack.style.numbers = "rgb("+r+", "+g+", "+b+")";
    
    })