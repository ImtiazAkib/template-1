import React, { useState } from "react";
import "./Accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const handleId = (id) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };
  return (
    <div className="container-accordion">
      <div className="my-accordion">
        <div>
          <div className="accordion-single-item">
            <div className="title" onClick={() => handleId(1)}>
              <h4>Accordion Item #1</h4>
              <span>{selected === 1 ? "-" : "+"}</span>
            </div>
            <div
              className={selected === 1 ? "content-show" : "accordion-content"}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                aut rem incidunt cumque aliquid dignissimos explicabo obcaecati,
                quibusdam repellat placeat.
              </p>
            </div>
          </div>
          <div className="accordion-single-item">
            <div className="title" onClick={() => handleId(2)}>
              <h4>Accordion Item #2</h4>
              <span>{selected === 2 ? "-" : "+"}</span>
            </div>
            <div
              className={selected === 2 ? "content-show" : "accordion-content"}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                aut rem incidunt cumque aliquid dignissimos explicabo obcaecati,
                quibusdam repellat placeat.
              </p>
            </div>
          </div>
          <div className="accordion-single-item">
            <div className="title" onClick={() => handleId(3)}>
              <h4>Accordion Item #3</h4>
              <span>{selected === 3 ? "-" : "+"}</span>
            </div>
            <div
              className={selected === 3 ? "content-show" : "accordion-content"}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                aut rem incidunt cumque aliquid dignissimos explicabo obcaecati,
                quibusdam repellat placeat.
              </p>
            </div>
          </div>
          <div className="accordion-single-item">
            <div className="title" onClick={() => handleId(4)}>
              <h4>Accordion Item #4</h4>
              <span>{selected === 4 ? "-" : "+"}</span>
            </div>
            <div
              className={selected === 4 ? "content-show" : "accordion-content"}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                aut rem incidunt cumque aliquid dignissimos explicabo obcaecati,
                quibusdam repellat placeat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
