import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  // let [글제목1, a] = useState("남자 코트 추천");
  // let [글제목2, b] = useState("강남 맛집 추천");
  // let [글제목3, c] = useState("파이썬 독학");
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 맛집 추천",
    "파이썬 독학",
  ]);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>설라 블로그</h4>
      </div>
      <button
        onClick={() => {
          let sort = [...글제목].sort();
          글제목변경(sort);
        }}
      >
        정렬버튼
      </button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          글제목변경(copy);
        }}
      >
        글수정
      </button>
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉++);
            }}
          >
            👍
          </span>
          {따봉}
        </h4>
        <p>8월 3일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>8월 3일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => setModal(true)}>{글제목[2]}</h4>
        <h4
          onClick={() => {
            modal === false ? setModal(true) : setModal(false);
          }}
        >
          {글제목[2]}
        </h4>

        <p>8월 3일 발행</p>
      </div>
      {modal === true ? <Modal /> : null}

      <Hi></Hi>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

let Hi = () => {
  return (
    <div>
      <p>졸리다</p>
    </div>
  );
};

export default App;
