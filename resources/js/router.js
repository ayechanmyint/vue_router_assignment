import Login from './components/LoginForm.vue';
import PostList from './components/PostList.vue';
import PostCreate from './components/PostCreate.vue';
import PostDetail from './components/PostDetail.vue';
import PostEdit from './components/PostEdit.vue';

export default [
    {
        path: '/vue/login',
        name: 'login',
        component: Login
    },
    {
        path: '/vue/posts',
        name: 'posts',
        component: PostList,
    },
    {
        path: '/vue/posts/create',
        name: 'postscreate',
        component: PostCreate,
    },
    {
        path: '/vue/post/detail/:post_id',
        name: 'postsdetail',
        component: PostDetail,
        props:true,
    },
    {
        path: '/vue/post/edit/:post_id',
        name: 'postsedit',
        component: PostEdit,
        props:true,
    }

]