<template>
  <div class="grey lighten-5">
    <Layout>
      <div class="home-banner">
        <div class="container center">
          <div class="white-text big">Kecamatan Tangerang Selatan</div>
          <div class="white-text small">Kelurahan Jelupang</div>
        </div>
      </div>
      <div class="container center">
        <h5>Pesan Presiden tentang Kewaspadaan Penyebaran Covid-19</h5>
        <iframe
          class="center frame"
          width="800"
          height="400"
          src="https://www.youtube.com/embed/QUaa_EFQZcM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h5>Protokol Kesehatan Covid-19</h5>
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/embed/3ooqLbCdVug"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <!-- <g-image alt="Jelupunk" src="~/assets/jelupunk.jpeg" width="800" /> -->
    </Layout>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Selamat Datang"
  }
};
</script>
<style scoped>
.frame {
}
h5 {
  font-weight: bold;
  margin: 2em 0;
}
.big {
  margin-top: -15px;
  font-size: 60px;
  font-weight: bold;
}
.small {
  font-size: 40px;
  font-weight: bold;
}
.h1 {
  margin-top: -30px;
}

.h2 {
  margin-top: 0;
}
.home-links a {
  margin-right: 1rem;
}

.home-banner {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/jelupang.jpg");
  background-size: cover;
  background-position: center;
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
}
</style>