<template>
<div>
 <h2> Post Detail </h2>
 
    <h3><b>Category Name - {{posts.category_id}} </b></h3>
  <h3>Title - {{posts.title}} </h3>   
   <p> {{posts.content}} </p>
   <p><router-link :to="{name:'postsedit',params: {post_id: posts.id}}"> Edit</router-link> </p>
 
</div>

</template>
<script>
export default {
 props:{
    post_id:{
            required:true,
        }
    },
  data() {
    return {
      posts:'',
      meta: null,
      links: null,
      url : `/api/v1/post/${this.post_id}`
    };
  },
  created() {     
   
    axios.get(this.url).then(this.init_data_handler);
    console.log(this.$route.params.post_id)
  },
  methods: {
    init_data_handler (response) {
      this.posts = response.data.data;
      this.meta = response.data.meta;
      this.links = response.data.links;
    }
  }
};
</script>