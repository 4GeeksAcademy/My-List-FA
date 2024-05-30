import React, { useState } from "react";

const Lista = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && inputValue.trim()) {
            setItems([...items, inputValue]);
            setInputValue("");
            setShowSuccessMessage(true);
            setTimeout(() => setShowSuccessMessage(false), 3000); 
        }
    };

    const handleDelete = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    return (
        <div className="container">
            {showSuccessMessage && (
                <div className="alert alert-success" role="alert">
                    <p>Tu tarea se ha guardado con éxito.</p>
                </div>
            )}
            <ul className="list-group">
                <h1>todos</h1>
                <li className="list-group-item">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="What needs to be done?"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                </li>
                {items.length === 0 && (
                    <div className={`list-group-item alert alert-warning ${items.length === 0 ? 'red-text' : ''}`}>
                        La lista está vacía.
                    </div>
                )}
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {item}
                        <button
                            className="btn btn-sm"
                            onClick={() => handleDelete(index)}
                        >
                            {hoveredIndex === index ? "x" : ""}
                        </button>
                    </li>
                ))}
                {items.length > 0 && (
                    <li className="list-group-item">
                        There {items.length === 1 ? 'is' : 'are'} {items.length} {items.length === 1 ? 'item' : 'items'} in the list.
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Lista;






