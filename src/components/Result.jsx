import Card from "./Card";

const Result = ({ title, data = [] }) => {
    return (
        <div className="container">
            <h2 className="text-light">{title}</h2>
            {Array.isArray(data) && data.length > 0 ? (
                <div className="row">
                    {data.map((item) => (
                        <div key={item.id} className="col custom-col">
                            <Card data={item} />
                        </div>
                    ))}
                </div>
            ) : (
                <p>Nessun risultato trovato</p>
            )}
        </div>
    );
};

export default Result;


