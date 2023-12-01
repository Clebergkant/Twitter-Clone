import top from '../images/top-tweets.svg';

function Header() {
  return (
    <header className="header">
      <div className="page-title"><a href="#">Home</a></div>
      <a className="top-tweets"><img src={top} alt="avatar" /></a>
    </header>
    
  );
}

export default Header;