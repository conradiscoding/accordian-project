import { useState } from 'react';
import './style.css';

const data = [
  {
    id: '1',
    question: 'What are accordion components?',
    answer:
      'Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.',
  },
  {
    id: '2',
    question: 'What are they used for?',
    answer:
      'They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.',
  },
  {
    id: '3',
    question: 'Accordion as a musical instrument',
    answer:
      'The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.',
  },
  {
    id: '4',
    question: 'Can I create an accordion component with a different framework?',
    answer:
      'Yes of course, it is very possible to create an accordion component with another framework.',
  },
];

const Accordian = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [enableMulti, setEnableMulti] = useState(false);

  const handleSelect = (getCurrentId: string) => {
    if (enableMulti) {
      if (selected.includes(getCurrentId)) {
        setSelected(selected.filter((id) => id !== getCurrentId));
        return;
      }
      return setSelected([...selected, getCurrentId]);
    }

    if (selected.includes(getCurrentId)) {
      setSelected(selected.filter((id) => id !== getCurrentId));
      return;
    }
    setSelected([getCurrentId]);

    console.log(selected);
  };

  return (
    <div className="wrapper">
      <button
        className={'multiselect' + (enableMulti ? ' active' : '')}
        onClick={() => setEnableMulti(!enableMulti)}
      >
        Toggle Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              className="title"
              key={item.id}
              onClick={() => handleSelect(item.id)}
            >
              <h3>{item.question}</h3>
              <span>+</span>
              {selected.includes(item.id) && (
                <div className="content">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
