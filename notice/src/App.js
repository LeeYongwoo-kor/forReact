import ErrorBoundary from "./ErrorBoundary";
import BasicPage from "./pages/basic";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <BasicPage />
        </header>
      </div>
    </ErrorBoundary>
  );
}

export default App;
