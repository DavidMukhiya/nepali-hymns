import { CAMPSITES } from "../../app/shared/CAMPSITES";
import HymnsCard from "./HymnsCard";
import { Row, Col } from 'reactstrap';

const HymnsList = () => {
    return (
        <Row className="ms-auto">
            {CAMPSITES.map((campsite) => {
                return (
                    <Col md='5' className="m-4" key={campsite.id} >
                        <HymnsCard campsite={campsite} />
                    </Col>

                )
            })}
        </Row>
    );
}

export default HymnsList;