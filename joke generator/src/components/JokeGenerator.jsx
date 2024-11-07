import { useEffect, useState } from "react";

const JokeGenerator = () => {
  const [joke, setJoke] = useState({
    setup: "",
    punchline: "",
    showPunchline: false,
    loading: true,
  });

  const fetchJoke = async () => {
    setJoke((prev) => ({ ...prev, loading: true, showPunchline: false }));
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setJoke({ ...data, showPunchline: false, loading: false });
    } catch (error) {
      console.log(error);
      alert("Network Issue");
      setJoke((prev) => ({ ...prev, loading: false }));
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const { setup, punchline, showPunchline, loading } = joke;

  return (
    <div className="p-4 min-w-96 h-auto rounded shadow-xl bg-[#133E87]">
      <h2 className="text-center text-2xl text-white mb-5 font-bold">
        {loading ? "Loading..." : setup}
      </h2>

      {showPunchline && !loading && (
        <h3 className="text-center text-4xl text-orange-800">{punchline}</h3>
      )}

      <div className="flex justify-center items-center flex-col gap-5 mt-7">
        {!loading && (
          <button
            className="bg-green-600 py-2 px-5 rounded-md text-white font-semibold"
            onClick={() =>
              setJoke((prev) => ({
                ...prev,
                showPunchline: !prev.showPunchline,
              }))
            }
          >
            {showPunchline ? "Hide Punchline" : "Show Punchline"}
          </button>
        )}

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
