"use client";

import { useState } from "react";

const InputField = ({ header, isRequired = true, placeholder, value = "", onChange }) => {
	return (
		<div className="input-field">
			<h4 className="heading-4">
				{header} {isRequired && <i className="required">필수</i>}
			</h4>
			<input type="text" {...{ placeholder, value }} onChange={(e) => onChange(e.target.value)} />
		</div>
	);
};
export default function CounselForm() {
	const [inputValue, setValue] = useState({ checked: false, goodsName: "선택안함" });
	const selectList = ["선택안함", "차량 구독 패키지", "솔루션 구독 패키지", "하이브리드 패키지"];
	const requiredValues = [
		{ key: "businessName", header: "회사명", placeholder: "소속된 회사명을 적어주세요" },
		{ key: "departmentName", header: "부서명", placeholder: "소속된 부서명을 적어주세요" },
		{ key: "requesterName", header: "성함", placeholder: "담당자 성함을 적어주세요" },
		{ key: "email", header: "이메일", placeholder: "담당자 이메일 주소를 적어주세요" },
		{ key: "phoneNumber", header: "연락처", placeholder: "담당자 연락처를 적어주세요" },
	];
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<div className="board-write">
				{requiredValues.map(({ key, header, placeholder }) => (
					<InputField
						{...{ header, placeholder }}
						key={key}
						value={inputValue[key]}
						onChange={(text) => {
							let newValue = { ...inputValue };
							newValue[key] = text;
							setValue(newValue);
						}}
					/>
				))}
				<div className="input-field">
					<h4 className="heading-4">문의 서비스 선택</h4>
					<div className="check-group radio-summary">
						{selectList.map((value, i) => (
							<div key={i}>
								<input
									id={value}
									value={value}
									name="package"
									type="radio"
									checked={inputValue.goodsName === value}
									onChange={(e) => setValue({ ...inputValue, goodsName: e.target.value })}
								/>
								<label className="radio" htmlFor={value}>
									<i>
										<em>{value}</em>
									</i>
									{i === 1 ? (
										<p className="summary">
											[안내] <strong>차량 구독 패키지</strong>는 친환경 신규 차량(전기차), 차량관리,
											관리자 web, 사용자 App, 고객센터, 보험 및 사고처리 서비스가 제공됩니다.
										</p>
									) : i === 2 ? (
										<p className="summary">
											[안내] <strong>솔루션 구독 패키지</strong>는 우리 회사가 보유중인 차량을
											이용하면서 관리자 Web, 사용자 App, 고객센터 서비스가 제공됩니다.
										</p>
									) : i === 3 ? (
										<p className="summary">
											[안내] <strong>하이브리드 패키지</strong>는 우리 회사가 보유중인 차량과 친환경
											신규 차량(전기차)를 함께 이용하면서 차량관리, 관리자 Web, 사용자 App,
											고객센터, 보험 및 사고처리 서비스가 제공됩니다.
										</p>
									) : (
										<></>
									)}
								</label>
							</div>
						))}
					</div>
				</div>
				<h4 className="heading-4">
					문의내용 <i className="required">필수</i>
				</h4>
				<textarea
					placeholder="궁금하신 내용과 참고사항을 입력해주세요&#13;&#10;(ex.업종, 사업장 주소, 현재 업무용 차량 운영 대수, 희망 계약차량 대수 등)"
					value={inputValue.question}
					onChange={(e) => setValue({ ...inputValue, question: e.target.value })}></textarea>
				<div className="agreement-box flex sides">
					<label className="checkbox">
						<input
							type="checkbox"
							checked={inputValue.checked || false}
							onChange={(e) => setValue({ ...inputValue, checked: e.target.checked })}
						/>
						<i>
							<em>개인정보 수집 및 이용에 동의합니다.</em>
						</i>
					</label>
					<div className="dropdown-wrapper">
						<button type="button" className="toggle">
							전문보기
						</button>
						{/**
						<div className="full-text">
							<div className="inner">
								<h4 className="heading-info">개인정보 수집 이용 동의</h4>
								<p>
									<strong>수집 이용 목적</strong> 유선 또는 온라인 상담 서비스 이용
								</p>
								<p>
									<strong>수집 항목</strong> 회사명, 부서명, 성함, 이메일주소, 연락처
								</p>
								<p>
									<strong>보유기간</strong> 수집 시부터 이용목적 달성 후 파기
								</p>
								<p>
									※ 개인정보수집 및 이용에 대해 거부할 권리가 있으며, 거부 시에는 상담 서비스 이용이
									불가합니다.
								</p>
							</div>
						</div>
               */}
					</div>
				</div>
			</div>
			<div className="button-group flex submit">
				<button
					// onClick={submitCounsel}
					className="btn-xlg btn-primary"
					disabled={true}>
					등록하기
				</button>
			</div>
		</form>
	);
}
