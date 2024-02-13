import React, { createContext, useContext, useState } from 'react';

const ActivitiesContext = createContext();

export const useActivities = () => useContext(ActivitiesContext);

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  return (
    <ActivitiesContext.Provider value={{ activities, setActivities }}>
      {children}
    </ActivitiesContext.Provider>
  );
};