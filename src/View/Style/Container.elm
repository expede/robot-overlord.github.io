module View.Style.Container exposing (containers)

import Css exposing (..)
import Css.Elements exposing (body, li)

import View.Style.Class exposing (Class(..))
import View.Style.Color exposing (..)

type CssId = Page

containers : List Snippet
containers = [base, idPage, classNavBar]

base : Snippet
base = body
         [ overflowX auto
         , minWidth <| px 1280
         ]

idPage : Snippet
idPage = (#) Page
             [ backgroundColor <| rgb 200 128 64
             , color <| hex "CCFFFF"
             , width <| pct 100
             , height <| pct 100
             , boxSizing borderBox
             , padding <| px 8
             , margin zero
             ]

classNavBar : Snippet
classNavBar = (.) NavBar
                  [ margin zero
                  , padding zero
                  , children
                      [ li
                        [ important <| display inlineBlock
                        , color View.Style.Color.base
                        ]
                      ]
                  ]
