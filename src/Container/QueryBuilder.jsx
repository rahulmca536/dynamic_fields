import React, { useState } from "react";
import ANDFilter from "../Components/ANDFilter";
import ORFilter from "../Components/ORFilter";
import AppContainer from "./AppContainer";

const INIT_DATA = { all: [{ "or": [{ firstName: "" }] }] };

function App() {
    const [inputList, setInputList] = useState(INIT_DATA.all);

    // handle input change
    const handleInputChange = (e, index, i) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index].or[i].firstName = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = (index, i) => {
        const list = [...inputList];
        const newl = list[index].or;
        newl.splice(i, 1);
        setInputList(list);
    };

    // handle click event of the Remove card button
    const handlecardremoveClick = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = index => {
        const addlist = [...inputList];
        addlist[index].or.push({ firstName: "" })
        setInputList(addlist);
    };

    // handle click event of the Add Card button
    const handleAddarrClick = () => {
        setInputList([...inputList, { "or": [{ firstName: "" }] }]);
    };

    return (
        <div className="container">
                <div className="left-col">
      Left col
    </div>
            <div className="center-col">
            {/* <AppContainer inputList={inputList}> */}
            {inputList.map((card_data, index) => (
             <ANDFilter>
                    {card_data.or.map((or_data, i) => (
                            <ORFilter
                                index={i}
                                parentIndex={index}
                                handleInputChange={handleInputChange}
                                handleRemoveClick={handleRemoveClick}
                                handleAddClick={handleAddClick}
                                handleAddarrClick={handleAddarrClick}
                                handlecardremoveClick={handlecardremoveClick}
                                card_data={card_data}
                            />
                        ))}
                        </ANDFilter>
            ))}<br />
            <button >Save Changes</button>
        {/* </AppContainer> */}
            </div>

        </div>


    );
}

export default App;
