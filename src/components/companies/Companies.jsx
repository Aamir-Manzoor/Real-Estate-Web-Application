import './Companies.css'
import equinix from '../../assets/equinix.png';
import prologies from '../../assets/prologis.png';
import realty from '../../assets/realty.png';
import tower from '../../assets/tower.png';
const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerwidth flexCenter c-container">
        <img src={equinix} alt="" />
        <img src={prologies} alt="" />
        <img src={realty} alt="" />
        <img src={tower} alt="" />
      </div>
    </section>
  );
};

export default Companies;
