import { Link } from "react-router-dom";
import { RECIPES } from "./data/recipes";

const List = () : JSX.Element => {
    return (
        <ul className='list'>
            {Object
                .entries(RECIPES) // возвращает [key, value]
                .map(([rId, recipe]: any) => (
                    <li className='list__item' key={rId}>
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