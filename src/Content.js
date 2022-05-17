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
          <h3>a</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nulla!</p>
        </div>

        <div className="feature">
          <img src={icon2} alt="" />
          <h3>c</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nulla!</p>
        </div>

        <div className="feature">
          <img src={icon3} alt="" />
          <h3>b</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nulla!</p>
        </div>

        <div className="feature">
          <img src={icon4} alt="" />
          <h3>a</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nulla!</p>
        </div>

      </div>

    </main>
  );
}

export default Content;