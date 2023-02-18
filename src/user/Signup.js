import React, { useState } from "react";
import './Signup.scss';

function Signup() {
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(true);
  return <div className="Signup">
    <h1><b>지금<br /> 무슨 노래<br /> 듣고 있어요?</b></h1>
    <div>
      <input className="nickname" placeholder="닉네임을 입력해주세요."></input><br />
      <input className="pw" placeholder="비밀번호를 입력해주세요." type={visible1 && 'password'}></input>
      <button className="b1" onClick={() => setVisible1(e => !e)}>1</button>
      <input className="repw" placeholder="비밀번호를 다시 입력해주세요." type={visible2 && 'password'}></input>
      <button className="b2" onClick={() => setVisible2(e => !e)}>2</button>
      <button onClick={() => { }} className='check'>확인</button>
    </div>
  </div>;
}

export default Signup;