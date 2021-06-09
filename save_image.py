
import requests  # to get image from the web
import shutil  # to save it locally

urls = ["https://contentstack-images.cnc.blzstatic.cn/v3/assets/blte0bbc3c063f45866/bltb6c25f13c7ad6958/5dfabe4cdc2ac60d1dd16154/wow.png",
        "https://contentstack-images.cnc.blzstatic.cn/v3/assets/blte0bbc3c063f45866/blt6e5661c4303acefd/5dfabe3ddde3f37e686838d1/ow.png",
        "https://contentstack-images.cnc.blzstatic.cn/v3/assets/blte0bbc3c063f45866/blt0718f7fb791f5eb9/5dfabc4e8691147ecf07d34f/hs.png",
        "https://contentstack-images.cnc.blzstatic.cn/v3/assets/blte0bbc3c063f45866/blt62e5b19df7ede8b0/5dfabe4ca1690a59bc5f1233/d3.png",
        "https://contentstack-images.cnc.blzstatic.cn/v3/assets/blte0bbc3c063f45866/blt267265a051452117/5dfabe3d174b0d0c519bd191/heroes.png",
        "https://contentstack-images.cnc.blzstatic.cn/v3/assets/blte0bbc3c063f45866/bltdaf2d54f112b3439/5dfabe3d0e91e25a1c54a7f3/sc2.png",
        "https://contentstack-images.cnc.blzstatic.cn/v3/assets/blte0bbc3c063f45866/bltdfb4d16d5ec3e993/5e2b32aeb8a6493cb7bd4520/J6RCQTX7P4GS1560190298358.png",
        "https://contentstack-images.cnc.blzstatic.cn/v3/assets/blte0bbc3c063f45866/blte2e2ba9c66eab84a/5dfabe3da1690a59bc5f122d/sca.png",
        "https://contentstack-images.cnc.blzstatic.cn/v3/assets/blte0bbc3c063f45866/blt0a68aed71251de62/605b5ed135bb4d0cbd9bf7e7/desktop-app.png",
        "https://contentstack-images.cnc.blzstatic.cn/v3/assets/blte0bbc3c063f45866/bltb6c25f13c7ad6958/5dfabe4cdc2ac60d1dd16154/wow.png",
        "https://contentstack-images.cnc.blzstatic.cn/v3/assets/blte0bbc3c063f45866/blt6e5661c4303acefd/5dfabe3ddde3f37e686838d1/ow.png",
        "https://contentstack-images.cnc.blzstatic.cn/v3/assets/blte0bbc3c063f45866/blt0718f7fb791f5eb9/5dfabc4e8691147ecf07d34f/hs.png",
        "https://contentstack-images.cnc.blzstatic.cn/v3/assets/blte0bbc3c063f45866/blt62e5b19df7ede8b0/5dfabe4ca1690a59bc5f1233/d3.png",
        "https://contentstack-images.cnc.blzstatic.cn/v3/assets/blte0bbc3c063f45866/blt267265a051452117/5dfabe3d174b0d0c519bd191/heroes.png",
        "https://contentstack-images.cnc.blzstatic.cn/v3/assets/blte0bbc3c063f45866/bltdaf2d54f112b3439/5dfabe3d0e91e25a1c54a7f3/sc2.png",
        "https://contentstack-images.cnc.blzstatic.cn/v3/assets/blte0bbc3c063f45866/bltdfb4d16d5ec3e993/5e2b32aeb8a6493cb7bd4520/J6RCQTX7P4GS1560190298358.png",
        "https://contentstack-images.cnc.blzstatic.cn/v3/assets/blte0bbc3c063f45866/blte2e2ba9c66eab84a/5dfabe3da1690a59bc5f122d/sca.png",
        "https://contentstack-images.cnc.blzstatic.cn/v3/assets/blte0bbc3c063f45866/blt0a68aed71251de62/605b5ed135bb4d0cbd9bf7e7/desktop-app.png", ]


def save_image(image_url):
    filename = image_url.split("/")[-1]

    # Open the url image, set stream to True, this will return the stream content.
    r = requests.get(image_url, stream=True)

    # Check if the image was retrieved successfully
    if r.status_code == 200:
        # Set decode_content value to True, otherwise the downloaded image file's size will be zero.
        # r.raw.decode_content = True

        # Open a local file with wb ( write binary ) permission.
        with open(filename, 'wb') as f:
            shutil.copyfileobj(r.raw, f)

        print('Image sucessfully Downloaded: ', filename)
    else:
        print('Image Couldn\'t be retreived')


for i in urls:
    save_image(i)
