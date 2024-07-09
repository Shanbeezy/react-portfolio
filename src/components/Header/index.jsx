import coverImage from '../../assets/cover/shan.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Shannon</h1>
      <img src={coverImage} alt="shan & kai"></img>
      {props.children}
    </header>
  );
}

export default Header;
