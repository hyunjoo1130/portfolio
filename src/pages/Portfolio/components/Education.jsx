import React from 'react';

function Education() {
	return (
		<article className="article education">
			<div className="wrapper">
				<div className="title_box">
					<h2 className="title">Education</h2>
				</div>
				<hr className="underline" />
				<div className="list_container">
					<div className="list_block">
						<div className="list_info">
							<p className="info_name">wecode</p>
							<p className="info_detail gray">오프라인 코딩 부트캠프</p>
							<p className="info_detail gray">2022.11 ~ 2023.03</p>
						</div>
						<div className="list_idid">
							<div className="idid">
								<p className="details">인스타그램 클론 코딩 (Vaniila JavaScript)</p>
								<p className="details">
									2번의 팀 프로젝트 수행 (식물 판매 및 구독 사이트 / 중고차 경매 및 거래 사이트)
								</p>
								<p className="details">첫 프로젝트 때, PM 담당 + 프로젝트 발표</p>
								<p className="details">41기 ‘비타민상’ 수상 / 부트캠프 홍보용 개인인터뷰 선발</p>
							</div>
							<div className="skills">
								<span className="skills_txt learn_skills_txt">학습언어</span>
								<span className="skills_list">
									HTML / CSS / JavaScript / React / Git / GitHub
									<span className="next_line">Sass / Styled Component / Redux</span>
								</span>
							</div>
						</div>
					</div>
					<div className="list_block">
						<div className="list_info">
							<p className="info_name">스마트모바일•웹 UI/UX</p>
							<p className="info_detail gray">국제컴퓨터아카데미</p>
							<p className="info_detail gray">2019.07 ~ 2019.12</p>
						</div>
						<div className="list_idid">
							<div className="idid">
								<p className="details">국비지원 프로그램</p>
								<p className="details">포토샵/일러스트레이터 및 웹 개발 언어 학습</p>
								<p className="details">기획(UI 디자인설계 / UX 전략수립) 및 개발</p>
							</div>
							<div className="skills">
								<span className="skills_txt learn_skills_txt">학습언어</span>
								<span className="skills_list">
									Adobe Photoshop / Adobe Illustrator
									<span className="next_line">HTML / CSS / JavaScript / JQuery</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}

export default Education;
