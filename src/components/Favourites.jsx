import { Col, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favouriteList = useSelector((state) => {
    return state.favourites.content;
  });

  const dispatch = useDispatch();

  return (
    <Row>
      <Col>
        <h1>Ciao Ciao</h1>
      </Col>
      {/*  <Col sm={12}>
            <ul style={{ listStyle: 'none' }}>
              {favouriteList.map((fav, index) => {
                return (
                <li key={index} className="my-4">
                     <p>{fav.company_name}</p>

                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch({
                        type: 'DELETE_FROM_FAVOURITES',
                        payload: index,
                      })
                    }}
                  >
                  DELETE
                  </Button>
                  
                 
                </li>)
})}
            </ul>
          </Col> */}
    </Row>
  );
};

export default Favourites;
