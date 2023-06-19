import React from 'react';
import styled from 'styled-components';

function Header() {
	return (
		<HeaderContainer>
			<HeaderWrapper>
				<div className="updateDate">
					<p style={{ opacity: 0.3, fontSize: 18 }}>Latest updated 2023 / 06 / 19</p>
				</div>
				<div className="tabBox" style={{ display: 'flex', gap: 52, fontSize: 24 }}>
					<span style={{ fontWeight: 700 }}>Profile</span>
					<span>Portfolio</span>
				</div>
			</HeaderWrapper>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.header`
	padding: 25px 200px;
	background-color: #232323;
	color: #f1f1f1;
`;

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default Header;
