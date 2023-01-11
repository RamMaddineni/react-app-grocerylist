// ctrl+Alt+R

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};
Header.defaultProps = {
  title: "Title",
};
export default Header;
