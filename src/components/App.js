import React from "react";
import Searchbar from "./Searchbar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onVideoSelected = (video) => {
    this.setState({ selectedVideo: video });
    // console.log("vid: "+this.state.selectedVideo);
    console.log(video);
  };

  componentDidMount() {
    this.onTermSubmit("Dua lipa levitating");
  }

  onTermSubmit = async (term) => {
    console.log(term);

    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  render() {
    return (
      <div className="ui container">
        <Searchbar onFormSubmit={this.onTermSubmit} />

        <div className="ui stackable grid">
          <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelected={this.onVideoSelected}
              videos={this.state.videos}
            />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
