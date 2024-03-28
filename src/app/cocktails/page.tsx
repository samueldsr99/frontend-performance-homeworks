import { Suspense } from "react";
import CocktailsList from "./components/CocktailsList";

import styles from "./styles.module.css";

export default async function CocktailsPage() {
  return (
    <div className="">
      <h1 className={styles.pageTitle}>Cocktails</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <Suspense fallback={<>loading...</>}>
          <CocktailsList />
        </Suspense>
      </div>
    </div>
  );
}
