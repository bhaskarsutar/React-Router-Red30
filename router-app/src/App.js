import {Routes, Route} from "react-router-dom"
import { Helmet } from "react-helmet";

import Categories from "./components/Categories";
import Home from "./components/Home";
import About from "./components/About"
import Header from "./components/Header";
import Category from "./components/Category";
import Session from "./components/Session";
import Register from "./components/Register";
import Confirmation from "./components/Confirmation"


function App() {
  return (
    
    <div className="app">

      <Helmet>
            <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "<script type="text/javascript">
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "g48i6q5elt");
            </script>");
        `}} />
      </Helmet>

      <Header/>
      
      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 Tech"/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="categories" element={<Categories/>}>
          <Route path=":catId" element={<Category/>}>
            <Route path=":sessionId" element={<Session/>}/>
          </Route>
         </Route>
        <Route path="register" element={<Register/>}/>
        <Route path="confirmed" element={<Confirmation/>}/>
        <Route path="*" element={<h1 className="not-found">Page Not Found</h1>}/>
      </Routes>


      <footer className="container">
        &copy;2023 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
