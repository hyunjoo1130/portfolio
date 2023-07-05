import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
	const navigate = useNavigate();
	const [active, setActive] = useState('Profile');
	const [hover, setHover] = useState(false);

	const headerHandler = txt => {
		setActive(txt);
	};

	return (
		<HeaderContainer>
			<HeaderWrapper>
				<UpdateDate>
					<UpdateDateTxt onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
						{hover ? 'Previous update 2023 / 06 / 23' : 'Latest updated 2023 / 06 / 29'}
					</UpdateDateTxt>
				</UpdateDate>
				<TabBox>
					<span
						title="Profile"
						style={{ fontWeight: active === 'Profile' ? 700 : 400, cursor: 'pointer' }}
						onClick={() => {
							headerHandler('Profile');
							navigate('/');
						}}
					>
						Profile
					</span>
					<span
						title="Portfolio"
						style={{ fontWeight: active === 'Portfolio' ? 700 : 400, cursor: 'pointer' }}
						onClick={() => {
							headerHandler('Portfolio');
							navigate('/portfolio');
						}}
					>
						Portfolio
					</span>
				</TabBox>
			</HeaderWrapper>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.header`
	position: fixed;
	top: 0;

	width: 100%;
	padding: 10px 20px;
	background-color: #232323;
	color: #f1f1f1;
	@media (min-width: 450px) {
		padding: 22px 200px;
	}
`;

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const UpdateDate = styled.div`
	position: relative;
	cursor: pointer;
`;

const UpdateDateTxt = styled.p`
	opacity: 0;
	font-size: 14px;
	@media (min-width: 450px) {
		opacity: 0.3;
		font-size: 18px;
	}
`;

const TabBox = styled.div`
	display: flex;
	gap: 16px;
	font-size: 18px;
	@media (min-width: 450px) {
		gap: 52px;
		font-size: 24px;
	}
`;

export default Header;
