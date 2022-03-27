import { Accordion, Button, AccordionSummary, AccordionDetails, TextField } from "@material-ui/core";
import { useState } from "react";
import {ExpandMoreOutlined} from '@material-ui/icons';

export default function Patient(){
    return (
        <div className="col-lg-10 col-md-11 col-12 mx-auto py-2">
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
                            <h3>Analysis</h3>
                            <p className="mb-3">Hello Hello</p>
                            <h3>Diagnosis</h3>
                            <p className="mb-3">Hello Hello</p>
                            
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
    )
}