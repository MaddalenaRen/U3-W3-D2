import { useEffect } from "react";
import { Row, Breadcrumb } from "react-bootstrap";

const ENDPOINT = "https://api.spaceflightnewsapi.net/v4/articles";

const Home = function () {
  const getNews = async () => {
    try {
      const response = await fetch(ENDPOINT);
      if (response.ok) {
        const data = await response.json();
        console.log("Data", data);
      } else {
        throw new Error("Errore nel recupero dati");
      }
    } catch (error) {
      console.log("Erroreeeeeeeee", error);
    }
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <h1> Space News</h1>
      <Row className="justify-content-center"></Row>
    </>
  );
};
export default Home;
