import { useState } from "react";
import { useEffect } from "react";
import Modal from "./modal";

function Tree() {
  const [modalWord, setModalWord] = useState({ word: "jo" });
  const [visibility, setVisibility] = useState({
    ParentA: false,
    ParentB: false,
    ParentAChildren: false,
    ParentAChildren2: false,
    ParentBChildren: false,
    ParentBChildren2: false,
  });
  const expandAll = (event) => {
    const target = event.target;
    setModalWord((prevState) => {
      const newState = { ...prevState };
      newState.word = target.innerHTML;
      return newState;
    });

    setVisibility((pState) => {
      let pd = { ...pState };
      pd.ParentA = !pd.ParentA;
      pd.ParentB = !pd.ParentB;
      pd.ParentAChildren = false;
      pd.ParentAChildren2 = false;
      pd.ParentBChildren = false;
      pd.ParentBChildren2 = false;
      return pd;
    });
  };
  const onChildClick = (event) => {
    setModalWord((prevState) => {
      const newState = { ...prevState };
      newState.word = target.innerHTML;
      return newState;
    });

    const target = event.target;
    const id = target.id;
    setVisibility((prevState) => {
      const newUserObject = {
        ...prevState,
      };
      newUserObject[id] = !newUserObject[id];
      return newUserObject;
    });
  };
  useEffect(() => {
    if (visibility.ParentAChildren === true) {
      setVisibility((prevState) => {
        const newUserObject = {
          ...prevState,
        };
        newUserObject.ParentBChildren = false;
        return newUserObject;
      });
    }
  }, [visibility.ParentAChildren]);
  useEffect(() => {
    if (visibility.ParentBChildren === true) {
      setVisibility((prevState) => {
        const newUserObject = {
          ...prevState,
        };
        newUserObject.ParentAChildren = false;
        return newUserObject;
      });
    }
  }, [visibility.ParentBChildren]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ul>
              <h1
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={expandAll}
              >
                Root
              </h1>
              <li
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={onChildClick}
              >
                {visibility.ParentA && (
                  <ul>
                    <h3 id="ParentAChildren">ParentA</h3>
                    {visibility.ParentAChildren && (
                      <ul>
                        <li>Child A1</li>
                        <li>
                          <li id="ParentAChildren2">Child Parent A2</li>
                          <ul>
                            {visibility.ParentAChildren2 && (
                              <>
                                {" "}
                                <li>Child A21</li>
                                <li>Child A22</li>
                              </>
                            )}
                          </ul>
                        </li>
                      </ul>
                    )}
                  </ul>
                )}
              </li>
              <li
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={onChildClick}
              >
                {visibility.ParentB && (
                  <ul>
                    <h3 id="ParentBChildren">ParentB</h3>
                    {visibility.ParentBChildren && (
                      <ul>
                        <li>Child B1</li>
                        <li>Child B2</li>
                        <li>
                          <li id="ParentBChildren2">Child Parent B3</li>
                          <ul>
                            {visibility.ParentBChildren2 && (
                              <>
                                {" "}
                                <li>Child B21</li>
                                <li>Child B22</li>
                              </>
                            )}
                          </ul>
                        </li>
                      </ul>
                    )}
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <Modal words={modalWord.word}></Modal>
        </div>
      </div>
    </>
  );
}

export default Tree;
