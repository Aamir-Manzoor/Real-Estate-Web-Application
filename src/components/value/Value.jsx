import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./value.css";
import Main2Img from "../../assets/main3.jpg";
const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* leftSide */}
        <div className="v-left">
          <div className="image-container">
            <img src={Main2Img} alt="Image" />
          </div>
        </div>

        {/* rightSide */}

        <div className="flexColStart v-right">
          <span>Our Value</span>
          <span>value we give to you</span>
          <span>
            we always help you find the right property
            <br />
            Best Service you can get is from us related to buying the best
            property that will have great value in future.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Value;
