import { getAllCoffee } from "../services/apiFacade";
import { useEffect, useState } from "react";
import { Coffee } from "../services/entityFacade";

export default function Menu() {
    const [coffee, setCoffee] = useState<Coffee[]>([]);

    useEffect(() => {
        getAllCoffee().then((data) => setCoffee(data));
    }, []);

    return (
        <div className="bg-background-kea text-text-kea p-4 ">
            <h1 className="text-center text-[30px] font-bold">Menu</h1>
            {coffee &&
                coffee.map((c) => {
                    return (
                        <div className="text-center flex justify-between p-2" key={c.id}>
                            <h2>{c.name}</h2>
                            <p> ................................................... </p>
                            <p>{c.price} kr.</p>
                        </div>
                    );
                })}
        </div>
    );
}
