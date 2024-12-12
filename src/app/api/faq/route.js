import { faq } from "@/mocks/db";

export async function GET(request) {
	let params = Object.fromEntries(new URL(request.url).searchParams);
	const filtered = searchFaq(params);
	return new Response(JSON.stringify(filtered), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
/**
 * @typedef {object} FaqQuery
 * @property {'CONSULT' | 'USAGE'} tab
 * @property {string | 'ALL'} categoryID
 * @property {number | string} offset
 * @property {string | undefined} keyword
 */
/**
 *
 * @param {FaqQuery} query
 * @returns {{total: number, next: number, data: []}}
 */
function searchFaq({ tab = "CONSULT", categoryID = "ALL", offset = "0", keyword = "" }) {
	const LIMIT = 10,
		page = Number(offset);
	const filtered = faq.filter(
		(item) =>
			item.tab === tab &&
			(categoryID === "ALL" || item.categoryID === categoryID) &&
			(item.question.includes(keyword || "") || item.answer.includes(keyword || ""))
	);
	const total = filtered.length,
		next = filtered.length > (page + 1) * LIMIT,
		data = filtered.slice(page * LIMIT, (page + 1) * LIMIT);
	return { total, next, data };
}
/**
 *
 * @param {FaqQuery} props
 * @returns {{total: number, next: number, data: []}}
 */
export async function fetchFaqList(query) {
	await new Promise((resolve) => setTimeout(resolve, 500));
	const params = new URLSearchParams();
	for (const key in query) {
		params.set(key, query[key]);
	}
	const res = await fetch(`http://localhost:3000/api/faq?${params.toString()}`);
	const faqList = await res.json();
	return faqList;
}
