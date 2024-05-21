import Image from "next/image";
import SearchIcon from "./assets/search-icon.svg";

export default function SearchBar() {
  return (
    <>
      <div className="">
        <button className="bg-customBackground p-3 rounded-full hover:bg-customSecondary">
          <Image
            className="bg-transparent hover:rounded-full bg-customSecondary"
            src={SearchIcon}
            alt="SearchIcon"
          />
        </button>
      </div>
    </>
  );
}
