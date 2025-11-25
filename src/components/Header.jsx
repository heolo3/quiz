import QuizLogo from "../assets/quiz-logo.png";

export default function Header() {
    return (
        <header>
            <img src={QuizLogo} alt="Welcome to the React Quiz App" />
            <h1>ReactQuiz</h1>
        </header>
    );
}