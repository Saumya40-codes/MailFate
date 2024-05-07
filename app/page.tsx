import Main from "./components/Main";
import TextBox from "./components/TextBox";

export default function Home() {
  return (
    <div className="bg-stone-950 h-screen w-screen flex flex-col items-center gap-5">
      <Main />
      <TextBox />
    </div>
  );
}
