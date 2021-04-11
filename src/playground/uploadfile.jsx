import React, { useRef, useState } from "react";
import axios from "axios";

function TestUpload(props) {
  const [base64, setBase64] = useState();
  const [file, setFile] = useState();
  const input = useRef();
  const uploadImg = () => {
    const api = "https://api.imgbb.com/1/upload";
    const key = "3a9540d4e77556c6cc7eae5623f73afe";
    const path = file;
    const formData = new FormData();
    formData.append("image", file);

    const fetch = async () => {
      try {
        const response = await axios.post(`${api}`, formData, { params: { key: key } });
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  };
  const fileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className='container'>
      <input type='file' name='' id='' onChange={fileChange} ref={input} />
      <button className='btn btn-success' onClick={uploadImg}>
        upload
      </button>
    </div>
  );
}

export default TestUpload;
