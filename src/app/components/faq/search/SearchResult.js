"use client";

import { useState } from "react";

export default function SearchResult({
	tab,
	isLoading = false,
	data: faqList,
	next = 0,
	onClickMore,
}) {
	const [focused, setFocused] = useState();
	const FaqListItem = ({ item }) => {
		return (
			<li
				className={focused === item.id ? "active show" : ""}
				onClick={() => {
					// if (!isOpened) apis.faqViewCout(item.id);
					setFocused(focused === item.id ? undefined : item.id);
				}}>
				<h4 className="a">
					<button type="button" data-ui-click="dropdown-toggle">
						{tab === "USAGE" && <em>{item.categoryName}</em>}
						<em>{item.subCategoryName}</em>
						<strong>{item.question}</strong>
					</button>
				</h4>
				<div className="q">
					<div className="inner" dangerouslySetInnerHTML={{ __html: item.answer }} />
				</div>
			</li>
		);
	};
	return (
		<>
			{isLoading ? (
				<div className="loading-indicator">
					<i></i> 불러오는 중입니다.
				</div>
			) : faqList?.length > 0 ? (
				<ul className="faq-list">
					{faqList.map((item) => (
						<FaqListItem item={item} key={item.id} />
					))}
				</ul>
			) : (
				<div className="no-data">
					<p>검색결과가 없습니다.</p>
				</div>
			)}
			{next > 0 && (
				<button type="button" className="list-more flex" onClick={onClickMore}>
					<i></i>더보기
				</button>
			)}
		</>
	);
}
