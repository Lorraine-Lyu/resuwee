from PIL import Image
from resizeimage import resizeimage
from os import listdir
from os.path import isfile, join
import os
mydir = os.path.dirname(os.path.abspath(__file__))

onlyfiles = [f for f in listdir(mydir) if isfile(join(mydir, f))]

for file in onlyfiles:

    fd_img = open(file, 'r')
    img = Image.open(fd_img)
    img = resizeimage.resize_cover(img, [600, 400])
    img.save('test/'+file, img.format)
    fd_img.close()
