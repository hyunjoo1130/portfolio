import React from 'react';
import './Portfolio.scss';
import Work from './components/Work';
import Education from './components/Education';
import Project from './components/Project';

function Portfolio() {
	return (
		<div id="Portfolio" className="black_txt_color">
			<section className="section portfolio_section1 default_padding">
				{/* ⭐️ Work ⭐️ */}
				<Work />
			</section>
			<section className="section portfolio_section2 default_padding">
				{/* ⭐️ Education ⭐️ */}
				<Education />
			</section>
			<section className="section portfolio_section3 default_padding">
				{/* ⭐️ Project ⭐️ */}
				<Project />
			</section>
		</div>
	);
}

export default Portfolio;
