import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiChevronUp } from 'react-icons/fi';

function TopBtn() {
	const [handleBtn, setHandleBtn] = useState(false);

	const scrollToTop = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		const handleShowBtn = () => {
			if (window.scrollY > 500) {
				setHandleBtn(true);
			} else {
				setHandleBtn(false);
			}
		};

		window.addEventListener('scroll', handleShowBtn);
		return () => window.removeEventListener('scroll', handleShowBtn);
	}, []);

	return (
		<Topbtnbox onClick={scrollToTop} handleBtn={handleBtn}>
			<Topbtn>
				<FiChevronUp />
			</Topbtn>
		</Topbtnbox>
	);
}

const Topbtnbox = styled.div`
	position: fixed;
	right: 60px;
	bottom: 40px;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 60px;
	height: 60px;
	background-color: #ccc;
	border-radius: 50%;

	opacity: ${props => (props.handleBtn ? '50%' : '0%')};
	transition: all ease 0.2s;
	cursor: pointer;
`;

const Topbtn = styled.button`
	margin-top: 4px;
	border: none;
	background-color: #ccc;

	font-size: 27px;
	color: #222;

	cursor: pointer;
`;

export default TopBtn;
