import s from './app.module.css'
import TimerApp from './componets/TimmerApp';

function App() { 
  return (
    <div className={s.container}>
      <div className={s.app}>
        <header>
          <h1 className={s.title}>Stopwatch</h1>
        </header>
        <TimerApp/>
      </div>
      <footer className={s.footer}>
          Web-designer Sergei Triyanov 2021
      </footer>
    </div>
  );
}

export default App;
