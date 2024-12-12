import "./common.scss";
export default function UseProcess() {
	return (
		<div className="use-process">
			<h2 className="heading-2">서비스 문의</h2>
			<div className="inquiry-info">
				<a
					className="btn-xxlg btn-tertiary"
					href="http://localhost:3000/assets/pdf/proposal.pdf"
					target="_blank"
					download="위블비즈 상품제안서">
					<i className="ic download" />
					<span>상품제안서 다운로드</span>
				</a>
				<a href="/counsel" className="btn-xxlg btn-tertiary">
					<i className="ic write" />
					<span>상담문의 등록하기</span>
				</a>
				<a
					className="btn-xxlg btn-tertiary"
					href="https://pf.kakao.com/_xfLxjdb"
					target="_blank"
					rel="noreferrer">
					<i className="ic talk" />
					<span>
						카톡으로 문의하기 <em>ID: Wible Biz(위블 비즈)</em>
					</span>
				</a>
			</div>
			<h2 className="heading-2">이용 프로세스 안내</h2>
			<ol className="process-info">
				<li>
					<i className="ic process-1" />
					<span>
						<strong>문의 등록</strong>
						<em>상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.</em>
					</span>
				</li>
				<li>
					<i className="ic process-2" />
					<span>
						<strong>관리자 설정</strong>
						<em>관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.</em>
					</span>
				</li>
				<li>
					<i className="ic process-3" />
					<span>
						<strong>임직원 가입</strong>
						<em>사용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.</em>
					</span>
				</li>
				<li>
					<i className="ic process-4" />
					<span>
						<strong>서비스 이용</strong>
						<em>사용자 App에서 차량 예약을 하고 위블존에서 바로 이용하세요!</em>
					</span>
				</li>
			</ol>
		</div>
	);
}
