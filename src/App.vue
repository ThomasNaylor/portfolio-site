<template>
  <v-app id="app__main">
    <v-toolbar flat fixed scrollOffScreen  dense>
      <v-toolbar-side-icon
      class="hidden-md-and-up"
      @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title><router-link to="/" tag="span" style="cursor: pointer">{{title}}</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
        flat
        v-for="menuItem in menu"
        :key="menuItem.title"
        router
        :to="menuItem.link">
        {{menuItem.name}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      temporary
      app>
      <v-list class="pt-0" dense>
        <v-divider light></v-divider>
        <v-list-tile
          v-for="menuItem in menu"
          :key="menuItem.title"
          router
          :to="menuItem.link">

          <v-list-tile-action>
            <v-icon>{{ menuItem.icon }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <main>
      <transition name="page" mode="out-in">
        <router-view/>
      </transition>
    </main>

    <v-footer height="auto">
    <v-layout justify-center row wrap>
      <v-flex
        text-xs-center
        xs12>
        &copy;2018 — <strong>Website by: Tom Naylor</strong>
      </v-flex>
    </v-layout>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      title: 'Tom Naylor | Web Developer',
      menu: [
        { name: 'About', link: '/', icon: 'person' },
        { name: 'Projects', link: '/projects', icon: 'apps' },
        { name: 'Blog', link: '/blog', icon: 'subject' },
        { name: 'Contact', link: '/contact', icon: 'mail' }
      ],
      drawer: null,
      mini: true,
      right: null
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poiret+One');
@import url('https://fonts.googleapis.com/css?family=Gamja+Flower');

#app__main {
  min-width: 320px;
  font-family: 'Poiret One', cursive;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;

  .app {
    height: 100vh;
    padding: 48px;
    color: #FFFFFF;

    .quote {
      border-left: 4px solid white;
      padding-left: 25px;
    }
    .text__center {
      text-align: center;
    }
    .section__heading {
      font-size: 80px;
    }
    .content__heading {
      font-size: 42px;
    }
  }

  .v-toolbar {
    background-color: #FFFFFF;
    font-family: 'Gamja Flower', cursive;
    .v-toolbar__title {
      font-size: 26px;
    }
    .v-btn {
      border-radius: 0px;
      font-size: 20px;
    }
    .v-btn--active {
      color: #FFFFFF;
      background-color: #3498db;
    }
  }

  .page-enter-active, .page-leave-active {
    transition: opacity .5s, transform 1s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
    transform: translateY(-30%);
  }

  @media (max-width: 400px) {
    .app {
      height: 100%;

      .section__heading {
        font-size: 36px;
      }
      .content__heading {
        font-size: 30px;
      }
      .text__center {
        text-align: center;
      }
    }
  }

  @media (max-width: 600px) {
    .app {
      height: 100%;

      .section__heading {
        font-size: 48px;
      }
      .content__heading {
        font-size: 42px;
      }
      .text__center {
        text-align: center;
      }
    }
  }

  @media (max-width: 960px) and (orientation: landscape) {
    .app {
      height: 100%;
    }
  }
}
</style>
