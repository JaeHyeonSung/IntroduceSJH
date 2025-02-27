import "./index.css";
function Introduction() {
  return (
    <div className="IntroductionMain">
      <div>인적사항</div>
      <div className="InfoDatas">
        <img src="sjh.jpg" className="img"></img>
        <div className="Info">
          <h3>이름 : 성재현</h3>
          <h3>생년월일 : 2000.07.06</h3>
        </div>
      </div>
      <div className="contacts">
        <h4>Phone : 010-3020-6054</h4>
        <h4>Email : top91652@naver.com</h4>
      </div>
    </div>
  );
}
export default Introduction;
