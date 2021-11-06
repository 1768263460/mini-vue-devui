<script setup lang="ts">
import { Tree } from '../devui/tree'
import { Rate } from '../devui/rate'
import { ref } from 'vue'

const score = ref(3);
const range = ref(5);

const handleInput = (e:any) => {
  score.value = Number((e.target as any).value);
}

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>你的评分是 {{ score }}</h1>
  请输入你的评分：<input type="number" :value="score" @input="handleInput($event)">
  <hr>
  <Rate v-model="score" :range="range" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
