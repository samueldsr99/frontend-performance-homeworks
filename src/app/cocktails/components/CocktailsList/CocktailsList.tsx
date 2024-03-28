"use client";
import Image from "next/image";
import { List, ListRowRenderer } from "react-virtualized";

import styles from "./styles.module.css";

interface Cocktail {
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
}

interface GetCockTailsResponse {
  drinks: Cocktail[] | null;
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

const rowRenderer: (cocktails: Cocktail[]) => ListRowRenderer =
  (cocktails: Cocktail[]) =>
  ({ index, style }) => {
    const cocktail = cocktails[index];

    return (
      <div key={index} className={styles.root} style={style}>
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
                cocktail[`strIngredient${index + 1}` as keyof typeof cocktail];

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
    );
  };

export default async function CocktailsList({ term }: { term: string }) {
  const cocktails = await getCocktailsBySearchTerm(term);

  return (
    <div>
      {cocktails.drinks === null ? (
        <p>No cocktails found</p>
      ) : (
        <List
          className={styles.list}
          rowRenderer={rowRenderer(cocktails.drinks)}
          height={560}
          rowCount={cocktails.drinks.length}
          rowHeight={250}
          width={1200}
        />
      )}
    </div>
  );
}
