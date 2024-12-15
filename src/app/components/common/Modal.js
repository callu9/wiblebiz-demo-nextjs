import "./common.scss";

export default function Modal({ text, onClose }) {
	return (
		<div className="dialog-wrapper dialog-error grid" id="error_faq">
			<div className="dialog-body surface-primary grid gap-24">
				<p>{text}</p>
				<div className="button-group grid">
					<button type="button" className="btn-xxlg btn-tertiary" onClick={onClose}>
						확인
					</button>
				</div>
			</div>
		</div>
	);
}
