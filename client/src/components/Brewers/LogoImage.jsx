import { useState } from "react";
import "./Brewers.css"


const LogoImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="image-upload">
      <h1 className="text-2xl">Upload Brewery Logo: </h1>
      {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button className="upload-button" onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />

      <input className="bg-[#f6f2f2d9]"
        
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default LogoImage;