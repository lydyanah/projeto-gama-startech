import { FunctionComponent, ReactNode } from "react";
import "./styles.css";

type Props = {
  children?: ReactNode;
};

const Page: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <div className="navbar-fixed">
        <div className="navbar-content">
          <h1>JobsNet</h1>
          <div className="menu"></div>
        </div>
      </div>
      <main>{children}</main>
      <footer>
        <p>2021. JobsNet. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};

export default Page;
