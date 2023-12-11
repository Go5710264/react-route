const NewRecipe = () : JSX.Element => {
    return (
        <form className="new-recipe">
            <label 
                className="new-recipe__label"
                htmlFor="name">
                    Name
            </label>
            <input 
                className="new-recipe__input"
                name='name' 
                type="text" 
            />
            <label 
                className="new-recipe__label"
                htmlFor="description">
                    Description
            </label>
            <textarea 
                className="new-recipe__description"
                name="description">

            </textarea>
        </form>
    )
}

export default NewRecipe;