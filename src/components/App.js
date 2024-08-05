import React, { useEffect, useState } from 'react';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((data) => {
                setDogs([data.message]);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {dogs.length > 0 &&
                dogs.map((dog, index) => (
                    <img key={index} src={dog} alt="A Random Dog" />
                ))}
        </div>
    );
};

export default App;