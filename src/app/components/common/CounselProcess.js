import "./common.scss";
export default function CounselProcess() {
	return (
		<div className="use-process">
			<h2 className="heading-2">상담 진행 안내</h2>
			<ol className="process-info">
				<li>
					<i className="ic process-1"></i>
					<span>
						<strong>문의 등록</strong>
						<em>문의가 등록되면 바로 접수됩니다.</em>
					</span>
				</li>
				<li>
					<i className="ic process-5"></i>
					<span>
						<strong>담당자 확인</strong>
						<em>담당자가 내용을 확인하고 맞춤상담을 준비합니다.</em>
					</span>
				</li>
				<li>
					<i className="ic process-6"></i>
					<span>
						<strong>맞춤상담 진행</strong>
						<em>담당자가 직접 고객님께 연락을 드립니다.</em>
					</span>
				</li>
				<li>
					<i className="ic process-7"></i>
					<span>
						<strong>서비스 가입</strong>
						<em>이제 위블 비즈 서비스를 이용하실 수 있어요!</em>
					</span>
				</li>
			</ol>
		</div>
	);
}
