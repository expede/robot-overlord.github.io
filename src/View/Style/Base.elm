module View.Style.Base exposing (..)

import Css exposing (..)
import Css.Elements exposing (body, li)
import Css.Namespace exposing (namespace)

type CssClasses = NavBar

type CssIds = Page

css : Stylesheet
css =
  (stylesheet << namespace "overlord")
  [ body
      [ overflowX auto
      , minWidth <| px 1280
      ]
  , (#) Page
      [ backgroundColor <| rgb 200 128 64
      , color <| hex "CCFFFF"
      , width <| pct 100
      , height <| pct 100
      , boxSizing borderBox
      , padding <| px 8
      , margin zero
      ]
  , (.) NavBar
      [ margin zero
      , padding zero
      , children
          [ li
              [ important <| display inlineBlock
              , color primaryAccentColor
              ]
          ]
      ]
  ]

primaryAccentColor : Color
primaryAccentColor = hex "ccffaa"
