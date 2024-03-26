import { Col, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Favourites = () => {
  const favouriteList = useSelector((state) => {
    return state.favourites.content;
  });

  const dispatch = useDispatch();

  return (
    <Container className="mt-5">
      <Link to={"/"}>
        <Button variant="success">Back</Button>
      </Link>
      <h1 className="text-center">Lista preferiti:</h1>
      <Row className="mt-5">
        {favouriteList.map((fav, index) => {
          return (
            <Col xs={12} className="border p-1" key={index}>
              <Row>
                <Col xs={4}>
                  <p className="fw-bold">
                    <Link to={`/${fav.company_name}`}> {fav.company_name} </Link>{" "}
                  </p>
                </Col>
                <Col xs={6}>
                  <p>{fav.title}</p>
                </Col>
                <Col xs={1}>
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch({
                        type: "DELETE_FROM_FAVOURITES",
                        payload: index,
                      });
                    }}
                  >
                    {" "}
                    Remove
                  </Button>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Favourites;
