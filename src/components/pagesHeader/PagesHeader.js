import "./PagesHeader.css";

const PagesHeader = (props) => (
  <header
    className="pages-header"
    style={{ backgroundImage: `url(${props.bg})` }}
  >
    <div className="layer">
      <div className="pages-header-text">
        <h1 className="pages-header-title">{props.header}</h1>
        <p className="pages-header-p">{props.p}</p>
      </div>
    </div>
  </header>
);

export default PagesHeader;
