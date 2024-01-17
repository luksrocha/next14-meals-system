"use server";

import { redirect } from "next/navigation";

import { parseFormDataToMealObject } from "@/utils/meals/mealsFormDTO";
import { saveMeal } from "./meals";

export const shareMeal = async (formData) => {
    const meal = parseFormDataToMealObject(formData);

    await saveMeal(meal);
    redirect("/meals");
};
