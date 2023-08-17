
  export const HeadingFormat = (key) => {
    if(key && typeof key=="string")
    return key.split("_").map((str) => str.charAt(0).toUpperCase() + str.slice(1)).join(" ");
    return key
  };
