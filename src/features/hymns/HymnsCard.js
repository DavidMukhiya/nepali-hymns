import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HymnsCard = (props) => {
    return (
        <Card>
            <CardImg width='100%' src={props.campsite.image} alt={props.campsite.name} />
            <CardImgOverlay>
                <CardTitle>{props.campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

export default HymnsCard;