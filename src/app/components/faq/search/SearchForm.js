"use client";

import { useEffect, useState } from "react";

export default function SearchForm({ keyword, onSearch }) {
	const [searchText, setSearchText] = useState("");
	useEffect(() => {
		setSearchText(keyword);
	}, [keyword]);
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<div className="search-form flex surface-secondary">
				<div className="input-wrap">
					<input
						type="text"
						placeholder="찾으시는 내용을 입력해 주세요"
						value={searchText || ""}
						onChange={(e) => setSearchText(e.target.value)}
						onKeyUp={(e) => e.key === "Enter" && onSearch(searchText)}
					/>
					<button type="button" className="clear" onClick={() => setSearchText("")}>
						다시입력
					</button>
					<button type="button" className="submit" onClick={() => onSearch(searchText)}>
						검색
					</button>
				</div>
			</div>
		</form>
	);
}
