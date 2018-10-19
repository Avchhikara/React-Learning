import _ from 'Lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './component/search_bar.js';
import YTSearch from 'youtube-api-search';
import VideoList from './component/video_list';
import VideoDetail from './component/video_detail';

const API_KEY = 'AIzaSyDDbEamzm-I0k4jpjUqbre2XJQ5IwAdIvs';




class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			videos: [],
			selectedVideo:null
		};
		YTSearch({key:API_KEY, term: 'Avnish Chhikara'}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
				});
		});
		//this.videoSearch('Surfing');
		
	}

	videoSearch(term){
		YTSearch({key:API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos
				//selectedVideo: videos[0]
				});
		});		

	}

	render(){
		const videoSearch = _.debounce((item) => {this.videoSearch(item)}, 300);

		return(
			<div className="row" >
			<SearchBar onSearchTermChange={(term) => videoSearch(term)}  />
			<VideoDetail video={this.state.selectedVideo} />
			<VideoList 
			onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
			videos={this.state.videos} />
			</div>
			);


	}
}


//take the component generated html and put it in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));