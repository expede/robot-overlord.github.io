module View.Component.Foot exposing (foot)

import Html exposing (Html, footer, h1, p, text, img)
import View.Style.Id exposing (Id(..), id)

foot : Html a
foot =
  footer [ id [ GlobalFooter ] ]
    [ p [] [ text "©2016 Robot Overlord Software Inc." ] ]
