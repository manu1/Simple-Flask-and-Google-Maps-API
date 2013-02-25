from PIL import Image, ImageDraw, ImageFont

# comments regarding using sprites for markers

# http://blog.mridey.com/2010/03/using-markerimage-in-maps-javascript.html
# http://stackoverflow.com/questions/6811313/scaling-marker-size-with-marker-icons-from-a-sprite-in-google-maps-api-v3
# http://jsfiddle.net/uXL7H/1/
# http://tonyle.ca/blog/?p=23
# http://books.google.co.cr/books?id=gHb8m0GSV2MC&pg=PA112&lpg=PA112&dq=google+maps+api+marker+image+sprite&source=bl&ots=8OjTc7FJWD&sig=8yOM1bk9UyqZ0Mhibjz6Me5OFxY&hl=en&sa=X&ei=_3ojUZqhFtCo0AHRtYGADA&ved=0CIIBEOgBMAk#v=onepage&q=google%20maps%20api%20marker%20image%20sprite&f=false


def rectangle(input, box, fill, outline, width):
    draw = ImageDraw.Draw(input)
    draw.rectangle(box, fill=outline) # The outer rectangle
    draw.rectangle( # The inner rectangle
        (box[0] + width, box[1] + width, box[2] - width, box[3] - width),
        fill=fill
    )

def draw_top_left_corner(draw, tlX, tlY, corner_offset = 5, fill = "black"):
    draw.line((tlX, tlY + corner_offset, tlX + corner_offset, tlY), fill=fill)        
    draw.line((tlX, tlY + corner_offset + 1, tlX + corner_offset + 1, tlY), fill=fill) 
    
def draw_top_right_corner(draw, trX, trY, corner_offset = 5, fill = "black"):   
    draw.line((trX - corner_offset, trY, trX, trY + corner_offset), fill=fill)        
    draw.line((trX - corner_offset + 1, trY, trX, trY + corner_offset + 1), fill=fill)  
    
def draw_bottom_right_corner(draw, brX, brY, corner_offset = 5, fill = "black"):   
    draw.line((brX - corner_offset, brY, brX, brY - corner_offset), fill=fill)        
    draw.line((brX - corner_offset + 1, brY, brX, brY - corner_offset + 1), fill=fill)        
    
def draw_bottom_left_corner(draw, blX, blY, corner_offset = 5, fill = "black"):      
    draw.line((blX, blY - corner_offset, blX + corner_offset, blY), fill=fill)        
    draw.line((blX, blY - corner_offset + 1, blX + corner_offset + 1, blY), fill=fill)  

def sprites_offset(col):
    if col < 10:
        return 0
    elif col < 100:
        return 1
    else:
        return 2

img_map_sprites_dir = "../static/img/map/sprites/"

font = ImageFont.truetype(
    'C:/Windows/Fonts/arial.ttf', 9
)

num_height = 10 # careful with font size param. 8 goes with size=7
flags_per_mkr = 7
mkr_height = 14
num_top_margin = 1
num_left_margin = 3



sprites = []

# 1 - 9
sprite = {}
sprite['filename'] = img_map_sprites_dir + 'sprite_1.png'
sprite['mkr_width'] = 12
sprite['beg_num'] = 1
sprite['end_num'] = 9
sprites.append(sprite)

# 10 - 99
sprite = {}
sprite['filename'] = img_map_sprites_dir + 'sprite_2.png'
sprite['mkr_width'] = 16
sprite['beg_num'] = 10
sprite['end_num'] = 99
sprites.append(sprite)

# 100 - 200
sprite = {}
sprite['filename'] = img_map_sprites_dir + 'sprite_3.png'
sprite['mkr_width'] = 20
sprite['beg_num'] = 100
sprite['end_num'] = 200
sprites.append(sprite)

# initialize sprite images
for i, sprite in enumerate(sprites):
    
    mkr_width = sprite['mkr_width']
    beg_num = sprite['beg_num']
    end_num = sprite['end_num']
    
    rows = flags_per_mkr + 3 
    cols = end_num - beg_num + 2
    
    # calc size of image
    img_width = mkr_width * cols # img_width =2200
    img_height = mkr_height * rows # img_height =99
    
    img = Image.new('RGB', (img_width, img_height)) 
    
    # first row blank numbers, then 
    rectangle(img, (0, 0, img_width - 1, img_height - (mkr_height * 2) - 1), "white", "black", 0)
    
    # second to last row Foreign Language
    rectangle(img, (0, img_height - (mkr_height * 2) - 1, img_width - 1, img_height - mkr_height - 1), "grey", "white", 0)
    
    # last row Do Not Call
    rectangle(img, (0, img_height - mkr_height - 1, img_width - 1, img_height - 1), "black", "white", 0)
    
    sprites[i]['draw'] = ImageDraw.Draw(img) 
    sprites[i]['img'] = img 
    
    
    #for r in range(0,rows+1):
        #draw.line((0, r * mkr_height, img_width, r * mkr_height), fill="black")
    
    #for c in range(0,cols+1):
        #draw.line((c * mkr_width, 0, c * mkr_width, img_height), fill="black")
    
    
    # draw numbers
    for row in range(0,rows+1):
        fill = "black" if row < rows - 1 else "white"
        for col in range(beg_num, end_num+1):
            draw = sprite['draw']
            text = str(col)
            text_width, h = draw.textsize(text, font)   
            num_left_margin = (mkr_width / 2) - (text_width/2)
            num_top_margin  = (mkr_height / 2) - (num_height/2) + 1
            draw.text((((col - beg_num) * mkr_width) + num_left_margin, (row * mkr_height) + num_top_margin), text, font=font, fill=fill)
    
    # draw corners
    for row in range(rows+1):
        for col in range(beg_num, end_num + 1):
            tlX = (col - beg_num) * mkr_width
            tlY = row * mkr_height
            
            trX = tlX + mkr_width
            if trX: trX -= 1
            
            trY = tlY
    
            blX = (col - beg_num) * mkr_width
            
            blY = (row * mkr_height) + mkr_height
            if blY: blY -= 1
            
            brX = blX + mkr_width
            if brX: brX -= 1
            
            brY = blY
            
            draw = sprite['draw']   
            
            if row == 1:
                draw_top_left_corner(draw, tlX, tlY)
            elif row == 2:
                draw_top_left_corner(draw, tlX, tlY)
                draw_bottom_left_corner(draw, blX, blY)
            elif row == 3:
                draw_top_left_corner(draw, tlX, tlY)
                draw_top_right_corner(draw, trX, trY)
            elif row == 4:
                draw_top_left_corner(draw, tlX, tlY)
                draw_top_right_corner(draw, trX, trY)
                draw_bottom_left_corner(draw, blX, blY)
            elif row == 5:
                draw_top_left_corner(draw, tlX, tlY)
                draw_top_right_corner(draw, trX, trY)
                draw_bottom_right_corner(draw, brX, brY)
            elif row == 6:
                draw_top_left_corner(draw, tlX, tlY)
                draw_top_right_corner(draw, trX, trY)
                draw_bottom_right_corner(draw, brX, brY)
            elif row == 7:
                draw_top_left_corner(draw, tlX, tlY)
                draw_top_right_corner(draw, trX, trY)
                draw_bottom_right_corner(draw, brX, brY)
                draw_bottom_left_corner(draw, blX, blY)
                

# save sprite images
for i, sprite in enumerate(sprites):
    sprite['img'].save(sprite['filename'], "PNG")
    
    
    
#sprites[0]['img'].show()
sprites[1]['img'].show()
#sprites[2]['img'].show()

