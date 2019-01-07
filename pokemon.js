var vm= new Vue({
        el: '#app',
        data: {

          userPokemonSrc: "https://img.pokemondb.net/sprites/black-white/anim/shiny/pikachu.gif",
          opponentPokemonSrc: "https://img.pokemondb.net/sprites/black-white/anim/shiny/whimsicott.gif",

          userPokemon : "pikachu",
          opponentPokemon: "whimsicott",
          userAlive: true,
          opponentPokemon:true,
          userHP:100,
          opponentHP:100,

            userAttackDamage: [15,45,26,67],
            opponentAttacks:["","",""],

            opponentAttackDamage:[47,27,74,38],
            fightOption: ["","",""],
            fightOn: false,
            optionOn: false,
            endOn:false,
           userHPBar:{

            width:"100%"

          },

          opponentHpBar: {

            width:"100%"

          }
           
        },

        methods: {

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

              break;

              case 3:
              
              setTimeout(() => {
                
                this.battleText = "tu ne peux échapper"
                
                break;                    

              }

            },

            processAttack: function(attack) {

              switch(attack) {

                case 1:

                this.opponentHP -= this.userAttackDamage[attack-1])

                if(this.opponentFill <= 1])

                if(this.opponentFill <= 0) {


                  this.opponentHpBar.width = "0%"


                } else {
                
                  this.opponentHpBar.width = this.opponentFill + "%"

                }

                if(this.checkOpponentHP()) {

                  
                }
              }


            
            
          

          
        

        },

        components: {
         tableau: {
          props: ['pokemons'],
         

         }

        },
          createElement('img', {

            attrs: {

              src: require('../pokemon.png')

            }
          
    