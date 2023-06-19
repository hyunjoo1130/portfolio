import React from 'react';
import styled from 'styled-components';

function Footer() {
	return (
		<FooterContainer>
			<FooterWrapper>
				<div className="leftBox">
					<div>
						<p style={{ fontSize: 24, fontWeight: 700, marginBottom: 3 }}>OH HYUN JOO PORTFOLIO</p>
						<p style={{ fontSize: 24, fontWeight: 400 }}>Front-end Developer</p>
						<p style={{ marginTop: 50 }}>쓸모있는 기술과 가치로 사람과, 세상과 연결되자</p>
					</div>
				</div>
				<RightBox>
					<LogoBox>
						<div style={{ width: 50 }}>
							<a href="https://github.com/hyunjoo1130" target="_blank" rel="noreferrer">
								<img src="/images/footer/github-logo.png" alt="GitHub" style={{ width: '100%' }} />
							</a>
						</div>
						<div style={{ width: 50 }}>
							<a href="https://velog.io/@ohjoo1130/series" target="_blank" rel="noreferrer">
								<img src="/images/footer/velog-logo.png" alt="Velog" style={{ width: '100%' }} />
							</a>
						</div>
					</LogoBox>
					<div style={{ marginTop: 15, fontSize: 18, opacity: 0.3 }}>
						<p>© 2023 ohhyunjoo. All right reserved.</p>
					</div>
				</RightBox>
			</FooterWrapper>
		</FooterContainer>
	);
}

const FooterContainer = styled.footer`
	margin-top: 60px;
	padding: 70px 200px;
	background-color: #232323;
	color: #f1f1f1;
`;

const FooterWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const RightBox = styled.div`
	margin-top: auto;
`;

const LogoBox = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 15px;
	padding-right: 10px;
`;

export default Footer;
