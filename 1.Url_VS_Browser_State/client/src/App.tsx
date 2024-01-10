import { useState } from "react";
import TeamArticle from "./components/TeamArticle";
import WorkArticle from "./components/WorkArticle";

type ActiveTabI = "team" | "work";

function App() {
  const [tab, setTab] = useState<ActiveTabI>("team");

  return (
    <main className="max-w-[1280px] mx-auto px-8">
      <section className="py-10">
        <h1 className="font-bold text-black text-4xl">My Homepage</h1>
        <nav className="mt-6 w-fit">
          <ul className="shadow-md border border-b-0 border-black/10 shadow-black/20 rounded-sm flex items-center justify-center">
            <li
              onClick={() => setTab("team")}
              className={`py-2 transition-all duration-300 border-b-4 px-10 cursor-pointer font-medium text-lg ${
                tab == "team"
                  ? "border-indigo-600"
                  : "shadow-inner shadow-indigo-900/15 border-indigo-600/10"
              }`}
            >
              Team
            </li>
            <li
              onClick={() => setTab("work")}
              className={`py-2 transition-all duration-300 border-b-4 px-10 cursor-pointer font-medium text-lg ${
                tab == "work"
                  ? "border-indigo-600"
                  : "shadow-inner shadow-indigo-900/15 border-indigo-600/20"
              }`}
            >
              Work
            </li>
          </ul>
        </nav>
      </section>

      <section className="">
        {tab == "team" ? <TeamArticle /> : <WorkArticle />}
      </section>
    </main>
  );
}

export default App;
