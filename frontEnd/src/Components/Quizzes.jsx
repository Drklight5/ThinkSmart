import Quiz from "./Quiz";

export default function Quizzes() {
    const list_quiz = [
        { quiz: "Mates 1", area: "Mat", id: 1 },
        { quiz: "Mates 2", area: "Mat", id: 2 },
        { quiz: "Mates 3", area: "Mat", id: 3 },
        { quiz: "Mates 4", area: "Mat", id: 4 },
        { quiz: "Mates 5", area: "Mat", id: 5 },
        { quiz: "Mates 6", area: "Mat", id: 6 },
    ]

  return (
    <div className="quizzes">
        {list_quiz.map((q, i) =>
            <Quiz quiz={q} key={i} />
        )}
    </div>
  )
}
