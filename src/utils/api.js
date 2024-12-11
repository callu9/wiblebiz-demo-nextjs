import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3030",
	headers: {
		"Content-type": "application/json; charset=UTF-8",
		accept: "application/json,",
		"Access-Control-Allow-Origin": "*",
		"X-MOP-API-KEY": "e3a67ffdc7d29234410e166e98beb2c4",
	},
});

export const apis = {
	async getSplashList() {
		const result = await api({
			method: "GET",
			url: `/splash?splashType=POP_HOMEPAGE`,
		}).catch((e) => {
			document.querySelector("#error")?.smoothShowModal();
			return e;
		});

		// if (result?.data?.errorCode) {
		// 	document.querySelector("#error")?.smoothShowModal();
		// 	return;
		// }

		return result.data;
	},

	async getFaqList(params) {
		let url = `/faq?limit=10&offset=${params.offset}&tab=${params.parentCategory}`;
		if (params.selectedCategory !== "ALL") url += `&faqCategoryID=${params.selectedCategory}`;
		if (params.searchText !== "") url += `&question=${params.searchText}`;

		const result = await api({
			method: "GET",
			url,
		}).catch((e) => {
			document.querySelector("#error")?.smoothShowModal();
			return e;
		});

		// if (result.data.errorCode) {
		// 	document.querySelector("#error")?.smoothShowModal();
		// 	return;
		// }

		return result.data;
	},
	async getFaqCategoryList(tab) {
		const result = await api({
			method: "GET",
			// url: `/faq/category?tab=${tab}`,
			url: `/category?tab=${tab}`,
		}).catch((e) => {
			document.querySelector("#error")?.smoothShowModal();
			return e;
		});

		// if (result.data.errorCode) {
		// 	document.querySelector("#error")?.smoothShowModal();
		// 	return;
		// }

		return result.data;
	},
	async getNewsList(params) {
		const limit = params.type === "news" ? 9 : 10;
		const result = await api({
			method: "GET",
			url: `/notice?limit=${limit}&clientType=HOMEPAGE&offset=${params.offset}&noticeTypeCd=${params.type}`,
		}).catch((e) => {
			document.querySelector("#error")?.smoothShowModal();
			return e;
		});

		// if (result.data.errorCode) {
		// 	document.querySelector("#error")?.smoothShowModal();
		// 	return;
		// }

		return result.data;
	},
	async getNewsDetail(params) {
		const result = await api({
			method: "GET",
			url: `/notice/${params.id}?clientType=HOMEPAGE`,
		}).catch((e) => {
			document.querySelector("#error")?.smoothShowModal();
			return e;
		});

		// if (result.data.errorCode) {
		// 	document.querySelector("#error")?.smoothShowModal();
		// 	return;
		// }

		return result.data;
	},

	async getTermsUse() {
		const result = await api({
			method: "GET",
			url: `/terms?termsClassID=JOIN_SERVICE_USE`,
		}).catch((e) => {
			document.querySelector("#error")?.smoothShowModal();
			return e;
		});

		// if (result.data.errorCode) {
		// 	document.querySelector("#error")?.smoothShowModal();
		// 	return;
		// }

		return result.data;
	},

	async getAdminPrivacy() {
		const result = await api({
			method: "GET",
			url: `/terms?termsClassID=STARTADMIN_ADMIN_PRIVACY`,
		}).catch((e) => {
			document.querySelector("#error")?.smoothShowModal();
			return e;
		});

		// if (result.data.errorCode) {
		// 	document.querySelector("#error")?.smoothShowModal();
		// 	return;
		// }

		return result.data;
	},
	postCustomerService: (offset) => api.post("/customerService", offset),
};
