function preload()
{
    img = loadImage('https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

}

function setup()
{
createCanvas(400, 400);
}

function draw()
{
image(img, 120, 130 ,150 ,120);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(75, 21, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(20, 21, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(85, 21, 55, 55);

    fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(130, 21, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(185, 21, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(240, 21, 55, 55);

   fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(260, 21, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(320, 85, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(320, 140, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(320, 195, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(320, 245, 55, 55);

    fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(320, 260, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(260, 320, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(240, 320, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(185, 320, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(130, 320, 55, 55);

    fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(85, 320, 55, 55);

    fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(20, 320, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(30, 320, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(20, 260, 55, 55);

fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(20, 280, 55, 55);

 fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(20, 205, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(20, 150, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(20, 95, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(20, 75, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(320, 320, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(310, 320, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(320, 310, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(320, 21, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(320, 31, 55, 55);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(300, 21, 55, 55);

    
  fill(1000, 128, 10);
  stroke(0, 128, 0);
  circle(350, 50, 70);

  fill(1000, 128, 0);
  stroke(0, 128, 0);
  circle(350, 350, 70);

  fill(1000, 128, 0);
  stroke(0, 128, 0);
  circle(50, 350, 70);

  fill(1000, 128, 0);
  stroke(0, 128, 0);
  circle(50, 50, 70);
}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}

