import numpy as np
from PIL import Image, ImageFilter
from matplotlib import pyplot as plt
from scipy.ndimage import convolve


def l2Norm(img1, img2):
    sum = 0
    for x in range(3):
        sum += (float(img1[x]) - float(img2[x])) ** 2

    return sum

def rgb2gray(rgb):
    r, g, b = rgb[:,:,0], rgb[:,:,1], rgb[:,:,2]
    gray = 0.2989 * r + 0.5870 * g + 0.1140 * b

    return gray

def pixor(img, kernel_size):

    heightIt = 0
    widthIt = 0

    newImg = []

    while ((heightIt+1)*kernel_size < len(img)):
        newRow = []
        while ((widthIt + 1) * kernel_size < len(img[0])):
            sum = np.sum(img[heightIt*kernel_size : (heightIt+1)*kernel_size,
                             widthIt*kernel_size : (widthIt+1)*kernel_size])

            flag = np.min(img[heightIt*kernel_size : (heightIt+1)*kernel_size,
                             widthIt*kernel_size : (widthIt+1)*kernel_size])

            newRow.append(int(0.9*(sum / kernel_size**2) + 0.1*flag))

            widthIt += 1
        widthIt = 0
        heightIt += 1
        newImg.append(newRow)
    print(newImg)
    return np.array(newImg)


def pixelateTree(tree):
    THRESH = 250
    with Image.open("../source/raw_img/" + tree + ".png") as im:
        imageArray = np.array(im)
        topLeft = np.copy(imageArray[5][5])
        bottomRight = np.copy(imageArray[-1][-1])
        for row in range(len(imageArray)):
            for pixel in range(len(imageArray[row])):

                if l2Norm(imageArray[row][pixel], topLeft) <= THRESH:
                    imageArray[row][pixel] = [0, 0, 0, 0]
                elif l2Norm(imageArray[row][pixel], bottomRight) <= THRESH:
                    imageArray[row][pixel] = [0, 0, 0, 0]

        leftMost = len(imageArray[0])
        rightMost = 0
        topMost = len(imageArray)
        bottomMost = 0

        for row in range(len(imageArray)):
            for pixel in range(len(imageArray[row])):

                if l2Norm(imageArray[row][pixel], [0, 0, 0, 0]) > 5 and pixel < leftMost:
                    leftMost = pixel
                if l2Norm(imageArray[row][pixel], [0, 0, 0, 0]) > 5 and pixel > rightMost:
                    rightMost = pixel
                if l2Norm(imageArray[row][pixel], [0, 0, 0, 0]) > 5 and row < topMost:
                    topMost = row
                if l2Norm(imageArray[row][pixel], [0, 0, 0, 0]) > 5 and row > bottomMost:
                    bottomMost = row

        imageArray = imageArray[topMost:bottomMost, leftMost:rightMost]


        greyScale = []
        for row in range(len(imageArray)):
            newRow = []
            for pixel in range(len(imageArray[row])):
                if l2Norm(imageArray[row][pixel], [0, 0, 0, 0]) < 5:
                    newRow.append(255)
                else:

                    newRow.append(255-int(np.mean(imageArray[row][pixel])))
            greyScale.append(newRow)



        for row in range(len(greyScale)):
            minSeen = len(greyScale)
            maxSeen = 0
            for pixel in range(len(greyScale[row])):
                if greyScale[row][pixel] != 255:
                    if minSeen > pixel:
                        minSeen = pixel
                    if maxSeen < pixel:
                        maxSeen = pixel

            for val in range(minSeen, maxSeen):
                if greyScale[row][val] == 255:
                    if np.random.randint(0,5) == 0:
                        greyScale[row][val] = np.random.randint(60,122)

        greyScale = np.array(greyScale)
        greyScale = pixor(greyScale, 4)

        kern

        imagePostLFilter = Image.fromarray(greyScale)
        plt.imshow(imagePostLFilter)
        plt.show()


pixelateTree("tree1")
pixelateTree("tree2")
