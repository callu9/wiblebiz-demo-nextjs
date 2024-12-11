import React, { useImperativeHandle, forwardRef, useState, useEffect } from "react";

import { Modal } from "./Modal";
import { apis } from "../../../../utils/api";

// eslint-disable-next-line react/display-name
const PolicyPopup = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		openDialog,
	}));

	const [dialogOpen, setDialogOpen] = useState(false);
	const openDialog = () => setDialogOpen(true);
	const closeDialog = () => setDialogOpen(false);
	const [isLoading, setIsLoading] = useState(false);
	const [termsUse, setTermsUse] = useState([]);

	async function getTermsUse() {
		// setIsLoading(true);
		// const result = await apis.getTermsUse();
		// result.terms.forEach((el) => {
		// 	el.startDate = yyyymmdd(el.startDate);
		// 	el.endDate = yyyymmdd(el.endDate);
		// });
		// setTermsUse(result.terms);
		// setIsLoading(false);
	}
	const [selected, setSelected] = useState(0);

	useEffect(() => {
		getTermsUse();
		return () => {};
	}, []);

	useEffect(() => {
		if (!dialogOpen) {
			setSelected(0);
		}
	}, [dialogOpen]);

	const handleSelect = (e) => {
		setSelected(e.target.value);
	};
	const yyyymmdd = (timestamp) => {
		let time = "";
		if (timestamp === 0) {
			time = "현재";
		} else {
			const d = new Date(timestamp);
			const yyyy = d.getFullYear();
			const mm = ("0" + (d.getMonth() + 1)).slice(-2);
			const dd = ("0" + d.getDate()).slice(-2);

			time = yyyy + "." + mm + "." + dd;
		}
		return time;
	};
	return (
		<Modal open={dialogOpen} onRequestClose={closeDialog}>
			<div className="dialog-wrapper dialog-policy" id="ms_policy1">
				<div className="dialog-header">
					<h4>이용약관</h4>
					<button type="button" className="close" onClick={closeDialog}>
						닫기
					</button>
				</div>
				<div className="dialog-body">
					<div className="policy-top">
						<select onChange={handleSelect} value={selected}>
							{termsUse.map((el, idx) => (
								<React.Fragment key={el.termsVersion}>
									<option value={idx}>
										{el.startDate} ~ {el.endDate}
									</option>
								</React.Fragment>
							))}
						</select>
					</div>
					{isLoading === true ? (
						<div className="loading-indicator">
							<i></i> 불러오는 중입니다.
						</div>
					) : (
						<React.Fragment>
							{<div dangerouslySetInnerHTML={{ __html: termsUse[selected]?.contents }} />}
						</React.Fragment>
					)}
				</div>
			</div>
		</Modal>
	);
});

export default PolicyPopup;
