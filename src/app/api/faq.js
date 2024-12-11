const URL = "http://localhost:3030";

export async function fetchFaqCategory(tab = "CONSULT") {
	const PATH = "/category";
	const res = await fetch(`${URL}${PATH}?tab=${tab}`);
	const faqList = await res.json();
	return faqList;
}

export async function fetchFaqList(tab = "CONSULT", categoryID = "ALL", page = 0) {
	const PATH = "/faq";
	const filtered = `tab=${tab}${categoryID === "ALL" ? "" : `&categoryID=${categoryID}`}`;
	const paging = `_page=${page}&_per_page=10`;
	const res = await fetch(`${URL}${PATH}?${[filtered, paging].join("&")}`);
	const faqList = await res.json();
	return faqList;
}
