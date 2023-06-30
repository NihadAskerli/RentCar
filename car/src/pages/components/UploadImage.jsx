import React, { useState } from 'react'



const UploadImage = () => {
    const [image,setImage]=useState(null);
    const [fileName,setFileName]=useState("No selected file")
   
  return (
   <div className="uploader">
    <form
    className='d-flex align-items-center justify-content-center'
    onClick={()=>{
        document.querySelector(".input-field").click()
    }}
    >
        <input type="file" accept='image/*' className='input-field' hidden
        onChange={({target:{files}})=>{
            files[0] && setFileName(files[0].name)
            if(files){
                setImage(URL.createObjectURL(files[0]))
            }
        }}
        />
        {image?<img src={image}  alt={fileName}/>:"Drop your images here or select click to browse"}
    </form>
   </div>
  )
}

export default UploadImage