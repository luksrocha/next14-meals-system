import MealItem from "../mealItem/mealItem";
import classes from "./mealsGrid.module.css";

export const MealsGrid = ({ meals }) => {
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
};
