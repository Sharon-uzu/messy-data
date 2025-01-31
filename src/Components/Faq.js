import React, { useState } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

// Define the Faq array before using it
const Faqs = [
  {
    id: 1,
    question: 'What is Meta Data?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quos quibusdam officiis qui blanditiis nam reprehenderit animi quia minus corporis expedita libero omnis voluptatibus nesciunt excepturi aperiam, dicta ex aut!',
  },
  {
    id: 2,
    question: 'What is Meta Data?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quos quibusdam officiis qui blanditiis nam reprehenderit animi quia minus corporis expedita libero omnis voluptatibus nesciunt excepturi aperiam, dicta ex aut!',
  },
  {
    id: 3,
    question: 'What is Meta Data?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quos quibusdam officiis qui blanditiis nam reprehenderit animi quia minus corporis expedita libero omnis voluptatibus nesciunt excepturi aperiam, dicta ex aut!',
  },
  {
    id: 4,
    question: 'What is Meta Data?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quos quibusdam officiis qui blanditiis nam reprehenderit animi quia minus corporis expedita libero omnis voluptatibus nesciunt excepturi aperiam, dicta ex aut!',
  },
  {
    id: 5,
    question: 'What is Meta Data?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quos quibusdam officiis qui blanditiis nam reprehenderit animi quia minus corporis expedita libero omnis voluptatibus nesciunt excepturi aperiam, dicta ex aut!',
  },
  {
    id: 6,
    question: 'What is Meta Data?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quos quibusdam officiis qui blanditiis nam reprehenderit animi quia minus corporis expedita libero omnis voluptatibus nesciunt excepturi aperiam, dicta ex aut!',
  },
  {
    id: 7,
    question: 'What is Meta Data?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quos quibusdam officiis qui blanditiis nam reprehenderit animi quia minus corporis expedita libero omnis voluptatibus nesciunt excepturi aperiam, dicta ex aut!',
  },
];

const Faq = ({ toggleModal }) => {
  // Initialize state to track the visibility of answers for each FAQ item
  const [open, setOpen] = useState(Array(Faqs.length).fill(false));

  const toggleAnswer = (index) => {
    setOpen(open.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <div className='faqs'>
      <h1>Frequently Asked Questions</h1>
      <div className='w-r'>
        {Faqs.map((item, index) => (
          <div className="ques" key={item.id}>
            <div onClick={() => toggleAnswer(index)}>
              {open[index] ? (
                <IoIosArrowDropup className='arr-icon' />
              ) : (
                <IoIosArrowDropdown className='arr-icon' />
              )}
            </div>
            <div>
              <h4>{item.question}</h4>
              {open[index] && <p>{item.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
