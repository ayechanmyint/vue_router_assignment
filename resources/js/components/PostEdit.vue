<template>
<div>
 <h2> Post Edit </h2>
 
           
            <text-input name="title" placeholder="Enter Title" label="Title :"></text-input>
            <textarea-input name="content" placeholder="Awesome Content Here" label="Content :"> </textarea-input>        
            <form-group label="Publish Post : ">
                <radio-item name="is_published" checked="true" label="Yes" id="is_published_yes" value="1"></radio-item>
                <radio-item name="is_published" id="is_published_no" label="No" value="0"></radio-item>
            </form-group>              
           
            <button class='btn btn-primary'>Edit</button>

            <a href="#" class='btn'>Cancel</a>
 
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