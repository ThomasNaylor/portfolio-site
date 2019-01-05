<template>
<div class="app-spacestation">
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
            Space Station Tracker
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
                <v-flex id="map_cont" xs12 sm12 md6 lg6>
                  <gmap-map
                    :center="center"
                    :zoom="3"
                    :options="mapOptions"
                    map-type-id="hybrid"
                    style="width:100%;  height:70vh;">
                    <gmap-marker
                      v-for="(m, index) in markers"
                      :key="'a' + index"
                      :position="m.position"
                      :icon="m.icon"
                      @click="openInfoWindow()">
                    </gmap-marker>

                    <gmap-polyline
                      :options="polylineOptions">
                    </gmap-polyline>

                    <gmap-info-window
                      class="info__window"
                      v-for="(m, index) in markers"
                      :key="'b' + index"
                      :opened="infoWindowOpen"
                      :options="infoWindowOptions"
                      :position="m.position"
                      @closeclick="infoWindowOpen=false">
                      <h3>SPACE STATION INFORMATION</h3><br>
                      <h4>Raw satellite data below:</h4><br>
                      <table class="table__data" v-for="(i, index) in infoWindow"
                        :key="'c' + index">
                        <tr><td>Satelitte: {{ i.name }}</td></tr>
                        <tr><td>Visibility: {{ i.visibility }}</td></tr>
                        <tr><td>Altitude: {{ i.altitude }}</td></tr>
                        <tr><td>Velocity: {{ i.velocity }}</td></tr>
                        <tr><td>Latitude: {{ i.lat }}</td></tr>
                        <tr><td>Longitude: {{ i.lng }}</td></tr>
                      </table>
                    </gmap-info-window>
                  </gmap-map>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12 sm6 md6 lg6 pa-2>
              <h1>Space Station Tracker</h1>
              <p>This is a simple example of how we can integrate multiple api's to create
            something useful from the data provided. Here you will see a satellite plot a
            trial across the globe with googles polyline function. (updates every 60 seconds)</p>
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

import satgif from '@/assets/spacestation/img/sat1.gif';

export default {
  name: 'spacestation',
  data: () => ({
    dialog: false,
    model: null,
    github: 'https://github.com/ThomasNaylor/satellite-VueJS',
    center: { lat: 0, lng: 0 },
    markers: [],
    polylineOptions: { path: [], strokeOpacity: 0, icons: [{ icon: { path: 'M 0, -1 0,1', strokeOpacity: 1, scale: 4 }, offset: '0', repeat: '20px' }] },
    infoWindow: [],
    infoWindowOptions: { pixelOffset: { width: 0, height: -45 } },
    mapOptions: { disableDefaultUI: true },
    infoWindowOpen: true,
    satgif: satgif
  }),

  watch: {
    dialog (val) {
      val || this.close();
    },

    dialog (val) {
      if(val === true) {
        this.getSpaceStation();
      }
    },

    markers (val) {
      if(this.markers.length >= 2) {
        return this.markers.shift();
      }
    },

    infoWindow (val) {
      if(this.infoWindow.length >= 2) {
        return this.infoWindow.shift();
      }
    },

    polylineOptions (val) {
      if(this.polylineOptions.path.length >= 100) {
        return this.polylineOptions.path.shift();
      }
    }
  },

  methods: {
    getSpaceStation () {
      this.axios.get('https://api.wheretheiss.at/v1/satellites/25544')
      .then((response) => {

        const pos = new google.maps.LatLng(parseFloat(response.data.latitude), parseFloat(response.data.longitude));

        this.infoWindow.push({
          name: response.data.name,
          velocity: response.data.velocity,
          altitude: response.data.altitude,
          visibility: response.data.visibility,
          lat: parseFloat(response.data.latitude),
          lng: parseFloat(response.data.longitude),
        });

        const marker = new google.maps.Marker({
          position: pos,
          optimized: false,
          icon: this.satgif
        });

        this.polylineOptions.path.push(pos);

        this.center = pos;
        this.markers.push(marker);

      });
    },
    openInfoWindow () {
      this.infoWindowOpen = true;
    },
    close () {
      this.dialog = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map_cont {
  min-width: 100%;
  min-height: 100%;
}
.info__window {
    width: 200px;
    height: 200px;
}
.table__data tr:nth-child(even) {
  background-color: #f2f2f2;
}
.table__data tr:hover {
  background-color: #ddd;
}
.table__data td {
  border: 1px solid #ddd;
  padding: 8px;
}
</style>
