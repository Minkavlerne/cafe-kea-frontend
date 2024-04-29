import { getAllCoffee } from "../services/apiFacade";
import { useEffect, useState } from "react";
import { Coffee } from "../services/entityFacade";

export default function Menu() {
    const [coffee, setCoffee] = useState<Coffee[]>([]);

    useEffect(() => {
        getAllCoffee().then((data) => setCoffee(data));
    }, []);

    return (
        <div className="bg-filler-kea text-text-kea  p-4">
            <h1>Menu</h1>
            {coffee &&
                coffee.map((c) => {
                    return (
                        <div key={c.id}>
                            <h2>{c.name}</h2>
                            <p>{c.price}</p>
                        </div>
                    );
                })}
        </div>
    );
}
