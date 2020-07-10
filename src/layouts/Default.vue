<template>
  <div>
    <Navbar />
    <slot />

    <Footer />
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
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>
.footer {
  margin-top: 4em;
  padding: 30px;
}
.margin {
  margin-bottom: 20px;
}

li {
  text-decoration: none;
}

.logo {
  max-width: 70px;
  padding: 10px;
}
p {
  font-size: 30px;
}
</style>
