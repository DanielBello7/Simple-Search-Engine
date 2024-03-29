import { useData } from "../context/DataContext"

export default function Footer() {
  const { isDarkMode } = useData();

  return (
    <footer className={`${isDarkMode ? "text-white" : "text-black"} container mx-auto flex flex-row justify-between items-center py-3 px-2 md:px-2 lg:px-2`}>
      <h1 className="font-bold text-xl">finder</h1>
      <p className="text-sm">©2022 finder. All rights reserved</p>
    </footer>
  );
}