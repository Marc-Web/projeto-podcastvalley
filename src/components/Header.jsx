import React from "react";
import moment from "moment";

class Header extends React.Component {
  render() {
    moment.locale("pt-br");
    return (
      <div className="header-component">
        <header>
          <h3 className="logo">PodCastValley</h3>
          <span className="span-text">O melhor para você ouvir, sempre</span>
          <span className="span-date">{moment().format('ddd, D MMM')}</span>
        </header>
      </div>
    )
  }
}

export default Header;
