<!-- components/Card.vue -->

<template>
  <div :class="$style.card">
    <h1>Today's Date</h1>
    <p>Commemorative Events:</p>
    <ul>
      <li v-for="event in commemorativeEvents" :key="event.date">
        {{ event.date }} - {{ event.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import styles from "./Card.module.scss";

export default defineComponent({
  data() {
    return {
      commemorativeEvents: [],
    };
  },
});
</script>

<style module lang="scss">
@import "./Card.module.scss";
</style>
