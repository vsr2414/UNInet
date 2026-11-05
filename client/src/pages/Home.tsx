
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Navbar";
import QuestionCard, { type Question } from "../components/QuestionCard";

const questions: Question[] = [
  {
    id: 1,
    title: "What are the best resources to learn Data Structures and Algorithms?",
    description:
      "I'm looking for beginner-friendly resources to improve my problem-solving skills.",
    category: "Programming",
    author: "Anonymous",
    answers: 12,
    time: "2 hours ago",
    tags: ["DSA", "Learning", "Programming"],
  },
  {
    id: 2,
    title: "How do you manage university assignments and personal projects?",
    description:
      "I sometimes struggle to balance coursework with personal development. Any advice?",
    category: "University Life",
    author: "Anonymous",
    answers: 8,
    time: "5 hours ago",
    tags: ["Productivity", "Student Life"],
  },
  {
    id: 3,
    title: "Which programming language should I learn for backend development?",
    description:
      "I already know some JavaScript and want to explore backend development.",
    category: "Technology",
    author: "Anonymous",
    answers: 5,
    time: "Yesterday",
    tags: ["Backend", "JavaScript"],
  },
  {
    id: 4,
    title: "Are there any affordable places to study near campus?",
    description:
      "Looking for quiet and affordable places where students can study together.",
    category: "Campus",
    author: "Anonymous",
    answers: 15,
    time: "Yesterday",
    tags: ["Campus", "Study"],
  },
];

const categories = [
  "All Questions",
  "Programming",
  "University Life",
  "Technology",
  "Campus",
];

function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [sortBy, setSortBy] = useState("latest");

  const filteredQuestions = questions
    .filter((question) => {
      const matchesSearch =
        question.title.toLowerCase().includes(search.toLowerCase()) ||
        question.description.toLowerCase().includes(search.toLowerCase()) ||
        question.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );

      const matchesCategory =
        activeCategory === "All Questions" ||
        question.category === activeCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "latest") return b.id - a.id;
      if (sortBy === "oldest") return a.id - b.id;
      if (sortBy === "answers") return b.answers - a.answers;
      return 0;
    });

  return (
    <div className="home-page">
      <Navbar />

      <main className="home-main">
        <section className="home-hero">
          <span className="home-eyebrow">YOUR UNIVERSITY COMMUNITY</span>

          <h1>
            Learn together.
            <br />
            <span>Grow together.</span>
          </h1>

          <p>
            A place where university students ask questions, share knowledge,
            and help each other succeed.
          </p>

          <div className="home-hero-actions">
            <Link to="/register" className="home-primary-button">
              Join the community
            </Link>

            <a href="#questions" className="home-secondary-button">
              Explore questions
            </a>
          </div>
        </section>

        <section className="home-search-section">
          <div className="home-search-box">
            <span className="search-icon">🔎</span>

            <input
              type="search"
              placeholder="Search questions, topics, or keywords..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search questions"
            />
          </div>
        </section>

        <section className="home-content" id="questions">
          <div className="home-section-heading">
            <div>
              <span className="home-section-label">
                COMMUNITY DISCUSSIONS
              </span>

              <h2>Explore questions</h2>
              <p>Discover what students are talking about.</p>
            </div>

            <Link to="/login" className="home-ask-button">
              + Ask a question
            </Link>
          </div>

          <div className="home-category-list" id="topics">
            {categories.map((category) => (
              <button
                key={category}
                className={`home-category ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="home-sort-container">
            <label htmlFor="question-sort">Sort by:</label>

            <select
              id="question-sort"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="answers">Most answers</option>
            </select>
          </div>

          <div className="home-question-list">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((question) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                />
              ))
            ) : (
              <div className="home-empty-state">
                <h3>No questions found</h3>
                <p>Try another search or choose a different category.</p>
              </div>
            )}
          </div>
        </section>

        <section className="home-join-section">
          <h2>Your knowledge can help someone.</h2>
          <p>Join fellow students and become part of the conversation.</p>

          <Link to="/register" className="home-primary-button">
            Get started
          </Link>
        </section>
      </main>

      <footer className="home-footer">
        <Link to="/" className="home-logo">
          UNI<span>net</span>
        </Link>

        <p>Built for students, powered by community.</p>
        <span>© 2026 UNInet</span>
      </footer>
    </div>
  );
}

export default Home;
