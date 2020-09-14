<template>
  <!-- Footer section -->
  <footer class="footer-section">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-7 order-lg-2">
          <div class="row">
            <div class="col-sm-4">
              <div class="footer-widget">
                <h2>KKNT-IPB</h2>
                <ul>
                  <li><a href="">Wilayah KKN-T</a></li>
                  <li><a href="">Program Kerja</a></li>
                  <li><a href="">Profil Tim</a></li>
                </ul>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="footer-widget">
                <h2>Informasi</h2>
                <ul>
                  <li><a href="">Layanan Darurat</a></li>
                  <li>
                    <a
                      href="https://lawancovid19.tangerangselatankota.go.id/lapor"
                      >Lapor</a
                    >
                  </li>
                  <li><a href="">New Normal</a></li>
                  <li><a href="">RS Rujukan</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-5 order-lg-1">
          <img src="../assets/img/logo_lppm.png" alt="" />
          <div class="copyright">
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy;
            {{ date }}
            All rights reserved | CSS taken from
            <i class="fa fa-heart-o" aria-hidden="true"></i> by
            <a href="https://colorlib.com" target="_blank">Colorlib</a>
            <!--  Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          </div>
          <div class="social-links">
            <a href=""><i class="fa fa-instagram"></i></a>
            <a href=""><i class="fa fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer section end -->
</template>

<script>
export default {
  name: "Footer",
  methods: {
    callFunction: function() {
      var currentDate = new Date().getFullYear();
      console.log(currentDate);
      this.date = currentDate;
    }
  },
  data() {
    return {
      date: ""
    };
  },
  created() {
    this.callFunction();
  }
};
</script>

<style></style>
