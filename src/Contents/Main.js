import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Main.scss';

function Main() {
  const [id, setId] = useState([]);
  const [scroll, setScroll] = useState();
  useEffect(e => {
    let data = ["https://youtu.be/V6TEcoNUmc8",
      "https://youtu.be/7goHyFzym2I",
      'https://youtu.be/_R0p00lv790',
      'https://youtu.be/SK6Sm2Ki9tI',
      'https://youtu.be/BG3A1P4Zmt4',
      'https://youtu.be/N04Dyh8eNIk',
      'https://youtu.be/BUfCW_cmCNQ',
    ];
    for (let i = 0; i < data.length; i++) {
      data[i] = data[i].slice(-11);
    }
    setId(data);
  }, []);
  return <div className="main">
    <Link to='/login'><button>Log in</button></Link>
    <Link to='/signup'><button>Sign Up</button></Link>
    <div className="Emptybox">

    </div>
    <div className="Updated">
      <h3>최근 소식</h3>
      <div className="movebuttons">
        <button onClick={e => {
          if (scroll > 500) {
            setScroll(e => e - 500);
            document.querySelector('.contents').scrollLeft = scroll - 500;
          }
          else {
            setScroll(0);
            document.querySelector('.contents').scrollLeft = 0;
          }
        }}>←</button>
        <button onClick={e => {
          if (scroll + 500 < document.querySelector('.contents').scrollHeight) {
            setScroll(c => c + 1);
            document.querySelector('.contents').scrollLeft = scroll + 500;
          }
          else {
            setScroll(document.querySelector('.contents').scrollHeight);
            document.querySelector('.contents').scrollLeft = document.querySelector('.contents').scrollHeight;
          }
        }}
        >→</button>
      </div>
      <div className="contents" onScroll={e => setScroll(e.target.scrollLeft)}>
        {id.map((id, n) => <Box key={n} id={id} n={n} />)}
      </div>
    </div>
  </div >;
}

function Box({ id, n }) {
  const [data, setData] = useState([]);
  useEffect(e => {
    parsing();
    // eslint-disable-next-line
  }, []);
  const parsing = async () => {
    const URL_info = `https://noembed.com/embed?url=http://youtu.be/${id}`;
    const data = await (await fetch(URL_info)).json();
    setData(data);
    console.log(data);
  }
  return <div className={`box ${n + 1}`} onClick={() => { window.open(`http://youtu.be/${id}`) }} title={data.title + ' 듣기'}>
    <div className="text">
      <h2>{n + 1}.</h2>
      <p>&nbsp;<b>{data.title}</b></p>
      <p>&nbsp;<b>{data.author_name}</b></p>
    </div>
    <div className="img">
      <img src={data.thumbnail_url} alt="Thumbnail" />
    </div>
  </div>;
}

export default Main;