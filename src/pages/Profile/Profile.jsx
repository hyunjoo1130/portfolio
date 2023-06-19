import React from 'react';
import './Profile.scss';

function Profile() {
	return (
		<div id="Profile">
			<section className="profile_section1 black_bg_color default_padding">
				<div className="profile_imgbox">
					<img className="profile_img" src="/images/profile/hj.png" alt="프로필 이미지" />
				</div>
				<div className="profile_txtbox white_txt_color">
					<h1 className="profile_txt">안녕하세요!</h1>
					<h1 className="profile_txt">주니어 프론트엔드 개발자 오현주입니다.</h1>
				</div>
			</section>
			<section className="profile_section2 black_txt_color default_padding">
				<div className="profile_section2_wrapper">
					<div className="info_container">
						<div className="titlebox">
							<h2 className="title">Profile</h2>
						</div>
						<div className="infobox">
							<div className="info_block_left">
								<div className="info_block">
									<span className="info_q">이름</span>
									<span className="info_r">오현주</span>
								</div>
								<div className="info_block">
									<span className="info_q">핸드폰</span>
									<span className="info_r">010-2930-9384</span>
								</div>
							</div>
							<div className="info_block_right">
								<div className="info_block">
									<span className="info_q">생년월일</span>
									<span className="info_r">1993년 11월 30일</span>
								</div>
								<div className="info_block">
									<span className="info_q">이메일</span>
									<div className="email_r_box">
										<p className="info_r email_r">네이버 &nbsp;|&nbsp; ohjoo1130@naver.com</p>
										<p className="info_r">구글 &nbsp;|&nbsp; ohjoo1993@gmail.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr style={{ width: 300, color: '#232323', opacity: 0.3, margin: '0 auto' }} />
					<div className="pr_container">
						<h3 className="pr_title">🌐 저는 세상의 흐름을 읽을 줄 아는 개발자가 되고 싶습니다.</h3>
						<div className="pr_txt pr_txt1">
							<p>기술이 시대와 트렌드를 따라 성장하고 변화하는 것을 느낍니다.</p>
							<p>
								저는 ’개발’이라는 기술을 통해, 세상의 흐름을 느끼고, 그것에 발맞추며 무한히 성장하고
								싶습니다.
							</p>
							<p>
								그리하여, 조금 더 넓은 시야와 다양한 가능성을 가진 개발자가 되어가는 것이 저의
								꿈입니다.
							</p>
						</div>
						<div className="pr_txt pr_txt2">
							<p>트렌드와 가까운 직업인, 웹 디자이너로 일했습니다.</p>
							<p>
								디자이닝을 넘어 디자인에 기능과 역동성을 추가하며 소비자와 소통하고 싶어, 개발자로
								전향하였습니다.
							</p>
							<p>
								혼자 일하기보다, 함께 고민하며 헤쳐나가는 협업을 더 즐거워하는 외향적인 성격을
								가지고 있습니다.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Profile;
