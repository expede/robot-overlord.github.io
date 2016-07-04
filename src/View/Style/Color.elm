module View.Style.Color exposing (base, neutral, highlight, accent)

import Color exposing (Color, rgb)

neutral : Color
neutral = white

base : Color
base = navy

highlight : Color
highlight = lightBlue

accent : Color
accent = pink

--------------------------------
-- Primitives: do not export! --
--------------------------------

pink : Color
pink = rgb 236 112 119

lightBlue : Color
lightBlue = rgb 102 216 213

navy : Color
navy = rgb 34 40 50

white : Color
white = rgb 255 255 255
