"use client";

import { useState } from "react";

export default function SearchForm({ onSearch }) {
	const [searchText, setSearchText] = useState("");
	// {isSearch === true && (
	//   <div className="search-info">
	//     <h2 className="heading-info">
	//       검색결과 총 <em>{totalCount}</em>건
	//     </h2>
	//     <button type="button" className="init" onClick={() => clear()}>
	//       검색초기화
	//     </button>
	//   </div>
	// )}
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<div className="search">
				<div className="input-wrap">
					<input
						type="text"
						placeholder="찾으시는 내용을 입력해 주세요"
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
						onKeyUp={(e) => {
							if (e.key === "Enter") {
								onSearch();
							}
						}}
					/>
					<button
						type="button"
						className="clear"
						data-ui-click="input-clear"
						onClick={() => {
							setSearchText("");
						}}>
						다시입력
					</button>
					<button type="button" className="submit" onClick={onSearch}>
						검색
					</button>
				</div>
			</div>
		</form>
	);
}
