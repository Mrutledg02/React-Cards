import { useState, useEffect } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

/** Custom hook for flipping a card. Returns [isFacingUp, flipCardFn] */
function useFlip() {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  };
  return [isFacingUp, flipCard];
}

/** useLocalStorage: Syncs state with localStorage */
function useLocalStorage(key, initialValue) {
  // On first load, check localStorage or use initialValue
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : initialValue;
  });

  // Anytime storedValue changes, update localStorage
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

/** Custom hook for fetching and storing API responses.
 * Accepts a baseUrl and returns:
 * - an array of response data
 * - a function to append new data from the API
 */
function useAxios(baseUrl, formatFn = data => data, storageKey = "data") {
  const [responses, setResponses] = useLocalStorage(storageKey, []);

  const addResponseData = async (urlSuffix = "") => {
    const response = await axios.get(`${baseUrl}${urlSuffix}`);
    const formattedData = formatFn(response.data);
    setResponses(data => [...data, { ...formattedData, id: uuid() }]);
  };

  const clearResponses = () => setResponses([]);

  return [responses, addResponseData, clearResponses];
}

export { useFlip, useAxios, useLocalStorage };