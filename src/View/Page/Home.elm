module View.Page.Home exposing (homePage)

import Html exposing
  ( Html
  , section, header
  , h1, p, a
  , text
  , figure
  )

import Html.Attributes exposing (href)

import View.Asset exposing (logo)
import View.Style.Id exposing (Id(..), id)
import View.Style.Class exposing (Class(..), class)

homePage : Html a
homePage =
  section
      [ id    [ GlobalHeader ]
      , class [ TrueCenter ]
      ]
      [ header []
          [ figure [class [Logo]] [logo]
          , h1 [] [text "Robot Overlord"]
          , a [href "mailto:beep@robotoverlord.io"] [text "beep@robotoverlord.io"]
          ]
      ]
