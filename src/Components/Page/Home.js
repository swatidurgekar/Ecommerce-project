import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { PlayCircle } from "react-bootstrap-icons";

const Home = () => {
  return (
    <>
      <Card
        style={{
          padding: "3rem",
          backgroundColor: "grey",
        }}
      >
        <Card.Body>
          <Card.Title
            style={{
              fontSize: "5rem",
              textAlign: "center",
            }}
          >
            THE GENERICS
          </Card.Title>
          <br />
          <div>
            <Button
              style={{ margin: "auto", display: "flex" }}
              className="btn-secondary "
            >
              Get our Latest Album
            </Button>
          </div>
          <br />
          <PlayCircle
            style={{ margin: "auto", display: "flex" }}
            size={96}
            color="lightblue"
          />
        </Card.Body>
      </Card>
      <div
        className="card"
        style={{ display: "flex", margin: "auto", width: "26rem" }}
      >
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">JUL16</li>
          <li className="list-group-item">DETROIT, MI</li>
          <li className="list-group-item">DTE ENERGY MUSIC THEATRE</li>
          <button>BUY TICKETS</button>
        </ul>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">JUL19</li>
          <li className="list-group-item">TORONTO</li>
          <li className="list-group-item">ON BUDWEISER STAGE</li>
          <button>BUY TICKETS</button>
        </ul>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">JUL22</li>
          <li className="list-group-item">BRISTOW, VA</li>
          <li className="list-group-item">JIGGY LUBE LIVE</li>
          <button>BUY TICKETS</button>
        </ul>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">JUL 29</li>
          <li className="list-group-item">PHOENIX, AZ</li>
          <li className="list-group-item">AK-CHIN PAVILION</li>
          <button>BUY TICKETS</button>
        </ul>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">AUG 2</li>
          <li className="list-group-item">LAS VEGAS, NV</li>
          <li className="list-group-item">T-MOBILE ARENA</li>
          <button>BUY TICKETS</button>
        </ul>
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">AUG 7</li>
          <li className="list-group-item">CONCORD, CA</li>
          <li className="list-group-item">CONCORD PAVILION</li>
          <button>BUY TICKETS</button>
        </ul>
      </div>
    </>
  );
};

export default Home;
