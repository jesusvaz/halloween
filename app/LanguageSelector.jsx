"use client"
import { useState } from 'react';
import { useTheme } from "./components/theme-provider";

export default function LanguageSwitcher() {
  const theme = useTheme();
  const [language, setLanguage] = useState('en');
 
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    theme.colors.lang == e.target.value;
  };



  return (
    <div className="w-full max-w-xs mx-auto p-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
      {language === "english"?"Select Language:":"Seleciionar Idioma"}
      </label>
      <select
        value={language}
        onChange={handleLanguageChange}
        className="block w-full p-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="en">English</option>
        <option value="sp">Spanish</option>
      </select>

      <div className="mt-4">
        {language === 'English' ? (
          <div>
            <h2 className="text-xl font-bold">Welcome</h2>
          
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold">Bienvenido</h2>

          </div>
        )}
      </div>
    </div>
  );
}
