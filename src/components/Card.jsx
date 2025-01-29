import { useState, useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Card = ({ data }) => {
    const { base_img_url } = useGlobalContext();
    const flags = ["it", "en"];
    const [flag, setFlag] = useState(null);

    useEffect(() => {
        setFlag(data.original_language);
    }, [data]);

    const imageUrl = `${base_img_url}${data.poster_path}`;

    return (
        <div className="card-container">
            <div className="card-content">
                <img
                    className="card-image"
                    src={imageUrl}
                    alt={`${data.title || data.name} poster`}
                />
                <div className="card-overlay">
                    <h5 className="card-title">{data.title || data.name}</h5>
                    <p className="card-text">{data.overview}</p>
                    <div className="original-language">
                        Lingua:
                        {flags.includes(flag) ? (
                            <img
                                src={`/img/${flag}.png`}
                                alt={flag}
                                className="flag-icon"
                            />
                        ) : (
                            <span>{flag}</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;



