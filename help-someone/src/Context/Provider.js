import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './DataContext';

export default function Provider({ children }) {
const [ajuda,setAjuda] = useState([])

  const contextValue = {
   ajuda,
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      { children }
    </RecipesContext.Provider>
  );
}


