<template>
  <div id="projects" class="app app__projects">
      <v-container fluid fill-height>
        <v-layout align-center justify-center row wrap>

          <v-flex class="text__center" xs12 sm12 md6 lg6>
            <h1 class="section__heading">Projects.</h1>
          </v-flex>

          <v-flex  xs12 sm12 md6 lg6>
            <h1 class="content__heading">Browse.</h1> <br>
            <v-layout row wrap>
              <v-flex xs12 sm6 md6 lg4 pa-1
              v-for="project in projects"
              :key="project.title">
                <v-hover>
                  <v-card slot-scope="{ hover }" class="mx-auto" color="grey lighten-4" max-width="600">
                    <v-img :aspect-ratio="16/9" :src="project.img">
                      <v-expand-transition>
                        <div v-if="hover" class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;">
                        </div>
                      </v-expand-transition>
                    </v-img>
                    <v-card-text class="pt-4" style="position: relative;">
                      <component :is="project.project"></component>
                      <h3>{{ project.title }}</h3>
                    </v-card-text>

                    <div class="text-xs-left">
                      <v-chip
                        v-for="(chip, index) in project.chips"
                        :key="'f' + index">
                        {{ chip }}
                      </v-chip>
                    </div>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
          </v-flex>

        </v-layout>
      </v-container>
  </div>
</template>

<script>
import SpaceStation from '@/components/Projects/SpaceStation.vue';
import QuoteMachine from '@/components/Projects/QuoteMachine.vue';
import CoinDeskApi from '@/components/Projects/CoinDeskApi.vue';
import WeatherMan from '@/components/Projects/WeatherMan.vue';
import Dreamshare from '@/components/Projects/Dreamshare.vue';
import WeatherAppGui from '@/components/Projects/WeatherAppGui.vue';


import spacestation from '@/assets/spacestation/img/spacestation.jpg';
import coindeskimg from '@/assets/coindeskapi/img/bitcoin.jpg';
import quoteimg from '@/assets/quotemachine/img/quote.jpg';
import weatherimg from '@/assets/theweatherman/img/lighthouse.jpg';
import dreamshareimg from '@/assets/dreamshare/img/dreamshareicon.png';
import weatherappimg from '@/assets/weatherappgui/img/weatherappicon.png';

export default {
  name: 'projects',
  data () {
    return {
      projects: [
        { title: 'Space Station', project: 'SpaceStation', img: spacestation, chips: ['HTML', 'CSS', 'JavaScript', 'VueJS'] },
        { title: 'CoinDeskApi', project: 'CoinDeskApi', img: coindeskimg, chips: ['HTML', 'CSS', 'JavaScript', 'VueJS'] },
        { title: 'WeatherMan', project: 'WeatherMan', img: weatherimg, chips: ['HTML', 'CSS', 'JavaScript', 'VueJS'] },
        { title: 'Quote Machine', project: 'QuoteMachine', img: quoteimg, chips: ['HTML', 'CSS', 'JavaScript'] },
        { title: 'Dreamshare', project: 'Dreamshare', img: dreamshareimg, chips: ['HTML', 'Bootstrap', 'CSS', 'JavaScript'] },
        { title: 'Weather App GUI', project: 'WeatherAppGui', img: weatherappimg, chips: ['HTML', 'CSS'] }
      ]
    }
  },

  components: {
    SpaceStation,
    QuoteMachine,
    CoinDeskApi,
    WeatherMan,
    Dreamshare,
    WeatherAppGui
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#projects {
  height: 100% !important;
}

.app__projects {
  background-color: #34495e;

  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }
}

</style>
