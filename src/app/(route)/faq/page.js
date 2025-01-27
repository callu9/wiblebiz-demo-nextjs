import React from "react";

import AppDownload from "@/app/components/common/AppDownload";
import UseProcess from "@/app/components/common/UseProcess";
import FaqSearchArea from "@/app/components/faq/FaqSearchArea";
import { fetchFaqCategory } from "../../api/faq/category/route";
import "./style.scss";

export async function generateMetadata(props) {
	const { tab } = await props.searchParams;
	const curr = tab?.includes("USAGE") ? "USAGE" : "CONSULT";
	const DATA = {
		CONSULT: {
			title: "서비스 도입 FAQ | 위블 비즈(Wible Biz) - 친환경 모빌리티 서비스",
			description:
				"위블 비즈 서비스 도입 FAQ를 통해 차량 구독 패키지, 솔루션 구독 패키지 및 하이브리드 패키지 도입 방법을 자세하게 알아보세요",
		},
		USAGE: {
			title: "서비스 이용 FAQ | 위블 비즈(Wible Biz) - 친환경 모빌리티 서비스",
			description:
				"위블 비즈 서비스 이용 FAQ를 통해 차량(전기차), 정비, 충전, 고객센터, 관리자, App 등 차량관리 토탈 솔루션의 이용 방법을 자세하게 알아보세요",
		},
	};
	return DATA[curr];
}
async function FaqMain(props) {
	const { tab } = await props.searchParams;
	const toggleList = await fetchFaqCategory(tab);
	return (
		<div className="content page-faq">
			<div className="header flex upper-lower">
				<h1>자주 묻는 질문</h1>
				<em>궁금하신 내용을 빠르게 찾아보세요.</em>
			</div>
			<FaqSearchArea {...{ tab, toggleList }} />
			<UseProcess />
			<AppDownload />
		</div>
	);
}
export default FaqMain;
