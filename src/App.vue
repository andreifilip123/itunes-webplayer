<template>
  <div id="app">
    <ItunesLibrary/>
    <div class="top-bar">
      <div class="top-bar-left">
        <ul class="dropdown menu">
          <li class="align-self-middle">
            <router-link to="/">
              <img class="responsive-image" alt="iTunes logo" src="./assets/itunes-small.png">
            </router-link>
          </li>
          <li><router-link to="/genres">Genres</router-link></li>
          <li><router-link to="/artists">Artists</router-link></li>
          <li><router-link to="/albums">Albums</router-link></li>
          <li><router-link to="/songs">Songs</router-link></li>
        </ul>
      </div>
      <div class="top-bar-right">
        <Search/>
      </div>
    </div>
    <div v-for="item in results" :key="item.id">
      <div class="song__item-wrapper" v-if="activeView == 'genre'">
        <div class="accordion">
          <a href="javascript:void(0);" class="accordion__title" data-accordion-title>{{item.genre}}</a>
          <div class="accordion__content" data-accordion-content>
            <div class="accordion__item" v-for="song in genreSongs(item.genre)" :key="song.id">
              <a :href="song.location" class="song__item">
                <p><span class="song__title">{{song.title}}</span> - <span class="song__artist">{{song.artist}}</span></p>
                <p class="song__album">{{song.album}}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="song__item-wrapper" v-else-if="activeView == 'artist'">
        <div class="accordion">
          <a href="javascript:void(0);" class="accordion__title" data-accordion-title>{{item.artist}}</a>
          <div class="accordion__content" data-accordion-content>
            <div class="accordion__item" v-for="song in artistSongs(item.artist)" :key="song.id">
              <a :href="song.location" class="song__item">
                <p><span class="song__title">{{song.title}}</span> - <span class="song__artist">{{song.artist}}</span></p>
                <p class="song__album">{{song.album}}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="song__item-wrapper" v-else-if="activeView == 'album'">
        <div class="accordion">
          <a href="javascript:void(0);" class="accordion__title" data-accordion-title>{{item.album}}</a>
          <div class="accordion__content" data-accordion-content>
            <div class="accordion__item" v-for="song in albumSongs(item.album)" :key="song.id">
              <a :href="song.location" class="song__item">
                <p><span class="song__title">{{song.title}}</span> - <span class="song__artist">{{song.artist}}</span></p>
                <p class="song__album">{{song.album}}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="song__item-wrapper" v-else-if="activeView == 'title'">
        <a :href="item.location" class="song__item">
          <p><span class="song__title">{{item.title}}</span> - <span class="song__artist">{{item.artist}}</span></p>
          <p class="song__album">{{item.album}}</p>
        </a>
      </div>
      <div class="song__item-wrapper" v-else-if="activeView == ''">
        <a :href="item.location" class="song__item">
          <p><span class="song__title">{{item.title}}</span> - <span class="song__artist">{{item.artist}}</span></p>
          <p class="song__album">{{item.album}}</p>
        </a>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import ItunesLibrary from '@/components/ItunesLibrary.vue';
import { mapState, mapGetters } from "vuex";
import $ from 'jquery';
export default {
  name: 'app',
  computed: {
    ...mapState([
      'results',
      'activeView',
    ]),
    ...mapGetters([
      'genreSongs',
      'artistSongs',
      'albumSongs',
    ])
  },
  components: {
    Search,
    ItunesLibrary,
  },
  mounted() {
    $(document).on('click', '[data-accordion-title]', function(e){
      e.preventDefault();
      const $accordionTitle = $(this);
      const $accordionContent = $accordionTitle.next();
      
      $accordionContent.toggleClass('show');
      $accordionContent.slideToggle(350);
    });
  }
}
</script>


<style lang="stylus">
@import "~foundation-sites/dist/css/foundation.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.top-bar {
  padding: 20px;
}

.menu {
  & a {
    display: inline-block;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.song {
  &__item {
    display: block;
    padding: 10px;
    background: linear-gradient(to bottom right, #FF5E50, #FC5C72, #E34DA4, #9A50F8, #4A9FFB, #29CAF9);
    filter: grayscale(75%);
    color: #ffffff;
    text-decoration: none;

    &-wrapper {
      max-width: 80%;
      margin: 10px auto;
      border-width: 8px;
      border-style: solid;
      filter: grayscale(25%);
      border-image: linear-gradient(to bottom right, #FF5E50, #FC5C72, #E34DA4, #9A50F8, #4A9FFB, #29CAF9) 1 1;

      &:hover {
        filter: grayscale(0%);
      }
    }

    &:hover {
      background: linear-gradient(to bottom right, #FF5E50, #FC5C72, #E34DA4, #9A50F8, #4A9FFB, #29CAF9);
      filter: grayscale(0%);
    }
  }

  &__title {
    font-size: 20px;
    font-weight: 900;
  }

  &__artist {
    font-size: 20px;
    font-weight: 700;
  }

  &__album {
    font-size: 16px;
    font-weight: 500;
  }
}

.accordion {
  &__title {
    padding: 0 20px;
    font-size: 20px;
    font-weight: 900; 
  }

  &__content {
    padding: 0 20px;
    overflow: hidden;
    display: none;
  }

  &__item {
    margin: 10px;
  }
}
</style>
