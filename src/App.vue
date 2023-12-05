<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { getPost } from '@/apis/getPost.js'
import { onMounted, ref } from "vue"

const post = ref({})

onMounted(async () => {
	try {
		const response = await getPost('/api/get_post', { id: 1 })
		post.value = response.data.data
		console.log(post.value)
	} catch (error) {
		console.log(error)
	}
})

</script>

<template>
	<div class="ffont">
		<h1>{{ post.title }}</h1>
		<p>{{ post.text }}</p>
	</div>
</template>

<style scoped>
.ffont {
	font-family: '仿宋_GB2312', 'Times New Roman', "微软雅黑";
}

h1 {
	color: #333;
}

p {
	color: #666;
	line-height: 1.6;
	font-size: 21px;
}
</style>
