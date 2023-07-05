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
					<h2 className="profile_txt">안녕하세요!</h2>
					<h2 className="profile_txt">주니어 프론트엔드 개발자</h2>
					<h2 className="profile_txt">오현주입니다.</h2>
				</div>
			</section>
			<section className="profile_section2 black_txt_color default_padding">
				<div className="profile_section2_wrapper">
					<div className="info_container">
						<div className="titlebox">
							<h3 className="title">Profile</h3>
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
						<p className="pr_title">👤 저는 사람을 향할 줄 아는 개발자가 되고 싶습니다.</p>
						<div className="pr_txt pr_txt1">
							<p>기술이 시대와 트렌드를 따라 성장하고 변화하는 것을 느낍니다.</p>
							<p>
								웹 디자이너로 2년 2개월간의 커리어를 종료하고, 프론트엔드 개발자로 전향하였습니다.
							</p>
							<p>
								저는 디자인보다 ’개발’이라는 기술을 통해, 사람들의 실질적인 결핍과 필요에 접근하고
								싶었습니다.
							</p>
							<p>
								개발자는 UI/UX와 밀접한만큼 트렌드에 민감하고 세상의 흐름을 읽을 줄 알아야 한다고
								생각합니다.
							</p>
							<p>
								디자인 경력을 통해, 디자이너와의 소통에 있어 높은 이해력과 유연한 사고로 협업이
								가능합니다.
							</p>
						</div>
						<div className="pr_txt pr_txt2">
							<p>모든 서비스나 기술의 도달점은 사람입니다.</p>
							<p>편리를 너머 사회를 구성하는 사람들의 삶이 가치다운 가치를 회복할 수 있도록,</p>
							<p>
								<strong>'필요'</strong>가 있는 곳에 가치있게 소모되는 개발자가 되고 싶습니다.
							</p>
							<p>그러기 위하여 그에 마땅한 기술력과 통찰력을 키우기 위해 정진하고 있습니다.</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Profile;
