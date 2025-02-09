import { MouseEvent, useState } from "react";

function Message() {
    // JSX: JavaScript XML
    // This is actually JavaScript for React that creates an element
    const name = 'Josh';
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Kenya'
    ];

    // let selectedIndex = -1;
    // A hook allows us to use react features
    const arr = useState(-1);
    arr[0] // variable (selectedIndex)
    arr[1] // updater 
    
    const [selectedIndex, setSelectedIndex] = useState(-1);
    

    const handleClick = (event: MouseEvent) => console.log(event)

    // Array.map creates a new array based on the former
    // The <> means Fragment. React yells at you if you don't have a root div element hence you need to specify the XML is a fragment
    return (
        <> 
            <h1>Hello {name}</h1>
            {items.length === 0 ? <p>No Items</p> : null}
            <ul className="color-green">
                {items.map((item, index) => 
                    (<li className={selectedIndex === index ? 'active' : 'inactive'}
                        key={item + "message"} 
                        // onClick={(event) => 
                        //     console.log(item, index)
                        // }
                        onClick={() => {setSelectedIndex(index);}}
                    >
                        {item}
                    </li>)
                )}
                <li onClick={handleClick}>Doggo</li>
            </ul>
        </>
    );
}

// Export it so others can use it
export default Message;