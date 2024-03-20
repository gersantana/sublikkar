import { createContext } from "react";

// CONTEXT
export const ECommerceContext = createContext();

// AQUI VARIABLES GLOBALES
const pruebaContext = "Vengo del contextoooo"


// PROVIDER
export const ECommerceProvider = ({ children }) => {

    const dataProvider = {
        // Variablesy funciones a proveer
        pruebaContext

    };

	return (
        <ECommerceContext.Provider value={dataProvider}>
            {children}
        </ECommerceContext.Provider>
    )
};
