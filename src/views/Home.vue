<template>
  <div id="about" class="app app__about">
      <v-container class="section" fluid fill-height>
        <v-layout align-center justify-center row wrap pa-5>

          <v-flex class="text__center" xs12 sm12 md6>
            <h1 class="section__heading">Welcome.</h1>
          </v-flex>

          <v-flex xs12 sm12 md6>
            <h1 class="content__heading">Hi, I'm Tom.</h1> <br>
            <blockquote class="quote">
              <h1>I am a frontend web developer based in Cape Town.</h1> <br>
              <h2>I have a passion to build cleanly written, robust web applications and websites with HTML, CSS and JavaScript. I love
              to explore the limits of coding and try out new frameworks.</h2>
            </blockquote>
          </v-flex>

        </v-layout>
      </v-container>

      <v-container class="section" fluid fill-height>
        <v-layout align-center justify-center row wrap pa-5>

          <v-flex class="text__center" xs12 sm12 md6>
            <h1 class="section__heading">Skills.</h1>
          </v-flex>

          <v-flex xs12 sm12 md6>
            <div class="text-xs-center">
              <v-progress-circular
                v-for="(i, index) in skills"
                :key="index"
                :rotate="270"
                :size="150"
                :width="10"
                :value="i.percentage"
                :color="i.color">
              <h2>{{ i.name }}</h2>
                {{ i.percentage }}
              </v-progress-circular>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
        skills: [
          { name: 'HTML', percentage: 80, color: '#DE4B25' },
          { name: 'CSS', percentage: 80, color: '#0E79BC' },
          { name: 'JavaScript', percentage: 65, color: '#E8D44D' },
          { name: 'BootStrap', percentage: 65, color: '#8955D7' },
          { name: 'Git', percentage: 65, color: '#F05033' },
          { name: 'jQuery', percentage: 60, color: '#0866A9' },
          { name: 'SQL', percentage: 60, color: '#006AE8' },
          { name: 'VueJS', percentage: 55, color: '#00BB7C' }
        ]
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#about {
  height: 100%;
  padding: 48px 0px 0px 0px;

  .section {
    height: 100vh;
  }
  .section:nth-child(odd) {
    background-color: #4CA4DF;
  }
  .section:nth-child(even) {
    background-color: #34495e;
  }
  .v-progress-circular {
    margin: 1rem
  }
}

@media (max-width: 400px) {
  .section {
    height: 100% !important;
  }
}

@media (max-width: 600px) {
  .section {
    height: 100% !important;
  }
}

@media (max-width: 960px) and (orientation: landscape) {
  .section {
    height: 100% !important;
  }
}
</style>
