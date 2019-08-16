<template>
  <div id="MyLoading">
    <div class="loadingBox"></div>
    <img src="../../src/img/loading.gif" class="loading-logo" alt="">
  </div>
</template>

<script>
    export default {
        name: "Loading"
    }
</script>

<style scoped>
  #MyLoading{
    width: 1.6rem;
    height: 1.6rem;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -0.8rem;
    margin-left: -0.8rem;
    border-radius: 4px;
    z-index: 9999;
  }
  .loadingBox{
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.1;
  }
  .loading-logo{
    width: 0.82rem;
    height: 0.82rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -0.41rem;
    margin-left: -0.41rem;
  }
</style>
