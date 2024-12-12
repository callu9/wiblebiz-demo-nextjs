import { category } from "@/mocks/db";

export async function GET(request) {
	const tab = new URL(request.url).searchParams.get("tab");
	const filtered = category.filter((el) => el.tab === tab);
	return new Response(JSON.stringify(filtered), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}

export async function fetchFaqCategory(tab = "CONSULT") {
	const res = await fetch(`http://localhost:3000/api/faq/category?tab=${tab}`);
	const faqList = await res.json();
	return faqList;
}
