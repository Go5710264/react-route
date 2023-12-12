import { Link } from "react-router-dom";
import { RECIPES, TitleDescription } from "./data/recipes";
 

const List = () : JSX.Element => {
    return (
        <ul className='list'>
            {Object
                .entries(RECIPES) // возвращает [key, value]
                // типизация с помощью tuple (кортежей)
                .map(([rId, recipe]: [string, TitleDescription]) => ( 
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