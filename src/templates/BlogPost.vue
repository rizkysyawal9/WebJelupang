<template>
  <Layout>
    <div class="container">
      <div class="row">
        <!-- Post Content Column -->
        <div class="col-lg-8">
          <!-- Title -->
          <h1 class="mt-4 mb-4">{{ $page.blogPost.title }}</h1>

          <hr />

          <!-- Preview Image -->
          <!-- <img
            class="img-fluid rounded"
            src="http://placehold.it/900x300"
            alt=""
          />-->
          <g-image :src="$page.blogPost.image" width="500" height="500" />

          <div v-html="$page.blogPost.content"></div>
          <hr />
        </div>
      </div>
    </div>

    <!-- <article>
      <h1>{{ $page.blogPost.title }}</h1>
      <g-image :src="$page.blogPost.image" width="500" />
      <div v-html="$page.blogPost.content"></div>
    </article>-->
  </Layout>
</template>
<page-query>
    query($id: ID!){
         blogPost(id: $id){
            title
            content
        }
    }
  </page-query>
<script>
export default {
  metaInfo: {
    title: "Tangsel X IPB"
  }
};
</script>

<style></style>
