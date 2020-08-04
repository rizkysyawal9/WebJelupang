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
          <iframe
            src="https://www.youtube.com/embed/89aMI5X85Sg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="video"
          ></iframe>
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
query{
  blogPost(path:"/blog/immune-booster/"){
    id
    title
    date
    path
    content
  }
}
</page-query>

<script>
export default {};
</script>

<style>
.video {
  /* override other styles to make responsive */
  width: 100% !important;
  height: 420px;
}
</style>