import { useState } from "react";
import { questions, sections } from "./questions";
import "./index.css";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

function scoreColor(pct) {
  if (pct >= 80) return "#4ade80";
  if (pct >= 60) return "#fbbf24";
  return "#f87171";
}

// ── HOME ──────────────────────────────────────────────────────────────────────
function HomeScreen({ onStart, onFlashcards, stats }) {
  const [selectedSection, setSelectedSection] = useState("All Topics");
  const [count, setCount] = useState(20);
  const [randomize, setRandomize] = useState(true);

  const pool = questions.filter((q) => {
    if (selectedSection === "All Topics") return true;
    if (selectedSection === "Old Questions") return q.id >= 1 && q.id <= 120;
    if (selectedSection === "New Questions") return q.id >= 121 && q.id <= 220;
    if (selectedSection === "Prefinal Questions") return q.id >= 221 && q.id <= 314;
    return q.section === selectedSection;
  });

  return (
    <div className="home">
      <div className="home-hero">
        <div className="hero-glow" />
        <h1 className="hero-title">NetStudy<span className="accent">Pro</span></h1>
        <p className="hero-sub">DHCP · DNS · File & Share Permissions · Storage & RAID · High Availability</p>
      </div>

      {stats.sessions > 0 && (
        <div className="stats-row">
          {[
            { label: "Sessions", val: stats.sessions },
            { label: "Avg Score", val: `${stats.avgScore}%`, color: scoreColor(stats.avgScore) },
            { label: "Answered", val: stats.totalAttempted },
          ].map((s) => (
            <div className="stat-chip" key={s.label}>
              <span className="stat-val" style={s.color ? { color: s.color } : {}}>{s.val}</span>
              <span className="stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="card config-card">
        <h2 className="card-title">Configure</h2>

        <div className="field">
          <label className="field-label">Topic</label>
          <div className="pills">
            {sections.map((s) => (
              <button
                key={s}
                className={`pill${selectedSection === s ? " active" : ""}`}
                onClick={() => {
                  setSelectedSection(s);
                  const max = questions.filter((q) => {
                    if (s === "All Topics") return true;
                    if (s === "Old Questions") return q.id >= 1 && q.id <= 120;
                    if (s === "New Questions") return q.id >= 121 && q.id <= 220;
                    if (s === "Prefinal Questions") return q.id >= 221 && q.id <= 314;
                    return q.section === s;
                  }).length;
                  if (count > max) setCount(max);
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="field">
          <label className="field-label">
            Questions &nbsp;<strong className="accent">{count}</strong>
            <span className="field-sub"> / {pool.length} available</span>
          </label>
          <input
            type="range"
            min={5}
            max={pool.length}
            value={count}
            onChange={(e) => setCount(+e.target.value)}
            className="slider"
          />
        </div>

        <div className="field toggle-field">
          <label className="field-label">Shuffle</label>
          <button
            className={`toggle${randomize ? " on" : ""}`}
            onClick={() => setRandomize(!randomize)}
            aria-label="Toggle shuffle"
          >
            <span className="knob" />
          </button>
        </div>

        <div className="action-row">
          <button className="btn-primary" onClick={() => onStart({ section: selectedSection, count, randomize })}>
            ⚡ Start Quiz
          </button>
          <button className="btn-ghost" onClick={() => onFlashcards({ section: selectedSection })}>
            📖 Flashcards
          </button>
        </div>
      </div>
    </div>
  );
}

// ── QUIZ ──────────────────────────────────────────────────────────────────────
function QuizScreen({ config, onFinish, onBack }) {
  const pool = questions.filter((q) => {
    if (config.section === "All Topics") return true;
    if (config.section === "Old Questions") return q.id >= 1 && q.id <= 120;
    if (config.section === "New Questions") return q.id >= 121 && q.id <= 220;
    if (config.section === "Prefinal Questions") return q.id >= 221 && q.id <= 314;
    return q.section === config.section;
  });
  const [qs] = useState(() => {
    const p = config.randomize ? shuffle(pool) : pool;
    return p.slice(0, config.count);
  });

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [results, setResults] = useState([]);
  const [streak, setStreak] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const q = qs[idx];

  function pick(i) {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    const correct =
      q.type === "tf" ? (i === 0) === q.answer : i === q.answer;
    setResults((r) => [...r, { q, selected: i, correct }]);
    setStreak((s) => (correct ? s + 1 : 0));
  }

  function next() {
    if (idx + 1 >= qs.length) {
      setShowResult(true);
    } else {
      setIdx((i) => i + 1);
      setSelected(null);
      setAnswered(false);
    }
  }

  if (showResult) {
    const correct = results.filter((r) => r.correct).length;
    const pct = Math.round((correct / results.length) * 100);
    return (
      <ResultScreen
        results={results}
        total={results.length}
        correct={correct}
        pct={pct}
        onHome={() => onFinish({ correct, total: results.length, pct })}
        onRetry={() => onFinish(null)}
      />
    );
  }

  const progress = (idx / qs.length) * 100;
  const correctSoFar = results.filter((r) => r.correct).length;

  const isCorrectAnswer =
    answered &&
    (q.type === "tf" ? (selected === 0) === q.answer : selected === q.answer);

  return (
    <div className="quiz">
      <div className="quiz-topbar">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <span className="counter">
          {idx + 1}/{qs.length}
          {streak >= 3 && <span className="streak">🔥{streak}</span>}
        </span>
        <span className="topic-badge">{q.section}</span>
      </div>

      <div className="pbar-track">
        <div className="pbar-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="live-score">
        <span className="ls-correct">✓ {correctSoFar}</span>
        <span className="ls-wrong">✗ {results.length - correctSoFar}</span>
      </div>

      <div className="card q-card">
        <div className="q-type">{q.type === "tf" ? "True / False" : "Multiple Choice"}</div>
        <p className="q-text">{q.question}</p>

        {q.type === "tf" ? (
          <div className="tf-group">
            {["True", "False"].map((lbl, i) => {
              const correct = (i === 0) === q.answer;
              let cls = "tf-btn";
              if (answered) {
                if (i === selected) cls += correct ? " correct" : " wrong";
                else if (correct) cls += " hint";
              }
              return (
                <button key={i} className={cls} onClick={() => pick(i)}>
                  {lbl}
                  {answered && (
                    <span className="ans-icon">
                      {i === selected ? (correct ? <CheckIcon /> : <XIcon />) : correct ? <CheckIcon /> : null}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mcq-group">
            {q.options.map((opt, i) => {
              const correct = i === q.answer;
              let cls = "mcq-btn";
              if (answered) {
                if (i === selected) cls += correct ? " correct" : " wrong";
                else if (correct) cls += " hint";
              }
              return (
                <button key={i} className={cls} onClick={() => pick(i)}>
                  <span className="opt-letter">{String.fromCharCode(65 + i)}</span>
                  <span className="opt-text">{opt}</span>
                  <span className="ans-icon">
                    {answered && i === selected ? (correct ? <CheckIcon /> : <XIcon />) : null}
                    {answered && i !== selected && correct ? <CheckIcon /> : null}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {answered && (
          <div className={`feedback ${isCorrectAnswer ? "fb-correct" : "fb-wrong"}`}>
            {isCorrectAnswer
              ? "✓ Correct!"
              : `✗ Answer: ${q.type === "tf" ? (q.answer ? "True" : "False") : q.options[q.answer]}`}
          </div>
        )}
      </div>

      {answered && (
        <button className="next-btn" onClick={next}>
          {idx + 1 >= qs.length ? "See Results →" : "Next →"}
        </button>
      )}
    </div>
  );
}

// ── RESULT ────────────────────────────────────────────────────────────────────
function ResultScreen({ results, total, correct, pct, onHome, onRetry }) {
  const [showMissed, setShowMissed] = useState(false);
  const missed = results.filter((r) => !r.correct);
  const grade = pct >= 90 ? "A" : pct >= 80 ? "B" : pct >= 70 ? "C" : pct >= 60 ? "D" : "F";
  const msg =
    pct >= 80 ? "Excellent work! 🎉" : pct >= 60 ? "Good effort, keep going! 💪" : "Keep studying — you've got this! 📚";

  return (
    <div className="result">
      <div className="result-hero">
        <div className="grade" style={{ color: scoreColor(pct) }}>{grade}</div>
        <div className="pct" style={{ color: scoreColor(pct) }}>{pct}%</div>
        <p className="result-msg">{msg}</p>
      </div>

      <div className="result-stats">
        <div className="rs-chip">
          <span style={{ color: "#4ade80" }}>{correct}</span>Correct
        </div>
        <div className="rs-chip">
          <span style={{ color: "#f87171" }}>{total - correct}</span>Wrong
        </div>
        <div className="rs-chip">
          <span>{total}</span>Total
        </div>
      </div>

      {missed.length > 0 && (
        <>
          <button className="review-btn" onClick={() => setShowMissed(!showMissed)}>
            {showMissed ? "Hide" : "Review"} Missed ({missed.length})
          </button>
          {showMissed && (
            <div className="missed-list">
              {missed.map(({ q, selected }, i) => (
                <div className="missed-item" key={i}>
                  <p className="mi-q">{q.question}</p>
                  <p className="mi-yours">
                    ✗ Your answer:{" "}
                    {q.type === "tf"
                      ? selected === 0
                        ? "True"
                        : "False"
                      : q.options[selected]}
                  </p>
                  <p className="mi-correct">
                    ✓ Correct:{" "}
                    {q.type === "tf"
                      ? q.answer
                        ? "True"
                        : "False"
                      : q.options[q.answer]}
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      <div className="action-row" style={{ marginTop: 24 }}>
        <button className="btn-primary" onClick={onHome}>🏠 New Quiz</button>
        <button className="btn-ghost" onClick={onRetry}>↺ Retry</button>
      </div>
    </div>
  );
}

// ── FLASHCARDS ────────────────────────────────────────────────────────────────
function FlashcardScreen({ config, onBack }) {
  const pool = questions.filter((q) => {
    if (config.section === "All Topics") return true;
    if (config.section === "Old Questions") return q.id >= 1 && q.id <= 120;
    if (config.section === "New Questions") return q.id >= 121 && q.id <= 220;
    if (config.section === "Prefinal Questions") return q.id >= 221 && q.id <= 314;
    return q.section === config.section;
  });
  const [cards] = useState(() => shuffle(pool));
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(new Set());

  const card = cards[idx];
  const answer =
    card.type === "tf"
      ? card.answer
        ? "TRUE"
        : "FALSE"
      : card.options[card.answer];

  function go(mark) {
    if (mark === "known") setKnown((s) => new Set([...s, card.id]));
    setFlipped(false);
    setTimeout(() => setIdx((i) => (i + 1) % cards.length), 120);
  }

  return (
    <div className="flashcards">
      <div className="quiz-topbar">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <span className="counter">{idx + 1}/{cards.length}</span>
        <span className="topic-badge">{card.section}</span>
      </div>

      <div className="fc-stats">
        <span style={{ color: "#4ade80" }}>✓ {known.size} known</span>
        <span>{cards.length - known.size} remaining</span>
      </div>

      <div
        className={`flashcard${flipped ? " flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="fc-inner">
          <div className="fc-front">
            <span className="fc-label">Question</span>
            <p className="fc-q">{card.question}</p>
            {card.type === "mcq" && (
              <ul className="fc-opts">
                {card.options.map((o, i) => (
                  <li key={i}>
                    <span className="opt-letter sm">{String.fromCharCode(65 + i)}</span>
                    {o}
                  </li>
                ))}
              </ul>
            )}
            <span className="fc-hint">Tap to reveal</span>
          </div>
          <div className="fc-back">
            <span className="fc-label">Answer</span>
            <p className="fc-ans">{answer}</p>
            {card.type === "mcq" && (
              <p className="fc-opt-letter">Option {String.fromCharCode(65 + card.answer)}</p>
            )}
          </div>
        </div>
      </div>

      {flipped ? (
        <div className="fc-btns">
          <button className="fc-btn wrong" onClick={() => go("unknown")}>
            <XIcon /> Still Learning
          </button>
          <button className="fc-btn correct" onClick={() => go("known")}>
            <CheckIcon /> Got It!
          </button>
        </div>
      ) : (
        <button className="fc-skip" onClick={() => go(null)}>
          Skip →
        </button>
      )}
    </div>
  );
}

// ── ROOT ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("home");
  const [quizConfig, setQuizConfig] = useState(null);
  const [fcConfig, setFcConfig] = useState(null);
  const [stats, setStats] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("nsp_stats") || "{}");
    } catch {
      return {};
    }
  });

  function handleFinish(result) {
    if (result) {
      const updated = {
        totalAttempted: (stats.totalAttempted || 0) + result.total,
        avgScore: Math.round(((stats.avgScore || 0) * (stats.sessions || 0) + result.pct) / ((stats.sessions || 0) + 1)),
        sessions: (stats.sessions || 0) + 1,
      };
      setStats(updated);
      try {
        localStorage.setItem("nsp_stats", JSON.stringify(updated));
      } catch {}
    }
    setScreen("home");
  }

  return (
    <div className="root">
      {screen === "home" && (
        <HomeScreen
          onStart={(cfg) => { setQuizConfig(cfg); setScreen("quiz"); }}
          onFlashcards={(cfg) => { setFcConfig(cfg); setScreen("flashcards"); }}
          stats={{ sessions: stats.sessions || 0, avgScore: stats.avgScore || 0, totalAttempted: stats.totalAttempted || 0 }}
        />
      )}
      {screen === "quiz" && (
        <QuizScreen config={quizConfig} onFinish={handleFinish} onBack={() => setScreen("home")} />
      )}
      {screen === "flashcards" && (
        <FlashcardScreen config={fcConfig} onBack={() => setScreen("home")} />
      )}
    </div>
  );
}
