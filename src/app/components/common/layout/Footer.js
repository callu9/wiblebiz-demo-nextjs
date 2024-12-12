"use client";

import "./footer.scss";

export default function Footer() {
	function scrollTop(e) {
		window.scrollTo({ top: 0, behavior: "smooth" });
		e.preventDefault();
	}

	return (
		<>
			<div className="quick-util">
				<div className="inner">
					<button type="button" className="top" onClick={scrollTop}>
						상단으로
					</button>
				</div>
			</div>
			<footer>
				<div className="inner">
					<div className="information">
						<div className="util flex left">
							<button type="button">
								<strong>개인정보 처리방침</strong>
							</button>
							<button type="button">이용약관</button>
						</div>
						<address>
							<span>
								서울특별시 서초구 헌릉로 12 <em>기아㈜</em>
							</span>
							<br />
							<span>
								대표: <i>송호성, 최준영</i>
							</span>
							<br />
							<span>
								사업자등록번호: <i>119-81-02316</i>
							</span>
							<br />
							<span>
								통신판매번호: <i>2006-07935</i>
							</span>
							<br />
							<span>
								고객센터: <i>1833-4964</i>
							</span>
							<br />
							<span>
								제휴문의: <a href="mailto:wible.biz@kia.com">wible.biz@kia.com</a>
							</span>
						</address>
					</div>
					<p className="copyright">© 2023 KIA CORP. All Rights Reserved.</p>
				</div>
			</footer>
		</>
	);
}
