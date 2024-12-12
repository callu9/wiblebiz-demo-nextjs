import Footer from "./components/common/layout/Footer";
import Header from "./components/common/layout/Header";
import Favicon from "./favicon.ico";
import "./style/global.scss";

export const metadata = {
	title: "위블 비즈(Wible Biz)",
	description:
		"위블 비즈는 기업을 위한 친환경 모빌리티 서비스로 차량부터 전용 App/Web까지 업무차량 토탈 솔루션을 제공합니다.",
	icons: { icon: Favicon.src },
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				<div className="container">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
