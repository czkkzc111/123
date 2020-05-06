<template>
	<div id="surveyCreatorContainer"></div>
</template>

<script>
import * as SurveyCreator from 'survey-creator';
import 'survey-creator/survey-creator.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import * as widgets from "surveyjs-widgets";

export default {
	name: 'survey-creator',
	props: {
		surveydata: Object
	},
	data() {
		return {};
	},
	mounted() {
		let options = { showEmbededSurveyTab: true, showJSONEditorTab: true ,showOptions: true,showTestSurveyTab: true,};
		// SurveyCreator.defaultStrings.ed.defaultLocale = "zh-cn";
		SurveyCreator.localization.currentLocale = 'zh-cn';
		this.surveyCreator = new SurveyCreator.SurveyCreator('surveyCreatorContainer', options);
		let that = this;
		this.surveyCreator.hideAdvancedSettings = true;
		this.surveyCreator.JSON = this.surveydata;
		this.surveyCreator.saveSurveyFunc = function() {
			window.console.log(this.JSON);
			that.$emit('saveSurvey', this.JSON);
		};
		
	}
};
</script>
<style>
	.svd_container .svd_commercial_container{
		display: none;
	}
</style>