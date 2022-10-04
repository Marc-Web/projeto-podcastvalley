import React from "react";
import Header from "../components/Header";
import LastReleases from "../components/LastReleases";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <LastReleases />
      </div>
    )
  }
}

export default Home;
