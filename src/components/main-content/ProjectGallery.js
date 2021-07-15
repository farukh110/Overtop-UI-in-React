import React from 'react';
import { CallorText } from './CallorText';
import ImageGallery from 'react-image-gallery';
import house1 from '../../assets/images/house1.jpg';
import house2 from '../../assets/images/house2.jpg';
import house3 from '../../assets/images/house3.jpg';

export const ProjectGallery = () => {

    const images = [
        {
          original: house1,
          thumbnail: house1,
        },
        {
            original: house2,
            thumbnail: house2,
        },
        {
            original: house3,
            thumbnail: house3,
        },
      ];

    return (
        <>

            <section className="project_banner">
            <div className="container">
            <h1> OUR GALLERY </h1> 
            </div>
            </section>

            <section className="projects_gallery mt-md-5 mt-5 mb-md-5 mb-5">
                
                <div className="container">

                <ImageGallery className="mt-md-4 mb-md-4" items={images} />  
                  
                </div> 

            </section>

            <CallorText/>

        </>
    )
}
