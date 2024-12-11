export default function ToggleList({ categoryID = "ALL", setFilter, toggleList = [] }) {
	return (
		toggleList.length > 0 && (
			<div className="filter">
				<label>
					<input
						type="radio"
						name="filter"
						checked={categoryID === "ALL"}
						onChange={() => setFilter({ categoryID: "ALL", page: 1 })}
					/>
					<i>전체</i>
				</label>
				{toggleList.map((item) => (
					<label key={item.categoryID}>
						<input
							type="radio"
							name="filter"
							checked={categoryID === item.categoryID}
							onChange={() => setFilter({ categoryID: item.categoryID, page: 1 })}
						/>
						<i>{item.name}</i>
					</label>
				))}
			</div>
		)
	);
}
