import numpy as np
import cv2 
from os.path import isfile, join

from tensorflow.keras import models, backend
from tensorflow.keras.preprocessing.image import load_img


class Unet:
        
    def __init__(self):
        self.smooth = 100
        self.model = models.load_model('D:/projects/hackathon/backend/model/weights.hdf5', custom_objects={'dice_coef_loss': self.dice_coef_loss, 'iou': self.iou,'dice_coef': self.dice_coef})

  
    def dice_coef(self,y_true, y_pred):
        y_truef = backend.flatten(y_true)
        y_predf = backend.flatten(y_pred)
        And = backend.sum(y_truef*y_predf)
        return((2* And + self.smooth) / (backend.sum(y_truef) + backend.sum(y_predf) + self.smooth))

    def dice_coef_loss(self,y_true, y_pred):
        return -self.dice_coef(y_true, y_pred)
    
    def iou(self,y_true, y_pred):
        intersection = backend.sum(y_true * y_pred)
        sum_ = backend.sum(y_true + y_pred)
        jac = (intersection + self.smooth) / (sum_ - intersection + self.smooth)
        return jac

    def predict(self,image):
        x = np.zeros((1, 256, 256, 3), dtype="float32")
        disp_x = np.zeros((1, 256, 256, 3), dtype="uint8")

        image = cv2.resize(image,(256,256))
        x[0] = np.asarray(image)
        disp_x[0] = x[0]

        preds = self.model.predict(x / 255)
        preds_t = (preds > 0.5).astype(np.uint8)
        output = preds_t[0]**255
        return output
        


