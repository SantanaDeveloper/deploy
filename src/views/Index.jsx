import React from "react";



// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import Hero from "./IndexSections/Hero.jsx";
import Carousel from "./IndexSections/Carousel.jsx";
import Download from "./IndexSections/Download.jsx";
import NossosServicos from "./IndexSections/NossosServicos.jsx";
import Recursos from "./IndexSections/Recursos.jsx";
import Contato from "./IndexSections/contato.jsx";
import Modals from "./IndexSections/Modals.jsx";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0; 
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />
          <NossosServicos />
          <Recursos />
          <Carousel />
          <Modals />
          <Contato />
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
