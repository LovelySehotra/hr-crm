import React, { useEffect, useState } from 'react';
import './ChatMessage.css'; // Import your CSS styles here

const commentsData = [
  {
    name: "Ligia dos Santos",
    profilePic: "https://i.ibb.co/MVJHGkC/g.webp",
    comment: "I finally fit into my old clothes again! Best feeling ever 😍",
    time: "3 d",
    likes: 3,
  },
  {
    name: "Marta Ribeiro",
    profilePic: "https://i.ibb.co/frSP8QJ/d.webp",
    comment: "Does it work for guys too? 😅",
    time: "4 d",
    likes: 4,
  },
  {
    name: "Simone Silva",
    profilePic: "https://i.ibb.co/JC5D5F7/e.webp",
    comment: "Yup, Marta! Works for anyone tryin to lose weight.",
    time: "3 d",
    likes: 3,
  },
  {
    name: "Marcelo Essado",
    profilePic: "https://i.ibb.co/LJx9SHT/h.webp",
    comment: "Makes all the difference!",
    time: "2 d",
    likes: 4,
  },
];

const ChatMessage = () => {
  const [totalComments, setTotalComments] = useState(0);

  useEffect(() => {
    const total = commentsData.length;
    setTotalComments(total);
  }, []);

  return (
    <section className="aa0">
      <div className="ah2">
        <div className="ah0">
          <div className="af9 chatcontainer">
            {commentsData.map((comment, index) => (
              <div className="af7 chatmessage" key={index}>
                <div className="ag5 message">
                  <img
                    src={comment.profilePic}
                    height="56"
                    width="56"
                    title="Profile Picture"
                    alt={`Profile Picture of ${comment.name}`}
                  />
                  <div className="ac2">
                    <div className="ac5" title="Facebook's comment">
                      <p className="ac4">{comment.name}</p>
                      <p className="ac3">{comment.comment}</p>
                    </div>
                    <div className="ac1">
                      <u>{comment.time}</u>
                      <u>Like</u>
                      <u>Reply</u>
                      <span className="ac0">
                        <u>{comment.likes}</u>
                      </span>
                    </div>
                  </div>

                </div>
                <div className='replyBox'>
                  <div className="ag5 message reply">
                    <img
                      src={comment.profilePic}
                      height="56"
                      width="56"
                      title="Profile Picture"
                      alt={`Profile Picture of ${comment.name}`}
                    />
                    <div className="ac2">
                      <div className="ac5" title="Facebook's comment">
                        <p className="ac4">{comment.name}</p>
                        <p className="ac3">{comment.comment}</p>
                      </div>
                      <div className="ac1">
                        <u>{comment.time}</u>
                        <u>Like</u>
                        <u>Reply</u>
                        <span className="ac0">
                          <u>{comment.likes}</u>
                        </span>
                      </div>
                    </div>

                  </div>
                  <div className='ag6 connector' ></div>

                </div>
                <div className='replyBox'>
                  <div>
                    <div className="ag5 message reply">
                      <img
                        src={comment.profilePic}
                        height="56"
                        width="56"
                        title="Profile Picture"
                        alt={`Profile Picture of ${comment.name}`}
                      />
                      <div className="ac2">
                        <div className="ac5" title="Facebook's comment">
                          <p className="ac4">{comment.name}</p>
                          <p className="ac3">{comment.comment}</p>
                        </div>
                        <div className="ac1">
                          <u>{comment.time}</u>
                          <u>Like</u>
                          <u>Reply</u>
                          <span className="ac0">
                            <u>{comment.likes}</u>
                          </span>
                        </div>
                      </div>

                    </div>
                    <div className='ag6 connector' ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ag4">Total Comments: {totalComments}</div>
    </section>
  );
};

export default ChatMessage;