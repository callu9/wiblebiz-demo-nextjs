"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./header.scss";

export default function Header() {
	const router = useRouter();
	const [isOpened, setIsOpened] = useState(false);
	const [menuIdx, setMenuIdx] = useState(-1);
	const MENU_LIST = [
		{ text: "서비스 소개", href: "/guide" },
		{ text: "자주 묻는 질문", href: "/faq" },
		{ text: "새소식", href: "/news" },
		{ text: "상담문의", href: "/counsel" },
	];
	useEffect(() => {
		const idx = MENU_LIST.findIndex((menu) => menu.href === router.pathname);
		setMenuIdx(idx);
	}, [router.pathname]);
	function onClickMenu(idx) {
		setMenuIdx(idx);
		setIsOpened(false);
	}
	return (
		<header className={isOpened ? "nav-opened" : ""}>
			<div className="header-wrapper flex sides">
				<Link href="/" className="logo" onClick={() => onClickMenu(-1)}>
					Wible BIZ
				</Link>
				<nav>
					<ul className="flex right">
						{MENU_LIST.map((menu, idx) => (
							<li key={menu.href} className={menuIdx === idx ? "active" : undefined}>
								<Link href={menu.href} onClick={() => onClickMenu(idx)}>
									{menu.text}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<span className="util">
					<button type="button" className="nav" onClick={() => setIsOpened(!isOpened)}>
						메뉴 열기/닫기
					</button>
				</span>
			</div>
		</header>
	);
}
