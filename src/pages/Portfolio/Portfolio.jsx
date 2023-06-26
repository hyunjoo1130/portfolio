import React from 'react';
import './Portfolio.scss';

function Portfolio() {
	return (
		<div id="Portfolio">
			<section className="portfolio_section1 default_padding black_txt_color">
				{/* ⭐️ Work ⭐️ */}
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
										<p className="details">메인페이지 웹 퍼블리싱</p>
										<p className="details">반응형 구현</p>
										<p className="details">영상 첨부</p>
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

				{/* ⭐️ Education ⭐️ */}
				<article className="article education">
					<div className="wrapper">
						<div className="title_box">
							<h2 className="title">Education</h2>
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
										<p className="details">메인페이지 웹 퍼블리싱</p>
										<p className="details">반응형 구현</p>
										<p className="details">영상 첨부</p>
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

				{/* ⭐️ Project ⭐️ */}
				<article className="article project">
					<div className="wrapper">
						<div className="title_box">
							<h2 className="title">Project</h2>
						</div>
						<hr className="underline" />
						<div className="pj_container">
							{/* 프로젝트 로고 */}
							<div className="pj_logoimg_box">
								<img
									src="/images/portfolio/meerkats.png"
									alt="프로젝트 로고이미지"
									className="logo_img"
								/>
							</div>
							{/* 프로젝트 소개 */}
							<div className="pj_description_box">
								{/* 프로젝트 정보 */}
								<div className="pj_infos">
									<div className="info_block">
										<p className="info_t">프로젝트 이름</p>
										<p className="info_d">
											미어캐츠 (meerkats) : <br />
											영화 예고편을 감상하며, 다양한 영화 정보와 소식을 공유하는 커뮤니티 플랫폼
										</p>
									</div>
									<div className="info_block wid_block">
										<p className="info_t">상품</p>
										<p className="info_d">영화 예고편</p>
									</div>
									<div className="info_block wid_block">
										<p className="info_t">기간</p>
										<p className="info_d">2023.04.10 ~ 05.10 (1개월)</p>
									</div>
									<div className="info_block wid_block">
										<p className="info_t">팀</p>
										<p className="info_d">프론트엔드 3명 + 백엔드 2명</p>
									</div>
									<div className="info_block wid_block">
										<p className="info_t">
											사이트{' '}
											<a href="https://www.meerkats.monster/" target="_blank" rel="noreferrer">
												🔗
											</a>
										</p>
										<p className="info_d">
											<a href="https://www.meerkats.monster/" target="_blank" rel="noreferrer">
												https://www.meerkats.monster/
											</a>
										</p>
									</div>
									<div className="info_block">
										<p className="info_t">기술스택</p>
										<p className="info_d">
											React / TypeScript / Tailwind CSS / Daisy UI / Recoil
											<br />
											Amazon S3 / Adobe Photoshop / Figma / Jira
										</p>
									</div>
									<div className="info_block">
										<p className="info_t">
											<a
												href="https://www.notion.so/aangdootrois/FE-Convention-b75d9d4abc344e21a623ee9a23c365fc?pvs=4"
												target="_blank"
												rel="noreferrer"
											>
												FE Convention 🔗{' '}
											</a>
											<span className="info_d" style={{ marginLeft: 12 }}>
												커스텀 훅 / Git flow / 스타일 관련 컨벤션
											</span>
										</p>
									</div>
								</div>

								{/* ==== 내가 구현한 기능 및 페이지 ==== */}
								{/* 회원가입 기능 */}
								<div className="pj_content signin">
									<hr className="pj_underline" />
									<div className="pj_features">
										<div className="feature_box">
											<p className="feature_name"> &gt; 회원가입</p>
											<div className="mypoint">
												<p className="point_title">🎯 MY POINT</p>
												<p className="point_desc">
													여러 검사와 절차를 거치기 때문에, 혼란을 주거나, 사용자가 불필요한 액션을
													굳이 하지 않도록 검사 유무와 다음 flow가 사용자에게 명확히 또는 직관적으로
													전달될 수 있도록 구현
												</p>
											</div>
											<div className="feature_details">
												<p className="details_title">1. 이메일 인증 기능 구현</p>
												<ul className="details_listbox">
													<li className="details_list">
														• 반복되는 UI인 input을 컴포넌트 분리 및 재활용
													</li>
													<li className="details_list">
														• 개인정보 보안성을 높이기 위해 사용자의 이메일 중복체크 기능
													</li>
													<li className="details_list">
														• 이메일로 인증번호를 발송한 뒤, 인증번호 검사 기능
													</li>
												</ul>
											</div>
											<div className="feature_details">
												<p className="details_title">2. 유효성 검사 기능</p>
												<ul className="details_listbox">
													<li className="details_list">• 비밀번호 실시간 유효성 검사</li>
													<li className="details_list">• 정규식 표현으로 유효성 검사 조건 설정</li>
													<li className="details_list">
														• 조건에 대한 일치유무를 사용자가 직관적으로 알 수 있도록, 스타일 변화
													</li>
												</ul>
												<div className="details_imgbox">
													<img
														src="/images/portfolio/regex.png"
														alt="코드이미지"
														className="details_img"
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="pj_videobox">
										<p className="video_title">🖥️ 완성 영상</p>
										<embed type="video/webm" src="/media/signin.mp4" className="pj_video" />
									</div>
									<div className="linkbox">
										<span className="link_title">🔗 링크</span>
										<div className="links">
											<span className="link_github">
												<a
													href="https://github.com/hyunjoo1130/meerkats-frontend/blob/dev/src/pages/Signin/Signin.tsx"
													alt="깃허브 코드 링크"
													target="_blank"
													rel="noreferrer"
													className="link"
												>
													GitHub 코드
												</a>
											</span>
											<span className="link_pr">
												<a
													href="https://github.com/mgkkm/meerkats-frontend/pull/16"
													alt="깃허브 pr 링크"
													target="_blank"
													rel="noreferrer"
													className="link"
												>
													GitHub PR
												</a>
											</span>
										</div>
									</div>
								</div>
								{/* 로그인 기능 */}
								<div className="pj_content signin">
									<hr className="pj_underline" />
									<div className="pj_features">
										<div className="feature_box">
											<p className="feature_name"> &gt; 회원가입</p>
											<div className="mypoint">
												<p className="point_title">🎯 MY POINT</p>
												<p className="point_desc">
													여러 검사와 절차를 거치기 때문에, 혼란을 주거나, 사용자가 불필요한 액션을
													굳이 하지 않도록 검사 유무와 다음 flow가 사용자에게 명확히 또는 직관적으로
													전달될 수 있도록 구현
												</p>
											</div>
											<div className="feature_details">
												<p className="details_title">1. 이메일 인증 기능 구현</p>
												<ul className="details_listbox">
													<li className="details_list">
														• 반복되는 UI인 input을 컴포넌트 분리 및 재활용
													</li>
													<li className="details_list">
														• 개인정보 보안성을 높이기 위해 사용자의 이메일 중복체크 기능
													</li>
													<li className="details_list">
														• 이메일로 인증번호를 발송한 뒤, 인증번호 검사 기능
													</li>
												</ul>
											</div>
											<div className="feature_details">
												<p className="details_title">2. 유효성 검사 기능</p>
												<ul className="details_listbox">
													<li className="details_list">• 비밀번호 실시간 유효성 검사</li>
													<li className="details_list">• 정규식 표현으로 유효성 검사 조건 설정</li>
													<li className="details_list">
														• 조건에 대한 일치유무를 사용자가 직관적으로 알 수 있도록, 스타일 변화
													</li>
												</ul>
												<div className="details_imgbox">
													<img
														src="/images/portfolio/regex.png"
														alt="코드이미지"
														className="details_img"
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="pj_videobox">
										<p className="video_title">🖥️ 완성 영상</p>
										<embed type="video/webm" src="/media/signin.mp4" className="pj_video" />
									</div>
									<div className="linkbox">
										<span className="link_title">🔗 링크</span>
										<div className="links">
											<span className="link_github">
												<a
													href="https://github.com/hyunjoo1130/meerkats-frontend/blob/dev/src/pages/Signin/Signin.tsx"
													alt="깃허브 코드 링크"
													target="_blank"
													rel="noreferrer"
													className="link"
												>
													GitHub 코드
												</a>
											</span>
											<span className="link_pr">
												<a
													href="https://github.com/mgkkm/meerkats-frontend/pull/16"
													alt="깃허브 pr 링크"
													target="_blank"
													rel="noreferrer"
													className="link"
												>
													GitHub PR
												</a>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>
			</section>
		</div>
	);
}

export default Portfolio;
