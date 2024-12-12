const TAB_LIST = [
	{ text: "서비스 도입", tab: "CONSULT" },
	{ text: "서비스 이용", tab: "USAGE" },
];
export default function TabList({ currentTab = "CONSULT", onClick }) {
	return (
		<ul className="tab-list flex">
			{TAB_LIST.map((tab) => (
				<li
					key={tab.tab}
					className={`flex ${tab.tab === currentTab ? "active" : ""}`}
					onClick={() => onClick(tab.tab)}>
					{tab.text}
				</li>
			))}
		</ul>
	);
}
