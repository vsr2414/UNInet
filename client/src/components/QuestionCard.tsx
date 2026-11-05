
import { Link } from "react-router-dom";

export interface Question {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  answers: number;
  time: string;
  tags: string[];
}

interface QuestionCardProps {
  question: Question;
}

function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Link
      to={`/questions/${question.id}`}
      className="home-question-card"
      aria-label={`Open question: ${question.title}`}
    >
      <div className="question-top">
        <span className="question-category">{question.category}</span>
        <span className="question-time">{question.time}</span>
      </div>

      <h3>{question.title}</h3>

      <p className="question-description">{question.description}</p>

      <div className="question-tags">
        {question.tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>

      <div className="question-footer">
        <span className="question-author">
          <span className="author-avatar">U</span>
          {question.author}
        </span>

        <span className="question-answers">
          {question.answers} answers
        </span>
      </div>
    </Link>
  );
}

export default QuestionCard;
