import React from "react";

export function Modal({ title, content, onClose, open, ...props }) {
	return (
		<dialog className="dialog-wrapper dialog-error" id="error_faq">
			<div className="dialog-body grid gap-16" style={{ marginTop: "35px" }}>
				{title?.length > 0 && <h3>{title}</h3>}
				<div>
					{content?.split("\n").map((line, idx) => (
						<p key={idx} className="message">
							{line}
						</p>
					))}
				</div>
				<div className="button-group">
					<button type="button" className="btn-xlg btn-tertiary" onClick={onClose}>
						확인
					</button>
				</div>
			</div>
		</dialog>
	);
}
