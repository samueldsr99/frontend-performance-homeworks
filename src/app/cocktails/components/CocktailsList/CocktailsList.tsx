import Image from "next/image";

import styles from "./styles.module.css";

interface GetCockTailsResponse {
  drinks:
    | {
        idDrink: string;
        strDrink: string;
        strDrinkThumb: string;
        strIngredient1: string;
        strIngredient2: string;
        strIngredient3: string;
        strIngredient4: string;
        strIngredient5: string;
        strIngredient6: string;
        strIngredient7: string;
        strIngredient8: string;
        strIngredient9: string;
        strIngredient10: string;
      }[]
    | null;
}

const getCocktailsBySearchTerm = async (term: string) => {
  const data: GetCockTailsResponse = await fetch(
    `https://thecocktaildb.com/api/json/v1/1/search.php?s=${term}`,
    {
      next: {
        tags: ["cocktails", term],
      },
    }
  ).then((r) => r.json());

  return data;
};

export default async function CocktailsList({ term }: { term: string }) {
  const cocktails = await getCocktailsBySearchTerm(term);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
      {cocktails.drinks === null ? (
        <p>No cocktails found</p>
      ) : (
        cocktails.drinks.map((cocktail) => (
          <div key={cocktail.idDrink} className={styles.root}>
            <Image
              className={styles.image}
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              width={300}
              height={200}
            />
            <div className={styles.description}>
              <h2 className={styles.ingredientTitle}>{cocktail.strDrink}</h2>
              <p className={styles.ingredientsTitle}>Ingredients:</p>
              <ul className={styles.ingredientsContainer}>
                {Array.from({ length: 10 }).map((_, index) => {
                  const ingredient =
                    cocktail[
                      `strIngredient${index + 1}` as keyof typeof cocktail
                    ];

                  if (!ingredient) {
                    return null;
                  }

                  return (
                    <li key={index} className={styles.ingredient}>
                      {ingredient}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
