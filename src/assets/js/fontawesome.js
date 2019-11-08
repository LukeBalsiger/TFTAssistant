import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// List of Usable Icons
export const iconList = [faHeart];

// Function to add icons to library
// Had to make this a method and not call
// Directly to be able to load icons in test env
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function registerIcons() {
  library.add(iconList);
}

// Add Icons To Library
registerIcons();
