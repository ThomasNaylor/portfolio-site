<template>
<div id="app-weatherman">
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
            The Weather Man
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
              <v-layout column justify-center>
                <v-expansion-panel  v-model="panel" popout expand>
                  <v-expansion-panel-content
                    v-for="item in items"
                    :key="item.day"
                    hide-actions>
                    <v-layout slot="header" align-center row spacer>
                      <v-flex xs4 sm2 md1>
                        <v-avatar
                          slot="activator"
                          size="46px">
                          <img
                            v-if="item.icon"
                            :src="iconImg + item.icon + '.png'"
                            alt="Avatar">
                        </v-avatar>
                      </v-flex>

                      <v-flex sm5 md3>
                        <p v-html="getDate(item.day)"></p>
                        </span>
                      </v-flex>

                      <v-flex no-wrap xs5 sm3>
                        <p class="weather__data" v-html="item.clouds"></p>
                      </v-flex>

                    </v-layout>

                    <v-card>
                      <v-divider></v-divider>
                      <v-layout row>
                        <v-flex xs12>
                          <table class="weather__data">
                            <tr>
                              <td>Temperature:</td>

                              <td>{{ getTemp(item.temp) }}&#8451</td>
                            </tr>

                            <tr>
                              <td>Wind Speed:</td>
                              <td>{{ getSpeed(item.speed) }}km/p</td>
                            </tr>

                            <tr>
                              <td>Wind Direction:</td>
                              <td>{{ getDir(item.wind_deg) }}</td>
                            </tr>
                          </table>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-layout>
            </v-flex>

            <v-flex xs12 sm12 md6 lg6 pa-2>
              <h1 class="text-xs-center">WeatherMan</h1>
              <p class="text-xs-left">Using OpenWeather Api and VueJS with the Vuetify framework, here you will find
              a simple display of the lastest weather reports for the next 5 days layout out with Vuetify.</p>
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
  name: 'weatherman',
  data: () => ({
      panel: [true, true],
      dialog: false,
      model: null,
      github: 'https://github.com/ThomasNaylor/openWeatherAPIuse',
      apikey: process.env.VUE_APP_weatherKey,
      iconImg: 'https://openweathermap.org/img/w/',
      weatherdata: [],
      items: [],
    }),

    watch: {
      dialog (val) {
        val || this.close();
      }
    },

    created () {
      this.getGeolocation();
    },

    methods: {
      close () {
        this.dialog = false;
      },

      getGeolocation () {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
      },

      showPosition(position) {
        let coords = [];

        coords.push({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });

        this.getWeather(coords);
      },

      getWeather (coords) {
        var url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + coords[0].latitude + '&lon=' + coords[0].longitude + '&APPID=' + this.apikey;
        let data = [];

        this.axios.get(url)
        .then(response => {
          for(let i = 0; i < response.data.list.length; i+=8) {
            data.push({
              day: response.data.list[i].dt_txt,
              temp: response.data.list[i].main.temp,
              clouds: response.data.list[i].weather[0].description,
              wind_deg: response.data.list[i].wind.deg,
              speed: response.data.list[i].wind.speed,
              icon: response.data.list[i].weather[0].icon
            });
          }
          this.items = data;
        });
      },
      getDate(val) {
        return val.slice(0, 10);
      },
      getDir(val) {
        let dir = '';
        let temp = parseInt(val);

        switch(true) {
          case (val === 0):
            dir = 'Northerly Wind';
            break;
          case (temp > 0 && temp < 90):
            dir = 'North Easterly Wind';
            break;
          case (temp === 90):
            dir = 'Easterly Wind';
            break;
          case (temp > 90 && temp < 180):
            dir = 'South Easterly Wind';
            break;
          case (temp === 180):
            dir = 'Southerly Wind';
            break;
          case (temp > 180 && temp < 270):
            dir = 'South Westerly Wind';
            break;
          case (temp === 270):
            dir = 'Westerly Wind';
            break;
          case (temp > 270 && temp < 360):
            dir = 'North Westerly Wind';
            break;
          default:
            dir = 'Undefined'
        }
        return dir;
      },
      getSpeed(val) {
        return Math.floor(val * 3.6);
      },
      getTemp(val) {
        return Math.floor(val - 273.15);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather__data {
  text-transform: capitalize;
}
.weather__data tr td {
  padding: 10px;
}
.expansion__panel {
  background-color: #333333;
}
</style>
