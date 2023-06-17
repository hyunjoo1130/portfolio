import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ContentContainer from './components/ContentContainer';

function App() {
	return (
		<div className="App">
			<Header />
			<ContentContainer>
				<Outlet />
			</ContentContainer>
			<Footer />
		</div>
	);
}

export default App;
