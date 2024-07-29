import { Fragment, ReactElement } from "react";
import TopbarComponent from "../../components/Topbar";
import HeaderComponent from "../../components/Header";
import "./style/style.css";

function GenericErrorPage(props: { text: string }): ReactElement {
  return (
    <Fragment>
      <header>
        <TopbarComponent text="Aproveite as nossas oportunidades!!!" />
        <HeaderComponent />
      </header>

      <section>
        <div className="error-content">
          <h1 className="error-title">Aconteceu algo de errado!</h1>
          <p className="error-text">{ props.text }</p>
        </div>
      </section>
    </Fragment>
  )
}

export default GenericErrorPage;
