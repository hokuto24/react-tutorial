import { useEffect, useState } from "react";
import { fetchImages } from "./api";

function Header() {
  return (
    <header className="hero is-info is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">What's today's date and cat?</h1>
        </div>
      </div>
    </header>
  );
}

function Image(props) {
  return (
    <div className="card">
      <header class="card-header">
        <p class="card-header-title">今日のネコ</p>
      </header>
      <div className="card-image">
        <figure className="image">
          <img src={props.src} alt="cute cat!" />
        </figure>
      </div>
    </div>
  );
}

function Loading() {
  return <p>Loading...</p>;
}

function Gallery(props) {
  const { urls } = props;
    if(urls == null) {
	return <Loading />;
    }
    return (
	<div className="columns is-vcentered is-multiline">
	  {urls.map((url) => {
            return (
              <div key={url} className="column is-3">
                <Image src={url} />
              </div>
            );
          })}
	</div>
    );
}

function ShowDay() {
    var today = new Date();
      
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var week = today.getDay();
    var day = today.getDate();
      
    var day_of_week = new Array("日","月","火","水","木","金","土");
  return (
    <div class="columns has-text-centered">
        <div class="column is-one-quarter"></div>
        <div className="column is-three-quarters has-background-light">今日は西暦{year}年{month}月{day}日{day_of_week[week]}曜日です</div>
    </div>
  );
}

function Main() {
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    fetchImages("cats").then((urls) => {
      setUrls(urls);
    });
  }, []);
  return (
    <main>
      <p>
        <ShowDay />
      </p>
      <section className="section">
        <Gallery urls={urls} />
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Cat image are retrieved from Shibe.online</p>
        <p>
          <a href="https://shibe.online/">Donate to Cat API</a>
        </p>
        <p>
          5421002 大久保歩香
          日本大学文理学部情報科学科 Webプログラミングの演習課題
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
