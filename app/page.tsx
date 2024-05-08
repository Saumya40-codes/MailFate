import Main from "./components/Main";
import TextBox from "./components/TextBox";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-5 bg-stone-950 min-h-screen">
      <Main />
      <TextBox />
    </div>
  );
}
