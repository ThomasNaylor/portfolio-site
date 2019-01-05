<template>
<div class="app-coindesk">
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
            CoinDesk API Consumption
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <a :href="github" target="_blank"><v-btn color="primary">GitHub</v-btn></a>
          <v-btn color="primary" @click.native="close">Cancel</v-btn>
        </v-toolbar>
      </v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12 sm6 md6 lg6 pa-2>
              <v-layout row wrap>
                <v-flex xs12 sm12 md6 lg6 pa-2
                v-for="coin in coindata">
                  <v-card>
                    <v-img
                      v-for="(img, index) in coinImages"
                      v-if="img.currency === coin.currency"
                      :key="'g' + index"
                      :src="img.link"
                      aspect-ratio="2.75"
                    ></v-img>

                    <v-card-title primary-title>
                      <div>
                        <h1 class="headline mb-0"> {{ coin.chartname }} / {{ coin.currency }}</h1>
                        <h3>{{ coin.currencyVal[coin.currency].rate }}</h3>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12 sm12 md6 lg6 pa-2>
              <h1 class="text-xs-center">coinDesk Api</h1>
              <p class="text-xs-left">Using CoinDesk api, VueJs and Vuetify, here you will find the latest
              exhange rates for the Dollar, Pound and Euro neatly placed into Vuetify cards.</p>
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

import dollar from '@/assets/coindeskapi/img/dollar.jpg';
import pound from '@/assets/coindeskapi/img/pound.jpg';
import euro from '@/assets/coindeskapi/img/euro.jpg';

export default {
  name: 'coindesk',
  data: () => ({
      dialog: false,
      model: null,
      github: 'https://github.com/ThomasNaylor/coindeskAPIuse',
      coindata: [],
      coinImages: [
        { currency: 'USD', link: dollar },
        { currency: 'GBP', link: pound },
        { currency: 'EUR', link: euro }
      ]
    }),

    watch: {
      dialog (val) {
        val || this.close();
      }
    },

    created () {
      this.getCoinData();
    },

    methods: {
      close () {
        this.dialog = false;
      },

      getCoinData() {
        this.axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => {
          for(let coin in response.data.bpi) {
            this.coindata.push({
              chartname: response.data.chartName,
              currency: coin,
              currencyVal: response.data.bpi,
              timestamp: response.data.time
            });
          }
          return this.coindata;
        });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
