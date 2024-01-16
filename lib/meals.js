import sql from "better-sqlite3";

const db = sql("meals.db");

export function getMeals() {
    return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug) {
    return db.prepare(`SELECT * from meals WHERE slug = ?`).get(slug);
}
