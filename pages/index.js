import clientPromise from "../lib/mongodb";
import Meme from "../components/Meme";

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("meme_news");

    // Fetch the data from MongoDB
    const data = await db.collection("entries").find({}).toArray();


    // Flatten and format the data
    const memes = data.flatMap((entry) =>
      entry.tokens.map((token) => ({
        topText: token.orig_word,
        imageUrl: token.image_path.original_url,
        bottomText: token.word,
      }))
    );

    return {
      props: {
        memes: JSON.parse(JSON.stringify(memes)), // Serialize the data
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        memes: [],
      },
    };
  }
}

export default function Home({ memes }) {
  return (
    <div>
      <h1>Meme Gallery</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {memes.map((meme, index) => (
          <Meme
            key={index}
            topText={meme.topText}
            imageUrl={meme.imageUrl}
            bottomText={meme.bottomText}
          />
        ))}
      </div>
    </div>
  );
}
