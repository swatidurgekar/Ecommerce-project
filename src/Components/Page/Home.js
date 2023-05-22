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
              style={{ marginLeft: "37rem", display: "flex" }}
              className="btn-secondary "
            >
              Get our Latest Album
            </Button>
          </div>
          <br />
          <PlayCircle
            style={{ marginLeft: "40rem" }}
            size={96}
            color="lightblue"
          />
        </Card.Body>
      </Card>
      <div
        class="card"
        style={{ display: "flex", marginLeft: "30rem", width: "26rem" }}
      >
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item">JUL16</li>
          <li class="list-group-item">DETROIT, MI</li>
          <li class="list-group-item">DTE ENERGY MUSIC THEATRE</li>
          <button>BUY TICKETS</button>
        </ul>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item">JUL19</li>
          <li class="list-group-item">TORONTO</li>
          <li class="list-group-item">ON BUDWEISER STAGE</li>
          <button>BUY TICKETS</button>
        </ul>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item">JUL22</li>
          <li class="list-group-item">BRISTOW, VA</li>
          <li class="list-group-item">JIGGY LUBE LIVE</li>
          <button>BUY TICKETS</button>
        </ul>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item">JUL 29</li>
          <li class="list-group-item">PHOENIX, AZ</li>
          <li class="list-group-item">AK-CHIN PAVILION</li>
          <button>BUY TICKETS</button>
        </ul>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item">AUG 2</li>
          <li class="list-group-item">LAS VEGAS, NV</li>
          <li class="list-group-item">T-MOBILE ARENA</li>
          <button>BUY TICKETS</button>
        </ul>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item">AUG 7</li>
          <li class="list-group-item">CONCORD, CA</li>
          <li class="list-group-item">CONCORD PAVILION</li>
          <button>BUY TICKETS</button>
        </ul>
      </div>
    </>
  );
};

export default Home;
