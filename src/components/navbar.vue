<template>
  <header class="header-section clearfix">
    <g-link to="/" class="site-logo">
      <g-image src="../assets/jelupang.png" alt="" style="max-width:70px;" />
    </g-link>

    <ul class="main-menu">
      <li><g-link to="/">Beranda</g-link></li>
      <li><a href="/blog/kkn-t-jelupang">KKN-T IPB</a></li>
      <li>
        <g-link to="/blog/profil-tim">Profil Tim</g-link>
      </li>
      <li>
        <a href="">Program Kerja</a>
        <ul class="sub-menu">
          <li><g-link to="/blog/penyuluhan">Penyuluhan</g-link></li>
          <li><g-link to="/blog/hand-sanitizer">Hand Sanitizer</g-link></li>
          <li><g-link to="/blog/immune-booster">Immune Booster</g-link></li>
          <li><g-link to="/blog/hidroponik">Hidroponik</g-link></li>
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
      <li><a href="#">Kabar Terbaru</a></li>
    </ul>
  </header>
  <!-- <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar> -->
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped></style>
