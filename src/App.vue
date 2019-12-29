<template>
	<div id="app">
		<Header />
		<PostsHeader />
		<Posts />
		<Footer />
	</div>
</template>

<script>
import Header from './components/Header.vue'
import PostsHeader from './components/partials/PostsHeader.vue'
import Posts from './components/Posts.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'app',
	components: {
		Header,
		PostsHeader,
		Posts,
		Footer
	}
}
</script>

<style>

</style>
