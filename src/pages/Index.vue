<template>
  <transition name="fade" appear>
    <main>
      <!-- a wrapper for slot is needed -->
      <div class="grey lighten-5">
        <Layout>
          <Hero />
          <!-- Intro section -->
          <div class="concept-section spad">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="section-title">
                    <h2>Profil Wilayah</h2>
                  </div>
                </div>

                <div class="col-lg-6">
                  <p class="small">
                    <b>Kelurahan Jelupang</b> secara administratif termasuk
                    dalam salah satu dari tujuh kelurahan yang ada di
                    <b>Kecamatan Serpong Utara</b>. Batas wilayah dengan di
                    Sebelah Utara Desa Jelupang yaitu Pondok Jagung Timur,
                    Sebelah Timur berbatasan dengan Parigi Utara, Sebelah
                    Selatan berbatasan dengan Lengkong Karya dan Sebelah Barat
                    berbatasan dengan Pondok Jagung. Luas wilayah Kelurahan
                    tersebut mencakup sebesar 350.000 ha dengan jumlah penduduk
                    sebanyak 28.279 jiwa yang terdiri dari laki-laki sebanyak
                    11.753 jiwa dan perempuan sebanyak 12.220 jiwa.
                  </p>

                  <p>
                    Kondisi umum wilayah kelurahan ini adalah
                    <b>didominasi dengan perumahan dan pemukiman</b> sehingga
                    lahan untuk pertanian dan peternakan sulit dikembangkan,
                    mengingat
                    <b
                      >tidak ada kecukupan wilayah untuk pembangunan sarana yang
                      mendasar seperti jaringan irigasi dan juga untuk
                      peternakan</b
                    >
                    terdapat kesulitan untuk dikembangkan dikarenakan lahan
                    semakin terdesak dengan perumahan, sekalipun ada biasanya
                    masyarakat mencoba untuk melakukan usaha hewan ternak
                    rumahan namun hasil produksi relatif rendah.
                  </p>

                  <p>
                    Kondisi pengembangan kedua sektor tersebut semakin terhambat
                    dikarenakan
                    <b
                      >lahan-lahan non teknis di wilayah tersebut jarang
                      digarap</b
                    >
                    dan lebih cenderung untuk dijual oleh pemilik lahan. Maka
                    dari itu lahan pertanian dan peternakan jarang ditemui
                    sehingga
                    <b>mayoritas mata pencaharian penduduk adalah pedagang</b>.
                    Rata-rata pendidikan akhir masyarakat kelurahan Jelupang
                    cukup beragam dari SD, SMP, SMA dan beberapa lulus dengan
                    predikat sarjana.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- How section -->
          <div class="how-section spad set-bg">
            <div class="container text-white">
              <div class="row">
                <div class="col-lg-6">
                  <div class="section-title">
                    <h2>Program Kerja</h2>
                  </div>
                </div>
              </div>
              <p>
                Keterangan di sini ya gan.
              </p>
              <div class="row">
                <div class="col-lg-3 col-sm-6">
                  <div class="concept-item">
                    <g-link to="/blog/penyuluhan/">
                      <g-image src="../assets/img/proker/penyuluhan.jpg" />

                      <!-- <img src="../assets/img/proker/penyuluhan.jpg" alt="" /> -->
                    </g-link>
                    <h5>Penyuluhan</h5>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="concept-item">
                    <g-link to="/blog/hand-sanitizer/">
                      <g-image src="../assets/img/proker/hand_sanitizer.jpg" />
                    </g-link>
                    <h5>Pembuatan Hand Sanitizer</h5>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="concept-item">
                    <g-link to="/blog/immune-booster/">
                      <g-image src="../assets/img/proker/immune_booster.jpg" />
                    </g-link>
                    <h5>Pembuatan Immune Booster</h5>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="concept-item">
                    <g-link to="/blog/hidroponik/">
                      <g-image src="../assets/img/proker/hidroponik.jpg" />
                    </g-link>
                    <h5>Hidroponik IoT</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Concept section -->
          <div class="concept-section spad">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="section-title">
                    <h2>Tentang Covid-19</h2>
                  </div>
                </div>
                <div class="col-lg-6">
                  <p>
                    Coronavirus Disease 2019 atau Covid-19 adalah
                    <b
                      >penyakit baru yang dapat menyebabkan gangguan pernapasan
                      dan radang paru</b
                    >. Penyakit ini disebabkan oleh infeksi
                    <i
                      >Severe Acute Respiratory Syndrome Coronavirus 2
                      (SARS-CoV-2)</i
                    >. Gejala klinis yang muncul beragam, mulai dari seperti
                    <b
                      >gejala flu biasa (batuk, pilek, nyeri tenggorok, nyeri
                      otot, nyeri kepala) sampai yang berkomplikasi berat
                      (pneumonia atau sepsis).</b
                    >
                  </p>

                  <p>
                    Covid-19 adalah penyakit baru dan para peneliti masih
                    mempelajari bagaimana cara penularannya. Dari berbagai
                    penelitian,
                    <b
                      >metode penyebaran utama penyakit ini diduga adalah
                      melalui droplet saluran pernapasan dan kontak dekat dengan
                      penderita</b
                    >.
                    <b
                      >Droplet merupakan partikel kecil dari mulut penderita
                      yang dapat mengandung virus</b
                    >
                    penyakit, yang dihasilkan pada saat batuk, bersin, atau
                    berbicara. Droplet dapat melewati sampai jarak tertentu
                    (biasanya 1 meter).
                  </p>

                  <p>
                    <b
                      >Droplet bisa menempel di pakaian atau benda di sekitar
                      penderita</b
                    >
                    pada saat batuk atau bersin. Namun, partikel droplet cukup
                    besar sehingga tidak akan bertahan atau mengendap di udara
                    dalam waktu yang lama. Namun,
                    <b
                      >masyarakat diwajibkan untuk menggunakan masker kain yang
                      menutupi hidung dan mulut</b
                    >
                    untuk mencegah penyebaran droplet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Subscription section -->
          <CegahCovid />
          <!-- Premium section end -->
          <div v-if="covid !== null">
            <div class="premium-section spad">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="section-title">
                      <h2>Pantauan Data Covid-19</h2>
                    </div>
                  </div>
                </div>

                <h3><b>Nasional</b></h3>
                <div class="row">
                  <div class="col-lg-3">
                    <div class="premium-item">
                      <h4>Terkonfirmasi</h4>
                      <div id="konfirm_nasional">
                        <h3>{{ covid.confirmed.value }}</h3>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="premium-item">
                      <h4>Sembuh</h4>
                      <div id="sembuh_nasional">
                        <h3>{{ covid.recovered.value }}</h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="premium-item">
                      <h4>Meninggal</h4>
                      <div id="meninggal_nasional">
                        <h3>{{ covid.deaths.value }}</h3>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="premium-item">
                      <h4>Terkahir Update:</h4>
                      <div id="last_update">
                        <h3>{{ covid.lastUpdate }}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="how-section spad set-bg">
            <div class="container container text-white">
              <div class="row">
                <div class="col-lg-6">
                  <div class="section-title">
                    <h2>Pelaksanaan New Normal</h2>
                  </div>
                </div>
                <div class="col-lg-6">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Quis ipsum
                    sus-pendisse ultrices gravida. Risus commodo viverra
                    maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- concept section -->
          <div class="concept-section spad">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="section-title">
                    <h2>Layanan Darurat Covid-19</h2>
                  </div>
                </div>
                <div class="col-lg-6">
                  <p></p>
                  <h3>Hubungi layanan ini jika:</h3>
                  <p></p>
                  <ol class="sub-list">
                    <li>Anda mengalami gejala Covid-19</li>
                    <li>
                      Anda baru-baru ini berkunjung ke suatu negara atau daerah
                      dengan risiko tinggi coronavirus
                    </li>
                    <li>
                      Anda telah melakukan kontak dekat dengan seseorang dengan
                      coronavirus
                    </li>
                  </ol>
                  <div class="hs-text">
                    <p>
                      <a href="tel:112" class="site-btn"
                        >Layanan Call Center <b>112/119</b> (BEBAS PULSA / TOLL
                        FREE)</a
                      >
                    </p>
                    <p>
                      <a href="tel:0811889371" class="site-btn"
                        >Dinas Kesehatan Kota Tangsel <b>0811 889 371</b></a
                      >
                    </p>
                    <p>
                      <a href="#" class="site-btn sb-c2">Kontak Selengkapnya</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </main>
  </transition>
</template>

<script>
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import CegahCovid from "../components/cegahcovid";
import axios from "axios";
export default {
  components: {
    Navbar,
    Hero,
    CegahCovid
  },
  metaInfo: {
    title: "Selamat Datang"
  },
  data() {
    return {
      covid: null
    };
  },
  mounted() {
    axios.get("https://covid19.mathdro.id/api/countries/IDN").then(res => {
      console.log(res.data);
      this.covid = res.data;
    });
  }
};
</script>
<style scoped>
p {
  font-size: 16px;
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

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
