import React from "react";
import axios from "axios";
import GalleryCard from "./GalleryCard";
import TopNavigation from "./TopNavigation"; 


class Gallery extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
       searchText: '',
       photos: []
    };
}

handleSearch = () => {
  let searctTerm = this.state.searchText;
  axios
      .get(
        'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags='+searctTerm+'&per_page=100&format=json&nojsoncallback=1'
      )
      .then(response => {
       // setImages(response.data.photos.photo);
        //setLoading(false);

        console.log(response.data.photos.photo);
        this.setState({photos: response.data.photos.photo});
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });

}

    render() {
        return(
            <div>
              <TopNavigation />
            <h1>Pic Shot</h1>
            <input
              type="text"
              name="search"
              placeholder="Search..."
             onChange={(e) =>  this.setState({searchText: e.target.value})}
              //value={searchEntry}
              className="search-form"
            />
            <button
        onClick={this.handleSearch}
        className={`search-button ${this.state.searchText.trim() ? "active" : null}`}
        disabled={!this.state.searchText.trim()}
      >
        <svg height="32" width="32">
          <path
            d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
            fill="#ffffff"
            fillRule="evenodd"
          />
        </svg>
      </button>
          
          <GalleryCard photo={this.state.photos}/>
          </div>
        )
    }

}


 export default Gallery;