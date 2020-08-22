<template>
  <div>
    <header class="header-section clearfix d-none d-md-block">
      <g-link to="/" class="site-logo">
        <g-image src="../assets/jelupang.png" alt style="max-width:70px;" />
      </g-link>
      <g-link to="/" class="site-logo">
        <g-image src="../assets/kkn.png" alt style="max-width:70px;" />
      </g-link>

      <ul class="main-menu">
        <li>
          <g-link to="/">Beranda</g-link>
        </li>
        <li>
          <a href="/blog/kkn-t-jelupang">KKN-T IPB</a>
        </li>
        <li>
          <g-link to="/blog/profil-tim">Profil Tim</g-link>
        </li>
        <li>
          <a href>Program Kerja</a>
          <ul class="sub-menu">
            <li>
              <g-link to="/blog/penyuluhan">Penyuluhan</g-link>
            </li>
            <li>
              <g-link to="/hand-sanitizer">Hand Sanitizer</g-link>
            </li>
            <li>
              <g-link to="/immune-booster">Immune Booster</g-link>
            </li>
            <li>
              <g-link to="/blog/hidroponik">Hidroponik</g-link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Informasi</a>
          <ul class="sub-menu">
            <li>
              <a href="https://lawancovid19.tangerangselatankota.go.id/">Layanan Darurat Covid-19</a>
            </li>
            <li>
              <a href="https://lawancovid19.tangerangselatankota.go.id/lapor">Lapor Gejala Covid-19</a>
            </li>

            <li>
              <a href="https://lawancovid19.tangerangselatankota.go.id/#rujukan">Lokasi RS Rujukan</a>
            </li>
          </ul>
        </li>
        <li>
          <g-link to="/kabar-terbaru">Kabar Terbaru</g-link>
        </li>
      </ul>
    </header>
    <b-navbar toggleable="lg" type="dark" variant="info" class="d-md-none bg-dark">
      <b-navbar-brand>
        <g-image src="../assets/jelupang.png" alt style="max-width:50px;" />
        <g-image src="../assets/kkn.png" alt style="max-width:50px; margin-left:20px;" />
      </b-navbar-brand>
      <b-navbar-brand></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <g-link to="/" class="white">Beranda</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link to="/blog/kkn-t-jelupang" class="white">KKN-T IPB</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link to="/blog/profil-tim" class="white">Profil Tim</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link to="/kabar-terbaru" class="white">Kabar Terbaru</g-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item-dropdown text="Program Kerja" right>
            <b-dropdown-item class="sub">
              <g-link to="/blog/penyuluhan" class="grey">Penyuluhan</g-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <g-link to="/hand-sanitizer" class="grey">Hand Sanitizer</g-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <g-link to="/immune-booster" class="grey">Immune Booster</g-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <g-link to="/blog/hidroponik" class="grey">Hidroponik</g-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Informasi" right>
            <b-dropdown-item href="#">Layanan Darurat Covid</b-dropdown-item>
            <b-dropdown-item
              href="https://lawancovid19.tangerangselatankota.go.id/lapor"
            >Lapor Gejala Covid-19</b-dropdown-item>
            <b-dropdown-item href="#">Pedoman New Normal</b-dropdown-item>
            <b-dropdown-item href="#">Lokasi RS Rujukan</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
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
  </b-navbar>-->
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.white {
  color: white;
  text-decoration: none;
}

.grey {
  color: #263238;
  text-decoration: none;
}

.sub > a {
  color: grey;
  text-decoration: none;
}

a {
  text-decoration: none;
}

.bg-dark {
  background-color: blue;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
