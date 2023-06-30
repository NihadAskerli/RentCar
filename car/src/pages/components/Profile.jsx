import React, { useState } from "react";

const Profile = () => {
  const [image,setImage]=useState(null);
    const [fileName,setFileName]=useState()
 
  return (
    <div className="profile">
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
        {image?<img src={image}  alt={fileName}/>:<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Profile" />}
    </form>
      
    </div>
  );
};

export default Profile;
