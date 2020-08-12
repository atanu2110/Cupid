import React from "react";
import Image from './Image';

class GalleryCard extends React.Component<any, any> {

   
    render() {
        return (
            
            <div className="photo-container">
              <div><ul>{this.props.photo.map((image: any, index: any) => {
                                   let farm = image.farm;
                                   let server = image.server;
                                   let id = image.id;
                                   let secret = image.secret;
                                   let title = image.title;
                                   let url: any = 'https://farm'+farm+'.staticflickr.com/'+server+'/'+id+'_'+secret+'_m.jpg';
                                   return <Image url={url}  title={title} />;
                                }
                                )}</ul></div>

             No Photo Yet
            </div>
          );

        }
   

}

export default GalleryCard;