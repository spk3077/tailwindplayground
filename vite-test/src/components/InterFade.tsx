import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

// function InterFade(props: Props){
function InterFade({items, heading, onSelectItem}: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            <h1>{heading}</h1>
            <ul>
                {items.map((item, index) => (
                    <li className={selectedIndex === index ? 'active' : 'inactive'}
                        key={item + "interfade"}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}


export default InterFade;