import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

const Content = () => {
  return (
    <main>
      <div className="react-features">
        <div className="feature">
          <img src={icon1} alt="" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div className="feature">
          <img src={icon2} alt="" />
          <h3>Component-Based</h3>
          <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
        </div>

        <div className="feature">
          <img src={icon3} alt="" />
          <h3>Single-Way</h3>
          <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
        </div>

        <div className="feature">
          <img src={icon4} alt="" />
          <h3>Introducing JSX</h3>
          <p>This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a syntax extension to JavaScript.</p>
        </div>

      </div>

    </main>
  );
}

export default Content;