import { useState } from 'react';
import Meme from '../components/Meme';

export default function Home() {
  const [memes, setMemes] = useState([]);
  const [form, setForm] = useState({ topText: '', imageUrl: '', bottomText: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMemes([...memes, form]);
    setForm({ topText: '', imageUrl: '', bottomText: '' });
  };

  return (
    <div>
      <h1>Create Your Meme</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="topText"
          placeholder="Top Text"
          value={form.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={form.bottomText}
          onChange={handleChange}
        />
        <button type="submit">Add Meme</button>
      </form>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
