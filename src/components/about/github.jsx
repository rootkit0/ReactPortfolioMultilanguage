import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="github-wrap">
      <div className="github-scroll">
        <GitHubCalendar
          username="rootkit0"
          blockSize={15}
          blockMargin={5}
          color="#0ea5e9"
          fontSize={16}
        />
      </div>
    </div>
  );
}

export default Github;
