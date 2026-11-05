
import { Link, useParams } from "react-router-dom";
import "./QuestionDetail.css";

const sampleQuestion = {
  title: "What are the best resources to learn Data Structures and Algorithms?",
  description:
    "I'm looking for beginner-friendly resources to improve my problem-solving skills. I already know basic programming and want to become better at solving coding problems. What resources, websites, or learning paths would you recommend?",
  category: "Programming",
  author: "Anonymous",
  time: "2 hours ago",
  tags: ["DSA", "Learning", "Programming"],
};

const sampleAnswers = [
  {
    author: "Student One",
    time: "1 hour ago",
    content:
      "I recommend starting with the fundamentals of arrays, linked lists, stacks, and queues. Practice each topic with simple problems before moving to more advanced algorithms.",
  },
  {
    author: "Student Two",
    time: "45 minutes ago",
    content:
      "Try solving problems regularly on platforms like LeetCode. Focus on understanding the approach rather than memorizing solutions.",
  },
];

function QuestionDetail() {
  const { id } = useParams();

  return (
    <div className="detail-page">
      <header className="detail-header">
        <Link to="/" className="detail-logo">
          UNI<span>net</span>
        </Link>
        <Link to="/" className="detail-back">
          Back to questions
        </Link>
      </header>

      <main className="detail-main">
        <div className="detail-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Question #{id}</span>
        </div>

        <article className="detail-question">
          <span className="detail-category">
            {sampleQuestion.category}
          </span>

          <h1>{sampleQuestion.title}</h1>

          <div className="detail-meta">
            <span>Asked by {sampleQuestion.author}</span>
            <span>{sampleQuestion.time}</span>
          </div>

          <p className="detail-description">
            {sampleQuestion.description}
          </p>

          <div className="detail-tags">
            {sampleQuestion.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </article>

        <section className="detail-answers">
          <div className="detail-answers-heading">
            <h2>Answers</h2>
            <span>{sampleAnswers.length} responses</span>
          </div>

          {sampleAnswers.map((answer, index) => (
            <article className="detail-answer-card" key={index}>
              <div className="answer-meta">
                <strong>{answer.author}</strong>
                <span>{answer.time}</span>
              </div>
              <p>{answer.content}</p>
            </article>
          ))}
        </section>

        <div className="detail-note">
          <p>
            Want to share your answer? Sign in to join the discussion.
          </p>
          <Link to="/login">Log in to answer</Link>
        </div>
      </main>
    </div>
  );
}

export default QuestionDetail;
