var colors = ['#E52B50','#FFBF00','#9966CC','#FBCEB1','#7FFFD4','#007FFF','#89CFF0','#F5F5DC','#CB4154','#000000','#0000FF','#0095B6','#8A2BE2','#DE5D83','#CD7F32','#964B00','#800020','#702963','#960018','#DE3163','#007BA7','#F7E7CE','#7FFF00','#7B3F00','#0047AB','#6F4E37','#B87333','#FF7F50','#DC143C','#00FFFF','#EDC9Af','#7DF9FF','#50C878','#00FF3F','#FFD700','#808080','#008000','#3FFF00','#4B0082','#FFFFF0','#00A86B','#29AB87','#B57EDC','#FFF700','#C8A2C8','#BFFF00','#FF00FF','#FF00AF','#800000','#E0B0FF','#000080','#CC7722','#808000','#FF6600','#FF4500','#DA70D6','#FFE5B4','#D1E231','#CCCCFF','#1C39BB','#FD6C9E','#8E4585','#003153','#CC8899','#800080','#E30B5C','#FF0000','#C71585','#FF007F','#E0115F','#FA8072','#92000A','#0F52BA','#FF2400','#C0C0C0','#708090','#A7FC00','#00FF7F','#D2B48C','#483C32','#008080','#40E0D0','#3F00FF','#7F00FF','#40826D','#FFFFFF','#FFFF00']
var colorName = ['Amaranth', 'Amber','Amethyst','Apricot','Aquamarine','Azure','Baby blue','Beige', 'Brick Red', 'Black', 'Blue', 'Blue-green', 'Blue-violet', 'Blush', 'Bronze', 'Brown','Burgundy', 'Byzantium', 'Carmine', 'Cerise', 'Cerulean', 'Champagne', 'Chartreuse green', 'Chocolate', 'Cobalt blue', 'Coffee', 'Copper', 'Coral', 'Crimson', 'Cyan', 'Desert sand', 'Electric blue', 'Emerald', 'Erin', 'Gold', 'Gray', 'Green', 'Harlequin', 'Indigo', 'Ivory', 'Jade', 'Jungle green', 'Lavender', 'Lemon', 'Lilac', 'Lime', 'Magenta', 'Magenta rose', 'Maroon', 'Mauve', 'Navy blue', 'Ochre', 'Olive', 'Orange', 'Orange-red', 'Orchid', 'Peach', 'Pear', 'Periwinkle', 'Persian blue', 'Pink', 'Plum', 'Prussian blue', 'Puce', 'Purple', 'Raspberry', 'Red', 'Red-violet', 'Rose', 'Ruby', 'Salmon', 'Sangria', 'Sapphire', 'Scarlet', 'Silver', 'Slate gray', 'Spring bud', 'Spring green', 'Tan', 'Taupe', 'Teal', 'Turquoise', 'Ultramarine', 'Violet', 'Viridian', 'White', 'Yellow']

 const btn = document.getElementById('btn')
const color = document.querySelector('.color')
btn.addEventListener('click',function(){
  const randomNumber = getRandomNumber();
  console.log(randomNumber)
   document.body.style.backgroundColor = colors[randomNumber];
  //  color.innerHTML = colors[randomNumber];
   color.textContent = colorName[randomNumber];

})

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length)
}






