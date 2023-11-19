import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm.component";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery.component";
import NotFound from "./components/NotFound/NotFound.component";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.component";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/gallery" element={<PrivateRoute />}>
          <Route path="" element={<PhotoGallery />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
