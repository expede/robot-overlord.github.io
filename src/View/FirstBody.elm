module View.FirstBody exposing (firstBody)

import Html exposing (section, h1, p, text)
import Html.Attributes exposing (class)

firstBody : Html.Html a
firstBody =
  section [class "whatevs"]
    [ h1 [] [text "foo bar baz"]
    , p  [] [text "here is some text"]
    ]
