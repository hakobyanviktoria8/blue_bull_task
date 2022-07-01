import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './pages/users/Users';
import { UserId } from './pages/userId/UserId';
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<UserId />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
