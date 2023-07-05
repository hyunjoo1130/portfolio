import React from 'react';

function Work() {
	return (
		<article className="article work">
			<div className="wrapper">
				<div className="title_box">
					<h2 className="title">Work</h2>
				</div>
				<hr className="underline" />
				<div className="list_container">
					<div className="list_block">
						<div className="list_info">
							<p className="info_name">Scordi</p>
							<p className="info_detail gray">Crawling</p>
							<p className="info_detail gray">외주</p>
						</div>
						<div className="list_idid">
							<div className="idid">
								<p className="details">구독서비스 관리 플랫폼 사이트</p>
								<p className="details">크롤링 - Jira Software / 미리캔버스</p>
							</div>
							<div className="skills">
								<span className="skills_txt">Skills</span>
								<span className="skills_list">Nest.js / React / Insomnia / GitHub Desktop</span>
							</div>
						</div>
					</div>
					<div className="list_block">
						<div className="list_info">
							<p className="info_name">Scordi</p>
							<p className="info_detail gray">Web publishing</p>
							<p className="info_detail gray">외주</p>
						</div>
						<div className="list_idid">
							<div className="idid">
								<p className="details">
									메인페이지 웹 퍼블리싱
									<a href="https://scordi.io/landing2" target="_blank" rel="noreferrer">
										{' '}
										🔗
									</a>
								</p>
								<p className="details">반응형 구현</p>
							</div>
							<div className="skills">
								<span className="skills_txt">Skills</span>
								<span className="skills_list">React / Sass / Tailwind CSS / Daisy UI</span>
							</div>
						</div>
					</div>
					<div className="list_block">
						<div className="list_info">
							<p className="info_name">MAZE</p>
							<p className="info_detail gray">Front-end Developer</p>
							<p className="info_detail gray">인턴십</p>
						</div>
						<div className="list_idid">
							<div className="idid">
								<p className="details">기업협업 프로그램 인턴십 (1개월)</p>
								<p className="details">대회 심사 툴 개발</p>
								<p className="details">로그인 고도화 / 데이터 차트 시각화 / UI 리팩토링</p>
							</div>
							<div className="skills">
								<span className="skills_txt">Skills</span>
								<span className="skills_list">React / Mantine UI / Echarts.js / Lodash</span>
							</div>
						</div>
					</div>
					<div className="list_block">
						<div className="list_info">
							<p className="info_name">에스테틱하우스</p>
							<p className="info_detail gray">Web Designer</p>
							<p className="info_detail gray">디자인팀 사원</p>
						</div>
						<div className="list_idid">
							<div className="idid">
								<p className="details">웹 상세페이지 디자인</p>
								<p className="details">제품 패키지 디자인</p>
								<p className="details">홍보물 디자인(신문지, 전단지, 팜플렛)</p>
								<p className="details">
									현대홈쇼핑 방송(전시장, 주문매대, 판넬 등 아크릴 디자인 및 주문제작)
								</p>
								<p className="details">자사 홈페이지 코드 변경 및 수정</p>
							</div>
							<div className="skills">
								<span className="skills_txt">Skills</span>
								<span className="skills_list">
									Adobe Photoshop / Adobe Illustrator / HTML / CSS
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}

export default Work;
