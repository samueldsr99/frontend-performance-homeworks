"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

import styles from "./styles.module.css";

export default function SearchForm() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = e.currentTarget.search.value;

    if (value) {
      router.push(`/cocktails?s=${value}`);
    } else {
      router.push(`/cocktails`);
    }
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <input
        id="search"
        className={styles.input}
        name="search"
        type="text"
        placeholder="Search cocktails"
      />
      <button className={styles.searchButton} type="submit">
        🔍
      </button>
    </form>
  );
}
