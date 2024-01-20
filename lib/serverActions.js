"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { parseFormDataToMealObject } from "@/utils/meals/mealsFormDTO";
import { saveMeal } from "./meals";

export const shareMeal = async (prevState, formData) => {
    const meal = parseFormDataToMealObject(formData);

    if (meal?.message) {
        return meal;
    }

    await saveMeal(meal);

    revalidatePath("/meals");

    redirect("/meals");
};
