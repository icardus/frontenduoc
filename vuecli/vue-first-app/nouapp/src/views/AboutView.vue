<template>
  <div class="about">
    <h1>Prova de APIs</h1>
    <h2>Acudit del dia</h2>
    {{acudit}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: null,
      acudit: "",
    };
  },
  mounted() {
    console.log("entra");
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((response) => (this.acudit = response.data.value));
  },
};
</script>


