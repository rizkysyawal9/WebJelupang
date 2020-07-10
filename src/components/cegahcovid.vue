<template>
  <div class="how-section spad set-bg">
    <div class="container text-white">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-title">
            <h2>Melindungi Diri dari Covid-19</h2>
          </div>
        </div>
      </div>

      <h4><b>Hal yang Harus Dilakukan :</b></h4>
      <div class="row">
        <div v-for="info in infos" :key="info.id" class="col-lg-3 col-sm-6">
          <div class="premium-item">
            <g-image src="../assets/img/covid/do-stay-at-home.webp" alt="" />
            <p>
              Tetap tinggal di rumah; bekerja dari rumah, belajar dari rumah,
              dan beribadah di rumah
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="premium-item">
            <g-image src="../assets/img/covid/do-stay-at-home.webp" alt="" />
            <p>
              Tetap tinggal di rumah; bekerja dari rumah, belajar dari rumah,
              dan beribadah di rumah
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="premium-item">
            <g-image src="../assets/img/covid/do-cuci-tangan.webp" alt="" />
            <p>
              Cuci tangan dengan sabun dan air minimal 20 detik atau gunakan
              hand sanitizer berbasis alkohol minimal 60 %
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="premium-item">
            <g-image src="../assets/img/covid/do-bersihkan.webp" alt="" />
            <p>
              Bersihkan dan disinfeksi permukaan benda yang sering disentuh
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="premium-item">
            <g-image src="../assets/img/covid/do-tutup-mulut.webp" alt="" />
            <p>
              Tutupi mulut dan hidung saat batuk atau bersin dengan tisu atau
              siku bagian dalam
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="premium-item">
            <g-image src="../assets/img/covid/do-masker.webp" alt="" />
            <p>
              Pakai masker jika Anda harus beraktivitas di luar rumah dan ganti
              secara berkala
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="premium-item">
            <g-image src="../assets/img/covid/do-pola-hidup.webp" alt="" />
            <p>
              Terapkan pola hidup sehat dengan makanan bergizi dan olahraga
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <div class="section-title">
            <h4></h4>
          </div>
        </div>
      </div>

      <h4>
        <b>Hal yang <i>Tidak Boleh</i> Dilakukan :</b>
      </h4>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <div class="premium-item">
            <img src="../assets/img/covid/dont-bepergian.webp" alt="" />
            <p>Bepergian ke luar rumah untuk hal yang tidak penting</p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="premium-item">
            <img src="../assets/img/covid/dont-jaga-jarak.webp" alt="" />
            <p>
              Berada dekat dengan orang yang sedang sakit, batuk atau bersin
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="premium-item">
            <img src="../assets/img/covid/dont-menyentuh.webp" alt="" />
            <p>Menyentuh mata, hidung, atau mulut dengan telapak tangan</p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="premium-item">
            <img src="../assets/img/covid/dont-timbun-masker.webp" alt="" />
            <p>
              Menimbun masker, hand sanitizer, atau perlengkapan medis lainnya
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CegahCovid"
};
</script>

<style></style>
