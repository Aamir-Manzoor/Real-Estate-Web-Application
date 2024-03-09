import './getStarted.css'
const GetStarted = () => {
  return (
    <section>
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started With Real Estate</span>
          <span className="secondaryText">
            Subscribe and find teh attractive quotes from us
            <br />
            Find your property soon
          </span>

          <button className='button'>
            <a href="mailto:dummyaamir89@gmail.com" className='link'>Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
