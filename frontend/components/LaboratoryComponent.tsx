import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faUpload } from "@fortawesome/free-solid-svg-icons";

export default function Laboratory(props: any) {

    return <div className="container-fluid vh-100 swatch_3 d-flex align-items-center overflow-hidden">
        <div className="container bg-light w-75 h-75 border rounded-3">
            <div className="row mt-4">
                <div className="col-12">
                    <h2 className="fnt fw-bold swatch_6 text-center" >Secure your Reports!!</h2>
                </div>
            </div>
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
                <div className="row m-5">
                    <div className="col-2"></div>
                    <div className="col-sm-4 col-12 mb-sm-0 mb-3">
                        {/* hospital id from dropdown list */}
                        <select className="form-control rounded-pill bg-white shadow-sm">
                            <option selected disabled>Hospital Address*</option>
                            <option>Hospital 2</option>
                            <option>Hospital 3</option>
                        </select>

                    </div>
                    <div className="col-sm-4 col-12">
                        {/* get patient address from dropdown list */}
                        <select className="form-control rounded-pill bg-white shadow-sm">
                            <option selected disabled>Patient Address*</option>
                            <option>Patient 2</option>
                            <option>Patient 3</option>
                        </select>
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row">
                    <div className="col-auto mx-auto">
                        <button type="submit" className="btn mx-auto swatch_6b text-white rounded-pill">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
}