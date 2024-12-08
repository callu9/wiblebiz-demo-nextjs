"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./header.scss";

export default function Header() {
	const [menuIdx, setMenuIdx] = useState(-1);
	const MENU_LIST = [
		{ text: "서비스 소개", href: "/guide" },
		{ text: "자주 묻는 질문", href: "/faq" },
		{ text: "새소식", href: "/news" },
		{ text: "상담문의", href: "/counsel" },
	];

	useEffect(() => {
		const idx = MENU_LIST.findIndex((menu) => menu.href === window.location.pathname);
		setMenuIdx(idx);
	}, [window.location]);

	return (
		<header>
			<div className="header-wrapper flex sides">
				<Link href="/" className="logo" onClick={() => setMenuIdx(-1)}>
					Wible BIZ
				</Link>
				<nav>
					<ul className="flex right">
						{MENU_LIST.map((menu, idx) => (
							<li key={menu.href} className={menuIdx === idx ? "active" : undefined}>
								<Link href={menu.href} onClick={() => setMenuIdx(idx)}>
									{menu.text}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				{/*
				<span className="util">
				<button type="button" className="nav" data-ui-click="nav-toggle">
				메뉴 열기/닫기
				</button>
				</span>
				*/}
			</div>
		</header>
	);
}
