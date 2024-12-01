import { useState } from 'react';

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet
        commodi fuga nam aut veritatis cupiditate in odio molestiae alias
        deserunt laborum adipisci perspiciatis, dolorem porro. Repudiandae
        dolorem quae quibusdam. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Tempora enim eos, fugit laboriosam adipisci nemo
        exercitationem. Ipsa iure laborum animi perferendis ipsum illum
        laudantium aperiam debitis fugiat praesentium! Odit, vero.`;

const ContentAdder = () => {
  const [contentAdded, setContentAdded] = useState(0);

  return (
    <div>
      {new Array(contentAdded).fill(text).map((content, index) => (
        <p key={index}>{content}</p>
      ))}
      <div>
        <button
          className="bg-gray-300 px-4 py-1 text-sm mt-3 hover:bg-gray-200"
          onClick={() => setContentAdded((prev) => prev + 1)}
        >
          Add Content
        </button>
      </div>
    </div>
  );
};

export default ContentAdder;
