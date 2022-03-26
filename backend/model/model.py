import numpy as np
import pandas as pd
import matplotlib.image as mpimg
import matplotlib.pyplot as plt
from tqdm import tqdm
import os
from os.path import isfile, join
import random

from tensorflow.keras import models, backend
from tensorflow.keras.preprocessing.image import load_img
from tensorflow.keras import layers
from tensorflow.keras import metrics


smooth=100

def dice_coef(y_true, y_pred):
    y_truef = backend.flatten(y_true)
    y_predf = backend.flatten(y_pred)
    And = backend.sum(y_truef*y_predf)
    return((2* And + smooth) / (backend.sum(y_truef) + backend.sum(y_predf) + smooth))

def dice_coef_loss(y_true, y_pred):
    return -dice_coef(y_true, y_pred)

def iou(y_true, y_pred):
    intersection = backend.sum(y_true * y_pred)
    sum_ = backend.sum(y_true + y_pred)
    jac = (intersection + smooth) / (sum_ - intersection + smooth)
    return jac

def jac_distance(y_true, y_pred):
    y_truef = backend.flatten(y_true)
    y_predf = backend.flatten(y_pred)

    return - iou(y_true, y_pred)

model = models.load_model('./drive/MyDrive/CV/unet_brain_mri_seg.hdf5', custom_objects={'dice_coef_loss': dice_coef_loss, 'iou': iou, 'dice_coef': dice_coef})

x = np.zeros((1, 256, 256, 3), dtype="float32")
disp_x = np.zeros((1, 256, 256, 3), dtype="uint8")

x[0] = np.asarray(load_img("./TCGA_CS_4941_19960909_1.tif", target_size=(256, 256)))
disp_x[0] = x[0]

preds = model.predict(x / 255)
preds_t = (preds > 0.5).astype(np.uint8)
output = preds_t[0]**255

