import { useState } from "react";

////////////////////////////////////////////////////////////////////////////////////////////////
//START/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

export function ProductRow() {
  return <div>ProductRow</div>;
}

export function ProductCategoryRow() {
  return <div>ProductCategoryRow</div>;
}

export function ProductTable() {
  return <div>ProductTable</div>;
}

export function SearchBar({ handleChange, searchValue, checkedStatus }) {
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={searchValue}
        placeholder="Search..."
      ></input>
      <div>
        <input type="checkbox" onClick={checkedStatus}></input>
        <span>Only show products in stock</span>
      </div>
    </div>
  );
}

export function FilterableProductTable({ products }) {
  const [searchValue, setSearchValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const checkedStatus = () => {
    console.log("isChecked=>", "box checked!");
    return !isChecked && setIsChecked(true);
  };

  function validate() {
    if (document.querySelector(".sch").checked) {
      alert("checked");
    } else {
      alert("You didn't check it! Let me check it for you.");
    }
  }
  validate();

  return (
    <div>
      <SearchBar
        className="sch"
        searchValue={searchValue}
        handleChange={handleChange}
        isChecked={checkedStatus}
      ></SearchBar>
      <ProductTable products={products}></ProductTable>
    </div>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  return (
    <>
      <FilterableProductTable products={PRODUCTS} />
    </>
  );
}

export default App;
