# reactLoremIpsumGener
This React app creates custom lorem ipsum text as specified by the user input. Comes with input validations.

A general walkthrough of the pertinent React code is given below.

First the starting structure was set up.
```React
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  return (
    <section className="section-center">
      <h3>Tired of the same old Ipsum?</h3>
      <form className="lorem-form" onSubmit={handleClick}>
      </form>
    </section>
```

Next the form input, label and button is added.
```React
      <form className="lorem-form" onSubmit={handleClick}>
        <label htmlFor="amount">paragraphs</label>
        <input
          type="number"
          name="amount"
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
```

Next the article element where the paragraph ipsum text will be displayed is created.
```React
<article className='lorem-text'>
  <p>lorem</p>
  <p>lorem</p>
</article
```

Next the handleSubmit function is created making the data available.
```React
  const handleClick = (e) => {
    e.preventDefault();
    setText(data);
  };
```

Map over the data array.
```React
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
```

Next set rules to make sure user inputs are valid. Before doing this ensure that user inputs are converted into numbers first.
```React
let amount = parseInt(count)
```

Next the setText is updated so that only the user specified number of paragraphs gets returned.
```React
setText(data.slice(0, amount))
```

Lastly dealt with user input validation.
```React
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = data.length;
    }
    setText(data.slice(0, amount));
```


***End walkthrough
