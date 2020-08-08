<template>
  <div class="home-banner">
    <div class="mx-auto title" style="text-align:center;">
      <h1 class="white big">Kecamatan Tangerang Selatan</h1>
      <br />
      <h2 class="white small">Kelurahan Jelupang</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style scoped>
.title {
}
.big {
  font-size: 60px;
  margin-top: -30px;
}

.small {
  font-size: 50px;
}

.white {
  color: white;
}

@media screen and (max-width: 450px) {
  .big {
    padding: 0 20px;
    font-size: 50px;
  }

  .small {
    font-size: 40px;
  }
}
</style>
