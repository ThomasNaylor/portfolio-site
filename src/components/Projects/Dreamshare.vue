<template>
<div class="app-todo">
  <v-dialog v-model="dialog" fullscreen>
    <v-btn
      absolute
      color="blue"
      class="white--text"
      small
      right
      fab
      top
      slot="activator">View
    </v-btn>
    <v-card>
      <v-card-title>
        <v-toolbar color="primary" fixed>
          <v-toolbar-title>
            Dreamshare
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <a :href="github" target="_blank"><v-btn color="primary">Github</v-btn></a>
          <v-btn color="primary" @click.native="close">Cancel</v-btn>
        </v-toolbar>
      </v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-layout wrap>
            <v-flex class="text-xs-center" xs12 sm6 md6 lg6 pa-2>
              <img id="dreamshare__img" src="@/assets/dreamshare/img/dreamshare.jpg" alt="dreamshare website homepage">
            </v-flex>

            <v-flex xs12 sm12 md6 lg6 pa-2>
              <h1 class="text-xs-center">DreamShare</h1>
              <p class="text-xs-left">DreamsShare is a fictional website homepage created
              using HTML, CSS, Boostrap and JavaScript. Building this website is a demonstration off
              using a frontend framework to create layouts and structures which are both mobile and desktop friendly.</p>
              <p>View the code on Github to see more.</p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
export default {
  name: 'todo',
  data: () => ({
      dialog: false,
      model: null,
      github: 'https://github.com/ThomasNaylor/dreamshare-BS'
    }),

    watch: {
      dialog (val) {
        val || this.close();
      }
    },

    methods: {
      close () {
        this.dialog = false;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dreamshare__img {
  width: 100%;
  height: 100%;
}
</style>
