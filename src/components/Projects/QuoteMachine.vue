<template>
<div class="app-quotemachine">
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
            Quote Machine
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <a :href="github" target="_blank"><v-btn color="primary">Github</v-btn></a>
          <v-btn color="primary" @click.native="close">Cancel</v-btn>
        </v-toolbar>
      </v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12 sm12 md6 lg6 pa-2>
              <div class="quote__machine">
                <div class="quote__container">
                  <div class="quote__share">
                    <a :href="shareTwitter()" target="_blank"><img src="@/assets/quotemachine/icons/twitter.svg" alt="share on twitter"></a>
                  </div>
                  <div class="quote__text">
                    <p>{{ quoteUpdate }}</p>
                  </div>
                  <div class="quote__row">
                    <div class="quote__author">
                      <p>{{ authorUpdate }}</p>
                    </div>
                    <div class="quote__next" @click="getRandomQuote">
                      <img src="@/assets/quotemachine/icons/next.svg" alt="next quote button">
                    </div>
                  </div>
                </div>
              </div>
            </v-flex>
            <v-flex xs12 sm12 md6 lg6 pa-2 >
              <h1 class="text-xs-center">The Quote Machine</h1>
              <p class="text-xs-left">Inspired by the freeCodeCamp 'Random Quote Generator', I have build my own small version of the app. The idea was to learn
              a frontend framework and after successfully implementing the generator in JavaScript and JQuery, I decided to take a new
              approach and implement a version in VueJS.</p><br>
              <p>Feel free to visit my blog if you want to learn more of how this app is made.</p>
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
  name: 'quotemachine',
  data: () => ({
      dialog: false,
      model: null,
      github: 'https://github.com/ThomasNaylor/quotegeneratorJS',
      twitterShare: 'http://www.twitter.com/share?&text=',
      quoteUpdate: '',
      authorUpdate: '',
      quotes: [
        { quote: "I love you the more in that I believe you had liked me for my own sake and for nothing else.", author: "John Keats" },
        { quote: "But man is not made for defeat. A man can be destroyed but not defeated.", author: "Ernest Hemingway" },
        { quote: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
        { quote: "There is nothing permanent except change.", author: "Heraclitus" },
        { quote: "You cannot shake hands with a clenched fist.", author: "Indira Gandhi" },
        { quote: "Let us sacrifice our today so that our children can have a better tomorrow.", author: "A. P. J. Abdul Kalam" },
        { quote: "It is better to be feared than loved, if you cannot be both.", author: "Niccolo Machiavelli" },
        { quote: "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.", author: "Amelia Earhart" },
        { quote: "Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.", author: "Henry James" },
        { quote: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
      ]
    }),
    watch: {
      dialog (val) {
        val || this.close();
      }
    },

    created () {
      this.getRandomQuote();
    },

    methods: {
      getRandomQuote () {
        let length = this.quotes.length;
        let gen = Math.floor(Math.random() * length);
        this.quoteUpdate = this.quotes[gen].quote;
        this.authorUpdate = this.quotes[gen].author;
      },

      shareTwitter () {
        return this.twitterShare + this.quoteUpdate.split(' ').join('+') + '+' + this.authorUpdate;
      },

      close () {
        this.dialog = false;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quote__row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.quote__machine {
  border: 2px solid black;
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
  max-width: 450px;
  min-width: 320px;
}

.quote__machine
.quote__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.quote__machine
.quote__container
.quote__share {
  align-self: flex-end;
}

.quote__machine
.quote__container
.quote__share img {
  width: 30px;
}

.quote__machine
.quote__container
.quote__text {
  align-self: center;
  font-size: 2.0rem;
  padding: 10px 0px;
}

.quote__machine
.quote__container
.quote__row
.quote__author {
  align-self: flex-start;
  font-size: 1.6rem;
  font-style: italic;
}

.quote__machine
.quote__container
.quote__row
.quote__next img {
  width: 30px;
}
</style>
