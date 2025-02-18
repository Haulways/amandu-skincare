/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */

import Accordionitem from "./Accordionitem";
const FAQ = () => {
    const faqData = [
        {
          question: `What is Amandu Beauty?`,
          answer: `Amandu Beauty offers luxurious skincare, fragrance, and wellness products crafted with care, blending nature and science for visible results.`
        },
        {
          question: `What types of products do you offer?`,
          answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aspernatur reiciendis quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
          question: `Are your products cruelty-free?`,
          answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aspernatur reiciendis quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.`
        },
        {
          question: `Are your products safe for sensitive skin?`,
          answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aspernatur reiciendis quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.`
        },
        {
          question: `Are your products eco-friendly?`,
          answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aspernatur reiciendis quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.`
        }
    ];

    return (
        <>
        <section className="xui-py-3 xui-container xui-overflow-y-hidden">
            <h3 className="xui-lg-font-sz-200 xui-text-center xui-font-sz-200 xui-mt-1 xui-font-w-500">Frequently Asked Questions</h3>
            <Accordionitem data={faqData}/>
        </section>
        </>
    )
};

export default FAQ;