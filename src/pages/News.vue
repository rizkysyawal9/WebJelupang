<template>
  <Layout>
    <h1>Isi Kabar terbaru terdapat disini</h1>
    <div v-for="post in $page.allBlogPost.edges" :key="post.id" class="card">
      <a :href="post.node.path">
        <h1>{{ post.node.title }}</h1>
        <p>Posted on {{ post.node.date }}</p>
      </a>
    </div>
  </Layout>
</template>

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

<script>
export default {
  metaInfo: {
    title: "Kabar Terbaru"
  }
};
</script>

<style scoped>
/* a {
  text-decoration: none;
  color: black;
}

a:visited {
  text-decoration: none;
  color: black;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 20px;
  margin-bottom: 20px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
} */
</style>
