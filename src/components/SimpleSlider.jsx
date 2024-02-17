import { Component } from 'react';
import { Link } from 'react-router-dom';

import cardAgentBG from '../assets/card_bg.webp';

class SimpleSlider extends Component {
  state = {
    agents: [],
  };
  componentDidMount() {
    fetch('https://valorant-api.com/v1/agents')
      .then((response) => response.json())
      .then((agentsList) => {
        console.log(agentsList);
        this.setState({ agents: agentsList.data });
      });
  }

  render() {
    let arr = [];
    const { agents } = this.state;
    for (let x = 0; x < agents.length; x++) {
      agents[x].displayName = agents[x].displayName.replace('/', '-');
      if (agents[x].isPlayableCharacter) {
        arr.push(agents[x]);
      }
    }

    return (
      <div className="flex">
        {arr.map((agent, index) => (
          <Link
            to={`/agents/${agent.displayName.toLowerCase()}/${agent.uuid}`}
            key={index}
          >
            <div className="main__agent" key={index}>
              <div className="main__agent__bg">
                <img className="bg" src={cardAgentBG} alt="" />
              </div>
              <div className="main__agent__portait">
                <img src={agent.fullPortrait} alt="" />
              </div>
              <div className="main__agent__title">
                <h1>{agent.displayName}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default SimpleSlider;
