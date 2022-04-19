import './App.css';
import { GiEntangledTyphoon } from 'react-icons/gi'
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [people, setPeople] = useState([]);
  const [index, setindex] = useState(0);
  const [loading, setLoading] = useState(true)

  async function getinfo() {
    let { data } = await axios.get('https://course-api.com/react-tabs-project')
    setPeople(data)
    setLoading(false);
  }

  useEffect(() => {
    getinfo()
  }, [])

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  const { company, dates, duties, title } = people[index];


  return (

    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {people.map((item, indexjob) => {
            return (
              <button
                key={item.id}
                onClick={() => setindex(indexjob)}
                className={`job-btn ${indexjob === index && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <GiEntangledTyphoon className="job-icon"></GiEntangledTyphoon>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
