import "./common.scss";

export default function AppDownload() {
	return (
		<div className="app-info grid gap-32 surface-secondary ">
			<h2>
				<em className="text-active">위블 비즈 App</em> 지금 만나보세요!
			</h2>
			<div className="flex gap-32">
				<a
					href="https://play.google.com/store/apps/details?id=kor.mop.user.app"
					target="_blank"
					className="gp"
					rel="noreferrer">
					Google Play
				</a>
				<a
					href="https://apps.apple.com/kr/app/%EC%9C%84%EB%B8%94-%EB%B9%84%EC%A6%88/id1598065794"
					target="_blank"
					className="as"
					rel="noreferrer">
					App Store
				</a>
			</div>
		</div>
	);
}
