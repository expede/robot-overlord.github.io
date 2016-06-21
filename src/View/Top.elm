module View.Top exposing (top)

import Html exposing (body, section, h1, h2, text)
import Html.Attributes exposing (class)

top : Html.Html a
top = section [class "logo"]
        [ h1 [] [text "Robot Overlord Software Inc."]
        , h2 [] [text "Computing with humanity"]
        ]
