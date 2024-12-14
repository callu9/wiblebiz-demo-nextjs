import CounselProcess from "@/app/components/common/CounselProcess";
import CounselForm from "@/app/components/counsel/CounselForm";
import "./style.scss";

export const metadata = {
	title: "상담문의 | 위블 비즈(Wible Biz) - 친환경 모빌리티 서비스",
	description:
		"법인 차량 신규 도입 및 관리에 대한 최고의 모빌리티 솔루션, 위블 비즈에 궁금한 점을 물어보세요",
};
export default function CounselMain() {
	return (
		<div className="content counsel-form reduced grid gap-24">
			<div className="header flex upper-lower">
				<h1>상담문의</h1>
				<em>위블 비즈가 최고의 모빌리티 솔루션을 제안해드립니다.</em>
			</div>
			<CounselForm />
			<CounselProcess />
		</div>
	);
}
