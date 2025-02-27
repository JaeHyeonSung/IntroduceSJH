import "./index.css";
import Introduction from "../Introduction";
function MainContents() {
  return (
    <div className="MainContentsMain">
      <article className="scroller">
        <section className="section">
          <Introduction />
        </section>
        <section className="section">학력사항</section>
        <section className="section">Section3</section>
        <section className="section">Section4</section>
        <section className="section">Section5</section>
        <section className="section">Section6</section>
        <section className="section">Section7</section>
        <section className="section">Section8</section>
      </article>
    </div>
  );
}
export default MainContents;
