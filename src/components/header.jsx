import top from '../images/top-tweets.svg';

function Header() {
  return (
    <header className="header">
      <div className="page-title">Home</div>
      <a className="top-tweets"><img src={top} alt="Much love for you" /></a>
    </header>
    
  )
}

export default Header;