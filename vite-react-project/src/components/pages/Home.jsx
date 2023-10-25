import { useNavigate } from 'react-router-dom';

function Home() {
    // const [count, setCount] = useState(0)
    const navigateTo = useNavigate();
    return (
      <h1>
        This is home.
        <button onClick={()=> {
          navigateTo('/About')
        }}>Go to About</button>
      </h1>
    );
  }
  
  export default Home
  