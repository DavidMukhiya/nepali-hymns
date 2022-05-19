import Hymns from "./Hymns";

const hymnsList = [
    "Halayluyah Hosana Halayluyah",
    "Mahan Shristi Karta",
    "Maialy yweshu Mitra Paya"
];

const HymnsList = () => {
    return (
        <div>
            {hymnsList.map((lyrics, index) => (<Hymns hymns={lyrics} key={index} />))}
        </div>
    )
}

export default HymnsList;