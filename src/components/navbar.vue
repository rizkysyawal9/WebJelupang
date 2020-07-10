<template>
  <div class="header-section clearfix">
    <a href="index.html" class="site-logo">
      <img src="../assets/jelupang.png" alt="" style="max-width:70px;" />
    </a>

    <ul class="main-menu">
      <li><a href="/">Beranda</a></li>
      <li><a href="/kknt">KKN-T IPB</a></li>
      <li><a href="/profil-tim">Profil Tim</a></li>
      <li>
        <a href="">Program Kerja</a>
        <ul class="sub-menu">
          <li><a href="/penyuluhan-new-normal">Penyuluhan</a></li>
          <li><a href="/hand-sanitizer">Pembuatan Hand Sanitizer</a></li>
          <li><a href="/immune-booster">Pembuatan Immune Booster</a></li>
          <li><a href="/hidroponik">Hidroponik IoT</a></li>
        </ul>
      </li>
      <li>
        <a href="#">Informasi</a>
        <ul class="sub-menu">
          <li><a href="#">Layanan Darurat Covid-19</a></li>
          <li>
            <a href="https://lawancovid19.tangerangselatankota.go.id/lapor"
              >Lapor Gejala Covid-19</a
            >
          </li>
          <li><a href="#">Pedoman New Normal</a></li>
          <li><a href="#">Lokasi RS Rujukan</a></li>
        </ul>
      </li>
      <li><a href="#">Galeri</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
li {
  text-decoration: none;
  padding: 0;
}
</style>
