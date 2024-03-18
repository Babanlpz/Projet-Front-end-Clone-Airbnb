import Categories from "../components/Categories";
import Nav from "../components/Nav";
import Search from "../components/Search";
import React from "react";
import CardList from "../components/CardList";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Nav />
      <Search />
      <Categories />
      <CardList />
    </>
  );
}