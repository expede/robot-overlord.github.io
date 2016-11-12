module View.Style.Container exposing (containers)

import Css exposing (..)
import Css.Elements exposing (body, li)

containers : List Snippet
containers = [base]

base : Snippet
base = body
         [ overflowX auto
         , minWidth <| px 1280
         , fontFamilies ["Exo", "sans-serif"]
         , fontWeight bold
         ]
