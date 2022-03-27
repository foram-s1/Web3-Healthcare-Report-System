import { Accordion, Button, AccordionSummary, AccordionDetails, TextField } from "@material-ui/core";
import { useState } from "react";
import {ExpandMoreOutlined} from '@material-ui/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp, faImage, faUpload } from "@fortawesome/free-solid-svg-icons";

export default function Hospital(){
    let handleSign = (e:any) => {
        e.preventDefault();
    }
    return (
        <div className="w-100 pt-4 swatch_3" style={{minHeight: "100vh"}}>
            <div className="col-lg-8 col-md-10 col-11 mx-auto py-2 px-3 mt-4 rounded bg-light" style={{minHeight: "500px"}}>
            <h1 className="mb-3 swatch_6 text-center">Reports</h1>
                <div className="d-flex flex-column mx-auto" style={{rowGap: "0.5rem"}}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>1</AccordionSummary>
                        <AccordionDetails className="d-flex flex-column">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-10 d-flex flex-column justify-content-center align-items-center">
                                    <img src={"/assets/test.jpg"} width={256} height={256} />
                                    <p>Original MRI</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-10 d-flex flex-column justify-content-center align-items-center">
                                    <img src={"/assets/test.jpg"} width={256} height={256} />
                                    <p>Mask of MRI</p>
                                </div>
                            </div>
                            <form onSubmit={(e) => handleSign(e)} className="d-flex flex-column">
                                <TextField
                                    label="Analysis"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    name="analysis"
                                    className="mb-3"
                                />
                                <TextField 
                                    label="Diagnosis"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    name="diagnosis"
                                    className="mb-3"
                                />
                                <div className="row">
                                    <div className="input-group w-75 m-auto mb-3 px-2 py-2 rounded-pill bg-white">
                                        <input id="upload" type="file" name="secret" className="form-control border-0" />
                                            <label htmlFor="upload" className="btn btn-light m-0 rounded-pill px-4"> 
                                                <FontAwesomeIcon icon={faUpload} size="lg" className="me-2 swatch_6" />
                                                <small className="text-uppercase font-weight-bold text-muted">Choose file</small>
                                            </label>
                                    </div>
                                </div>
                                <Button variant="contained" type="submit" className="mx-auto" color="primary">Sign</Button>
                            </form>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>1</AccordionSummary>
                        <AccordionDetails className="d-flex flex-column">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-10 d-flex flex-column justify-content-center align-items-center">
                                    <img src={"../assets/test.png"} />
                                    <p>Original MRI</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-10 d-flex flex-column justify-content-center align-items-center">
                                    <img src={"/assets/test.png"} />
                                    <p>Mask of MRI</p>
                                </div>
                            </div>
                            <form onSubmit={(e) => handleSign(e)} className="d-flex flex-column">
                                <TextField
                                    label="Analysis"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    name="analysis"
                                    className="mb-3"
                                />
                                <TextField 
                                    label="Diagnosis"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    name="diagnosis"
                                    className="mb-3"
                                />
                                <input type="file" accept="**.key" className="mb-3" name="secret" />
                                <Button variant="contained" type="submit" color="primary">Sign</Button>
                            </form>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>1</AccordionSummary>
                        <AccordionDetails className="d-flex flex-column">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-10 d-flex flex-column justify-content-center align-items-center">
                                    <img src={"../assets/test.png"} />
                                    <p>Original MRI</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-10 d-flex flex-column justify-content-center align-items-center">
                                    <img src={"/assets/test.png"} />
                                    <p>Mask of MRI</p>
                                </div>
                            </div>
                            <form onSubmit={(e) => handleSign(e)} className="d-flex flex-column">
                                <TextField
                                    label="Analysis"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    name="analysis"
                                    className="mb-3"
                                />
                                <TextField 
                                    label="Diagnosis"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    name="diagnosis"
                                    className="mb-3"
                                />
                                <input type="file" accept="**.key" className="mb-3" name="secret" />
                                <Button variant="contained" type="submit" color="primary">Sign</Button>
                            </form>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}