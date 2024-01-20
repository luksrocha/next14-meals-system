export const parseFormDataToMealObject = (formData) => {
    if (!formData) return {};

    const isInvalidText = (text) => {
        return !text || text.trim() === "";
    };

    if (
        isInvalidText(formData.get("title")) ||
        isInvalidText(formData.get("summary")) ||
        isInvalidText(formData.get("instructions")) ||
        isInvalidText(formData.get("name")) ||
        isInvalidText(formData.get("email"))
    ) {
        return {
            message: "Invalid output.",
        };
    }

    return {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        creator: formData.get("name"),
        creator_email: formData.get("email"),
    };
};
