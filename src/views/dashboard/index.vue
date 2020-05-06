<!-- <template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      name:{{ name }}
    </div>
    <div class="dashboard-text">
      roles:<span
        v-for="role in roles"
        :key="role"
      >{{ role }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'

@Component({
  name: 'Dashboard'
})
export default class extends Vue {
  get name() {
    return UserModule.name
  }

  get roles() {
    return UserModule.roles
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
 -->
<template>
	<div class="about">
		<!-- <h1>This is an about page</h1> -->
		<!-- If you want to show survey, uncomment the line below -->
		<!-- <survey :survey="survey"></survey> -->
		<!-- If you want to hide Survey Creator, comment the line below -->
		<el-tabs>
			<el-tab-pane label="编辑问卷" name="first"><SurveyCreator v-on:saveSurvey="save"></SurveyCreator></el-tab-pane>
			<el-tab-pane label="填写问卷" name="secend">
				<Survey :survey="surveyModel"></Survey>
				<div id="surveyResult"></div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
import SurveyCreator from '../../components/SurveyCreator';
import * as SurveyVue from 'survey-vue';
import { Survey } from 'survey-vue';
// import 'survey-vue/survey.css';
// import 'survey-vue/modern.min.css';
// import 'bootstrap/dist/css/bootstrap.css';

export default {
	name: 'about',
	components: {
		SurveyCreator,
		Survey
	},
	data() {
		var model = new SurveyVue.Model({});
		model.locale = 'zh-cn';
		model.setDesignMode(false);
		model.onComplete.add(function(result) {
			document.querySelector('#surveyResult').textContent = 'Result JSON:\n' + JSON.stringify(result.data, null, 3);
		});
		return {
			surveyModel: model
		};
	},
	// mounted() {
	// 	Survey.StylesManager.applyTheme('modern');
	// },
	methods: {
		save(stxt) {
			window.console.log(stxt);
			this.surveyModel.setJsonObject(stxt);
			this.surveyModel.render();
			this.surveyModel.currentPageNo = 0;
			this.surveyModel.data = {};
			// alert(stxt);
		}
	}
};
</script>

<style>
/* div#scrollableDiv {
	height: 800px;
} */

</style>
