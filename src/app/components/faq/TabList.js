import Link from "next/link";

const TAB_LIST = [
	{ text: "서비스 도입", tab: "CONSULT" },
	{ text: "서비스 이용", tab: "USAGE" },
];
export default function TabList({ currentTab = "CONSULT", onClick }) {
	return (
		<ul className="tabs grid">
			{TAB_LIST.map((tab) => (
				<li
					key={tab.tab}
					className={`flex ${tab.tab === currentTab ? "active" : ""}`}
					onClick={() => onClick(tab.tab)}>
					<Link className="tab-query" href={`/faq?tab=${tab.tab}`}>
						{tab.text}
					</Link>
				</li>
			))}
		</ul>
	);
}
