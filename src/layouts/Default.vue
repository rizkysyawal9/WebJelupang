<template>
  <div>
    <!-- <nav class="nav-extended"> -->

    <nav>
      <div class="nav-wrapper teal">
        <a href="#" class="brand-logo right">
          <img src="../assets/jelupang.png" alt="image" class="logo" />
        </a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <g-link to="/">Home</g-link>
          </li>
          <li>
            <g-link class="nav__link" to="/about/">About</g-link>
          </li>
          <li>
            <g-link class="nav__link" to="/news/">Kabar Terbaru</g-link>
          </li>
        </ul>
      </div>
    </nav>
    <slot />
    <footer class="teal">
      <div class="center footer white-text">© Copyright 2020, Kota Tangerang Selatan</div>
    </footer>
  </div>
</template>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {};
</script>

<style scoped>
.footer {
  margin-top: 4em;
  padding: 30px;
}
.margin {
  margin-bottom: 20px;
}

.logo {
  max-width: 70px;
  padding: 10px;
  /* margin-left: 1em;
  margin-top: -3px;
  padding: 8px; */
}
p {
  font-size: 30px;
}
/* body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
} */
</style>
