


var app= new Vue({

  el: '#app',

  data: {
    userLevel: 50,
    userPokemonSrc: "http://guidesmedia.ign.com/guides/059687/images/blackwhite/pokemans_006.gif",
    opponentPokemonSrc: "http://pre01.deviantart.net/959a/th/pre/f/2016/075/4/6/095_onix_by_rayo123000-d9vbjj3.png",
          userPokemon : "pikachu",
          opponentPokemon: "whimsicott",
          userAlive: true,
          opponentAlive: true,
        opponentFill: 100,
             userFill: 100,
             userHP:100,
             startUserHP: 100,
             opponentHP:100,
             opponentPokemon:true,
          
             userLevel: 50,
             opponentLevel: 50,
             battleText: "Qu'est ce que Charizard fait?",
             battleOptions: ["Fight", "Pokemon", "Item", "Run"],


            userAttackDamage: [15,45,26,67],
            opponentAttacks:["fire","wind","wave", "Rock Slide"],
            opponentAttackDamage:[47,27,74,38],
            fightOption: ["Scratch","Fly","Flamethrower", "Ember"],
            battleOptions: ["Fight", "Pokemon", "Item", "Run"],

            endOptions: ["Yes", "No"],

            fightOn: false,

            
       optionsOn: false,
            endOn:false,
           userHPBar:{

            width:"100%"

          },

          opponentHpBar: {

            width:"100%"

          }
           
        },

        methods: {

          loadPokemon() {

          var apiURL = "http://pokeapi.co/api/v2/pokemon/";

          var input = document.querySelector(".pokemon-input");

          function getPokemonData() {
          axios.get(apiURL + input.value).then(function(response) {

            pokemonName.innerHTML = response.data.forms[0].name;
            pokemon.Image.src = response.data.sprites.front_default;
          })
      var button = document.querySelector(".pokemon-button");
    
      button.addEventListener("click", getPokemonData);

        }
          processOption: function(option) {

            switch(option) {


              case 1:

              this.optionOn = false
              this.fightOn = true
              break;

              case 2:

              setTimeout(() => {
                this.battleText = "Qu'est ce que je pourrai" + this.userPokemon + "faire?"
              
      
              }, 2000);

this.battleText = "You're our only hope " + this.userPokemon + "!"
          
              break;

              case 3:
              
              setTimeout(() => {
                
          this.battleText = "What will " + this.userPokemon + " do?"
               }, 2000);
          this.battleText = "No items in bag."  
                break;                    

              case 4:

 setTimeout(() => {
          this.battleText = "What will " + this.userPokemon + " do?"
      }, 2000);
          this.battleText = "Can't escape."
        break;
      }
    },

            processAttack: function(attack) {

              switch(attack) {

                case 1:

                this.opponentHP -= this.userAttackDamage[attack-1]


                this.opponentFill -= (this.userAttackDamage[attack-1])


                 if(this.opponentFill <= 0){
            this.opponentHpBar.width = "0%"
          } else{
                this.opponentHpBar.width = this.opponentFill + "%"
 
 }if(this.checkOpponentHp()){
            this.battleText = this.opponentPokemon + " fainted! Play again?"
            this.processFaint(1)
          } else if(this.checkOpponentHp() === false) {
            
              setTimeout(() => {
              this.processOpponentAttack()
              }, 2000);
          
            this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
            //call opponent attack function
          setTimeout(() => { 
            if(this.userAlive){
              setTimeout(() => {this.battleText = "What will " + this.userPokemon + " do?"
              }, 2000);
            }
           }, 2000);
          }
        break;

                case 2:

                this.opponentHP -= this.userAttackDamage[attack-1]
                //edite la santé 
                 this.opponentFill -= (this.userAttackDamage[attack-1])
          if(this.opponentFill <= 0){
            this.opponentHpBar.width = "0%"
          } else{
                
       this.opponentHpBar.width = this.opponentFill + "%"
          }

                  if(this.checkOpponentHp()) {

                    this.battleText = this.opponentPokemon + ""
                  " fainted! Play again?"
            this.processFaint(1)
          } else if(this.checkOpponentHp() === false) {
            
              setTimeout(() => {
              this.processOpponentAttack()
              }, 2000);
          
            this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
            //call opponent attack function
          setTimeout(() => { 
            if(this.userAlive){
              setTimeout(() => {this.battleText = "What will " + this.userPokemon + " do?"
              }, 2000);
            }
           }, 2000);
          }
        break;

  case 3: 

                this.opponentHP -= this.userAttackDamage[attack-1]
  this.opponentFill -= (this.userAttackDamage[attack-1])
          if(this.opponentFill <= 0){
           
            this.opponentHpBar.width = "0%"

          } else {
                this.opponentHpBar.width = this.opponentFill + "%"

          }

           if(this.checkOpponentHp()){
            this.battleText = this.opponentPokemon + " fainted! Play again?"
            this.processFaint(1)
          } else if(this.checkOpponentHp() === false) {
            
              setTimeout(() => {
              this.processOpponentAttack()
              }, 2000);
          
            this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
            //call opponent attack function
          setTimeout(() => { 
            if(this.userAlive){
              setTimeout(() => {this.battleText = "What will " + this.userPokemon + " do?"
              }, 2000);
            }
           }, 2000);
          }
        break;

                case 4:

                this.opponentHP -= this.userAttackDamage[attack-1]
              
              this.opponentill -= (this.userAttackDamage[attack-1])
          if(this.opponentFill <= 0){
            this.opponentHpBar.width = "0%"
              
              
                } else {
                
                  this.opponentHpBar.width = this.opponentFill + "%"

                }

                if(this.checkOpponentHP()) {

 this.battleText = this.opponentPokemon + " fainted! Play again?"

                 this.processFaint(1)

                } else if (this.checkOpponentHp() === false) {
                  
             
                  setTimeout(() => {
                    this.processOpponentAttack()
                    }, 2000);
                
                  this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
                
           
           setTimeout(() => { 
            if(this.userAlive){
              setTimeout(() => {this.battleText = "What will " + this.userPokemon + " do?"
              }, 2000);
            }
           }, 2000);
          } 
          
          break;

        }

      },

    checkOpponentHp: function(){
      if(this.opponentHP <= 0){
        //fainted
        return true
        
      } else{
        //battle continues
        return false
      }
    },



          

              processFaint: function(pokemon) {


                this.fightOn = false

                this.endOn = true

                  if (pokemon === 1) {

                    this.opponentAlive = false


                  } else {


                    this.userHP = 0
                    this.userAlive = false
                  }
              },

              processOpponentAttack : function() {

                var random  = Math.floor((Math.random() * 4) + 1)

                this.userHP -= this.opponentAttackDamage[random-1]
                this.userFill -= this.opponentAttackDamage[random-1]

                if(this.userFill <= 0) {


                  this.userHPBar.width = "0%"

                } else {

                  this.userHPBar.width = this.userFill + "%" 

                }

                if(this.checkUserHP()) {

                  this.battleText = this.userPokemon + "perdu joue encore?"

                  this.processFaint(2) } else if(this.checkOpponentHP() === false) {

                     //continue battle
         this.battleText = this.opponentPokemon + " used " + this.opponentAttacks[random-1]  + "!"
         this.fightOn = false
         this.optionsOn = true
       }

                  },

                  checkUserHP: function() {


                    if(this.userHP <= 0) {


                      return true
                    } else {

                      return false
                      
                    }
                  },

                  resetBattle: function() {


                    this.endOn = false;

                    this.fightOn = false;

                    this.optionOn = true;

                    this.battleText = "Qu'est ce que Charizard fait?";

                    this.userAlive = true

                    this.opponentAlive = true
                    
                    this.userHP = 100

                    this.opponentFill = 100
                   
                    this.userFill = 100
      

                    this.userHpBar.width = "100%"
        
                    this.opponentHpBar.width = "100%"
    }

                  }

              