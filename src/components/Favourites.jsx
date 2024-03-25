import { Col, Row, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";

const Favourites = () => {

    const favouriteList = useSelector((state) => {
        return state.favourites.content
    })

    const dispatch = useDispatch()

    return (
        <Row>
          <Col sm={12}>
            <ul style={{ listStyle: 'none' }}>
              {favouriteList.map((fav, i) => (
                <li key={i} className="my-4">
                  <Button
                    variant="danger"
                    onClick={() => {
                      // da qui dentro dovremmo eliminare il libro selezionato dal carrello!
                      dispatch({
                        type: 'DELETE_FROM_FAVOURITES',
                        payload: i,
                      })
                    }}
                  >
                  DELETE
                  </Button>
                  
                  {fav.company_name}
                </li>
              ))}
            </ul>
          </Col>
          
        </Row>
      )

    


}

export default Favourites