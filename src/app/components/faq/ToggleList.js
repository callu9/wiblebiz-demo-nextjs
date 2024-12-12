export default function ToggleList({ filter, setFilter, toggleList = [] }) {
	return (
		toggleList.length > 0 && (
			<div className="toggle-list">
				<label>
					<input
						type="radio"
						name="filter"
						checked={filter.categoryID === "ALL"}
						onChange={() => setFilter({ ...filter, categoryID: "ALL", offset: 0 })}
					/>
					<i>전체</i>
				</label>
				{toggleList.map((item) => (
					<label key={item.categoryID}>
						<input
							type="radio"
							name="filter"
							checked={filter.categoryID === item.categoryID}
							onChange={() => setFilter({ ...filter, categoryID: item.categoryID, offset: 0 })}
						/>
						<i>{item.name}</i>
					</label>
				))}
			</div>
		)
	);
}
