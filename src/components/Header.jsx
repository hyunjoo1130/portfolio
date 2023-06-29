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
				<div className="updateDate" style={{ position: 'relative', cursor: 'pointer' }}>
					<p
						style={{ opacity: 0.3, fontSize: 18 }}
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
						{hover ? 'Previous update 2023 / 06 / 23' : 'Latest updated 2023 / 06 / 29'}
					</p>
				</div>
				<div className="tabBox" style={{ display: 'flex', gap: 52, fontSize: 24 }}>
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
				</div>
			</HeaderWrapper>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.header`
	padding: 22px 200px;
	background-color: #232323;
	color: #f1f1f1;
`;

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default Header;
