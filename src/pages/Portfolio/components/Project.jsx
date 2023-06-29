import React from 'react';

function Project() {
	return (
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
											여러 검사와 절차를 거치기 때문에, 혼란을 주거나, 사용자가 불필요한 액션을 굳이
											하지 않도록 검사 유무와 다음 flow가 사용자에게 명확히 또는 직관적으로 전달될
											수 있도록 구현
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
									<p className="feature_name"> &gt; 로그인</p>
									<div className="mypoint">
										<p className="point_title">🎯 MY POINT</p>
										<p className="point_desc">
											깔끔한 UI 구현과 토큰의 보안성을 고려한 안전하고도 효율적인 관리
										</p>
									</div>
									<div className="feature_details">
										<p className="details_title">1. 자체 로그인 기능</p>
										<ul className="details_listbox">
											<li className="details_list">
												• 반복되는 UI인 input을 컴포넌트 분리 및 재활용
											</li>
											<li className="details_list">
												• 이메일과 패스워드의 필수조건에 부합할 때 까지, 로그인 버튼 비활성화
												(부합하면 버튼 활성화)
											</li>
											<li className="details_list">
												• JWT토큰을 사용, Session Storage에 저장 및 관리
											</li>
											<li className="details_list">
												• 로그인 실패 시, 유저가 재로그인 혹은 회원가입을 하도록 유도
											</li>
										</ul>
										<div className="troubleShooting_box">
											<p className="title">TROUBLE SHOOTING</p>
											<div className="content">
												<p className="content_title">
													• 로그인 버튼을 누를 시에, 로그인이 안되고 토큰이 저장되지 않는 문제
												</p>
												<p className="content_desc">
													form 태그 사용으로, 버튼 type의 기본적인 submit 속성으로 인해 post
													request가 2번씩 요청되어, 크롬에서 막히는 현상이 발생했다.
												</p>
												<p className="content_solu">
													<span style={{ fontWeight: 700 }}>해결 :</span> 로그인 버튼 type을
													button으로 수정하여, submit 속성을 없애주고 onClick / onKeyDown 으로
													로그인을 따로 처리하였다.
												</p>
											</div>
											<div className="content">
												<p className="content_title">
													• 로그아웃을 한 뒤에도, 로그인 정보가 로그인 input 창에 계속 남아있는 문제
												</p>
												<p className="content_desc">
													input 의 value 값을 관리하고 있는 state 가 recoil로 관리되고 있었는데,
													로그아웃 시에는 세션스토리지에 있는 토큰만 삭제(remove) 해주도록 하는
													로직만 있었기에 리렌더링이 되지 않았다. 그로 인해 inputvalue 값이 초기화
													되지 않아 회원 정보가 그대로 남아있었던 문제가 있었다.
												</p>
												<p className="content_solu">
													<span style={{ fontWeight: 700 }}>해결 :</span> recoil 의 reset 기능을
													사용하여, 로그아웃 시 토큰 삭제 뒤 resetRecoilState 기능을 활용하여
													inputvalue 값을 빈 값으로 초기화 시켜 주었다.
												</p>
											</div>
										</div>
									</div>
									<div className="feature_details">
										<p className="details_title">2. 소셜 로그인 기능 ( 구글 / 카카오 )</p>
										<ul className="details_listbox">
											<li className="details_list">
												• 구글 로그인 | @react-oauth/google 라이브러리를 활용하여 구현
											</li>
											<li className="details_list">
												• 카카오 로그인 | kakao developer 공식문서 참고하여 구현
											</li>
											<li className="details_list">
												• 필요한 정보들을 한 문서에서 일괄 관리하고 필요한 곳에 export/import 로
												사용하여 유지보수성 높임
											</li>
											<li className="details_list">
												• JWT토큰을 사용, Session Storage에 저장 및 관리
											</li>
										</ul>
										<div className="troubleShooting_box">
											<p className="title">TROUBLE SHOOTING</p>
											<div className="content">
												<p className="content_title">
													• 서비스 내에서 회원정보가 필요할 때 마다 백엔드에게 토큰을 통신해야 하는
													번거로움
												</p>
												<p className="content_desc">
													회원유무를 확인해야 하는 사이트마다, header 에 token을 담아 보내
													회원정보를 받아와야 했다. 그로 인해 중복되는 코드가 많아졌고, 매번 통신을
													해야하는 번거로움이 생겼다.
												</p>
												<p className="content_solu">
													<span style={{ fontWeight: 700 }}>해결 :</span> 로그인 성공 시, 어디에서나
													토큰을 확인하여 회원 flow가 원활히 진행될 수 있도록, 해당 토큰을 decoding
													하여 recoilState로 관리하여 필요할 때마다 state로 가져와 활용
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="pj_videobox">
								<p className="video_title">🖥️ 완성 영상</p>
								<embed type="video/webm" src="/media/login.mp4" className="pj_video" />
							</div>
							<div className="linkbox">
								<span className="link_title">🔗 링크</span>
								<div className="links">
									<span className="link_github">
										<a
											href="https://github.com/hyunjoo1130/meerkats-frontend/blob/dev/src/pages/Login/components/UserForm.tsx"
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
											href="https://github.com/mgkkm/meerkats-frontend/pull/21"
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
						{/* 블로그 메인페이지 */}
						<div className="pj_content blogMain">
							<hr className="pj_underline" />
							<div className="pj_features">
								<div className="feature_box">
									<p className="feature_name"> &gt; 블로그 메인페이지</p>
									<div className="mypoint">
										<p className="point_title">🎯 MY POINT</p>
										<p className="point_desc">
											깔끔한 UI 구현과 많은 게시글 데이터들이 설정에 알맞게 렌더링
										</p>
									</div>
									<div className="feature_details">
										<p className="details_title">1. 무한스크롤 기능</p>
										<ul className="details_listbox">
											<li className="details_list">
												• Intersection Observer API 활용 (useRef 의 target 요소와 viewport 의
												교차점을 감지해, 다음 데이터를 불러오는 방식)
											</li>
											<li className="details_list">
												• 사용자에게는 보이지 않는 target을 생성하여, viewport가 감지하면 콜백함수를
												실행시켜, 다음에 보여야 할 데이터를 받아와 렌더링
											</li>
											<li className="details_list">
												• 반복되는 게시글 UI를 컴포넌트로 분리시켜 재활용
											</li>
										</ul>
									</div>
									<div className="feature_details">
										<p className="details_title">2. 조건부 렌더링</p>
										<ul className="details_listbox">
											<li style={{ fontWeight: 700 }}>Toggle on / off 조건부 렌더링</li>
											<li className="details_list">
												• 프로덕트가 영화인만큼 스포/미스포에 예민할 사용자를 위해 toggle on/off 로
												스포의 포함유무를 결정할 수 있도록 구현
											</li>
											<li className="details_list">
												• toggle 의 상태값에 따라서 알맞은 데이터로 접근하여 렌더링되도록 구현
											</li>
										</ul>
										<div className="troubleShooting_box">
											<p className="title">TROUBLE SHOOTING</p>
											<div className="content">
												<p className="content_title">
													• UTC 날짜시간과, 현재 날짜 시간의 오차일을 구하는 반복되는 로직
												</p>
												<p className="content_desc">
													포스트의 작성일과 현재 날짜의 오차일을 구하는 로직이, 몇몇 컴포넌트에서
													반복되고 그 코드가 짧지 않아서, 많은 메모리가 낭비되어 보였다.
												</p>
												<p className="content_solu">
													<span style={{ fontWeight: 700 }}>해결 :</span> 필요한 값을 인자로 받는
													함수로 따로 분리하여 필요한 곳에 import하여 사용하였다. 10줄 넘는 코드를
													한줄로 줄일 수 있었다.
												</p>
											</div>
										</div>
										<div className="details_imgbox">
											<img
												src="/images/portfolio/blogDateFn.png"
												alt="코드이미지"
												className="details_img"
											/>
										</div>
										<ul className="details_listbox" style={{ marginTop: 18 }}>
											<li style={{ fontWeight: 700 }}>My blog 조건부 렌더링</li>
											<li className="details_list">
												• My blog 의 탭을 클릭 시, 회원 본인이 쓴 블로그 데이터만 모아볼 수 있도록
												구현
											</li>
											<li className="details_list">
												• 백엔드에게 POST로 header에 토큰을 보내 회원 본인인지 확인 및 데이터 통신
											</li>
											<li className="details_list">
												• My blog 데이터만 렌더링 될 수 있도록, state로 상태값 관리하여 삼항연산자로
												컴포넌트 분기처리
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="pj_videobox">
								<p className="video_title">🖥️ 완성 영상</p>
								<embed type="video/webm" src="/media/blogMain.mp4" className="pj_video" />
							</div>
							<div className="linkbox">
								<span className="link_title">🔗 링크</span>
								<div className="links">
									<span className="link_github">
										<a
											href="https://github.com/hyunjoo1130/meerkats-frontend/blob/dev/src/pages/Blog/BlogMain/components/BlogScrollArticle.tsx"
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
											href="https://github.com/mgkkm/meerkats-frontend/pull/19"
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
						{/* 검색 기능 */}
						<div className="pj_content search">
							<hr className="pj_underline" />
							<div className="pj_features">
								<div className="feature_box">
									<p className="feature_name" style={{ marginBottom: 20 }}>
										{' '}
										&gt; 검색 기능
									</p>
									<div className="feature_details">
										<ul className="details_listbox">
											<li className="details_list">
												• 검색을 담당하는 레이아웃과 기능을 컴포넌트로 분리
											</li>
											<li className="details_list">
												• 메인페이지에서는 영화를 검색하여, dropdown으로 검색결과가 나오면, 클릭하여
												해당 영화 예고편 페이지로 이동
											</li>
											<li className="details_list">
												• 블로그 메인페이지에서는 게시글 제목을 검색하여, 해당 게시글들만 조건부
												렌더링
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="pj_videobox">
								<p className="video_title">🖥️ 완성 영상</p>
								<embed type="video/webm" src="/media/search.mp4" className="pj_video" />
							</div>
							<div className="linkbox">
								<span className="link_title">🔗 링크</span>
								<div className="links">
									<span className="link_github">
										<a
											href="https://github.com/hyunjoo1130/meerkats-frontend/blob/dev/src/components/Nav/components/SearchModal.tsx"
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
											href="https://github.com/mgkkm/meerkats-frontend/pull/47"
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
	);
}

export default Project;
