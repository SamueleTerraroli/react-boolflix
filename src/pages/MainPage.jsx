import React, { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Result from "../components/Result";

const MainPage = ({ searchTerm }) => {
    const { fetchData, searchResults } = useGlobalContext();

    useEffect(() => {
        const fetchDataWithTerm = (term) => {
            fetchData('movie', term);
            fetchData('tv', term);
        };

        if (searchTerm) {
            fetchDataWithTerm(searchTerm);
        } else {
            fetchDataWithTerm('Breaking Bad');
        }
    }, [searchTerm]);

    return (
        <div>
            <Result title='Film' data={searchResults.movie} />
            <Result title='Serie TV' data={searchResults.tv} />
        </div>
    );
};

export default MainPage;


