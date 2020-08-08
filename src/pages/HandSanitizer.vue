<template>
  <Layout>
    <div class="container">
      <div class="row">
        <!-- Post Content Column -->
        <div class="col-lg-8">
          <!-- Title -->
          <h1 class="mt-4 mb-4">{{ $page.blogPost.title }}</h1>
          <hr />

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/W-nbFz1Q0TY"
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
  blogPost(path:"/blog/hand-sanitizer/"){
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
  margin-bottom: 20px;
}
</style>