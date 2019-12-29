<template>
	<div id="app">
		<Header />
		<PostsHeader />
		<router-view class="view"></router-view>
		<Footer />
	</div>
</template>

<script>
import Header from './components/Header.vue'
import PostsHeader from './components/partials/PostsHeader.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'app',
	components: {
		Header,
		PostsHeader,
		Footer
	}
}
</script>

<style>

</style>
