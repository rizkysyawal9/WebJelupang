<template>
  <Layout>
    <h1>Isi Kabar terbaru terdapat disini</h1>
    <div v-for="post in $page.allBlogPost.edges" :key="post.id">
      <a :href="post.node.path">
        <h1>{{post.node.title}}</h1>
        <p>Posted on {{post.node.date}}</p>
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
export default {};
</script>

<style>
</style>