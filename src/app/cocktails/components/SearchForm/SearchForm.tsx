"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Search cocktails"
      />
      <button type="submit">Search</button>
    </form>
  );
}
