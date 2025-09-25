import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ maxHeight: "180px", objectFit: "contain" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.openSource && (
          <Button variant="primary" href={props.srcLink} target="_blank">
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}
        {props.demoLink && (
          <Button variant="primary" href={props.demoLink} target="_blank" style={{ marginLeft: "10px" }}>
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
