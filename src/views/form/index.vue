<template>
  <div>
    <div>
    	<el-tabs v-model="activeName" type="border-card">
    		<el-tab-pane label="未开始问卷" name="first"><TiaoMu  :data_wenjaun="surveyData" :data_wenjuan_mini="surveyData2" :show="0" ></TiaoMu></el-tab-pane>
    		<el-tab-pane label="进行中问卷" name="second"><TiaoMu :data_wenjaun="surveyData" :show="1"></TiaoMu></el-tab-pane>
    		<el-tab-pane label="已结束问卷" name="third"><TiaoMu :data_wenjaun="surveyData" :show="2"></TiaoMu></el-tab-pane>
    	</el-tabs>
    </div>
  </div>
</template>

<script>
import TiaoMu from '../../components/wenjuantiaomu.vue'
export default {
  components: {
  	TiaoMu
  },
data() {
		return {
			activeName: 'first',
			surveyData: [
				{
					name: '税务1',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				},
				{
					name: '税务2',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				},
				{
					name: '税务3',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				},
				{
					name: '税务4',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				},
				{
					name: '税务5',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				},
				{
					name: '税务6',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				},
				{
					name: '税务7',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				},
				{
					name: '税务8',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				},
				{
					name: '税务9',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				},
				{
					name: '税务10',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				},
				{
					name: '税务11',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				},
				{
					name: '税务12',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				}
			],
			surveyData2: [
				{
					name: '税务1',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				},
				{
					name: '税务2',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				},
				{
					name: '税务3',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				},
				{
					name: '税务4',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				},
				{
					name: '税务5',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				},
				{
					name: '税务6',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				},
				{
					name: '税务7',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				},
				{
					name: '税务8',
					time_start: 'xxxxx',
					time_over: 'sssss',
					note: 'null'
				}
			]
		};
	},
}
</script>
