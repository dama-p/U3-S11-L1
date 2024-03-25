import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  /* console.log(data) */

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Button
          onClick={() => {
            dispatch({
              type: "ADD_TO_FAVOURITES",

              payload: data.company_name,
            });
          }}
        >
          <span className="me-2">FAV</span>
        </Button>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
