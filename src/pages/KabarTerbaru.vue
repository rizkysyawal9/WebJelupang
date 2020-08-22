<template>
  <Layout>
    <div class="container">
      <div v-for="post in $page.allBlogPost.edges" :key="post.node.id">
        <div
          v-if="post.node.title!='Profil-tim ' && post.node.title!='Beasiswa Bank Indonesia' && post.node.title!='KKN-T Jelupang' && post.node.title!='Tangerang Selatan 08'"
        >
          <a :href="post.node.path">
            <div class="card">
              <g-image src="../assets/kkn.png" style="max-width: 150px" class="image"></g-image>
              <div class="flex-item">
                <h2>{{ post.node.title}}</h2>
                <p class="sub-text">posted in {{post.node.date}}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>

<page-query>
query{
  allBlogPost{
    edges{
      node{
          id
        title
        date(format: "MMMM DD, YYYY" )
        path
      }
    }
  }
}
</page-query>

<style scoped>
.sub-text {
  font-size: 18px;
}
.card {
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 16px 180px;
}
.flex-item {
  margin-left: 30px;
}
@media screen and (max-width: 420px) {
  .card {
    margin: 12px;
  }
}
</style>