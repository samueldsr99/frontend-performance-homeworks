"use client";

import { Suspense } from "react";
import CocktailsList from "./components/CocktailsList";

import styles from "./styles.module.css";
import Skeleton from "./components/Skeleton/Skeleton";
import SearchForm from "./components/SearchForm";
import { useSearchParams } from "next/navigation";

function LoadingState() {
  return Array.from({ length: 10 }).map((_, index) => <Skeleton key={index} />);
}

export default function CocktailsPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("s");

  return (
    <div className={styles.root}>
      <h1 className={styles.pageTitle}>Cocktails</h1>
      <SearchForm />
      <div className={styles.pageContent}>
        <Suspense key={search} fallback={<LoadingState />}>
          <CocktailsList term={search ?? "margarita"} />
        </Suspense>
      </div>
    </div>
  );
}
