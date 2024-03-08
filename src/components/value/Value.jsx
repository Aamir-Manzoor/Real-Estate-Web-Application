import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./value.css";
import Main2Img from "../../assets/main3.jpg";
import data from "../../utils/accordion.js";
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
          <span className="orangeText">Our Value</span>
          <span className="primaryText">value we give to you</span>
          <span className="secondaryText">
            we always help you find the right property
            <br />
            Best Service you can get is from us related to buying the best
            property that will have great value in future.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem key={i} uuid={i} className="accordionItem">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="flexCenter icon">{item.icon}</div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
