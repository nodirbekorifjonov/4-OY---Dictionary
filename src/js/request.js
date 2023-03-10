import loaderToggle from "./loader";
import { wordPlayFunc } from "./mode";

const request = async (resource, word) => {
  loaderToggle(true);
  const req = await fetch(resource + word);
  if (!req.ok) {
    loaderToggle(false);
    throw new Error("SOmething went wrong!");
  }
  const data = await req.json();
  loaderToggle(false);

  return data;
};

export default request;
