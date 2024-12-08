import localFont from "next/font/local";
import "./style/global.scss";
import Header from "./components/common/layout/Header";

// const kiaRegular = localFont({
// 	src: "./fonts/KiaSignatureFixRegular.woff2",
// 	variable: "--font-regular",
// 	weight: "400",
// });
// const kiaBold = localFont({
// 	src: "./fonts/KiaSignatureFixBold.woff2",
// 	variable: "--font-bold",
// 	weight: "600",
// });

export const metadata = {
	title: "위블 비즈(Wible Biz)",
	description:
		"위블 비즈는 기업을 위한 친환경 모빌리티 서비스로 차량부터 전용 App/Web까지 업무차량 토탈 솔루션을 제공합니다.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
			//className={`${kiaRegular.variable} ${kiaBold.variable}`}
			>
				<div className="container">
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
