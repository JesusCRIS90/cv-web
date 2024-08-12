import { StringArray } from "./customTypes"


export async function loadJSONFile(filePath: string) {

    try {
        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(
                `Failed to fetch ${filePath}: ${response.status} ${response.statusText}`
            );
        }

        return await response.json();

    } catch (error) {

        console.error(`Error loading JSON file ${filePath}:`, error);

        throw error; // Re-throw the error for further handling if needed
    }
}

export async function fetchJSONFile(filePath: string) {
    try {
        const data = await loadJSONFile(filePath);
        // Handle the loaded JSON data here
        return data;
        // Perform other asynchronous operations if needed
    } catch (error) {
        console.error("Error:", error);
        return undefined;
    }
}

export function StringArray2LowerCase(arrayStrings: StringArray): StringArray {
    return arrayStrings.map((word) => word.toLowerCase());
  }