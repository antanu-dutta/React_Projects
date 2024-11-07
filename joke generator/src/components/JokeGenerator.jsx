import { useEffect, useState } from "react";

const JokeGenerator = () => {
  const [jokes, setJokes] = useState({
    setup: "",
    punchline: "",
    showPunchline: false,
    loading: true,
    errorMessage: "",
  });

  const fetchJoke = async () => {
    setJokes((prev) => ({
      ...prev,
      loading: true,
      showPunchline: false,
    }));

    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();

      setJokes((prev) => ({
        ...prev,
        ...data,
        showPunchline: false,
        loading: false,
      }));
    } catch (error) {
      alert("Network Issue");
      console.log(error);
      setJokes((prev) => ({
        ...prev,
        loading: false,
        errorMessage: "API PROBLEM",
      }));
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="p-4 min-w-96 h-auto rounded shadow-xl bg-[#133E87]">
      <h2 className="text-center text-2xl text-white mb-5 font-bold">
        {jokes.loading ? "Loading..." : jokes.setup}
      </h2>

      {jokes.showPunchline && !jokes.loading && (
        <h3 className="text-center text-4xl text-orange-800">
          {jokes.punchline}
        </h3>
      )}

      <div className="flex justify-center items-center flex-col gap-5 mt-7">
        {!jokes.loading && jokes.setup && (
          <button
            className="bg-green-600 py-2 px-5 rounded-md text-white font-semibold"
            onClick={() =>
              setJokes((prev) => ({
                ...prev,
                showPunchline: !prev.showPunchline,
              }))
            }
          >
            {jokes.showPunchline ? "Hide Punchline" : "Show Punchline"}
          </button>
        )}
        {jokes.errorMessage && <h1>{jokes.errorMessage}</h1>}
        <button
          className="bg-green-600 py-2 px-5 rounded-md text-white font-semibold"
          onClick={fetchJoke}
        >
          Generate New Joke
        </button>
      </div>
    </div>
  );
};

export default JokeGenerator;
