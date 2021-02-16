<template>
  <div>
    <div v-for="item in results" :key="item.id">
      <div class="song__item-wrapper" v-if="activeView == 'genre'">
        <div class="accordion">
          <a href="javascript:void(0);" class="accordion__title" data-accordion-title>{{item.genre}}</a>
          <div class="accordion__content" data-accordion-content>
            <div class="accordion__item" v-for="song in genreSongs(item.genre)" :key="song.id">
              <a :href="youtubeUrl(song)" class="song__item">
                <p>
                  <span class="song__title">{{song.title}}</span> -
                  <span class="song__artist">{{song.artist}}</span>
                </p>
                <p class="song__album">{{song.album}}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="song__item-wrapper" v-else-if="activeView == 'artist'">
        <div class="accordion">
          <a
            href="javascript:void(0);"
            class="accordion__title"
            data-accordion-title
          >{{item.artist}}</a>
          <div class="accordion__content" data-accordion-content>
            <div class="accordion__item" v-for="song in artistSongs(item.artist)" :key="song.id">
              <a :href="youtubeUrl(song)" class="song__item">
                <p>
                  <span class="song__title">{{song.title}}</span> -
                  <span class="song__artist">{{song.artist}}</span>
                </p>
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
              <a :href="youtubeUrl(song)" class="song__item">
                <p>
                  <span class="song__title">{{song.title}}</span> -
                  <span class="song__artist">{{song.artist}}</span>
                </p>
                <p class="song__album">{{song.album}}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="song__item-wrapper" v-else-if="activeView == 'title'">
        <a :href="youtubeUrl(item)" class="song__item">
          <p>
            <span class="song__title">{{item.title}}</span> -
            <span class="song__artist">{{item.artist}}</span>
          </p>
          <p class="song__album">{{item.album}}</p>
        </a>
      </div>
      <div class="song__item-wrapper" v-else-if="activeView == 'year'">
        <div class="accordion">
          <a href="javascript:void(0);" class="accordion__title" data-accordion-title>{{item.year}}</a>
          <div class="accordion__content" data-accordion-content>
            <div class="accordion__item" v-for="song in yearSongs(item.year)" :key="song.id">
              <a :href="youtubeUrl(song)" class="song__item">
                <p>
                  <span class="song__title">{{song.title}}</span> -
                  <span class="song__artist">{{song.artist}}</span>
                </p>
                <p class="song__album">{{song.album}}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="song__item-wrapper" v-else-if="activeView == ''">
        <a :href="youtubeUrl(item)" class="song__item">
          <p>
            <span class="song__title">{{item.title}}</span> -
            <span class="song__artist">{{item.artist}}</span>
          </p>
          <p class="song__album">{{item.album}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import $ from 'jquery';

export default {
  name: 'results',
  computed: {
    ...mapState(['results', 'activeView']),
    ...mapGetters(['genreSongs', 'artistSongs', 'albumSongs', 'yearSongs'])
  },
  mounted() {
    /* eslint-disable func-names */
    $(document).on('click', '[data-accordion-title]', function(e) {
      /* eslint-enable func-names */
      e.preventDefault();
      const $accordionTitle = $(this);
      const $accordionContent = $accordionTitle.next();

      $accordionContent.toggleClass('show');
      $accordionContent.slideToggle(350);
    });
  },
  methods: {
    escapeSpaces(value) {
      if (!value) {
        return '';
      }
      return value.replace(' ', '+');
    },
    youtubeUrl(song) {
      return (
        'https://www.youtube.com/results?search_query='
        + this.escapeSpaces(song.title)
        + '+'
        + this.escapeSpaces(song.artist)
        + '&page=&utm_source=opensearch'
      );
    }
  }
};
</script>

<style lang="stylus">
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
