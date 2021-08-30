import { FunctionComponent, ReactNode } from "react";
import Logo from "../../assets/images/logo.png";
import "./styles.css";

type Props = {
  children?: ReactNode;
};

const Page: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <div className="navbar-fixed">
        <div className="navbar-content">
        <div className="jobsNet">
            <img className="logotipo" src={Logo} alt="logotipo" />
            <span>JobsNET</span>
          </div>
         
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
