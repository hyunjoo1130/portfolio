import React from 'react';
import styled from 'styled-components';

function Footer() {
	return (
		<FooterContainer>
			<FooterWrapper>
				<div className="leftBox">
					<div>
						<LeftTitle>OH HYUN JOO PORTFOLIO</LeftTitle>
						<LeftSubTitle>Front-end Developer</LeftSubTitle>
						<LeftTxt>쓸모있는 기술과 가치로 사람과, 세상과 연결되자</LeftTxt>
					</div>
				</div>
				<RightBox>
					<LogoBox>
						<LogoLink>
							<a href="https://github.com/hyunjoo1130" target="_blank" rel="noreferrer">
								<img src="/images/footer/github-logo.png" alt="GitHub" style={{ width: '100%' }} />
							</a>
						</LogoLink>
						<LogoLink>
							<a href="https://velog.io/@ohjoo1130/series" target="_blank" rel="noreferrer">
								<img src="/images/footer/velog-logo.png" alt="Velog" style={{ width: '100%' }} />
							</a>
						</LogoLink>
					</LogoBox>
					<TxtOfRight>
						<p>© 2023 ohhyunjoo. All right reserved.</p>
					</TxtOfRight>
				</RightBox>
			</FooterWrapper>
		</FooterContainer>
	);
}

const FooterContainer = styled.footer`
	margin-top: 10px;
	padding: 40px 20px;
	background-color: #232323;
	color: #f1f1f1;
	@media (min-width: 450px) {
		margin-top: 60px;
		padding: 70px 200px;
	}
`;

const FooterWrapper = styled.div`
	display: block;
	text-align: center;
	@media (min-width: 450px) {
		display: flex;
		justify-content: space-between;
	}
`;

const LeftTitle = styled.p`
	font-size: 18px;
	@media (min-width: 450px) {
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 3px;
	}
`;

const LeftSubTitle = styled.p`
	font-size: 18px;
	@media (min-width: 450px) {
		font-size: 24px;
		font-weight: 400;
	}
`;

const LeftTxt = styled.p`
	font-size: 14px;
	margin-top: 20px;
	margin-bottom: 20px;
	@media (min-width: 450px) {
		margin-top: 50px;
	}
`;

const RightBox = styled.div`
	margin-top: auto;
`;

const TxtOfRight = styled.div`
	margin-top: 15px;
	font-size: 14px;
	opacity: 0.3;
	@media (min-width: 450px) {
		font-size: 18px;
	}
`;

const LogoBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
	padding-top: 18px;
	@media (min-width: 450px) {
		justify-content: flex-end;
		padding-right: 10px;
	}
`;

const LogoLink = styled.div`
	width: 40px;
	@media (min-width: 450px) {
		width: 50px;
	}
`;

export default Footer;
