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
         this.life -= 10;
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


}),
created() {
    
    randomNum(min, max){
    let n = [];
    for (let i =0; i<3; i++){
        n.push(math.floor(math.random()*max)+min);
    }
    return n;
    console.log(n)
}

}


