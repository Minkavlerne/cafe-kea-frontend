import { Coffee } from "../services/entityFacade";

interface BuyMenuProps {
    title: string;
    coffees?: Coffee[];
    //ticketCards?: TicketCard[];
}

export default function BuyMenu(props: BuyMenuProps) {
    return (
        <div className="pt-20">
            <h1 className="text-center font-bold pt-2 pb-10 text-xl">{props.title}</h1>
            {props.coffees && (
                <div className="grid grid-cols-4 gap-4 px-8">
                    {props.coffees.map((c) => {
                        return (
                            <div className="flex flex-col items-center justify-center px-5 bg-filler-kea hover:bg-green-700 text-white font-bold py-2 rounded" key={c.id}>
                                <h2>{c.name}</h2>
                                <p>{c.price} kr.</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
