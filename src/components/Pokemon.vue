<template>

<div class="box">

<form v-on: submit.prevent="search">

<div class="level">

<div class="level-left">
          <div class="level-item">
            <div>
              <label for="search">Pokemon ID:</label>
            </div>
            <div class="field has-addons">
              <div class="control">
                <input class="input" type="number" v-model.number="pokemon_id" placeholder="enter pokemon ID">
              </div>
              <button type="submit" class="button is-primary">Search</button>
            </div>

</div> 

</div>

</form>


<div v-if="pokemon_details">


<pokemon-details v-bind:details="pokemon_details"></pokemon-details>



</template>

<script>

import axios from 'axios'
import APP from './app.vue'

  
  export default {
    name: 'pokemon',
    data () {
      return {
        
        Pokemon: {}

      }
    },

component: {

'app': APP

},

    created () {

axios.get('https://pokeapi.co/api/v2/pokedex/kanto/')
.then(Response => {

	console.log(Response)
	this.pokemon=Response.data

})
 .catch(err => {
        console.log(err)
      })

    }

  }