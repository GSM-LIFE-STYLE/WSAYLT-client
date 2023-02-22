import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Main.scss';

function Main() {
  const [id, setId] = useState([]);
  const [scroll, setScroll] = useState(0);
  const movewidth = 700;
  const cts = document.querySelector('.contents');
  useEffect(e => {
    let data = ["https://youtu.be/V6TEcoNUmc8",
      "https://youtu.be/7goHyFzym2I",
      'https://youtu.be/_R0p00lv790',
      'https://youtu.be/SK6Sm2Ki9tI',
      'https://youtu.be/BG3A1P4Zmt4',
      'https://youtu.be/N04Dyh8eNIk',
      'https://youtu.be/BUfCW_cmCNQ',
      'https://youtu.be/jhOVibLEDhA',
      'https://youtu.be/i0p1bmr0EmE',
      'https://youtu.be/A1tZgPAcpjE',
      'https://www.youtube.com/watch?v=PEnJbjBuxnw',
      'https://youtu.be/EtiPbWzUY9o',
      'https://youtu.be/rMG1YtxHLB8',
      'https://youtu.be/Amq-qlqbjYA',
    ];
    for (let i = 0; i < data.length; i++) {
      data[i] = data[i].slice(-11);
    }
    setId(data);
  }, []);
  return <div className="main">
    <div className="header">
      <div className="Logo">
        <div className="img" />
        <span>LOGO</span>
      </div>
      <div className="inlogo">
        <div className="Nav">
          <Link to='/main'>홈</Link><div className="gap" />
          <Link to='/write'>글쓰기</Link><div className="gap" />
          <Link to='/mypage'>마이페이지</Link>
        </div>
        <div className="Login">
          <Link to='/login'><span>로그인</span></Link>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <Link to='/signup'><span>회원가입</span></Link>
        </div>
      </div>
    </div>
    <div className="imgbox">

    </div>
    <div className="Updated">
      <h3>최근 소식</h3>
      <div className="movebuttons">
        <button onClick={e => {
          if (scroll > movewidth) {
            setScroll(e => e - 500);
            cts.scrollLeft = scroll - movewidth;
          }
          else {
            setScroll(0);
            cts.scrollLeft = 0;
          }
        }}>←</button>
        <button onClick={e => {
          if (scroll < cts.scrollWidth + movewidth) {
            setScroll(c => c + 1);
            cts.scrollLeft = scroll + movewidth;
          }
          else {
            setScroll(cts.scrollWidth);
            cts.scrollLeft = cts.scrollWidth;
          }
        }}
        >→</button>
      </div>
      <div className="contwrap">
        <div className="contents" onScroll={e => setScroll(e.target.scrollLeft)}>
          {id.map((id, n) => <Box key={n} id={id} n={n} />)}
        </div>
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
      <h2>{('0' + (n + 1).toString()).toString().slice(-2)}.</h2>
      <p>&nbsp;<b>{data.title.length > 18 ? data.title.slice(0, 18) + '...' : data.title}</b></p>
      <p>&nbsp;<b>{data.author_name}</b></p>
    </div>
    <div className="img">
      <img src={data.thumbnail_url} alt="Thumbnail" />
    </div>
  </div>;
}

export default Main;