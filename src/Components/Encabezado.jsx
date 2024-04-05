import {
  Row,
  Col,
  Image,
  Container
} from "react-bootstrap/";
import EncabezadoDesign from "./css/EncabezadoDesign.css";
function Encabezado({ logo, titulo }) {
  return (
    <Container>
        <div className="logo">
          <Image
            className="img-logo"
            src={logo}
          />
        </div>

        <h1 className="titulo ">
          {titulo}
        </h1>
    </Container>
  );
}

export default Encabezado;