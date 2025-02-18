import { useState } from 'react';
import Add from '../assets/custom-icons/Add';
import Subtract from '../assets/custom-icons/Subtract';

const Accordionitem = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=''>
      {data.map((item, index) => (
        <div className='xui-mt-1-half xui-cursor-pointer bg-black-secondary xui-p-1-half xui-bdr-rad-half' key={index} onClick={() => toggleItem(index)}>
          <div className='xui-d-flex xui-flex-ai-center xui-pos-relative'>
            <p className='xui-lg-font-sz-110 xui-font-sz-90 xui-font-w-500 ' style={{"width": "calc(100% - 22px)"}}>{item.question}</p>
            {activeIndex !== index &&
            <Add />
            
            }
            {activeIndex === index &&
              <Subtract />
            }
        
          </div>
          {activeIndex === index &&
           <div className='xui-pos-relative'>
              <p className='color-inactive-grey xui-mt-1 xui-lg-font-sz-85 xui-font-sz-75 xui-w-fluid-100 xui-lg-w-fluid-70 xui-line-height-1-half'>{item.answer}</p>
           </div>
           }
        </div>
      ))}
    
    </div>
  );
};

export default Accordionitem;