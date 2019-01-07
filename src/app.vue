
      	<template>
		  
		  <div id="app" class="container is-fluid">




		<div>

			    {{ pokemon }}


			<ul>
				<li v-bind="item in items | filterBy searchFilter" id="@mousedown.capture=toggleSkip">
			
			

	
  	<img width="25%" src="./asset/logo.png">

</li>
			</ul>
		</div>	 
		

	</template>

<script>

import Pokemon from './src/components/Pokemon'


export default {
	  name: 'app',
	  components: {
    VueQueryBuilder,
    Pokemon 
  },

	data  () {
		return {
		
		pokemon: []

			}

		},

}



					</script>

					<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}


					</style>