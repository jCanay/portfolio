import css from "./home.module.css";

export default function JMainSection({ titleId, title, children, ...props }) {
  return (
    <section className={`${css.mainSection}`}>
      <h2 id={titleId} className="scroll-mt-14">
        {title}
      </h2>
      <div {...props}>{children}</div>
    </section>
  );
}
