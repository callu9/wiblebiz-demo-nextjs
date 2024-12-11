"use client";

import { fetchFaqCategory, fetchFaqList } from "@/app/api/faq";
import { useEffect, useState } from "react";
import SearchForm from "./search/SearchForm";
import SearchResult from "./search/SearchResult";
import TabList from "./TabList";
import ToggleList from "./ToggleList";

export default function FaqSearchArea() {
	const [tab, setTab] = useState("CONSULT");
	const [toggleList, setToggleList] = useState([]);
	const [filter, setFilter] = useState({ categoryID: "ALL", page: 1 });

	const [searchResult, setSearchResult] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [isSearch, setIsSearch] = useState(false);

	useEffect(() => {
		async function getToggleList() {
			const res = await fetchFaqCategory(tab);
			setToggleList(res);
		}
		getToggleList();
	}, [tab]);

	function onClickTab(tab) {
		setTab(tab);
		setFilter({ categoryID: "ALL", page: 1 });
	}

	function onSearch() {}

	useEffect(() => {
		async function getFaqList() {
			setIsLoading(true);
			const res = await fetchFaqList(tab, filter.categoryID, filter.page).finally(() =>
				setIsLoading(false)
			);
			if (filter.page > 1) setSearchResult({ ...res, data: [...searchResult.data, ...res.data] });
			else setSearchResult(res);
		}
		getFaqList();
	}, [tab, filter]);

	function onClickMore() {
		setFilter({ ...filter, page: filter.page + 1 });
	}

	return (
		<div className="faq-search-area">
			<TabList currentTab={tab} onClick={onClickTab} />
			<SearchForm {...{ filter, setFilter, onSearch, setIsSearch }} />
			{isSearch && (
				<div className="search-info">
					<h2 className="heading-info">
						검색결과 총 <em className="text-active">{searchResult.items}</em>건
					</h2>
					<button type="button" className="init" onClick={() => setIsSearch(false)}>
						검색초기화
					</button>
				</div>
			)}
			<ToggleList {...{ ...filter, setFilter, toggleList }} />
			<SearchResult {...{ tab, isLoading, ...searchResult, onClickMore }} />
		</div>
	);
}
