export const parseFormDataToMealObject = (formData) => {
    if (!formData) return {};

    return {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        creator: formData.get("name"),
        creator_email: formData.get("email"),
    };
};
