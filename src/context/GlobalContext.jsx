import { createContext, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const api_key = import.meta.env.VITE_API_KEY;
    const base_api_url = import.meta.env.VITE_BASE_API_URL;
    const base_img_url = import.meta.env.VITE_IMG_BASE_URL;

    console.log('Base Image URL:', base_img_url);

    const initialSearchResults = {
        movie: [],
        tv: []
    };
    const [searchResults, setSearchResults] = useState(initialSearchResults);

    const fetchData = (param, query) => {
        const params = {
            api_key,
            query: query || 'Breaking Bad',
            language: 'it-IT',
        };

        setSearchResults(prev => ({ ...prev, [param]: [] }));

        console.log(`data for: ${param} ${query}`);
        axios.get(`${base_api_url}/search/${param}`, { params })
            .then(res => {
                const results = res.data.results;
                setSearchResults(prev => ({ ...prev, [param]: results }));
            })
            .catch(err => {
                console.log('Errore:', err.message);
            });
    };

    return (
        <GlobalContext.Provider value={{ fetchData, searchResults, base_img_url }}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
