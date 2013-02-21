from PIL import Image, ImageDraw

# comments regarding using sprites for markers

# http://blog.mridey.com/2010/03/using-markerimage-in-maps-javascript.html
# http://stackoverflow.com/questions/6811313/scaling-marker-size-with-marker-icons-from-a-sprite-in-google-maps-api-v3
# http://jsfiddle.net/uXL7H/1/
# http://tonyle.ca/blog/?p=23
# http://books.google.co.cr/books?id=gHb8m0GSV2MC&pg=PA112&lpg=PA112&dq=google+maps+api+marker+image+sprite&source=bl&ots=8OjTc7FJWD&sig=8yOM1bk9UyqZ0Mhibjz6Me5OFxY&hl=en&sa=X&ei=_3ojUZqhFtCo0AHRtYGADA&ved=0CIIBEOgBMAk#v=onepage&q=google%20maps%20api%20marker%20image%20sprite&f=false





map_img_dir = "C:/Users/Larry/__prjs/_fx/of/Simple-Flask-and-Google-Maps-API/scripts"

mkr_width = 11
mkr_height = 11
beg_num = 1
end_num = 200
flags_per_mkr = 4

rows = (flags_per_mkr * 2) + 1 # =9

cols = end_num - beg_num + 1 # =200

# marker #1 will be in row 0 and column 1
# blank marker #0 will be row 0 column 0
# slash marker will be exception case and hard-coded to row 1 column 0

# calc size of image
img_width = mkr_width * cols # img_width =2200
img_height = mkr_height * rows # img_height =99

def rectangle(input, box, fill, outline, width):
    draw = ImageDraw.Draw(input)
    draw.rectangle(box, fill=outline) # The outer rectangle
    draw.rectangle( # The inner rectangle
        (box[0] + width, box[1] + width, box[2] - width, box[3] - width),
        fill=fill
    )

img = Image.new('RGBA', (img_width, img_height), (0, 0, 0, 0)) 
rectangle(img, (0, 0, img_width-1, img_height-1), "white", "black", 1)
img.save('sprite.png', "PNG")

 
im = Image.new('RGBA', (40, 40), (0, 0, 0, 0)) 
rectangle(im, (0, 0, 10, 10), "white", "black", 1)

im.save('test.png', "PNG")