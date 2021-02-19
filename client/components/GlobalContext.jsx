import React, { useState, useContext } from 'react';

const TestContext = React.createContext();

const TestProvider = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

  const testTheConsole = () => {
    console.log("We are in the Global context line 10")
  };

  return (
    <TestContext.Provider
      value={{
        testTheConsole
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(TestContext);
};

export { TestContext, TestProvider };