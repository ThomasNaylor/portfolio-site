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
            Weather App GUI
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
              <img id="weatherapp__img" src="@/assets/weatherappgui/img/weatherappgui.png" alt="dreamshare website homepage">
            </v-flex>

            <v-flex xs12 sm12 md6 lg6 pa-2>
              <h1 class="text-xs-center">Weather App GUI</h1>
              <p class="text-xs-left">Weather App is a simple design created
              using HTML, CSS with flexbox. Building this layout and structure is a demostation of using flexbox
              to build simple grid systems that can work on both mobile and desktop machines.</p>
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
      github: 'https://github.com/ThomasNaylor/weatherappGUI-HTMLCSS'
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
#weatherapp__img {
  width: 60%;
  height: 100%;
}
</style>
