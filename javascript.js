// Example 26-14: javascript.js

canvas               = O('logo')
context              = canvas.getContext('2d')
context.font         = 'bold 84px Georgia'
context.textBaseline = 'top'
image                = new Image()
image.src            = 'robin.gif'

image.onload = function()
{
  gradient = context.createLinearGradient(0, 0, 0, 1)
  gradient.addColorStop(0.00, '#fafafa')
  gradient.addColorStop(0.66, '#9e6868')
  context.fillStyle = gradient
  context.fillText(  "MyFace", 0, 0)
  context.strokeText("MyFace", 0, 0)
  // context.drawImage(image, 34, 32)
}

function O(i) { return typeof i == 'object' ? i : document.getElementById(i) }
function S(i) { return O(i).style                                            }
function C(i) { return document.getElementsByClassName(i)                    }
