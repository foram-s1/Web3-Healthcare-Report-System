import { Accordion, Button, AccordionSummary, AccordionDetails, TextField } from "@material-ui/core";
import { useState } from "react";
import {ExpandMoreOutlined} from '@material-ui/icons';

export default function Hospital(){
    let handleSign = (e:any) => {
        e.preventDefault();
    }
    return (
        <div className="w-100">
            <div className="mx-auto">
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreOutlined />}>1</AccordionSummary>
                    <AccordionDetails>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-10 d-flex flex-column justify-content-center align-items-center">
                                <img src={"/assets/test.png"} />
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
                                variant="outlined"
                                fullWidth
                                name="analysis"
                                className="mb-3"
                            />
                            <TextField 
                                label="Diagnosis"
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                                name="diagnosis"
                                className="mb-3"
                            />
                            <input type="file" accept="**.key" name="secret" />
                            <Button variant="contained" type="submit" color="primary">Sign</Button>
                        </form>
                    </AccordionDetails>
                </Accordion>
            </div>
            
        </div>
    )
}