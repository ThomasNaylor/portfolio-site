<template>
  <div id="blog" class="app app__blog">
      <v-container fluid fill-height>
        <v-layout  align-center justify-center row wrap>

          <v-flex class="text__center" xs12 sm12 md12>
            <h1 class="section__heading">Blog.</h1> <br>
            <h1 class="content__heading">COMING SOON</h1>
          </v-flex>

        </v-layout>
      </v-container>
  </div>
</template>

<script>
export default {
  name: 'blog'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app__blog {
  background-color: #4CA4DF;

  .link_container {
    display: flex;
    text-align: center;
    .link {
      display: flex;
      flex-direction: column;
      flex: 1;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>
