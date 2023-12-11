import {Link} from "react-router-dom";

const RECIPES = {
    '1': {
        title: 'Торт Наполеон',
    },
    '2': {
        title: 'Борщ',
    },
    '3': {
        title: 'Пельмени',
    },
    '4': {
        title: 'Картофельное пюре',
    },
}

const List = () : ReactElement => {
    return (
        <ul>
            {Object
                .entries(RECIPES)
                .map(([rId, recipe], idx) => (
                    <li key={rId}>
                        <Link to={`/recipes/${rId}`}>
                            {recipe.title}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default List;