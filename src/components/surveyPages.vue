<template>
	<div class="page_block">
		<p class="font1">{{ font1 }}</p>
		<p class="font2">{{ font2 }}</p>
		<p class="font3">状态:	<span :class="statusChange">{{ page_data.status.name }}</span></p>
		<p class="font4">日期:{{ page_data.date }}</p>
		<p class="font5">xxxx-xxxx-xxxx</p>
	</div>
</template>

<script>
export default {
	name: 'survey_pages',
	props: {
		page_data: Array,
		status_css: Number
	},
	data() {
		return {
			font1: '税务调查',
			font2: '关于个人征信'
		};
	},
	computed: {
		statusChange() {
			return {
				span: this.page_data.status.number == 0,
				span1: this.page_data.status.number == 1,
				span2: this.page_data.status.number == 2
			};
		}
	}
};
</script>

<style>
.page_block {
	cursor: pointer;
	width: 200px;
	height: 200px;
	background-color: #ffffff;
}
.span {
	background-color: #05c985;
}
.span1 {
	background-color: #f5a623;
}
.span2 {
	background-color: #ee423d;
}
.font1 {
	margin-top: 10px;
	margin-left: 10px;
}
.font2 {
	font-size: 5px;
	margin-left: 10px;
	
}
.font3{
	margin-left: 10px;
}
.font4{
	margin-left: 10px;
}
.font5{
	margin-left: 10px;
}
</style>
