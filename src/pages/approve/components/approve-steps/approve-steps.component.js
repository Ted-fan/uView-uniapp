import Vue from 'vue';

export default Vue.extend({
	name: "ApproveSteps",
	props: {
		steps: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {};
	},
	onReady() {
	},
	onLoad() {
	},
	methods: {}
});
