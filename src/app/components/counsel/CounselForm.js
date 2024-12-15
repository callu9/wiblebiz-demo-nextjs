"use client";

import { useEffect, useRef, useState } from "react";
import Modal from "../common/Modal";
import { useRouter } from "next/navigation";

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
	const router = useRouter();
	const dropdownRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	const [errorMsg, setErrorMsg] = useState();
	useEffect(() => {
		const handleClick = (e) => {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsOpen(false);
		};
		window.addEventListener("mousedown", handleClick);
		return () => window.removeEventListener("mousedown", handleClick);
	}, [dropdownRef, setIsOpen]);

	const [inputValue, setValue] = useState({ checked: false, goodsName: "선택안함" });
	const selectList = ["선택안함", "차량 구독 패키지", "솔루션 구독 패키지", "하이브리드 패키지"];
	const summary = [
		"",
		"친환경 신규 차량(전기차), 차량관리, 관리자 web, 사용자 App, 고객센터, 보험 및 사고처리 서비스가 제공됩니다.",
		"우리 회사가 보유중인 차량을 이용하면서 관리자 Web, 사용자 App, 고객센터 서비스가 제공됩니다.",
		"우리 회사가 보유중인 차량과 친환경 신규 차량(전기차)를 함께 이용하면서 차량관리, 관리자 Web, 사용자 App, 고객센터, 보험 및 사고처리 서비스가 제공됩니다.",
	];
	const requiredValues = [
		{ key: "businessName", header: "회사명", placeholder: "소속된 회사명을 적어주세요" },
		{ key: "departmentName", header: "부서명", placeholder: "소속된 부서명을 적어주세요" },
		{ key: "requesterName", header: "성함", placeholder: "담당자 성함을 적어주세요" },
		{ key: "email", header: "이메일", placeholder: "담당자 이메일 주소를 적어주세요" },
		{ key: "phoneNumber", header: "연락처", placeholder: "담당자 연락처를 적어주세요" },
	];
	const submitSucceed = "상담 문의 등록이 완료되었습니다.";
	function submitCounsel() {
		const emailRegExp = /[\w\-.]+@[\w\-.]+/g;
		const emailCheck = emailRegExp.test(inputValue.email);
		let message = "";
		if (!emailCheck) {
			message = "이메일 정보는 @를 포함해서 이메일 형식에 맞게 입력해주세요";
		} else if (inputValue.email?.length > 50 || inputValue.email?.length < 5) {
			message = "이메일 항목은 5자 이상 ~ 50자 이하로 입력해주세요";
		} else if (inputValue.phoneNumber?.length > 12 || inputValue.phoneNumber?.length < 9) {
			message = "연락처 정보는 숫자만 9자리 이상 ~ 12자리 이하로 입력해 주세요";
		} else if (inputValue.question?.length > 900 || inputValue.question?.length < 1) {
			message = "문의내용 항목은 1자 이상 ~ 900자 이하로 입력해주세요";
		} else if (inputValue.businessName?.length > 50 || inputValue.businessName?.length < 1) {
			message = "회사명 항목은 1자 이상 ~ 50자 이하로 입력해주세요";
		} else if (inputValue.departmentName?.length > 50 || inputValue.departmentName?.length < 1) {
			message = "부서명 항목은 1자 이상 ~ 50자 이하로 입력해주세요";
		} else if (inputValue.requesterName?.length > 50 || inputValue.requesterName?.length < 1) {
			message = "성함 항목은 1자 이상 ~ 50자 이하로 입력해주세요";
		}
		if (message.length > 0) {
			setErrorMsg(message);
			return;
		}
		setErrorMsg(submitSucceed);
	}
	return (
		<>
			<form className="grid gap-32" onSubmit={(e) => e.preventDefault()}>
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
								<div className="check-item" key={i}>
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
									</label>
									{i > 0 && inputValue.goodsName === value && (
										<p className="summary">
											[안내] <strong>{value}</strong>는 {summary[i]}
										</p>
									)}
								</div>
							))}
						</div>
					</div>
					<div className="input-field">
						<h4 className="heading-4">
							문의내용 <i className="required">필수</i>
						</h4>
						<textarea
							placeholder="궁금하신 내용과 참고사항을 입력해주세요&#13;&#10;(ex.업종, 사업장 주소, 현재 업무용 차량 운영 대수, 희망 계약차량 대수 등)"
							value={inputValue.question}
							onChange={(e) => setValue({ ...inputValue, question: e.target.value })}
						/>
					</div>
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
						<div className="dropdown-wrapper" ref={dropdownRef}>
							<button type="button" className="toggle" onClick={() => setIsOpen(!isOpen)}>
								전문보기
							</button>
							{isOpen && (
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
											※ 개인정보수집 및 이용에 대해 거부할 권리가 있으며, 거부 시에는 상담 서비스
											이용이 불가합니다.
										</p>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="button-group flex submit">
					<button
						onClick={submitCounsel}
						className="btn-xlg btn-primary"
						disabled={
							!(
								requiredValues.filter((required) => inputValue[required.key]?.length > 0).length ===
									requiredValues.length &&
								inputValue.question?.length > 0 &&
								inputValue.checked
							)
						}>
						등록하기
					</button>
				</div>
			</form>
			{errorMsg && (
				<Modal
					text={errorMsg}
					onClose={() => (errorMsg === submitSucceed ? router.push("/faq") : setErrorMsg())}
				/>
			)}
		</>
	);
}
