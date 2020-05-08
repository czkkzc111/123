<template>
	<div>
	<div style="display: flex;flex-direction: row;margin-top: 50px;">
		<el-autocomplete>
			<el-button slot="append" icon="el-icon-search"></el-button>
		</el-autocomplete>
		<el-button  style="margin-left: 500px;">添加等级</el-button>
	</div>
	<TiaoMu :data_wenjaun="surveyData" :show="3" ></TiaoMu>
	</div>
</template>

<script>
  import TiaoMu from '../../components/wenjuantiaomu.vue'
  export default{
    components: {
    	TiaoMu
    },
    data(){
    		return{
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
    		]
    	};
    },
  }
</script>
