import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

function LoaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) {
    setIsLoading(true);
    return (
      <div className="container">
        <div>
          <FontAwesomeIcon icon="fa-regular fa-spinner" spin />
        </div>
      </div>
    );
  } else {
    setIsLoading(false);
  }

  return (
    <LoaderContext.Provider value={isLoading}>
      {children}
    </LoaderContext.Provider>
  );
}

function useLoader() {
  return useContext(LoaderContext);
}

export { LoaderProvider, useLoader };
