
const CardPro = props => {
    return (
        <div className="card bg-light">
            <img className="card-media" alt="card-img"/>
            <div className="card-content">
                <ul className="card-body">
                    <li>Title : Titre</li>
                    <li>Date : Date</li>
                    <li>Auteur : Author</li>
                </ul>
                <ul className="card-action">
                    <li className="bg-light">Modifier</li>
                    <li className="bg-light">Details</li>
                    <li className="bg-light">Supprimer</li>
                </ul>
            </div>
        </div>
    );
}

export default CardPro;