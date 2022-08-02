import { ChangeEvent, useState } from "react";
import axios from "axios";
import './index.css'
 
const Card = () => {
    
    const [file, setFile] = useState<any>();

    const onChange = (file: ChangeEvent) => {
        const { files } = file.target as HTMLInputElement;
        if (files && files.length !== 0) {
          setFile(files[0]);
        }
    }

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("file", file);
        const res = await axios.post("http://localhost:3001/upload", formData);
        console.log(res);
    }
    return (
        <div className="card">
            <div className="card-header">
                <h3>Upload</h3>
            </div>
            <div className="card-body">
                <input type="file" onChange={onChange} />
                <button onClick={handleUpload}>Upload</button>
            </div>
        </div>
    );
 /*    

}     

    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <section>
                    <h1>Upload Card</h1>
                    <label>
                        Nome:
                        <input type="text" />
                    </label>
                    <label>
                        Email:
                        <input type="email" />
                    </label>
                    <label>
                        Telefone:
                        <input type="text" />
                    </label>
                <input type="file" onChange={onChange} />
                <button onClick={handleUpload}>upload</button>
                </section>
            </form>
        </div>
    ) */
}
 
export default Card;