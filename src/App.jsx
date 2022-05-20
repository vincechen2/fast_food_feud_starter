import * as React from "react";
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset";
import "./App.css";
import Chip from "./components/Chip/Chip.jsx";
import "./components/Chip/Chip.css";
import Header from "./components/Header/Header.jsx";
import Instructions from "./components/Instructions/Instructions.jsx";
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel.jsx";

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
};
// or this!
const { data, categories, restaurants } = createDataSet();

export function App() {
  let [category, setCategory] = React.useState(undefined);
  let [restaurant, setRestaurant] = React.useState(undefined);
  let [foodItem, setFoodItem] = React.useState(undefined);

  function filterData() {
    let filtered;
    filtered = data.filter((item) => {
      return item.food_category === category && item.restaurant === restaurant;
    });

    return filtered;
  }
  let nutrition = <div></div>;
  if (
    filterData().filter((item) => {
      return foodItem === item.item_name;
    }).length > 0
  ) {
    nutrition = (
      <NutritionalLabel
        item={filterData().filter((item) => {
          return foodItem === item.item_name;
        })}
      />
    );
  }
  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>

          {categories.map((item, index) => {
            let active = false;
            if (item === category) active = true;
            // Replaced p tags with chip component
            return (
              <Chip
                isActive={active}
                className="chip"
                label={item}
                key={index}
                setCategory={setCategory}
              />
            );
          })}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header
          title={appInfo.title}
          tagline={appInfo.tagline}
          description={appInfo.description}
        />
        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {restaurants.map((item, index) => {
              let active = false;
              if (item === restaurant) active = true;
              return (
                <Chip
                  isActive={active}
                  key={index}
                  label={item}
                  setRestaurant={setRestaurant}
                />
              );
            })}
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions instructions={appInfo.instructions.start} />
        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {filterData().map((item, index) => {
              let active = false;
              if (item.item_name === foodItem) active = true;
              return (
                <Chip
                  isActive={active}
                  label={item.item_name}
                  key={index}
                  setFoodItem={setFoodItem}
                />
              );
            })}
          </div>

          {/* NUTRITION FACTS */}
          {/* <NutritionalLabel /> */}

          <div className="NutritionFacts nutrition-facts">{nutrition}</div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  );
}

export default App;
