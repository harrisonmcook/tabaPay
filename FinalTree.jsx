import { useState } from "react";
import { useEffect } from "react";
import Modal from "./modal";
import BodyPage from "./bodyPage";
import dogservice from "./axios";
function Tree() {
  const [modalWord, setModalWord] = useState({ word: "Root" });
  const [img, setImg] = useState({
    src: "https://images.dog.ceo/breeds/poodle-miniature/n02113712_8487.jpg",
  });
  const [title, setTitle] = useState({ pageTitle: "Root" });
  const [visibility, setVisibility] = useState({
    ParentA: false,
    ParentB: false,
    ParentAChildren: false,
    ParentAchildren2: false,
    ParentBChildren: false,
    ParentBchildren2: false,
  });
  const expandAll = (event) => {
    const target = event.target;
    dogservice.getAllTeams().then((r) => {
      setImg((prevState) => {
        const newState = { ...prevState };
        newState.src = r.data.message;
        return newState;
      });
    });
    setModalWord((prevState) => {
      const newState = { ...prevState };
      newState.word = target.innerHTML;
      return newState;
    });
    setTitle((prevState) => {
      const newState = { ...prevState };
      newState.pageTitle = target.innerHTML;
      return newState;
    });
    setVisibility((pState) => {
      let pd = { ...pState };
      pd.ParentA = !pd.ParentA;
      pd.ParentB = !pd.ParentB;
      pd.ParentAChildren = false;
      pd.ParentAtchildren2 = false;
      pd.ParentBChildren = false;
      pd.ParentBchildren2 = false;
      return pd;
    });
  };
  const onChildClick = (event) => {
    dogservice.getAllTeams().then((r) => {
      setImg((prevState) => {
        const newState = { ...prevState };
        newState.src = r.data.message;
        return newState;
      });
    });
    setModalWord((prevState) => {
      const newState = { ...prevState };
      newState.word = target.innerHTML;
      return newState;
    });
    setTitle((prevState) => {
      const newState = { ...prevState };
      newState.pageTitle = target.innerHTML;
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
                className="437139"
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
                          <li id="ParentAchildren2">Child Parent A2</li>
                          <ul>
                            {visibility.ParentAchildren2 && (
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
                          <li id="ParentBchildren2">Child Parent B3</li>
                          <ul>
                            {visibility.ParentBchildren2 && (
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
          <div className="col-6">
            <BodyPage pageTitle={title.pageTitle} img={img.src} />
          </div>

          <Modal words={modalWord.word}></Modal>
        </div>
      </div>
    </>
  );
}

export default Tree;
