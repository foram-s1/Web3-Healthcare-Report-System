import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp, faImage, faUpload } from "@fortawesome/free-solid-svg-icons";

export default function Laboratory(props: any) {

    return <div className="container-fluid vh-100 swatch_3 d-flex align-items-center">
        <div className="container bg-light w-75 h-75 border rounded-3">
            <form>
                <div className="row">
                    <FontAwesomeIcon icon={faImage} size="6x" className="my-4 m-auto swatch_6"/>
                </div>
                <div className="row">
                    <div className="input-group w-75 m-auto mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                        <input id="upload" type="file" className="form-control border-0" />
                            <label htmlFor="upload" className="btn btn-light m-0 rounded-pill px-4"> 
                                <FontAwesomeIcon icon={faUpload} size="lg" className="me-2 swatch_6" />
                                <small className="text-uppercase font-weight-bold text-muted">Choose file</small>
                            </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                       
                    </div>
                    <div className="col-6">
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto">
                        <button type="submit" className="btn swatch_6b rounded-pill">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
}