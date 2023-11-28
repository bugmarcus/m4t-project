<template>
  <div :class="$style.movieRecommendations">
    <div v-for="(movies, eventDate) in movieSuggestions" :key="eventDate">
      <h2>{{ eventDate }} Movie Recommendations:</h2>
      <div :class="$style.movieList">
        <div v-for="movie in movies" :key="movie.id" :class="$style.movie">
          <img :src="movie.poster" alt="Movie Poster" />
          <h3>{{ movie.title }}</h3>
          <p>{{ movie.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import styles from "./MovieRecommendations.module.scss";

export default defineComponent({
  data() {
    return {
      movieSuggestions: {},
    };
  },
});
</script>

<style module lang="scss">
@import "./MovieRecommendations.module.scss";
</style>
