import { useState } from 'react';
import './ImageGallery.css'
import { useEffect } from 'react';


    const Gallery = () => {
    // data fetch state 
    const [gallery, setGallery] = useState([])
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        document.getElementById('my_modal_3').showModal();
      };
    
      const closeModal = () => {
        setSelectedImage(null);
        document.getElementById('my_modal_3').close();
      };


    useEffect(() => {
        fetch('gallery.json')
        .then(res => res.json())
        .then(data => setGallery(data))
    })
    return (
        <div className="Gallery mt-5 grid md:grid-cols-3">
            
            {
                gallery.map((item) => 
                <div className="galleryContainer"  onClick={() => openModal(item)} key={item.id}>
                    <img src={item.img} alt=""/>
                </div>)
            }

           
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <div
              className=" btn btn-sm btn-circle absolute right-2 top-[12px]"
              onClick={closeModal}
            >
              ✕
            </div>
          </form>
          {selectedImage && <img src={selectedImage.img} alt="" />}
        </div>
      </dialog>
           
        </div>
    );
};

export default Gallery;