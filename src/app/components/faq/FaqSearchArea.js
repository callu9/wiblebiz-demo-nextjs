"use client";

import { fetchFaqList } from "@/app/api/faq/route";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SearchForm from "./search/SearchForm";
import SearchResult from "./search/SearchResult";
import TabList from "./TabList";
import ToggleList from "./ToggleList";

export default function FaqSearchArea({ tab = "CONSULT", toggleList }) {
	const [filter, setFilter] = useState({ tab, categoryID: "ALL", offset: 0 });
	const [searchResult, setSearchResult] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const router = useRouter();

	function onClickTab(tab) {
		setFilter({ tab, categoryID: "ALL", offset: 0 });
		router.push(`/faq?tab=${tab}`);
	}

	function onSearch(keyword) {
		if (keyword?.length >= 2) setFilter({ ...filter, keyword });
		else setIsError(true);
	}

	useEffect(() => {
		async function getFaqList() {
			setIsLoading(true);
			const res = await fetchFaqList({ tab, ...filter }).finally(() => setIsLoading(false));
			if (filter.offset > 0) setSearchResult({ ...res, data: [...searchResult.data, ...res.data] });
			else setSearchResult(res);
		}
		getFaqList();
	}, [tab, filter]);

	function onClickMore() {
		setFilter({ ...filter, offset: filter.offset + 1 });
	}

	return (
		<>
			<div className="faq-search-area">
				<TabList currentTab={tab} onClick={onClickTab} />
				<SearchForm keyword={filter.keyword} onSearch={onSearch} />
				{!isLoading && filter.keyword?.length > 0 && (
					<div className="search-info">
						<h2 className="heading-info">
							검색결과 총 <em className="text-active">{searchResult.total}</em>건
						</h2>
						<button
							type="button"
							className="init"
							onClick={() => setFilter({ ...filter, offset: 0, keyword: "" })}>
							검색초기화
						</button>
					</div>
				)}
				<ToggleList {...{ filter, setFilter, toggleList }} />
				<SearchResult {...{ tab, filter, isLoading, ...searchResult, onClickMore }} />
			</div>
			{isError && (
				<div className="dialog-wrapper dialog-error grid" id="error_faq">
					<div className="dialog-body surface-primary grid gap-24">
						<p>검색어는 2글자 이상 입력해주세요.</p>
						<div className="button-group grid">
							<button
								type="button"
								className="btn-xxlg btn-tertiary"
								onClick={() => setIsError(false)}>
								확인
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
