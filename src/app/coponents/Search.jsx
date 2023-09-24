"use client";
import React from "react";
import IconSearch from "../assets/icons/iconSearch";
import axios from "axios";

export default function Search() {
  const [input, setInput] = React.useState();
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const searchSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    logMovies();
  };

  async function logMovies() {
    // const response = await fetch(`https://api.themoviedb.org/3/${input}/movie?include_adult=false&language=en-US&page=1`);
    // const movies = await response.json();
    // console.log(movies);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/${input}/movie?include_adult=false&language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form
        className="sm:flex grow pb-6 md:pb-10 lg:mt-9"
        onSubmit={searchSubmit}
      >
        <IconSearch />
        <input
          type="text"
          className="md:heading-md md:placeholder:heading-md mx-4 w-full rounded-none border-b border-app-dark-blue
           bg-app-dark-blue pb-[8px] text-base font-light caret-app-red placeholder:text-base
            placeholder:text-app-placeholder focus:border-b focus:border-app-greyish-blue focus:outline-none text-app-pure-white"
          placeholder="Search for movies or TV series"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-capitalize flex items-center justify-center rounded-md
           bg-app-greyish-blue py-2 px-3 text-xs text-app-pure-white hover:bg-app-pure-white hover:text-app-dark-blue"
        >
          Search
        </button>
      </form>
    </>
  );
}
