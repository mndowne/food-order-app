import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';


const MealItem = ({meals} ) => {

    const price = `$${meals.price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div >
                <h3>{meals.name}</h3>
                <div className={classes.description}>{meals.description}</div>
                <div className={classes.price}>{price}</div> 
            </div>
            <div>
            <MealItemForm id={meals.id} />
            </div>
        </li>
    );
}

export default MealItem;

